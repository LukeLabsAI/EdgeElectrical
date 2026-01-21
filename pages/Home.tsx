
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, Clock, CheckCircle2, Zap, Wind, Wrench } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000" 
            alt="Electrician working" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/30">
              Premium Electrical & Air in Alexandra Headland
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Sparking Life <br /><span className="text-blue-500">Into Your Home.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              Reliable electrical repairs and expert air conditioning installations for homes and businesses across the Sunshine Coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/quote" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all group"
              >
                Request a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:0481385154" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-slate-100 transition-all border border-slate-200"
              >
                <Phone className="mr-2 h-5 w-5 text-blue-600" />
                0481 385 154
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              <span className="font-semibold text-slate-800">Licensed Electricians</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Clock className="h-8 w-8 text-blue-600" />
              <span className="font-semibold text-slate-800">6am - 6pm Service</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle2 className="h-8 w-8 text-blue-600" />
              <span className="font-semibold text-slate-800">Satisfaction Guaranteed</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Wind className="h-8 w-8 text-blue-600" />
              <span className="font-semibold text-slate-800">Cooling Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Solutions</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Electrical Repairs',
                desc: 'Fault finding, switchboard upgrades, and general wiring to keep your home safe and powered.',
                icon: <Zap className="h-10 w-10" />
              },
              {
                title: 'Air Conditioning',
                desc: 'Expert installation and maintenance of split systems and ducted units for year-round comfort.',
                icon: <Wind className="h-10 w-10" />
              },
              {
                title: 'Lighting & Smart Home',
                desc: 'Energy-efficient LED upgrades and smart home integration for a modern lifestyle.',
                icon: <ShieldCheck className="h-10 w-10" />
              }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-6">{s.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-600 mb-6">{s.desc}</p>
                <Link to="/services" className="text-blue-600 font-semibold inline-flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Area CTA */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Alexandra Headland's Preferred Tradies</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            From Mooloolaba to Maroochydore, we are the first choice for electrical and cooling.
          </p>
          <Link to="/quote" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-blue-600 font-bold text-lg hover:bg-slate-50 transition-all shadow-xl">
            Request a Visit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
