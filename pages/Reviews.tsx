
import React from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';

const Reviews: React.FC = () => {
  const testimonials = [
    {
      name: "Client A",
      location: "Alexandra Headland",
      date: "Recently",
      text: "No info provided.",
      rating: 5
    },
    {
      name: "Client B",
      location: "Mooloolaba",
      date: "Recently",
      text: "No info provided.",
      rating: 5
    },
    {
      name: "Client C",
      location: "Maroochydore",
      date: "Recently",
      text: "No info provided.",
      rating: 5
    },
    {
      name: "Client D",
      location: "Buderim",
      date: "Recently",
      text: "No info provided.",
      rating: 5
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-blue-500 text-blue-500" />
              ))}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Customer Testimonials</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            See what our local Alexandra Headland community has to say.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((review, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-3xl relative border border-slate-100 hover:shadow-xl transition-all">
                <Quote className="absolute top-8 right-10 h-12 w-12 text-blue-100" />
                <div className="flex space-x-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                  <div>
                    <h3 className="font-bold text-slate-900">{review.name}</h3>
                    <p className="text-sm text-slate-500">{review.location} • {review.date}</p>
                  </div>
                  <div className="bg-blue-600/10 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Verified Work
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ThumbsUp className="h-16 w-16 text-blue-400 mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-6">Want to leave feedback?</h2>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed">
            We value the trust our community puts in us. If we've completed a project for you recently, please share your experience to help others find a reliable local tradesperson.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center shadow-lg">
              Leave a Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
