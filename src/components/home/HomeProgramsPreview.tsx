import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  GraduationCap, 
  Users2, 
  Wrench, 
  Sprout, 
  Droplets, 
  Sparkles, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

export const HomeProgramsPreview: React.FC = () => {
  const { navigateTo, setIsSupportModalOpen } = useApp();

  const programs = [
    {
      id: 'program-01',
      number: 'Program 01',
      title: 'Education & Child Development',
      headline: 'Every Child Deserves a Chance to Learn',
      desc: 'We believe education is a human right and a powerful pathway out of poverty. We support vulnerable children and young people through access to quality education, learning materials, sponsorship, school development, and safe environments.',
      focus: ['Education sponsorship', 'Scholastic materials', 'School development', 'Classroom construction', 'Inclusive education', 'Child development', 'Support for vulnerable children'],
      ctaText: 'Support Education',
      icon: <GraduationCap className="w-6 h-6 text-[#1E40AF]" />,
      badgeColor: 'bg-blue-100 text-[#1E40AF]',
      borderColor: 'border-blue-200 hover:border-blue-400',
      image: 'https://i.postimg.cc/8ctsL6kR/3W8A9559.jpg'
    },
    {
      id: 'program-02',
      number: 'Program 02',
      title: 'Community Outreach',
      headline: 'Empowering Women, Girls & Families',
      desc: 'Walking alongside vulnerable communities through holistic support: Women Empowerment (skills, entrepreneurship, livelihoods), Girl Child Empowerment (retention in school, confidence), and Vulnerable Families support.',
      focus: ['Women Empowerment', 'Girl Child Empowerment', 'Vulnerable Families', 'Social & Emotional Support', 'Economic Networks', 'Life Skills Mentorship'],
      ctaText: 'Support Community Outreach',
      icon: <Users2 className="w-6 h-6 text-[#F97316]" />,
      badgeColor: 'bg-orange-100 text-[#F97316]',
      borderColor: 'border-orange-200 hover:border-orange-400',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'program-03',
      number: 'Program 03',
      title: 'Vocational Skills & Livelihoods',
      headline: 'Skills That Create Opportunities',
      desc: 'We equip young people, women, and families with practical skills that can help them generate income, become self-reliant, and contribute meaningfully to their communities.',
      focus: ['Vocational training', 'Entrepreneurship', 'Skills development', 'Business seminars', 'Income-generating initiatives', 'Youth empowerment'],
      ctaText: 'Support Skills Development',
      icon: <Wrench className="w-6 h-6 text-amber-600" />,
      badgeColor: 'bg-amber-100 text-amber-800',
      borderColor: 'border-amber-200 hover:border-amber-400',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'program-04',
      number: 'Program 04',
      title: 'Farming & Agriculture',
      headline: 'Growing Food. Growing Skills. Growing Futures.',
      desc: 'We use agriculture as a pathway to food security, practical education, entrepreneurship, and sustainable livelihoods. Engaging young people and communities in farming with responsible use of natural resources.',
      focus: ['School agriculture', 'Sustainable farming', 'Food security', 'Agricultural skills', 'Youth participation', 'Entrepreneurship', 'Volunteer farming projects'],
      ctaText: 'Join the Agriculture Program',
      icon: <Sprout className="w-6 h-6 text-emerald-600" />,
      badgeColor: 'bg-emerald-100 text-emerald-800',
      borderColor: 'border-emerald-200 hover:border-emerald-400',
      image: 'https://i.postimg.cc/d3SGRX4d/edited-seedling-volunteers.png'
    },
    {
      id: 'program-05',
      number: 'Program 05',
      title: 'Community Health & Sanitation',
      headline: 'Healthier Communities. Stronger Futures.',
      desc: 'We work with communities to improve access to clean water, sanitation facilities, hygiene education, and healthier living environments.',
      focus: ['Clean water points', 'Sanitation facilities', 'Hygiene awareness', 'Community health', 'Improved living environments'],
      ctaText: 'Support Health & Sanitation',
      icon: <Droplets className="w-6 h-6 text-sky-600" />,
      badgeColor: 'bg-sky-100 text-sky-800',
      borderColor: 'border-sky-200 hover:border-sky-400',
      image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'program-06',
      number: 'Program 06',
      title: 'Healing & Hope',
      headline: 'Restoring Dignity. Renewing Hope.',
      desc: 'We walk compassionately with people who have experienced vulnerability, trauma, abuse, neglect, or difficult circumstances by connecting them to emotional, social, economic, and spiritual support.',
      focus: ['Restoring dignity', 'Trauma & counseling support', 'Child neglect response', 'Family restoration', 'Compassionate spiritual care'],
      ctaText: 'Bring Hope',
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      badgeColor: 'bg-purple-100 text-purple-800',
      borderColor: 'border-purple-200 hover:border-purple-400',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white" id="programs-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#F97316] text-xs font-bold uppercase tracking-wider">
            <span>Our 6 Core Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] font-serif-brand">
            Holistic Impact in Action
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We believe meaningful change happens when people are supported holistically. Our programs respond to practical needs while creating opportunities for individuals and communities to thrive.
          </p>
        </div>

        {/* 6 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className={`rounded-3xl border ${prog.borderColor} bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group`}
            >
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${prog.badgeColor}`}>
                    {prog.number}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-sm text-white">
                      {prog.icon}
                    </div>
                    <h3 className="font-bold text-base tracking-tight drop-shadow-xs">
                      {prog.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold text-[#172554] tracking-tight">
                    {prog.headline}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prog.desc}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Key Focus:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.focus.slice(0, 4).map((f, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                        >
                          {f}
                        </span>
                      ))}
                      {prog.focus.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#1E40AF] text-[10px] font-medium">
                          +{prog.focus.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => navigateTo('programs', prog.id)}
                    className="text-xs font-bold text-[#1E40AF] hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setIsSupportModalOpen(true)}
                    className="btn-gainlove px-3.5 py-1.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-[11px] shadow-xs cursor-pointer"
                  >
                    {prog.ctaText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#172554]">
              Want to see the comprehensive breakdown of all 6 programs?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Read how our education, outreach, vocational hubs, agriculture, health, and healing programs interconnect.
            </p>
          </div>
          <button
            onClick={() => navigateTo('programs')}
            className="btn-gainlove px-6 py-3 bg-[#1E40AF] hover:bg-blue-800 text-white text-xs sm:text-sm whitespace-nowrap shadow-md cursor-pointer"
          >
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ArrowRight className="w-3 h-3 text-white" />
            </span>
            <span>Explore Complete Programs</span>
          </button>
        </div>

      </div>
    </section>
  );
};
