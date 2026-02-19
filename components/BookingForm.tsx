import React, { useState } from "react";

interface BookingFormProps {
  selectedService?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ selectedService }) => {
  const [submitted, setSubmitted] = useState(false);
  const [serviceType, setServiceType] = useState(
    selectedService || "Power Sweep & Certificate - £89",
  );

  // Update service type when prop changes
  React.useEffect(() => {
    if (selectedService) {
      setServiceType(selectedService);
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass rounded-[2rem] p-16 text-center">
        <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-8 text-orange-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-serif mb-4">Request Received</h3>
        <p className="text-gray-400">
          Our Master Sweep will call you within 2 hours with your confirmed
          2-hour arrival window and tracking link.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-10 px-8 py-3 glass rounded-full hover:bg-white/10"
        >
          Book another property
        </button>
      </div>
    );
  }

  return (
    <div className="glass rounded-[2.5rem] p-1 shadow-2xl overflow-hidden">
      <div className="p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Johnathan Doe"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Email Address
              </label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Postcode
              </label>
              <input
                required
                type="text"
                placeholder="GU1 2AB"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Service Type
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="Power Sweep & Certificate - £89">
                  Power Sweep & Certificate - £89
                </option>
                <option value="CCTV Flue Inspection - £149">
                  CCTV Flue Inspection - £149
                </option>
                <option value="Complete Stove Service - £199">
                  Complete Stove Service - £199
                </option>
                <option value="Bird Nest Removal - £129">
                  Bird Nest Removal - £129
                </option>
                <option value="Landlord Safety Certificate - £79">
                  Landlord Safety Certificate - £79
                </option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Anything we should know?
            </label>
            <textarea
              rows={4}
              placeholder="e.g. My chimney hasn't been swept in 3 years..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-5 rounded-2xl text-lg font-bold hover:bg-orange-500 hover:text-white transition-all transform hover:scale-[1.01] active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Get Your 2-Hour Arrival Window
          </button>

          <div className="bg-white/5 rounded-xl p-4 mt-6">
            <p className="hidden md:block text-center text-gray-400 text-sm leading-relaxed mb-3">
              <span className="font-semibold text-orange-400">
                Master Sweep Certified
              </span>{" "}
              •{" "}
              <span className="font-semibold text-orange-400">
                2-Hour Arrival Window
              </span>{" "}
              •{" "}
              <span className="font-semibold text-orange-400">
                Live Tracking Link
              </span>
            </p>
            <p className="text-center text-gray-500 text-xs px-12 leading-relaxed">
              By requesting booking, you agree to our terms. We serve London,
              Hertfordshire & Essex with same-day response.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
