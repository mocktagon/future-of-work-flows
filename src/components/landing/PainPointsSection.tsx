
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Target, Users, TrendingUp } from 'lucide-react';

export const PainPointsSection = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Time-Critical AI Adoption",
      description: "While competitors leverage AI for 40% efficiency gains, your organization is falling behind in the AI race",
      impact: "Lost competitive advantage",
      gradient: "from-red-500/10 to-orange-500/10"
    },
    {
      icon: Target,
      title: "Unclear AI ROI Path",
      description: "Organizations waste $2.3M annually on AI initiatives without clear implementation strategy",
      impact: "Wasted resources",
      gradient: "from-orange-500/10 to-yellow-500/10"
    },
    {
      icon: Users,
      title: "Team Resistance & Skills Gap",
      description: "68% of AI projects fail due to inadequate team preparation and change management",
      impact: "Failed implementations",
      gradient: "from-red-500/10 to-pink-500/10"
    },
    {
      icon: TrendingUp,
      title: "Missed Market Opportunities",
      description: "Early AI adopters capture 5x more market share while others evaluate options",
      impact: "Revenue loss",
      gradient: "from-pink-500/10 to-red-500/10"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-red-50/50 via-orange-50/30 to-yellow-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-red-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            The AI Revolution Won't Wait
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Every day you delay AI implementation, competitors gain <span className="font-semibold text-red-600">irreversible advantages</span>. 
            Here's what's at stake:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card key={index} className={`border-0 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br ${point.gradient} backdrop-blur-sm`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
                  </div>
                  <CardTitle className="text-red-900 text-xl font-bold">
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">{point.description}</p>
                  <Badge className="bg-red-100 text-red-800 border border-red-200 px-4 py-2 font-semibold">
                    Impact: {point.impact}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
