import React, { useState } from 'react';
import { Send, Phone, MapPin, Mail, Loader2, CheckCircle } from 'lucide-react';

const Quote: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Electrical Repair',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'Electrical Repair',
        description: ''
      });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 animate-in zoom-in duration-500 px-4">
        <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-xl border border-blue-100 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Request Sent!</h1>
          <p className="text-slate-600 mb-10 leading-relaxed text-lg">
            Thanks for reaching out! One of our expert electricians will contact you shortly to discuss your quote.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg"
          >
            Send Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get a Quote</h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Fast, expert estimates for all your electrical and cooling needs. For urgent power outages or safety concerns, call us immediately.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Phone</h3>
                    <p className="text-slate-600">0481 385 154</p>
                    <p className="text-sm text-blue-600 font-medium mt-1">6am-6pm Daily (Emergency 24/7)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Email</h3>
                    <p className="text-slate-600">???</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600/10 p-4 rounded-2xl text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Address</h3>
                    <p className="text-slate-600">Alexandra Headland, QLD 4572</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-blue-600 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-4">Urgent Issue?</h3>
                <p className="mb-6 text-blue-100">Exposed wiring, sparks, or total power loss? Our emergency electricians are available 24/7.</p>
                <a href="tel:0481385154" className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all">
                  Call Now: 0481 385 154
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Service Required</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none appearance-none"
                  >
                    <option>Electrical Repair</option>
                    <option>AC Installation</option>
                    <option>AC Maintenance</option>
                    <option>Switchboard Upgrade</option>
                    <option>Lighting & Points</option>
                    <option>Safety Check</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-semibold text-slate-700">Describe the Task</label>
                  </div>
                  <textarea
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                    placeholder="Tell us what you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 disabled:opacity-70 flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
