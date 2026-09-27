import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Heart, 
  GraduationCap, 
  Sprout, 
  Users2, 
  Wrench, 
  CheckCircle2, 
  ShieldCheck, 
  Send,
  Calendar,
  Globe,
  Clock,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { FAQ_ITEMS } from '../../data/initialData';

export const VolunteerPage: React.FC = () => {
  const { addApplication, setIsSafeguardingModalOpen, showToast, volunteerPreset } = useApp();

  const [selectedArea, setSelectedArea] = useState<string>('Education');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    email: '',
    phone: '',
    areaOfInterest: 'Education',
    skillsProfession: '',
    preferredDuration: '1 - 3 Months',
    whyVolunteer: '',
    availability: '',
    consentAgreed: false
  });

  const volunteerAreas = [
    {
      id: 'Education',
      name: 'Education',
      icon: <GraduationCap className="w-6 h-6 text-[#1E40AF]" />,
      desc: 'Support teaching, mentoring, educational activities and children’s programs.',
      badge: 'Teaching & Child Development',
      color: 'border-blue-200 hover:border-blue-500 bg-blue-50/40'
    },
    {
      id: 'Farming & Agriculture',
      name: 'Farming & Agriculture',
      icon: <Sprout className="w-6 h-6 text-emerald-600" />,
      desc: 'Take part in school and community agriculture projects.',
      badge: 'Food Security & Permaculture',
      color: 'border-emerald-200 hover:border-emerald-500 bg-emerald-50/40'
    },
    {
      id: 'Community Outreach',
      name: 'Community Outreach',
      icon: <Users2 className="w-6 h-6 text-[#F97316]" />,
      desc: 'Participate in women empowerment, girl-child initiatives and community activities.',
      badge: 'Women & Girls Focus',
      color: 'border-orange-200 hover:border-orange-500 bg-orange-50/40'
    },
    {
      id: 'Vocational Skills',
      name: 'Vocational Skills',
      icon: <Wrench className="w-6 h-6 text-amber-600" />,
      desc: 'Share practical skills, entrepreneurship knowledge and professional experience.',
      badge: 'Trades & Digital Training',
      color: 'border-amber-200 hover:border-amber-500 bg-amber-50/40'
    },
    {
      id: 'Child & Family Support',
      name: 'Child & Family Support',
      icon: <Heart className="w-6 h-6 text-purple-600" />,
      desc: 'Support activities designed to restore dignity and create opportunities.',
      badge: 'Dignity & Holistic Care',
      color: 'border-purple-200 hover:border-purple-500 bg-purple-50/40'
    }
  ];

  useEffect(() => {
    document.title = 'Volunteer With Us | Hand of Mercy Uganda';
    if (volunteerPreset) {
      setSelectedArea(volunteerPreset.program);
      setFormData(prev => ({
        ...prev,
        areaOfInterest: volunteerPreset.program
      }));
    }
  }, [volunteerPreset]);

  const handleSelectArea = (areaId: string) => {
    setSelectedArea(areaId);
    setFormData(prev => ({ ...prev, areaOfInterest: areaId }));
    const formElement = document.getElementById('volunteer-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentAgreed) {
      alert('Please confirm that you agree with our community safeguarding standards.');
      return;
    }

    addApplication({
      fullName: formData.fullName,
      country: formData.country,
      email: formData.email,
      phone: formData.phone,
      preferredProgramme: formData.areaOfInterest,
      skills: formData.skillsProfession,
      educationProfession: formData.skillsProfession,
      motivationWhy: formData.whyVolunteer,
      dateOfBirth: '',
      nationality: formData.country,
      address: '',
      preferredStartDate: formData.availability,
      preferredEndDate: formData.preferredDuration,
      previousExperience: '',
      interests: formData.areaOfInterest,
      motivationLearn: '',
      motivationShare: '',
      emergencyContact: '',
      dietaryRequirements: '',
      accessibilityRequirements: '',
      otherInfo: `Preferred Duration: ${formData.preferredDuration}`,
      consentAgreed: formData.consentAgreed
    });

    setSubmittedSuccess(true);
    showToast('Application Received', 'Thank you for stepping up to volunteer! Our coordinator will contact you shortly.');
  };

  return (
    <div className="bg-white">
      
      {/* Hero Section: Exact requested headline & supporting text */}
      <section className="bg-gradient-to-b from-[#172554] via-[#1E40AF] to-[#1E3A8A] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Serve in Uganda • International & Local Volunteers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-brand tracking-tight max-w-4xl mx-auto leading-tight">
            Give Your Time. Share Your Skills. Create Change.
          </h1>

          <p className="text-blue-100 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Your time, skills, and compassion can become part of a continuous chain of love.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href="#choose-area"
              className="px-8 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-base shadow-lg shadow-orange-600/30 flex items-center gap-2 transition-transform hover:scale-105"
            >
              <span>Choose Your Volunteer Area</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Section: Choose Your Volunteer Area (5 Interactive Cards) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="choose-area">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              Choose Your Volunteer Area
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] font-serif-brand">
              Where Would You Like to Serve?
            </h2>
            <p className="text-sm text-slate-600">
              Select an area below to align your passions with community needs. Your choice will automatically prefill your application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {volunteerAreas.map((area) => {
              const isSelected = selectedArea === area.id;
              return (
                <div
                  key={area.id}
                  onClick={() => handleSelectArea(area.id)}
                  className={`p-6 rounded-3xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected 
                      ? 'border-[#1E40AF] bg-white shadow-xl scale-[1.03] ring-4 ring-blue-500/10' 
                      : `${area.color} bg-white hover:shadow-lg`
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs border border-slate-100 flex items-center justify-center">
                        {area.icon}
                      </div>
                      {isSelected && (
                        <span className="p-1 rounded-full bg-blue-100 text-[#1E40AF]">
                          <CheckCircle2 className="w-5 h-5" />
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-[#172554] tracking-tight">
                      {area.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      type="button"
                      className={`w-full py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#1E40AF] text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {isSelected ? 'Selected Area' : 'Select Area'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-20 bg-white" id="volunteer-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl space-y-8">
            
            <div className="text-center space-y-2 border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
                Application Form
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172554] font-serif-brand">
                Become a Volunteer
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                Fill in the details below. We welcome international volunteers from Germany, Europe, North America, and across the globe, as well as local Ugandan advocates.
              </p>
            </div>

            {submittedSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">
                  Application Successfully Submitted!
                </h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our volunteer liaison team will review your background in <strong>{formData.areaOfInterest}</strong> and get back to you at <strong>{formData.email}</strong> with next steps and pre-departure briefings.
                </p>
                <button
                  onClick={() => setSubmittedSuccess(false)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Jenkins or David Kato"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="e.g. Germany, Uganda, United Kingdom, USA"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF]"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="sarah@example.org"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+49 170 1234567 or +256 752 424494"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF]"
                    />
                  </div>
                </div>

                {/* Area of Interest & Preferred Duration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Area of Interest *
                    </label>
                    <select
                      name="areaOfInterest"
                      value={formData.areaOfInterest}
                      onChange={(e) => {
                        handleInputChange(e);
                        setSelectedArea(e.target.value);
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF] bg-white"
                    >
                      <option value="Education">Education & Child Development</option>
                      <option value="Farming & Agriculture">Farming & Agriculture</option>
                      <option value="Community Outreach">Community Outreach (Women & Girls)</option>
                      <option value="Vocational Skills">Vocational Skills & Trades</option>
                      <option value="Child & Family Support">Child & Family Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Duration *
                    </label>
                    <select
                      name="preferredDuration"
                      value={formData.preferredDuration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF] bg-white"
                    >
                      <option value="2 - 4 Weeks (Short Term)">2 - 4 Weeks (Short Term)</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="6 - 12 Months (Gap Year / Fellowship)">6 - 12 Months (Gap Year / Fellowship)</option>
                      <option value="Flexible / Custom Dates">Flexible / Custom Dates</option>
                    </select>
                  </div>
                </div>

                {/* Skills/Profession & Availability */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Skills / Profession *
                    </label>
                    <input
                      type="text"
                      name="skillsProfession"
                      required
                      value={formData.skillsProfession}
                      onChange={handleInputChange}
                      placeholder="e.g. Teacher, Agronomist, Carpenter, Student, Nurse"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Availability / Desired Start Date *
                    </label>
                    <input
                      type="text"
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleInputChange}
                      placeholder="e.g. October 2026, Summer 2026, or Immediately"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF]"
                    />
                  </div>
                </div>

                {/* Why Volunteer */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Why You Want to Volunteer *
                  </label>
                  <textarea
                    rows={4}
                    name="whyVolunteer"
                    required
                    value={formData.whyVolunteer}
                    onChange={handleInputChange}
                    placeholder="Tell us what motivates you to serve with Hand of Mercy Uganda, what you hope to learn, and how you hope to contribute to our continuous chain of love..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF]"
                  />
                </div>

                {/* Safeguarding & Consent */}
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consentAgreed"
                    name="consentAgreed"
                    checked={formData.consentAgreed}
                    onChange={(e) => setFormData(prev => ({ ...prev, consentAgreed: e.target.checked }))}
                    className="mt-1 h-4 w-4 rounded-sm border-slate-300 text-[#1E40AF] focus:ring-[#1E40AF]"
                  />
                  <label htmlFor="consentAgreed" className="text-xs text-slate-700 leading-relaxed cursor-pointer">
                    I agree to adhere to Hand of Mercy Uganda&apos;s code of conduct and community{' '}
                    <button
                      type="button"
                      onClick={() => setIsSafeguardingModalOpen(true)}
                      className="text-[#1E40AF] font-bold underline hover:text-blue-800"
                    >
                      Safeguarding & Child Protection Policy
                    </button>.
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-extrabold text-base shadow-lg shadow-orange-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5 text-amber-200" />
                    <span>Become a Volunteer</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* Volunteer Journey: 5-step flow */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E40AF]">
              What to Expect
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172554]">
              Your Volunteer Journey
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear, transparent guidance from your first inquiry to your time serving in Uganda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Explore Programs', desc: 'Discover how education, farming, outreach, and vocational hubs serve local communities.' },
              { step: '02', title: 'Choose Program', desc: 'Identify where your personal passions, skills, or studies best align.' },
              { step: '03', title: 'Choose Role', desc: 'Select specific tasks from classroom tutoring to nursery farming or women skills workshops.' },
              { step: '04', title: 'Preparation & Briefing', desc: 'Receive visa guidance, cultural orientation, packing lists, and local liaison contact.' },
              { step: '05', title: 'Serve & Chain of Love', desc: 'Work alongside Ugandan educators and leaders, creating lasting mutual impact.' }
            ].map((st, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <span className="text-xs font-black text-[#F97316] tracking-wider block">
                  STEP {st.step}
                </span>
                <h4 className="font-bold text-sm text-[#172554]">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-[#172554]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500">
              Practical details regarding travel, accommodation, visas, and safety in Uganda.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.slice(0, 5).map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-sm text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#1E40AF]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
