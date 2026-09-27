import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Handshake, 
  GraduationCap, 
  Users2, 
  Sparkles, 
  Building2, 
  Sprout, 
  Droplets, 
  CheckCircle2, 
  Copy, 
  CreditCard, 
  Send,
  Heart,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const PartnerPage: React.FC = () => {
  const { addEnquiry, showToast } = useApp();
  const [copied, setCopied] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string>('Sponsor a Child');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    organisationOrIndividual: '',
    email: '',
    phone: '',
    partnershipArea: 'Sponsor a Child',
    supportType: 'Financial Contribution',
    message: ''
  });

  const partnershipAreas = [
    {
      id: 'Sponsor a Child',
      title: 'Sponsor a Child',
      desc: 'Help a vulnerable child access education and essential learning resources.',
      icon: <GraduationCap className="w-6 h-6 text-[#1E40AF]" />,
      badge: 'Education & Future',
      color: 'border-blue-200 bg-blue-50/40'
    },
    {
      id: 'Support a Community',
      title: 'Support a Community',
      desc: 'Contribute toward community outreach and development initiatives.',
      icon: <Users2 className="w-6 h-6 text-[#F97316]" />,
      badge: 'Grassroots Resilience',
      color: 'border-orange-200 bg-orange-50/40'
    },
    {
      id: 'Empower a Woman',
      title: 'Empower a Woman',
      desc: 'Support skills, entrepreneurship and livelihood opportunities.',
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      badge: 'Livelihoods & Dignity',
      color: 'border-amber-200 bg-amber-50/40'
    },
    {
      id: 'Build a School',
      title: 'Build a School',
      desc: 'Support classrooms, educational infrastructure and learning environments.',
      icon: <Building2 className="w-6 h-6 text-indigo-600" />,
      badge: 'Safe Classrooms',
      color: 'border-indigo-200 bg-indigo-50/40'
    },
    {
      id: 'Support Agriculture',
      title: 'Support Agriculture',
      desc: 'Help communities develop sustainable farming and food-security initiatives.',
      icon: <Sprout className="w-6 h-6 text-emerald-600" />,
      badge: 'Food Security',
      color: 'border-emerald-200 bg-emerald-50/40'
    },
    {
      id: 'Clean Water & Sanitation',
      title: 'Clean Water & Sanitation',
      desc: 'Support initiatives that improve access to clean water and sanitation.',
      icon: <Droplets className="w-6 h-6 text-sky-600" />,
      badge: 'Health & Hygiene',
      color: 'border-sky-200 bg-sky-50/40'
    }
  ];

  const copyBankDetails = () => {
    const details = `Hand of Mercy Uganda (REG 1940)
Bank: Stanbic Bank Uganda
Branch: Kampala Main Branch / Bulenga
Account Name: Hand of Mercy Uganda Community Outreach
Account Number (UGX): 9030012345678
Account Number (USD / EUR): 9030012345699
SWIFT Code: SBICUGKX
Purpose / Reference: Partnership / Community Support`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(details);
      setCopied(true);
      showToast('Bank Wire Details Copied', 'Stanbic Bank Uganda wire details copied to your clipboard.');
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleAreaClick = (areaTitle: string) => {
    setSelectedArea(areaTitle);
    setFormData(prev => ({ ...prev, partnershipArea: areaTitle }));
    const formElement = document.getElementById('partner-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: `Partnership Proposal: ${formData.partnershipArea} (${formData.organisationOrIndividual || 'Individual'})`,
      message: `${formData.message}\n\nSupport Type: ${formData.supportType}\nPartnership Area: ${formData.partnershipArea}`,
      preferredContactMethod: 'Email'
    });
    setFormSubmitted(true);
    showToast('Partnership Inquiry Received', 'Thank you for reaching out to extend the hand of mercy. We will be in touch promptly.');
  };

  return (
    <div className="bg-white">
      
      {/* Hero Section: Exact requested headline and copy */}
      <section className="bg-gradient-to-b from-[#172554] via-[#1E40AF] to-[#1E3A8A] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Handshake className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Solidarity • True Partnership • Sustainable Impact</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-brand tracking-tight max-w-3xl mx-auto leading-tight">
            Together, We Can Extend the Hand of Mercy
          </h1>

          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Your partnership can help educate a child, empower a mother, support a young person, improve a community, and create opportunities for people to build better futures.
          </p>

          <div className="pt-3 flex justify-center">
            <a
              href="#partnership-areas"
              className="px-8 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-base shadow-lg shadow-orange-600/30 flex items-center gap-2 transition-transform hover:scale-105"
            >
              <span>Explore Partnership Areas</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 6 Partnership Areas Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" id="partnership-areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
              Meaningful Impact Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172554] font-serif-brand">
              Partnership Areas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select an area where you or your organisation wish to partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipAreas.map((area) => {
              const isSelected = selectedArea === area.id;
              return (
                <div
                  key={area.id}
                  onClick={() => handleAreaClick(area.title)}
                  className={`p-7 rounded-3xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#1E40AF] bg-white shadow-xl scale-[1.02] ring-4 ring-blue-500/10'
                      : `${area.color} bg-white hover:shadow-lg`
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-xl bg-white shadow-xs border border-slate-100">
                        {area.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {area.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#172554] tracking-tight">
                      {area.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1E40AF]">
                      {isSelected ? 'Selected Focus' : 'Choose to Partner'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#1E40AF]" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Become a Partner Form & Bank Wire Information */}
      <section className="py-20 bg-white" id="partner-form-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
                  Collaboration & Support
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172554] font-serif-brand mt-1">
                  Become a Partner
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Let us know how you, your school, business, church, or organisation would like to walk alongside Hand of Mercy Uganda.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-base">
                    Partnership Request Submitted
                  </h4>
                  <p className="text-xs text-emerald-800">
                    Thank you, <strong>{formData.name}</strong>. Our leadership will review your proposal in <strong>{formData.partnershipArea}</strong> and respond directly to discuss next steps.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. John Doe / Maria Mueller"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Organisation / School (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.organisationOrIndividual}
                        onChange={(e) => setFormData(prev => ({ ...prev, organisationOrIndividual: e.target.value }))}
                        placeholder="e.g. St. Peter High School / Foundation"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="partner@example.org"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+256 752 ... or +49 ..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Partnership Area *
                      </label>
                      <select
                        value={formData.partnershipArea}
                        onChange={(e) => {
                          setFormData(prev => ({ ...prev, partnershipArea: e.target.value }));
                          setSelectedArea(e.target.value);
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF] bg-white"
                      >
                        {partnershipAreas.map((a) => (
                          <option key={a.id} value={a.title}>{a.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Type of Partnership
                      </label>
                      <select
                        value={formData.supportType}
                        onChange={(e) => setFormData(prev => ({ ...prev, supportType: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF] bg-white"
                      >
                        <option value="Sponsorship / Financial Support">Sponsorship / Financial Support</option>
                        <option value="Material & Scholastic Donations">Material & Scholastic Donations</option>
                        <option value="Institutional / Academic Exchange">Institutional / Academic Exchange</option>
                        <option value="Volunteer Group / Fellowship">Volunteer Group / Fellowship</option>
                        <option value="Infrastructure Project">Infrastructure Project</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Message or Vision for Partnership
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Share any thoughts, ideas, or questions you have about partnering with us..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-sm shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-200" />
                    <span>Become a Partner</span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct Bank Wire & Transparency Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Bank Account Wire Card */}
              <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1E40AF] uppercase tracking-wider">
                    <CreditCard className="w-4 h-4 text-[#1E40AF]" />
                    <span>Official Bank Wire Details</span>
                  </div>
                  <button
                    onClick={copyBankDetails}
                    className="px-3 py-1 text-[11px] font-bold bg-white text-[#1E40AF] border border-blue-300 rounded-lg hover:bg-blue-100 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Info'}</span>
                  </button>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-blue-100 text-xs space-y-2 font-mono text-slate-800">
                  <div className="flex justify-between border-b border-slate-100 pb-1 font-sans font-bold text-slate-900">
                    <span>Beneficiary:</span>
                    <span>Hand of Mercy Uganda</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span className="font-sans text-slate-500">Bank:</span>
                    <span className="font-bold">Stanbic Bank Uganda</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span className="font-sans text-slate-500">Branch:</span>
                    <span>Kampala Main Branch</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span className="font-sans text-slate-500">Registration:</span>
                    <span>REG 1940</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span className="font-sans text-slate-500">UGX Account:</span>
                    <span className="font-bold">9030012345678</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span className="font-sans text-slate-500">USD/EUR Account:</span>
                    <span className="font-bold">9030012345699</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans text-slate-500">SWIFT Code:</span>
                    <span className="font-bold text-[#1E40AF]">SBICUGKX</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Direct wires ensure 100% of contributions reach our community projects without third-party commission deductions.
                </p>
              </div>

              {/* Safeguarding Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Stewardship & Governance</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hand of Mercy Uganda provides periodic project narrative reports, photo logs, and transparent community auditing for every institutional or individual partner.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
