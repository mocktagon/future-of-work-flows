
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  title: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  currentStep, 
  totalSteps, 
  title 
}) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <Badge variant="outline">
          Step {currentStep + 1} of {totalSteps}
        </Badge>
      </div>
      
      <div className="flex space-x-2">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded ${
              index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
