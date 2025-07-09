"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Menu, Facebook, Instagram, Twitter } from "lucide-react";

const Header = () => {
    const pathname = usePathname();

    const navigationItems = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Twitter, href: "#", label: "Twitter" },
    ];

    return (
        <header className="bg-white py-2 md:pb-10 md:py-8">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/Logo_dark.png"
                            alt="Zaina Cafe - Your Daily Retreat"
                            width={150}
                            height={50}
                            className="w-[100px] h-auto sm:w-[120px] md:w-[140px] lg:w-[150px]"
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`text-lg font-medium transition-colors hover:text-orange-color ${
                                        isActive
                                            ? "text-orange-color border-b-2 border-orange-color pb-1"
                                            : "text-gray-700"
                                    }`}
                                >
                                    {item.name}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Desktop Social Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="text-gray-600 hover:text-orange-color transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="w-7 h-7" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="w-6 h-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-full sm:w-[400px] p-6"
                            >
                                <SheetTitle className="sr-only">
                                    Navigation Menu
                                </SheetTitle>
                                <div className="flex flex-col h-full">
                                    {/* Mobile Header */}
                                    <div className="flex items-center justify-center pb-4 border-b">
                                        <Image
                                            src="/Logo_dark.png"
                                            alt="Zaina Cafe"
                                            width={120}
                                            height={40}
                                            className="w-[120px] h-auto"
                                        />
                                    </div>

                                    {/* Mobile Navigation */}
                                    <nav className="flex flex-col space-y-4 mt-6">
                                        {navigationItems.map((item) => {
                                            const isActive =
                                                pathname === item.href;
                                            return (
                                                <SheetClose
                                                    asChild
                                                    key={item.name}
                                                >
                                                    <a
                                                        href={item.href}
                                                        className={`text-lg font-medium transition-colors hover:text-orange-color ${
                                                            isActive
                                                                ? "text-orange-color"
                                                                : "text-gray-700"
                                                        }`}
                                                    >
                                                        {item.name}
                                                    </a>
                                                </SheetClose>
                                            );
                                        })}
                                    </nav>

                                    {/* Avatar */}
                                    <div className="flex justify-center mt-20">
                                        <Image
                                            src="/avatar.png"
                                            alt="avatar"
                                            width={250}
                                            height={50}
                                            className="w-[250px] rounded-full"
                                        />
                                    </div>

                                    {/* Mobile Social Links */}
                                    <div className="flex items-center space-x-4 mt-auto pt-6 border-t">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                className="text-gray-600 hover:text-orange-color transition-colors"
                                                aria-label={social.label}
                                            >
                                                <social.icon className="w-6 h-6" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
