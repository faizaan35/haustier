import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/haustierData';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ModelContactProps {
  initialTopic?: string;
}

export const ModelContact: React.FC<ModelContactProps> = ({ initialTopic }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState(initialTopic || 'General B2B Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-us" className="w-full bg-surface py-20 px-4 sm:px-8 lg:px-14 border-b border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading with Model Tanners Style Separator */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block mb-2">
            DIRECT SOURCING &amp; ENQUIRY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase text-racing-dark tracking-tight font-normal">
            CONTACT US
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-12 h-0.5 bg-antique-brass"></span>
            <span className="w-2 h-2 rotate-45 border border-antique-brass bg-surface"></span>
            <span className="w-12 h-0.5 bg-antique-brass"></span>
          </div>
          <p className="text-sm text-on-surface-variant max-w-xl mx-auto mt-4 leading-relaxed">
            Get in touch with our commercial export desk in Kanpur to discuss manufacturing runs, sampling requests, or custom technical specifications.
          </p>
        </div>

        {/* 2-Column Contact Info + Form / Location Grid (Exact Model Tanners Structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Commercial Contact & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-racing-dark text-warm-cream border border-antique-brass/40 shadow-md space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-antique-brass font-mono block mb-1">
                  EXECUTIVE COMMERCIAL DESK
                </span>
                <h3 className="font-serif text-2xl text-warm-cream font-medium">
                  {COMPANY_INFO.contact.primaryContact}
                </h3>
                <p className="text-xs text-antique-brass/80 mt-0.5">
                  HAÚSTIER PRODUCTS · Executive Management &amp; Export Lead
                </p>
              </div>

              <div className="space-y-4 pt-3 border-t border-antique-brass/20 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-antique-brass shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-antique-brass/70 uppercase">Direct Phone</span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone.replace(/[^+\d]/g, '')}`}
                      className="text-warm-cream hover:text-antique-brass transition-colors font-medium"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-antique-brass shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-antique-brass/70 uppercase">Sales Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.salesEmail}`}
                      className="text-warm-cream hover:text-antique-brass transition-colors font-medium block"
                    >
                      {COMPANY_INFO.contact.salesEmail}
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.generalEmail}`}
                      className="text-warm-cream/80 hover:text-antique-brass transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.contact.generalEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-antique-brass shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-antique-brass/70 uppercase">Registered Address &amp; Works</span>
                    <span className="text-warm-cream leading-relaxed block font-sans">
                      {COMPANY_INFO.location.fullAddress}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map (Exact Model Tanners location widget) */}
            <div className="border border-outline-variant/40 bg-surface shadow-sm overflow-hidden">
              <div className="p-3 bg-surface-container border-b border-outline-variant/30 flex justify-between items-center text-xs font-mono uppercase">
                <span className="font-semibold text-racing-dark">WORKS LOCATION: JAJMAU, KANPUR</span>
                <span className="text-outline">{COMPANY_INFO.location.coordinates}</span>
              </div>
              <iframe
                title="HAÚSTIER PRODUCTS Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28590.28!2d80.375!3d26.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c470000000001%3A0x1!2sJajmau%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1609236692610!5m2!1sen!2sin"
                className="w-full h-56 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: B2B Enquiry Form */}
          <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant/40 p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif text-2xl text-racing-dark mb-4 font-normal">
              Send a Business Enquiry
            </h3>
            <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
              Complete the parameters below to initiate product sampling, tech-pack evaluation, or container quotation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-surface px-3 py-2.5 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-surface px-3 py-2.5 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Brand or Organization Name"
                    className="w-full bg-surface px-3 py-2.5 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 / +49 / +44..."
                    className="w-full bg-surface px-3 py-2.5 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                  Product Category / Subject *
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-surface px-3 py-2.5 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none cursor-pointer"
                >
                  <option>Dog Collars Manufacturing</option>
                  <option>Dog Collars &amp; Leads Sets</option>
                  <option>Pet Toys &amp; Chew Articles</option>
                  <option>Bags &amp; Belts</option>
                  <option>Bespoke Tech-Pack / OEM Development</option>
                  <option>Trade Fair Stand Meeting Request</option>
                  <option>General B2B Inquiry</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                  Project Notes &amp; Specifications *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline estimated volume runs, preferred leather thickness, solid brass finishes, or destination discharge port..."
                  className="w-full bg-surface px-3 py-2 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-racing-green text-warm-cream border border-antique-brass/40 px-8 py-3 text-xs uppercase tracking-widest hover:bg-racing-dark hover:text-antique-brass transition-all duration-150 flex items-center justify-center gap-2 font-semibold cursor-pointer disabled:opacity-50 font-mono shadow-sm"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>SUBMIT ENQUIRY</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              {isSubmitted && (
                <div className="p-4 bg-surface border border-secondary text-primary text-xs flex items-start gap-3 mt-4 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-racing-dark uppercase">
                      Thank You, {fullName}.
                    </p>
                    <p className="text-on-surface-variant mt-0.5 leading-relaxed">
                      Your enquiry has been received and routed directly to Mr. Mohammad Huzaifa. We will get in touch with you shortly.
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
