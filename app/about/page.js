import { BuildingLibraryIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function About() {
    const timeline = [
        {
            year: "2010",
            title: "Pendirian Perusahaan",
            description: "Berdiri dengan fokus pada properti premium di Jakarta",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            year: "2014",
            title: "Ekspansi ke Bali",
            description: "Membuka cabang pertama di wilayah Bali",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            year: "2018",
            title: "1000 Properti Terjual",
            description: "Mencapai penjualan properti ke-1000",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
        },
        {
            year: "2023",
            title: "Penghargaan Industri",
            description: "Memenangkan penghargaan Real Estate Award 2023",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
    ];

    const team = [
        {
            name: "Budi Santoso",
            role: "CEO & Founder",
            photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            bio: "Pengalaman 15+ tahun di industri properti dengan latar belakang ekonomi"
        },
        {
            name: "Anita Wijaya",
            role: "Head of Sales",
            photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            bio: "Ahli pemasaran properti dengan pengalaman 10 tahun di pasar Jakarta dan Bali"
        },
        {
            name: "Dewi Kartini",
            role: "Property Manager",
            photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            bio: "Spesialis manajemen properti dengan sertifikasi internasional"
        },
    ];

    const partners = [
        "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1102&q=80",
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
    ];

    const awards = [
        "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        "https://images.unsplash.com/photo-1606635601635-a82e23b8338d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1567427510550-ce317bdccf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ];

    return (
        <div className="bg-[#faf9f7]">
            {/* Hero Section */}
            <section className="relative h-96">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
                />
                <div className="relative h-full bg-black/40 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="font-playfair text-5xl text-white mb-4">Tentang Kami</h1>
                        <p className="font-poppins text-gray-200">Membangun Kepercayaan Sejak 2010</p>
                    </div>
                </div>
            </section>

            {/* Sejarah Perusahaan */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="font-playfair text-3xl text-center mb-12">Sejarah Perusahaan</h2>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 w-1 h-full bg-[#c5a47e] -translate-x-1/2 hidden md:block" />

                        <div className="space-y-12 md:space-y-0">
                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                                >
                                    <div className="md:w-1/2 p-6">
                                        <div className={`md:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                                            <h3 className="font-playfair text-2xl text-[#1a365d]">{item.year}</h3>
                                            <h4 className="font-poppins font-semibold text-lg mt-2">{item.title}</h4>
                                            <p className="text-gray-600 mt-2">{item.description}</p>
                                        </div>
                                    </div>

                                    <div className="md:w-1/2">
                                        <div className={`h-48 rounded-xl overflow-hidden ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi & Misi */}
            <section className="bg-[#1a365d] text-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-playfair text-3xl mb-6">Visi Kami</h2>
                            <p className="font-poppins text-lg leading-relaxed">
                                Menjadi mitra terpercaya dalam menghadirkan solusi properti premium
                                yang meningkatkan kualitas hidup masyarakat Indonesia
                            </p>
                        </div>

                        <div>
                            <h2 className="font-playfair text-3xl mb-6">Misi Kami</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <BuildingLibraryIcon className="w-6 h-6 text-[#c5a47e] flex-shrink-0" />
                                    <p>Menyediakan properti berkualitas tinggi dengan transparansi penuh</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <UserGroupIcon className="w-6 h-6 text-[#c5a47e] flex-shrink-0" />
                                    <p>Memberikan layanan profesional berstandar internasional</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <TrophyIcon className="w-6 h-6 text-[#c5a47e] flex-shrink-0" />
                                    <p>Menjadi yang terdepan dalam inovasi industri properti</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tim Kami */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="font-playfair text-3xl text-center mb-12">Tim Profesional</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="h-64 bg-gray-200 overflow-hidden">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="font-playfair text-xl">{member.name}</h3>
                                    <p className="text-[#c5a47e] mt-2">{member.role}</p>
                                    <p className="text-gray-600 mt-3 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Penghargaan */}
            <section className="bg-[#f5f3f0] py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="font-playfair text-3xl text-center mb-12">Penghargaan & Sertifikasi</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {awards.map((award, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md h-40">
                                <img
                                    src={award}
                                    alt={`Penghargaan ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="font-playfair text-3xl text-center mb-12">Mitra & Klien</h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {partners.map((partner, index) => (
                            <div key={index} className="h-20 w-40 overflow-hidden rounded-md">
                                <img
                                    src={partner}
                                    alt={`Partner ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#1a365d] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="font-playfair text-4xl mb-6">Ingin Bergabung Dengan Tim Kami?</h2>
                    <p className="font-poppins text-xl mb-8 max-w-2xl mx-auto">
                        Kirimkan CV Anda dan mari bersama-sama membangun masa depan properti Indonesia
                    </p>
                    <button className="bg-[#c5a47e] text-white px-8 py-3 rounded-lg hover:bg-[#b08f68] transition-all">
                        Lihat Lowongan
                    </button>
                </div>
            </section>
        </div>
    );
}