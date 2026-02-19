import React from "react";

const services = [
  {
    title: "Power Sweep & Certificate",
    price: "£89",
    description:
      "Latest rotary power-sweeping technology with insurance certificate. 2-hour arrival window with live tracking.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "CCTV Flue Inspection",
    price: "£149",
    description:
      "Deep-view camera inspection with digital report. Identifies flue damage, cracks, or dangerous blockages.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Complete Stove Service",
    price: "£199",
    description:
      "Full strip-down service with rope seals, glass polish, and efficiency check. Maximizes stove performance.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Bird Nest Removal",
    price: "£129",
    description:
      "Safe removal of bird nests and debris with humane methods. Prevents dangerous blockages and infestations.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.657 18.343l-1.414 1.414M16.343 18.343l1.414 1.414M9 11V9a3 3 0 013-3h0a3 3 0 013 3v2m-6 0h6"
        />
      </svg>
    ),
  },
];

interface ServicesProps {
  onSelectService?: (service: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleSelect = (serviceName: string, price: string) => {
    if (onSelectService) {
      // Clean price string if needed, currently it is "£89"
      onSelectService(`${serviceName} - ${price}`);
      document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Master Craftsmanship
            <br />
            In Every Flue.
          </h2>
          <p className="text-gray-400 text-lg">
            We provide comprehensive chimney care using the latest rotary
            power-sweeping technology, ensuring your home stays efficient and
            soot-free.
          </p>
        </div>
        <div className="pb-2">
          <div className="text-orange-500 font-semibold flex items-center gap-2 rounded px-2 py-1 cursor-default">
            Our Services
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group relative p-1 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
            <div className="relative glass rounded-[1.4rem] p-10 h-full border border-white/5 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8 group-hover:bg-orange-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xl font-bold">{service.price}</span>
                <button
                  onClick={() => handleSelect(service.title, service.price)}
                  className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-orange-400 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
