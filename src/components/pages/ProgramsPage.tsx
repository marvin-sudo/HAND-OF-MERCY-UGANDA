import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  GraduationCap, 
  Users2, 
  Wrench, 
  Sprout, 
  Droplets, 
  Sparkles, 
  ArrowRight, 
  Check, 
  HeartHandshake, 
  Handshake, 
  BookOpen, 
  Target,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const ProgramsPage: React.FC = () => {
  const { navigateTo, setIsSupportModalOpen, setVolunteerPreset } = useApp();
  const [selectedProgramTab, setSelectedProgramTab] = useState<string>('all');

  useEffect(() => {
    // Check hash if routed with #program-01, etc.
    const hash = window.location.hash.replace('#', '');
    if (hash && ['program-01', 'program-02', 'program-03', 'program-04', 'program-05', 'program-06'].includes(hash)) {
      setSelectedProgramTab(hash);
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const programs = [
    {
      id: 'program-01',
      number: 'Program 01',
      title: 'Education & Child Development',
      headline: 'Every Child Deserves a Chance to Learn',
      desc: 'We believe education is a human right and a powerful pathway out of poverty. We support vulnerable children and young people through access to quality education, learning materials, sponsorship, school development, and initiatives that create safe environments for children to learn and grow.',
      focus: [
        'Education sponsorship for primary & high school students',
        'Scholastic materials, textbooks, uniforms & supplies',
        'School development and infrastructure upgrades',
        'Classroom construction and learning spaces',
        'Inclusive education for vulnerable youth',
        'Child development & mentorship programs',
        'Support for vulnerable children & orphans'
      ],
      impactHighlight: 'Over 1,200 children supported with direct tuition, books, and safe learning desks.',
      ctaText: 'Support Education',
      volunteerArea: 'Education',
      icon: <GraduationCap className="w-8 h-8 text-[#1E40AF]" />,
      color: 'border-blue-200 bg-blue-50/30',
      badgeColor: 'bg-blue-100 text-[#1E40AF]',
      image: 'https://i.postimg.cc/8ctsL6kR/3W8A9559.jpg'
    },
    {
      id: 'program-02',
      number: 'Program 02',
      title: 'Community Outreach',
      headline: 'Empowering Women, Girls & Vulnerable Families',
      desc: 'Meaningful change begins at the household level. Our community outreach walks alongside vulnerable individuals and families through social, emotional, economic, and spiritual support.',
      subSections: [
        {
          name: 'Women Empowerment',
          desc: 'Supporting women and young mothers with opportunities, skills, resources, and community networks that enable them to build independent and sustainable livelihoods.'
        },
        {
          name: 'Girl Child Empowerment',
          desc: 'Creating opportunities for girls to remain in school, develop confidence, access essential hygiene support, and build brighter futures.'
        },
        {
          name: 'Vulnerable Families',
          desc: 'Walking alongside vulnerable individuals and families through social, emotional, economic, and spiritual support.'
        }
      ],
      focus: [
        'Women micro-enterprise & savings circles',
        'Girl child retention & menstrual hygiene supplies',
        'Home visitations & family crisis counseling',
        'Emergency food rations for the elderly',
        'Parenting workshops & community cohesion'
      ],
      impactHighlight: '450+ families strengthened through livelihoods and compassionate mentorship.',
      ctaText: 'Support Community Outreach',
      volunteerArea: 'Community Outreach',
      icon: <Users2 className="w-8 h-8 text-[#F97316]" />,
      color: 'border-orange-200 bg-orange-50/30',
      badgeColor: 'bg-orange-100 text-[#F97316]',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'program-03',
      number: 'Program 03',
      title: 'Vocational Skills & Livelihoods',
      headline: 'Skills That Create Opportunities',
      desc: 'We equip young people, women, and families with practical skills that can help them generate income, become self-reliant, and contribute to their communities.',
      focus: [
        'Vocational training in tailoring, carpentry & crafts',
        'Entrepreneurship & small business incubation',
        'Skills development & technical certifications',
        'Business seminars & financial literacy workshops',
        'Income-generating initiatives & startup kits',
        'Youth empowerment & apprentice linkages'
      ],
      impactHighlight: '250+ youth and young mothers graduated with practical, market-ready trades.',
      ctaText: 'Support Skills Development',
      volunteerArea: 'Vocational Skills',
      icon: <Wrench className="w-8 h-8 text-amber-600" />,
      color: 'border-amber-200 bg-amber-50/30',
      badgeColor: 'bg-amber-100 text-amber-800',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'program-04',
      number: 'Program 04',
      title: 'Farming & Agriculture',
      headline: 'Growing Food. Growing Skills. Growing Futures.',
      desc: 'We use agriculture as a pathway to food security, practical education, entrepreneurship, and sustainable livelihoods. Our initiatives engage young people and communities in farming while promoting practical skills and responsible use of natural resources.',
      focus: [
        'School agriculture demonstration beds',
        'Sustainable farming & permaculture practices',
        'Food security for school kitchens & vulnerable homes',
        'Agricultural skills & organic soil enrichment',
        'Youth participation in modern farming',
        'Agri-entrepreneurship & produce marketing',
        'Volunteer farming projects & international exchanges'
      ],
      impactHighlight: 'Harvests directly nourish student lunches and support elderly community members.',
      ctaText: 'Join the Agriculture Program',
      volunteerArea: 'Farming & Agriculture',
      icon: <Sprout className="w-8 h-8 text-emerald-600" />,
      color: 'border-emerald-200 bg-emerald-50/30',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      image: 'https://i.postimg.cc/d3SGRX4d/edited-seedling-volunteers.png'
    },
    {
      id: 'program-05',
      number: 'Program 05',
      title: 'Community Health & Sanitation',
      headline: 'Healthier Communities. Stronger Futures.',
      desc: 'We work with communities to improve access to clean water, sanitation, hygiene education, and healthier living environments.',
      focus: [
        'Clean water access & rainwater harvesting systems',
        'Sanitation facilities & school latrine construction',
        'Hygiene awareness & handwashing training',
        'Community health screenings & maternal care links',
        'Improved living environments & waste management'
      ],
      impactHighlight: 'Significantly decreased school absenteeism caused by waterborne preventable illnesses.',
      ctaText: 'Support Health & Sanitation',
      volunteerArea: 'Child & Family Support',
      icon: <Droplets className="w-8 h-8 text-sky-600" />,
      color: 'border-sky-200 bg-sky-50/30',
      badgeColor: 'bg-sky-100 text-sky-800',
      image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'program-06',
      number: 'Program 06',
      title: 'Healing & Hope',
      headline: 'Restoring Dignity. Renewing Hope.',
      desc: 'We walk compassionately with people who have experienced vulnerability, trauma, abuse, neglect, or difficult circumstances by connecting them to emotional, social, economic, and spiritual support.',
      focus: [
        'Restoring dignity & self-worth for displaced families',
        'Trauma-informed psychosocial counseling & support',
        'Compassionate interventions for neglected children',
        'Safe healing spaces and peer empathy circles',
        'Spiritual guidance, hope & community reintegration'
      ],
      impactHighlight: 'A steadfast sanctuary where every person is valued, protected, and restored.',
      ctaText: 'Bring Hope',
      volunteerArea: 'Child & Family Support',
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      color: 'border-purple-200 bg-purple-50/30',
      badgeColor: 'bg-purple-100 text-purple-800',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const handleVolunteerInProgram = (progName: string) => {
    setVolunteerPreset({
      program: progName,
      role: `Volunteer in ${progName}`
    });
    navigateTo('volunteer');
  };

  const filteredPrograms = selectedProgramTab === 'all'
    ? programs
    : programs.filter(p => p.id === selectedProgramTab);

  return (
    <div className="bg-white">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#172554] via-[#1E40AF] to-[#1E3A8A] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>Hand of Mercy Uganda • 6 Core Program Pillars</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-brand tracking-tight max-w-3xl mx-auto leading-tight">
            Our Programs
          </h1>

          {/* Exact introduction text requested in specification */}
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            We believe meaningful change happens when people are supported holistically. Our programs respond to practical needs while creating opportunities for individuals and communities to thrive.
          </p>
        </div>
      </section>

      {/* Program Selector Tabs */}
      <section className="py-6 bg-slate-50 border-b border-slate-200 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setSelectedProgramTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedProgramTab === 'all'
                  ? 'bg-[#1E40AF] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All 6 Programs
            </button>
            {programs.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setSelectedProgramTab(prog.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedProgramTab === prog.id
                    ? 'bg-[#1E40AF] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {prog.number} {prog.title.split('&')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredPrograms.map((prog, index) => (
          <div
            key={prog.id}
            id={prog.id}
            className={`rounded-3xl border-2 ${prog.color} bg-white overflow-hidden shadow-md p-8 sm:p-10 lg:p-12 transition-all scroll-mt-28`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Image & Highlights Column */}
              <div className={`lg:col-span-5 space-y-4 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 bg-slate-900">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${prog.badgeColor}`}>
                      {prog.number}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                      Community Grounding
                    </p>
                    <p className="text-xs text-slate-200 mt-0.5">
                      {prog.impactHighlight}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Interested in this field?</span>
                  <button
                    onClick={() => handleVolunteerInProgram(prog.volunteerArea)}
                    className="text-[#1E40AF] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Volunteer in {prog.title.split('&')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Narrative & Focus Column */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-white shadow-xs border border-slate-100">
                      {prog.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                        {prog.number}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172554] font-serif-brand">
                        {prog.title}
                      </h2>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#1E40AF] pt-1">
                    {prog.headline}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {prog.desc}
                </p>

                {/* Sub-Sections (if present, like in Community Outreach) */}
                {prog.subSections && (
                  <div className="space-y-3 pt-2">
                    {prog.subSections.map((sub, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                        <h4 className="text-xs font-bold text-[#172554] uppercase tracking-wider">
                          {sub.name}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {sub.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Focus Points */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Core Focus & Activities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {prog.focus.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-slate-100">
                  <button
                    onClick={() => setIsSupportModalOpen(true)}
                    className="btn-gainlove px-6 py-3 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-xs sm:text-sm shadow-md shadow-orange-500/20 cursor-pointer"
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-3 h-3 text-amber-100" />
                    </span>
                    <span>{prog.ctaText}</span>
                  </button>

                  <button
                    onClick={() => navigateTo('partner')}
                    className="btn-gainlove px-5 py-3 border border-slate-300 hover:border-[#1E40AF] text-slate-700 hover:text-[#1E40AF] text-xs sm:text-sm bg-white cursor-pointer"
                  >
                    <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center shrink-0">
                      <Handshake className="w-3 h-3 text-slate-500" />
                    </span>
                    <span>Partner on this Pillar</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Holistic Philosophy Callout */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 bg-blue-100 text-[#1E40AF] rounded-2xl flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#172554]">
            Why Our Approach is Holistic
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A child cannot learn without proper nutrition from agriculture. A family cannot break out of poverty without vocational skills. A mother cannot thrive without community outreach, clean water, and emotional hope. All six programs work as one continuous chain of love.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('partner')}
              className="btn-gainlove px-6 py-3 bg-[#1E40AF] hover:bg-blue-800 text-white text-xs sm:text-sm shadow-md cursor-pointer"
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
              <span>Partner With Us Across All Pillars</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
