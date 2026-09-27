import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { toast, clearToast } = useApp();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-4 flex items-start gap-3.5">
        <div className="shrink-0 mt-0.5">
          {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
          {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-500" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-[#1E40AF]" />}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-[#172554]">{toast.title}</h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{toast.message}</p>
        </div>
        <button
          onClick={clearToast}
          className="text-slate-400 hover:text-slate-600 p-1 -mr-1 -mt-1 rounded-md"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
