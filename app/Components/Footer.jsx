// components/Footer.js
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#1a365d] text-white mt-24">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-playfair text-xl">
                            Luxe<span className="text-[#c5a47e]">Living</span>
                        </h3>
                        <p className="text-sm text-[#cbd5e0] max-w-xs">
                            Transforming real estate experiences through innovation and excellence
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-poppins font-semibold text-sm">Explore</h4>
                        <ul className="space-y-2 text-sm text-[#cbd5e0]">
                            <li><Link href="/properties" className="hover:text-[#c5a47e] transition-colors">All Properties</Link></li>
                            <li><Link href="/about" className="hover:text-[#c5a47e] transition-colors">Our Story</Link></li>
                            <li><Link href="/proses-klaim" className="hover:text-[#c5a47e] transition-colors">Services</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-poppins font-semibold text-sm">Legal</h4>
                        <ul className="space-y-2 text-sm text-[#cbd5e0]">
                            <li><Link href="#" className="hover:text-[#c5a47e] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-[#c5a47e] transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-poppins font-semibold text-sm">Contact</h4>
                        <p className="text-sm text-[#cbd5e0]">
                            Sudirman Central Business District<br/>
                            Jakarta Selatan 12190<br/>
                            Indonesia
                        </p>
                    </div>
                </div>

                <div className="border-t border-[#2d436b] mt-8 pt-8 text-center text-sm text-[#cbd5e0]">
                    <p>© {new Date().getFullYear()} LuxeLiving. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}