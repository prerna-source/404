import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Prerna,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title={contactInfo.title}
          subtitle={contactInfo.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            <Card padding="p-6 sm:p-8" className="border-brand-500/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-400" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                {/* Official Email */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs uppercase font-semibold text-slate-400 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-brand-400" />
                      University Email
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs text-brand-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-mono text-sm sm:text-base text-white hover:text-brand-300 transition-colors break-all block"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                {/* Location Details */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Currently Based In</p>
                      <p className="font-semibold text-slate-100">{contactInfo.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-2 border-t border-slate-700/50">
                    <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Hometown</p>
                      <p className="font-semibold text-slate-100">{contactInfo.hometown}</p>
                    </div>
                  </div>
                </div>

                {/* Primary Direct Email Button */}
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    href={`mailto:${contactInfo.email}`}
                    className="w-full"
                    icon={Mail}
                    iconPosition="left"
                  >
                    Email Me Directly
                  </Button>
                </div>
              </div>
            </Card>

            {/* Social Channels (Coming Soon) */}
            <Card padding="p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Professional Profiles</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {contactInfo.socials.map((social) => (
                  <div
                    key={social.name}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold text-slate-300">
                      {social.name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 font-medium">
                      {social.status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 mt-3 italic">
                Profiles will be published here once created for professional networking.
              </p>
            </Card>
          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-7">
            <Card padding="p-6 sm:p-8" className="border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the fields below to open your preferred mail app with a pre-formatted message addressed to Prerna.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="sender-name">
                      Your Name
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Sharma / Priya"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="sender-email">
                      Your Email
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="message-subject">
                    Subject
                  </label>
                  <input
                    id="message-subject"
                    type="text"
                    required
                    placeholder="Project Inquiry / Student Collaboration / Hello"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="message-body">
                    Message
                  </label>
                  <textarea
                    id="message-body"
                    rows="4"
                    required
                    placeholder="Write your note, idea, or questions here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    type="submit"
                    className="w-full sm:w-auto"
                    icon={Send}
                    iconPosition="right"
                  >
                    Compose Email
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
