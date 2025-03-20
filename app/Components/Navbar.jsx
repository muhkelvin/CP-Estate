// components/Navbar.js
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-[#eeeeee]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-[#1a365d]">
              Luxe<span className="text-[#c5a47e]">Living</span>
            </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/properties">Properties</NavLink>
                        <NavLink href="/services">Services</NavLink>
                        <Link
                            href="/contact"
                            className="bg-[#c5a47e] text-white px-6 py-2.5 rounded-full font-poppins text-sm hover:bg-[#b08f68] transition-all"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t">
                        <div className="px-4 py-4 space-y-4">
                            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
                                Home
                            </MobileNavLink>
                            <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
                                About
                            </MobileNavLink>
                            <MobileNavLink href="/properties" onClick={() => setIsOpen(false)}>
                                Properties
                            </MobileNavLink>
                            <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>
                                Services
                            </MobileNavLink>
                            <Link
                                href="/contact"
                                className="block w-full text-center bg-[#c5a47e] text-white px-6 py-2.5 rounded-full"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

const NavLink = ({ href, children }) => (
    <Link
        href={href}
        className="text-[#4a5568] hover:text-[#1a365d] transition-colors font-poppins text-sm font-medium relative
      after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#c5a47e] hover:after:w-full after:transition-all"
    >
        {children}
    </Link>
);

const MobileNavLink = ({ href, children, onClick }) => (
    <Link
        href={href}
        onClick={onClick}
        className="block py-2 text-[#4a5568] hover:text-[#1a365d] font-poppins"
    >
        {children}
    </Link>
);