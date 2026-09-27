import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Heart, 
  Sparkles, 
  Calendar, 
  Users, 
  Home, 
  Users2, 
  MapPin, 
  ArrowRight, 
  GraduationCap, 
  Sprout, 
  Handshake, 
  Droplets,
  CheckCircle2,
  X,
  BookOpen
} from 'lucide-react';

interface ImpactStory {
  id: string;
  category: string;
  title: string;
  location: string;
  summary: string;
  quote: string;
  fullStory: string;
  image: string;
  icon: React.ReactNode;
}

export const ImpactPage: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeStory, setActiveStory] = useState<ImpactStory | null>(null);

  const impactCounters = [
    { label: 'Years of Service', value: '18+', desc: 'Dedicated community service since 2008', icon: <Calendar className="w-5 h-5 text-[#1E40AF]" /> },
    { label: 'Year Founded', value: '2008', desc: 'Registered indigenous NGO (REG 1940)', icon: <Sparkles className="w-5 h-5 text-[#F97316]" /> },
    { label: 'Children Reached', value: '1,200+', desc: 'Through schooling, sponsorship & materials', icon: <GraduationCap className="w-5 h-5 text-indigo-600" /> },
    { label: 'Families Supported', value: '450+', desc: 'With livelihoods, food security & counseling', icon: <Home className="w-5 h-5 text-emerald-600" /> },
    { label: 'Volunteers Engaged', value: '150+', desc: 'International and Ugandan change-makers', icon: <Users2 className="w-5 h-5 text-amber-600" /> },
    { label: 'Communities Reached', value: '12+', desc: 'Across Central and Western Uganda districts', icon: <MapPin className="w-5 h-5 text-sky-600" /> }
  ];

  const stories: ImpactStory[] = [
    {
      id: 'story-education',
      category: 'Child Education Story',
      title: 'Breaking Barriers to High School for Sarah',
      location: 'Bulenga, Wakiso District',
      summary: 'When Sarah lost her primary guardian, continuing secondary education seemed impossible. Through HMU sponsorship and Ebenezer High School, she completed her O-Levels and is now pursuing sciences.',
      quote: '“HMU did not just pay my school fees; they gave me mentors who believed in my dream when no one else was there.”',
      fullStory: 'Sarah grew up in a vulnerable household where paying secondary tuition was out of reach. In 2019, HMU community outreach identified her passion for biology and chemistry. With support from our education sponsorship program, she received textbooks, uniform, and full tuition at Ebenezer High School. Today, Sarah is an exemplary peer mentor who volunteers during weekends to tutor younger primary students, keeping the continuous chain of love alive.',
      image: 'https://i.postimg.cc/8ctsL6kR/3W8A9559.jpg',
      icon: <GraduationCap className="w-4 h-4 text-[#1E40AF]" />
    },
    {
      id: 'story-women',
      category: 'Women Empowerment Story',
      title: 'From Survival to Self-Sufficiency: Nakato’s Tailoring Journey',
      location: 'Wakiso District',
      summary: 'A young single mother acquired garment sewing and micro-enterprise skills through HMU vocational workshops, now employing three other young women in her village.',
      quote: '“Before the vocational training, I worried about feeding my two babies daily. Today, I sew school uniforms and earn an independent living with dignity.”',
      fullStory: 'Nakato joined the Hand of Mercy women empowerment group with little hope. Over nine months of hands-on sewing, bookkeeping, and customer relations training, she mastered pattern making and garment finishing. With a starter micro-grant provided by HMU partners, Nakato purchased her first foot-pedal sewing machine. Her small workshop now supplies uniforms to three neighboring primary schools and trains other young mothers in practical trades.',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
      icon: <Users2 className="w-4 h-4 text-[#F97316]" />
    },
    {
      id: 'story-agriculture',
      category: 'Agriculture Story',
      title: 'Harvesting Dignity: The School Agriculture Revolution',
      location: 'Bulenga Community Plots',
      summary: 'Transforming idle land into thriving permaculture vegetable gardens, producing fresh greens and maize for student meals while teaching modern farming techniques.',
      quote: '“Agriculture is not punishment; it is wealth, food sovereignty, and science. The children take pride in eating vegetables they planted themselves.”',
      fullStory: 'Food security is essential for children to learn and concentrate. In partnership with community volunteers and local agronomists, HMU launched school agriculture demonstration beds. Students cultivate sweet potatoes, cabbages, spinach, and maize using organic compost and drip irrigation principles. Surplus produce is distributed to vulnerable elderly community members, instilling the core value of service in every student.',
      image: 'https://i.postimg.cc/d3SGRX4d/edited-seedling-volunteers.png',
      icon: <Sprout className="w-4 h-4 text-emerald-600" />
    },
    {
      id: 'story-volunteer',
      category: 'Volunteer Story',
      title: 'Bridging Cultures: Lukas & Hannah from Germany',
      location: 'Uganda ↔ Germany Partnership',
      summary: 'Two international volunteers spent three months teaching conversational English, supporting computer literacy, and learning indigenous sustainable farming practices.',
      quote: '“We came thinking we were here to help Uganda, but we left with our lives transformed by the boundless generosity and resilience of HMU.”',
      fullStory: 'Lukas and Hannah arrived from Frankfurt through an institutional exchange. During their three-month stay with host families, they assisted with after-school reading clubs, helped digitize student health records, and worked alongside local youth in tree-planting campaigns. They returned to Germany as active ambassadors for HMU, organizing fundraising drives and establishing sister-school cultural links between Ebenezer High School and German youth groups.',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
      icon: <Handshake className="w-4 h-4 text-amber-600" />
    },
    {
      id: 'story-outreach',
      category: 'Community Outreach Story',
      title: 'Restoring Dignity Through Clean Water & Compassion',
      location: 'Central Uganda Rural Outreach',
      summary: 'Providing protected water catchments, safe sanitation education, and emotional counseling for families affected by hardship and bereavement.',
      quote: '“Clean water near our homes means our daughters no longer walk four miles in the dark before class. It has changed our entire community’s safety.”',
      fullStory: 'Water-borne illnesses were keeping dozens of children out of school every term. HMU mobilized community volunteers, local masons, and international partners to construct rainwater harvesting tanks and biosand filtration points at school centers. Accompanied by health workers offering hygiene workshops and grief counseling for families in crisis, this outreach has revitalized community health and attendance rates.',
      image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=800&q=80',
      icon: <Droplets className="w-4 h-4 text-sky-600" />
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section: Exact requested headline */}
      <section className="bg-gradient-to-b from-[#172554] via-[#1E40AF] to-[#1E3A8A] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Honest Stewardship & Lasting Transformation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-brand tracking-tight max-w-3xl mx-auto leading-tight">
            Love in Action. Lives Transformed.
          </h1>

          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Every statistic represents a child learning in a safe classroom, a mother earning an independent living, and a community finding renewed hope.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#impact-stories"
              className="btn-gainlove px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm backdrop-blur-sm cursor-pointer"
            >
              <span className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                <BookOpen className="w-3 h-3 text-amber-200" />
              </span>
              <span>Read Our Stories</span>
            </a>

            <button
              onClick={() => navigateTo('partner')}
              className="btn-gainlove px-7 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm shadow-lg shadow-orange-600/30 cursor-pointer"
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Handshake className="w-3 h-3 text-amber-100" />
              </span>
              <span>Partner With Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* Verified Impact Counters */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
                HMU Verified Metrics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172554] font-serif-brand">
                Impact by the Numbers
              </h2>
            </div>
            
            {/* Note required by spec */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-[#1E40AF] text-xs font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#1E40AF] shrink-0" />
              <span>Verified HMU organisational milestones (2008 – Present)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactCounters.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="p-2 w-fit rounded-xl bg-slate-50 border border-slate-100 mb-3">
                  {stat.icon}
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#172554] block font-serif-brand">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-slate-800 block mt-0.5">
                    {stat.label}
                  </span>
                  <p className="text-[10px] text-slate-500 mt-1 leading-snug">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Impact Stories Section: 5 Detailed Stories */}
      <section className="py-20 bg-white" id="impact-stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              Real Journeys of Dignity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] font-serif-brand">
              Impact Stories: Love in Action
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Read how holistic support creates lasting change across education, women empowerment, farming, and cross-cultural volunteering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div
                key={story.id}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-[#172554] shadow-xs flex items-center gap-1.5">
                        {story.icon}
                        <span>{story.category}</span>
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 text-xs text-white/90 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-300" />
                      <span>{story.location}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-bold text-base text-[#172554] leading-snug group-hover:text-[#1E40AF] transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {story.summary}
                    </p>
                    <div className="p-3 rounded-xl bg-slate-50 border-l-2 border-[#F97316] text-[11px] text-slate-700 italic">
                      {story.quote}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveStory(story)}
                    className="w-full py-2.5 rounded-xl bg-blue-50 hover:bg-[#1E40AF] text-[#1E40AF] hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#172554] to-[#1E40AF] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold">
                Be Part of the Next Success Story
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
                Whether you sponsor a student, partner with community agriculture, or join us as a volunteer, your act of love ripples outward.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => navigateTo('partner')}
                className="btn-gainlove px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm shadow-md cursor-pointer"
              >
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Handshake className="w-3 h-3 text-amber-100" />
                </span>
                <span>Partner With Us</span>
              </button>
              <button
                onClick={() => navigateTo('volunteer')}
                className="btn-gainlove px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm backdrop-blur-sm cursor-pointer"
              >
                <span className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <Users className="w-3 h-3 text-white" />
                </span>
                <span>Volunteer With Us</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Story Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
            <div className="relative h-56 bg-slate-900 shrink-0">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <button
                onClick={() => setActiveStory(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-[#F97316] text-white uppercase tracking-wider inline-block mb-1">
                  {activeStory.category}
                </span>
                <h3 className="text-xl font-bold">
                  {activeStory.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-500 pb-2 border-b border-slate-100">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>{activeStory.location}</span>
                <span>•</span>
                <span className="text-[#1E40AF] font-semibold">Hand of Mercy Uganda Impact Registry</span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-slate-800 italic font-serif leading-relaxed">
                {activeStory.quote}
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                <p>{activeStory.fullStory}</p>
                <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                  Every child, mother, and student reached by Hand of Mercy Uganda is supported through our continuous chain of love, funded and stewarded in partnership with local Ugandan and international friends.
                </p>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setActiveStory(null);
                    navigateTo('partner');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#F97316] text-white font-bold text-xs hover:bg-[#EA580C] cursor-pointer"
                >
                  Support Similar Initiatives
                </button>
                <button
                  onClick={() => setActiveStory(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
