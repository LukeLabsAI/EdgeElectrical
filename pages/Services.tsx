
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Wind, ShieldCheck, ArrowRight, Lightbulb, SunMedium } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Electrical Services',
      icon: <Zap className="h-8 w-8" />,
      items: [
        'Switchboard Upgrades',
        'Safety Switch (RCD) Testing',
        'Power Point Installation',
        'Ceiling Fan Fitting',
        'LED Lighting Upgrades',
        'Smoke Alarm Compliance'
      ]
    },
    {
      title: 'Air Conditioning',
      icon: <Wind className="h-8 w-8" />,
      items: [
        'Split System Installation',
        'Ducted System Maintenance',
        'Filter Cleaning & Sanitizing',
        'Regassing & Leak Detection',
        'Thermostat Replacement',
        'Multi-Head Unit Experts'
      ]
    },
    {
      title: 'Automation & Energy',
      icon: <Lightbulb className="h-8 w-8" />,
      items: [
        'Smart Lighting Solutions',
        'Security Camera Systems',
        'Solar Inverter Health Checks',
        'Energy Consumption Audits',
        'Home Network Cabling',
        'Smart Thermostat Setup'
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-blue-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Electrical & Cooling Solutions</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-10">
            From essential maintenance to modern smart home integrations, we keep your property efficient and safe.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-blue-200" />
              <span>Safety Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-blue-200" />
              <span>Transparent Pricing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {serviceCategories.map((cat, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-blue-200 shadow-xl">
                  {cat.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{cat.title}</h2>
                <ul className="space-y-4 mb-10">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-slate-600">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/quote" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                  Get a quote for these <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW FEATURE: Solar Energy Solutions (Replaces 'Weird' section) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1000" 
            alt="Solar Panels" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Future-Proof Your Power</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Take control of your energy bills with our specialized solar maintenance and battery readiness assessments. We help Sunshine Coast homeowners maximize their solar investment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-3">
                <SunMedium className="text-blue-500 h-6 w-6" />
                <span>Solar Performance Audits</span>
              </div>
              <div className="flex items-center space-x-3">
                <SunMedium className="text-blue-500 h-6 w-6" />
                <span>Battery Storage Readiness</span>
              </div>
              <div className="flex items-center space-x-3">
                <SunMedium className="text-blue-500 h-6 w-6" />
                <span>Inverter Troubleshooting</span>
              </div>
              <div className="flex items-center space-x-3">
                <SunMedium className="text-blue-500 h-6 w-6" />
                <span>System Cleaning & Optimization</span>
              </div>
            </div>
            <Link to="/quote" className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all">
              Request a Solar Health Check
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
