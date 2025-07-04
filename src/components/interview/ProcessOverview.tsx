
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Building, CheckCircle, Play, Clock, Zap, User, Bot } from 'lucide-react';

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
      case 'completed': return <CheckCircle className="h-4 w-4 text-emerald-600" />;
      case 'active': return <Zap className="h-4 w-4 text-blue-600" />;
      default: return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'active': return 'bg-blue-50 text-blue-700 border-blue-200';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  const getCardStyle = (status: string) => {
    switch (status) {
      case 'completed': 
        return 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 shadow-emerald-100/50';
      case 'active': 
        return 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-300 shadow-blue-200/50 ring-2 ring-blue-500/20';
      default: 
        return 'bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200 hover:border-gray-300';
    }
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm shadow-xl border-0 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>
      <div className="relative">
        <CardHeader className="pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Building className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-gray-900">Assessment Journey</CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  Multi-phase AI readiness evaluation workflow
                </CardDescription>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm font-medium text-gray-500 mb-1">Completion</div>
              <div className="text-lg font-bold text-blue-600">
                {currentPhase}/{phases.length - 1}
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-700">Overall Progress</span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round((currentPhase / (phases.length - 1)) * 100)}% Complete
              </span>
            </div>
            <div className="relative">
              <Progress 
                value={(currentPhase / (phases.length - 1)) * 100} 
                className="h-3 bg-gray-200 rounded-full overflow-hidden" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full opacity-20"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {phases.map((phase, index) => {
              const status = getPhaseStatus(phase.id);
              const IconComponent = phase.icon;
              const isClickable = status !== 'pending';
              
              return (
                <Card 
                  key={phase.id} 
                  className={`
                    relative transition-all duration-300 shadow-lg hover:shadow-xl
                    ${getCardStyle(status)}
                    ${isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed'}
                  `}
                  onClick={() => isClickable && onPhaseClick(phase.id)}
                >
                  {/* Connection line for non-last items */}
                  {index < phases.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2 z-10">
                      <div className="absolute right-0 w-2 h-2 bg-gray-400 rounded-full transform translate-x-1 -translate-y-1/2"></div>
                    </div>
                  )}
                  
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 relative">
                        <div className={`
                          w-12 h-12 rounded-xl flex items-center justify-center shadow-lg
                          ${status === 'completed' ? 'bg-gradient-to-br from-emerald-500 to-green-600' : 
                            status === 'active' ? 'bg-gradient-to-br from-blue-500 to-indigo-600' : 
                            'bg-gradient-to-br from-gray-400 to-gray-500'}
                        `}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        
                        {/* Human vs AI indicator */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-white shadow-md flex items-center justify-center">
                          {phase.humanInput ? (
                            <User className="h-3 w-3 text-orange-600" />
                          ) : (
                            <Bot className="h-3 w-3 text-purple-600" />
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-sm font-bold text-gray-900 truncate">
                            {phase.title}
                          </h3>
                          {getStatusIcon(status)}
                        </div>
                        
                        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                          {phase.description}
                        </p>
                        
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge className={`text-xs px-2 py-1 ${getStatusColor(status)}`}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </Badge>
                          
                          <Badge 
                            variant="outline" 
                            className={`text-xs px-2 py-1 ${
                              phase.humanInput 
                                ? 'bg-orange-50 text-orange-700 border-orange-200' 
                                : 'bg-purple-50 text-purple-700 border-purple-200'
                            }`}
                          >
                            {phase.humanInput ? 'Human' : 'AI'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProcessOverview;
