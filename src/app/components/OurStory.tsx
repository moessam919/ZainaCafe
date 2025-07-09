import Image from "next/image";

const OurStory = () => {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 mt-10 lg:mt-20 relative">
            <div className="absolute hidden lg:flex lg:bottom-[-15%] lg:right-70 xl:bottom-[-10%] xl:right-70 z-10 animate-[float_4s_ease-in-out_infinite]">
                <Image
                    width={1920}
                    height={1080}
                    src="/SingleCoffe.png"
                    alt="Our Story"
                    className="w-[100px] xl:w-[140px]"
                />
            </div>
            <div className="absolute hidden lg:flex lg:top-[-2%] lg:right-70 xl:top-[10%] xl:right-70 z-10 animate-[float_4s_ease-in-out_infinite_0.5s]">
                <Image
                    width={1920}
                    height={1080}
                    src="/Coffe.png"
                    alt="Our Story"
                    className="w-[60px] xl:w-[80px]"
                />
            </div>
            <div className="absolute hidden lg:flex lg:top-[20%] lg:left-20 xl:top-[20%] xl:left-70 z-10 animate-[float_4s_ease-in-out_infinite_1s]">
                <Image
                    width={1920}
                    height={1080}
                    src="/Coffe.png"
                    alt="Our Story"
                    className="w-[80px] xl:w-[100px]"
                />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 ">
                <h1 className="text-orange-color text-[60px] md:text-[80px] lg:text-[45px] xl:text-[80px] font-bold">
                    Our Story
                </h1>
                <h3 className="text-text-color text-xl md:text-[40px] lg:text-[50px] xl:text-[50px] text-center">
                    Feel The Taste Of The Best Tea Making
                </h3>
                <h3 className="text-text-color text-2xl md:text-[40px] lg:text-[50px] xl:text-[50px] mt-[-10px]">
                    Just In Our Tea House
                </h3>
            </div>
            <div className="flex justify-center items-center">
                <div className="md:w-[80%] bg-orange-color px-10 py-10 rounded-4xl text-center relative">
                    <p className="text-white text-[18px] md:text-[20px] lg:text-[22px] xl:text-[40px] font-bold mb-4">
                        Zaina Cafe — Conveniently located within Saudi German
                        Hospital Dubai. We offer a wide selection of coffee,
                        beverages, and light meals to refresh and energize you
                        during your visit. Come experience our warm hospitality
                        and delicious offerings.
                    </p>

                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
                        <Image
                            width={1920}
                            height={1080}
                            src="/OurStoryCorner.png"
                            alt="quote"
                            className="w-[300px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;
