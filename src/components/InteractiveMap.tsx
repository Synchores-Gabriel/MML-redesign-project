"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamic imports to prevent SSR issues with Leaflet
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address: string;
}

const locations: Location[] = [
  {
    id: "chatham",
    name: "MML Law Firm - Makati",
    lat: 14.5583,
    lng: 121.0189,
    address: "19th Floor Chatham House Building, Valero cor. V.A. Rufino Sts."
  }
];

export const InteractiveMap = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [L, setL] = useState<any>(null);

  useEffect(() => {
    setIsMounted(true);
    import("leaflet").then((leaflet) => {
      setL(leaflet);
    });
  }, []);

  if (!isMounted || !L) return <div className="w-full h-full bg-primary-dark animate-pulse" />;

  // Custom Gold Marker Icon
  const goldIcon = L.divIcon({
    className: "custom-gold-marker",
    html: `
      <div class="relative flex items-center justify-center">
        <div class="absolute w-8 h-8 bg-tertiary/20 rounded-full animate-ping opacity-75"></div>
        <div class="relative w-4 h-4 bg-tertiary rounded-full border-2 border-white shadow-gold-glow"></div>
        <div class="absolute -bottom-1 w-1 h-2 bg-tertiary translate-y-full"></div>
      </div>
    `,
    iconSize: [32, 48],
    iconAnchor: [16, 40],
  });

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={[14.5583, 121.0189]}
        zoom={16}
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ background: "#01162d" }}
      >
        {/* Dark Mode Tileset (CartoDB Dark Matter) */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        
        {locations.map((loc) => (
          <Marker 
            key={loc.id} 
            position={[loc.lat, loc.lng]} 
            icon={goldIcon}
          >
            <Popup className="mml-map-popup">
              <div className="p-2 font-sans">
                <p className="font-bold text-primary uppercase text-[10px] tracking-widest mb-1">Our Location</p>
                <p className="text-sm font-serif font-black mb-1">{loc.name}</p>
                <p className="text-xs text-primary/60 leading-tight">{loc.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
