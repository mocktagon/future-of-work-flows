
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ProcessSection = () => {
  const processSteps = [
    { step: 1, title: "Setup", time: "5 min", desc: "Define scope & objectives", color: "from-blue-500 to-blue-600" },
    { step: 2, title: "Onboard", time: "10 min", desc: "Team introduction & consent", color: "from-purple-500 to-purple-600" },
    { step: 3, title: "Interview", time: "35 min", desc: "AI-powered deep assessment", color: "from-cyan-500 to-cyan-600" },
    { step: 4, title: "Results", time: "10 min", desc: "Actionable implementation roadmap", color: "from-emerald-500 to-emerald-600" }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-l from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Multi-Phase Process to 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Excellence</span>
          </h2>
          <p className="text-2xl text-gray-600 font-light">
            From setup to actionable insights in approximately <span className="font-semibold text-purple-600">60 minutes</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {processSteps.map((item, index) => (
            <Card key={index} className="relative text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/80 backdrop-blur-sm group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                {item.step}
              </div>
              
              <div className="pt-8 relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <Badge className={`bg-gradient-to-r ${item.color} text-white mb-6 px-4 py-2 text-sm font-semibold`}>
                  {item.time}
                </Badge>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
