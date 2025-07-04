import React from 'react';
import OrganizationSetup from '@/components/interview/OrganizationSetup';
import EmployeeOnboarding from '@/components/interview/EmployeeOnboarding';
import InitialInterview from '@/components/interview/InitialInterview';
import DeepDiveInterview from '@/components/interview/DeepDiveInterview';
import RefinementInterview from '@/components/interview/RefinementInterview';
import ValidationInterview from '@/components/interview/ValidationInterview';
import ReportsDashboard from '@/components/reports/ReportsDashboard';
import { OrganizationData, InterviewPhaseData } from '@/types/interview';

interface PhaseRendererProps {
  currentPhase: number;
  onComplete: (data: any) => void;
  organizationData: OrganizationData | null;
  employeeData: Record<string, InterviewPhaseData>;
}

const PhaseRenderer: React.FC<PhaseRendererProps> = ({ 
  currentPhase, 
  onComplete, 
  organizationData, 
  employeeData 
}) => {
  const phases = [
    OrganizationSetup,
    EmployeeOnboarding,
    InitialInterview,
    DeepDiveInterview,
    RefinementInterview,
    ValidationInterview,
    ReportsDashboard
  ];

  const CurrentComponent = phases[currentPhase];
  
  if (!CurrentComponent) return null;

  const baseProps = {
    organizationData,
    employeeData,
    onComplete
  };

  // Components that don't need previousPhaseData at all
  if (currentPhase === 0 || currentPhase === 1 || currentPhase === 6) {
    return <CurrentComponent {...baseProps} />;
  }

  // Phase 5 (ValidationInterview) expects array of previous phase data
  if (currentPhase === 5) {
    const previousPhaseDataArray = Object.values(employeeData);
    return <CurrentComponent {...baseProps} previousPhaseData={previousPhaseDataArray} />;
  }

  // Other phases (2, 3, 4) expect single previous phase data
  const previousPhaseData = employeeData[`phase_${currentPhase - 1}`];
  return <CurrentComponent {...baseProps} previousPhaseData={previousPhaseData} />;
};

export default PhaseRenderer;
