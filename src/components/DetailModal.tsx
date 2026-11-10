import React from 'react';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BusinessVertical, AgroProduct, OngoingProject } from '../types';

interface DetailModalProps {
  item: BusinessVertical | AgroProduct | OngoingProject | null;
  onClose: () => void;
  onEnquireItem: (title: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  item,
  onClose,
  onEnquireItem,
}) => {
  if (!item) return null;

  const isVertical = 'tags' in item;
  const isProduct = 'category' in item;
  const isProject = 'status' in item;

  const title = isVertical
    ? (item as BusinessVertical).title
    : (item as AgroProduct | OngoingProject).name;
  const description = isProject
    ? (item as OngoingProject).category
    : (item as BusinessVertical | AgroProduct).description;

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

        <div className="mb-4">
          <div className="text-[#c59b4e] text-xs font-bold tracking-[0.2em] uppercase mb-1">
            {isVertical
              ? 'BUSINESS VERTICAL'
              : isProduct
              ? 'AGRO SPECIFICATION'
              : 'PROJECT BRIEF'}
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {description}
          </p>
        </div>

        {isProduct && (item as AgroProduct).specPreview && (
          <div className="my-4 p-4 bg-slate-50 rounded-lg border border-slate-200/80">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              Product details
            </div>
            <p className="text-xs sm:text-sm text-slate-800 font-semibold">
              {(item as AgroProduct).specPreview}
            </p>
          </div>
        )}

        {isVertical && (item as BusinessVertical).tags && (
          <div className="my-4 flex flex-wrap gap-2">
            {(item as BusinessVertical).tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-bold tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-sm uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {isProject && (
          <div className="my-4 p-4 bg-amber-50/50 rounded-lg border border-amber-200/60">
            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-900 mb-1">Status Overview</div>
            <p className="text-xs text-amber-800 font-semibold">{(item as OngoingProject).status}</p>
            {(item as OngoingProject).highlights && (
              <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
                {(item as OngoingProject).highlights!.map((h, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onEnquireItem(title);
              onClose();
            }}
            className="inline-flex items-center gap-1.5 bg-[#c59b4e] hover:bg-[#b48a3d] text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm shadow-2xs transition-colors cursor-pointer"
          >
            <span>Enquire Regarding This</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
          </button>
        </div>
      </div>
    </div>
  );
};
