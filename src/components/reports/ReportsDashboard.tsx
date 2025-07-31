import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { User, Users, Building, Target, Download, ArrowRight } from 'lucide-react';
import IndividualReport from './IndividualReport';
import DepartmentReport from './DepartmentReport';
import OrganizationReport from './OrganizationReport';
import ReportMetrics from './ReportMetrics';
import ImplementationRoadmap from './ImplementationRoadmap';
import QuickWins from './QuickWins';
import ReportActions from './ReportActions';
import { generateReportData, nextStepsData } from '@/data/mockReportData';

const ReportsDashboard = ({ organizationData, employeeData }) => {
  const [activeTab, setActiveTab] = useState('summary');

  const reportData = generateReportData(organizationData, employeeData);

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

  const handleExportReport = (reportType: string) => {
    console.log(`Exporting ${reportType} report...`);
    // In a real implementation, this would generate and download a PDF/Excel report
  };

  const handleShareReport = (reportType: string) => {
    console.log(`Sharing ${reportType} report...`);
    // In a real implementation, this would open sharing options
  };

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
      <ReportMetrics summaryData={reportData.summary} />

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
          <ReportActions 
            activeTab={activeTab}
            onExport={handleExportReport}
            onShare={handleShareReport}
          />
        </div>

        {/* Executive Summary Tab */}
        <TabsContent value="summary" className="space-y-6">
          <ImplementationRoadmap steps={nextStepsData} />
          <QuickWins />
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
