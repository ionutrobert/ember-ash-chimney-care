
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hasApiKey = !!import.meta.env.VITE_GEMINI_API_KEY;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-1">
          <div className="w-8 h-8 bg-orange-500 rounded-sm rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[135deg] duration-500">
            <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
          </div>
          <span className="font-serif text-2xl tracking-tighter">EMBER & ASH</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1">Services</a>
          <a href="#ai-advisor" className="text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1">
            {hasApiKey ? "Safety AI" : "FAQ"}
          </a>
          <a href="#testimonials" className="text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1">Reviews</a>
          <a href="#book" className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">
            Book Now
          </a>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-4 space-y-4">
          <a href="#services" className="text-gray-400 hover:text-white py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#ai-advisor" className="text-gray-400 hover:text-white py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2" onClick={() => setIsMobileMenuOpen(false)}>
            {hasApiKey ? "Safety AI" : "FAQ"}
          </a>
          <a href="#testimonials" className="text-gray-400 hover:text-white py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
          <a href="#book" className="bg-white text-black font-semibold rounded-full py-3 text-center hover:bg-orange-500 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black" onClick={() => setIsMobileMenuOpen(false)}>
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
