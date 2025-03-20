// app/layout.js
import './globals.css';
import { Poppins, Playfair_Display } from 'next/font/google';
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";


const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const poppins = Poppins({
    weight: ['300', '400', '500', '600'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
});

export const metadata = {
    title: 'LuxeLiving',
    description: 'Premium Real Estate Solutions',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
        <body className="min-h-screen flex flex-col bg-[#faf9f7]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        </body>
        </html>
    );
}