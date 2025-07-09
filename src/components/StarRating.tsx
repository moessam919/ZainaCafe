// components/StarRating.tsx
import React from "react";

type StarRatingProps = {
    rating: number; // Rating from 1 to 5
    baseSize?: "sm" | "md" | "lg"; // Base size for regular stars
    middleStarSize?: "sm" | "md" | "lg"; // Size for middle star
};

const StarRating = ({
    rating,
    baseSize = "md",
    middleStarSize = "lg",
}: StarRatingProps) => {
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-12 w-12 md:h-25 md:w-25",
        lg: "h-12 w-12 md:h-30 md:w-30", // Larger size for middle star
    };

    const middleStarIndex = 2; // 3rd star (0-based index)

    return (
        <div className="flex justify-center items-end">
            {" "}
            {/* items-end to align bottom of stars */}
            {[0, 1, 2, 3, 4].map((index) => (
                <div
                    key={index}
                    className={`relative ${
                        index === middleStarIndex ? "-mt-2" : ""
                    }`} // Lift middle star
                >
                    <svg
                        className={`${
                            index === middleStarIndex
                                ? sizeClasses[middleStarSize]
                                : sizeClasses[baseSize]
                        } mx-0.5 ${
                            index + 1 <= rating
                                ? "text-orange-color"
                                : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>
            ))}
        </div>
    );
};

export default StarRating;
