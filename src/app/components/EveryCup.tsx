import Image from "next/image";

const EveryCup = () => {
    return (
        <div className="relative">
            <div className="absolute hidden lg:flex lg:top-20 lg:right-70 xl:top-20 xl:right-70  z-10 animate-[float_4s_ease-in-out_infinite]">
                <Image
                    width={1920}
                    height={1080}
                    src="/SingleCoffe.png"
                    alt="SingleCoffe"
                    className="w-[100px] xl:w-[90px] 2xl:w-30"
                />
            </div>

            <div className="absolute hidden lg:flex lg:top-[6%] lg:right-[50%] xl:top-30 xl:right-[46%] 2xl:top-35 2xl:right-[56%] z-10 animate-[float_4s_ease-in-out_infinite_0.5s]">
                <Image
                    width={1920}
                    height={1080}
                    src="/coffe.png"
                    alt="coffe"
                    className="w-[30px] xl:w-[50px] 2xl:w-15"
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

            <div className="bg-[#f1f2f2] px-4 sm:px-8 md:px-16 lg:px-24 py-10 mt-8 md:mt-4 flex items-center relative w-full">
                <div className="absolute top-[-5%] sm:-top-5 right-[20%] lg:top-[-6%] xl:-top-7 lg:right-[10%] 2xl:-top-9">
                    <Image
                        width={1920}
                        height={1080}
                        src="/HomeCorner.png"
                        alt="HomeCorner"
                        className="w-[260px] md:w-[260px] lg:w-[400px] xl:w-90 2xl:w-[30rem]"
                    />
                </div>
                <div className="absolute bottom-[-6%] right-[20%] lg:bottom-[-8%] xl:-bottom-9 lg:right-[10%]  2xl:-bottom-11">
                    <Image
                        width={1920}
                        height={1080}
                        src="/HomeCornerBottom.png"
                        alt="HomeCornerBottom"
                        className="w-[260px] md:w-[260px] lg:w-[400px] xl:w-90 2xl:w-[30rem]"
                    />
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <p className="text-[18px] md:text-[30px]  xl:text-[40px] text-text-color  md:w-[49%]">
                        We believe coffee is more than just a drink — it&apos;s
                        a quiet moment shared, a connection made. Here, between
                        two cups, stories unfold and warmth takes shape.!
                    </p>

                    <div className="mt-5 lg:mt-0">
                        <Image
                            width={1920}
                            height={1080}
                            src="/DSC07029.webp"
                            alt="Our Story"
                            className="w-fit md:w-[500px] lg:w-[700px] lg:h-[400px] rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EveryCup;
