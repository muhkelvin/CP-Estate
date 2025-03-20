// components/ServiceDetailLayout.js
import Link from 'next/link';

export default function ServiceDetailLayout({ children, title, heroImage, intro }) {
    return (
        <div className="bg-[#faf9f7] min-h-screen">
            {/* Hero Section */}
            <div className="relative h-96">
                <div className="absolute inset-0 bg-[url('/service-hero.jpg')] bg-cover bg-center" />
                <div className="relative h-full bg-black/40 flex items-center">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="font-playfair text-4xl text-white mb-4">{title}</h1>
                        <p className="font-poppins text-xl text-gray-200 max-w-2xl">{intro}</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="bg-white rounded-xl shadow-sm p-8">
                    {children}

                    {/* CTA Section */}
                    <div className="mt-16 text-center border-t pt-16">
                        <h2 className="font-playfair text-3xl mb-6">Siap Memulai?</h2>
                        <Link
                            href="/contact"
                            className="bg-[#c5a47e] text-white px-8 py-3 rounded-lg inline-block hover:bg-[#b08f68]"
                        >
                            Hubungi Kami Sekarang
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}