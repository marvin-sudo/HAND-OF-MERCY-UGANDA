import React from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar, ArrowRight, BookOpen, MapPin } from 'lucide-react';

export const HomeStoriesPreview: React.FC = () => {
  const { navigateTo } = useApp();

  const featured = [
    {
      title: 'German Volunteers Join Students in Agriculture Project',
      category: 'Agriculture',
      date: 'March 14, 2026',
      summary: 'Exchange volunteers worked alongside pupils to set up drought-resilient bio-intensive vegetable nursery beds in Bulenga.',
      image: 'https://i.postimg.cc/d3SGRX4d/edited-seedling-volunteers.png'
    },
    {
      title: 'Supporting Girls Through Education',
      category: 'Girl Child',
      date: 'February 28, 2026',
      summary: 'Providing menstrual hygiene kits and scholarships so adolescent girls stay enrolled and thrive in national examinations.',
      image: 'https://i.postimg.cc/8ctsL6kR/3W8A9559.jpg'
    },
    {
      title: 'Building Opportunities Through Vocational Skills',
      category: 'Women Empowerment',
      date: 'January 18, 2026',
      summary: 'Young mothers celebrate graduating in certified commercial garment tailoring and micro-enterprise management.',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Community Outreach: Love in Action',
      category: 'Community Outreach',
      date: 'December 12, 2025',
      summary: 'Delivering essential food rations, medical checkups, and emotional counseling to vulnerable elderly community members.',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="home-stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Stories & News</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] font-serif-brand">
              Dispatches From the Field
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Real-world accounts of learning, farming, empowerment, and cross-cultural friendship in Uganda.
            </p>
          </div>

          <button
            onClick={() => navigateTo('stories')}
            className="btn-gainlove px-5 py-2.5 border border-slate-300 hover:border-[#1E40AF] text-slate-700 hover:text-[#1E40AF] text-xs sm:text-sm bg-white cursor-pointer w-fit"
          >
            <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center shrink-0">
              <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-[#1E40AF]" />
            </span>
            <span>View All Stories & News</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigateTo('stories')}
              className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#1E40AF] text-white">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-bold text-sm text-[#172554] group-hover:text-[#1E40AF] transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="text-xs font-bold text-[#1E40AF] flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
