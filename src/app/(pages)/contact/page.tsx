import React from "react";

import { Instagram, Facebook, Twitter } from "lucide-react";
import BranchLocator from "@/components/BranchLocator";

const page = () => {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
            <div>
                <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
                <p className="text-text-color max-w-2xl">
                    We’d love to hear from you! Whether you have a question
                    about our menu, want to book a table, or just want to say
                    hello, please don’t hesitate to reach out.
                </p>
            </div>

            {/* Location Image */}
            <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
                <BranchLocator />
            </div>

            {/* Contact Info */}
            <div>
                <h4 className="text-lg font-semibold my-8">
                    Contact Information
                </h4>
                <div className="grid md:grid-cols-2 gap-6 border-t pt-6 text-sm text-text-color">
                    <div>
                        <p className="font-medium text-text-color">Address</p>
                        <p className="text-lg w-[80%]">
                            Saudi German Hospital, Dubai Center of Excellence,
                            Women & Children Hospital Hessa Street, Dubai, UAE
                        </p>
                    </div>
                    <div>
                        <p className="font-medium text-text-color">
                            Opening Hours
                        </p>
                        <p className="text-lg">8 AM - 9 PM</p>
                    </div>
                    <div>
                        <p className="font-medium text-text-color">Phone</p>
                        <p className="text-lg mb-2 ">
                            <a href={`tel:${"+971 4 389 0360"}`}>
                                UAE Number: +971 4 389 0360
                            </a>
                        </p>
                        <p className="text-lg">
                            <a href={`tel:${"+971 4 389 0360"}`}>
                                KSA Number: +966 50 051 8553
                            </a>
                        </p>
                    </div>
                    <div>
                        <p className="font-medium text-text-color">Email</p>
                        <p className="text-lg">info@zaina-cafe.com</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-xl space-y-6 mt-5">
                <h4 className="text-lg font-semibold">Send Us a Message</h4>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-color"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-color"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full border rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-orange-color"
                    />
                    <button
                        type="submit"
                        className="bg-orange-color text-white px-6 py-2 rounded-md cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Social Media */}
            <div className="py-10">
                <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                <div className="flex gap-6 text-2xl text-gray-600">
                    <a
                        href="#"
                        aria-label="Instagram"
                        className="hover:text-orange-color"
                    >
                        <Instagram />
                    </a>
                    <a
                        href="#"
                        aria-label="Facebook"
                        className="hover:text-orange-color"
                    >
                        <Facebook />
                    </a>
                    <a
                        href="#"
                        aria-label="Twitter"
                        className="hover:text-orange-color"
                    >
                        <Twitter />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default page;
