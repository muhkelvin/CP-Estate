// app/properties/page.js
'use client';
import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { BedDouble, Bath, Ruler } from 'lucide-react';
import { properties } from '@/app/utilities/properties'; // Import dari utility

export default function PropertiesListing() {
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('latest');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100000000000 });
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedFacilities, setSelectedFacilities] = useState([]);

    // Fungsi filter
    const filteredProperties = properties.filter(property => {
        // Filter harga
        const price = parseInt(property.price.replace(/[^0-9]/g, ''));
        const priceInRange = price >= priceRange.min && price <= priceRange.max;

        // Filter tipe properti
        const typeMatch = selectedTypes.length === 0 ||
            selectedTypes.includes(property.type);

        // Filter fasilitas (contoh)
        const facilityMatch = selectedFacilities.length === 0 ||
            selectedFacilities.every(fac => property.facilities?.includes(fac));

        return priceInRange && typeMatch && facilityMatch;
    });

    // Fungsi sorting
    const sortedProperties = [...filteredProperties].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));

        switch(sortBy) {
            case 'price-high': return priceB - priceA;
            case 'price-low': return priceA - priceB;
            default: return new Date(b.date) - new Date(a.date);
        }
    });

    // Handle filter type
    const handleTypeFilter = (type) => {
        setSelectedTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
    };

    return (
        <div className="bg-[#faf9f7] min-h-screen">
            {/* Filter Section */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Mobile Filter Toggle */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="md:hidden flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm"
                    >
                        <SlidersHorizontal size={18} />
                        Filter
                    </button>

                    {/* Sidebar Filters */}
                    <div className={`${showFilters ? 'block' : 'hidden'} md:block md:w-80 bg-white p-6 rounded-xl shadow-sm h-fit sticky top-8`}>
                        <h3 className="font-playfair text-xl mb-6">Filter Pencarian</h3>

                        <div className="space-y-6">
                            {/* Property Type */}
                            <div>
                                <h4 className="font-poppins font-semibold mb-3">Tipe Properti</h4>
                                {['Rumah', 'Apartemen', 'Komersial'].map((type) => (
                                    <label key={type} className="flex items-center gap-2 mb-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedTypes.includes(type)}
                                            onChange={() => handleTypeFilter(type)}
                                            className="rounded text-[#c5a47e]"
                                        />
                                        <span className="text-sm">{type}</span>
                                    </label>
                                ))}
                            </div>

                            {/* Location */}
                            <div>
                                <h4 className="font-poppins font-semibold mb-3">Lokasi</h4>
                                <select className="w-full p-2 border rounded-md">
                                    <option>Semua Lokasi</option>
                                    <option>Jakarta Selatan</option>
                                    <option>Bandung</option>
                                    <option>Bali</option>
                                </select>
                            </div>

                            {/* Price Range */}
                            <div>
                                <h4 className="font-poppins font-semibold mb-3">Range Harga</h4>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        placeholder="Minimum"
                                        className="w-full p-2 border rounded-md"
                                        value={priceRange.min}
                                        onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Maksimum"
                                        className="w-full p-2 border rounded-md"
                                        value={priceRange.max}
                                        onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                                    />
                                </div>
                            </div>

                            {/* Facilities */}
                            <div>
                                <h4 className="font-poppins font-semibold mb-3">Fasilitas</h4>
                                {['Kolam Renang', 'Parkir', 'Security 24/7', 'Gym'].map((facility) => (
                                    <label key={facility} className="flex items-center gap-2 mb-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedFacilities.includes(facility)}
                                            onChange={() => setSelectedFacilities(prev =>
                                                prev.includes(facility)
                                                    ? prev.filter(f => f !== facility)
                                                    : [...prev, facility]
                                            )}
                                            className="rounded text-[#c5a47e]"
                                        />
                                        <span className="text-sm">{facility}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Sorting Header */}
                        <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <h2 className="font-playfair text-2xl mb-4 md:mb-0">
                                    Menampilkan {sortedProperties.length} Properti
                                </h2>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm">Urutkan:</span>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="border rounded-md p-2 text-sm"
                                    >
                                        <option value="latest">Terbaru</option>
                                        <option value="price-high">Harga Tertinggi</option>
                                        <option value="price-low">Harga Terendah</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Property Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedProperties.map((property) => (
                                <div
                                    key={property.id}
                                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                                >
                                    <div
                                        className="h-56 bg-gray-200 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${property.image})` }}
                                    ></div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-poppins font-semibold text-lg">{property.title}</h3>
                                            <span className="bg-[#c5a47e] text-white px-2 py-1 rounded-md text-sm">
                        {property.type}
                      </span>
                                        </div>
                                        <p className="text-[#c5a47e] text-xl font-medium mb-4">{property.price}</p>
                                        <div className="flex items-center gap-4 text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <BedDouble size={18} />
                                                <span>{property.bedrooms}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Bath size={18} />
                                                <span>{property.bathrooms}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Ruler size={18} />
                                                <span>{property.area}m²</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center gap-2 text-sm">
                                            <span className="text-gray-500">{property.location}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}