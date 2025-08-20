/**
 * Google Maps and Places API Integration Template
 * 
 * This module provides a template for integrating Google Maps JavaScript API
 * and Google Places API into the SMART-LOCAL-AI application.
 * 
 * @author SMART-LOCAL-AI
 * @version 1.0.0
 */

// Import the Google Maps API key from environment variables
// Make sure to set GOOGLE_MAPS_API_KEY in your .env.local file
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || '';

// Check if API key is configured
if (!GOOGLE_MAPS_API_KEY) {
  console.warn('Google Maps API key not found. Please set GOOGLE_MAPS_API_KEY in your environment variables.');
}

/**
 * Interface for Google Maps configuration options
 */
interface MapConfig {
  center: { lat: number; lng: number };
  zoom: number;
  mapTypeId?: string;
  styles?: google.maps.MapTypeStyle[];
}

/**
 * Interface for place search options
 */
interface PlaceSearchOptions {
  location: google.maps.LatLng;
  radius: number;
  type?: string;
  keyword?: string;
}

/**
 * Interface for place details
 */
interface PlaceDetails {
  place_id: string;
  name: string;
  formatted_address: string;
  rating?: number;
  phone_number?: string;
  website?: string;
  opening_hours?: google.maps.places.OpeningHours;
  geometry: google.maps.places.PlaceGeometry;
}

/**
 * GoogleMapsService class for handling Maps and Places API interactions
 */
export class GoogleMapsService {
  private map: google.maps.Map | null = null;
  private placesService: google.maps.places.PlacesService | null = null;
  private geocoder: google.maps.Geocoder;

  constructor() {
    this.geocoder = new google.maps.Geocoder();
  }

  /**
   * Initialize Google Maps with the provided configuration
   * @param containerId - The ID of the HTML element to contain the map
   * @param config - Map configuration options
   */
  public async initializeMap(containerId: string, config: MapConfig): Promise<void> {
    try {
      // Ensure Google Maps API is loaded
      await this.loadGoogleMapsAPI();

      const container = document.getElementById(containerId);
      if (!container) {
        throw new Error(`Container with ID '${containerId}' not found`);
      }

      // Create map instance
      this.map = new google.maps.Map(container, {
        center: config.center,
        zoom: config.zoom,
        mapTypeId: config.mapTypeId || google.maps.MapTypeId.ROADMAP,
        styles: config.styles || []
      });

      // Initialize Places service
      this.placesService = new google.maps.places.PlacesService(this.map);

      console.log('Google Maps initialized successfully');
    } catch (error) {
      console.error('Error initializing Google Maps:', error);
      throw error;
    }
  }

  /**
   * Load Google Maps JavaScript API dynamically
   */
  private async loadGoogleMapsAPI(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if Google Maps is already loaded
      if (typeof google !== 'undefined' && google.maps) {
        resolve();
        return;
      }

      // Create script tag
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;

      // Set up callback
      (window as any).initMap = () => {
        resolve();
      };

      script.onerror = () => {
        reject(new Error('Failed to load Google Maps API'));
      };

      document.head.appendChild(script);
    });
  }

  /**
   * Search for nearby places using Places API
   * @param options - Search options including location, radius, and type
   */
  public async searchNearbyPlaces(options: PlaceSearchOptions): Promise<google.maps.places.PlaceResult[]> {
    return new Promise((resolve, reject) => {
      if (!this.placesService) {
        reject(new Error('Places service not initialized. Call initializeMap first.'));
        return;
      }

      const request: google.maps.places.PlaceSearchRequest = {
        location: options.location,
        radius: options.radius,
        type: options.type,
        keyword: options.keyword
      };

      this.placesService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          resolve(results);
        } else {
          reject(new Error(`Places search failed with status: ${status}`));
        }
      });
    });
  }

  /**
   * Get detailed information about a specific place
   * @param placeId - The place ID to get details for
   */
  public async getPlaceDetails(placeId: string): Promise<google.maps.places.PlaceResult> {
    return new Promise((resolve, reject) => {
      if (!this.placesService) {
        reject(new Error('Places service not initialized. Call initializeMap first.'));
        return;
      }

      const request: google.maps.places.PlaceDetailsRequest = {
        placeId: placeId,
        fields: [
          'name',
          'formatted_address',
          'rating',
          'formatted_phone_number',
          'website',
          'opening_hours',
          'geometry',
          'photos',
          'reviews'
        ]
      };

      this.placesService.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && place) {
          resolve(place);
        } else {
          reject(new Error(`Place details request failed with status: ${status}`));
        }
      });
    });
  }

  /**
   * Geocode an address to get coordinates
   * @param address - The address to geocode
   */
  public async geocodeAddress(address: string): Promise<google.maps.GeocoderResult[]> {
    return new Promise((resolve, reject) => {
      this.geocoder.geocode({ address: address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results) {
          resolve(results);
        } else {
          reject(new Error(`Geocoding failed with status: ${status}`));
        }
      });
    });
  }

  /**
   * Add a marker to the map
   * @param position - The position for the marker
   * @param title - Optional title for the marker
   * @param icon - Optional custom icon for the marker
   */
  public addMarker(
    position: google.maps.LatLng | google.maps.LatLngLiteral,
    title?: string,
    icon?: string | google.maps.Icon | google.maps.Symbol
  ): google.maps.Marker | null {
    if (!this.map) {
      console.error('Map not initialized. Call initializeMap first.');
      return null;
    }

    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      title: title,
      icon: icon
    });

    return marker;
  }

  /**
   * Add an info window to a marker
   * @param marker - The marker to attach the info window to
   * @param content - The content to display in the info window
   */
  public addInfoWindow(marker: google.maps.Marker, content: string): google.maps.InfoWindow {
    const infoWindow = new google.maps.InfoWindow({
      content: content
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });

    return infoWindow;
  }

  /**
   * Get the current map instance
   */
  public getMap(): google.maps.Map | null {
    return this.map;
  }

  /**
   * Get the current places service instance
   */
  public getPlacesService(): google.maps.places.PlacesService | null {
    return this.placesService;
  }
}

/**
 * Utility functions for common map operations
 */
export class MapUtils {
  /**
   * Calculate distance between two coordinates using Haversine formula
   * @param lat1 - Latitude of first point
   * @param lng1 - Longitude of first point
   * @param lat2 - Latitude of second point
   * @param lng2 - Longitude of second point
   * @returns Distance in kilometers
   */
  static calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = this.toRadians(lat2 - lat1);
    const dLng = this.toRadians(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  /**
   * Convert degrees to radians
   * @param degrees - Angle in degrees
   * @returns Angle in radians
   */
  private static toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  /**
   * Format place data for display
   * @param place - Google Places result
   * @returns Formatted place information
   */
  static formatPlaceInfo(place: google.maps.places.PlaceResult): PlaceDetails {
    return {
      place_id: place.place_id || '',
      name: place.name || 'Unknown',
      formatted_address: place.formatted_address || '',
      rating: place.rating,
      phone_number: place.formatted_phone_number,
      website: place.website,
      opening_hours: place.opening_hours,
      geometry: place.geometry!
    };
  }
}

/**
 * Example usage:
 * 
 * // Initialize the service
 * const mapsService = new GoogleMapsService();
 * 
 * // Initialize map
 * await mapsService.initializeMap('map-container', {
 *   center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
 *   zoom: 12
 * });
 * 
 * // Search for nearby restaurants
 * const restaurants = await mapsService.searchNearbyPlaces({
 *   location: new google.maps.LatLng(37.7749, -122.4194),
 *   radius: 1000,
 *   type: 'restaurant'
 * });
 * 
 * // Add markers for each restaurant
 * restaurants.forEach(restaurant => {
 *   if (restaurant.geometry?.location) {
 *     const marker = mapsService.addMarker(
 *       restaurant.geometry.location,
 *       restaurant.name
 *     );
 *     if (marker) {
 *       mapsService.addInfoWindow(marker, `
 *         <div>
 *           <h3>${restaurant.name}</h3>
 *           <p>${restaurant.formatted_address}</p>
 *           <p>Rating: ${restaurant.rating || 'N/A'}</p>
 *         </div>
 *       `);
 *     }
 *   }
 * });
 */

// Export the service as default
export default GoogleMapsService;
