
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import OrganizationSetup from './OrganizationSetup';
import EmployeeOnboarding from './EmployeeOnboarding';
import EmployeeUpload from './EmployeeUpload';
import InitialInterview from './InitialInterview';
import ValidationInterview from './ValidationInterview';
import DeepDiveInterview from './DeepDiveInterview';
import RefinementInterview from './RefinementInterview';
import ReportsDashboard from '../reports/ReportsDashboard';
import { OrganizationData, InterviewPhaseData } from '@/types/interview';

interface PhaseRendererProps {
  currentPhase: number;
  organizationData: OrganizationData | null;
  employeeData: Record<string, InterviewPhaseData>;
  onComplete: (data: any) => void;
  onViewSampleReport?: () => void;
  showSampleReport?: boolean;
}

export const PhaseRenderer: React.FC<PhaseRendererProps> = ({
  currentPhase,
  organizationData,
  employeeData,
  onComplete,
  onViewSampleReport,
  showSampleReport = false
}) => {
  const previousPhaseData = Object.values(employeeData);

  // Show sample report if requested
  if (showSampleReport) {
    const sampleOrganizationData = {
      organizationName: 'TechCorp Solutions',
      totalEmployees: 250,
      departments: ['Product Development', 'Marketing', 'Sales', 'Operations', 'IT', 'HR']
    };

    const sampleEmployeeData = {
      phase_1: {
        employeeName: 'Sample Employee',
        email: 'sample@techcorp.com',
        teamMemberName: 'Sample Employee',
        onboardingCompleted: true
      },
      phase_2: {
        tasks: [
          { name: 'Email Management', automationDesire: 4, currentEfficiency: 6 },
          { name: 'Report Generation', automationDesire: 5, currentEfficiency: 7 },
          { name: 'Data Analysis', automationDesire: 3, currentEfficiency: 8 }
        ],
        overallAutomationDesire: 4,
        interviewCompleted: true
      }
    };

    return (
      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 text-blue-800">
            <Eye className="h-5 w-5" />
            <span className="font-medium">Sample Report Preview</span>
          </div>
          <p className="text-sm text-blue-700 mt-1">
            This is a sample report showing the type of insights you'll receive after completing the assessment.
          </p>
        </div>
        <ReportsDashboard 
          organizationData={sampleOrganizationData}
          employeeData={sampleEmployeeData}
        />
      </div>
    );
  }

  // Show sample report button for phases where it makes sense
  const showSampleButton = currentPhase >= 1 && onViewSampleReport;

  const renderPhaseContent = () => {
    switch (currentPhase) {
      case 0:
        return (
          <OrganizationSetup 
            onComplete={onComplete}
          />
        );
      
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return (
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 border border-blue-100">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're putting the finishing touches on the next phases of the AI readiness assessment. 
                Your organization setup has been captured and we'll notify you when the full assessment is ready.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-sm text-gray-500 mb-2">What you can expect:</p>
                <ul className="text-sm text-gray-700 space-y-2 text-left">
                  <li>• Employee onboarding and profile upload</li>
                  <li>• AI-powered conversational interviews</li>
                  <li>• Task analysis and automation scoring</li>
                  <li>• Comprehensive reports and action plans</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Unknown phase</div>;
    }
  };

  return (
    <div className="space-y-6">
      {showSampleButton && (
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            onClick={onViewSampleReport}
            className="flex items-center gap-2 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
          >
            <Eye className="h-4 w-4" />
            View Sample Report
          </Button>
        </div>
      )}
      
      {renderPhaseContent()}
    </div>
  );
};

export default PhaseRenderer;
