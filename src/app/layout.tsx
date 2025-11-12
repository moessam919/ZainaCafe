import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ensureServerLocalStorage = () => {
    if (typeof window !== "undefined") {
        return;
    }

    const globalForServer = globalThis as typeof globalThis & {
        localStorage?: Storage;
    };

    const storage = globalForServer.localStorage;

    if (storage && typeof storage.getItem === "function") {
        return;
    }

    const memory = new Map<string, string>();

    const polyfill: Storage = {
        get length() {
            return memory.size;
        },
        clear() {
            memory.clear();
        },
        getItem(key: string) {
            const normalizedKey = String(key);
            return memory.has(normalizedKey)
                ? memory.get(normalizedKey)!
                : null;
        },
        key(index: number) {
            return Array.from(memory.keys())[index] ?? null;
        },
        removeItem(key: string) {
            memory.delete(String(key));
        },
        setItem(key: string, value: string) {
            memory.set(String(key), String(value));
        },
    };

    globalForServer.localStorage = polyfill;
};

ensureServerLocalStorage();

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Zaina Cafe",
    description:
        "Zaina Cafe – Conveniently located within Saudi German Hospital Dubai. We offer a wide selection of coffee, beverages, and light meals to refresh and energize you during your visit. Come experience our warm hospitality and delicious offerings.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` ${poppins.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
