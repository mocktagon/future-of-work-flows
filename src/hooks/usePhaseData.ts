
import { useState } from 'react';
import { OrganizationData, InterviewPhaseData } from '@/types/interview';

export const usePhaseData = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [organizationData, setOrganizationData] = useState<OrganizationData | null>(null);
  const [employeeData, setEmployeeData] = useState<Record<string, InterviewPhaseData>>({});
  const [interviewProgress, setInterviewProgress] = useState<Record<number, string>>({});

  const handlePhaseComplete = (phaseId: number, data: any) => {
    console.log(`Phase ${phaseId} completed with data:`, data);
    
    if (phaseId === 0) {
      setOrganizationData(data);
    } else {
      setEmployeeData(prev => ({ ...prev, [`phase_${phaseId}`]: data }));
    }
    
    setInterviewProgress(prev => ({ ...prev, [phaseId]: 'completed' }));
    
    // Auto-advance to next phase
    if (phaseId < 6) { // 6 is the last phase index
      setCurrentPhase(phaseId + 1);
    }
  };

  const navigateToPhase = (phaseId: number) => {
    setCurrentPhase(phaseId);
  };

  const navigatePrevious = () => {
    setCurrentPhase(Math.max(0, currentPhase - 1));
  };

  const navigateNext = () => {
    setCurrentPhase(Math.min(6, currentPhase + 1));
  };

  return {
    currentPhase,
    organizationData,
    employeeData,
    interviewProgress,
    handlePhaseComplete,
    navigateToPhase,
    navigatePrevious,
    navigateNext
  };
};
