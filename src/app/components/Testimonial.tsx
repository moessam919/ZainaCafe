"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Type definitions
interface Testimonial {
    id: number;
    rating: number;
    title: string;
    content: string;
    author: string;
}

// StarRating component (using your custom component)
type StarRatingProps = {
    rating: number; // Rating from 1 to 5
    baseSize?: "sm" | "md" | "lg"; // Base size for regular stars
    middleStarSize?: "sm" | "md" | "lg"; // Size for middle star
};

const StarRating: React.FC<StarRatingProps> = ({
    rating,
    baseSize = "md",
    middleStarSize = "lg",
}) => {
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-12 w-12 lg:h-20 lg:w-20",
        lg: "h-14 w-14 lg:h-30 lg:w-30", // Larger size for middle star
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

const TestimonialSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            rating: 5,
            title: "Amazing Experience",
            content:
                "The coffee shop is super. The latte was amazing. The french club sandwish is amazing. The baristas are friendly and welcoming.",
            author: "Ahmed AL Saadawi",
        },
        {
            id: 2,
            rating: 5,
            title: "Outstanding Service",
            content:
                "The staff there are more then amazing, also the coffee and the place is nice, I recommends this place.",
            author: "Bader Awad",
        },
        {
            id: 3,
            rating: 5,
            title: "Highly Recommended",
            content:
                "Zaina Cafe near Saudi German Hospital is hands-down one of the best Ajman cafes! The ambiance is elegant yet cozy, perfect for relaxing or catching up with friends. Service is top-notch—staff are friendly, attentive, and fast. Whether you're in the mood for specialty coffee or a light bite, this place delivers. Highly recommended for anyone searching for a quality cafe experience in Ajman!”",
            author: "Dr. Pawar",
        },
    ];

    const nextSlide = useCallback((): void => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev: number) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, testimonials.length]);

    const prevSlide = (): void => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev: number) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToSlide = (index: number): void => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const currentTestimonial: Testimonial = testimonials[currentSlide];

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 lg:mt-20 mt-20 bg-[#f1f2f2]">
            {/* Google Reviews Header */}
            <div className="flex flex-col items-center justify-center pt-8 ">
                <Image
                    src="/google-logo.webp"
                    alt="Google Logo"
                    width={200}
                    height={50}
                    className="object-contain"
                    priority
                />
                <p className="text-[#6e7271] text-2xl font-bold -mt-1">
                    Reviews
                </p>
            </div>

            <div className="py-10 flex justify-center items-center relative">
                <div className="star flex flex-col justify-center items-center max-w-4xl w-full">
                    {/* Star Rating */}
                    <div
                        className={`transform transition-all duration-500 ${
                            isAnimating
                                ? "opacity-0 translate-y-4"
                                : "opacity-100 translate-y-0"
                        }`}
                    >
                        <StarRating rating={currentTestimonial.rating} />
                    </div>

                    {/* Title */}
                    <h1
                        className={`text-center text-4xl md:text-6xl font-semibold mt-10 text-orange-color transform transition-all duration-500 delay-100 ${
                            isAnimating
                                ? "opacity-0 translate-y-4"
                                : "opacity-100 translate-y-0"
                        }`}
                    >
                        {currentTestimonial.title}
                    </h1>

                    {/* Content */}
                    <div className="w-full md:w-[70%] text-center">
                        <p
                            className={`text-center text-lg md:text-2xl font-medium text-text-color mt-10 leading-relaxed transform transition-all duration-500 delay-200 ${
                                isAnimating
                                    ? "opacity-0 translate-y-4"
                                    : "opacity-100 translate-y-0"
                            }`}
                        >
                            {currentTestimonial.content}
                        </p>
                    </div>

                    {/* Author */}
                    <div
                        className={`mt-8 text-center transform transition-all duration-500 delay-300 ${
                            isAnimating
                                ? "opacity-0 translate-y-4"
                                : "opacity-100 translate-y-0"
                        }`}
                    >
                        <p className="text-lg font-semibold text-gray-800">
                            {currentTestimonial.author}
                        </p>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    disabled={isAnimating}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hidden md:flex"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <button
                    onClick={nextSlide}
                    disabled={isAnimating}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hidden md:flex"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center pb-10 space-x-2">
                {testimonials.map((_, index: number) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isAnimating}
                        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                            index === currentSlide
                                ? "bg-orange-color scale-125"
                                : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
