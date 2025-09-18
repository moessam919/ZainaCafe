"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { branches, Branch } from "../lib/branches";
import { Clock, MapPin, Phone, Radar } from "lucide-react";

// Dynamically import the map component with SSR disabled
const DynamicMap = dynamic(() => import("./MapComponent"), {
    ssr: false,
    loading: () => (
        <div className="flex-1 bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center h-full">
            <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                <div className="relative w-12 h-12 mx-auto mb-3">
                    <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-amber-600 animate-spin"></div>
                    <div className="absolute inset-2 rounded-full border-b-2 border-l-2 border-amber-400 animate-spin animate-delay-150"></div>
                </div>
                <p className="text-gray-700 font-medium">Loading map...</p>
            </div>
        </div>
    ),
});

// Haversine distance (km)
const calculateDistance = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLng / 2) *
            Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

type LatLng = { lat: number; lng: number };

export default function BranchLocator() {
    const [userPos, setUserPos] = useState<LatLng | null>(null);
    const [sortedBranches, setSortedBranches] = useState<
        (Branch & { distance?: number })[]
    >(branches.map((b) => ({ ...b })));
    const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
    const [search, setSearch] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [isLocating, setIsLocating] = useState<boolean>(false);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    // Locate user
    const handleLocate = () => {
        setError(null);
        if (!navigator.geolocation) {
            setError("Your browser does not support location services.");
            return;
        }
        setIsLocating(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const loc = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                };
                setUserPos(loc);

                const withDist = branches
                    .map((b) => ({
                        ...b,
                        distance: calculateDistance(
                            loc.lat,
                            loc.lng,
                            b.lat,
                            b.lng
                        ),
                    }))
                    .sort((a, b) => a.distance! - b.distance!);

                setSortedBranches(withDist);
                setSelectedBranch(withDist[0] ?? null);
                setIsLocating(false);
                setDrawerOpen(false);
            },
            () => {
                setError(
                    "Failed to get your location. Please make sure to allow location access."
                );
                setIsLocating(false);
            },
            { enableHighAccuracy: true, timeout: 10000 }
        );
    };

    const selectBranch = (branch: Branch & { distance?: number }) => {
        setSelectedBranch(branch);
        setDrawerOpen(false);
    };

    const filteredBranches = useMemo(
        () =>
            sortedBranches.filter(
                (b) =>
                    b.name.toLowerCase().includes(search.toLowerCase()) ||
                    b.city.toLowerCase().includes(search.toLowerCase())
            ),
        [sortedBranches, search]
    );

    return (
        <div className="min-h-[500px] md:min-h-[400px] flex bg-gray-50 relative">
            {/* Sidebar Desktop */}
            <aside className="hidden md:flex w-1/3 bg-white border-r p-4 flex-col">
                <div className="mb-4">
                    <p className="text-sm text-gray-500">
                        Find your nearest branch or search manually
                    </p>
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Find a branch or city..."
                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                </div>

                <button
                    onClick={handleLocate}
                    disabled={isLocating}
                    className="w-full mb-4 bg-amber-600 cursor-pointer text-white py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60"
                >
                    {isLocating ? (
                        "Location is being determined..."
                    ) : (
                        <>
                            Locate me <MapPin />
                        </>
                    )}
                </button>

                {error && <p className="text-sm text-red-600 mb-2">{error}</p>}

                <div className="flex-1 overflow-auto max-h-[400px]">
                    <h3 className="text-lg font-semibold mb-3">
                        Nearest branches ({filteredBranches.length})
                    </h3>
                    <div className="space-y-3">
                        {filteredBranches.map((b) => (
                            <div
                                key={b.id}
                                onClick={() => selectBranch(b)}
                                className={`p-4 rounded-xl border transition cursor-pointer ${
                                    selectedBranch?.id === b.id
                                        ? "bg-amber-50 border-amber-400 shadow"
                                        : "bg-white border-gray-200 hover:shadow-sm"
                                }`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-semibold">
                                            {b.name}
                                        </h4>
                                        <div className="text-sm text-gray-500">
                                            {b.address ?? b.city}
                                        </div>
                                    </div>
                                    {b.distance !== undefined && (
                                        <div className="text-amber-600 font-medium text-sm">
                                            {b.distance!.toFixed(1)} km
                                        </div>
                                    )}
                                </div>
                                <div className="mt-2 flex items-center gap-3 text-sm text-gray-600">
                                    {b.hours && (
                                        <div className="flex gap-1">
                                            <Clock size={20} /> {b.hours}
                                        </div>
                                    )}
                                    {b.phone && (
                                        <div className="flex gap-1">
                                            <Phone size={20} /> {b.phone}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Mobile drawer */}
            {drawerOpen && (
                <div className="fixed inset-0 z-50 flex flex-col justify-end">
                    <div
                        className="absolute inset-0 bg-black/30 transition-opacity duration-300"
                        onClick={() => setDrawerOpen(false)}
                    />
                    <div className="relative bg-white rounded-t-2xl p-4 max-h-[70vh] overflow-y-auto shadow-lg transform translate-y-0 transition-transform duration-300 animate-in slide-in-from-bottom">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg font-semibold">
                                Nearest branches
                            </h3>
                            <button onClick={() => setDrawerOpen(false)}>
                                ✖
                            </button>
                        </div>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search for a branch or city..."
                            className="w-full p-3 border rounded-xl mb-4"
                        />

                        <button
                            onClick={handleLocate}
                            className="w-full mb-4 bg-amber-600 text-white py-3 rounded-xl flex justify-center gap-1 items-center"
                        >
                            Locate me <MapPin />
                        </button>

                        {error && (
                            <p className="text-sm text-red-600 mb-2">{error}</p>
                        )}

                        {filteredBranches.slice(0, 5).map((b) => (
                            <div
                                key={b.id}
                                onClick={() => {
                                    selectBranch(b);
                                    setDrawerOpen(false);
                                }}
                                className={`p-3 border rounded mb-3 cursor-pointer ${
                                    selectedBranch?.id === b.id
                                        ? "bg-amber-50 border-amber-400"
                                        : "bg-white"
                                }`}
                            >
                                <div className="flex justify-between">
                                    <div>
                                        <div className="font-semibold">
                                            {b.name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {b.city}
                                        </div>
                                    </div>
                                    {b.distance !== undefined && (
                                        <div className="text-amber-600">
                                            {b.distance!.toFixed(1)} km
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Map area */}
            <div className="flex-1 relative overflow-hidden">
                <div className="md:hidden w-full bg-white border-b shadow p-3 z-50">
                    <button
                        onClick={() => setDrawerOpen(true)}
                        className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium flex items-center gap-2 justify-center"
                    >
                        Nearest branches{" "}
                        <span className="pt-1">
                            <Radar size={18} />
                        </span>
                    </button>
                </div>

                {/* Dynamic Map Component */}
                <DynamicMap
                    sortedBranches={sortedBranches}
                    selectedBranch={selectedBranch}
                    setSelectedBranch={setSelectedBranch}
                    userPos={userPos}
                />

                {/* Bottom card */}
                {selectedBranch && (
                    <div className="absolute left-4 right-4 bottom-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border z-40">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-lg font-bold">
                                    {selectedBranch.name}
                                </h4>
                                <div className="text-sm text-gray-600">
                                    {selectedBranch.address ??
                                        selectedBranch.city}
                                </div>
                            </div>
                            {selectedBranch.distance !== undefined && (
                                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                                    {selectedBranch.distance!.toFixed(1)} km
                                </span>
                            )}
                        </div>

                        <div className="mt-3 flex gap-3">
                            <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedBranch.lat},${selectedBranch.lng}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 bg-amber-600 text-white py-2 text-center rounded-lg"
                            >
                                Get Directions
                            </a>
                            {selectedBranch.phone && (
                                <a
                                    href={`tel:${selectedBranch.phone}`}
                                    className="flex-1 bg-gray-200 text-gray-800 py-2 text-center rounded-lg"
                                >
                                    Call Branch
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
