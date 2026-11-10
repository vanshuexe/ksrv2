import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE_METADATA } from '../data/content';
import { EnquiryFormData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultArea?: string;
  onShowToast: (msg: string) => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultArea = 'General Corporate Enquiry',
  onShowToast,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    areaOfInterest: defaultArea,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
    onShowToast('Enquiry drafted! Opening mail application...');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-[#c59b4e] text-xs font-bold tracking-[0.2em] uppercase mb-1">
            DIRECT INQUIRY
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Connect with KSR GROUPS
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Share your requirements for a business sector, product, trade or industrial partnership enquiry.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center bg-slate-50 rounded-lg border border-slate-200/80 p-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
            <h4 className="text-base font-bold text-slate-900 mb-1">
              Enquiry Prepared
            </h4>
            <p className="text-xs text-slate-600 mb-5">
              Your message has been formatted. You can also reach us directly at{' '}
              <span className="font-semibold text-slate-800">{SITE_METADATA.email}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-5 py-2 text-xs font-bold bg-[#0b1728] text-white rounded hover:bg-slate-800 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name*
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="Full name"
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-slate-200 focus:border-[#c59b4e] focus:ring-1 focus:ring-[#c59b4e] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+91..."
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-slate-200 focus:border-[#c59b4e] focus:ring-1 focus:ring-[#c59b4e] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@company.com"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-slate-200 focus:border-[#c59b4e] focus:ring-1 focus:ring-[#c59b4e] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Sector / Area of Interest
              </label>
              <select
                value={formData.areaOfInterest}
                onChange={(e) =>
                  setFormData({ ...formData, areaOfInterest: e.target.value })
                }
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-slate-200 focus:border-[#c59b4e] focus:ring-1 focus:ring-[#c59b4e] outline-none bg-white text-slate-800"
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

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Message / Brief Details
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Mention proposed project location, volumes, or queries"
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded border border-slate-200 focus:border-[#c59b4e] focus:ring-1 focus:ring-[#c59b4e] outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#c59b4e] hover:bg-[#b48a3d] text-slate-950 font-bold text-xs uppercase tracking-wider py-3 rounded-sm shadow-xs transition-all cursor-pointer"
              >
                <span>Submit &amp; Open Email</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
