
import React from 'react';
import { Button } from '@/components/ui/button';

interface OnboardingNavigationProps {
  currentStep: number;
  totalSteps: number;
  canProceed: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const OnboardingNavigation: React.FC<OnboardingNavigationProps> = ({
  currentStep,
  totalSteps,
  canProceed,
  onPrevious,
  onNext
}) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <Button 
        variant="outline" 
        onClick={onPrevious}
        disabled={currentStep === 0}
      >
        Previous
      </Button>
      
      <div className="text-sm text-gray-600">
        {currentStep + 1} of {totalSteps}
      </div>
      
      <Button 
        onClick={onNext}
        disabled={!canProceed}
      >
        {currentStep === totalSteps - 1 ? 'Begin Assessment' : 'Continue'}
      </Button>
    </div>
  );
};

export default OnboardingNavigation;
