import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, X, Check, AlertTriangle, FileText, Lock } from 'lucide-react';

export const SafeguardingModal: React.FC = () => {
  const { isSafeguardingModalOpen, setIsSafeguardingModalOpen } = useApp();

  if (!isSafeguardingModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#172554] text-white p-6 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Safeguarding & Child Protection Policy</h3>
              <p className="text-xs text-blue-200">Hands of Mercy Uganda Official Institutional Commitment</p>
            </div>
          </div>
          <button
            onClick={() => setIsSafeguardingModalOpen(false)}
            className="text-blue-200 hover:text-white p-2 rounded-lg hover:bg-blue-800/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          <div className="p-4 bg-blue-50 border border-blue-200/60 rounded-xl">
            <p className="text-xs font-semibold text-[#1E40AF] uppercase tracking-wide">
              Foundational Statement of Care
            </p>
            <p className="text-sm font-medium text-slate-800 mt-1">
              Hands of Mercy Uganda maintains an uncompromising, zero-tolerance approach toward any harm, abuse, neglect, exploitation, or discrimination against children and vulnerable persons in our programmes.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#172554] text-base mb-2">1. Child Protection & Dignity</h4>
            <p className="text-slate-600">
              All children participating in education, agriculture, or community events under Hands of Mercy Uganda and Growing Futures are entitled to protection, physical safety, dignity, and respectful treatment regardless of gender, background, religion, or ability.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#172554] text-base mb-2">2. Volunteer Conduct & Boundaries</h4>
            <p className="text-slate-600 mb-2">
              Volunteers—whether international or national—must adhere strictly to professional boundaries:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Never remain alone in closed, unobserved rooms or isolated spaces with a child.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Never administer physical discipline or invasive personal care; all student management is guided by licensed Ugandan educators.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Never promise gifts, financial sponsorships, or private communications to individual children without official committee review.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#172554] text-base mb-2">3. Responsible Photography & Media Ethics</h4>
            <p className="text-slate-600 mb-2">
              In accordance with international ethical storytelling guidelines and Ugandan law:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>No photography or videography is permitted without informed consent from parents, guardians, or school leadership.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Images must celebrate dignity, active learning, agency, and hope. Dehumanizing, staged, or sensationalized poverty imagery is strictly prohibited.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Full names, home addresses, or geo-locations of minors must never be broadcast on personal social media channels.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#172554] text-base mb-2">4. Vetting, Background Checks & Reporting</h4>
            <p className="text-slate-600">
              All international applicants must submit an official police clearance certificate (e.g. German <em>Führungszeugnis</em> or equivalent) and two professional references before being accepted into any placement. Any safeguarding suspicion or disclosure triggers an immediate, confidential reporting protocol to the designated Safeguarding Lead and local authorities.
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[#1E40AF]" />
              <div>
                <div className="font-bold text-xs text-slate-800">Safeguarding Focal Lead</div>
                <div className="text-xs text-slate-500">safeguarding@handsofmercyuganda.org</div>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
              Annual Review Completed 2026
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 p-4 px-6 border-t border-slate-200 flex justify-end">
          <button
            onClick={() => setIsSafeguardingModalOpen(false)}
            className="px-5 py-2 text-sm font-bold text-white bg-[#1E40AF] hover:bg-blue-800 rounded-lg transition-colors"
          >
            I Understand & Acknowledge
          </button>
        </div>

      </div>
    </div>
  );
};
