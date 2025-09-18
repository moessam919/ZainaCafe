import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#414042] text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row ">
                    {/* Left Section */}
                    <div className="space-y-8 mr-20">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="flex-shrink-0">
                                <Image
                                    src="/Logo_white.png"
                                    alt="Zaina Cafe - Your Daily Retreat"
                                    width={150}
                                    height={50}
                                    className="w-[100px] h-auto sm:w-[100px] md:w-[140px] lg:w-[120px]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col justify-between items-start mt-4 ">
                        {/* Links */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-5 md:mb-0 pl-3">
                            <Link href="/" className="hover:text-orange-color">
                                Home
                            </Link>
                            <Link
                                href="/menu"
                                className="hover:text-orange-color"
                            >
                                Menu
                            </Link>
                            <Link
                                href="/about"
                                className="hover:text-orange-color"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="hover:text-orange-color"
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.facebook.com/zainacafedubai"
                                className="w-10 h-10  hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/zainacafe/"
                                className="w-10 h-10  hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://x.com/Zaina_Cafe"
                                className="w-10 h-10  hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="mt-12 md:pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Zaina Cafe. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
