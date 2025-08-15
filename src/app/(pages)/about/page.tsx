import ValueCard from "@/components/ui/ValueCard";
import { Smile, Heart, Palette, Award } from "lucide-react";
import Image from "next/image";
import React from "react";
const values = [
    {
        icon: <Smile />,
        title: "Warm Hospitality",
        description:
            "We believe that great coffee should come with a genuine smile. Every guest is welcomed like family, and every visit is a chance to make someone feel at home.",
    },
    {
        icon: <Heart />,
        title: "Authenticity",
        description:
            "From the ingredients we choose to the spaces we design, we stay true to who we are. Our Saudi roots and personal story are reflected in every detail.",
    },
    {
        icon: <Palette />,
        title: "Creative Spirit",
        description:
            "We bring fresh energy to everything we do—from our matcha flavors to our merch. Zaina Café is a place where ideas come to life, fueled by passion and purpose.",
    },
    {
        icon: <Award />,
        title: "Commitment to Quality",
        description:
            "Craftsmanship is at the core of our menu. We source premium beans, bake with care, and focus on delivering consistency, flavor, and excellence—every single time.",
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
                        src="/aboutShot.jpg"
                        alt="Zaina Cafe Interior"
                        width={1920}
                        height={1080}
                        className="rounded-xl object-cover w-full xl:w-[650px] h-full"
                    />
                </div>

                <div className="w-full flex flex-col justify-between">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl xl:text-5xl 2xl:text-6xl font-bold">
                            Our Story
                        </h2>
                        <h3 className="text-xl md:text-2xl xl:text-xl 2xl:text-2xl font-bold mt-4">
                            Zaina Café began with a sketch—and a dream.
                        </h3>
                        <p className="text-text-color text-xl xl:text-xl 2xl:text-xl pt-1">
                            Founded by Zaina Sobhi Batterjee at just 15 years
                            old, the café was born from a passion for coffee,
                            design, and meaningful connection. What started as a
                            small idea quickly grew into a vibrant brand shaped
                            by heritage, hospitality, and heart.
                        </p>

                        <p className="text-text-color text-xl xl:text-xl 2xl:text-xl pt-1">
                            Zaina Café is more than a name. It’s a space where
                            Saudi culture is celebrated through specialty
                            coffee, signature cookies, and heartfelt moments.
                            Every detail—from the branding to the beans—carries
                            Zaina’s personal touch and vision for creating
                            spaces that bring people together.
                        </p>

                        <p className="text-text-color text-xl xl:text-xl 2xl:text-xl pt-1">
                            Today, we’re proud to be growing across the
                            region—one cup, one cookie, and one community at a
                            time.
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
                    What Defines Zaina Café
                </h2>
                <p className="text-text-color mb-10 max-w-2xl">
                    At Zaina Café, our values are more than words—they shape
                    every cup we serve, every cookie we bake, and every
                    connection we create. Rooted in Saudi heritage and inspired
                    by modern lifestyles, these values guide us as we grow into
                    communities across the region.
                </p>

                <div className="grid lg:grid-cols-4 gap-6">
                    {values.map((val) => (
                        <ValueCard key={val.title} {...val} />
                    ))}
                </div>
            </div>

            <div className="my-10 md:my-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Meet Our Founder
                </h2>

                <div className="w-fit">
                    <div className="card text-center ">
                        <div className="w-full flex justify-start">
                            <Image
                                src="/Zaina.jpg"
                                alt="Zaina Cafe Interior"
                                width={1920}
                                height={1080}
                                className="rounded-xl object-cover w-[350px]"
                            />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-2xl">Zaina Sobhi Batterjee</h2>
                            <p className="text-text-color ">Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
