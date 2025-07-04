
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Target, TrendingUp, Clock, CheckCircle, Brain, MessageSquare, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const painPoints = [
    {
      icon: Clock,
      title: "Time-Consuming Manual Processes",
      description: "Your teams spend countless hours on repetitive tasks that could be automated"
    },
    {
      icon: Target,
      title: "Unclear AI Integration Strategy",
      description: "You know AI can help, but unsure where to start or which processes to prioritize"
    },
    {
      icon: Users,
      title: "Team Resistance to Change",
      description: "Your teams are hesitant about AI adoption without understanding the benefits"
    },
    {
      icon: TrendingUp,
      title: "Missed Efficiency Opportunities",
      description: "Competitors are gaining advantages while you're still evaluating AI solutions"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Organization Setup",
      description: "Define your scope and parameters",
      duration: "5 minutes",
      image: "/api/placeholder/300/200"
    },
    {
      step: 2,
      title: "Team Onboarding",
      description: "Quick introduction and consent process",
      duration: "3 minutes",
      image: "/api/placeholder/300/200"
    },
    {
      step: 3,
      title: "AI-Powered Interviews",
      description: "Conversational assessment of tasks and preferences",
      duration: "15-20 minutes",
      image: "/api/placeholder/300/200"
    },
    {
      step: 4,
      title: "Actionable Reports",
      description: "Clear insights and implementation roadmap",
      duration: "Instant",
      image: "/api/placeholder/300/200"
    }
  ];

  const benefits = [
    "Identify automation opportunities within 30 minutes",
    "Get team buy-in through inclusive assessment process",
    "Receive prioritized AI implementation roadmap",
    "Understand skill development needs for your teams",
    "Make data-driven decisions about AI investments"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            AI Readiness Assessment
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Turn Your Team's Daily Tasks Into 
            <span className="text-blue-600"> AI-Powered Efficiency</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Stop guessing where AI can help your organization. Get a clear, actionable roadmap 
            based on your team's actual tasks and preferences in just 30 minutes.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            onClick={() => navigate('/assessment')}
          >
            Start Assessment Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            No login required • Free assessment • Instant results
          </p>
        </div>

        {/* Pain Points Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Are These Challenges Holding Your Organization Back?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <Card key={index} className="border-l-4 border-l-red-500 bg-red-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-red-900">
                      <IconComponent className="h-6 w-6" />
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-800">{point.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get Your AI Readiness Roadmap in 4 Simple Steps
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Our AI-powered assessment interviews your teams to understand their tasks, 
            preferences, and readiness for automation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="h-32 bg-gray-100 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    {step.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What You'll Get
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Sample Report Preview</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded border border-green-200">
                  <span className="text-green-800 font-medium">High Priority Tasks</span>
                  <Badge className="bg-green-100 text-green-700">8 identified</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded border border-blue-200">
                  <span className="text-blue-800 font-medium">Team Readiness Score</span>
                  <Badge className="bg-blue-100 text-blue-700">7.2/10</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded border border-purple-200">
                  <span className="text-purple-800 font-medium">Implementation Steps</span>
                  <Badge className="bg-purple-100 text-purple-700">12 actions</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Team's Productivity?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of organizations that have already mapped their AI readiness journey.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => navigate('/assessment')}
            >
              Start Your Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Landing;
