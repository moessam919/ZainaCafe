import Image from "next/image";

const OldHomeBanner = () => {
    return (
        <div className="relative">
            <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 md:-top-7 lg:-top-8 xl:-top-7 2xl:-top-9 lg:-translate-x-1/7 xl:translate-x-36 lg:right-[10%]">
                <Image
                    width={1920}
                    height={1080}
                    src="/HomeCorner.png"
                    alt="HomeCorner"
                    className="w-60 sm:w-70 md:w-[360px] lg:w-[500px] xl:w-96 2xl:w-[28rem]"
                />
            </div>
            <div className="absolute -bottom-5 sm:-bottom-7 left-1/2 transform -translate-x-1/2 md:-bottom-9 lg:-bottom-10 xl:-bottom-9 2xl:-bottom-11 lg:-translate-x-1/7 xl:translate-x-36  lg:right-[10%]">
                <Image
                    width={1920}
                    height={1080}
                    src="/HomeCornerBottom.png"
                    alt="HomeCornerBottom"
                    className="w-60 sm:w-70 md:w-[360px] lg:w-[500px] xl:w-96 2xl:w-[28rem]"
                />
            </div>
            <div className="bg-[url('/HomePanner.png')] bg-cover bg-center bg-no-repeat flex xl:block justify-center lg:justify-between gap-5 items-center relative">
                <div className="absolute top-[25%] right-[10%]  lg:top-[10%] lg:right-[10%]">
                    <Image
                        width={1920}
                        height={1080}
                        src="/coffeSec.png"
                        alt="coffeSec"
                        className="hidden sm:flex sm:w-[130px] lg:w-34 xl:w-[150px] 2xl:w-50"
                    />
                </div>
                <div className="px-4 sm:px-8 md:px-16 lg:px-24">
                    <div className="flex flex-col lg:flex-row lg:gap-18  xl:gap-0 justify-center  lg:justify-around items-center">
                        <div className="order-1 lg:order-0 mt-10 md:-mt-10 xl:-mt-40">
                            <div className="md:mt-22 ">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/avatar.png"
                                    alt="avatar for Zaina Cafr"
                                    className="w-[300px] md:w-80 xl:w-[460px] 2xl:w-[500px] "
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-20 lg:mt-40 ">
                            <div className="text-center relative xl:ml-11">
                                <div className="relative ">
                                    <h1
                                        className="text-4xl sm:text-5xl md:text-7xl lg:text-4xl xl:text-6xl 2xl:text-8xl text-orange-color absolute -top-8 left-[20px] sm:-top-8 sm:left-20 md:-top-12 md:left-[50px] lg:-top-7 2xl:-top-15 lg:left-[30px] xl:-top-8 xl:left-[75px] 2xl:left-15"
                                        style={{
                                            fontFamily:
                                                "Bebas Neue, sans-serif",
                                        }}
                                    >
                                        Welcome to
                                    </h1>
                                    <h1 className="text-header-color text-5xl sm:text-7xl md:text-8xl lg:text-6xl laptop:text-2xl xl:text-8xl 2xl:text-[8rem] font-bold">
                                        ZAINA CAFE.
                                    </h1>
                                </div>
                                <div className="relative">
                                    <h3 className="text-text-color text-4xl sm:text-6xl md:text-7xl lg:text-[2.6rem] xl:text-[4.3rem] 2xl:text-[5.6rem] font-semibold -mt-2 md:-mt-3  xl:-mt-5">
                                        Your Daily Retreat!
                                    </h3>
                                    {/* <div className="absolute bottom-[-10px] right-[1px] md:bottom-[-10px] md:right-[1px] lg:bottom-[-20px] lg:right-[1px] xl:bottom-[-20px] xl:right-[10px]">
                                        <Image
                                            width={1920}
                                            height={1080}
                                            src="/textshape.png"
                                            alt="text shape"
                                            className="w-[150px] md:w-[190px] lg:w-[170px] xl:w-[310px]"
                                        />
                                    </div> */}
                                </div>
                                <div className="absolute right-[80%] top-60 lg:top-60">
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src="/coffe.png"
                                        alt="text shape"
                                        className="hidden sm:flex sm:w-[60px] 2xl:w-20"
                                    />
                                </div>

                                <div className="mt-5  hidden justify-end px-2 lg:flex">
                                    <a
                                        href="/contact"
                                        className="inline-block bg-orange-color  text-white lg:text-2xl xl:text-5xl font-semibold px-16 py-5 rounded-md hover:bg-opacity-90 transition-all"
                                    >
                                        Contact Us..
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* buttom for mibile */}
                        <div className="order-2 pb-4">
                            <div className="mt-[20px]  flex justify-end px-2 lg:hidden ">
                                <a
                                    href="/contact"
                                    className="inline-block bg-orange-color  text-white text-2xl sm:text-3xl lg:text-3xl xl:text-6xl font-semibold px-16 py-5 rounded-md hover:bg-opacity-90 transition-all"
                                >
                                    Contact Us..
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OldHomeBanner;
