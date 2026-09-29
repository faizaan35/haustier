import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/haustierData';
import { EnquiryFormData } from '../types';
import { CheckCircle, Send, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface EnquirySectionProps {
  initialCategory?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialCategory }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    destinationMarket: '',
    categories: initialCategory ? [initialCategory] : ['Dog Collars', 'Dog Collars & Leads'],
    orderVolume: 'Initial Boutique Run (100 – 500 units)',
    swatchRequest: 'Include Full Vegetable Tanned Leather Swatch Binder',
    notes: '',
    requestNda: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const availableCategories = [
    'Dog Collars',
    'Dog Collars & Leads',
    'Toys',
    'Bags & Belts',
    'Custom Development',
  ];

  const handleCategoryToggle = (category: string) => {
    setFormData((prev) => {
      const exists = prev.categories.includes(category);
      if (exists) {
        return { ...prev, categories: prev.categories.filter((c) => c !== category) };
      } else {
        return { ...prev, categories: [...prev.categories, category] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <section
      id="enquiry-section"
      className="w-full bg-surface px-4 sm:px-8 lg:px-14 py-16 border-t border-outline-variant/40"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Editorial Dignity Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold block">
              DIRECT EXPORT DESK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight font-normal">
              YOUR COLLECTION.<br />OUR CRAFT.
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Connect directly with our export desk in Kanpur. We evaluate tech-packs, advise on leather yields, and provide transparent FOB and CIF commercial quotations.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-primary font-medium">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                <span>Rapid sample dispatch via DHL / FedEx Express</span>
              </div>
              <div className="flex items-center gap-2.5 text-primary font-medium">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                <span>Physical material swatch binders provided for verified B2B buyers</span>
              </div>
              <div className="flex items-center gap-2.5 text-primary font-medium">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                <span>Mutual Non-Disclosure Agreement (NDA) supported prior to tech-pack exchange</span>
              </div>
            </div>

            {/* Direct Commercial Contact Card */}
            <div className="p-5 bg-racing-dark text-warm-cream border border-antique-brass/40 space-y-3 shadow-md">
              <span className="text-xs uppercase tracking-widest text-antique-brass font-mono font-medium block">
                PRIMARY COMMERCIAL CONTACT
              </span>
              <div className="font-serif text-2xl text-warm-cream font-medium">
                {COMPANY_INFO.contact.primaryContact}
              </div>
              <p className="text-xs text-antique-brass/80">
                HAÚSTIER PRODUCTS · Kanpur Works &amp; Export Management
              </p>

              <div className="pt-2 border-t border-antique-brass/20 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2.5 text-warm-cream">
                  <Phone className="w-3.5 h-3.5 text-saddle-cognac shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone.replace(/[^+\d]/g, '')}`}
                    className="hover:text-antique-brass transition-colors"
                  >
                    Direct: {COMPANY_INFO.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-warm-cream">
                  <Mail className="w-3.5 h-3.5 text-saddle-cognac shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.contact.salesEmail}`}
                    className="hover:text-antique-brass transition-colors"
                  >
                    {COMPANY_INFO.contact.salesEmail}
                  </a>
                </div>
                <div className="flex items-start gap-2.5 text-warm-cream/80">
                  <MapPin className="w-3.5 h-3.5 text-saddle-cognac shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.location.fullAddress}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical B2B Enquiry Launch Form */}
          <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant/40 p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif text-2xl text-racing-dark mb-4 font-normal">
              Direct B2B Manufacturing Enquiry
            </h3>
            <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
              Complete the parameters below to initiate product sampling, tech-pack review, or container quotation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Full Name &amp; Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Marcus Vance, Sourcing Director"
                    className="w-full bg-surface px-3 py-2.5 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-surface px-3 py-2.5 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Brand / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Company or Brand Name"
                    className="w-full bg-surface px-3 py-2.5 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-surface px-3 py-2.5 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                  Destination Country / Discharge Port
                </label>
                <input
                  type="text"
                  value={formData.destinationMarket}
                  onChange={(e) => setFormData({ ...formData, destinationMarket: e.target.value })}
                  placeholder="e.g. Rotterdam, Hamburg, Los Angeles, Southampton, Melbourne"
                  className="w-full bg-surface px-3 py-2.5 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none transition-colors"
                />
              </div>

              {/* Product Categories Selector */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                  Product Categories of Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {availableCategories.map((category) => {
                    const isChecked = formData.categories.includes(category);
                    return (
                      <label
                        key={category}
                        className={`p-2.5 border text-xs flex items-center gap-2 cursor-pointer transition-colors ${
                          isChecked
                            ? 'bg-surface border-racing-green text-racing-dark font-medium'
                            : 'bg-surface/50 border-outline-variant/40 text-on-surface-variant hover:border-antique-brass'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCategoryToggle(category)}
                          className="accent-racing-green"
                        />
                        <span className="truncate">{category}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Target Order Scale
                  </label>
                  <select
                    value={formData.orderVolume}
                    onChange={(e) => setFormData({ ...formData, orderVolume: e.target.value })}
                    className="w-full bg-surface px-3 py-2.5 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none cursor-pointer"
                  >
                    <option>Prototype Sampling (1 – 10 units)</option>
                    <option>Initial Boutique Run (100 – 500 units)</option>
                    <option>Commercial Batch (500 – 2,500 units)</option>
                    <option>Full FCL Container (5,000+ units)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Material Swatch Kit
                  </label>
                  <select
                    value={formData.swatchRequest}
                    onChange={(e) => setFormData({ ...formData, swatchRequest: e.target.value })}
                    className="w-full bg-surface px-3 py-2.5 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none cursor-pointer"
                  >
                    <option>Include Full Vegetable Tanned Leather Swatch Binder</option>
                    <option>Include Solid Brass Hardware Samples</option>
                    <option>Both Leather Swatches + Hardware Box</option>
                    <option>Digital Tech-Pack Review Only</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                  Technical Project Notes / Specifications
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Outline dimensions, preferred leather gauges, hardware finishes, packaging requirements, or questions..."
                  className="w-full bg-surface px-3 py-2 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none transition-colors"
                ></textarea>
              </div>

              {/* NDA and Action Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-outline uppercase font-mono tracking-wider">
                  <input
                    type="checkbox"
                    checked={formData.requestNda}
                    onChange={(e) => setFormData({ ...formData, requestNda: e.target.checked })}
                    className="accent-racing-green"
                  />
                  <span>Request Mutual NDA before CAD submission</span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-racing-green text-warm-cream border border-antique-brass/40 px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-racing-dark hover:text-antique-brass transition-all duration-150 shadow-sm flex items-center justify-center gap-2 font-semibold cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>SUBMIT EXPORT ENQUIRY</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              {/* Success Notification */}
              {isSuccess && (
                <div className="p-4 bg-surface border border-secondary text-primary text-xs flex items-start gap-3 mt-4 animate-fadeIn">
                  <ShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-racing-dark uppercase">
                      Enquiry Registered Successfully
                    </p>
                    <p className="text-on-surface-variant mt-0.5 leading-relaxed">
                      Thank you, {formData.fullName}. Your requirements have been routed to Mr. Mohammad Huzaifa at the Kanpur export desk. We will review your project parameters and respond within 24 business hours.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
