"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Star, ArrowLeft, Heart, ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";

interface ProductCat {
  id: string;
  name: string;
  num: string;
  desc: string;
  subProducts: string[];
  images: string[];
  emojiFallback: string[];
}

const productData: Record<string, ProductCat> = {
  keychains: {
    id: "keychains",
    name: "Custom Keychains",
    num: "01",
    desc: "Carry your favourite memories wherever you go. Our custom keychains are crafted in premium acrylic, heavy metal, and metallic finishes — personalized with your photos, names, or special dates.",
    subProducts: ["Acrylic Photo Keychains", "Heavy Metal Engraved", "Name-Cut Metallic"],
    images: [
      "/images/12.jpg",
      "/images/6-2.jpg",
      "/images/transparent_1_1754908439062.jpg"
    ],
    emojiFallback: ["🔑", "🗝️", "✨"]
  },
  frames: {
    id: "frames",
    name: "Photo Frames",
    num: "02",
    desc: "Preserve your precious memories in stunning frames. From acrylic glass to LED-lit frames, collage boards to heart-shaped displays — we turn your favourite photos into wall art.",
    subProducts: ["Acrylic Glass Frames", "LED Photo Frames", "Collage Frames", "Heart Shape Frames"],
    images: [
      "/images/611654_customized-multiple-photo-frame-collage16600.jpg",
      "/images/Haldi-Function-Invitation-Card-2.jpg",
      "/images/81kSHF7j0lL.jpg",
      "/images/original-9b0f6b315d6a64b97a3f41b65cc11e86.jpg"
    ],
    emojiFallback: ["🖼️", "💝", "🌟", "📸"]
  },
  mugs: {
    id: "mugs",
    name: "Mugs & Bottles",
    num: "03",
    desc: "Start every morning with a smile. Custom-printed mugs, magic heat-reveal mugs, and personalized bottles — perfect for birthdays, anniversaries and corporate gifting.",
    subProducts: ["Photo Print Mugs", "Magic Mugs", "Steel Bottles", "Gold Coat Mugs"],
    images: [
      "/images/81a3Bu+uYEL._SX679_.jpg",
      "/images/40d1f087ae385e618bb0d69b08596fc2.jpg"
    ],
    emojiFallback: ["☕", "🫖"]
  },
  cushions: {
    id: "cushions",
    name: "Cushions & Pillows",
    num: "04",
    desc: "Cozy and personalised — our custom photo cushions in velvet and sequin magic fabric make the softest, most thoughtful gifts for home or office.",
    subProducts: ["Velvet Photo Cushions", "Magic Sequin Pillows", "Custom Quote Cushions"],
    images: [
      "/images/b0367e9f96f842f4bf66a50c2f01cee6.jpg",
      "/images/fe8ed89b926b98c549c70f939eaa5f85.jpg"
    ],
    emojiFallback: ["🛋️", "💕"]
  },
  lamps: {
    id: "lamps",
    name: "Custom Lamps",
    num: "05",
    desc: "Add a warm glow to any space with our personalised shadow lamps and rotating photo lamps. Engrave names, photos, or special messages — a showstopper gift.",
    subProducts: ["Shadow Name Lamps", "Rotating Photo Lamps", "Heart Night Lamps"],
    images: [
      "/images/0d9304b8bb7d9e2163676514078f6c92.jpg.jpeg",
      "/images/7d0dc6a2ff6be910a6138fc38377305f.jpg"
    ],
    emojiFallback: ["🪔", "💡"]
  },
  boards: {
    id: "boards",
    name: "Name Boards",
    num: "06",
    desc: "Make an impression. Our custom wooden, acrylic, and golden nameboards are designed for homes, offices, and shops — personalized with your unique style.",
    subProducts: ["Wooden Name Boards", "Golden Name Boards", "Baby Name Boards"],
    images: [
      "/images/1d794502d72043c0a02d6966443ef2ba.jpg",
      "/images/23f88efbf04d85eda9a5a6448f1563d4.jpg"
    ],
    emojiFallback: ["🪪", "🏠"]
  },
  calendars: {
    id: "calendars",
    name: "Custom Calendars",
    num: "07",
    desc: "Cherish every month of the year with a personalised photo calendar. Choose your favourite pictures and let us craft a beautiful calendar that relives your best memories.",
    subProducts: ["Wall Calendars", "Desk Calendars", "Acrylic Calendars"],
    images: [],
    emojiFallback: ["📅", "🗓️", "🎨"]
  }
};

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const catParam = searchParams.get("cat") || "keychains";
  
  const [activeCategory, setActiveCategory] = useState<string>(
    productData[catParam] ? catParam : "keychains"
  );
  
  const [activeSubProduct, setActiveSubProduct] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Sync state with query parameter
  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat && productData[cat]) {
      setActiveCategory(cat);
      setActiveSubProduct(0);
      setCurrentSlide(0);
    }
  }, [searchParams]);

  const handleTabClick = (slug: string) => {
    setActiveCategory(slug);
    setActiveSubProduct(0);
    setCurrentSlide(0);
    router.push(`/products?cat=${slug}`, { scroll: false });
  };

  const product = productData[activeCategory] || productData.keychains;
  const slidesCount = product.images.length > 0 ? product.images.length : product.emojiFallback.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const activeSubName = product.subProducts[activeSubProduct] || product.subProducts[0];
  const whatsAppUrl = `https://wa.me/919900110344?text=Hi!%20I'd%20like%20to%20customize%20a%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(activeSubName)}).`;

  return (
    <div className="bg-bg-light min-h-screen pt-28 pb-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* BACK TO HOME */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-text-muted hover:text-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-border-brand/40 shadow-sm flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-red fill-current" /> Personalized In Mangaluru
          </div>
        </div>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block bg-yellow-light text-red text-[11px] font-bold tracking-widest uppercase px-4.5 py-1.5 rounded-full">
            Product Collection
          </span>
          <h1 className="font-playfair text-3xl md:text-5xl font-black text-dark leading-tight">
            Gifts Made With Love
          </h1>
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
            Select a category to customize. Choose your preferred finish and click to place your order directly via WhatsApp.
          </p>
        </div>

        {/* TABS CONTAINER */}
        <div className="flex gap-2 flex-wrap justify-center py-2 border-b border-border-brand/20">
          {Object.values(productData).map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                activeCategory === tab.id
                  ? "bg-red text-white border-red shadow-md"
                  : "bg-white hover:bg-yellow-light/20 text-text border-border-brand/50 hover:border-red"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* SHOWCASE SECTION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-border-brand/40 rounded-3xl p-6 md:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            
            {/* GALLERY SLIDER */}
            <div className="space-y-4">
              <div className="relative aspect-4/3 bg-gradient-to-br from-yellow-light/50 to-red-light/50 rounded-2xl overflow-hidden border border-border-brand/20 shadow-inner group">
                
                {product.images.length > 0 ? (
                  <div className="w-full h-full relative">
                    <Image
                      src={product.images[currentSlide]}
                      alt={`${product.name} Showcase ${currentSlide + 1}`}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[100px] select-none">
                    {product.emojiFallback[currentSlide] || "🎁"}
                  </div>
                )}

                {/* SLIDER CONTROLS */}
                {slidesCount > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-red hover:text-white shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-red hover:text-white shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                      aria-label="Next Slide"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* DOTS */}
              {slidesCount > 1 && (
                <div className="flex gap-2 justify-center">
                  {[...Array(slidesCount)].map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        currentSlide === idx ? "bg-red w-6" : "bg-border-brand w-2 hover:bg-red-light"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* INFO PANEL */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="font-playfair text-5xl font-black text-yellow leading-none block">
                  {product.num}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-text-muted uppercase">
                  Category Collection
                </span>
                <h2 className="font-playfair text-2xl md:text-3.5xl font-extrabold text-dark leading-tight">
                  {product.name}
                </h2>
              </div>

              <p className="text-sm text-text-muted leading-relaxed">
                {product.desc}
              </p>

              {/* SUB PRODUCTS & FINISHES */}
              <div className="space-y-3">
                <h4 className="text-[11px] font-bold tracking-wider text-text-muted uppercase">
                  Select Design/Finish option:
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {product.subProducts.map((sub, idx) => (
                    <button
                      key={sub}
                      onClick={() => setActiveSubProduct(idx)}
                      className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                        activeSubProduct === idx
                          ? "bg-yellow text-dark border-yellow-dark shadow-sm"
                          : "bg-white hover:bg-yellow-light/20 text-text border-border-brand/40"
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>

              {/* ORDER ACTIONS */}
              <div className="pt-4 border-t border-border-brand/20 space-y-4">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-current" /> Order via WhatsApp
                </a>
                
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Star className="w-3.5 h-3.5 text-yellow-dark fill-yellow-dark" />
                  <span>Get digital mockup preview on WhatsApp before production.</span>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* ORDER INSTRUCTION CORNER */}
        <div className="bg-white border border-border-brand/40 rounded-3xl p-6.5 shadow-sm max-w-xl mx-auto flex flex-col sm:flex-row gap-5 items-start">
          <div className="w-12 h-12 bg-yellow-light/40 rounded-2xl flex items-center justify-center text-yellow-dark flex-shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <h4 className="font-playfair text-lg font-bold text-dark">Need help designing or ordering?</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Do not worry if you are unsure of sizes or layouts. Clicking the WhatsApp order button lets you chat directly with us. Just send us your reference photo and design preferences, and we will take care of the rest!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-bg-light">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red"></div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
