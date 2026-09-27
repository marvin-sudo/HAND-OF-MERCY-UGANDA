import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { PageRoute } from '../../types';
import { 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Clock, 
  Handshake,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, subscribeNewsletter, setIsSafeguardingModalOpen } = useApp();
  const [emailInput, setEmailInput] = useState('');
  const clickCountRef = useRef<number>(0);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoClick = () => {
    clickCountRef.current += 1;
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      navigateTo('admin');
      return;
    }
    clickTimeoutRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribeNewsletter(emailInput)) {
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t-4 border-[#1E40AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Core Messaging (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={handleLogoClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleLogoClick();
                }
              }}
              className="flex items-center gap-3.5 cursor-pointer select-none group focus:outline-none w-fit"
              title="Hand of Mercy Uganda"
            >
              <img
                src="https://www.image2url.com/r2/default/images/1789634505103-5f94b13a-b67f-40e5-af4a-c6897750c95f.png"
                alt="Hand of Mercy Uganda"
                className="h-12 sm:h-14 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-all"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white uppercase font-serif-brand">
                  HAND OF MERCY UGANDA
                </span>
                <p className="text-xs text-amber-400 font-bold tracking-wider uppercase mt-0.5">
                  Building an Endless Chain of Love
                </p>
                <p className="text-[11px] text-[#F97316] font-extrabold tracking-widest uppercase">
                  PAY IT FORWARD.
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Hand of Mercy Uganda (HMU) is a registered indigenous non-profit organisation (REG 1940) committed to restoring dignity, bringing healing, and creating opportunities for vulnerable children, youth, women, families, and communities across Uganda.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Bulenga, Wakiso & Kampala Districts, Uganda</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+256 752 424494 / +256 776 4244494</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>hmercyu@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Office Hours: Monday – Saturday, 8:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-amber-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-amber-400 transition-colors">
                  About Us (Who We Are)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('programs')} className="hover:text-amber-400 transition-colors text-amber-300 font-medium">
                  Our Programs (6 Pillars)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('volunteer')} className="hover:text-amber-400 transition-colors">
                  Volunteer With Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('impact')} className="hover:text-amber-400 transition-colors">
                  Our Impact
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('get-involved')} className="hover:text-amber-400 transition-colors font-semibold text-orange-400">
                  Get Involved
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('partner')} className="hover:text-amber-400 transition-colors">
                  Partner With Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-amber-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The 6 Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Our 6 Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => navigateTo('programs', 'program-01')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  01 Education & Child Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('programs', 'program-02')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  02 Community Outreach
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('programs', 'program-03')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  03 Vocational Skills & Livelihoods
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('programs', 'program-04')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  04 Farming & Agriculture
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('programs', 'program-05')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  05 Community Health & Sanitation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('programs', 'program-06')} 
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  06 Healing & Hope
                </button>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => setIsSafeguardingModalOpen(true)}
                className="text-xs text-emerald-400 hover:underline flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Safeguarding Policy</span>
              </button>
            </div>
          </div>

          {/* Column 4: Newsletter & Direct Action */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Continuous Chain of Love
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              &quot;You don&apos;t have to do everything. You can simply do something. Every act of love can become part of a continuous chain.&quot;
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#1E40AF]"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold transition-colors shadow-md shadow-orange-500/20"
              >
                Join the Chain of Love
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Exact requested footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">HAND OF MERCY UGANDA</strong>. Building an Endless Chain of Love. <span className="text-[#F97316] font-bold">PAY IT FORWARD.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => setIsSafeguardingModalOpen(true)}
              className="hover:text-white transition-colors"
            >
              Safeguarding & Child Protection
            </button>
            <span>•</span>
            <button
              onClick={() => navigateTo('about', 'founder')}
              className="hover:text-white transition-colors"
            >
              About the Founder
            </button>
            <span>•</span>
            <button
              onClick={() => navigateTo('contact')}
              className="hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
