
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, ChevronRight, TrendingUp, Zap, Timer, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "87%", label: "of companies struggle with AI adoption", color: "text-red-600", icon: TrendingUp },
    { number: "3.2x", label: "faster implementation with proper assessment", color: "text-emerald-600", icon: Zap },
    { number: "60min", label: "comprehensive assessment time per team", color: "text-blue-600", icon: Timer },
    { number: "92%", label: "accuracy in identifying automation opportunities", color: "text-purple-600", icon: Target }
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="text-center max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-6 py-3 text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Readiness Assessment 2025
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Stop Guessing on AI.</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Start Winning With It.</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-600 mb-4 leading-relaxed font-light">
              The AI hype is a distraction. The real breakthroughs are strategic.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              In a focused <span className="font-semibold text-purple-600">60-minute session</span>, we'll translate the chaos into clarity, delivering a prioritized action plan that targets the <span className="font-semibold text-blue-600">highest-impact opportunities</span> for your business.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-10 py-5 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 rounded-xl"
              onClick={() => navigate('/assessment')}
            >
              Start Free Assessment
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-10 py-5 text-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105 rounded-xl backdrop-blur-sm"
              onClick={() => navigate('/science')}
            >
              View Science Behind It
              <ChevronRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
                    <div className="flex justify-center mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color.includes('red') ? 'from-red-500 to-red-600' : stat.color.includes('emerald') ? 'from-emerald-500 to-emerald-600' : stat.color.includes('blue') ? 'from-blue-500 to-blue-600' : 'from-purple-500 to-purple-600'} flex items-center justify-center shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                    <div className="text-sm text-gray-600 leading-tight">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
