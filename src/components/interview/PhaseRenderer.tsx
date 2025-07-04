
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

  // Phase 0 (OrganizationSetup) - only needs onComplete
  if (currentPhase === 0) {
    return <CurrentComponent onComplete={onComplete} />;
  }

  // Phase 1 (EmployeeOnboarding) - needs organizationData, employeeData, and onComplete
  if (currentPhase === 1) {
    return <CurrentComponent 
      organizationData={organizationData}
      employeeData={employeeData}
      onComplete={onComplete} 
    />;
  }

  // Phase 6 (ReportsDashboard) - needs organizationData, employeeData, and onComplete
  if (currentPhase === 6) {
    return <CurrentComponent 
      organizationData={organizationData}
      employeeData={employeeData}
      onComplete={onComplete} 
    />;
  }

  // Phase 5 (ValidationInterview) - needs all props including previousPhaseData array
  if (currentPhase === 5) {
    const previousPhaseDataArray = Object.values(employeeData);
    return <ValidationInterview 
      organizationData={organizationData}
      employeeData={employeeData}
      onComplete={onComplete}
      previousPhaseData={previousPhaseDataArray} 
    />;
  }

  // Phases 2, 3, 4 (Interview phases) - need all props including single previousPhaseData
  const previousPhaseData = employeeData[`phase_${currentPhase - 1}`];
  
  if (currentPhase === 2) {
    return <InitialInterview 
      organizationData={organizationData}
      employeeData={employeeData}
      onComplete={onComplete}
      previousPhaseData={previousPhaseData} 
    />;
  }
  
  if (currentPhase === 3) {
    return <DeepDiveInterview 
      organizationData={organizationData}
      employeeData={employeeData}
      onComplete={onComplete}
      previousPhaseData={previousPhaseData} 
    />;
  }
  
  if (currentPhase === 4) {
    return <RefinementInterview 
      organizationData={organizationData}
      employeeData={employeeData}
      onComplete={onComplete}
      previousPhaseData={previousPhaseData} 
    />;
  }

  return null;
};

export default PhaseRenderer;
