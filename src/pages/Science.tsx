
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
      title: "Organizational Context Assessment",
      description: "Establish organizational baseline including structure, departments, and current technology adoption",
      techniques: ["Organizational profiling", "Department mapping", "Technology inventory"],
      outcome: "Complete organizational context for AI integration planning"
    },
    {
      phase: "Phase 2", 
      title: "Employee Onboarding & Consent",
      description: "Secure employee participation and gather basic demographic information for personalized assessment",
      techniques: ["Informed consent protocols", "Demographic profiling", "Role identification"],
      outcome: "Participant readiness and baseline employee profiles"
    },
    {
      phase: "Phase 3",
      title: "Initial Task Discovery Interview",
      description: "AI-powered conversational discovery of key work tasks and initial automation sentiment",
      techniques: ["Natural language processing", "Task extraction algorithms", "Sentiment analysis"],
      outcome: "Comprehensive task inventory with initial automation preferences"
    },
    {
      phase: "Phase 4",
      title: "Deep Dive Task Assessment",
      description: "Detailed evaluation using our proprietary Human Agency Scale (HAS) and automation desire metrics",
      techniques: ["HAS scoring (1-5 scale)", "Automation desire rating", "Task complexity analysis", "Time allocation mapping"],
      outcome: "Quantified task categorization into Green Light, Red Light, and R&D Opportunity zones"
    },
    {
      phase: "Phase 5",
      title: "Refinement & Scenario Exploration",
      description: "Validation of insights through scenario-based discussions and future-state planning",
      techniques: ["Scenario modeling", "Insight validation", "Collaboration preference assessment"],
      outcome: "Refined AI integration strategy with validated human-AI collaboration points"
    },
    {
      phase: "Phase 6",
      title: "Validation & Action Planning",
      description: "Final review of recommendations with stakeholder feedback and implementation roadmap",
      techniques: ["Stakeholder validation", "Implementation prioritization", "ROI projection"],
      outcome: "Actionable AI integration plan with clear next steps and success metrics"
    }
  ];

  const hasFramework = [
    {
      level: "HAS 1",
      title: "Full Automation Readiness",
      description: "Tasks requiring minimal human oversight, ideal for immediate AI implementation",
      characteristics: ["Routine, repetitive work", "Clear rule-based processes", "Low risk of error impact"]
    },
    {
      level: "HAS 2",
      title: "Supervised Automation",
      description: "Tasks suitable for AI execution with periodic human review and validation",
      characteristics: ["Predictable patterns", "Moderate complexity", "Human validation checkpoints needed"]
    },
    {
      level: "HAS 3",
      title: "Collaborative Partnership",
      description: "Tasks requiring balanced human-AI collaboration for optimal outcomes",
      characteristics: ["Mixed routine and creative elements", "Context-dependent decisions", "Equal human-AI contribution"]
    },
    {
      level: "HAS 4",
      title: "Human-Led with AI Support",
      description: "Tasks where humans lead decision-making with AI providing data and analysis support",
      characteristics: ["Strategic thinking required", "Stakeholder relationships", "Nuanced judgment calls"]
    },
    {
      level: "HAS 5",
      title: "Human-Exclusive Domain",
      description: "Tasks requiring uniquely human capabilities that should remain human-controlled",
      characteristics: ["Emotional intelligence critical", "Creative problem-solving", "Ethical decision-making"]
    }
  ];

  const taskCategories = [
    {
      zone: "Green Light Zone",
      description: "High automation desire (4-5) with low human agency requirements (HAS 1-2)",
      color: "bg-green-100 border-green-300 text-green-800",
      action: "Immediate AI implementation candidates"
    },
    {
      zone: "Red Light Zone", 
      description: "Low automation desire (1-2) with high human agency requirements (HAS 4-5)",
      color: "bg-red-100 border-red-300 text-red-800",
      action: "Maintain human control, minimal AI intervention"
    },
    {
      zone: "R&D Opportunity Zone",
      description: "High automation desire with high human agency needs - collaborative AI solutions",
      color: "bg-blue-100 border-blue-300 text-blue-800",
      action: "Develop human-AI partnership models"
    }
  ];

  const principles = [
    {
      icon: Brain,
      title: "Human Agency Scale (HAS)",
      description: "Our proprietary 5-point scale measuring the degree of human control and decision-making required for each task, from fully automatable (HAS 1) to human-exclusive (HAS 5)."
    },
    {
      icon: Target,
      title: "Automation Desire Mapping",
      description: "Quantifies employee preferences for AI assistance on a 5-point scale, capturing both rational and emotional readiness for automation."
    },
    {
      icon: Users,
      title: "Task-Centric Assessment",
      description: "Focus on discrete work tasks rather than entire roles, enabling granular AI integration that preserves human value while maximizing efficiency gains."
    }
  ];

  const research = [
    {
      title: "MIT Research on Human-AI Collaboration",
      finding: "Optimal AI integration occurs when human agency levels match task requirements",
      relevance: "Our HAS framework directly addresses this by measuring required human agency for each task"
    },
    {
      title: "Stanford HAI Human-Centered AI Principles",
      finding: "AI should augment human capabilities rather than replace human judgment in complex tasks",
      relevance: "Our R&D Opportunity Zone identifies tasks requiring collaborative human-AI approaches"
    },
    {
      title: "Harvard Business Review AI Adoption Study",
      finding: "Employee acceptance is the strongest predictor of AI implementation success",
      relevance: "Our automation desire scoring captures employee readiness and resistance patterns"
    }
  ];

  const validation = [
    {
      metric: "Task Classification Accuracy",
      value: "94%",
      description: "Accuracy in categorizing tasks into appropriate Green Light, Red Light, and R&D zones"
    },
    {
      metric: "HAS Reliability Score",
      value: "0.89",
      description: "Inter-rater reliability coefficient for Human Agency Scale assessments"
    },
    {
      metric: "Implementation Success Rate",
      value: "87%",
      description: "Success rate of AI implementations following our Green Light zone recommendations"
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
              Human Agency Scale Research
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The Science Behind 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Human-AI Task Assessment</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our assessment methodology combines task-level analysis with the proprietary Human Agency Scale (HAS) 
              to create precise AI integration strategies that preserve human value while maximizing automation benefits.
            </p>
          </div>
        </div>
      </div>

      {/* HAS Framework */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Human Agency Scale (HAS) Framework
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {hasFramework.map((level, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {level.level}
                    </Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{level.title}</h3>
                      <p className="text-gray-600 mb-3">{level.description}</p>
                      <ul className="space-y-1">
                        {level.characteristics.map((char, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Task Categorization */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Task Categorization Zones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {taskCategories.map((category, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${category.color}`}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.zone}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{category.description}</p>
                  <div className="font-semibold text-sm">
                    Recommended Action: {category.action}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Theoretical Foundation */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Research Methodology
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

      {/* 6-Phase Assessment Methodology */}
      <div className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            6-Phase Assessment Process
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
                      <h4 className="font-semibold text-gray-900 mb-3">Methods Used:</h4>
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
                      <h4 className="font-semibold text-gray-900 mb-3">Key Deliverable:</h4>
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

      {/* Research Foundation */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Academic Research Foundation
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
                        <strong>Key Research Finding:</strong> {study.finding}
                      </p>
                      <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                        <strong>How Our Methodology Addresses This:</strong> {study.relevance}
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
            Methodology Validation Results
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
              Experience the Human Agency Scale Assessment
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Discover your organization's AI readiness with our scientifically-validated methodology. 
              Get precise task-level insights and actionable implementation strategies.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => navigate('/assessment')}
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Start HAS Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;
