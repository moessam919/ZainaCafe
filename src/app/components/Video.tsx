import Image from "next/image";
import React from "react";

const Video = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 mt-10 lg:mt-20 ">
                <Image
                    width={1920}
                    height={1080}
                    src="/video.png"
                    alt="video"
                />
            </div>
        </div>
    );
};

export default Video;
