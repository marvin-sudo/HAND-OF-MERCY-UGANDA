import React from 'react';
import { useApp } from '../../context/AppContext';
import { Users, GraduationCap, Sprout, FolderCheck, Globe } from 'lucide-react';

export const ImpactStrip: React.FC = () => {
  const { impactMetrics, navigateTo } = useApp();

  const getIcon = (metricName: string) => {
    const lower = metricName.toLowerCase();
    if (lower.includes('learner') || lower.includes('student')) return <GraduationCap className="w-5 h-5 text-[#1E40AF]" />;
    if (lower.includes('garden') || lower.includes('agri')) return <Sprout className="w-5 h-5 text-emerald-600" />;
    if (lower.includes('volunteer')) return <Users className="w-5 h-5 text-[#F97316]" />;
    if (lower.includes('project')) return <FolderCheck className="w-5 h-5 text-blue-600" />;
    return <Globe className="w-5 h-5 text-amber-600" />;
  };

  return (
    <div className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-100 p-6 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {impactMetrics.map((item, idx) => (
            <div 
              key={item.id} 
              className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-4 md:pt-0 md:px-4' : 'md:pr-4'}`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-2.5 shadow-xs">
                {getIcon(item.metric)}
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#172554] tracking-tight font-serif-brand">
                {item.value}
              </span>
              <span className="text-xs font-bold text-slate-700 mt-1 uppercase tracking-wide">
                {item.metric}
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5 max-w-[170px] line-clamp-2">
                {item.description}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Verified organisational metrics updated quarterly from field registers</span>
          </div>
          <button
            onClick={() => navigateTo('impact')}
            className="text-[#1E40AF] font-bold hover:underline"
          >
            View Detailed Impact Dashboard →
          </button>
        </div>
      </div>
    </div>
  );
};
