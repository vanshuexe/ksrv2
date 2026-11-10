import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#07101c] text-white px-4 py-3 rounded-lg shadow-xl border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-200">
      <CheckCircle2 className="w-4 h-4 text-[#c59b4e] shrink-0" />
      <span className="text-xs font-semibold">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
