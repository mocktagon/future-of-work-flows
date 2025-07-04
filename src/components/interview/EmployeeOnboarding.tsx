
import React, { useState } from 'react';
import { MessageCircle, Clock, Shield, Users } from 'lucide-react';
import { OrganizationData, EmployeeData } from '@/types/interview';
import ProgressIndicator from './ProgressIndicator';
import OnboardingStep from './OnboardingStep';
import OnboardingNavigation from './OnboardingNavigation';
import OnboardingStepContent from './onboarding/OnboardingStepContent';

interface EmployeeOnboardingProps {
  onComplete: (data: EmployeeData) => void;
  organizationData?: OrganizationData;
}

interface EmployeeRecord {
  name: string;
  email: string;
}

const EmployeeOnboarding: React.FC<EmployeeOnboardingProps> = ({ onComplete, organizationData }) => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [employeeList, setEmployeeList] = useState<EmployeeRecord[]>([]);
  const [hasConsented, setHasConsented] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const onboardingSteps = [
    {
      title: "Welcome to Your AI Readiness Interview",
      icon: MessageCircle,
    },
    {
      title: "Process Overview",
      icon: Clock,
    },
    {
      title: "Privacy & Confidentiality",
      icon: Shield,
    },
    {
      title: "Consent & Participation",
      icon: Users,
    }
  ];

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const selectedEmployeeData = employeeList.find(emp => emp.name === selectedEmployee);
      onComplete({
        employeeName: selectedEmployee,
        consentGiven: hasConsented,
        onboardingCompleted: true,
        completedAt: new Date().toISOString(),
        ...(selectedEmployeeData && { email: selectedEmployeeData.email })
      });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    if (currentStep === 0) return selectedEmployee.trim().length > 0;
    if (currentStep === onboardingSteps.length - 1) return hasConsented;
    return true;
  };

  const currentStepData = onboardingSteps[currentStep];

  return (
    <div className="max-w-4xl mx-auto">
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={onboardingSteps.length}
        title="Employee Onboarding"
      />

      <OnboardingStep
        title={currentStepData.title}
        icon={currentStepData.icon}
        organizationName={organizationData?.organizationName}
      >
        <OnboardingStepContent
          stepIndex={currentStep}
          employeeList={employeeList}
          selectedEmployee={selectedEmployee}
          hasConsented={hasConsented}
          organizationName={organizationData?.organizationName}
          onEmployeeListChange={setEmployeeList}
          onSelectedEmployeeChange={setSelectedEmployee}
          onConsentChange={setHasConsented}
        />
      </OnboardingStep>

      <OnboardingNavigation
        currentStep={currentStep}
        totalSteps={onboardingSteps.length}
        canProceed={canProceed()}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default EmployeeOnboarding;
