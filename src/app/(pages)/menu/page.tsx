"use client";

import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    FileText,
    Lock,
    // Download,
    // MapPin,
    // Clock,
} from "lucide-react";
import Image from "next/image";

const Page = () => {
    const [coffeeSlideIndex, setCoffeeSlideIndex] = useState(0);
    const [merchSlideIndex, setMerchSlideIndex] = useState(0);

    // Coffee images data
    const coffeeImages = [
        {
            id: 1,
            title: "Emirati Coffee",
            type: "beans",
            image: "/Emirati Coffee.jpg",
        },
        {
            id: 2,
            title: "Lungo",
            type: "beans",
            image: "/Lungo .jpg",
        },
        {
            id: 3,
            title: "Colombia Decafenated",
            type: "beans",
            image: "/Colombia Decafenated.jpg",
        },
        {
            id: 4,
            title: "Intenso",
            type: "capsules",
            image: "/Intenso.jpg",
        },
        {
            id: 5,
            title: "Turkish Coffee",
            type: "capsules",
            image: "/Turkish Coffee.jpg",
        },
        {
            id: 6,
            title: "Roma",
            type: "capsules",
            image: "/Roma.jpg",
        },
    ];

    // Merch images data
    const merchImages = [
        {
            id: 1,
            title: "Classic Tote Bag",
            dis: "Premium bags with Zaina's unique designs.",
            category: "bags",
            color: "Natural",
            image: "/totibag.jpg",
        },
        {
            id: 4,
            title: "T-Shirt",
            dis: "Quality basic t-shirts in black or white.",

            category: "shirts",
            color: "Heather Gray",
            image: "/T-shirt.jpg",
        },
        {
            id: 2,
            title: "Coming Soon",
            category: "Coming Soon",
            color: "Black",
            image: "/ZC - August Post 4 - Merch.png",
        },
    ];

    const nextCoffeeSlide = () => {
        setCoffeeSlideIndex(
            (prev) => (prev + 1) % Math.ceil(coffeeImages.length / 3)
        );
    };

    const prevCoffeeSlide = () => {
        setCoffeeSlideIndex(
            (prev) =>
                (prev - 1 + Math.ceil(coffeeImages.length / 3)) %
                Math.ceil(coffeeImages.length / 3)
        );
    };

    const nextMerchSlide = () => {
        setMerchSlideIndex(
            (prev) => (prev + 1) % Math.ceil(merchImages.length / 3)
        );
    };

    const prevMerchSlide = () => {
        setMerchSlideIndex(
            (prev) =>
                (prev - 1 + Math.ceil(merchImages.length / 3)) %
                Math.ceil(merchImages.length / 3)
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 mt-4">
            {/* Hot Drinks Section */}
            <section className=" bg-white">
                <div className="container max-w-9xl mx-auto px-6">
                    <div className="mb-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Signature Hot Beverages
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl ">
                            Indulge in our signature hot beverages, <br />
                            crafted to bring comfort and warmth with every sip.
                        </p>
                    </div>

                    <div className=" mx-auto space-y-8">
                        {/* Zaina Latte Card */}
                        <div className="bg-[#9a2724] rounded-md overflow-hidden shadow-lg flex flex-col md:flex-row items-stretch">
                            {/* Left Image */}
                            <div className="md:w-1/2">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/Latte (Saffron & Almond).jpg"
                                    alt="New Strato Frappuccino"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Right Text */}
                            <div className="p-8 flex flex-col justify-center md:w-2/3 text-center md:text-left relative overflow-auto">
                                <h2 className="text-white text-4xl font-bold  mb-4">
                                    Zaina Latte (Saffron & Almond)
                                </h2>
                                <p className="text-white/90 mb-6 leading-relaxed text-xl">
                                    A blend of saffron and almond for a smooth
                                    rich drink that tastes like heritage in a
                                    cup. Crafted with care, served with pride
                                    only at Zaina Café.
                                </p>

                                <div className="absolute bottom-0 left-4 hidden md:block">
                                    <Image
                                        src="/Pattern.png"
                                        width={1920}
                                        height={1080}
                                        alt="Pattern"
                                    ></Image>
                                </div>
                            </div>
                        </div>

                        {/* Matcha Card */}
                        <div className="bg-[#054661] rounded-md overflow-hidden shadow-lg flex flex-col md:flex-row items-stretch">
                            {/* Right Text */}
                            <div className="p-8 flex flex-col justify-center md:w-2/3 text-center md:text-left relative overflow-auto">
                                <h2 className="text-4xl font-bold text-white mb-4">
                                    Matcha
                                </h2>
                                <p className="text-white/90 mb-6 leading-relaxed text-xl">
                                    Authentic ceremonial grade matcha powder
                                    whisked to perfection with steamed milk.
                                    Experience the pure, earthy flavor and
                                    natural energy boost of this traditional
                                    Japanese green tea.
                                </p>
                                <div className="absolute bottom-0 left-4 hidden md:block">
                                    <Image
                                        src="/Pattern.png"
                                        width={1920}
                                        height={1080}
                                        alt="Pattern"
                                    ></Image>
                                </div>
                            </div>
                            {/* Left Image */}
                            <div className="md:w-1/2">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/MatchaLatte.jpg"
                                    alt="Matcha"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cold Drinks Section */}
            <section className="pt-20 bg-white">
                <div className="container max-w-9xl mx-auto px-6">
                    <div className="mb-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Refreshing Cold Beverages
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl ">
                            Refresh yourself with our iced drinks, ideal for
                            every moment of the day.{" "}
                        </p>
                    </div>

                    <div className=" mx-auto space-y-8">
                        {/* Iced Matcha Card */}
                        <div className="bg-[#e07826] rounded-md overflow-hidden shadow-lg flex flex-col md:flex-row items-stretch">
                            <div className="md:w-1/2">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/DSC01618-1.png"
                                    alt="Matcha"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Right Text */}
                            <div className="p-8 flex flex-col justify-center md:w-2/3 text-center md:text-left relative overflow-auto">
                                <h2 className="text-white text-4xl font-bold  mb-4">
                                    Iced Matcha
                                </h2>
                                <p className="text-white/90 mb-6 leading-relaxed text-xl">
                                    Refreshing iced matcha with your choice of
                                    milk, served over ice for the perfect
                                    cooling experience. Made with premium
                                    ceremonial grade matcha for an authentic
                                    taste.
                                </p>

                                <div className="bottom-0 left-4 absolute hidden md:block">
                                    <Image
                                        src="/Pattern.png"
                                        width={1920}
                                        height={1080}
                                        alt="Pattern"
                                    ></Image>
                                </div>
                            </div>
                        </div>

                        {/* Blue Matcha Card */}
                        <div className="bg-[#172951] rounded-md overflow-hidden shadow-lg flex flex-col md:flex-row items-stretch">
                            {/* Right Text */}
                            <div className="p-8 flex flex-col justify-center md:w-2/3 text-center md:text-left relative overflow-auto">
                                <h2 className="text-4xl font-bold text-white mb-4">
                                    Blue Matcha
                                </h2>
                                <p className="text-white/90 mb-6 leading-relaxed text-xl">
                                    A smooth, lightly sweet, and earthy drink
                                    with subtle floral notes — a gentle and
                                    refreshing treat for any time of day.
                                </p>
                                <div className="absolute bottom-0 left-4 hidden md:block">
                                    <Image
                                        src="/Pattern.png"
                                        width={1920}
                                        height={1080}
                                        alt="Pattern"
                                    ></Image>
                                </div>
                            </div>
                            {/* Left Image */}
                            {/* Left Image */}
                            <div className="md:w-1/2">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/DSC01622-1.png"
                                    alt="Matcha"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zaina Coffee Section with Slider */}
            <section className="pt-20 bg-white">
                <div className="container max-w-9xl mx-auto px-6">
                    <div className=" mb-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Premium Coffee Collection
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl">
                            Enjoy Zaina Coffee at home with our premium beans
                            and easy-to-use capsules.
                        </p>
                    </div>

                    <div className="relative max-w-9xl mx-auto">
                        <div className="overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${
                                        coffeeSlideIndex * 100
                                    }%)`,
                                }}
                            >
                                {Array.from(
                                    {
                                        length: Math.ceil(
                                            coffeeImages.length / 3
                                        ),
                                    },
                                    (_, slideIndex) => (
                                        <div
                                            key={slideIndex}
                                            className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-2"
                                        >
                                            {coffeeImages
                                                .slice(
                                                    slideIndex * 3,
                                                    slideIndex * 3 + 3
                                                )
                                                .map((coffee) => (
                                                    <div
                                                        key={coffee.id}
                                                        className="bg-gray-200 rounded-2xl p-6"
                                                    >
                                                        <div className="h-96 bg-gradient-to-br rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden">
                                                            <Image
                                                                width={1920}
                                                                height={1080}
                                                                src={
                                                                    coffee.image
                                                                }
                                                                alt={
                                                                    coffee.title
                                                                }
                                                                className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
                                                            ></Image>
                                                        </div>
                                                        <h3 className="font-bold text-gray-800 mb-2 text-2xl">
                                                            {coffee.title}
                                                        </h3>
                                                        <p className="text-gray-600 text-md">
                                                            Premium quality{" "}
                                                            {coffee.type} for
                                                            the perfect cup
                                                            every time.
                                                        </p>
                                                    </div>
                                                ))}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Slider Controls */}
                        <div className="hidden md:block">
                            <button
                                onClick={prevCoffeeSlide}
                                className="absolute group cursor-pointer -left-15 top-1/2 transform -translate-y-1/2 bg-white hover:bg-amber-600 shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white" />
                            </button>
                            <button
                                onClick={nextCoffeeSlide}
                                className="absolute group cursor-pointer -right-15 top-1/2 transform -translate-y-1/2 bg-white hover:bg-amber-600 shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white" />
                            </button>
                        </div>

                        {/* Slider Indicators */}
                        <div className="flex justify-center mt-8 gap-2 ">
                            {Array.from(
                                { length: Math.ceil(coffeeImages.length / 3) },
                                (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setCoffeeSlideIndex(index)
                                        }
                                        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                            index === coffeeSlideIndex
                                                ? "bg-amber-600"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Zaina Cookies Section - Hot Beverages Style Layout */}
            <section className="pt-20 bg-white">
                <div className="container max-w-9xl mx-auto px-6">
                    <div className="mb-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Zaina Cookies
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl">
                            Artisan Zaina Cookies, available in multiple flavors
                            and vegan options, ideal alongside a cup of Zaina
                            Coffee.
                        </p>
                    </div>

                    <div className="mx-auto">
                        {/* Three Cards in One Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                            {/* Carob Chip Cookie Card */}
                            <div className="bg-[#0f5169] rounded-2xl overflow-hidden shadow-lg flex flex-col">
                                {/* Top Image */}
                                <div className="h-72">
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src="/cookies1.jpg"
                                        alt="Carob Chip"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Text */}
                                <div className="p-6  relative overflow-auto flex-1">
                                    <h2 className=" text-2xl font-bold mb-4 text-white">
                                        Carob Chip (Vegan)
                                    </h2>
                                    <p className="leading-relaxed text-base text-white">
                                        Our vegan Carob Cookie is naturally
                                        sweet, mildly chocolatey flavor. Soft,
                                        wholesome, and completely caffeine-free,
                                        it’s a delightful treat at any time of
                                        the day.
                                    </p>
                                </div>
                            </div>

                            {/* Double chocolate Chip Card */}
                            <div className="bg-[#cf3126] rounded-2xl overflow-hidden shadow-lg flex flex-col">
                                {/* Top Image */}
                                <div className="h-72">
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src="/cookies2.jpg"
                                        alt="Double chocolate Chip"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Text */}
                                <div className="p-6  relative overflow-auto flex-1">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        Double Chocolate Chip
                                    </h2>
                                    <p className="leading-relaxed text-base text-white">
                                        Savor the rich taste of our Double
                                        Chocolate Chip Cookie, made with cocoa
                                        and loaded with chocolate chips. Soft,
                                        chewy, and perfectly paired with Zaina
                                        Coffee.
                                    </p>
                                </div>
                            </div>

                            {/* Chocolate Chip Cookies Card */}
                            <div className="bg-[#172951] rounded-2xl overflow-hidden shadow-lg flex flex-col">
                                {/* Top Image */}
                                <div className="h-72">
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src="/cookies3.jpg"
                                        alt="Chocolate Chip Cookies"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Text */}
                                <div className="p-6  relative overflow-auto flex-1">
                                    <h2 className=" text-2xl font-bold mb-4 text-white">
                                        Chocolate Chip
                                    </h2>
                                    <p className="leading-relaxed text-base text-white">
                                        Enjoy the classic taste of our Chocolate
                                        Chip Cookie, packed with rich chocolate
                                        chips and baked to a soft, chewy
                                        perfection.
                                    </p>
                                </div>
                            </div>
                            {/* Miso white chocolate Chip Cookies Card */}
                            <div className="bg-[#df7927] rounded-2xl overflow-hidden shadow-lg flex flex-col">
                                {/* Top Image */}
                                <div className="h-72">
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src="/MisowhitechocolateChip.jpg"
                                        alt="Miso white chocolate Chip"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Text */}
                                <div className="p-6  relative overflow-auto flex-1">
                                    <h2 className=" text-2xl font-bold mb-4 text-white">
                                        Miso White Chocolate Chip
                                    </h2>
                                    <p className="leading-relaxed text-base text-white">
                                        Experience a unique twist on a classic
                                        favorite. It blends creamy white
                                        chocolate with a hint of savory miso,
                                        creating a perfectly balanced, soft, and
                                        chewy treat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Merchandise Section with Slider */}
            <section className="py-20 bg-white">
                <div className="container mx-auto max-w-9xl px-6">
                    <div className="mb-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Zaina Merchandise
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl">
                            Take a piece of Zaina with you - premium merchandise
                            that reflects our brand&apos;s quality and style.
                        </p>
                    </div>

                    <div className="relative mx-auto">
                        <div className="overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${
                                        merchSlideIndex * 100
                                    }%)`,
                                }}
                            >
                                {Array.from(
                                    {
                                        length: Math.ceil(
                                            merchImages.length / 3
                                        ),
                                    },
                                    (_, slideIndex) => (
                                        <div
                                            key={slideIndex}
                                            className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-2"
                                        >
                                            {merchImages
                                                .slice(
                                                    slideIndex * 3,
                                                    slideIndex * 3 + 3
                                                )
                                                .map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className="bg-gray-200 rounded-2xl p-6"
                                                    >
                                                        <div className="h-96 bg-gradient-to-br rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden">
                                                            <Image
                                                                width={1920}
                                                                height={1080}
                                                                src={item.image}
                                                                alt={item.title}
                                                                className={`w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out ${
                                                                    item.id ===
                                                                    2
                                                                        ? "blur-md"
                                                                        : ""
                                                                }`}
                                                            ></Image>
                                                        </div>
                                                        <h3 className="font-bold text-gray-800 mb-2 text-2xl">
                                                            {item.title}
                                                        </h3>
                                                        {item.id !== 2 && (
                                                            <p className="text-gray-600 text-md">
                                                                {item.dis}
                                                            </p>
                                                        )}
                                                    </div>
                                                ))}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        {/* Slider Controls */}
                        <div className="hidden md:block">
                            <button
                                onClick={prevMerchSlide}
                                className="group absolute cursor-pointer -left-15 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#054661] shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white" />
                            </button>
                            <button
                                onClick={nextMerchSlide}
                                className="group absolute cursor-pointer -right-15 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#054661] shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white" />
                            </button>
                        </div>
                        {/* Slider Indicators */}
                        <div className="flex justify-center mt-8 gap-2 ">
                            {Array.from(
                                { length: Math.ceil(merchImages.length / 3) },
                                (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setMerchSlideIndex(index)
                                        }
                                        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                            index === merchSlideIndex
                                                ? "bg-[#054661]"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu with Pricing Details Section */}
            <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="container mx-auto max-w-9xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Menu & Pricing
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Discover our carefully curated menu for each
                            location. Click below to explore our full PDF menus.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Dubai Card */}
                        <div
                            onClick={() =>
                                window.open("DubaiMenu.pdf", "_blank")
                            }
                            className="relative cursor-pointer rounded-3xl overflow-hidden group bg-white/60 backdrop-blur-lg shadow-lg hover:shadow-2xl border border-gray-200 hover:border-[#054661] transition-all duration-300"
                        >
                            <div className="h-64 overflow-hidden">
                                <Image
                                    src="/Dubai.jpg"
                                    alt="Dubai Menu"
                                    width={500}
                                    height={400}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col items-center text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Dubai
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    View full Dubai menu & pricing
                                </p>
                                <button className="flex items-center cursor-pointer gap-2 px-5 py-2 rounded-full bg-[#054661] text-white font-medium shadow-md hover:bg-[#073f55] ">
                                    <FileText size={18} /> View Menu
                                </button>
                            </div>
                        </div>

                        {/* Ajman Card */}
                        <div
                            onClick={() =>
                                window.open("AjmanMenu.pdf", "_blank")
                            }
                            className="relative cursor-pointer rounded-3xl overflow-hidden group bg-white/60 backdrop-blur-lg shadow-lg hover:shadow-2xl border border-gray-200 hover:border-[#054661] transition-all duration-300"
                        >
                            <div className="h-64 overflow-hidden">
                                <Image
                                    src="/Ajman.jpg"
                                    alt="Ajman Menu"
                                    width={500}
                                    height={400}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col items-center text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Ajman
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    View full Ajman menu & pricing
                                </p>
                                <button className="flex items-center cursor-pointer gap-2 px-5 py-2 rounded-full bg-[#054661] text-white font-medium shadow-md hover:bg-[#073f55] ">
                                    <FileText size={18} /> View Menu
                                </button>
                            </div>
                        </div>

                        {/* Coming Soon Card */}
                        <div className="relative rounded-3xl overflow-hidden group bg-white/40 backdrop-blur-lg shadow-lg border border-gray-200 opacity-80">
                            <div className="h-64 overflow-hidden grayscale blur-xs">
                                <Image
                                    src="/comingsoon.jpg"
                                    alt="Coming Soon"
                                    width={500}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col items-center text-center">
                                <h3 className="text-2xl font-bold text-gray-500 mb-2">
                                    Coming Soon
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    Menu will be available soon
                                </p>
                                <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-400 text-white font-medium cursor-not-allowed">
                                    <Lock size={18} /> Locked
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
