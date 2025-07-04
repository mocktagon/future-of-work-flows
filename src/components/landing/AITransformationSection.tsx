
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Stethoscope, GraduationCap, ShoppingCart, Factory, Briefcase, TrendingUp, Users, Zap } from 'lucide-react';

export const AITransformationSection = () => {
  const industries = [
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "AI-powered diagnostics and patient care optimization",
      impact: "40% faster diagnosis",
      startups: ["PathAI", "Tempus", "Butterfly Network"],
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Personalized learning and automated grading systems",
      impact: "60% time savings",
      startups: ["Coursera", "Duolingo", "Grammarly"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Inventory optimization and customer experience enhancement",
      impact: "25% revenue increase",
      startups: ["Shopify", "Klarna", "Dynamic Yield"],
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Predictive maintenance and quality control automation",
      impact: "30% cost reduction",
      startups: ["Sight Machine", "Uptake", "Fero Labs"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Briefcase,
      title: "Finance",
      description: "Fraud detection and algorithmic trading solutions",
      impact: "85% fraud reduction",
      startups: ["Stripe", "Plaid", "Kensho"],
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Building2,
      title: "Real Estate",
      description: "Property valuation and market analysis automation",
      impact: "50% faster appraisals",
      startups: ["Opendoor", "Compass", "Zillow"],
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const roleTransformations = [
    {
      role: "Marketing Managers",
      before: "Manual campaign analysis",
      after: "AI-driven customer insights & automated personalization",
      icon: TrendingUp,
      efficiency: "300%"
    },
    {
      role: "HR Professionals",
      before: "Resume screening & scheduling",
      after: "AI candidate matching & automated workflows",
      icon: Users,
      efficiency: "250%"
    },
    {
      role: "Operations Teams",
      before: "Manual process optimization",
      after: "Predictive analytics & automated decision-making",
      icon: Zap,
      efficiency: "400%"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            AI is Transforming Every Industry
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Right Now</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            See how startups and enterprises are leveraging AI to gain <span className="font-semibold text-blue-600">competitive advantages</span> 
            across different sectors and roles.
          </p>
        </div>

        {/* Industries Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Industries Leading the AI Revolution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${industry.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${industry.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">{industry.title}</CardTitle>
                        <Badge className={`bg-gradient-to-r ${industry.gradient} text-white px-3 py-1 text-xs mt-1`}>
                          {industry.impact}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Leading Startups:</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.startups.map((startup, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-gray-50">
                            {startup}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Role Transformations Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">How AI is Transforming Key Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roleTransformations.map((transform, index) => {
              const IconComponent = transform.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{transform.role}</CardTitle>
                    <Badge className="bg-emerald-100 text-emerald-800 px-4 py-1 font-semibold">
                      {transform.efficiency} more efficient
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-red-800 mb-1">Before AI:</p>
                      <p className="text-sm text-red-700">{transform.before}</p>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-emerald-800 mb-1">After AI:</p>
                      <p className="text-sm text-emerald-700">{transform.after}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
