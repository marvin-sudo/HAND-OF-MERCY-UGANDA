import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Heart, 
  Handshake, 
  GraduationCap, 
  Sprout, 
  Users2, 
  Wrench, 
  ArrowRight,
  Sparkles,
  Building2,
  Droplets
} from 'lucide-react';

export const HomeVolunteerAndPartner: React.FC = () => {
  const { navigateTo, setVolunteerPreset } = useApp();

  const volunteerAreas = [
    { name: 'Education', icon: <GraduationCap className="w-6 h-6 text-[#1E40AF]" />, desc: 'Support teaching, mentoring & children’s programs.', role: 'Education' },
    { name: 'Farming & Agriculture', icon: <Sprout className="w-6 h-6 text-emerald-600" />, desc: 'Take part in school & community agriculture projects.', role: 'Farming & Agriculture' },
    { name: 'Community Outreach', icon: <Users2 className="w-6 h-6 text-[#F97316]" />, desc: 'Participate in women empowerment & girl-child initiatives.', role: 'Community Outreach' },
    { name: 'Vocational Skills', icon: <Wrench className="w-6 h-6 text-amber-600" />, desc: 'Share practical skills & entrepreneurship knowledge.', role: 'Vocational Skills' },
    { name: 'Child & Family Support', icon: <Heart className="w-6 h-6 text-purple-600" />, desc: 'Support activities designed to restore dignity.', role: 'Child & Family Support' }
  ];

  const partnershipAreas = [
    { title: 'Sponsor a Child', desc: 'Help a vulnerable child access education & scholastic supplies.', icon: <GraduationCap className="w-5 h-5 text-[#1E40AF]" /> },
    { title: 'Support a Community', desc: 'Contribute toward grassroots outreach & resilience initiatives.', icon: <Users2 className="w-5 h-5 text-[#F97316]" /> },
    { title: 'Empower a Woman', desc: 'Support skills, tailoring cooperatives & livelihood opportunities.', icon: <Sparkles className="w-5 h-5 text-amber-600" /> },
    { title: 'Build a School', desc: 'Support classrooms, desks & positive learning environments.', icon: <Building2 className="w-5 h-5 text-indigo-600" /> },
    { title: 'Support Agriculture', desc: 'Help communities build sustainable food security beds.', icon: <Sprout className="w-5 h-5 text-emerald-600" /> },
    { title: 'Clean Water & Sanitation', desc: 'Provide rainwater harvesting tanks & hygiene training.', icon: <Droplets className="w-5 h-5 text-sky-600" /> }
  ];

  const handleVolunteerClick = (role: string) => {
    setVolunteerPreset({ program: role, role: `Volunteer in ${role}` });
    navigateTo('volunteer');
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="volunteer-partner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 4: Volunteer With Us */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E40AF]">
                Volunteer With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] font-serif-brand">
                Give Your Time. Share Your Skills. Create Change.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Your time, skills, and compassion can become part of a continuous chain of love.
              </p>
            </div>

            <button
              onClick={() => navigateTo('volunteer')}
              className="btn-gainlove px-6 py-3 bg-[#1E40AF] hover:bg-blue-800 text-white text-xs sm:text-sm shadow-md cursor-pointer w-fit"
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
              <span>Become a Volunteer</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {volunteerAreas.map((area, idx) => (
              <div
                key={idx}
                onClick={() => handleVolunteerClick(area.role)}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#1E40AF] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-1 group-hover:scale-105 transition-transform">
                    {area.icon}
                  </div>
                  <h3 className="font-bold text-sm text-[#172554]">
                    {area.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1 text-[11px] font-bold text-[#1E40AF]">
                  <span>Join this area</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Partner With Us */}
        <div className="space-y-10 pt-10 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
                Partner With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] font-serif-brand">
                Together, We Can Extend the Hand of Mercy
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Your partnership can help educate a child, empower a mother, support a young person, improve a community, and create opportunities for people to build better futures.
              </p>
            </div>

            <button
              onClick={() => navigateTo('partner')}
              className="btn-gainlove px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm shadow-md cursor-pointer w-fit"
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Handshake className="w-3 h-3 text-amber-100" />
              </span>
              <span>Partner With Us</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipAreas.map((area, idx) => (
              <div
                key={idx}
                onClick={() => navigateTo('partner')}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#F97316] shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 w-fit">
                    {area.icon}
                  </div>
                  <h3 className="font-bold text-base text-[#172554]">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F97316]">
                  <span>Explore Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
