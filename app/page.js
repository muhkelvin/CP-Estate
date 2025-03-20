// app/page.js
import Link from 'next/link';
import Image from 'next/image';
import { HomeIcon, CurrencyDollarIcon, BuildingLibraryIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Home() {
  // Data Properti Unggulan - dapat dengan mudah ditambahkan atau dimodifikasi
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Apartment SCBD",
      price: "Rp 8,5 Miliar",
      bedrooms: 3,
      bathrooms: 2,
      location: "Jakarta Selatan",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Villa Exclusive Bali",
      price: "Rp 12 Miliar",
      bedrooms: 4,
      bathrooms: 4,
      location: "Canggu, Bali",
      image: "https://images.unsplash.com/photo-1604014238312-ccb88904fa7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Penthouse Kemang Village",
      price: "Rp 15 Miliar",
      bedrooms: 5,
      bathrooms: 3,
      location: "Jakarta Selatan",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Andi Wijaya",
      role: "Investor Properti",
      text: "Pelayanan profesional dan transparan. Membantu saya menemukan properti investasi terbaik di Jakarta."
    },
    {
      name: "Sarah Tan",
      role: "Home Owner",
      text: "Proses jual beli rumah sangat cepat dan aman. Tim agennya sangat responsif!"
    }
  ];

  const blogPosts = [
    {
      title: "5 Tren Properti 2024 yang Perlu Anda Ketahui",
      excerpt: "Pelajari perkembangan terbaru pasar properti Indonesia...",
      category: "Market Update",
      image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
    },
    {
      title: "Tips Memilih Lokasi Investasi Properti Tepat",
      excerpt: "Bagaimana menentukan lokasi strategis untuk investasi jangka panjang...",
      category: "Investment Tips",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];


  return (
      <div className="bg-[#faf9f7]">
        {/* Hero Section */}
        <section className="relative h-[80vh]">
          {/* Background image with overlay - fixed implementation */}
          <div className="absolute inset-0 bg-cover bg-center"
               style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
               }}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/70 to-transparent"></div>
          </div>

          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="font-playfair text-5xl md:text-6xl text-white mb-6 leading-tight">
                  Temukan Hunian <span className="text-[#c5a47e]">Premium</span> Impian Anda
                </h1>

                {/* Quick Search Bar */}
                <div className="bg-white rounded-lg p-4 shadow-xl">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <select className="p-2 border rounded-md text-sm">
                      <option>Tipe Properti</option>
                      <option>Rumah</option>
                      <option>Apartemen</option>
                      <option>Komersial</option>
                    </select>

                    <select className="p-2 border rounded-md text-sm">
                      <option>Lokasi</option>
                      <option>Jakarta Selatan</option>
                      <option>Bandung</option>
                      <option>Bali</option>
                    </select>

                    <select className="p-2 border rounded-md text-sm">
                      <option>Harga</option>
                      <option>Rp 1-5 Miliar</option>
                      <option>Rp 5-10 Miliar</option>
                    </select>

                    <select className="p-2 border rounded-md text-sm">
                      <option>Kamar Tidur</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                    </select>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <Link href="/properties" className="w-full">
                        <button className="w-full bg-[#c5a47e] text-white py-2 rounded-md text-sm hover:bg-[#b08f68] transition-colors">
                          Cari Properti
                        </button>
                      </Link>

                      <a
                          href="https://wa.me/628123456789"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                      >
                        <button className="w-full border border-[#c5a47e] text-[#c5a47e] py-2 rounded-md text-sm hover:bg-[#c5a47e]/10 transition-colors">
                          Konsultasi Gratis
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties - Modified with constant data */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-playfair text-3xl text-center mb-12">Properti Unggulan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                  <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className="h-64 relative">
                      <Image
                          src={property.image}
                          alt={property.title}
                          fill
                          className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-poppins font-semibold text-lg">{property.title}</h3>
                      <p className="text-[#c5a47e] text-xl my-2">{property.price}</p>
                      <div className="flex items-center text-gray-600 text-sm">
                        <span className="mr-4">{property.bedrooms} Kamar Tidur</span>
                        <span>{property.bathrooms} Kamar Mandi</span>
                      </div>
                      <p className="mt-2 text-gray-600">{property.location}</p>
                      <button className="mt-4 w-full bg-[#1a365d] text-white py-2 rounded-md text-sm hover:bg-[#132845] transition-colors">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/properties" className="text-[#c5a47e] border border-[#c5a47e] px-6 py-2 rounded-md inline-block hover:bg-[#c5a47e] hover:text-white transition-all">
                Lihat Semua Properti
              </Link>
            </div>
          </div>
        </section>

        {/* Company Intro */}
        <section className="bg-[#1a365d] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-4xl mb-6">
                  Berkomitmen Menyediakan Hunian Premium Sejak 2010
                </h2>
                <p className="font-poppins text-gray-300 leading-relaxed">
                  Sebagai pelopor dalam industri properti premium, kami menghadirkan solusi lengkap
                  mulai dari pencarian properti, konsultasi investasi, hingga manajemen properti.
                  Pengalaman luas dan jaringan profesional kami menjamin kepuasan setiap klien.
                </p>
              </div>
              <div className="h-96 bg-gray-200 relative rounded-xl overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                    alt="Tentang Kami"
                    fill
                    className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Layanan Unggulan */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-playfair text-3xl text-center mb-12">Layanan Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ServiceCard
                  icon={HomeIcon}
                  title="Jual Properti"
                  description="Proses penjualan aman dengan harga kompetitif"
              />
              <ServiceCard
                  icon={CurrencyDollarIcon}
                  title="Beli Properti"
                  description="Temukan properti impian dengan kebutuhan spesifik Anda"
              />
              <ServiceCard
                  icon={BuildingLibraryIcon}
                  title="Sewa Properti"
                  description="Manajemen properti sewa profesional"
              />
              <ServiceCard
                  icon={UserGroupIcon}
                  title="Manajemen Properti"
                  description="Pengelolaan properti komersial dan residensial"
              />
            </div>
          </div>
        </section>

        {/* Testimoni */}
        <section className="bg-[#f5f3f0] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-playfair text-3xl text-center mb-12">Apa Kata Klien Kami?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testi, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                    <p className="text-gray-600 mb-4">"{testi.text}"</p>
                    <h4 className="font-poppins font-semibold">{testi.name}</h4>
                    <p className="text-sm text-[#c5a47e]">{testi.role}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Highlights */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 relative">
                      <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-[#c5a47e]">{post.category}</span>
                      <h3 className="font-poppins font-semibold mt-2 mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm">{post.excerpt}</p>

                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#1a365d] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="font-playfair text-4xl mb-6">Siap Memulai Pencarian Properti Anda?</h2>
            <p className="font-poppins text-xl mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dengan ahli properti kami
            </p>
            <Link
                href="/contact"
                className="bg-[#c5a47e] text-white px-8 py-3 rounded-lg inline-block hover:bg-[#b08f68] transition-all"
            >
              Hubungi Kami Sekarang
            </Link>
          </div>
        </section>
      </div>
  );
}

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="text-center p-6 hover:bg-white hover:shadow-lg rounded-xl transition-all">
      <div className="flex justify-center mb-4">
        <Icon className="h-12 w-12 text-[#c5a47e]" />
      </div>
      <h3 className="font-poppins font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
);