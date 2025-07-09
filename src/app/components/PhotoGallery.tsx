import Image from "next/image";

const PhotoGallery = () => {
    return (
        <div className="relative  min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 lg:mt-20 mt-20">
            <div className=" mx-auto relative z-10">
                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left column - Text and images */}
                    <div className="space-y-6">
                        {/* Top text section */}
                        <div className=" p-6 ">
                            <Image
                                width={1920}
                                height={1080}
                                src="/sign.png"
                                alt="sign"
                                className="w-full"
                            />
                            <p className="text-text-color text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        {/* Small image */}
                        <div className="overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/two.png"
                                    alt="Photo Gallery"
                                    className="w-full "
                                />
                            </div>
                        </div>

                        {/* Tall image */}
                        <div className="  overflow-hidden  ">
                            <div className="w-full h-full  flex items-center justify-center">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/three.png"
                                    alt="Photo Gallery"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Middle column - Images */}
                    <div className="space-y-6">
                        {/* Large image */}
                        <div className=" overflow-hidden  ">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/one.png"
                                    alt="Photo Gallery"
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Medium image */}
                        <div className="overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/four.png"
                                    alt="Photo Gallery"
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Wide image */}
                        <div className="overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/five.png"
                                    alt="Photo Gallery"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right column - Images and text */}
                    <div className="space-y-6">
                        <div className="h-48 hidden lg:flex"></div>
                        {/* Small image */}
                        <div className=" overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/six.png"
                                    alt="Photo Gallery"
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Large image */}
                        <div className="overflow-hidden shadow-lg ">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src="/seven.png"
                                    alt="Photo Gallery"
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Bottom text section */}
                        <div className="p-6 ">
                            <Image
                                width={1920}
                                height={1080}
                                src="/sign.png"
                                alt="sign"
                                className="w-full"
                            />
                            <p className="text-text-color text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
