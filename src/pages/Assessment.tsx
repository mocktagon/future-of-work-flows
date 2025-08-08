
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PhaseRenderer } from '@/components/interview/PhaseRenderer';
import { useAssessmentFlow } from '@/hooks/useAssessmentFlow';

const Assessment = () => {
  const navigate = useNavigate();
  const {
    currentPhase,
    organizationData,
    employeeData,
    interviewProgress,
    showSampleReport,
    handlePhaseComplete,
    handleViewSampleReport,
    handleBackToAssessment,
    navigateToPhase,
    navigatePrevious,
    navigateNext
  } = useAssessmentFlow();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => showSampleReport ? handleBackToAssessment() : navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                {showSampleReport ? 'Back to Assessment' : 'Back to Home'}
              </Button>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold text-gray-900">
                {showSampleReport ? 'Sample Report' : 'AI Readiness Assessment'}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <PhaseRenderer
          currentPhase={currentPhase}
          organizationData={organizationData}
          employeeData={employeeData}
          onComplete={handlePhaseComplete}
          onViewSampleReport={handleViewSampleReport}
          showSampleReport={showSampleReport}
        />
      </div>
    </div>
  );
};

export default Assessment;
