export interface MenuItem {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    price?: string;
}

export interface MenuCategory {
    id: string;
    name: string;
    items: MenuItem[];
}

export const menuData: MenuCategory[] = [
    {
        id: "hot-drinks",
        name: "Hot Drinks",
        items: [
            {
                id: "latte",
                name: "Latte",
                description:
                    "Espresso with steamed milk and a thin layer of foam",
                image: "/api/placeholder/300/200",
                category: "hot-drinks",
                price: "AED 18.00",
            },
            {
                id: "cappuccino",
                name: "Cappuccino",
                description: "Espresso with steamed milk foam and cocoa powder",
                image: "/api/placeholder/300/200",
                category: "hot-drinks",
                price: "AED 16.00",
            },
            {
                id: "americano",
                name: "Americano",
                description: "Espresso shots with hot water for a smooth taste",
                image: "/api/placeholder/300/200",
                category: "hot-drinks",
                price: "AED 15.00",
            },
            {
                id: "mocha",
                name: "Mocha",
                description:
                    "Rich chocolate blended with espresso and steamed milk",
                image: "/api/placeholder/300/200",
                category: "hot-drinks",
                price: "AED 20.00",
            },
        ],
    },
    {
        id: "cold-drinks",
        name: "Cold Drinks",
        items: [
            {
                id: "iced-latte",
                name: "Iced Latte",
                description: "Chilled espresso with cold milk and ice",
                image: "/api/placeholder/300/200",
                category: "cold-drinks",
                price: "AED 19.00",
            },
            {
                id: "frappuccino",
                name: "Frappuccino",
                description: "Blended ice coffee with whipped cream",
                image: "/api/placeholder/300/200",
                category: "cold-drinks",
                price: "AED 22.00",
            },
            {
                id: "iced-americano",
                name: "Iced Americano",
                description: "Espresso shots with cold water and ice",
                image: "/api/placeholder/300/200",
                category: "cold-drinks",
                price: "AED 16.00",
            },
            {
                id: "cold-brew",
                name: "Cold Brew",
                description:
                    "Smooth coffee brewed with cold water for 12 hours",
                image: "/api/placeholder/300/200",
                category: "cold-drinks",
                price: "AED 18.00",
            },
        ],
    },
    {
        id: "pastries",
        name: "Pastries",
        items: [
            {
                id: "croissant",
                name: "Croissant",
                description: "Buttery, flaky pastry perfect with coffee",
                image: "/api/placeholder/300/200",
                category: "pastries",
                price: "AED 8.00",
            },
            {
                id: "muffin",
                name: "Blueberry Muffin",
                description: "Fresh baked muffin with juicy blueberries",
                image: "/api/placeholder/300/200",
                category: "pastries",
                price: "AED 10.00",
            },
            {
                id: "danish",
                name: "Danish Pastry",
                description: "Sweet pastry with cream cheese filling",
                image: "/api/placeholder/300/200",
                category: "pastries",
                price: "AED 12.00",
            },
            {
                id: "scone",
                name: "Scone",
                description: "Traditional British pastry with jam and cream",
                image: "/api/placeholder/300/200",
                category: "pastries",
                price: "AED 9.00",
            },
        ],
    },
    {
        id: "sandwiches",
        name: "Sandwiches",
        items: [
            {
                id: "club-sandwich",
                name: "Club Sandwich",
                description:
                    "Triple-decker with turkey, bacon, lettuce and tomato",
                image: "/api/placeholder/300/200",
                category: "sandwiches",
                price: "AED 25.00",
            },
            {
                id: "grilled-cheese",
                name: "Grilled Cheese",
                description: "Melted cheese on toasted bread",
                image: "/api/placeholder/300/200",
                category: "sandwiches",
                price: "AED 18.00",
            },
            {
                id: "panini",
                name: "Italian Panini",
                description: "Grilled sandwich with mozzarella and tomato",
                image: "/api/placeholder/300/200",
                category: "sandwiches",
                price: "AED 22.00",
            },
            {
                id: "wrap",
                name: "Chicken Wrap",
                description: "Grilled chicken with vegetables in a tortilla",
                image: "/api/placeholder/300/200",
                category: "sandwiches",
                price: "AED 20.00",
            },
        ],
    },
    {
        id: "desserts",
        name: "Desserts",
        items: [
            {
                id: "cheesecake",
                name: "Cheesecake",
                description: "Rich and creamy New York style cheesecake",
                image: "/api/placeholder/300/200",
                category: "desserts",
                price: "AED 15.00",
            },
            {
                id: "tiramisu",
                name: "Tiramisu",
                description: "Italian dessert with coffee-soaked ladyfingers",
                image: "/api/placeholder/300/200",
                category: "desserts",
                price: "AED 18.00",
            },
            {
                id: "chocolate-cake",
                name: "Chocolate Cake",
                description: "Decadent chocolate cake with rich frosting",
                image: "/api/placeholder/300/200",
                category: "desserts",
                price: "AED 16.00",
            },
            {
                id: "cookies",
                name: "Cookies",
                description: "Fresh baked chocolate chip cookies",
                image: "/api/placeholder/300/200",
                category: "desserts",
                price: "AED 6.00",
            },
        ],
    },
];
