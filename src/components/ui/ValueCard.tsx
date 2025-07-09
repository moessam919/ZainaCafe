import React from "react";

type Props = {
    icon: React.JSX.Element;
    title: string;
    description: string;
};

export default function ValueCard({ icon, title, description }: Props) {
    return (
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
            <div className="text-3xl mb-4">{icon}</div>
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-text-color">{description}</p>
        </div>
    );
}
