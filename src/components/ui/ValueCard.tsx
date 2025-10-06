import React from "react";

type Props = {
    icon: React.JSX.Element;
    title: string;
    description: string;
    colorIndex: number;
};

export function ValueCard({ icon, title, description }: Props) {
    const colorMap: Record<string, { gradient: string; glow: string }> = {
        "Warm Hospitality": {
            gradient: "from-[#e07827] to-[#f08c3d]",
            glow: "shadow-[#e07827]/20",
        },
        Authenticity: {
            gradient: "from-[#162951] to-[#1e3a6b]",
            glow: "shadow-[#162951]/20",
        },
        "Creative Spirit": {
            gradient: "from-[#085259] to-[#0a6b74]",
            glow: "shadow-[#085259]/20",
        },
        "Commitment to Quality": {
            gradient: "from-[#d03328] to-[#e84438]",
            glow: "shadow-[#d03328]/20",
        },
    };

    const colors = colorMap[title] || colorMap["Warm Hospitality"];

    return (
        <div
            className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${colors.gradient} p-6 shadow-lg ${colors.glow} hover:shadow-2xl transition-all duration-300 hover:scale-105`}
        >
            {/* Decorative circle background */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500"></div>

            <div className="relative z-10">
                <div className="text-white/90 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    <div className="w-9 h-9">{icon}</div>
                </div>

                <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>

                <p className="text-white/80 leading-relaxed">{description}</p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </div>
    );
}
