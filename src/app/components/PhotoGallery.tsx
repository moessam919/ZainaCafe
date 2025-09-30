import Image from "next/image";

const PhotoGallery = () => {
    return (
        <div className="relative min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 lg:mt-20 mt-20">
            <div className="mx-auto relative z-10">
                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left column */}
                    <div className="space-y-6">
                        {/* Top text section */}
                        <div className="p-6">
                            <h1
                                className="text-2xl sm:text-2xl md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl text-orange-color mb-5"
                                style={{
                                    fontFamily: "Bebas Neue, sans-serif",
                                }}
                            >
                                Crafted Moments, Rooted in Culture
                            </h1>
                            <p className="text-text-color text-md leading-relaxed">
                                At Zaina Café, every cup, cookie, and corner is
                                crafted with intention. Inspired by Saudi
                                heritage and a passion for bringing people
                                together, we’ve created a space where quality
                                meets comfort—and where every visit feels like
                                home.
                            </p>
                        </div>

                        {/* Tall image */}
                        <div className="overflow-hidden border-[30px] border-[#f2f2f2] hover:border-orange-400 transition-colors duration-300 rounded-lg shadow-md">
                            <Image
                                width={1920}
                                height={1080}
                                src="/DSC01618-1.png"
                                alt="Photo Gallery"
                                className="w-full"
                            />
                        </div>

                        {/* Small image */}
                        <div className="overflow-hidden border-[30px] border-[#f2f2f2] hover:border-[#162951] transition-colors duration-300 rounded-lg shadow-md">
                            <Image
                                width={1920}
                                height={1080}
                                src="/20250730_ZCProductShoot_V1-50.jpg"
                                alt="Photo Gallery"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Middle column */}
                    <div className="space-y-6">
                        <div className="overflow-hidden border-[30px] border-[#f2f2f2] hover:border-[#162951] transition-colors duration-300 rounded-lg shadow-md">
                            <Image
                                width={1920}
                                height={1080}
                                src="/20250730_10.jpg"
                                alt="Photo Gallery"
                                className="w-full"
                            />
                        </div>

                        <div className="overflow-hidden border-[30px] border-[#f2f2f2] hover:border-orange-400 transition-colors duration-300 rounded-lg shadow-md">
                            <Image
                                width={1920}
                                height={1080}
                                src="/MatchaLatte.jpg"
                                alt="Photo Gallery"
                                className="w-full"
                            />
                        </div>

                        <div className="overflow-hidden border-[30px] border-[#f2f2f2] hover:border-[#cf3126] transition-colors duration-300 rounded-lg shadow-md">
                            <Image
                                width={1920}
                                height={1080}
                                src="/ZC-August-Post-3-Cookies-2-Slide04-+.png"
                                alt="Photo Gallery"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-6">
                        <div className="h-24 hidden lg:flex"></div>

                        <div className="overflow-hidden border-[30px] border-[#f2f2f2] hover:border-[#cf3126] transition-colors duration-300 rounded-lg shadow-md">
                            <Image
                                width={1920}
                                height={1080}
                                src="/DSC07160.jpg"
                                alt="Photo Gallery"
                                className="w-full"
                            />
                        </div>

                        <div className="overflow-hidden border-[30px] border-[#f2f2f2] hover:border-[#162951] transition-colors duration-300 rounded-lg shadow-md">
                            <Image
                                width={1920}
                                height={1080}
                                src="/cap1.jpg"
                                alt="Photo Gallery"
                                className="w-full"
                            />
                        </div>

                        {/* Bottom text */}
                        <div className="p-6">
                            <h1
                                className="text-2xl sm:text-2xl md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl text-orange-color mb-5"
                                style={{
                                    fontFamily: "Bebas Neue, sans-serif",
                                }}
                            >
                                More Than Coffee, It’s a Feeling
                            </h1>
                            <p className="text-text-color text-md leading-relaxed">
                                Whether you&apos;re starting your day, taking a
                                pause, or meeting with friends, Zaina Café
                                offers more than just great flavor. It’s a
                                moment of connection, a celebration of culture,
                                and a place designed for you to slow down and
                                savor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
