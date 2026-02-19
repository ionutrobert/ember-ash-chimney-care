import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-orange-500 rounded-sm rotate-45 flex items-center justify-center">
                <div className="w-3 h-3 bg-white/20 rounded-sm"></div>
              </div>
              <span className="font-serif text-xl tracking-tighter">
                EMBER & ASH
              </span>
            </a>
            <p className="text-gray-400 max-w-sm mb-8">
              Protecting homes across the South East with premium chimney care,
              advanced sweep technology, and honest advice.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C8.74 2 8.333.017 7.053.072 5.775.127 5.25.337 4.475.537c-.84.2-1.432.433-2.06.85C1.287 1.8.8 2.393.585 3.033c-.42.84-.65 1.432-.85 2.06C.337 5.775.127 6.3.072 7.378.017 8.657 0 8.74 0 12s.017 3.343.072 4.622c.055 1.278.265 1.803.465 2.578.2.84.433 1.432.85 2.06.433.627 1.025 1.12 1.665 1.335.84.42 1.432.65 2.06.85.775.2 1.3.41 2.578.465 1.278.055 1.36.072 4.622.072s3.343-.017 4.622-.072c1.278-.055 1.803-.265 2.578-.465.84-.2 1.432-.433 2.06-.85.627-.433 1.12-1.025 1.335-1.665.42-.84.65-1.432.85-2.06.2-.775.41-1.3.465-2.578.055-1.278.072-1.36.072-4.622s-.017-3.343-.072-4.622c-.055-1.278-.265-1.803-.465-2.578-.2-.84-.433-1.432-.85-2.06-.433-.627-1.025-1.12-1.665-1.335-.84-.42-1.432-.65-2.06-.85-.775-.2-1.3-.41-2.578-.465C15.343.017 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.056 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.056-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.074-4.85c.056-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.16c-3.203 0-3.585-.016-4.85-.071-1.17-.055-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.42-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227C2.16 8.647 2.16 8.267 2.16 5.063c0-3.203.016-3.585.071-4.85.055-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413C8.647.016 9.027.016 12.22.016c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.413.562.217.96.477 1.382.896.42.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.056 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227-.413-1.266-.057-1.646-.07-4.85-.07zm0 5.919c-2.058 0-3.726 1.668-3.726 3.726s1.668 3.726 3.726 3.726 3.726-1.668 3.726-3.726-1.668-3.726-3.726-3.726zm0 6.102c-1.312 0-2.376-1.064-2.376-2.376s1.064-2.376 2.376-2.376 2.376 1.064 2.376 2.376-1.064 2.376-2.376 2.376zM18.883 5.923c-.471 0-.853.382-.853.853s.382.853.853.853.853-.382.853-.853-.382-.853-.853-.853z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-6">
              Service Area
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm leading-normal">
              <li>
                <span className="inline-block px-1 rounded">
                  Winchester & Alresford
                </span>
              </li>
              <li>
                <span className="inline-block px-1 rounded">
                  Guildford & Godalming
                </span>
              </li>
              <li>
                <span className="inline-block px-1 rounded">
                  Petersfield & Midhurst
                </span>
              </li>
              <li>
                <span className="inline-block px-1 rounded">
                  Farnham & Alton
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm leading-normal">
              <li>
                <a
                  href="#services"
                  className="inline-block hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#ai-advisor"
                  className="inline-block hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1"
                >
                  Safety Advisor
                </a>
              </li>
              <li>
                <a
                  href="#book"
                  className="inline-block hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1"
                >
                  Booking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1"
                >
                  Legal & Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-4">
          <p className="text-gray-400 text-xs">
            © 2026 Ember & Ash Chimney Care Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-green-500"></span>
              Available for Bookings
            </span>
            <span>Registered in England No. 12384756</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
