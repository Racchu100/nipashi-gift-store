"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Gift } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/#why-us" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Find Us", href: "/#location" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-off-white/95 backdrop-blur-md shadow-brand border-b border-border-brand/40 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* BRAND LOGO */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-yellow rounded-lg flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Gift className="w-5 h-5 text-red-dark animate-pulse" />
          </div>
          <div className="flex flex-col line-height-1">
            <span className="font-dancing text-2xl font-bold text-red transition-colors duration-300 group-hover:text-red-dark">
              nipashi
            </span>
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-text-muted">
              Gift Store
            </span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-red font-semibold"
                      : "text-text hover:text-red"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-red rounded-full"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/919900110344?text=Hi%20Nipashi!%20I'd%20like%20to%20customize%20a%20gift."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red hover:bg-red-dark text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 inline-block"
          >
            Order Now
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text hover:text-red focus:outline-none p-1.5 rounded-md hover:bg-yellow-light/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark border-b border-border-brand/40 overflow-hidden shadow-lg absolute top-full left-0 right-0"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base font-medium py-2.5 border-b border-border-brand/20 text-text hover:text-red transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/919900110344?text=Hi%20Nipashi!%20I'd%20like%20to%20order%20a%20gift."
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="bg-red hover:bg-red-dark text-white text-center font-bold py-3 rounded-full shadow-md transition-colors mt-2"
              >
                Order Now on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
