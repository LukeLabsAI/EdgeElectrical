
import React from 'react';
import { Shield, Users, Clock, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Header */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Alexandra Headland's premier electrical and air conditioning specialists.
          </p>
        </div>
      </section>

      {/* Story - NO PHOTO */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Expertise You Can Trust</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Edge Electrical & Air was established with a focus on core values: reliability, safety, and uncompromising quality. As a local business deeply rooted in Alexandra Headland, we understand the specific electrical and climate control needs of our neighbours on the Sunshine Coast.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our team consists of fully licensed professionals who take immense pride in their craftsmanship. From intricate wiring repairs to high-performance air conditioning installations, we treat every project with the same level of care and precision, ensuring your home or business remains powered and comfortable.
            </p>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
              {[
                'Licensed Electrical Contractors',
                'ARC Certified Cooling Specialists',
                'Locally Owned & Family Operated',
                'Energy Efficiency Experts',
                'Upfront, Fixed Pricing',
                'Clean & Tidy Workmanship'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span className="font-medium text-slate-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Service Promise</h2>
            <p className="text-slate-600">The pillars that define our business and our relationship with you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Reliability',
                desc: 'Punctuality is our priority. We arrive between 6:00 AM and 6:00 PM as promised, ready to work.',
                icon: <Clock className="h-10 w-10 text-blue-600" />
              },
              {
                title: 'Professionalism',
                desc: 'Our staff are highly trained in the latest safety protocols and energy-efficient technologies.',
                icon: <Users className="h-10 w-10 text-blue-600" />
              },
              {
                title: 'Integrity',
                desc: 'No hidden fees. We provide clear communication and honest advice for every electrical solution.',
                icon: <Shield className="h-10 w-10 text-blue-600" />
              }
            ].map((v, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl text-center space-y-6 shadow-sm border border-slate-100">
                <div className="flex justify-center">{v.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
