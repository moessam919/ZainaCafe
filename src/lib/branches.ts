export type Branch = {
    id: number;
    name: string;
    city: string;
    lat: number;
    lng: number;
    distance?: number;
    address?: string;
    phone?: string;
    hours?: string;
    rating?: number;
};
export const branches: Branch[] = [
    {
        id: 1,
        name: "Zaina Cafe, Ajman",
        city: "Ajman",
        lat: 25.36828976868124,
        lng: 55.50948395767223,
        address:
            "Sheikh Ammar Bin Humaid St - Al Tallah 2 - Ajman - United Arab Emirates",
        phone: "+97167161267",
        hours: "8:00 AM - 9:00 PM",
        rating: 4.8,
    },
    {
        id: 2,
        name: "Zaina Cafe, Dubai",
        city: "Dubai",
        lat: 25.097111315928842,
        lng: 55.18376727116389,
        address: "Al Barsha - Al Barsha 3 - Dubai - United Arab Emirates",
        phone: "+97143890360",
        hours: "8:00 AM - 9:00 PM",
        rating: 4.6,
    },
];
