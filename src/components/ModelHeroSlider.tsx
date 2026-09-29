import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVYzY7gOJIcReawfH4tzPxpG102Zw5Jrti9HZI72fAbq7d1mpmr9fqVaBleZ6nrzmEOZYVYebhlYNlRHnpYxLYBrO_d9-IXe8ggXXrv4GnQ6me5JzTzlLDJ3tXmJrjdx-0WugWZ722MYIdGSzrXJYISbTo6GdYYvcqLEtPHm5Rh7m5Lr9a0YBMHtdT3ORHpsoXPscidXcrhmFiYGyULLy9Vc9oi-Pjsm00mQs_Bmf3922pbp4pZ9A9',
    title: 'PREMIUM PET PRODUCTS & ACCESSORIES',
    subtitle: 'Handcrafted Vegetable-Tanned Leather Collars, Leads & Brass Hardware',
  },
  {
    id: 2,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBhMGl05a3ysKKvNTwzWHpptXwt3P5gS1jLycWBm195WTAQ6eu6oKhFCRQOC-kFCFZDSfJ757t0o3DVBUFM8f2-ubmehR4qZI3cSkVfBN0__4UUq2R0yTV4zWvpudsH220R1cl0gwDpgNavPCuOG3lTjVFDitmDPUPn-dw6QvcppzQYReR51aZ_ElCehwaMkQbOeoJt6vjgneNNosNklXaCaG9qyxbVSCsppMyR-labtbzDtLzUpkt',
    title: 'SYNTHESIS OF TECHNOLOGY & CRAFTSMANSHIP',
    subtitle: '35+ Years Progressive Industry Experience in Kanpur, India',
  },
  {
    id: 3,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCxcABYFoxCsJy911vwRDU6qtWapNwBsYi4QyZK-BGTm8_cK75fV9RDBFyRz5_24v6Qsh4t7dLx5_Nvb4i71M7w-4qYALIuw48CbqUg-BS-rZpRcfkZGobFb6W5NTAzXax5lpr2tn_jffrR43m0AE58Ar0hT48GMYbd6Wm8hBkFgsILIVWNn4C0WQj7suIr-FiTkXQorXCdg23R3EuBR4r5T0rrvG7_0lHLCYt0QfTdfmMoBUblZXO',
    title: 'IN-HOUSE PRODUCTION FACILITIES',
    subtitle: 'Cutting, Precision Stitching, Edge Beveling & Natural Wax Burnishing',
  },
  {
    id: 4,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBehBq7WHzbCrdylqMuKG5mJZ6MZj8OytUvtkq7SwmbfjS_a3r1OEV6uG06VL9k9eNGniq4oY60W4Ma7I2fJlU0nsuKR8kH7aD_HB35L7qiWsreZutZElW9vx3KlRFMnrHI6CURpaaxkuSC_oF3Qo_wwftJ2AsefLZpbhGYVSa1vq5IDU-WLpc8U6k7QdDEknymtHmQ3-bDyZX9E7koOjHwYqrptGtttzzyMWRF_-cdHqdxlgnG6lqC',
    title: 'GLOBAL B2B EXPORT CAPABILITY',
    subtitle: 'Direct Supplier to International Pet Brands, Importers & Distributors',
  },
];

export const ModelHeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] bg-racing-dark overflow-hidden group">
      {/* Slides */}
      {SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle Dark Vignette for Editorial Elegance */}
          <div className="absolute inset-0 bg-gradient-to-t from-racing-dark/85 via-racing-dark/35 to-transparent"></div>

          {/* Slide Caption Banner (Model Tanners style) */}
          <div className="absolute bottom-10 left-4 sm:left-8 lg:left-14 right-4 sm:right-8 lg:right-14 max-w-[1440px] mx-auto text-warm-cream">
            <span className="inline-block bg-antique-brass text-racing-dark px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-widest mb-2">
              HAÚSTIER ATELIER · SPECIMEN 0{slide.id}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-warm-cream font-normal max-w-3xl drop-shadow-sm">
              {slide.title}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-warm-cream/90 mt-2 max-w-2xl font-medium tracking-wide">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-racing-dark/60 hover:bg-racing-dark text-warm-cream border border-antique-brass/40 opacity-70 group-hover:opacity-100 transition-all cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-antique-brass" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-racing-dark/60 hover:bg-racing-dark text-warm-cream border border-antique-brass/40 opacity-70 group-hover:opacity-100 transition-all cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-antique-brass" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 right-4 sm:right-8 lg:right-14 z-20 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all cursor-pointer ${
              idx === currentSlide
                ? 'w-6 h-2 bg-antique-brass'
                : 'w-2 h-2 bg-warm-cream/60 hover:bg-warm-cream'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
