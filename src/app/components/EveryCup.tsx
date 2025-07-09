import Image from "next/image";

const EveryCup = () => {
    return (
        <div className="relative">
            <div className="absolute hidden lg:flex lg:top-20 lg:right-70 xl:top-20 xl:right-70 z-10 animate-[float_4s_ease-in-out_infinite]">
                <Image
                    width={1920}
                    height={1080}
                    src="/SingleCoffe.png"
                    alt="Our Story"
                    className="w-[100px] xl:w-[140px]"
                />
            </div>

            <div className="absolute hidden lg:flex lg:top-[6%] lg:right-[50%] xl:top-[25%] xl:right-[50%] z-10 animate-[float_4s_ease-in-out_infinite_0.5s]">
                <Image
                    width={1920}
                    height={1080}
                    src="/Coffe.png"
                    alt="Our Story"
                    className="w-[30px] xl:w-[50px]"
                />
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 mt-10 lg:mt-20">
                <h1 className="text-[30px] md:text-[40px] lg:text-[80px] xl:text-[120px] text-red-color">
                    Every cup
                </h1>
                <p className="text-[18px] md:text-[20px] lg:text-[62px] xl:text-[80px] text-text-color font-semibold">
                    here tells a story!
                </p>
            </div>

            <div className="bg-[#f1f2f2] px-4 sm:px-8 md:px-16 lg:px-24 py-10 mt-8 md:mt-4 flex flex-col md:flex-row items-center relative">
                <div className="absolute top-[-5.4%] right-[20%] lg:top-[-6%] xl:top-[-9%] lg:right-[10%] ">
                    <Image
                        width={1920}
                        height={1080}
                        src="/HomeCorner.png"
                        alt="welcometext"
                        className="w-[260px] md:w-[260px] lg:w-[400px] xl:w-[500px]"
                    />
                </div>
                <div className="absolute bottom-[-8%] right-[20%] lg:bottom-[-8%] xl:bottom-[-11%] lg:right-[10%] ">
                    <Image
                        width={1920}
                        height={1080}
                        src="/HomeCornerBottom.png"
                        alt="welcometext"
                        className="w-[260px] md:w-[260px] lg:w-[400px] xl:w-[500px]"
                    />
                </div>
                <p className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[40px] text-text-color  md:w-[49%]">
                    We believe coffee is more than just a drink — it&apos;s a
                    quiet moment shared, a connection made. Here, between two
                    cups, stories unfold and warmth takes shape.!
                </p>

                <div className="w-full">
                    <Image
                        width={1920}
                        height={1080}
                        src="/EveryCupImg.png"
                        alt="Our Story"
                        className="w-fit"
                    />
                </div>
            </div>
        </div>
    );
};

export default EveryCup;
