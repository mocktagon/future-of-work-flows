
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Download, FileText, Users, Building, User, TrendingUp, Target, CheckCircle, Clock, ArrowRight, Eye, Share } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const navigate = useNavigate();

  const sampleReports = [
    {
      title: "Individual AI Readiness Report",
      description: "Personal assessment for Sarah Chen, Senior Data Analyst",
      icon: User,
      type: "Individual",
      metrics: {
        readinessScore: 8.2,
        tasksAnalyzed: 12,
        automationOpportunities: 7,
        dominantHAS: 3
      },
      highlights: [
        "High automation desire for data processing tasks",
        "Strong preference for human oversight in decision-making",
        "Ready for immediate email and report automation",
        "Recommended for pilot program participation"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Department Analysis Report",
      description: "Team-level insights for Product Development (12 members)",
      icon: Users,
      type: "Department",
      metrics: {
        participationRate: 92,
        averageReadiness: 7.4,
        commonTasks: 15,
        consensusLevel: 85
      },
      highlights: [
        "Strong alignment on automation priorities",
        "Shared concerns about AI accuracy in strategic decisions",
        "High potential for collaborative AI workflows",
        "Recommended training focus: AI collaboration skills"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Organization Strategy Report",
      description: "Enterprise-wide AI readiness for TechCorp Solutions (250 employees)",
      icon: Building,
      type: "Organization",
      metrics: {
        overallReadiness: 7.2,
        departmentsAssessed: 6,
        totalOpportunities: 45,
        expectedROI: "35%"
      },
      highlights: [
        "Clear quick-win opportunities identified across all departments",
        "Strong leadership support with 88% participation rate",
        "Recommended phased implementation over 6 months",
        "Projected $2.1M annual efficiency savings"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const implementationRoadmap = [
    {
      phase: "Immediate (Week 1-2)",
      color: "bg-red-50 border-red-200 text-red-800",
      badgeColor: "bg-red-100 text-red-700",
      actions: [
        "Set up pilot program with email automation",
        "Form AI implementation team",
        "Communicate assessment results to stakeholders"
      ]
    },
    {
      phase: "Short-term (Month 1-3)",
      color: "bg-orange-50 border-orange-200 text-orange-800",
      badgeColor: "bg-orange-100 text-orange-700",
      actions: [
        "Launch training program on AI collaboration",
        "Implement first automation solutions",
        "Establish success metrics and monitoring"
      ]
    },
    {
      phase: "Medium-term (Month 3-6)",
      color: "bg-blue-50 border-blue-200 text-blue-800",
      badgeColor: "bg-blue-100 text-blue-700",
      actions: [
        "Scale successful pilots to broader teams",
        "Develop advanced AI integration strategies",
        "Create feedback loops for continuous improvement"
      ]
    }
  ];

  const quickWins = [
    { task: "Email Management", readiness: 95, impact: "High", effort: "Low" },
    { task: "Report Generation", readiness: 90, impact: "High", effort: "Low" },
    { task: "Data Entry", readiness: 88, impact: "Medium", effort: "Low" },
    { task: "Scheduling", readiness: 85, impact: "Medium", effort: "Low" },
    { task: "Document Processing", readiness: 82, impact: "High", effort: "Medium" }
  ];

  const handleViewSample = (reportType: string) => {
    console.log(`Viewing sample ${reportType} report`);
    // In a real implementation, this would open a modal or new page with the full sample report
  };

  const handleDownloadSample = (reportType: string) => {
    console.log(`Downloading sample ${reportType} report`);
    // In a real implementation, this would download the sample report PDF
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI Readiness</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/science')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Science
              </button>
              <span className="text-blue-600 font-medium">Resources</span>
              <Button onClick={() => navigate('/assessment')}>
                Start Assessment
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources & Sample Reports
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore comprehensive sample reports and implementation resources to understand 
            the depth and value of our AI readiness assessment.
          </p>
        </div>

        {/* Sample Reports Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sample Assessment Reports
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sampleReports.map((report, index) => {
              const IconComponent = report.icon;
              return (
                <Card key={index} className={`${report.color} hover:shadow-lg transition-shadow duration-300`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-white/80 text-gray-700">{report.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">{report.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {report.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(report.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator className="mb-4" />

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      <h4 className="font-medium text-gray-900">Key Highlights:</h4>
                      {report.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleViewSample(report.type)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Sample
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDownloadSample(report.type)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Implementation Roadmap
          </h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Step-by-Step AI Integration Plan
              </CardTitle>
              <CardDescription>
                Your comprehensive roadmap for successful AI implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {implementationRoadmap.map((step, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${step.color}`}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{step.phase}</h3>
                      <Badge className={step.badgeColor}>
                        {step.actions.length} Actions
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      {step.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-current opacity-60" />
                          <span className="text-sm">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Wins */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Wins Analysis
          </h2>
          
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <TrendingUp className="h-5 w-5" />
                High-Impact, Low-Effort Opportunities
              </CardTitle>
              <CardDescription className="text-green-700">
                Tasks ready for immediate automation with minimal resistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {quickWins.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-green-200">
                    <div className="flex-1">
                      <div className="font-medium text-green-900">{item.task}</div>
                      <div className="text-sm text-green-700">
                        Impact: {item.impact} • Effort: {item.effort}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <div className="flex justify-between text-sm text-green-700 mb-1">
                          <span>Readiness</span>
                          <span>{item.readiness}%</span>
                        </div>
                        <Progress value={item.readiness} className="h-2" />
                      </div>
                      <Badge className="bg-green-100 text-green-700">Ready</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Your Custom Report?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              These samples show the depth of insights you'll receive. Start your assessment 
              today to get your personalized AI readiness analysis and implementation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => navigate('/assessment')}
              >
                Start Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => navigate('/science')}
              >
                Learn the Science
                <Target className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
