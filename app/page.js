// app/page.js
import Link from 'next/link';
import Image from 'next/image';
import {
  HomeIcon,
  CurrencyDollarIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  StarIcon,
  BuildingOfficeIcon,
  FaceSmileIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  // Data Properti Unggulan - Ditambah menjadi 6 agar grid penuh
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Apartment SCBD",
      price: "Rp 8,5 Miliar",
      bedrooms: 3,
      bathrooms: 2,
      location: "Jakarta Selatan",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Villa Exclusive Bali",
      price: "Rp 12 Miliar",
      bedrooms: 4,
      bathrooms: 4,
      location: "Canggu, Bali",
      image: "https://images.unsplash.com/photo-1604014238312-ccb88904fa7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Penthouse Kemang Village",
      price: "Rp 15 Miliar",
      bedrooms: 5,
      bathrooms: 3,
      location: "Jakarta Selatan",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Modern Townhouse BSD",
      price: "Rp 4,2 Miliar",
      bedrooms: 3,
      bathrooms: 3,
      location: "Tangerang Selatan",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1175&q=80"
    },
    {
      id: 5,
      title: "Resort Home Dago Pakar",
      price: "Rp 7,8 Miliar",
      bedrooms: 4,
      bathrooms: 3,
      location: "Bandung, Jawa Barat",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      title: "Premium Office Space",
      price: "Rp 25 Miliar",
      bedrooms: 0,
      bathrooms: 4,
      location: "Sudirman, Jakarta",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
    }
  ];

  // Testimoni - Ditambah menjadi 4
  const testimonials = [
    {
      name: "Andi Wijaya",
      role: "Investor Properti",
      text: "Pelayanan profesional dan transparan. Membantu saya menemukan properti investasi terbaik di Jakarta."
    },
    {
      name: "Sarah Tan",
      role: "Home Owner",
      text: "Proses jual beli rumah sangat cepat dan aman. Tim agennya sangat responsif dan informatif!"
    },
    {
      name: "Budi Santoso",
      role: "Pengusaha",
      text: "Saya sudah menggunakan jasa mereka untuk 3 properti komersial saya. Sangat terpercaya dan memuaskan."
    },
    {
      name: "Diana Kusuma",
      role: "Ekspatriat",
      text: "Sangat membantu proses relokasi saya ke Bali. Villa yang direkomendasikan benar-benar sesuai ekspektasi."
    }
  ];

  // Blog Posts - Ditambah menjadi 3
  const blogPosts = [
    {
      title: "5 Tren Properti 2024 yang Perlu Anda Ketahui",
      excerpt: "Pelajari perkembangan terbaru pasar properti Indonesia dan area mana yang sedang naik daun...",
      category: "Market Update",
      image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80"
    },
    {
      title: "Tips Memilih Lokasi Investasi Properti Tepat",
      excerpt: "Bagaimana menentukan lokasi strategis untuk investasi jangka panjang dengan ROI maksimal...",
      category: "Investment Tips",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Panduan Pajak Jual Beli Properti",
      excerpt: "Mengenal rincian biaya dan pajak yang harus disiapkan saat Anda ingin membeli atau menjual rumah...",
      category: "Legal & Tax",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className="bg-[#faf9f7]">
      {/* Hero Section */}
      <section className="relative h-[85vh]">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop')"
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 to-[#1a365d]/40"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <span className="text-[#c5a47e] font-semibold tracking-wider uppercase mb-4 block">Exclusive Real Estate Agency</span>
              <h1 className="font-playfair text-5xl md:text-6xl text-white mb-6 leading-tight">
                Temukan Hunian <span className="text-[#c5a47e]">Premium</span> Impian Anda
              </h1>
              <p className="text-gray-200 mb-8 text-lg">Koleksi properti eksklusif di lokasi paling bergengsi, dikurasi khusus untuk gaya hidup Anda.</p>

              {/* Quick Search Bar */}
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1 font-semibold">Tipe Properti</label>
                    <select className="p-2 border-b border-gray-200 focus:outline-none focus:border-[#c5a47e] bg-transparent">
                      <option>Semua Tipe</option>
                      <option>Rumah</option>
                      <option>Apartemen</option>
                      <option>Komersial</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1 font-semibold">Lokasi</label>
                    <select className="p-2 border-b border-gray-200 focus:outline-none focus:border-[#c5a47e] bg-transparent">
                      <option>Semua Area</option>
                      <option>Jakarta Selatan</option>
                      <option>Bandung</option>
                      <option>Bali</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1 font-semibold">Rentang Harga</label>
                    <select className="p-2 border-b border-gray-200 focus:outline-none focus:border-[#c5a47e] bg-transparent">
                      <option>Semua Harga</option>
                      <option>Rp 1M - 5M</option>
                      <option>Rp 5M - 10M</option>
                      <option>&gt; Rp 10M</option>
                    </select>
                  </div>
                  <div className="flex flex-col justify-end">
                    <Link href="/properties" className="w-full">
                      <button className="w-full bg-[#1a365d] text-white py-3 rounded-lg font-semibold hover:bg-[#132845] transition-colors shadow-md">
                        Cari Sekarang
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baru: Stats Section */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <h3 className="text-4xl font-playfair font-bold text-[#c5a47e] mb-2">15+</h3>
              <p className="text-gray-600 font-medium">Tahun Pengalaman</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-playfair font-bold text-[#1a365d] mb-2">500+</h3>
              <p className="text-gray-600 font-medium">Properti Terjual</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-playfair font-bold text-[#c5a47e] mb-2">98%</h3>
              <p className="text-gray-600 font-medium">Klien Puas</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-playfair font-bold text-[#1a365d] mb-2">25+</h3>
              <p className="text-gray-600 font-medium">Penghargaan Industri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="bg-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#c5a47e] font-semibold tracking-wider uppercase mb-4 block">Tentang Kami</span>
              <h2 className="font-playfair text-4xl lg:text-5xl mb-6 leading-tight">
                Berkomitmen Menyediakan Hunian Premium Sejak 2010
              </h2>
              <p className="font-poppins text-gray-300 leading-relaxed mb-6 text-lg">
                Sebagai pelopor dalam industri properti premium, kami menghadirkan solusi lengkap
                mulai dari pencarian properti, konsultasi investasi, hingga manajemen properti.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-200">
                  <StarIcon className="h-6 w-6 text-[#c5a47e] mr-3" /> Jaringan eksklusif ke properti *off-market*
                </li>
                <li className="flex items-center text-gray-200">
                  <UserGroupIcon className="h-6 w-6 text-[#c5a47e] mr-3" /> Tim agen bersertifikat internasional
                </li>
                <li className="flex items-center text-gray-200">
                  <TrophyIcon className="h-6 w-6 text-[#c5a47e] mr-3" /> Layanan end-to-end tanpa repot
                </li>
              </ul>
              <Link href="/about">
                <button className="border-2 border-[#c5a47e] text-[#c5a47e] px-8 py-3 rounded-lg hover:bg-[#c5a47e] hover:text-white transition-all font-semibold">
                  Kenali Kami Lebih Dekat
                </button>
              </Link>
            </div>
            <div className="h-[500px] bg-gray-200 relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80"
                alt="Tentang Kami"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties - 6 Items */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#c5a47e] font-semibold tracking-wider uppercase mb-2 block">Koleksi Eksklusif</span>
            <h2 className="font-playfair text-4xl">Properti Unggulan Kami</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Pilihan properti terbaik yang telah dikurasi dengan standar kualitas tinggi untuk memenuhi gaya hidup premium Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#1a365d]">
                    Featured
                  </div>
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-bold text-xl mb-1 text-gray-900">{property.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{property.location}</p>
                  <p className="text-[#c5a47e] text-2xl font-semibold mb-4">{property.price}</p>

                  <div className="flex items-center text-gray-600 text-sm border-t border-gray-100 pt-4 mb-4">
                    <span className="flex items-center mr-4">
                      <HomeIcon className="w-5 h-5 mr-1 text-gray-400" /> {property.bedrooms} Bed
                    </span>
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                      {property.bathrooms} Bath
                    </span>
                  </div>

                  <button className="w-full bg-gray-50 text-[#1a365d] border border-gray-200 py-3 rounded-lg text-sm font-semibold hover:bg-[#1a365d] hover:text-white hover:border-transparent transition-all">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/properties" className="bg-[#c5a47e] text-white px-8 py-3 rounded-lg inline-block hover:bg-[#b08f68] transition-all font-semibold shadow-md">
              Jelajahi Semua Properti
            </Link>
          </div>
        </div>
      </section>

      {/* Layanan Unggulan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl mb-4">Layanan Komprehensif</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Pendekatan *end-to-end* untuk semua kebutuhan properti Anda, ditangani oleh tenaga profesional berpengalaman.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={HomeIcon}
              title="Jual Properti"
              description="Pemasaran agresif dan tertarget untuk menjual properti Anda dengan harga optimal dalam waktu singkat."
            />
            <ServiceCard
              icon={CurrencyDollarIcon}
              title="Beli Properti"
              description="Akses eksklusif ke listing premium dan negosiasi ahli untuk mengamankan properti impian Anda."
            />
            <ServiceCard
              icon={BuildingOfficeIcon}
              title="Sewa Komersial"
              description="Ruang kantor dan retail strategis untuk mendukung pertumbuhan bisnis perusahaan Anda."
            />
            <ServiceCard
              icon={BuildingLibraryIcon}
              title="Manajemen Aset"
              description="Pengelolaan properti komprehensif untuk memastikan nilai investasi Anda terus bertumbuh."
            />
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="bg-[#1a365d] py-20 relative overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#c5a47e] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl text-white mb-4">Kepercayaan Mereka, Kebanggaan Kami</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testi, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex text-[#c5a47e] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic leading-relaxed">"{testi.text}"</p>
                <div>
                  <h4 className="font-poppins font-bold text-white">{testi.name}</h4>
                  <p className="text-sm text-[#c5a47e] mt-1">{testi.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-20 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl mb-6 md:mb-0">
              <span className="text-[#c5a47e] font-semibold tracking-wider uppercase mb-2 block">Artikel & Wawasan</span>
              <h2 className="font-playfair text-4xl">Berita Properti Terkini</h2>
            </div>
            <Link href="/blog" className="text-[#1a365d] font-semibold hover:text-[#c5a47e] transition-colors flex items-center">
              Lihat Semua Artikel
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#1a365d] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-3">12 Oktober 2024</p>
                  <h3 className="font-poppins font-bold text-xl mb-3 text-gray-900 group-hover:text-[#c5a47e] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${index}`} className="inline-flex items-center text-[#c5a47e] font-semibold text-sm hover:underline">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#1a365d] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <div className="relative z-10">
              <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Siap Memulai Pencarian Properti Anda?</h2>
              <p className="font-poppins text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                Hubungi kami sekarang untuk mendapatkan konsultasi eksklusif gratis dengan ahli properti terbaik kami.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#c5a47e] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#b08f68] transition-all shadow-lg hover:shadow-xl"
                >
                  Jadwalkan Konsultasi
                </Link>
                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Chat via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Service Card Component - Disempurnakan visualnya
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#faf9f7] text-center p-8 rounded-2xl hover:bg-[#1a365d] hover:text-white transition-colors duration-300 group shadow-sm hover:shadow-xl">
    <div className="flex justify-center mb-6">
      <div className="bg-white p-4 rounded-full shadow-sm group-hover:bg-white/10 transition-colors">
        <Icon className="h-10 w-10 text-[#c5a47e]" />
      </div>
    </div>
    <h3 className="font-poppins font-bold text-xl mb-3 text-gray-900 group-hover:text-white transition-colors">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
  </div>
);