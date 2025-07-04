
import React from 'react';
import { OrganizationSetup } from './OrganizationSetup';
import { EmployeeOnboarding } from './EmployeeOnboarding';
import { EmployeeUpload } from './EmployeeUpload';
import { ValidationInterview } from './ValidationInterview';
import { InitialInterview } from './InitialInterview';
import { DeepDiveInterview } from './DeepDiveInterview';
import { RefinementInterview } from './RefinementInterview';
import { OrganizationData, InterviewPhaseData } from '@/types/interview';

interface PhaseRendererProps {
  currentPhase: number;
  organizationData: OrganizationData | null;
  employeeData: Record<string, InterviewPhaseData>;
  onComplete: (data: any) => void;
}

export const PhaseRenderer: React.FC<PhaseRendererProps> = ({
  currentPhase,
  organizationData,
  employeeData,
  onComplete
}) => {
  // Convert employeeData to array for components that expect it
  const previousPhaseData = Object.values(employeeData);

  switch (currentPhase) {
    case 0:
      return (
        <OrganizationSetup 
          onComplete={onComplete}
        />
      );
    
    case 1:
      return (
        <EmployeeOnboarding 
          organizationData={organizationData}
          employeeData={employeeData}
          onComplete={onComplete}
        />
      );
    
    case 2:
      return (
        <EmployeeUpload 
          organizationData={organizationData}
          employeeData={employeeData}
          onComplete={onComplete}
        />
      );
    
    case 3:
      return (
        <ValidationInterview 
          organizationData={organizationData}
          onComplete={onComplete}
          previousPhaseData={previousPhaseData}
        />
      );
    
    case 4:
      return (
        <InitialInterview 
          onComplete={onComplete}
          previousPhaseData={previousPhaseData[0]}
        />
      );
    
    case 5:
      return (
        <DeepDiveInterview 
          employeeData={employeeData}
          onComplete={onComplete}
          previousPhaseData={previousPhaseData[0]}
        />
      );
    
    case 6:
      return (
        <RefinementInterview 
          employeeData={employeeData}
          onComplete={onComplete}
          previousPhaseData={previousPhaseData[0]}
        />
      );
    
    default:
      return <div>Unknown phase</div>;
  }
};
