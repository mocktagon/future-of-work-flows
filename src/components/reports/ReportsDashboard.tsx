
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, User, Users, Building, TrendingUp, Target, AlertTriangle, Lightbulb, Download, Share } from 'lucide-react';
import IndividualReport from './IndividualReport';
import DepartmentReport from './DepartmentReport';
import OrganizationReport from './OrganizationReport';

const ReportsDashboard = ({ organizationData, employeeData }) => {
  const [activeTab, setActiveTab] = useState('individual');

  // Generate summary data from all phases
  const generateReportData = () => {
    // In a real implementation, this would aggregate data from all employees
    // For demo purposes, we'll simulate comprehensive data
    
    const mockIndividualData = {
      employeeName: employeeData?.phase_1?.employeeName || 'John Doe',
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
      individual: mockIndividualData,
      department: mockDepartmentData,
      organization: mockOrganizationData
    };
  };

  const reportData = generateReportData();

  const reportTabs = [
    {
      id: 'individual',
      label: 'Individual Report',
      icon: User,
      description: 'Personal AI readiness profile and insights'
    },
    {
      id: 'department',
      label: 'Department Report',
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

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          AI Readiness Assessment Reports
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Multi-level reporting and analysis providing actionable insights for AI integration 
          and workforce development across individual, departmental, and organizational levels.
        </p>
      </div>

      {/* Summary Statistics */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <TrendingUp className="h-6 w-6" />
            Assessment Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">
                {reportData.organization.participationRate}%
              </div>
              <div className="text-sm text-blue-600">Participation Rate</div>
              <Progress value={reportData.organization.participationRate} className="mt-2 h-2" />
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">
                {reportData.organization.overallReadinessScore}/10
              </div>
              <div className="text-sm text-blue-600">Overall Readiness Score</div>
              <Progress value={reportData.organization.overallReadinessScore * 10} className="mt-2 h-2" />
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">
                {reportData.organization.departmentsAssessed}
              </div>
              <div className="text-sm text-blue-600">Departments Assessed</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">
                {reportData.individual.tasksAssessed * 50}+
              </div>
              <div className="text-sm text-blue-600">Total Tasks Analyzed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Reports Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-full max-w-2xl grid-cols-3">
            {reportTabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                  <IconComponent className="h-4 w-4" />
                  {tab.label}
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

        {/* Tab Content */}
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

      {/* Action Items Summary */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900">
            <Target className="h-6 w-6" />
            Next Steps & Action Items
          </CardTitle>
          <CardDescription className="text-green-700">
            Recommended immediate actions based on assessment findings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-900 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Immediate Priorities (0-3 months)
              </h4>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 bg-white">1</Badge>
                  Launch pilot program with email management automation
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 bg-white">2</Badge>
                  Develop AI literacy training program
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 bg-white">3</Badge>
                  Establish AI governance committee
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-green-900 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Medium-term Goals (3-12 months)
              </h4>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 bg-white">1</Badge>
                  Scale successful automation pilots
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 bg-white">2</Badge>
                  Implement skill development programs
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 bg-white">3</Badge>
                  Deploy advanced AI collaboration tools
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsDashboard;
