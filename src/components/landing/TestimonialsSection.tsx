
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Transformed our approach to AI adoption. We identified 12 automation opportunities in just one hour.",
      author: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "TechCorp",
      rating: 5
    },
    {
      quote: "The assessment revealed hidden inefficiencies we never noticed. Our productivity increased by 35%.",
      author: "Michael Rodriguez",
      role: "Operations Director", 
      company: "ScaleUp Inc",
      rating: 5
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Forward-Thinking Leaders</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-10 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              
              <div className="flex items-center mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Badge className="ml-auto bg-green-100 text-green-700 px-3 py-1">
                  Verified Client
                </Badge>
              </div>
              
              <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg mr-6 shadow-lg">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-semibold">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
