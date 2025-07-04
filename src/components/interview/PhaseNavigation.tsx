
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCcw, FastForward } from 'lucide-react';

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
  const isFirstPhase = currentPhase === 0;
  const isLastPhase = currentPhase === totalPhases - 1;
  
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-xl p-6">
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          onClick={onPrevious}
          disabled={isFirstPhase}
          className={`
            flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300
            ${isFirstPhase 
              ? 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed' 
              : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 hover:border-gray-400 shadow-md hover:shadow-lg'
            }
          `}
        >
          <RotateCcw className="h-4 w-4" />
          Previous Phase
        </Button>
        
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-500 mb-1">Current Phase</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {currentPhase + 1}
            </div>
          </div>
          
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          
          <div className="text-center">
            <div className="text-sm font-medium text-gray-500 mb-1">Total Phases</div>
            <div className="text-2xl font-bold text-gray-700">
              {totalPhases}
            </div>
          </div>
        </div>
        
        <Button 
          variant="outline"
          onClick={onNext}
          disabled={isLastPhase}
          className={`
            flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300
            ${isLastPhase 
              ? 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
            }
          `}
        >
          Next Phase
          <FastForward className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: totalPhases }, (_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index <= currentPhase 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                : 'bg-gray-300'
              }
              ${index === currentPhase ? 'scale-150' : ''}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default PhaseNavigation;
