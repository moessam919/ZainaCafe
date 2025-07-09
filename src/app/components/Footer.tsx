import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#414042] text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Section */}
                    <div className="space-y-8">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="flex-shrink-0">
                                <Image
                                    src="/Logo_white.png"
                                    alt="Zaina Cafe - Your Daily Retreat"
                                    width={150}
                                    height={50}
                                    className="w-[100px] h-auto sm:w-[120px] md:w-[140px] lg:w-[150px]"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Work Hours */}
                        <div>
                            <div className="w-16 h-1 bg-orange-500 mb-4"></div>
                            <h3 className="text-orange-500 text-xl font-semibold mb-2">
                                Work Hours
                            </h3>
                            <p className="text-gray-300">
                                7 AM - 8 PM, Monday - Sunday
                            </p>
                        </div>

                        {/* Location */}
                        <div>
                            <h3 className="text-orange-500 text-xl font-semibold mb-2">
                                Location
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Saudi German Hospital, Dubai Center of
                                <br />
                                Excellence, Women & Children Hospital
                                <br />
                                Hessa Street, Dubai, UAE
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col justify-between">
                        {/* Map Container */}
                        <div className="bg-gray-200 rounded-lg h-48 lg:h-56 mb-6 flex items-center justify-center">
                            <div className="text-gray-500 text-center">
                                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm">Interactive Map</p>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex justify-end space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10  hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10  hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10  hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 Zaina Cafe. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-orange-500 text-sm transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
