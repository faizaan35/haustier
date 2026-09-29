import React from 'react';

export const ModelWelcome: React.FC = () => {
  return (
    <section id="about-us" className="w-full bg-surface py-16 px-4 sm:px-8 lg:px-14 border-b border-outline-variant/30">
      <div className="max-w-[1080px] mx-auto text-left sm:text-center space-y-6">
        {/* Main Heading (Exact Model Tanners WELCOME Title Structure) */}
        <div>
          <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block mb-2">
            HERITAGE &amp; MANUFACTURING CREDIBILITY
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark font-normal tracking-tight">
            WELCOME TO HAÚSTIER PRODUCTS
          </h1>
          {/* Antique Brass Centered Separator Rule */}
          <div className="w-20 h-0.5 bg-antique-brass sm:mx-auto mt-4"></div>
        </div>

        {/* Narrative Copy */}
        <div className="space-y-4 text-sm sm:text-base text-on-surface-variant text-left leading-relaxed max-w-3xl sm:mx-auto">
          <p>
            <strong>HAÚSTIER PRODUCTS</strong> is an established manufacturer and exporter of <strong>Leather &amp; Non-Leather Accessories and Pet Products</strong> based in Jajmau, Kanpur—the renowned saddlery and leather manufacturing capital of India. Executives of the company bring over <strong>35 years of progressive industry experience</strong> in material selection, tanning processes, and commercial product execution.
          </p>
          <p>
            The company describes its core product approach as a <strong>synthesis of technology and craftsmanship</strong>. We specialize in durable, efficient, high-quality products at an adequate value, enabling our commercial clients, international pet brands, and retail distributors to achieve sustainable competitive advantage.
          </p>
          <p>
            With <strong>in-house facilities for the peripheral segments constituting each product</strong>—from raw hide grading and die cutting to heavy-duty stitching, edge skiving, multi-pass wax burnishing, and piece-by-piece inspection—we ensure complete oversight over tensile integrity and dimensional accuracy.
          </p>
        </div>

        {/* Outlined Read More Button (Exact Model Tanners Button Treatment) */}
        <div className="pt-4 text-left sm:text-center">
          <a
            href="#why-us"
            className="inline-block px-8 py-3 border-2 border-antique-brass text-antique-brass hover:bg-antique-brass hover:text-racing-dark text-xs uppercase tracking-widest font-mono font-semibold transition-all duration-200"
          >
            READ MORE ABOUT US
          </a>
        </div>
      </div>
    </section>
  );
};
