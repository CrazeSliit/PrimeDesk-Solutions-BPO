import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-100">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF6600] to-[#e55c00] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200">
              <img 
              src="/WhatsApp_Image_2025-09-20_at_22.07.49_2384894a-removebg-preview.png" 
              alt="PrimeDesk Logo" 
              className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-[#1A1A1A] font-bold text-2xl tracking-tight">
              Prime<span className="text-[#FF6600]">Desk Solutions</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link 
            to="/services" 
            className="text-[#1A1A1A] hover:text-[#FF6600] transition-all duration-200 font-medium relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6600] group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link 
            to="/about" 
            className="text-[#1A1A1A] hover:text-[#FF6600] transition-all duration-200 font-medium relative group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6600] group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link 
            to="/why-us" 
            className="text-[#1A1A1A] hover:text-[#FF6600] transition-all duration-200 font-medium relative group"
          >
            Why Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6600] group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link 
            to="/contact" 
            className="text-[#1A1A1A] hover:text-[#FF6600] transition-all duration-200 font-medium relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6600] group-hover:w-full transition-all duration-200"></span>
          </Link>
        </nav>

        <Link 
          to="/contact" 
          className="hidden md:block bg-gradient-to-r from-[#FF6600] to-[#e55c00] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-[#FF6600] hover:bg-white hover:text-[#FF6600]"
        >
          Book a Free Call
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#1A1A1A] p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm py-6 px-8 md:px-12 shadow-xl border-t border-gray-100">
          <nav className="flex flex-col space-y-6">
            <Link 
              to="/services" 
              className="text-[#1A1A1A] hover:text-[#FF6600] transition-colors duration-200 font-medium py-2 border-b border-gray-100 hover:border-[#FF6600]" 
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-[#1A1A1A] hover:text-[#FF6600] transition-colors duration-200 font-medium py-2 border-b border-gray-100 hover:border-[#FF6600]" 
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/why-us" 
              className="text-[#1A1A1A] hover:text-[#FF6600] transition-colors duration-200 font-medium py-2 border-b border-gray-100 hover:border-[#FF6600]" 
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link 
              to="/contact" 
              className="text-[#1A1A1A] hover:text-[#FF6600] transition-colors duration-200 font-medium py-2 border-b border-gray-100 hover:border-[#FF6600]" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-[#FF6600] to-[#e55c00] text-white px-6 py-3 rounded-full text-center font-semibold hover:shadow-lg transition-all duration-200 mt-4" 
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Free Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};