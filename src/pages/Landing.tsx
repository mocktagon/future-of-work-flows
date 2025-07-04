
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Target, TrendingUp, Clock, CheckCircle, Brain, Zap, Shield, Sparkles, ChevronRight, Star, Award, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "87%", label: "of companies struggle with AI adoption", color: "text-red-600" },
    { number: "3.2x", label: "faster implementation with proper assessment", color: "text-green-600" },
    { number: "15min", label: "average assessment time per team member", color: "text-blue-600" },
    { number: "92%", label: "accuracy in identifying automation opportunities", color: "text-purple-600" }
  ];

  const painPoints = [
    {
      icon: Clock,
      title: "Time-Critical AI Adoption",
      description: "While competitors leverage AI for 40% efficiency gains, your organization is falling behind in the AI race",
      impact: "Lost competitive advantage"
    },
    {
      icon: Target,
      title: "Unclear AI ROI Path",
      description: "Organizations waste $2.3M annually on AI initiatives without clear implementation strategy",
      impact: "Wasted resources"
    },
    {
      icon: Users,
      title: "Team Resistance & Skills Gap",
      description: "68% of AI projects fail due to inadequate team preparation and change management",
      impact: "Failed implementations"
    },
    {
      icon: TrendingUp,
      title: "Missed Market Opportunities",
      description: "Early AI adopters capture 5x more market share while others evaluate options",
      impact: "Revenue loss"
    }
  ];

  const solution = [
    {
      icon: Brain,
      title: "AI-Powered Assessment",
      description: "Our advanced AI interviews your teams to map current workflows and identify automation opportunities"
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Get actionable recommendations within 30 minutes, not months of consultation"
    },
    {
      icon: Shield,
      title: "Risk-Free Implementation",
      description: "Start with high-impact, low-risk AI implementations based on your team's actual readiness"
    }
  ];

  const testimonials = [
    {
      quote: "Transformed our approach to AI adoption. We identified 12 automation opportunities in just 30 minutes.",
      author: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "TechCorp"
    },
    {
      quote: "The assessment revealed hidden inefficiencies we never noticed. Our productivity increased by 35%.",
      author: "Michael Rodriguez",
      role: "Operations Director",
      company: "ScaleUp Inc"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Readiness Assessment 2024
              </Badge>
            </div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Don't Let AI Leave You
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Behind</span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              While your competitors gain 40% efficiency through AI, discover exactly where and how 
              to implement AI in your organization—in just 30 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/assessment')}
              >
                Start Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg border-2 hover:bg-gray-50"
                onClick={() => navigate('/science')}
              >
                View Science Behind It
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOMO Section */}
      <div className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The AI Revolution Won't Wait
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every day you delay AI implementation, competitors gain irreversible advantages. 
              Here's what's at stake:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {painPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <Card key={index} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-red-900">
                      <IconComponent className="h-8 w-8" />
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{point.description}</p>
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      Impact: {point.impact}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Turn AI Complexity Into Competitive Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered assessment eliminates guesswork and provides a clear roadmap 
              tailored to your team's actual capabilities and workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {solution.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-blue-50">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Preview */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              4-Step Process to AI Excellence
            </h2>
            <p className="text-xl text-gray-600">
              From setup to actionable insights in under 30 minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: 1, title: "Setup", time: "5 min", desc: "Define scope" },
              { step: 2, title: "Onboard", time: "3 min", desc: "Team introduction" },
              { step: 3, title: "Interview", time: "15 min", desc: "AI-powered assessment" },
              { step: 4, title: "Results", time: "Instant", desc: "Actionable roadmap" }
            ].map((item, index) => (
              <Card key={index} className="relative text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <Badge className="bg-green-100 text-green-700 mb-3">{item.time}</Badge>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by Forward-Thinking Leaders
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Your AI Transformation Starts Now
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 500+ organizations that have already mapped their AI readiness journey. 
              Don't let another quarter pass without AI strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg"
                onClick={() => navigate('/assessment')}
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Free Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
                onClick={() => navigate('/science')}
              >
                Learn The Science
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No signup required • Complete assessment in 30 minutes • Instant results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
