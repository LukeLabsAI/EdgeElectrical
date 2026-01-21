
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, MapPin, Zap, ShieldCheck, Star, ArrowRight, CheckCircle2, Wind } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Quote from './pages/Quote';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Get a Quote', path: '/quote', highlight: true },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-600 fill-blue-600/20" />
              <span className="text-xl font-bold text-slate-800 tracking-tight">Edge <span className="text-blue-600">Electrical & Air</span></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${link.highlight
                      ? 'bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all font-medium shadow-sm'
                      : `transition-all font-semibold ${isActive ? 'text-blue-600 scale-105 underline underline-offset-8 decoration-2' : 'text-slate-600 hover:text-blue-600'}`
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium ${location.pathname === link.path ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-gray-50'
                  } ${link.highlight ? 'font-bold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white tracking-tight">Edge <span className="text-blue-400">Electrical & Air</span></span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted local electrical and air conditioning specialists in Alexandra Headland. Available 24/7 for emergencies. Quality workmanship guaranteed.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/quote" className="hover:text-blue-400 transition-colors">Get a Free Quote</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>0481 385 154</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>???</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Alexandra Headland, QLD 4572</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Business Hours</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span>6:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-red-400 font-bold uppercase">Closed</span>
              </li>
              <li className="flex justify-between text-blue-400 font-medium">
                <span>Emergency</span>
                <span>24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Edge Electrical & Air. All rights reserved. Lic No. 1234567.
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
