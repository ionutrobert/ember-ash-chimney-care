import React, { useState, useRef, useEffect } from "react";
import { getSafetyAdvice } from "../services/geminiService";
import { ChatMessage } from "../types";

const SafetyAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Hello! I am your Ember & Ash Safety Advisor. How can I help you keep your hearth safe today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const hasApiKey = !!import.meta.env.VITE_GEMINI_API_KEY;

  const faqs = [
    {
      question: "How often should I sweep my chimney?",
      answer:
        "We recommend annual sweeping for wood burners and gas fires, twice yearly for coal fires. Regular sweeping prevents dangerous creosote buildup and ensures safe operation.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We cover London, Hertfordshire & Essex with our 2-hour arrival windows and live tracking for your convenience. Same-day service available for urgent cases.",
    },
    {
      question: "Are you qualified and insured?",
      answer:
        "Yes! We're NVQ qualified, HETAS certified, Guild of Master Chimney Sweeps members, and Which? Trusted Traders with comprehensive insurance coverage.",
    },
    {
      question: "What happens during a sweep?",
      answer:
        "Our Master Sweep uses rotary power-sweeping technology, performs smoke draw tests, and provides a digital certificate for insurance purposes. We protect your home with sheets and leave no mess.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Standard chimney sweep starts from £89, bird nest removal from £129, and CCTV inspection from £149. We provide transparent pricing with no hidden fees.",
    },
    {
      question: "How do I know if my chimney needs sweeping?",
      answer:
        "Signs include smoke blowing back into the room, a strong soot smell, visible tar deposits, or birds/debris falling down. Even without signs, annual sweeping is essential for safety.",
    },
    {
      question: "Do I need to prepare anything?",
      answer:
        "Please clear a small space around the fireplace (about 2m x 2m) and remove any ornaments from the hearth. We bring our own dust sheets and shoe covers to protect your home.",
    },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await getSafetyAdvice(messages, input);
      setMessages((prev) => [...prev, { role: "model", text: reply }]);
    } catch (error) {
      setApiError(true);
    }
    setLoading(false);
  };

  // Show FAQ when no API key is configured
  if (!hasApiKey) {
    return (
      <div className="glass rounded-3xl p-8 border border-white/10 shadow-2xl">
        <h3 className="text-2xl font-serif mb-8 text-center">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 pb-4 last:border-0"
            >
              <button
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left focus:outline-none group py-2"
              >
                <h4 className="font-semibold text-lg pr-4 group-hover:text-orange-400 transition-colors">
                  {faq.question}
                </h4>
                <span
                  className={`transform transition-transform duration-300 ${openFaqIndex === index ? "rotate-180" : ""} text-orange-500`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaqIndex === index
                    ? "max-h-40 opacity-100 mt-2 mb-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Show chat interface when API key is available
  return (
    <div className="glass rounded-3xl p-1 overflow-hidden border border-white/10 shadow-2xl h-[500px] flex flex-col">
      <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-semibold tracking-wider uppercase opacity-50">
            Safety Advisor Live
          </span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-orange-500 text-white rounded-br-none"
                  : "bg-white/10 text-gray-200 rounded-bl-none"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/10 rounded-2xl px-5 py-3 rounded-bl-none">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white/5 border-t border-white/10"
      >
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about chimney safety..."
            className="w-full bg-white/10 border-none rounded-xl py-4 pl-5 pr-14 text-sm focus:ring-2 focus:ring-orange-500/50 outline-none placeholder:text-gray-600 transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center hover:bg-orange-400 transition-colors disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925L9 9l-5.307 1.114-1.414 4.925a.75.75 0 00.826.95 8.007 8.007 0 005.426-2.336l7.796-7.796a2.75 2.75 0 000-3.89l-7.796-7.796A8.007 8.007 0 003.105 2.289z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SafetyAI;
