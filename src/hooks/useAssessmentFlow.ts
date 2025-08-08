import { useState, useCallback } from 'react';
import { OrganizationData, InterviewPhaseData } from '@/types/interview';
import { phases } from '@/data/phaseConfig';

export const useAssessmentFlow = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [organizationData, setOrganizationData] = useState<OrganizationData | null>(null);
  const [employeeData, setEmployeeData] = useState<Record<string, InterviewPhaseData>>({});
  const [interviewProgress, setInterviewProgress] = useState<Record<number, string>>({});
  const [showSampleReport, setShowSampleReport] = useState(false);

  const handlePhaseComplete = useCallback((data: any) => {
    console.log(`Phase ${currentPhase} completed with data:`, data);
    
    if (currentPhase === 0) {
      setOrganizationData(data);
    } else {
      setEmployeeData(prev => ({ ...prev, [`phase_${currentPhase}`]: data }));
    }
    
    setInterviewProgress(prev => ({ ...prev, [currentPhase]: 'completed' }));
    
    // Auto-advance to next phase if not the last phase
    if (currentPhase < phases.length - 1) {
      setCurrentPhase(currentPhase + 1);
    }
  }, [currentPhase]);

  const handleViewSampleReport = useCallback(() => {
    setShowSampleReport(true);
  }, []);

  const handleBackToAssessment = useCallback(() => {
    setShowSampleReport(false);
  }, []);

  const navigateToPhase = useCallback((phaseId: number) => {
    if (phaseId >= 0 && phaseId < phases.length) {
      setShowSampleReport(false);
      setCurrentPhase(phaseId);
    }
  }, []);

  const navigatePrevious = useCallback(() => {
    if (showSampleReport) {
      setShowSampleReport(false);
    } else {
      setCurrentPhase(Math.max(0, currentPhase - 1));
    }
  }, [showSampleReport, currentPhase]);

  const navigateNext = useCallback(() => {
    setShowSampleReport(false);
    setCurrentPhase(Math.min(phases.length - 1, currentPhase + 1));
  }, [currentPhase]);

  const resetAssessment = useCallback(() => {
    setCurrentPhase(0);
    setOrganizationData(null);
    setEmployeeData({});
    setInterviewProgress({});
    setShowSampleReport(false);
  }, []);

  const canNavigateToPhase = useCallback((phaseId: number) => {
    // Can navigate to phase 0 or any completed phase + 1
    return phaseId === 0 || interviewProgress[phaseId - 1] === 'completed';
  }, [interviewProgress]);

  return {
    // State
    currentPhase,
    organizationData,
    employeeData,
    interviewProgress,
    showSampleReport,
    
    // Actions
    handlePhaseComplete,
    handleViewSampleReport,
    handleBackToAssessment,
    navigateToPhase,
    navigatePrevious,
    navigateNext,
    resetAssessment,
    
    // Computed values
    canNavigateToPhase,
    isLastPhase: currentPhase === phases.length - 1,
    progressPercentage: (Object.keys(interviewProgress).length / phases.length) * 100
  };
};