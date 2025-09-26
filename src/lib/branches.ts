export type Branch = {
    id: number;
    name: string;
    city: string;
    country: string;
    lat: number;
    lng: number;
    distance?: number;
    address?: string;
    phone?: string;
    hours?: string;
    rating?: number;
    flagIcon?: string;
};

export const countries = [
    {
        id: "UAE",
        name: "United Arab Emirates",
        icon: "/united-arab-emirates.png",
    },
    { id: "KSA", name: "Saudi Arabia", icon: "/saudi-arabia-icon.png" },
    { id: "EGY", name: "Egypt", icon: "/egypt.png" },
];

export const branches: Branch[] = [
    {
        id: 1,
        name: "Zaina Cafe, Ajman",
        city: "Ajman",
        country: "UAE",
        lat: 25.36828976868124,
        lng: 55.50948395767223,
        address:
            "Sheikh Ammar Bin Humaid St - Al Tallah 2 - Ajman - United Arab Emirates",
        phone: "+97167161267",
        hours: "8:00 AM - 9:00 PM",
        rating: 4.8,
        flagIcon: "/united-arab-emirates.png",
    },
    {
        id: 2,
        name: "Zaina Cafe, Dubai",
        city: "Dubai",
        country: "UAE",
        lat: 25.097111315928842,
        lng: 55.18376727116389,
        address: "Al Barsha - Al Barsha 3 - Dubai - United Arab Emirates",
        phone: "+97143890360",
        hours: "8:00 AM - 9:00 PM",
        rating: 4.6,
        flagIcon: "/united-arab-emirates.png",
    },
    {
        id: 3,
        name: "Zaina Cafe, Riyadh",
        city: "Riyadh",
        country: "KSA",
        lat: 24.774265,
        lng: 46.738586,
        address: "King Fahd Rd, Olaya District, Riyadh, Saudi Arabia",
        phone: "+966500518553",
        hours: "7:30 AM - 10:00 PM",
        rating: 4.7,
        flagIcon: "/saudi-arabia-icon.png",
    },
    {
        id: 4,
        name: "Zaina Cafe, Jeddah",
        city: "Jeddah",
        country: "KSA",
        lat: 21.543333,
        lng: 39.172779,
        address:
            "Prince Mohammed Bin Abdulaziz St, Al Andalus, Jeddah, Saudi Arabia",
        phone: "+966500518554",
        hours: "7:30 AM - 10:00 PM",
        rating: 4.5,
        flagIcon: "/saudi-arabia-icon.png",
    },
    // Egypt branches will be shown as "Coming Soon"
];
