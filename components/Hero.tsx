import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image - High resolution cozy fireplace vibe */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover scale-105"
          alt="Warm cozy fireplace"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[#0a0a0a]/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full animate-blur-up [animation-delay:0.1s] opacity-0">
          <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-200">
            Local Service in Hampshire
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-8 animate-blur-up [animation-delay:0.3s] opacity-0">
          Safe. Clean. <br />
          <span className="italic text-orange-400">Warm.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-blur-up [animation-delay:0.5s] opacity-0">
          Specialist chimney sweeping and maintenance that puts your home's
          safety first, leaving every hearth cleaner than we found it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-blur-up [animation-delay:0.7s] opacity-0 mb-16">
          <a
            href="#book"
            className="w-64 h-14 flex items-center justify-center bg-white text-black font-bold rounded-full text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Book a Sweep
          </a>
          <a
            href="#services"
            className="w-64 h-14 flex items-center justify-center glass text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            View Pricing
          </a>
        </div>

        {/* Scroll indicator - positioned below buttons */}
        <div className="flex justify-center animate-bounce opacity-50 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
