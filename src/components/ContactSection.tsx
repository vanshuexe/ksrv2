import React, { useState } from 'react';
import { SITE_METADATA } from '../data/content';
import { EnquiryFormData } from '../types';
import { ArrowRight, CheckCircle2, Copy } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
  prefilledArea?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onShowToast,
  prefilledArea,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    areaOfInterest: prefilledArea || 'Real Estate & Land Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim()) {
      onShowToast('Please enter your name and email');
      return;
    }

    const subject = encodeURIComponent(
      `Enquiry for ${formData.areaOfInterest} - from ${formData.fullName}`
    );
    const body = encodeURIComponent(
      `Dear KSR GROUPS Team,\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nArea of Interest: ${formData.areaOfInterest}\n\nMessage:\n${formData.message}\n\nRegards,\n${formData.fullName}`
    );

    window.location.href = `mailto:${SITE_METADATA.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    onShowToast('Opening email client with pre-filled details...');
  };

  const copyContact = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onShowToast(`${label} copied to clipboard`);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#383838] border-b border-neutral-700">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Contact KSR GROUPS
          </h2>
          <p className="text-sm text-neutral-300">
            For business, project, product, trade and industrial partnership enquiries.
          </p>
        </div>

        {/* 2-Column Split: Contact Details & Interactive Form matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Business Contact Card */}
          <div className="lg:col-span-5 bg-white rounded-xl p-7 sm:p-8 border border-slate-400 shadow-2xs">
            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-6 pb-4 border-b border-slate-300">
              Business contact
            </h3>

            <div className="space-y-5">
              {/* Website */}
              <div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1 flex items-center justify-between">
                  <span>WEBSITE</span>
                  <button
                    onClick={() => copyContact(SITE_METADATA.website, 'Website')}
                    className="text-slate-400 hover:text-slate-700 cursor-pointer"
                    title="Copy website"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
                <div className="text-sm font-semibold text-slate-800">
                  {SITE_METADATA.website}
                </div>
              </div>

              {/* Phone */}
              <div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1 flex items-center justify-between">
                  <span>PHONE</span>
                  <button
                    onClick={() => copyContact(SITE_METADATA.phone, 'Phone number')}
                    className="text-slate-400 hover:text-slate-700 cursor-pointer"
                    title="Copy phone"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
                <a
                  href={`tel:${SITE_METADATA.phone.replace(/\s+/g, '')}`}
                  className="text-sm font-semibold text-slate-800 hover:text-[#c59b4e] transition-colors block"
                >
                  {SITE_METADATA.phoneDisplay}
                </a>
              </div>

              {/* Email */}
              <div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1 flex items-center justify-between">
                  <span>EMAIL</span>
                  <button
                    onClick={() => copyContact(SITE_METADATA.email, 'Email address')}
                    className="text-slate-400 hover:text-slate-700 cursor-pointer"
                    title="Copy email"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
                <a
                  href={`mailto:${SITE_METADATA.email}`}
                  className="text-sm font-semibold text-slate-800 hover:text-[#c59b4e] transition-colors block"
                >
                  {SITE_METADATA.emailDisplay}
                </a>
              </div>

              {/* Office Address */}
              <div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                  OFFICE ADDRESS
                </div>
                <div className="text-sm text-slate-600 font-normal">
                  {SITE_METADATA.officeAddress}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 leading-relaxed bg-[#f9fafb] p-4 rounded-lg">
              <span className="font-bold text-slate-700 block mb-0.5">Corporate Notice:</span>
              Project, product, trade, certification and regulatory details are subject to confirmation before publication or commercial use.
            </div>
          </div>

          {/* Right Column: Send an Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-xl p-7 sm:p-8 border border-slate-400 shadow-2xs">
            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-6 pb-4 border-b border-slate-300">
              Send an enquiry
            </h3>

            {submitted ? (
              <div className="py-8 text-center bg-amber-50/50 rounded-lg border border-amber-200/70 p-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Enquiry Prepared
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto mb-4 leading-relaxed">
                  Your email message has been drafted. You can send it directly to{' '}
                  <span className="font-semibold text-slate-800">{SITE_METADATA.email}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-amber-900 bg-white px-4 py-2 rounded border border-amber-300 shadow-2xs hover:bg-amber-50 cursor-pointer"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Full name"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-slate-400 bg-slate-100 focus:border-[#c59b4e] focus:ring-1 focus:ring-[#c59b4e] outline-none placeholder:text-slate-400"
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Phone number"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-slate-400 bg-slate-100 focus:border-[#c59b4e] focus:ring-1 focus:ring-[#c59b4e] outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email address*
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Email address"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-slate-400 bg-slate-100 focus:border-[#c59b4e] focus:ring-1 focus:ring-[#c59b4e] outline-none placeholder:text-slate-400"
                    />
                  </div>

                  {/* Area of Interest */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Area of interest
                    </label>
                    <select
                      value={formData.areaOfInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, areaOfInterest: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-slate-400 bg-slate-100 focus:border-[#c59b4e] focus:ring-1 focus:ring-[#c59b4e] outline-none text-slate-800"
                    >
                      <option value="Real Estate & Land Development">Real Estate &amp; Land Development</option>
                      <option value="Civil Works & Infrastructure">Civil Works &amp; Infrastructure</option>
                      <option value="Organic Agriculture & Agro Processing">Organic Agriculture &amp; Agro Processing</option>
                      <option value="Export & Import">Export &amp; Import</option>
                      <option value="Poultry Feed Supply">Poultry Feed Supply</option>
                      <option value="Industrial Development Partnership">
                        Industrial Development / Partnership
                      </option>
                      <option value="General Corporate Enquiry">General Corporate Enquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your enquiry, location or proposed project"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-slate-400 bg-slate-100 focus:border-[#c59b4e] focus:ring-1 focus:ring-[#c59b4e] outline-none placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c59b4e] hover:bg-[#b48a3d] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all shadow-2xs cursor-pointer"
                  >
                    <span>Prepare Enquiry Email</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                  </button>

                  <p className="text-[11px] text-slate-400 mt-2">
                    This demo form opens your email application; it does not send or store information on a server.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
