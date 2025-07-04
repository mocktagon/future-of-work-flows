
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Target, TrendingUp, Clock, CheckCircle, Brain, Zap, Shield, Sparkles, ChevronRight, Star, Award, Rocket, BarChart3, Users2, Timer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "87%", label: "of companies struggle with AI adoption", color: "text-red-600", icon: TrendingUp },
    { number: "3.2x", label: "faster implementation with proper assessment", color: "text-emerald-600", icon: Zap },
    { number: "60min", label: "comprehensive assessment time per team", color: "text-blue-600", icon: Timer },
    { number: "92%", label: "accuracy in identifying automation opportunities", color: "text-purple-600", icon: Target }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Navigation with enhanced backdrop blur */}
      <nav className="bg-white/90 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="h-6 w-6 text-white" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">AI Readiness</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => navigate('/science')}
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium hover:scale-105"
              >
                Science
              </button>
              <button 
                onClick={() => navigate('/resources')}
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium hover:scale-105"
              >
                Resources
              </button>
              <Button 
                onClick={() => navigate('/assessment')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Assessment
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-6 py-3 text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Readiness Assessment 2024
              </Badge>
            </div>
            
            <h1 className="text-7xl font-bold mb-8 leading-tight">
              <span className="text-gray-900">Don't Let AI Leave You</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Behind</span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              While your competitors gain <span className="font-semibold text-blue-600">40% efficiency</span> through AI, discover exactly where and how 
              to implement AI in your organization—in just <span className="font-semibold text-purple-600">60 minutes</span>.
            </p>
            
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

      {/* Enhanced FOMO Section */}
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

      {/* Enhanced Solution Section */}
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

      {/* Enhanced Process Preview */}
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
            {[
              { step: 1, title: "Setup", time: "5 min", desc: "Define scope & objectives", color: "from-blue-500 to-blue-600" },
              { step: 2, title: "Onboard", time: "10 min", desc: "Team introduction & consent", color: "from-purple-500 to-purple-600" },
              { step: 3, title: "Interview", time: "35 min", desc: "AI-powered deep assessment", color: "from-cyan-500 to-cyan-600" },
              { step: 4, title: "Results", time: "10 min", desc: "Actionable implementation roadmap", color: "from-emerald-500 to-emerald-600" }
            ].map((item, index) => (
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

      {/* Enhanced Social Proof */}
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

      {/* Enhanced Final CTA */}
      <div className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-8">
              Your AI Transformation 
              <span className="block mt-2">Starts Now</span>
            </h2>
            <p className="text-2xl text-blue-100 mb-12 font-light leading-relaxed">
              Join <span className="font-semibold text-white">500+</span> organizations that have already mapped their AI readiness journey. 
              Don't let another quarter pass without AI strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 rounded-xl"
                onClick={() => navigate('/assessment')}
              >
                <Rocket className="mr-3 h-6 w-6" />
                Start Free Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 text-lg font-semibold transition-all duration-500 hover:scale-105 rounded-xl backdrop-blur-sm"
                onClick={() => navigate('/science')}
              >
                Learn The Science
                <ChevronRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-blue-200 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                No signup required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Complete in 60 minutes
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Instant results
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
