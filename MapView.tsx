import React, { useState, useEffect, useRef, type FC } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

// --- Google Maps Type Declarations ---
// This is necessary because the script is loaded dynamically and TypeScript
// isn't aware of the `google` global object otherwise.
declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google.maps {
  class Map {
    constructor(mapDiv: Element, opts?: any);
    setCenter(latLng: LatLng | any): void;
    setZoom(zoom: number): void;
    getCenter(): LatLng;
    fitBounds(bounds: LatLngBounds | any): void;
  }
  class Marker {
    constructor(opts?: any);
    setMap(map: Map | null): void;
    addListener(eventName: string, handler: Function): MapsEventListener;
  }
  interface MapsEventListener {
    remove(): void;
  }
  class InfoWindow {
    constructor(opts?: any);
    setContent(content: string | Element): void;
    open(map: Map | any, anchor?: any): void;
    close(): void;
    addListener(eventName: string, handler: Function): MapsEventListener;
  }
  class LatLng {
    constructor(lat: number, lng: number);
  }
  class LatLngBounds {
    constructor(sw?: LatLng, ne?: LatLng);
    extend(point: LatLng | any): void;
  }
  enum Animation {
    DROP,
  }
  namespace places {
    class PlacesService {
      constructor(attrContainer: HTMLDivElement | Map);
      textSearch(
        request: TextSearchRequest,
        callback: (results: PlaceResult[] | null, status: PlacesServiceStatus) => void
      ): void;
    }
    class Autocomplete {
      constructor(inputField: HTMLInputElement, opts?: any);
      getPlace(): PlaceResult;
      addListener(eventName: string, handler: Function): MapsEventListener;
    }
    interface TextSearchRequest {
      location?: LatLng;
      radius?: number;
      query: string;
    }
    enum PlacesServiceStatus {
      OK = 'OK',
    }
    interface PlaceResult {
      geometry?: { location: LatLng };
      name?: string;
      formatted_address?: string;
      website?: string;
      place_id?: string;
    }
  }
}

// --- Component Props ---
interface MapViewProps {
  onStartAudit: (business: { name: string; website?: string }) => void;
}

// --- Constants ---
// Using the API key from environment variables, with fallback
const MAPS_API_KEY =
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyAylaaHTNErQ5xi0wXs0IHtTPunSKOvAHg';

// --- Helper Components ---

const MapLoaderFC: FC = () => (
  <div className="map-loader">
    <div className="loading-spinner"></div>
  </div>
);

const MapError: FC<{ message: string }> = ({ message }) => (
  <div className="map-error-overlay">
    <p>{message}</p>
  </div>
);

// --- Main Map View Component ---

export const MapView: FC<MapViewProps> = ({ onStartAudit }) => {
    const [isApiReady, setIsApiReady] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true); // Start with loading true
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const [isHistoryVisible, setHistoryVisible] = useState(false);
    
    const mapRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const mapInstance = useRef<google.maps.Map | null>(null);
    const placesService = useRef<google.maps.places.PlacesService | null>(null);
    const infoWindow = useRef<google.maps.InfoWindow | null>(null);
    const markers = useRef<google.maps.Marker[]>([]);
    
    const HISTORY_KEY = 'smartlocal-map-search-history';
    const MAX_HISTORY_ITEMS = 10;

    useEffect(() => {
        try {
            const storedHistory = localStorage.getItem(HISTORY_KEY);
            if (storedHistory) {
                setSearchHistory(JSON.parse(storedHistory));
            }
        } catch (e) {
            console.error("Failed to parse search history from localStorage", e);
        }
    }, []);

    useEffect(() => {
        const loader = new Loader({
            apiKey: MAPS_API_KEY,
            version: "weekly",
            libraries: ["places", "marker"],
        });
        
        loader.load()
            .then(google => {
                setIsApiReady(true);
                initMap(google);
            })
            .catch(e => {
                console.error("Failed to load Google Maps script:", e);
                setError("Failed to load Google Maps. Please check that the API key is correct and has the 'Maps JavaScript API' and 'Places API' enabled.");
            })
            .finally(() => {
                 setLoading(false);
            });
    }, []);

    const updateSearchHistory = (query: string) => {
        if (!query || !query.trim()) return;
        const trimmedQuery = query.trim();

        const newHistory = [
            trimmedQuery,
            ...searchHistory.filter(item => item.toLowerCase() !== trimmedQuery.toLowerCase())
        ].slice(0, MAX_HISTORY_ITEMS);

        setSearchHistory(newHistory);
        
        try {
            localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
        } catch (e) {
            console.error("Failed to save search history to localStorage", e);
        }
    };

    const initMap = (google: typeof window.google) => {
        if (!mapRef.current || !searchInputRef.current) return;

        mapInstance.current = new google.maps.Map(mapRef.current, {
            center: { lat: 34.0522, lng: -118.2437 }, // Default to Los Angeles
            zoom: 12,
            mapId: 'SMART_LOCAL_AI_MAP',
        });
        placesService.current = new google.maps.places.PlacesService(mapInstance.current);
        infoWindow.current = new google.maps.InfoWindow();

        const autocomplete = new google.maps.places.Autocomplete(searchInputRef.current, {
             fields: ["geometry", "name"],
        });
        
        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            const query = searchInputRef.current?.value || place.name || "";
            if (place.geometry && place.geometry.location) {
                mapInstance.current?.setCenter(place.geometry.location);
                mapInstance.current?.setZoom(14);
            }
            performSearch({ query });
        });
        
        infoWindow.current.addListener('domready', () => {
            const container = document.querySelector('.map-infowindow-content');
            if (!container || container.classList.contains('click-handler-attached')) {
                return;
            }

            container.classList.add('click-handler-attached');
            container.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;

                const auditButton = target.closest('.btn-start-audit');
                if (auditButton) {
                    const name = auditButton.getAttribute('data-name');
                    const website = auditButton.getAttribute('data-website');
                    if (name) {
                        onStartAudit({ 
                            name: decodeURIComponent(name), 
                            website: website ? decodeURIComponent(website) : undefined 
                        });
                        infoWindow.current?.close();
                    }
                    return;
                }
            });
        });
    };
    
    const performSearch = (request: google.maps.places.TextSearchRequest) => {
        if (!placesService.current || !request.query.trim()) return;
        
        updateSearchHistory(request.query);
        setHistoryVisible(false);
        if (searchInputRef.current) {
            searchInputRef.current.blur(); // Dismiss keyboard on mobile
        }

        if (!request.location) {
            request.location = mapInstance.current!.getCenter()!;
        }
        
        setLoading(true);
        placesService.current.textSearch(request, (results, status) => {
             setLoading(false);
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                createMarkers(results);
            } else {
                console.warn("Places search failed with status:", status);
            }
        });
    };

    const handleHistoryClick = (query: string) => {
        if (searchInputRef.current) {
            searchInputRef.current.value = query;
            performSearch({ query });
        }
    };
    
    const createMarkers = (places: google.maps.places.PlaceResult[]) => {
        markers.current.forEach(marker => marker.setMap(null));
        markers.current = [];
        
        const bounds = new google.maps.LatLngBounds();
  const createMarkers = (places: google.maps.places.PlaceResult[]) => {
        markers.current.forEach(marker => marker.setMap(null));
        markers.current = [];
        
        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location || !place.name) return;

            const marker = new google.maps.Marker({
                map: mapInstance.current,
                position: place.geometry.location,
                title: place.name,
                animation: google.maps.Animation.DROP,
                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
            });

            marker.addListener('click', () => {
                if (!infoWindow.current) return;

                const website = place.website ?? '';
                const encodedName = encodeURIComponent(place.name!);
                const encodedWebsite = encodeURIComponent(website);

                const content = `
                    <div class="map-infowindow-content">
                        <h4>${place.name}</h4>
                        <p>${place.formatted_address || ''}</p>
                        <div class="map-infowindow-buttons" style="margin-top: 1rem;">
                            <button class="btn btn-primary btn-start-audit" data-name="${encodedName}" data-website="${encodedWebsite}">Start an audit</button>
                        </div>
                    </div>
                `;
                infoWindow.current.setContent(content);
                infoWindow.current.open(mapInstance.current, marker);
            });

            markers.current.push(marker);
            bounds.extend(place.geometry.location);
        });

        if (mapInstance.current && markers.current.length > 0) {
            mapInstance.current.fitBounds(bounds);
        }
    };

  const initMap = (google: typeof window.google) => {
    if (!mapRef.current || !searchInputRef.current) return;

    mapInstance.current = new google.maps.Map(mapRef.current, {
      center: { lat: 34.0522, lng: -118.2437 }, // Default to Los Angeles
      zoom: 12,
      mapId: 'SMART_LOCAL_AI_MAP',
    });
    placesService.current = new google.maps.places.PlacesService(mapInstance.current);
    infoWindow.current = new google.maps.InfoWindow();

    const autocomplete = new google.maps.places.Autocomplete(searchInputRef.current, {
      fields: ['geometry', 'name', 'website'],
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        mapInstance.current?.setCenter(place.geometry.location);
        mapInstance.current?.setZoom(14);
        performSearch({ query: searchInputRef.current?.value || place.name || '' });
      } else {
        performSearch({ query: searchInputRef.current!.value });
      }
    });

    infoWindow.current.addListener('domready', () => {
      const container = document.querySelector('.map-infowindow-content');
      if (!container || container.classList.contains('click-handler-attached')) {
        return;
      }

      container.classList.add('click-handler-attached');
      container.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        const auditButton = target.closest('.btn-start-audit');
        if (auditButton) {
          const name = auditButton.getAttribute('data-name');
          const website = auditButton.getAttribute('data-website');
          if (name) {
            onStartAudit({
              name: decodeURIComponent(name),
              website: website ? decodeURIComponent(website) : undefined,
            });
            infoWindow.current?.close();
          }
          return;
        }
      });
    });
  };

  const performSearch = (request: google.maps.places.TextSearchRequest) => {
    if (!placesService.current) return;
    if (!request.location) {
      request.location = mapInstance.current!.getCenter()!;
    }

    setLoading(true);
    placesService.current.textSearch(request, (results, status) => {
      setLoading(false);
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        createMarkers(results);
      } else {
        console.warn('Places search failed with status:', status);
      }
    });
  };

  const createMarkers = (places: google.maps.places.PlaceResult[]) => {
    markers.current.forEach((marker) => marker.setMap(null));
    markers.current = [];

    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location || !place.name) return;

      const marker = new google.maps.Marker({
        map: mapInstance.current,
        position: place.geometry.location,
        title: place.name,
        animation: google.maps.Animation.DROP,
        icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
      });

      marker.addListener('click', () => {
        if (!infoWindow.current) return;

        const website = place.website ?? '';
        const encodedName = encodeURIComponent(place.name!);
        const encodedWebsite = encodeURIComponent(website);

        const content = `
                    <div class="map-infowindow-content">
                        <h4>${place.name}</h4>
                        <p>${place.formatted_address || ''}</p>
                        <div class="map-infowindow-buttons" style="margin-top: 1rem;">
                            <button class="btn btn-primary btn-start-audit" data-name="${encodedName}" data-website="${encodedWebsite}">Start an audit</button>
                        </div>
                    </div>
                `;
        infoWindow.current.setContent(content);
        infoWindow.current.open(mapInstance.current, marker);
      });

    return (
        <div className="map-view-wrapper">
            {error && <MapError message={error} />}
            {loading && <MapLoaderFC />}
            <div className="map-search-container">
                <input
                    ref={searchInputRef}
                    type="text"
                    className="map-search-input"
                    placeholder="Search for a business or location"
                    disabled={!isApiReady}
                    onFocus={() => setHistoryVisible(true)}
                    onBlur={() => {
                        // Delay hiding to allow clicks on history items
                        setTimeout(() => setHistoryVisible(false), 200);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && searchInputRef.current) {
                            performSearch({ query: searchInputRef.current.value });
                        }
                    }}
                    autoComplete="off"
                />
                {isHistoryVisible && searchHistory.length > 0 && (
                    <div className="search-history-dropdown">
                        {searchHistory.map((item, index) => (
                            <div
                                key={`${item}-${index}`}
                                className="search-history-item"
                                // Use onMouseDown to trigger before the input's onBlur
                                onMouseDown={() => handleHistoryClick(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div ref={mapRef} className="map-container"></div>
        </div>
    );
};
