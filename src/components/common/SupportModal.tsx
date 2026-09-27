import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Handshake, 
  Building2, 
  Copy, 
  CheckCircle2, 
  CreditCard,
  GraduationCap,
  Users2,
  Sparkles,
  Sprout,
  Droplets,
  ArrowRight
} from 'lucide-react';

export const SupportModal: React.FC = () => {
  const { isSupportModalOpen, setIsSupportModalOpen, navigateTo, showToast } = useApp();
  const [copied, setCopied] = useState(false);

  if (!isSupportModalOpen) return null;

  const copyBankDetails = () => {
    const details = `Hand of Mercy Uganda (REG 1940)
Bank: Stanbic Bank Uganda
Branch: Kampala Main Branch / Bulenga
Account Name: Hand of Mercy Uganda Community Outreach
Account Number (UGX): 9030012345678
Account Number (USD / EUR): 9030012345699
SWIFT Code: SBICUGKX
Purpose / Reference: Partnership / Community Support`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(details);
      setCopied(true);
      showToast('Wire Details Copied', 'Stanbic Bank Uganda wire details copied to your clipboard.');
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const areas = [
    { title: 'Sponsor a Child', desc: 'Access to education & learning resources', icon: <GraduationCap className="w-4 h-4 text-[#1E40AF]" /> },
    { title: 'Support a Community', desc: 'Outreach & development initiatives', icon: <Users2 className="w-4 h-4 text-[#F97316]" /> },
    { title: 'Empower a Woman', desc: 'Skills, entrepreneurship & livelihoods', icon: <Sparkles className="w-4 h-4 text-amber-600" /> },
    { title: 'Build a School', desc: 'Classrooms & learning environments', icon: <Building2 className="w-4 h-4 text-indigo-600" /> },
    { title: 'Support Agriculture', desc: 'Sustainable farming & food security', icon: <Sprout className="w-4 h-4 text-emerald-600" /> },
    { title: 'Clean Water & Sanitation', desc: 'Clean water points & hygiene education', icon: <Droplets className="w-4 h-4 text-sky-600" /> }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full my-8 shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#172554] via-[#1E40AF] to-[#1E3A8A] text-white p-6 sm:p-8 flex items-start justify-between">
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
              Partner With Us
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-brand">
              Together, We Can Extend the Hand of Mercy
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm max-w-lg leading-relaxed">
              Your partnership can help educate a child, empower a mother, support a young person, improve a community, and create opportunities for people to build better futures.
            </p>
          </div>
          <button
            onClick={() => setIsSupportModalOpen(false)}
            className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Partnership Areas Grid */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              6 Core Partnership Areas
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {areas.map((a, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white shadow-2xs">
                    {a.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#172554]">{a.title}</h4>
                    <p className="text-[10px] text-slate-500">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wire Card */}
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1E40AF] uppercase tracking-wider">
                <CreditCard className="w-4 h-4 text-[#1E40AF]" />
                <span>Official Wire & Bank Transfer Details</span>
              </div>
              <button
                onClick={copyBankDetails}
                className="px-3 py-1 text-xs font-bold bg-white text-[#1E40AF] border border-blue-300 rounded-lg hover:bg-blue-100 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Wire Info'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Account Name</span>
                <span className="font-bold text-slate-900">Hand of Mercy Uganda</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Bank & Branch</span>
                <span className="font-bold text-slate-900">Stanbic Bank Uganda (Kampala Main)</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Account (UGX / Local)</span>
                <span className="font-mono font-bold text-slate-900">9030012345678</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Account (USD / EUR)</span>
                <span className="font-mono font-bold text-slate-900">9030012345699</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 sm:col-span-2 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">SWIFT Code (International)</span>
                  <span className="font-mono font-bold text-[#1E40AF]">SBICUGKX</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Govt Registration</span>
                  <span className="font-bold text-slate-800">REG 1940</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                setIsSupportModalOpen(false);
                navigateTo('partner');
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Handshake className="w-4 h-4 text-amber-200" />
              <span>Open Full Partnership Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsSupportModalOpen(false)}
              className="w-full sm:w-auto px-4 py-2.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
