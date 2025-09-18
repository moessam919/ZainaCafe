"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Branch } from "../lib/branches";

type LatLng = { lat: number; lng: number };

interface MapComponentProps {
    sortedBranches: (Branch & { distance?: number })[];
    selectedBranch: Branch | null;
    setSelectedBranch: (branch: Branch | null) => void;
    userPos: LatLng | null;
}

function FlyTo({
    position,
    zoom = 13,
}: {
    position: LatLng | null;
    zoom?: number;
}) {
    const map = useMap();
    useEffect(() => {
        if (position) {
            map.flyTo([position.lat, position.lng], zoom, {
                animate: true,
                duration: 1.0,
            });
        }
    }, [position, zoom, map]);
    return null;
}

// Fix for default markers in production
delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

/* ========== Icons ========== */
const defaultIcon = new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
    iconSize: [28, 28],
    iconAnchor: [14, 28],
});

const selectedIcon = new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
    iconSize: [34, 34],
    iconAnchor: [17, 34],
});

const userIcon = new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
});

const MapComponent: React.FC<MapComponentProps> = ({
    sortedBranches,
    selectedBranch,
    setSelectedBranch,
    userPos,
}) => {
    const defaultCenter: LatLng = { lat: 24.5, lng: 54.5 };

    return (
        <MapContainer
            key={`${selectedBranch?.id ?? "default"}-${
                userPos ? "user" : "nouser"
            }`}
            center={[defaultCenter.lat, defaultCenter.lng]}
            zoom={6}
            style={{ width: "100%", height: "100%", zIndex: 0 }}
            scrollWheelZoom={true}
            attributionControl={false}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {sortedBranches.map((b) => (
                <Marker
                    key={b.id}
                    position={[b.lat, b.lng]}
                    icon={
                        selectedBranch?.id === b.id ? selectedIcon : defaultIcon
                    }
                    eventHandlers={{
                        click: () => setSelectedBranch(b),
                    }}
                >
                    <Popup>
                        <div>
                            <div className="font-semibold">{b.name}</div>
                            <div className="text-sm text-gray-600">
                                {b.address ?? b.city}
                            </div>
                        </div>
                    </Popup>
                </Marker>
            ))}

            {userPos && (
                <Marker position={[userPos.lat, userPos.lng]} icon={userIcon}>
                    <Popup>📍 Your current location</Popup>
                </Marker>
            )}

            <FlyTo
                position={
                    selectedBranch
                        ? {
                              lat: selectedBranch.lat,
                              lng: selectedBranch.lng,
                          }
                        : userPos ?? null
                }
                zoom={13}
            />
        </MapContainer>
    );
};

export default MapComponent;
