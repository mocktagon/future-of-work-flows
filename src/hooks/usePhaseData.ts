
import { useState } from 'react';
import { OrganizationData, InterviewPhaseData } from '@/types/interview';

export const usePhaseData = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [organizationData, setOrganizationData] = useState<OrganizationData | null>(null);
  const [employeeData, setEmployeeData] = useState<Record<string, InterviewPhaseData>>({});
  const [interviewProgress, setInterviewProgress] = useState<Record<number, string>>({});
  const [showSampleReport, setShowSampleReport] = useState(false);

  const handlePhaseComplete = (data: any) => {
    console.log(`Phase ${currentPhase} completed with data:`, data);
    
    if (currentPhase === 0) {
      setOrganizationData(data);
    } else {
      setEmployeeData(prev => ({ ...prev, [`phase_${currentPhase}`]: data }));
    }
    
    setInterviewProgress(prev => ({ ...prev, [currentPhase]: 'completed' }));
    
    // Auto-advance to next phase
    if (currentPhase < 6) { // 6 is the last phase index
      setCurrentPhase(currentPhase + 1);
    }
  };

  const handleViewSampleReport = () => {
    setShowSampleReport(true);
  };

  const handleBackToAssessment = () => {
    setShowSampleReport(false);
  };

  const navigateToPhase = (phaseId: number) => {
    setShowSampleReport(false);
    setCurrentPhase(phaseId);
  };

  const navigatePrevious = () => {
    if (showSampleReport) {
      setShowSampleReport(false);
    } else {
      setCurrentPhase(Math.max(0, currentPhase - 1));
    }
  };

  const navigateNext = () => {
    setShowSampleReport(false);
    setCurrentPhase(Math.min(6, currentPhase + 1));
  };

  return {
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
  };
};
