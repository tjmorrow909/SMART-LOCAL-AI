import React, { useState, useEffect, useRef, type FC, useCallback } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { mapStyles } from './src/mapStyles';

// --- Component Props ---
interface MapViewProps {
  onStartAudit: (business: { name: string; website?: string }) => void;
}

// --- Constants ---
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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
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

  const updateSearchHistory = useCallback((query: string) => {
    if (!query || !query.trim()) return;
    const trimmedQuery = query.trim();

    const newHistory = [
      trimmedQuery,
      ...searchHistory.filter((item) => item.toLowerCase() !== trimmedQuery.toLowerCase()),
    ].slice(0, MAX_HISTORY_ITEMS);

    setSearchHistory(newHistory);

    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    } catch (e) {
      console.error('Failed to save search history to localStorage', e);
    }
  }, [searchHistory]);

  const createMarkers = useCallback((places: google.maps.places.PlaceResult[]) => {
    markers.current.forEach((marker) => marker.setMap(null));
    markers.current = [];

    const bounds = new window.google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location || !place.name) return;

      const marker = new window.google.maps.Marker({
        map: mapInstance.current,
        position: place.geometry.location,
        title: place.name,
        animation: window.google.maps.Animation.DROP,
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
  }, []);



  const performSearch = useCallback((request: google.maps.places.TextSearchRequest) => {
    if (!placesService.current) return;

    setLoading(true);
    placesService.current.textSearch(request, (results, status) => {
      setLoading(false);
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        createMarkers(results);
      } else {
        console.warn('Places search failed with status:', status);
      }
    });
  }, [createMarkers]);

  const initMap = useCallback((google: typeof window.google) => {
    if (!mapRef.current || !searchInputRef.current) return;

    mapInstance.current = new google.maps.Map(mapRef.current, {
      center: { lat: 34.0522, lng: -118.2437 }, // Default to Los Angeles
      zoom: 12,
      mapId: 'SMART_LOCAL_AI_MAP',
      styles: mapStyles,
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
        mapInstance.current?.setZoom(15);

        if (place.name) {
          updateSearchHistory(place.name);
          performSearch({
            location: place.geometry.location,
            radius: 2000,
            query: place.name,
          });
        }
      }
    });

    infoWindow.current.addListener('domready', () => {
      const startAuditButtons = document.querySelectorAll('.btn-start-audit');
      startAuditButtons.forEach((button) => {
        const htmlButton = button as HTMLButtonElement;
        htmlButton.addEventListener('click', () => {
          const name = decodeURIComponent(htmlButton.getAttribute('data-name') || '');
          const website = decodeURIComponent(htmlButton.getAttribute('data-website') || '');
          onStartAudit({ name, website: website || undefined });
        });
      });
    });
  }, [onStartAudit, performSearch, updateSearchHistory]);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(HISTORY_KEY);
      if (storedHistory) {
        setSearchHistory(JSON.parse(storedHistory));
      }
    } catch (e) {
      console.error('Failed to parse search history from localStorage', e);
    }
  }, []);

  useEffect(() => {
    const loader = new Loader({
      apiKey: MAPS_API_KEY,
      version: 'weekly',
      libraries: ['places', 'marker'],
    });

    loader
      .load()
      .then((google) => {
        initMap(google);
      })
      .catch((e) => {
        console.error('Failed to load Google Maps script:', e);
        setError(
          "Failed to load Google Maps. Please check that the API key is correct and has the 'Maps JavaScript API' and 'Places API' enabled."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [initMap]);

  const handleSearchFocus = () => {
    if (searchHistory.length > 0) {
      setHistoryVisible(true);
    }
  };

  const handleSearchBlur = () => {
    setTimeout(() => setHistoryVisible(false), 150);
  };

  const handleHistoryClick = (query: string) => {
    if (searchInputRef.current) {
      searchInputRef.current.value = query;
      performSearch({ query });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchInputRef.current?.value?.trim();
    if (!query) return;

    updateSearchHistory(query);
    setHistoryVisible(false);

    const center = mapInstance.current?.getCenter() || new window.google.maps.LatLng(34.0522, -118.2437);

    performSearch({
      location: center,
      radius: 10000, // 10km radius
      query,
    });
  };

  if (error) {
    return <MapError message={error} />;
  }

  return (
    <div className="map-view">
      {loading && <MapLoaderFC />}
      <div className="map-search-container">
        <form onSubmit={handleSearch} className="map-search-form">
          <input
            ref={searchInputRef}
            type="text"
            className="map-search-input"
            placeholder="Search for businesses..."
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
          <button type="submit" className="map-search-button">
            Search
          </button>
        </form>
        {isHistoryVisible && searchHistory.length > 0 && (
          <div className="map-search-history">
            {searchHistory.map((item, index) => (
              <div
                key={index}
                className="map-search-history-item"
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