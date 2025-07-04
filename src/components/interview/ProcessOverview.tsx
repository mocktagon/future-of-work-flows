
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Building, CheckCircle, Play, Clock } from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  humanInput: boolean;
}

interface ProcessOverviewProps {
  phases: Phase[];
  currentPhase: number;
  onPhaseClick: (phaseId: number) => void;
}

const ProcessOverview: React.FC<ProcessOverviewProps> = ({ phases, currentPhase, onPhaseClick }) => {
  const getPhaseStatus = (phaseId: number) => {
    if (phaseId < currentPhase) return 'completed';
    if (phaseId === currentPhase) return 'active';
    return 'pending';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'active': return <Play className="h-5 w-5 text-blue-600" />;
      default: return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'active': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="h-6 w-6 text-blue-600" />
          Process Overview
        </CardTitle>
        <CardDescription>
          Track progress through the AI readiness assessment workflow
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Overall Progress</span>
            <span className="text-sm text-gray-600">
              {currentPhase + 1} of {phases.length} phases
            </span>
          </div>
          <Progress value={(currentPhase / (phases.length - 1)) * 100} className="h-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {phases.map((phase) => {
            const status = getPhaseStatus(phase.id);
            const IconComponent = phase.icon;
            
            return (
              <Card 
                key={phase.id} 
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  status === 'active' ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
                onClick={() => status !== 'pending' && onPhaseClick(phase.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 relative">
                      <IconComponent className={`h-6 w-6 ${
                        status === 'completed' ? 'text-green-600' : 
                        status === 'active' ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      {phase.humanInput && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white" 
                             title="Requires human input" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {phase.title}
                        </h3>
                        {getStatusIcon(status)}
                      </div>
                      <p className="text-xs text-gray-600 mb-2">
                        {phase.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge className={`text-xs ${getStatusColor(status)}`}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </Badge>
                        {phase.humanInput && (
                          <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-300">
                            Human Input
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessOverview;
