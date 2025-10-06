import Image from "next/image";

const HomeBanner = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Zaina Cafe -  logo & look and feel.png"
                    alt="Zaina Cafe Heritage"
                    fill
                    className="object-cover object-left lg:object-center"
                    priority
                    quality={100}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent lg:from-black/20 lg:via-transparent lg:to-black/10"></div>
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-3 gap-8 items-center min-h-screen py-12 lg:py-0">
                    {/* Left Side - 1 column */}
                    <div className=""></div>

                    {/* Right Side - Content - 2 columns */}
                    <div className="lg:col-span-2 flex flex-col justify-center items-center lg:items-end text-center lg:text-right space-y-2 lg:space-y-0 lg:ml-auto">
                        {/* Avatar for Mobile/Tablet */}
                        <div className="lg:hidden mb-6">
                            <Image
                                width={400}
                                height={400}
                                src="/avatar.png"
                                alt="Zaina Cafe Brand"
                                className="w-64 md:w-80 mx-auto drop-shadow-2xl"
                            />
                        </div>

                        {/* Heading */}
                        <div className="">
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-6xl text-white drop-shadow-md text-left w-fit border-b-3 font-semibold"
                                style={{ fontFamily: "Bebas Neue, sans-serif" }}
                            >
                                Welcome to
                            </h1>
                            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold drop-shadow-md leading-tight">
                                ZAINA CAFE.
                            </h1>
                        </div>

                        {/* Subheading */}
                        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[4.3rem] 2xl:text-[5.6rem] font-semibold drop-shadow-md ">
                            Your Daily Retreat!
                        </h2>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <a
                                href="/contact"
                                className="inline-block mt-2 bg-[#f4a261] text-white text-xl sm:text-2xl lg:text-2xl xl:text-4xl font-bold px-10 sm:px-16 py-4 sm:py-5 rounded-2xl hover:bg-[#e76f51] hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_30px_rgba(231,111,81,0.4)]"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
