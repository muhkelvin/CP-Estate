// app/contact/page.js
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-[#faf9f7] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="font-playfair text-4xl mb-4">Hubungi Kami</h1>
                    <p className="font-poppins text-gray-600 max-w-xl mx-auto">
                        Tim kami siap membantu menjawab semua pertanyaan Anda
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Form Kontak */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <form className="space-y-6">
                            <div>
                                <label className="block font-poppins font-medium mb-2">Nama Lengkap</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#c5a47e] focus:border-transparent"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block font-poppins font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#c5a47e]"
                                    placeholder="johndoe@example.com"
                                />
                            </div>

                            <div>
                                <label className="block font-poppins font-medium mb-2">Tipe Layanan</label>
                                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#c5a47e]">
                                    <option>Pilih Layanan</option>
                                    <option>Pembelian Properti</option>
                                    <option>Penjualan Properti</option>
                                    <option>Sewa Properti</option>
                                </select>
                            </div>

                            <div>
                                <label className="block font-poppins font-medium mb-2">Pesan</label>
                                <textarea
                                    rows="5"
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#c5a47e]"
                                    placeholder="Tulis pesan Anda..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#1a365d] text-white py-3 rounded-lg hover:bg-[#122642] transition-all"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>

                    {/* Info Kontak & Peta */}
                    <div className="space-y-8">
                        {/* Detail Kontak */}
                        <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#c5a47e] p-2 rounded-full text-white">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-poppins font-medium mb-2">Alamat Kantor</h3>
                                    <p className="text-gray-600">
                                        Jl. Sudirman No. 123<br/>
                                        Jakarta Selatan 12190<br/>
                                        Indonesia
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#c5a47e] p-2 rounded-full text-white">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-poppins font-medium mb-2">Telepon</h3>
                                    <p className="text-gray-600">
                                        +62 123 456 789<br/>
                                        (Senin - Jumat, 08:00 - 17:00 WIB)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#c5a47e] p-2 rounded-full text-white">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-poppins font-medium mb-2">Email</h3>
                                    <p className="text-gray-600">
                                        info@luxeliving.com<br/>
                                        support@luxeliving.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#c5a47e] p-2 rounded-full text-white">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-poppins font-medium mb-2">Jam Operasional</h3>
                                    <p className="text-gray-600">
                                        Senin - Jumat: 08:00 - 17:00 WIB<br/>
                                        Sabtu: 08:00 - 12:00 WIB
                                    </p>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="flex gap-4 mt-8">
                                <a href="#" className="text-[#1a365d] hover:text-[#c5a47e] transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-[#1a365d] hover:text-[#c5a47e] transition-colors">
                                    <Facebook className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-[#1a365d] hover:text-[#c5a47e] transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613506394!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x9cb5e6e7e1b558a9!2sSudirman%20Central%20Business%20District!5e0!3m2!1sen!2sid!4v1716192002353!5m2!1sen!2sid"
                                    width="600"
                                    height="450"
                                    className="w-full h-full"
                                    loading="lazy"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}