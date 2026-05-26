import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 py-16 px-5 border-t border-border-brand/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* BRAND COLUMN */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex flex-col">
            <span className="font-dancing text-3xl font-bold text-yellow">
              nipashi
            </span>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/50">
              Gift Store · Mangaluru
            </span>
          </div>
          <p className="text-sm text-white/60 max-w-sm leading-relaxed">
            Coz Your Loved Ones Deserve the Best. We craft beautiful, personalised
            gifts for every occasion — right here in Mangaluru.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {/* Instagram SVG */}
            <a
              href="https://instagram.com/nipashigifts"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-yellow hover:text-dark flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {/* WhatsApp MessageCircle SVG */}
            <a
              href="https://wa.me/919900110344"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-yellow hover:text-dark flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              aria-label="WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            {/* Phone SVG */}
            <a
              href="tel:+919900110344"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-yellow hover:text-dark flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              aria-label="Call Us"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>

        {/* PRODUCTS COLUMN */}
        <div>
          <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
            Products
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              "Custom Keychains",
              "Photo Frames",
              "Mugs & Bottles",
              "Cushions",
              "Custom Lamps",
              "Name Boards",
              "Calendars",
            ].map((prod) => (
              <li key={prod}>
                <Link
                  href="/products"
                  className="hover:text-yellow transition-colors duration-250"
                >
                  {prod}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS COLUMN */}
        <div>
          <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/#why-us" },
              { name: "How It Works", href: "/#how-it-works" },
              { name: "Find Us", href: "/#location" },
              {
                name: "Order on WhatsApp",
                href: "https://wa.me/919900110344?text=Hi%20Nipashi!",
              },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-yellow transition-colors duration-250"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 text-center md:text-left">
        <p>© 2026 Nipashi Gift Store, Mangaluru. All rights reserved.</p>
        <p className="flex items-center gap-1.5 justify-center">
          Made with{" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 text-red fill-red"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>{" "}
          for{" "}
          <a
            href="https://wa.me/919900110344"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow hover:underline"
          >
            your loved ones
          </a>
        </p>
      </div>
    </footer>
  );
}
