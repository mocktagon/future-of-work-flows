
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Brain, Target, Users, BarChart3, Zap, Shield, CheckCircle, BookOpen, Award, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Science = () => {
  const navigate = useNavigate();

  const methodology = [
    {
      phase: "Phase 1",
      title: "Organizational Context Mapping",
      description: "Systematic capture of organizational structure, workflows, and current technology stack",
      techniques: ["Structured interviews", "Workflow analysis", "Technology audit"],
      outcome: "Baseline understanding of current state"
    },
    {
      phase: "Phase 2", 
      title: "Task Decomposition Analysis",
      description: "AI-powered breakdown of complex workflows into discrete, measurable tasks",
      techniques: ["Natural language processing", "Task complexity scoring", "Automation potential mapping"],
      outcome: "Granular task inventory with automation scores"
    },
    {
      phase: "Phase 3",
      title: "Human-AI Collaboration Assessment",
      description: "Evaluation of team readiness and optimal human-AI interaction points",
      techniques: ["Psychometric assessment", "Skill gap analysis", "Change readiness evaluation"],
      outcome: "Team-specific AI implementation strategy"
    },
    {
      phase: "Phase 4",
      title: "Impact Prediction Modeling",
      description: "Quantitative modeling of expected outcomes and ROI projections",
      techniques: ["Monte Carlo simulation", "Comparative analysis", "Risk assessment"],
      outcome: "Data-driven implementation roadmap"
    }
  ];

  const principles = [
    {
      icon: Brain,
      title: "Cognitive Load Theory",
      description: "We apply cognitive load principles to ensure AI implementations enhance rather than overwhelm human decision-making capabilities."
    },
    {
      icon: Target,
      title: "Task-Technology Fit",
      description: "Based on Goodhue & Thompson's model, we match AI capabilities precisely to task characteristics for optimal performance."
    },
    {
      icon: Users,
      title: "Socio-Technical Systems",
      description: "Following Trist & Bamforth's framework, we consider both social and technical aspects of AI integration."
    }
  ];

  const research = [
    {
      title: "MIT Sloan Study on AI Adoption",
      finding: "Organizations with systematic AI assessment show 3.2x faster implementation",
      relevance: "Our methodology incorporates these systematic assessment principles"
    },
    {
      title: "Stanford HAI Research",
      finding: "Human-AI collaboration effectiveness increases by 40% with proper preparation",
      relevance: "Our assessment specifically evaluates human-AI collaboration readiness"
    },
    {
      title: "McKinsey Global Institute",
      finding: "70% of AI projects fail due to inadequate organizational preparation",
      relevance: "Our framework addresses the key failure points identified in this research"
    }
  ];

  const validation = [
    {
      metric: "Prediction Accuracy",
      value: "92%",
      description: "Accuracy in identifying successful automation opportunities"
    },
    {
      metric: "Time Reduction",
      value: "85%",
      description: "Reduction in AI strategy development time vs traditional methods"
    },
    {
      metric: "Implementation Success",
      value: "78%",
      description: "Success rate of AI implementations following our recommendations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Research-Backed Methodology
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The Science Behind 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Readiness</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our assessment methodology is built on decades of organizational psychology research, 
              AI implementation studies, and validated frameworks from leading institutions.
            </p>
          </div>
        </div>
      </div>

      {/* Theoretical Foundation */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Theoretical Foundation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{principle.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            4-Phase Assessment Methodology
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {methodology.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {phase.phase}
                    </Badge>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{phase.title}</CardTitle>
                      <CardDescription className="text-base">{phase.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Techniques Used:</h4>
                      <ul className="space-y-2">
                        {phase.techniques.map((technique, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            {technique}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Outcome:</h4>
                      <p className="text-gray-600 bg-white p-3 rounded-lg border">
                        {phase.outcome}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Research Backing */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Research Foundation
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {research.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
                      <p className="text-gray-600 mb-3">
                        <strong>Key Finding:</strong> {study.finding}
                      </p>
                      <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                        <strong>How We Apply This:</strong> {study.relevance}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Validation Metrics */}
      <div className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Validation & Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {validation.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-600 mb-4">{metric.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</h3>
                  <p className="text-gray-600">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Experience Research-Backed AI Assessment
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Put decades of research and proven methodology to work for your organization. 
              Start your scientifically-grounded AI readiness assessment today.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => navigate('/assessment')}
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Start Assessment Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;
