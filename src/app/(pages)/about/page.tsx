import ValueCard from "@/components/ui/ValueCard";
import { Coffee, Heart, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
const values = [
    {
        icon: <Coffee />,
        title: "Quality",
        description:
            "We are committed to sourcing the highest quality beans from sustainable farms around the globe. Our coffee is roasted in-house to ensure freshness and exceptional flavor in every cup.",
    },
    {
        icon: <Heart />,
        title: "Community",
        description:
            "At Zaina, we believe in fostering a sense of community. Our café is a place where people can connect, relax, and enjoy meaningful conversations over a shared love for coffee.",
    },
    {
        icon: <Users />,
        title: "Sustainability",
        description:
            "We are dedicated to minimizing our environmental impact by using eco-friendly practices, supporting local suppliers, and promoting ethical sourcing throughout our supply chain.",
    },
];

const page = () => {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 container mx-auto">
            {/* Our Story Section */}
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 mt-10">
                {/* Image */}
                <div className="w-full order-1 xl:order-0">
                    <Image
                        src="/cafe.png"
                        alt="Zaina Cafe Interior"
                        width={1920}
                        height={1080}
                        className="rounded-xl object-cover w-full xl:w-[600px]"
                    />
                </div>

                <div className="w-full flex flex-col justify-between mt-4">
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl xl:text-6xl 2xl:text-7xl font-bold">
                            Our Story
                        </h2>
                        <p className="text-text-color text-2xl xl:text-xl 2xl:text-2xl pt-4">
                            Zaina was founded in 2018 by two friends, Amelia and
                            Ethan, with a shared passion for exceptional coffee
                            and creating a welcoming community space. Inspired
                            by their travels and love for artisanal
                            craftsmanship, they envisioned a café that
                            celebrates the art of coffee making, from sourcing
                            the finest beans to the perfect pour. Their journey
                            began with a simple idea: to bring the world&apos;s
                            best coffee to their neighborhood, served with
                            warmth and a personal touch.
                        </p>
                    </div>

                    {/* Button at the bottom */}
                    <a
                        href="/menu.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-orange-color cursor-pointer text-white px-6 py-4 text-2xl rounded-md mt-6 font-medium w-full">
                            Explore Our Menu
                        </button>
                    </a>
                </div>
            </div>

            {/* Our Values Section */}
            <div className="mt-10 md:mt-20">
                <h3 className="text-3xl font-semibold mb-5 md:mb-10">
                    Our Values
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    What We Stand For
                </h2>
                <p className="text-text-color mb-10 max-w-2xl">
                    At Zaina, our core values guide everything we do, from the
                    coffee we serve to the experiences we create for our
                    customers. We believe in quality, community, and
                    sustainability, and these principles are at the heart of our
                    café’s identity.
                </p>

                <div className="grid lg:grid-cols-3 gap-6">
                    {values.map((val) => (
                        <ValueCard key={val.title} {...val} />
                    ))}
                </div>
            </div>

            <div className="my-10 md:my-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Meet the Team
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="card text-center ">
                        <div className="w-full flex justify-center">
                            <Image
                                src="/team1.png"
                                alt="Zaina Cafe Interior"
                                width={1920}
                                height={1080}
                                className="rounded-xl object-cover w-[350px] md:w-[500px]"
                            />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-2xl">Zaina</h2>
                            <p className="text-text-color ">
                                Co-Founder & Head Barista
                            </p>
                        </div>
                    </div>
                    <div className="card text-center flex flex-col justify-center mt-10 lg:mt-0">
                        <div className="w-full flex justify-center">
                            <Image
                                src="/team2.png"
                                alt="Zaina Cafe Interior"
                                width={1920}
                                height={1080}
                                className="rounded-xl object-cover w-[350px] md:w-[500px]"
                            />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-2xl">Zaina</h2>
                            <p className="text-text-color ">
                                Co-Founder & Head Barista
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
