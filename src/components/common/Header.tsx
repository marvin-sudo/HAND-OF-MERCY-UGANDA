import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { PageRoute } from '../../types';
import { 
  Menu, 
  X, 
  ChevronDown,
  ArrowRight,
  Handshake,
  Users,
  GraduationCap,
  Users2,
  Wrench,
  Sprout,
  Heart,
  Droplets,
  Award,
  Sparkles
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPage, navigateTo, setIsSupportModalOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageRoute, hash?: string) => {
    navigateTo(page, hash);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setProgramsDropdownOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav-scrolled' : 'glass-nav'}`}>
      {/* Brand & Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Organisation Brand Identity */}
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none cursor-pointer"
            id="brand-logo-btn"
          >
            <img
              src="https://www.image2url.com/r2/default/images/1789634505103-5f94b13a-b67f-40e5-af4a-c6897750c95f.png"
              alt="Hand of Mercy Uganda"
              className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#172554] uppercase font-serif-brand">
                HAND OF MERCY
              </span>
              <span className="text-[11px] font-bold text-[#F97316] tracking-wider uppercase">
                PAY IT FORWARD
              </span>
            </div>
          </button>

          {/* Desktop Nav Links: Clean Recommended Structure */}
          {/* Home | About Us | Our Programs | Volunteer | Our Impact | Get Involved | Contact */}
          <nav className="hidden xl:flex items-center space-x-1">
            {/* Home */}
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-2 text-sm font-medium rounded-xl transition-all relative cursor-pointer border ${
                currentPage === 'home'
                  ? 'text-[#1E40AF] font-bold bg-white/70 shadow-xs border-white/80'
                  : 'text-slate-700 hover:text-[#1E40AF] hover:bg-white/50 border-transparent'
              }`}
            >
              <span>Home</span>
              {currentPage === 'home' && (
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#1E40AF] rounded-full"></span>
              )}
            </button>

            {/* About Us (Dropdown) */}
            <div
              className="relative group"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => handleNav('about')}
                className={`px-3 py-2 text-sm font-medium rounded-xl transition-all flex items-center gap-1 cursor-pointer border ${
                  currentPage === 'about'
                    ? 'text-[#1E40AF] font-bold bg-white/70 shadow-xs border-white/80'
                    : 'text-slate-700 hover:text-[#1E40AF] hover:bg-white/50 border-transparent'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
                {currentPage === 'about' && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#1E40AF] rounded-full"></span>
                )}
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 glass-dropdown rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                  <button
                    onClick={() => handleNav('about', 'who-we-are')}
                    className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-white/70 text-slate-800 font-semibold flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Users className="w-4 h-4 text-[#1E40AF]" />
                    <span>Who We Are & Purpose</span>
                  </button>
                  <button
                    onClick={() => handleNav('about', 'vision-mission')}
                    className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-white/70 text-slate-800 font-semibold flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Heart className="w-4 h-4 text-[#F97316]" />
                    <span>Vision, Mission & 8 Values</span>
                  </button>
                  <button
                    onClick={() => handleNav('about', 'founder')}
                    className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-white/70 text-slate-800 font-semibold flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>About the Founder (Mr. Lubega Richard)</span>
                  </button>
                  <div className="border-t border-white/50 my-1"></div>
                  <button
                    onClick={() => handleNav('about', 'partners')}
                    className="w-full text-left px-3 py-2 text-xs rounded-xl bg-amber-50/80 hover:bg-amber-100/90 text-amber-900 font-bold flex items-center gap-2 cursor-pointer transition-colors border border-amber-200/50"
                  >
                    <Handshake className="w-4 h-4 text-amber-600" />
                    <div className="flex flex-col">
                      <span>Our Partners</span>
                      <span className="text-[10px] text-amber-700 font-normal">Stronger Together</span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Our Programs (Dropdown with all 6 programs) */}
            <div
              className="relative group"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <button
                onClick={() => handleNav('programs')}
                className={`px-3 py-2 text-sm font-medium rounded-xl transition-all flex items-center gap-1 cursor-pointer border ${
                  currentPage === 'programs'
                    ? 'text-[#1E40AF] font-bold bg-white/70 shadow-xs border-white/80'
                    : 'text-slate-700 hover:text-[#1E40AF] hover:bg-white/50 border-transparent'
                }`}
              >
                <span>Our Programs</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
                {currentPage === 'programs' && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#1E40AF] rounded-full"></span>
                )}
              </button>

              {programsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 glass-dropdown rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                  <button
                    onClick={() => handleNav('programs')}
                    className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-white/70 text-slate-900 font-bold flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <span>Overview of All 6 Programs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                  <div className="border-t border-white/50 my-1"></div>
                  
                  {/* 6 Programs */}
                  <button
                    onClick={() => handleNav('programs', 'program-01')}
                    className="w-full text-left px-3 py-1.5 text-xs rounded-xl hover:bg-white/70 text-slate-750 font-medium flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-[#1E40AF]" />
                    <span>01 Education & Child Development</span>
                  </button>
                  <button
                    onClick={() => handleNav('programs', 'program-02')}
                    className="w-full text-left px-3 py-1.5 text-xs rounded-xl hover:bg-white/70 text-slate-750 font-medium flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Users2 className="w-4 h-4 text-[#F97316]" />
                    <span>02 Community Outreach</span>
                  </button>
                  <button
                    onClick={() => handleNav('programs', 'program-03')}
                    className="w-full text-left px-3 py-1.5 text-xs rounded-xl hover:bg-white/70 text-slate-750 font-medium flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Wrench className="w-4 h-4 text-amber-600" />
                    <span>03 Vocational Skills & Livelihoods</span>
                  </button>
                  <button
                    onClick={() => handleNav('programs', 'program-04')}
                    className="w-full text-left px-3 py-1.5 text-xs rounded-xl hover:bg-white/70 text-slate-750 font-medium flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Sprout className="w-4 h-4 text-emerald-600" />
                    <span>04 Farming & Agriculture</span>
                  </button>
                  <button
                    onClick={() => handleNav('programs', 'program-05')}
                    className="w-full text-left px-3 py-1.5 text-xs rounded-xl hover:bg-white/70 text-slate-750 font-medium flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Droplets className="w-4 h-4 text-sky-600" />
                    <span>05 Community Health & Sanitation</span>
                  </button>
                  <button
                    onClick={() => handleNav('programs', 'program-06')}
                    className="w-full text-left px-3 py-1.5 text-xs rounded-xl hover:bg-white/70 text-slate-750 font-medium flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span>06 Healing & Hope</span>
                  </button>
                </div>
              )}
            </div>

            {/* Volunteer */}
            <button
              onClick={() => handleNav('volunteer')}
              className={`px-3 py-2 text-sm font-medium rounded-xl transition-all relative cursor-pointer border ${
                currentPage === 'volunteer'
                  ? 'text-[#1E40AF] font-bold bg-white/70 shadow-xs border-white/80'
                  : 'text-slate-700 hover:text-[#1E40AF] hover:bg-white/50 border-transparent'
              }`}
            >
              <span>Volunteer</span>
              {currentPage === 'volunteer' && (
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#1E40AF] rounded-full"></span>
              )}
            </button>

            {/* Our Impact */}
            <button
              onClick={() => handleNav('impact')}
              className={`px-3 py-2 text-sm font-medium rounded-xl transition-all relative cursor-pointer border ${
                currentPage === 'impact'
                  ? 'text-[#1E40AF] font-bold bg-white/70 shadow-xs border-white/80'
                  : 'text-slate-700 hover:text-[#1E40AF] hover:bg-white/50 border-transparent'
              }`}
            >
              <span>Our Impact</span>
              {currentPage === 'impact' && (
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#1E40AF] rounded-full"></span>
              )}
            </button>

            {/* Get Involved */}
            <button
              onClick={() => handleNav('get-involved')}
              className={`px-3 py-2 text-sm font-medium rounded-xl transition-all relative cursor-pointer border ${
                currentPage === 'get-involved'
                  ? 'text-[#1E40AF] font-bold bg-white/70 shadow-xs border-white/80'
                  : 'text-slate-700 hover:text-[#1E40AF] hover:bg-white/50 border-transparent'
              }`}
            >
              <span>Get Involved</span>
              {currentPage === 'get-involved' && (
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#1E40AF] rounded-full"></span>
              )}
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNav('contact')}
              className={`px-3 py-2 text-sm font-medium rounded-xl transition-all relative cursor-pointer border ${
                currentPage === 'contact'
                  ? 'text-[#1E40AF] font-bold bg-white/70 shadow-xs border-white/80'
                  : 'text-slate-700 hover:text-[#1E40AF] hover:bg-white/50 border-transparent'
              }`}
            >
              <span>Contact</span>
              {currentPage === 'contact' && (
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#1E40AF] rounded-full"></span>
              )}
            </button>
          </nav>

          {/* Highlighted CTA Button: Partner With Us */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={() => handleNav('partner')}
              className="btn-gainlove px-5 py-2.5 text-xs text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] shadow-md shadow-orange-500/25 cursor-pointer"
              id="header-partner-highlight-btn"
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Handshake className="w-3 h-3 text-amber-100" />
              </span>
              <span>Partner With Us</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => handleNav('partner')}
              className="btn-gainlove px-3.5 py-1.5 text-[11px] text-white bg-[#F97316] shadow-xs"
            >
              Partner
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-white/60 transition-colors focus:outline-none cursor-pointer border border-transparent hover:border-white/60"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-dropdown border-b border-white/60 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col space-y-1">
            <button
              onClick={() => handleNav('home')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-white/60"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-white/60"
            >
              About Us
            </button>
            <div className="pl-4 py-1.5 space-y-1 bg-white/40 backdrop-blur-md rounded-xl border border-white/50">
              <button
                onClick={() => handleNav('programs')}
                className="w-full text-left px-3 py-1.5 text-xs font-bold text-[#1E40AF]"
              >
                Our Programs (All 6 Pillars)
              </button>
              <button
                onClick={() => handleNav('programs', 'program-01')}
                className="w-full text-left px-3 py-1 text-xs text-slate-700"
              >
                01 Education & Child Development
              </button>
              <button
                onClick={() => handleNav('programs', 'program-02')}
                className="w-full text-left px-3 py-1 text-xs text-slate-700"
              >
                02 Community Outreach
              </button>
              <button
                onClick={() => handleNav('programs', 'program-03')}
                className="w-full text-left px-3 py-1 text-xs text-slate-700"
              >
                03 Vocational Skills & Livelihoods
              </button>
              <button
                onClick={() => handleNav('programs', 'program-04')}
                className="w-full text-left px-3 py-1 text-xs text-slate-700"
              >
                04 Farming & Agriculture
              </button>
              <button
                onClick={() => handleNav('programs', 'program-05')}
                className="w-full text-left px-3 py-1 text-xs text-slate-700"
              >
                05 Community Health & Sanitation
              </button>
              <button
                onClick={() => handleNav('programs', 'program-06')}
                className="w-full text-left px-3 py-1 text-xs text-slate-700"
              >
                06 Healing & Hope
              </button>
            </div>
            <button
              onClick={() => handleNav('volunteer')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-white/60"
            >
              Volunteer
            </button>
            <button
              onClick={() => handleNav('impact')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-white/60"
            >
              Our Impact
            </button>
            <button
              onClick={() => handleNav('get-involved')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-white/60"
            >
              Get Involved
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-white/60"
            >
              Contact
            </button>
          </nav>

          <div className="pt-4 border-t border-white/50 flex flex-col gap-2">
            <button
              onClick={() => handleNav('partner')}
              className="btn-gainlove w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] shadow-md shadow-orange-500/20 flex items-center justify-center gap-2"
            >
              <Handshake className="w-4 h-4" />
              <span>Partner With Us</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
