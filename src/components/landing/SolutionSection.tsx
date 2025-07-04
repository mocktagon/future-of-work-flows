
import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Zap, Shield } from 'lucide-react';

export const SolutionSection = () => {
  const solution = [
    {
      icon: Brain,
      title: "AI-Powered Assessment",
      description: "Our advanced AI interviews your teams to map current workflows and identify automation opportunities",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Comprehensive Insights",
      description: "Get actionable recommendations within 60 minutes, not months of consultation",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Shield,
      title: "Risk-Free Implementation",
      description: "Start with high-impact, low-risk AI implementations based on your team's actual readiness",
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Turn AI Complexity Into 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Competitive Advantage</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Our AI-powered assessment eliminates guesswork and provides a <span className="font-semibold text-blue-600">clear roadmap</span> 
            tailored to your team's actual capabilities and workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {solution.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`relative w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-shadow duration-500`}>
                  <IconComponent className="h-10 w-10 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
