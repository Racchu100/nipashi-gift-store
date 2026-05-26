"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gift,
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2,
  DollarSign,
  ThumbsUp,
  Phone,
  Star,
} from "lucide-react";

export default function Home() {
  const heroImages = [
    "/images/611654_customized-multiple-photo-frame-collage16600.jpg",
    "/images/12.jpg",
    "/images/81a3Bu+uYEL._SX679_.jpg",
    "/images/b0367e9f96f842f4bf66a50c2f01cee6.jpg",
    "/images/0d9304b8bb7d9e2163676514078f6c92.jpg.jpeg",
    "/images/1d794502d72043c0a02d6966443ef2ba.jpg",
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % heroImages.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const categories = [
    { name: "Custom Keychains", slug: "keychains", icon: "🔑", color: "bg-red-light/40 border-red/20 text-red" },
    { name: "Photo Frames", slug: "frames", icon: "🖼️", color: "bg-yellow-light/40 border-yellow/20 text-yellow-dark" },
    { name: "Mugs & Bottles", slug: "mugs", icon: "☕", color: "bg-orange-100 border-orange-200 text-orange-700" },
    { name: "Cushions & Pillows", slug: "cushions", icon: "🛋️", color: "bg-pink-100 border-pink-200 text-pink-700" },
    { name: "Custom Lamps", slug: "lamps", icon: "💡", color: "bg-purple-100 border-purple-200 text-purple-700" },
    { name: "Name Boards", slug: "boards", icon: "🏠", color: "bg-green-100 border-green-200 text-green-700" },
    { name: "Calendars", slug: "calendars", icon: "📅", color: "bg-blue-100 border-blue-200 text-blue-700" },
  ];

  const whyUs = [
    {
      title: "100% Personalised",
      desc: "Every product is customized uniquely for you — photos, names, dates, and designs all tailored to your vision.",
      icon: <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-red" />,
    },
    {
      title: "Fast Turnaround",
      desc: "Need it quick? We deliver most orders within 24–48 hours, without compromising on quality.",
      icon: <Clock className="w-5 h-5 sm:w-8 sm:h-8 text-yellow-dark" />,
    },
    {
      title: "WhatsApp Proofing",
      desc: "Get a digital preview of your design on WhatsApp before we print. We only produce once you approve.",
      icon: <CheckCircle2 className="w-5 h-5 sm:w-8 sm:h-8 text-emerald-600" />,
    },
    {
      title: "Premium Quality",
      desc: "We use high-grade materials — acrylic, metal, velvet, and more — to ensure gifts that last a lifetime.",
      icon: <ThumbsUp className="w-5 h-5 sm:w-8 sm:h-8 text-indigo-600" />,
    },
    {
      title: "Affordable Pricing",
      desc: "Beautiful gifts don't have to break the bank. We offer competitive pricing for every budget and occasion.",
      icon: <DollarSign className="w-5 h-5 sm:w-8 sm:h-8 text-amber-600" />,
    },
    {
      title: "Gifting Made Simple",
      desc: "Just send us your photo and a message — we handle design, print, and packaging for a perfect unboxing experience.",
      icon: <Gift className="w-5 h-5 sm:w-8 sm:h-8 text-purple-600" />,
    },
  ];

  return (
    <div className="overflow-hidden bg-off-white">
      {/* HERO SECTION */}
      <section className="relative pt-[100px] pb-12 md:pt-24 md:pb-16 bg-yellow px-5 md:px-8 overflow-hidden min-h-[75vh] flex items-center">
        {/* Subtle Background Blobs */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-red/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[15%] w-[350px] h-[350px] rounded-full bg-white/20 blur-2xl pointer-events-none" />

        <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-8 relative z-10 text-center px-0">
          
          {/* Top Star Badge */}
          <div className="inline-flex items-center gap-2 bg-red text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-sm">
            <Star className="w-3.5 h-3.5 fill-current" />
            Mangaluru's Favourite Gift Store
          </div>

          {/* Centered Wide Product Visual Card Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-center relative mt-4"
          >
            <div className="relative w-full max-w-[580px] sm:max-w-[620px] md:max-w-[660px] aspect-square sm:aspect-[4/3]">
              {/* Floating Badge Left */}
              <div className="absolute top-[-10px] left-[-20px] z-30 bg-white border border-border-brand/40 shadow-brand rounded-2xl p-3.5 flex items-center gap-3 animate-float">
                <div className="w-9 h-9 rounded-full bg-yellow-light flex items-center justify-center text-lg">🎂</div>
                <div>
                  <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider leading-none">Best Seller</div>
                  <div className="text-xs font-black text-dark mt-1">Birthday Gifts</div>
                </div>
              </div>

              {/* Main Premium Card */}
              <div className="w-full h-full bg-white rounded-3xl shadow-brand-lg border border-border-brand/35 p-3 flex flex-col justify-start gap-0 relative z-20 hover:rotate-1 transition-transform duration-300">
                <div className="w-full h-[78%] rounded-2xl overflow-hidden relative shadow-inner group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={carouselIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={heroImages[carouselIndex]}
                        alt="Product Showcase"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/10 to-transparent pointer-events-none" />
                </div>
                <div className="pt-0 space-y-1 text-left">
                  <h3 className="font-playfair text-xl font-bold text-dark">
                    Custom Gift Collections
                  </h3>
                  <p className="text-xs text-text-muted">
                    Keychains • Frames • Mugs • Cushions • Lamps • Name Boards • Calendars
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats in One Row */}
          <div className="w-full max-w-lg border-t border-dark/10 pt-8 mt-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-playfair text-2xl sm:text-4xl font-black text-red">500+</div>
                <div className="text-[9px] sm:text-xs font-bold text-text-muted uppercase tracking-wider mt-1 leading-none">Happy Customers</div>
              </div>
              <div>
                <div className="font-playfair text-2xl sm:text-4xl font-black text-red">20+</div>
                <div className="text-[9px] sm:text-xs font-bold text-text-muted uppercase tracking-wider mt-1 leading-none">Gift Categories</div>
              </div>
              <div>
                <div className="font-playfair text-2xl sm:text-4xl font-black text-red">100%</div>
                <div className="text-[9px] sm:text-xs font-bold text-text-muted uppercase tracking-wider mt-1 leading-none">Personalized</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED CATEGORIES SECTION */}
      <section className="py-20 px-5 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block bg-yellow-light text-red text-[11px] font-bold tracking-widest uppercase px-4.5 py-1.5 rounded-full">
            Category Collection
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-black text-dark leading-tight">
            Gifts for Every Occasion
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
            Browse our curated collection of personalized gifts — each one crafted
            with love, customized just for your loved ones.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-6"
        >
          {categories.map((cat) => (
            <motion.div key={cat.slug} variants={itemVariants}>
              <Link
                href={`/products?cat=${cat.slug}`}
                className="group block bg-white hover:bg-yellow-light/35 border border-border-brand/30 hover:border-yellow-dark/50 rounded-2xl p-2.5 sm:p-3 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-full bg-white shadow-inner flex items-center justify-center text-xl sm:text-3xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-playfair font-bold text-dark text-xs sm:text-sm md:text-base leading-tight group-hover:text-red transition-colors duration-250">
                  {cat.name}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-red mt-2.5 opacity-0 group-hover:opacity-100 transition-all duration-250 translate-x-[-5px] group-hover:translate-x-0">
                  View Category <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHY US SECTION */}
      <section id="why-us" className="py-20 px-5 md:px-8 bg-bg-light border-y border-border-brand/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-block bg-yellow-light text-red text-[11px] font-bold tracking-widest uppercase px-4.5 py-1.5 rounded-full">
              The Nipashi Difference
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl font-black text-dark leading-tight">
              Why Mangaluru Chooses Us
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
              We pour heart into every product — because your loved ones deserve nothing less than the best.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
            {whyUs.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white border border-border-brand/40 rounded-3xl p-3.5 sm:p-6.5 relative overflow-hidden group shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-yellow-light/35 flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-playfair font-extrabold text-dark text-sm sm:text-lg mb-1.5 sm:mb-3">
                  {card.title}
                </h3>
                <p className="text-[11px] sm:text-sm text-text-muted leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 px-5 md:px-8 bg-yellow text-dark relative overflow-hidden">
        <div className="absolute right-[-5%] bottom-[-10%] w-[400px] h-[400px] rounded-full bg-red/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-block bg-red/10 text-red-dark text-[11px] font-bold tracking-widest uppercase px-4.5 py-1.5 rounded-full">
              Simple 3-Step Process
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl font-black text-dark leading-tight">
              Custom Gifting Made Simple
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed font-bold max-w-sm mx-auto uppercase tracking-wide">
              Order your personalised gift in three easy steps — right from WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            {[
              { step: "01", title: "Choose a Category", icon: "🎯", desc: "Pick from keychains, frames, mugs, cushions, lamps, calendars and more." },
              { step: "02", title: "Send Your Photo", icon: "📸", desc: "Share your favourite image, name, date or custom message via WhatsApp." },
              { step: "03", title: "Approve & Collect", icon: "✅", desc: "Review your digital proof, approve it, and collect your beautiful gift from our store." },
            ].map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="space-y-4"
              >
                <div className="relative inline-block">
                  <div className="w-16 h-16 rounded-full bg-red text-white flex items-center justify-center font-playfair text-2xl font-black shadow-md relative z-10">
                    {step.step}
                  </div>
                  <span className="absolute -top-3 -right-3 text-3xl z-20 animate-float">{step.icon}</span>
                </div>
                <h3 className="font-playfair font-extrabold text-dark text-xl">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-14">
            <a
              href="https://wa.me/919900110344?text=Hi!%20I'd%20like%20to%20place%20a%20custom%20gift%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red hover:bg-red-dark text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Your Order Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* LOCATION & FIND US SECTION */}
      <section id="location" className="py-20 px-5 md:px-8 bg-white border-t border-border-brand/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-block bg-yellow-light text-red text-[11px] font-bold tracking-widest uppercase px-4.5 py-1.5 rounded-full">
              Visit Us
            </span>
            <h2 className="font-playfair text-3xl md:text-5xl font-black text-dark leading-tight">
              Find Nipashi Gift Store
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
              We're conveniently located in the heart of Mangaluru. Come visit us in-store or reach out on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            
            {/* GET IN TOUCH DETAILS */}
            <div className="space-y-8">
              <h3 className="font-playfair text-2xl font-black text-dark">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "📍",
                    label: "Store Address",
                    value: (
                      <span>
                        Ave Maria Centre, Jeppu Market Rd, <br />
                        near Bhagini Samaaj, Vinay Vihar, <br />
                        Mangala Nagar, Mangaluru – 575001
                      </span>
                    ),
                  },
                  {
                    icon: "📱",
                    label: "Phone / WhatsApp",
                    value: (
                      <a href="tel:+919900110344" className="text-red hover:underline font-bold">
                        +91 99001 10344
                      </a>
                    ),
                  },
                  {
                    icon: "📸",
                    label: "Instagram",
                    value: (
                      <a
                        href="https://instagram.com/nipashigifts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red hover:underline font-bold"
                      >
                        @nipashigifts
                      </a>
                    ),
                  },
                  {
                    icon: "🕐",
                    label: "Store Hours",
                    value: (
                      <span>
                        Mon – Sat: 9:30 AM – 8:30 PM <br />
                        Sunday: 10:00 AM – 6:00 PM
                      </span>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-xl bg-yellow-light/40 flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-dark leading-relaxed">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GOOGLE MAPS EMBED IFRAME */}
            <div className="w-full h-[380px] rounded-3xl overflow-hidden border border-border-brand/35 shadow-sm relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9135611873157!2d74.8477077748908!3d12.848859287455348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bbf381c0587%3A0x49a27142d7dc9fc8!2sNipashi%20Gift%20Store!5e0!3m2!1sen!2sin!4v1779773741186!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nipashi Gift Store Location Map"
                className="w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
