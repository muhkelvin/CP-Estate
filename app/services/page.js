// app/services/page.js
import React from 'react';
import { Home, HandCoins, ClipboardList, LineChart, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
    const services = [
        {
            id: 'pembelian',
            title: 'Pembelian Properti',
            icon: <Home className="w-12 h-12" />,
            desc: 'Temukan properti ideal dengan bantuan ahli kami',
            gradient: 'from-[#c5a47e] to-[#e8d5b5]'
        },
        {
            id: 'penjualan',
            title: 'Penjualan Properti',
            icon: <HandCoins className="w-12 h-12" />,
            desc: 'Maximalkan keuntungan penjualan properti Anda',
            gradient: 'from-[#1a365d] to-[#2a4a7a]'
        },
        {
            id: 'sewa',
            title: 'Sewa/Penyewaan',
            icon: <ClipboardList className="w-12 h-12" />,
            desc: 'Kelola properti sewa secara profesional',
            gradient: 'from-[#c5a47e] to-[#e8d5b5]'
        },
        {
            id: 'manajemen',
            title: 'Manajemen Properti',
            icon: <ClipboardCheck className="w-12 h-12" />,
            desc: 'Solusi lengkap pengelolaan properti',
            gradient: 'from-[#1a365d] to-[#2a4a7a]'
        },
        {
            id: 'konsultasi',
            title: 'Konsultasi Investasi',
            icon: <LineChart className="w-12 h-12" />,
            desc: 'Strategi investasi properti terbaik',
            gradient: 'from-[#c5a47e] to-[#e8d5b5]'
        }
    ];

    return (
        <div className="min-h-screen bg-[#faf9f7]">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#1a365d] to-[#0a1a2f] py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="font-playfair text-5xl text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c5a47e] to-[#e8d5b5]">
              Layanan Eksklusif
            </span>
                    </h1>
                    <p className="font-poppins text-xl text-gray-200 max-w-2xl mx-auto">
                        Transformasi pengalaman properti Anda dengan solusi premium
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="group relative bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="relative p-8 lg:p-10 h-full flex flex-col space-y-6">
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-[#1a365d]/10 to-[#c5a47e]/10 shadow-md">
                                        {React.cloneElement(service.icon, {
                                            className: `${service.icon.props.className} text-[#1a365d] group-hover:text-[#c5a47e] transition-colors`
                                        })}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="font-playfair text-3xl text-[#1a365d] mb-4 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="font-poppins text-gray-600 text-lg mb-8 opacity-90">
                                    {service.desc}
                                </p>

                                {/* Button */}
                                <div className="mt-auto">
                                    <div className="inline-flex items-center gap-3 text-[#1a365d] group-hover:text-[#c5a47e] transition-colors">
                    <span className="font-poppins font-semibold text-lg tracking-wide">
                      Jelajahi Layanan
                    </span>
                                        <svg
                                            className="w-6 h-6 transition-transform group-hover:translate-x-2 group-hover:scale-125"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}