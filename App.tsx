import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import SafetyAI from "./components/SafetyAI";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<string>();

  const hasApiKey = !!import.meta.env.VITE_GEMINI_API_KEY;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} />

      <main className="flex-grow">
        <Hero />
        <TrustBar />

        <section id="services" className="py-24 bg-[#0a0a0a]">
          <Services onSelectService={(s) => setSelectedService(s)} />
        </section>

        <section id="ai-advisor" className="py-24 bg-[#111]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                {hasApiKey ? (
                  <>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">
                      Expert Guidance,
                      <br />
                      <span className="text-orange-400">Powered by AI.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                      Have questions about chimney safety, maintenance
                      schedules, or fuel types? Ask our AI Safety Advisor for
                      instant, expert recommendations tailored to your hearth.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">
                      Common Questions,
                      <br />
                      <span className="text-orange-400">Expert Answers.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                      Find answers to the most frequent questions about chimney
                      maintenance, safety, and our services. Can't find what you
                      need? Call us directly for personalized advice.
                    </p>
                  </>
                )}
                <div className="flex gap-4 items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://picsum.photos/seed/${i + 10}/100/100`}
                        className="w-10 h-10 rounded-full border-2 border-[#111] object-cover"
                        alt="User"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    Trusted by 500+ homeowners
                  </span>
                </div>
              </div>
              <SafetyAI />
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 bg-[#0a0a0a]">
          <Testimonials />
        </section>

        <section
          id="book"
          className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#151515]"
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">
                Secure Your Peace of Mind
              </h2>
              <p className="text-gray-400">
                Professional sweeping starting from just £75. Select your
                service below.
              </p>
            </div>
            <BookingForm selectedService={selectedService} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
