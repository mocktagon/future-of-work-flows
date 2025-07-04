
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
  // Phase 0 (OrganizationSetup) - only needs onComplete
  if (currentPhase === 0) {
    return <OrganizationSetup onComplete={onComplete} />;
  }

  // Phase 1 (EmployeeOnboarding) - only needs onComplete
  if (currentPhase === 1) {
    return <EmployeeOnboarding onComplete={onComplete} />;
  }

  // Phase 2 (InitialInterview) - needs onComplete, organizationData, and previousPhaseData
  if (currentPhase === 2) {
    const previousPhaseData = employeeData[`phase_${currentPhase - 1}`];
    return <InitialInterview 
      onComplete={onComplete}
      organizationData={organizationData}
      previousPhaseData={previousPhaseData} 
    />;
  }

  // Phase 3 (DeepDiveInterview) - needs onComplete and previousPhaseData
  if (currentPhase === 3) {
    const previousPhaseData = employeeData[`phase_${currentPhase - 1}`];
    return <DeepDiveInterview 
      onComplete={onComplete}
      previousPhaseData={previousPhaseData} 
    />;
  }

  // Phase 4 (RefinementInterview) - needs onComplete and previousPhaseData
  if (currentPhase === 4) {
    const previousPhaseData = employeeData[`phase_${currentPhase - 1}`];
    return <RefinementInterview 
      onComplete={onComplete}
      previousPhaseData={previousPhaseData} 
    />;
  }

  // Phase 5 (ValidationInterview) - needs onComplete, organizationData, and previousPhaseData array
  if (currentPhase === 5) {
    const previousPhaseDataArray = Object.values(employeeData);
    return <ValidationInterview 
      onComplete={onComplete}
      organizationData={organizationData}
      previousPhaseData={previousPhaseDataArray} 
    />;
  }

  // Phase 6 (ReportsDashboard) - needs organizationData, employeeData, and onComplete
  if (currentPhase === 6) {
    return <ReportsDashboard 
      organizationData={organizationData}
      employeeData={employeeData}
      onComplete={onComplete} 
    />;
  }

  return null;
};

export default PhaseRenderer;
