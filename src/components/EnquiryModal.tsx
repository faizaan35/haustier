import React, { useState } from 'react';
import { X, Send, ShieldCheck, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/haustierData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetTopic?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  presetTopic,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-racing-dark/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-surface border border-antique-brass/40 shadow-2xl p-6 sm:p-8 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          aria-label="Close dialogue"
        >
          <X className="w-5 h-5" />
        </button>

        {!isDone ? (
          <div>
            <div className="space-y-1 mb-5">
              <span className="text-xs uppercase tracking-widest text-saddle-tan font-semibold font-mono block">
                DIRECT EXPORT INQUIRY
              </span>
              <h3 className="font-serif text-2xl text-racing-dark font-medium">
                {presetTopic ? `Enquiry: ${presetTopic}` : 'Start an Export Conversation'}
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Connect directly with Mr. Mohammad Huzaifa at the Kanpur works for tech-pack evaluation, sampling, or quotation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                  Full Name &amp; Title *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elena Rostova, Sourcing Director"
                  className="w-full bg-surface-container-low px-3 py-2 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    className="w-full bg-surface-container-low px-3 py-2 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Brand / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company name"
                    className="w-full bg-surface-container-low px-3 py-2 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+49 (0) 123 456789"
                  className="w-full bg-surface-container-low px-3 py-2 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                  Requirements &amp; Tech-Pack Specifications
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Outline product categories, estimated order volumes, material requirements, or timeline..."
                  className="w-full bg-surface-container-low px-3 py-2 text-xs text-primary border border-outline-variant/60 focus:border-racing-green focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <div className="text-[11px] text-outline font-mono uppercase">
                  CONFIDENTIAL B2B CHANNEL
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-racing-green text-warm-cream border border-antique-brass/40 px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-racing-dark hover:text-antique-brass transition-all duration-150 flex items-center gap-2 font-semibold cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>TRANSMIT INQUIRY</span>
                      <Send className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-5 pt-4 border-t border-outline-variant/30 flex items-center justify-between text-xs text-on-surface-variant font-mono">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-secondary" />
                {COMPANY_INFO.contact.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-secondary" />
                {COMPANY_INFO.contact.salesEmail}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <ShieldCheck className="w-12 h-12 text-secondary mx-auto" />
            <h3 className="font-serif text-2xl text-racing-dark font-medium">
              Inquiry Dispatched
            </h3>
            <p className="text-xs text-on-surface-variant max-w-sm mx-auto leading-relaxed">
              Thank you, {name}. Your inquiry has been forwarded directly to Mr. Mohammad Huzaifa at HAÚSTIER PRODUCTS. Our technical team will review your specifications and reply within 24 working hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-racing-green text-warm-cream px-6 py-2 text-xs uppercase tracking-widest font-semibold hover:bg-racing-dark transition-colors cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
