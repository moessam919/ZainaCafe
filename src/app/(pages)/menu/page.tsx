"use client";

import { menuData } from "@/lib/data";
import { useState } from "react";

const Page = () => {
    const [activeCategory, setActiveCategory] = useState<string>("hot-drinks");

    const scrollToSection = (categoryId: string) => {
        setActiveCategory(categoryId);
        const element = document.getElementById(categoryId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="min-h-screen">
                {/* Header */}
                <div className="bg-white  sticky top-0 z-10">
                    <div className="container mx-auto px-4 py-6">
                        <h1 className="text-4xl font-bold text-gray-800">
                            Menu
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Explore our selection of handcrafted beverages,
                            fresh pastries, and hearty breakfast options.
                        </p>
                    </div>
                </div>

                {/* Category Navigation */}
                <div className="overflow-x-auto bg-white border-b sticky container mx-auto top-[120px] z-10 ">
                    <div className="overflow-x-auto flex flex-col lg:flex-row justify-between items-center ">
                        <div className="flex space-x-4 py-4 overflow-x-auto">
                            {menuData.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => scrollToSection(category.id)}
                                    className={`px-6 py-3 border-b font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                                        activeCategory === category.id
                                            ? "border-b-orange-500 border-b-2 font-bold"
                                            : "text-text-color  hover:bg-gray-200"
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                        <div className="hidden lg:flex">
                            <a
                                href="/menu.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="px-6 py-3 rounded-md font-medium whitespace-nowrap transition-all duration-200 bg-orange-500 text-white shadow-lg cursor-pointer my-4 lg:my-0">
                                    Menu with Pricing Details
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="lg:hidden text-center">
                        <a
                            href="/menu.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-6 py-3 rounded-md font-medium whitespace-nowrap transition-all duration-200 bg-orange-500 text-white shadow-lg cursor-pointer my-4 lg:my-0">
                                Menu with Pricing Details
                            </button>
                        </a>
                    </div>
                </div>

                {/* Menu Content */}
                <div className="container mx-auto px-4 py-8">
                    {menuData.map((category) => (
                        <section
                            key={category.id}
                            id={category.id}
                            className="mb-16"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">
                                {category.name}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className=" rounded-lg  overflow-hidden"
                                    >
                                        {/* Product Image */}
                                        <div className="h-48 bg-gray-100 flex items-center justify-center">
                                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                <svg
                                                    className="w-16 h-16 text-gray-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="py-6">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
