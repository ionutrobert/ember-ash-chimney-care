import React from "react";

const TrustBar: React.FC = () => {
  return (
    <div className="relative z-20 -mt-20 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="glass rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-orange-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="text-xl font-medium">5.0 Rating on Google</p>
            <p className="text-gray-500 text-sm">
              Based on 280+ client reviews
            </p>
          </div>

          <div className="h-px w-full md:h-12 md:w-px bg-white/10 hidden md:block"></div>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-3 group">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase group-hover:text-orange-500/80 transition-colors">
                Guild of Master Sweeps
              </span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <svg className="w-4 h-4 text-white/60 group-hover:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 group">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase group-hover:text-orange-500/80 transition-colors">
                HETAS Certified
              </span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <svg className="w-4 h-4 text-white/60 group-hover:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 group">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase group-hover:text-orange-500/80 transition-colors">
                Fully Insured
              </span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <svg className="w-4 h-4 text-white/60 group-hover:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
