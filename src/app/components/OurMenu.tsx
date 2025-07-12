import { ChevronRight } from "lucide-react";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Latte",
        price: "AED 17.25",
        image: "/LatteCard.jpg",
    },
    {
        id: 2,
        name: "Cappuccino",
        price: "AED 17.25",
        image: "/CappuccinoCard.jpg",
    },
    {
        id: 3,
        name: "Hot Chocolate",
        price: "AED 17.25",
        image: "/HotChocolateCard.jpg",
    },
];

const OurMenu = () => {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 lg:mt-20 mt-20">
            <div className="flex flex-col justify-center items-center mb-4 ">
                <h1 className="text-orange-color text-[60px] md:text-7xl lg:text-text-7xl xl:text-[80px] font-bold xl:mb-6">
                    Our Menu
                </h1>
                <h3 className="text-text-color text-xl md:text-4xl lg:text-5xl xl:text-[50px] text-center">
                    Explore our curated selection of flavors
                </h3>
                <h3 className="text-text-color text-2xl md:text-4xl lg:text-5xl xl:text-[50px] mt-[-10px] lg:mt-0">
                    crafted to delight your palate.
                </h3>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#f1f2f2] p-4 rounded-md overflow-hidden hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Product Image */}
                            <div className="">
                                <div className="h-[500px] rounded-md">
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src={product.image}
                                        alt={product.name}
                                        className="w-[100%] h-[100%] object-cover rounded-xs"
                                    />
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-4 flex justify-between mt-8">
                                <div>
                                    <h3 className="text-lg font-semibold text-text-color ">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-text-color">
                                        16 oz • Hot • 16 oz
                                    </p>
                                </div>

                                {/* Price and Add to Cart */}
                                <div className="flex items-center justify-between">
                                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                        {product.price}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-8">
                <a href="/menu.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-3xl md:text-5xl font-medium transition-colors duration-200 flex gap-2 cursor-pointer">
                        Full Menu
                        <ChevronRight className="size-10 md:size-14" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default OurMenu;
