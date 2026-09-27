import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Tag, 
  Sparkles, 
  X, 
  BookOpen, 
  HeartHandshake,
  Share2
} from 'lucide-react';

interface NewsItem {
  id: string;
  category: string;
  title: string;
  date: string;
  location: string;
  readTime: string;
  summary: string;
  fullContent: string;
  image: string;
}

export const StoriesPage: React.FC = () => {
  const { navigateTo, showToast } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const categories = [
    'All',
    'Education',
    'Community Outreach',
    'Agriculture',
    'Women Empowerment',
    'Girl Child',
    'Volunteer Stories',
    'Community Health',
    'Events',
    'Announcements'
  ];

  const articles: NewsItem[] = [
    {
      id: 'german-volunteers-agri',
      category: 'Agriculture',
      title: 'German Volunteers Join Students in Agriculture Project',
      date: 'March 14, 2026',
      location: 'Bulenga Demonstration Beds',
      readTime: '4 min read',
      summary: 'Exchange volunteers from Germany worked alongside Ugandan secondary pupils to set up drought-resilient bio-intensive vegetable nursery beds, sharing permaculture knowledge across cultures.',
      fullContent: `This semester, Hand of Mercy Uganda welcomed an enthusiastic team of international exchange volunteers from Germany who partnered directly with Ebenezer High School students on a major agricultural enhancement initiative. 

Together, the volunteers and youth prepared three acres of demonstration beds, introducing bio-intensive organic composting, natural pest deterrent companion planting, and gravity-fed drip irrigation lines. 

"Working with our Ugandan peers in the soil broke down every cultural barrier immediately," remarked volunteer Lukas. "We learned indigenous seed preservation while sharing solar water-pump assembly ideas."

The produce from these nursery beds is now supplying the school kitchen with fresh leafy greens, eggplants, and sweet potatoes, cutting food expenses and providing practical vocational farming skills that students carry back into their family homes.`,
      image: 'https://i.postimg.cc/d3SGRX4d/edited-seedling-volunteers.png'
    },
    {
      id: 'supporting-girls-education',
      category: 'Girl Child',
      title: 'Supporting Girls Through Education',
      date: 'February 28, 2026',
      location: 'Wakiso District',
      readTime: '5 min read',
      summary: 'Providing menstrual hygiene kits, safe boarding spaces, and academic scholarships to ensure girls stay enrolled through O-Level examinations and beyond.',
      fullContent: `In many rural Ugandan communities, adolescent girls face severe systemic hurdles—including lack of menstrual hygiene supplies, long unsafe commutes, and early marriage pressures—which historically forced high female dropout rates around age 14.

Through Hand of Mercy Uganda’s Girl Child Support Initiative, we provide comprehensive educational sponsorships that pair tuition coverage with reusable sanitary packs, peer mentorship clubs, and safe dorm accommodations. 

"When a girl stays in school through her O-Levels, she transforms not only her own trajectory but her entire future household," explains Mr. Lubega Richard, founder of HMU. This year, 98% of HMU-sponsored female candidates passed their national examinations with first and second division distinctions.`,
      image: 'https://i.postimg.cc/8ctsL6kR/3W8A9559.jpg'
    },
    {
      id: 'vocational-skills-opportunities',
      category: 'Women Empowerment',
      title: 'Building Opportunities Through Vocational Skills',
      date: 'January 18, 2026',
      location: 'HMU Skills Hub, Bulenga',
      readTime: '4 min read',
      summary: 'Young mothers and out-of-school youth graduate from an intensive 6-month certified course in tailoring, carpentry, and financial bookkeeping.',
      fullContent: `Practical skills create economic sovereignty. Last weekend, twenty-four young mothers and teenagers celebrated their graduation from the HMU Vocational Skills Hub after completing comprehensive hands-on training in commercial garment manufacturing, woodcraft, and mobile money bookkeeping.

Each graduate was presented with a starter kit—including sewing equipment or woodworking hand-tools—funded by our generous international partners. 

Several graduates have already formed a collaborative cooperative to fulfill uniforms orders for local schools, proving that vocational empowerment directly replaces poverty with dignity and self-reliance.`,
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'community-outreach-love-in-action',
      category: 'Community Outreach',
      title: 'Community Outreach: Love in Action',
      date: 'December 12, 2025',
      location: 'Kampala & Bulenga Outskirts',
      readTime: '3 min read',
      summary: 'Delivering essential food rations, medical checkups, and spiritual encouragement to vulnerable elderly community members and families in distress.',
      fullContent: `Love is not an abstract concept; it is an active daily practice. Hand of Mercy Uganda’s community outreach teams conducted their quarterly grassroots visitation, reaching eighty elderly residents and vulnerable families.

Teams distributed staple foodstuffs (posho, beans, sugar, salt), warm blankets, and basic hygiene soap, while volunteer nurses provided free blood pressure and malaria diagnostic tests. 

More importantly, our teams spent unhurried time listening to stories, praying with families, and identifying children who need school sponsorship for the upcoming academic calendar. This ongoing presence ensures that no community member feels abandoned in times of distress.`,
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'volunteer-fellowship-2026',
      category: 'Volunteer Stories',
      title: 'International Volunteer Fellowship Open for Fall 2026',
      date: 'April 02, 2026',
      location: 'Global Recruitment',
      readTime: '3 min read',
      summary: 'Applications are now open for university students, educators, and professionals seeking meaningful short-term and semester-long placements in Uganda.',
      fullContent: `Hand of Mercy Uganda is now accepting applications for our 2026/2027 International Volunteer Fellowships. Whether you have experience in English teaching, sports coaching, agriculture, or public health, we offer structured, culturally respectful placements with full homestay immersion.

All volunteers receive comprehensive pre-departure briefings, dedicated safeguarding training, and airport reception. Join our continuous chain of love!`,
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'clean-water-sanitation-drive',
      category: 'Community Health',
      title: 'Sanitation Drive & Biosand Filtration Completed',
      date: 'November 05, 2025',
      location: 'Bulenga Outskirts',
      readTime: '3 min read',
      summary: 'Four new clean water stations installed at community schools, reducing waterborne typhoid and absenteeism by over 60%.',
      fullContent: `Access to clean water is a fundamental cornerstone of education. In partnership with engineering volunteers, HMU successfully installed four biosand filtration stations and rainwater collection gutters across participating community schools. 

Health coordinators held interactive handwashing workshops for over 500 pupils, significantly improving hygiene habits and protecting children from preventable waterborne illnesses.`,
      image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(a => a.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="bg-white">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#172554] via-[#1E40AF] to-[#1E3A8A] text-white py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Updates & Field Reports</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-brand">
            Stories & News
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto">
            Explore authentic dispatches from our community classrooms, agricultural plots, and international volunteer exchanges in Uganda.
          </p>
        </div>
      </section>

      {/* Category Pills Bar */}
      <section className="py-6 bg-slate-50 border-b border-slate-200 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1E40AF] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Showing {filteredArticles.length} stories in <strong>{selectedCategory}</strong></span>
            {selectedCategory !== 'All' && (
              <button 
                onClick={() => setSelectedCategory('All')} 
                className="text-[#1E40AF] hover:underline font-semibold"
              >
                Reset filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#1E40AF] text-white">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-bold text-base text-[#172554] group-hover:text-[#1E40AF] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveArticle(article)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#1E40AF] text-slate-700 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
            
            <div className="relative h-60 bg-slate-900 shrink-0">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-[#F97316] text-white uppercase tracking-wider inline-block mb-1">
                  {activeArticle.category}
                </span>
                <h3 className="text-xl font-bold leading-tight">
                  {activeArticle.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{activeArticle.location}</span>
                </div>
                <span>{activeArticle.readTime}</span>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-sans whitespace-pre-line">
                {activeArticle.fullContent}
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-slate-100">
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    navigateTo('partner');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#F97316] text-white font-bold text-xs hover:bg-[#EA580C] cursor-pointer"
                >
                  Partner With Us in This Work
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
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
