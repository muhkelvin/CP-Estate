// app/services/[service]/page.js
import ServiceDetailLayout from '@/app/Components/ServiceDetailLayout';

const ServicePembelian = () => {
    return (
        <ServiceDetailLayout
            title="Pembelian Properti"
            heroImage="/service-buy.jpg"
            intro="Kami memandu Anda dalam menemukan properti ideal sesuai kebutuhan dan anggaran"
        >
            <div className="space-y-8">
                {/* Proses Kerja */}
                <section>
                    <h2 className="font-playfair text-2xl mb-4">Proses Kerja</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {title: "Konsultasi Awal", desc: "Analisis kebutuhan dan anggaran"},
                            {title: "Pencarian Properti", desc: "Rekomendasi properti terkurasi"},
                            {title: "Negosiasi & Transaksi", desc: "Proses legalitas aman dan transparan"},
                        ].map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl">
                                <div className="text-[#c5a47e] font-bold text-xl mb-2">0{index + 1}</div>
                                <h3 className="font-poppins font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Keuntungan */}
                <section>
                    <h2 className="font-playfair text-2xl mb-4">Keuntungan</h2>
                    <ul className="space-y-4 list-disc pl-6 text-gray-600">
                        <li>Akses ke properti eksklusif sebelum dipasarkan</li>
                        <li>Analisis komparatif harga properti</li>
                        <li>Negosiasi harga terbaik untuk pembeli</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="font-playfair text-2xl mb-4">Pertanyaan Umum</h2>
                    <div className="space-y-4">
                        {[
                            {q: "Bagaimana cara memulai proses pembelian?", a: "Hubungi kami untuk konsultasi gratis..."},
                            {q: "Apakah ada biaya tambahan?", a: "Tidak ada biaya untuk pembeli..."},
                        ].map((faq, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg">
                                <h3 className="font-poppins font-semibold">{faq.q}</h3>
                                <p className="text-gray-600 mt-2">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </ServiceDetailLayout>
    );
};

export default ServicePembelian;