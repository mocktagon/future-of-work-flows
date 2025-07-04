
import React from 'react';
import { Button } from '@/components/ui/button';

interface PhaseNavigationProps {
  currentPhase: number;
  totalPhases: number;
  onPrevious: () => void;
  onNext: () => void;
}

const PhaseNavigation: React.FC<PhaseNavigationProps> = ({ 
  currentPhase, 
  totalPhases, 
  onPrevious, 
  onNext 
}) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <Button 
        variant="outline" 
        onClick={onPrevious}
        disabled={currentPhase === 0}
      >
        Previous Phase
      </Button>
      
      <div className="text-sm text-gray-600">
        Phase {currentPhase + 1} of {totalPhases}
      </div>
      
      <Button 
        variant="outline"
        onClick={onNext}
        disabled={currentPhase === totalPhases - 1}
      >
        Next Phase
      </Button>
    </div>
  );
};

export default PhaseNavigation;
