import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Circle, Square, CheckCircle, Shield, MessageSquare, Users } from 'lucide-react';
import ProgressIndicator from './ProgressIndicator';
import OnboardingNavigation from './OnboardingNavigation';
import OnboardingStep from './OnboardingStep';
import OnboardingStepContent from './onboarding/OnboardingStepContent';

interface EmployeeOnboardingProps {
  onComplete: (data: any) => void;
}

const EmployeeOnboarding: React.FC<EmployeeOnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [teamMemberName, setTeamMemberName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);

  const onboardingSteps = [
    {
      id: 'welcome',
      title: 'Welcome to AI Readiness Assessment',
      icon: Users,
      content: {
        subtitle: 'Help us understand your organization\'s AI readiness',
        description: 'This assessment will help identify the best opportunities for AI integration in your teams\' daily work.',
        details: [
          'We\'ll conduct 4 short, conversational interviews over the next steps',
          'Each interview focuses on different aspects of your work',
          'Your responses will be used to create a personalized AI readiness report',
          'The entire process takes about 30-45 minutes total'
        ]
      }
    },
    {
      id: 'consent',
      title: 'Consent & Privacy',
      icon: Shield,
      content: {
        subtitle: 'Your privacy is our priority',
        description: 'We collect only the information necessary to provide you with valuable insights.',
        details: [
          'Your responses are anonymized and aggregated',
          'No personal information is shared with third parties',
          'You can withdraw from the assessment at any time',
          'Data is used solely for generating your AI readiness report'
        ]
      }
    },
    {
      id: 'instructions',
      title: 'How It Works',
      icon: MessageSquare,
      content: {
        subtitle: 'Simple, conversational approach',
        description: 'Our AI interviewer will guide you through each step of the assessment process.',
        details: [
          'Speak naturally - our AI understands conversational responses',
          'Be honest about your current processes and challenges',
          'There are no right or wrong answers',
          'The more detailed your responses, the better your recommendations'
        ]
      }
    }
  ];

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Onboarding complete, submit data
      const onboardingData = {
        teamMemberName,
        organizationName,
        consentGiven,
        onboardingCompleted: true,
        completedAt: new Date().toISOString()
      };
      onComplete(onboardingData);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };

  const canProceed = (() => {
    switch (currentStep) {
      case 0:
        return teamMemberName.trim() !== '' && organizationName.trim() !== '';
      case 1:
        return consentGiven === true;
      case 2:
        return true;
      default:
        return false;
    }
  })();

  return (
    <div className="max-w-4xl mx-auto">
      <ProgressIndicator 
        currentStep={currentStep}
        totalSteps={onboardingSteps.length}
        title="Team Onboarding"
      />

      <OnboardingStep
        title={onboardingSteps[currentStep].title}
        icon={onboardingSteps[currentStep].icon}
        organizationName={organizationName}
      >
        <OnboardingStepContent 
          step={onboardingSteps[currentStep]}
          teamMemberName={teamMemberName}
          setTeamMemberName={setTeamMemberName}
          consentGiven={consentGiven}
          setConsentGiven={setConsentGiven}
          organizationName={organizationName}
          setOrganizationName={setOrganizationName}
        />
      </OnboardingStep>

      <OnboardingNavigation
        currentStep={currentStep}
        totalSteps={onboardingSteps.length}
        canProceed={canProceed}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default EmployeeOnboarding;
