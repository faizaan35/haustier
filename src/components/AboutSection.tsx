import React from 'react';
import { COMPANY_INFO } from '../data/haustierData';
import { ArrowRight, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="w-full bg-surface-container-low border-t border-outline-variant/30 px-4 sm:px-8 lg:px-14 py-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Workshop Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-outline-variant/40 bg-surface overflow-hidden shadow-sm">
              <div className="h-[420px] sm:h-[480px] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCxcABYFoxCsJy911vwRDU6qtWapNwBsYi4QyZK-BGTm8_cK75fV9RDBFyRz5_24v6Qsh4t7dLx5_Nvb4i71M7w-4qYALIuw48CbqUg-BS-rZpRcfkZGobFb6W5NTAzXax5lpr2tn_jffrR43m0AE58Ar0hT48GMYbd6Wm8hBkFgsILIVWNn4C0WQj7suIr-FiTkXQorXCdg23R3EuBR4r5T0rrvG7_0lHLCYt0QfTdfmMoBUblZXO"
                  alt="Artisan craftsman hands working with leather in Kanpur workshop"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-4 bg-racing-dark text-warm-cream border-t border-antique-brass/40 flex justify-between items-center text-xs font-mono uppercase">
                <span className="text-antique-brass font-semibold">KANPUR ATELIER WORKS</span>
                <span>JAJMAU, UP · INDIA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block">
                ABOUT HAÚSTIER PRODUCTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight font-normal">
                A LEGACY OF CRAFTSMANSHIP &amp; INDUSTRIAL RELIABILITY.
              </h2>
            </div>

            <p className="font-serif text-lg text-saddle-tan italic leading-relaxed">
              &ldquo;Specializing in durable, efficient, high-quality products at an adequate value through the synthesis of technology and craftsmanship.&rdquo;
            </p>

            <div className="space-y-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
              <p>
                <strong>HAÚSTIER PRODUCTS</strong> is an established manufacturer and exporter of leather &amp; non-leather accessories and pet products based in Jajmau, Kanpur—the historic leather hub of India.
              </p>
              <p>
                Our executive leadership brings over <strong>35 years of progressive industry experience</strong> to every client collaboration. We understand that international brands, importers, and commercial retailers require consistency, material authenticity, and seamless communication.
              </p>
              <p>
                With <strong>in-house facilities for the peripheral segments constituting each product</strong>—including raw material grading, precision die cutting, heavy-duty stitching, edge burnishing, and export packaging—we maintain strict quality assurance across every stage of production.
              </p>
            </div>

            {/* Core Commitments Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-surface border border-outline-variant/40 flex items-start gap-2">
                <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-xs text-primary font-medium">In-House Peripheral Facilities</span>
              </div>
              <div className="p-3 bg-surface border border-outline-variant/40 flex items-start gap-2">
                <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-xs text-primary font-medium">Strategic Supplier Network</span>
              </div>
              <div className="p-3 bg-surface border border-outline-variant/40 flex items-start gap-2">
                <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-xs text-primary font-medium">Responsible Working Standards</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#infrastructure-section"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-racing-green font-semibold hover:text-secondary font-mono transition-colors"
              >
                <span>EXPLORE OUR INFRASTRUCTURE &amp; FACILITIES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
