import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Clock, 
  HeartHandshake,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { addEnquiry, navigateTo, showToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContactMethod: 'Email' as 'Email' | 'Phone' | 'WhatsApp'
  });

  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry(formData);
    setSentSuccess(true);
    showToast('Message Sent', 'Thank you for contacting Hand of Mercy Uganda. We will respond promptly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      preferredContactMethod: 'Email'
    });
  };

  return (
    <div className="bg-white">
      
      {/* Header: Exact requested Headline and Subtitle */}
      <section className="bg-gradient-to-b from-[#172554] via-[#1E40AF] to-[#1E3A8A] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Connect with Hand of Mercy Uganda</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif-brand tracking-tight max-w-3xl mx-auto leading-tight">
            Let’s Create Change Together
          </h1>

          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you want to volunteer, partner with us, support a program, or simply learn more about our work, we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Official Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                Uganda Headquarters
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-brand text-[#172554] mt-1">
                Hand of Mercy Uganda
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Registered Indigenous Non-Profit Organisation (REG 1940)
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* Phone Numbers */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#172554] uppercase tracking-wider text-xs">
                    Telephone & WhatsApp
                  </h4>
                  <p className="text-slate-800 font-mono text-sm font-semibold">
                    <a href="tel:+256752424494" className="hover:text-[#1E40AF] transition-colors block">
                      +256 752 424494
                    </a>
                    <a href="tel:+2567764244494" className="hover:text-[#1E40AF] transition-colors block mt-0.5">
                      +256 776 4244494
                    </a>
                  </p>
                  <p className="text-[11px] text-slate-500 pt-0.5">
                    Available for direct calls and WhatsApp inquiries.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-100 text-[#1E40AF] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#172554] uppercase tracking-wider text-xs">
                    Official Email
                  </h4>
                  <p className="text-slate-800 font-mono text-sm font-semibold">
                    <a href="mailto:hmercyu@gmail.com" className="hover:text-[#1E40AF] underline">
                      hmercyu@gmail.com
                    </a>
                  </p>
                  <p className="text-[11px] text-slate-500">
                    For partnerships, volunteer dossiers, sponsorship, and media inquiries.
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-100 text-purple-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#172554] uppercase tracking-wider text-xs">
                    Office Hours
                  </h4>
                  <p className="text-slate-800 font-semibold text-xs">
                    Monday – Saturday
                  </p>
                  <p className="text-slate-600 text-xs">
                    8:00 AM – 5:00 PM (East Africa Time)
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Closed on Sundays for community worship and family fellowship.
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#172554] uppercase tracking-wider text-xs">
                    Physical Address
                  </h4>
                  <p className="text-slate-700 text-xs leading-relaxed">
                    Ebenezer High School Complex, Bulenga<br />
                    Wakiso District, Central Region, Uganda
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => navigateTo('partner')}
                className="px-5 py-2.5 rounded-xl bg-[#F97316] text-white font-bold text-xs hover:bg-[#EA580C] shadow-sm cursor-pointer"
              >
                Partner With Us
              </button>
              <button
                onClick={() => navigateTo('volunteer')}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer"
              >
                Apply to Volunteer
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                Direct Message
              </span>
              <h3 className="text-2xl font-bold text-[#172554] mt-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the form below and our team will get back to you within 24–48 hours.
              </p>
            </div>

            {sentSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-lg">
                  Message Successfully Sent!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A copy of your inquiry has been queued for our team in Uganda. We will respond to you via your preferred contact channel.
                </p>
                <button
                  onClick={() => setSentSuccess(false)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Send Another Message
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
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+256 752 ... or +49 ..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Channel
                    </label>
                    <select
                      value={formData.preferredContactMethod}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredContactMethod: e.target.value as any }))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF] bg-white"
                    >
                      <option value="Email">Email</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone">Phone Call</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Subject / Reason for Contact *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="e.g. Volunteer Inquiry, School Partnership, Sponsorship"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Write your inquiry or thoughts here..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] hover:from-blue-800 hover:to-blue-900 text-white font-bold text-sm shadow-md shadow-blue-900/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
