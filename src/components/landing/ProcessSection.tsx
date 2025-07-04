
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Users, MessageSquare, BarChart3, ArrowRight } from 'lucide-react';

export const ProcessSection = () => {
  const processSteps = [
    { 
      step: 1, 
      title: "Organization Setup", 
      time: "5 min", 
      desc: "Define scope, objectives & team structure", 
      color: "from-blue-500 to-blue-600",
      icon: Building
    },
    { 
      step: 2, 
      title: "Team Onboarding", 
      time: "10 min", 
      desc: "Employee introduction & consent process", 
      color: "from-purple-500 to-purple-600",
      icon: Users
    },
    { 
      step: 3, 
      title: "AI-Powered Assessment", 
      time: "35 min", 
      desc: "Multi-phase interview & deep analysis", 
      color: "from-cyan-500 to-cyan-600",
      icon: MessageSquare
    },
    { 
      step: 4, 
      title: "Actionable Insights", 
      time: "10 min", 
      desc: "Implementation roadmap & next steps", 
      color: "from-emerald-500 to-emerald-600",
      icon: BarChart3
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-l from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Streamlined Assessment Process for 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Maximum Impact</span>
          </h2>
          <p className="text-2xl text-gray-600 font-light">
            From setup to actionable insights in approximately <span className="font-semibold text-purple-600">60 minutes</span>
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {processSteps.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="relative text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/80 backdrop-blur-sm group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg z-10 relative`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-gray-900">{item.step}</span>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                      <Badge className={`bg-gradient-to-r ${item.color} text-white px-3 py-1 text-xs font-semibold`}>
                        {item.time}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">Complete assessment in one session</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
