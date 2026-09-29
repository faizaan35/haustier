import React from 'react';
import { PRODUCT_CATEGORIES } from '../data/haustierData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProductsSectionProps {
  onOpenEnquiry: (category?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="products-section" className="w-full bg-surface px-4 sm:px-8 lg:px-14 py-16 border-t border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block">
              CORE MANUFACTURING LINES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight mt-1 font-normal">
              OUR PRODUCTS.
            </h2>
          </div>
          <p className="text-sm text-on-surface-variant max-w-md mt-3 md:mt-0 leading-relaxed">
            Manufactured in Kanpur for international pet lifestyle labels, retail distributors, and commercial sourcing partners.
          </p>
        </div>

        {/* 4 Product Family Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((product) => (
            <div
              key={product.id}
              className="bg-surface-container-low border border-outline-variant/40 p-4 sm:p-5 flex flex-col justify-between hover:shadow-md hover:border-antique-brass transition-all group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-outline text-xs uppercase font-mono">
                  <span>{product.chapter}</span>
                  <span className="text-saddle-tan font-semibold">{product.tag}</span>
                </div>

                <div className="h-56 overflow-hidden bg-surface-container border border-outline-variant/30">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-2xl text-racing-dark font-normal">
                    {product.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <ul className="text-xs text-on-surface-variant space-y-1.5 uppercase font-medium">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-secondary rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-5 border-t border-outline-variant/30 flex justify-between items-center">
                <span className="text-xs font-mono text-outline uppercase">{product.moq}</span>
                <button
                  onClick={() => onOpenEnquiry(product.title)}
                  className="text-xs uppercase tracking-wider text-racing-green font-semibold hover:text-secondary flex items-center gap-1 cursor-pointer transition-colors font-mono"
                >
                  <span>INQUIRE ON LINE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Provisional & Custom Lines Notice Banner */}
        <div className="mt-8 p-5 bg-surface-container border border-antique-brass/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-saddle-tan shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs sm:text-sm text-racing-dark leading-relaxed">
              <strong>CUSTOM DEVELOPMENT &amp; PRIVATE LABEL:</strong> In addition to our core catalogue, we sample and produce custom harnesses, pet beds, cat accessories, and equestrian leather goods to client tech-packs and physical samples.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('Bespoke Tech-Pack Development')}
            className="text-saddle-tan text-xs uppercase tracking-widest font-semibold hover:text-racing-dark whitespace-nowrap cursor-pointer shrink-0 transition-colors font-mono"
          >
            DISCUSS BESPOKE DEVELOPMENT →
          </button>
        </div>
      </div>
    </section>
  );
};
