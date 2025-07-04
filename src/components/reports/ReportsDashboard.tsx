import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, User, Users, Building, TrendingUp, Target, AlertTriangle, Lightbulb, Download, Share, ArrowRight, Clock } from 'lucide-react';
import IndividualReport from './IndividualReport';
import DepartmentReport from './DepartmentReport';
import OrganizationReport from './OrganizationReport';

const ReportsDashboard = ({ organizationData, employeeData }) => {
  const [activeTab, setActiveTab] = useState('summary');

  // Generate summary data from all phases
  const generateReportData = () => {
    // In a real implementation, this would aggregate data from all employees
    // For demo purposes, we'll simulate comprehensive data
    
    const mockSummaryData = {
      overallReadinessScore: 7.2,
      totalTasksAnalyzed: 45,
      automationOpportunities: 12,
      teamReadinessLevel: 'High',
      priorityActions: 5,
      estimatedEfficiencyGain: '35%'
    };

    const mockIndividualData = {
      employeeName: employeeData?.phase_1?.employeeName || 'Team Member',
      department: 'Product Development',
      role: 'Senior Analyst',
      tasksAssessed: 8,
      automationDesire: 3.4,
      dominantHAS: 3,
      keyInsights: [
        'High desire for automating routine data processing tasks',
        'Strong preference for human involvement in strategic decisions',
        'Collaborative approach to AI integration preferred',
        'Concerns about AI accuracy in complex analysis'
      ],
      taskZones: {
        greenLight: ['Email Management', 'Report Generation', 'Data Entry'],
        redLight: ['Client Meetings', 'Strategic Planning'],
        rndOpportunity: ['Market Analysis', 'Trend Identification'],
        lowPriority: ['Documentation']
      }
    };

    const mockDepartmentData = {
      departmentName: 'Product Development',
      totalEmployees: 12,
      participationRate: 92,
      averageAutomationDesire: 3.2,
      dominantHAS: 3,
      commonTasksForAutomation: ['Data Processing', 'Report Generation', 'Email Management'],
      sharedConcerns: ['Job replacement fears', 'Trust in AI accuracy'],
      skillTrends: {
        increasing: ['Complex Problem Solving', 'Creative Thinking', 'Interpersonal Communication'],
        decreasing: ['Routine Data Processing', 'Manual Calculations']
      }
    };

    const mockOrganizationData = {
      organizationName: organizationData?.organizationName || 'TechCorp Solutions',
      totalEmployees: organizationData?.totalEmployees || 250,
      participationRate: 88,
      departmentsAssessed: organizationData?.departments?.length || 6,
      overallReadinessScore: 7.2,
      topAutomationOpportunities: [
        'Email and Communication Management',
        'Data Processing and Analysis',
        'Report and Document Generation',
        'Scheduling and Coordination'
      ],
      keyBarriers: [
        'Trust and reliability concerns',
        'Fear of job displacement',
        'Lack of technical understanding',
        'Change management resistance'
      ],
      strategicRecommendations: [
        'Implement pilot programs for high-confidence tasks',
        'Develop comprehensive training programs',
        'Establish clear AI governance policies',
        'Create feedback loops for continuous improvement'
      ]
    };

    return {
      summary: mockSummaryData,
      individual: mockIndividualData,
      department: mockDepartmentData,
      organization: mockOrganizationData
    };
  };

  const reportData = generateReportData();

  const reportTabs = [
    {
      id: 'summary',
      label: 'Executive Summary',
      icon: Target,
      description: 'Key findings and recommended actions'
    },
    {
      id: 'individual',
      label: 'Individual Insights',
      icon: User,
      description: 'Personal AI readiness profile and insights'
    },
    {
      id: 'department',
      label: 'Team Analysis',
      icon: Users,
      description: 'Team-level AI readiness analysis'
    },
    {
      id: 'organization',
      label: 'Organization Report',
      icon: Building,
      description: 'Enterprise-wide AI strategy insights'
    }
  ];

  const handleExportReport = (reportType) => {
    console.log(`Exporting ${reportType} report...`);
    // In a real implementation, this would generate and download a PDF/Excel report
  };

  const handleShareReport = (reportType) => {
    console.log(`Sharing ${reportType} report...`);
    // In a real implementation, this would open sharing options
  };

  const nextSteps = [
    {
      phase: 'Immediate (Week 1-2)',
      color: 'bg-red-50 border-red-200 text-red-800',
      badgeColor: 'bg-red-100 text-red-700',
      actions: [
        'Set up pilot program with email automation',
        'Form AI implementation team',
        'Communicate assessment results to stakeholders'
      ]
    },
    {
      phase: 'Short-term (Month 1-3)',
      color: 'bg-orange-50 border-orange-200 text-orange-800',
      badgeColor: 'bg-orange-100 text-orange-700',
      actions: [
        'Launch training program on AI collaboration',
        'Implement first automation solutions',
        'Establish success metrics and monitoring'
      ]
    },
    {
      phase: 'Medium-term (Month 3-6)',
      color: 'bg-blue-50 border-blue-200 text-blue-800',
      badgeColor: 'bg-blue-100 text-blue-700',
      actions: [
        'Scale successful pilots to broader teams',
        'Develop advanced AI integration strategies',
        'Create feedback loops for continuous improvement'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          AI Readiness Assessment Results
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your comprehensive AI readiness analysis with actionable insights and implementation roadmap
        </p>
      </div>

      {/* Key Metrics Overview */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <TrendingUp className="h-6 w-6" />
            Key Findings at a Glance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">
                {reportData.summary.overallReadinessScore}/10
              </div>
              <div className="text-xs text-blue-600">Readiness Score</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">
                {reportData.summary.totalTasksAnalyzed}
              </div>
              <div className="text-xs text-blue-600">Tasks Analyzed</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-700 mb-1">
                {reportData.summary.automationOpportunities}
              </div>
              <div className="text-xs text-green-600">Quick Wins</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-700 mb-1">
                {reportData.summary.estimatedEfficiencyGain}
              </div>
              <div className="text-xs text-purple-600">Efficiency Gain</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-700 mb-1">
                {reportData.summary.priorityActions}
              </div>
              <div className="text-xs text-orange-600">Priority Actions</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-700 mb-1">
                {reportData.summary.teamReadinessLevel}
              </div>
              <div className="text-xs text-indigo-600">Team Readiness</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Reports Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-full max-w-3xl grid-cols-4">
            {reportTabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2 text-xs">
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Export/Share Actions */}
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleExportReport(activeTab)}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleShareReport(activeTab)}
              className="flex items-center gap-2"
            >
              <Share className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Executive Summary Tab */}
        <TabsContent value="summary" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Implementation Roadmap
              </CardTitle>
              <CardDescription>
                Your step-by-step plan for AI integration success
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {nextSteps.map((step, index) => (
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

          {/* Quick Wins */}
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900">
                <CheckCircle className="h-5 w-5" />
                Quick Wins - Start Here
              </CardTitle>
              <CardDescription className="text-green-700">
                High-impact, low-effort opportunities to begin your AI journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium text-green-900">Ready for Automation</h4>
                  <div className="space-y-2">
                    {['Email Management', 'Report Generation', 'Data Entry', 'Scheduling'].map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-white rounded border border-green-200">
                        <span className="text-sm text-green-800">{task}</span>
                        <Badge className="bg-green-100 text-green-700">Ready</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-green-900">Expected Benefits</h4>
                  <div className="space-y-2 text-sm text-green-800">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Save 8-12 hours per week per team member</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>Reduce errors by 60-80%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Improve job satisfaction scores</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other Tab Content */}
        <TabsContent value="individual" className="space-y-4">
          <IndividualReport 
            employeeData={employeeData} 
            allPhaseData={Object.values(employeeData) || []} 
          />
        </TabsContent>

        <TabsContent value="department" className="space-y-4">
          <DepartmentReport data={reportData.department} />
        </TabsContent>

        <TabsContent value="organization" className="space-y-4">
          <OrganizationReport data={reportData.organization} />
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Your AI readiness assessment is complete. Take the first step towards transformation 
            by implementing your quick wins and building momentum for larger changes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Download Full Report
              <Download className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Schedule Implementation Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsDashboard;
