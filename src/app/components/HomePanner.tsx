import Image from "next/image";

const HomePanner = () => {
    return (
        <div className="relative">
            <div className="absolute top-[-2.4%] right-[20%] lg:top-[-4%] lg:right-[10%]">
                <Image
                    width={1920}
                    height={1080}
                    src="/HomeCorner.png"
                    alt="welcometext"
                    className="w-[260px] md:w-[360px] lg:w-[500px]"
                />
            </div>
            <div className="absolute bottom-[-3%] right-[20%] lg:bottom-[-5%] lg:right-[10%]">
                <Image
                    width={1920}
                    height={1080}
                    src="/HomeCornerBottom.png"
                    alt="welcometext"
                    className="w-[260px] md:w-[360px] lg:w-[500px]"
                />
            </div>
            <div className="bg-[url('/HomePanner.png')] bg-cover bg-center bg-no-repeat flex xl:block justify-center lg:justify-between gap-5 items-center relative">
                <div className="absolute top-[25%] right-[10%]  lg:top-[10%] lg:right-[10%]">
                    <Image
                        width={1920}
                        height={1080}
                        src="/coffeSec.png"
                        alt="welcometext"
                        className="w-[130px] xl:w-[200px]"
                    />
                </div>
                <div className="px-4 sm:px-8 md:px-16 lg:px-24">
                    <div className="flex flex-col lg:flex-row md:gap-16 xl:gap-0 justify-center lg:justify-around items-center">
                        <div className="order-1 lg:order-0 mt-10 md:mt-0">
                            <div className="md:mt-[-50px]">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/avatar.png"
                                    alt="avatar for Zaina Cafr"
                                    className="w-[300px] md:w-[300px] lg:w-[480px] xl:w-[460px] 2xl:w-[600px] "
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-20 lg:mt-40 ">
                            <div className="text-center relative">
                                <div className="relative">
                                    <div className="absolute top-[-45px] left-[20px] md:top-[-45px] md:left-[50px] lg:top-[-45px] lg:left-[30px] xl:top-[-70px] xl:left-[75px]">
                                        <Image
                                            width={1920}
                                            height={1080}
                                            src="/welcometext.png"
                                            alt="welcometext"
                                            className="w-[260px] md:w-[360px] lg:w-[290px] xl:w-[500px]"
                                        />
                                    </div>
                                    <h1 className="text-header-color text-[60px] md:text-[110px] lg:text-[65px] xl:text-[140px] font-bold">
                                        ZAINA CAFE.
                                    </h1>
                                </div>
                                <div className="relative">
                                    <h3 className="text-text-color text-[43px] md:text-[80px] lg:text-[50px] xl:text-[100px] font-semibold mt-[-30px] md:mt-[-50px] lg:mt-[-40px] xl:mt-[-80px]">
                                        Your Daily Retreat!
                                    </h3>
                                    <div className="absolute bottom-[-10px] right-[15px] md:bottom-[-10px] md:right-[15px] lg:bottom-[-20px] lg:right-[15px] xl:bottom-[-20px] xl:right-[50px]">
                                        <Image
                                            width={1920}
                                            height={1080}
                                            src="/textshape.png"
                                            alt="text shape"
                                            className="w-[150px] md:w-[190px] lg:w-[170px] xl:w-[310px]"
                                        />
                                    </div>
                                </div>
                                <div className="absolute right-[80%]">
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src="/coffe.png"
                                        alt="text shape"
                                        className="w-[60px]"
                                    />
                                </div>

                                <div className="mt-8 hidden justify-end px-2 lg:flex">
                                    <a
                                        href="/contact"
                                        className="inline-block bg-orange-color  text-white lg:text-3xl xl:text-6xl font-semibold px-16 py-5 rounded-md hover:bg-opacity-90 transition-all"
                                    >
                                        Contact Us..
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* buttom for mibile */}
                        <div className="order-2 pb-4">
                            <div className="mt-[20px] md:mt-[-20px] flex justify-end px-2 lg:hidden ">
                                <a
                                    href="/contact"
                                    className="inline-block bg-orange-color  text-white lg:text-3xl xl:text-6xl font-semibold px-16 py-5 rounded-md hover:bg-opacity-90 transition-all"
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

export default HomePanner;
