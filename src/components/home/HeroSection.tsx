import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, Handshake, Heart, Sparkles, CheckCircle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { navigateTo } = useApp();
  
  const heroSlides = [
    {
      image: 'https://i.postimg.cc/8ctsL6kR/3W8A9559.jpg',
      caption: 'Children learning and growing in a safe educational environment',
      focus: 'Education & Child Development'
    },
    {
      image: 'https://i.postimg.cc/d3SGRX4d/edited-seedling-volunteers.png',
      caption: 'Growing food, growing skills, growing futures in community agriculture',
      focus: 'Farming & Agriculture'
    },
    {
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1600&q=85',
      caption: 'Practical vocational skills, tailoring, carpentry, and youth livelihoods',
      focus: 'Vocational Skills & Livelihoods'
    },
    {
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=85',
      caption: 'Women empowerment, girl child support, and compassionate outreach',
      focus: 'Community Outreach & Healing'
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-[#0F172A] overflow-hidden">
      
      {/* Background Slides with Slow Subtle Motion */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? 'opacity-45 scale-105 transition-transform duration-[7000ms]' : 'opacity-0 scale-100'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/35"></div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl space-y-7">
          
          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-serif-brand">
            Creating a Continuous Chain of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200">
              Love
            </span>
          </h1>

          {/* Supporting Copy - Exact text from spec */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
            Hand of Mercy Uganda is an indigenous non-profit organisation committed to restoring dignity, bringing healing, and creating opportunities for vulnerable children, youth, women, families, and communities across Uganda.
          </p>

          {/* Core Values Tagline */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-amber-200/90 font-medium">
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-[#F97316]" /> Love in action
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Hope in every life
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Change in every community
            </span>
          </div>

          {/* Call-to-Actions: Primary CTA: Partner With Us | Secondary CTA: Get Involved */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => navigateTo('partner')}
              className="btn-gainlove px-7 py-3.5 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white shadow-lg shadow-orange-600/30 group cursor-pointer text-xs sm:text-sm"
              id="hero-partner-btn"
            >
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Handshake className="w-3.5 h-3.5 text-amber-100" />
              </span>
              <span>Partner With Us</span>
            </button>

            <button
              onClick={() => navigateTo('get-involved')}
              className="btn-gainlove px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm group cursor-pointer text-xs sm:text-sm"
              id="hero-get-involved-btn"
            >
              <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span>Get Involved</span>
            </button>
          </div>

          {/* Slide Indicator & Caption */}
          <div className="pt-6 flex items-center justify-between border-t border-slate-800/80 max-w-md">
            <div className="flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === activeSlide ? 'w-8 bg-[#F97316]' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>{heroSlides[activeSlide].caption}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
