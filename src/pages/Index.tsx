
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OrganizationSetup from '@/components/interview/OrganizationSetup';
import EmployeeOnboarding from '@/components/interview/EmployeeOnboarding';
import InitialInterview from '@/components/interview/InitialInterview';
import DeepDiveInterview from '@/components/interview/DeepDiveInterview';
import RefinementInterview from '@/components/interview/RefinementInterview';
import ValidationInterview from '@/components/interview/ValidationInterview';
import ReportsDashboard from '@/components/reports/ReportsDashboard';
import { Building, Users, MessageSquare, Brain, BarChart3, CheckCircle, Clock, Play } from 'lucide-react';
import { OrganizationData, InterviewPhaseData } from '@/types/interview';

const Index = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [organizationData, setOrganizationData] = useState<OrganizationData | null>(null);
  const [employeeData, setEmployeeData] = useState<Record<string, InterviewPhaseData>>({});
  const [interviewProgress, setInterviewProgress] = useState<Record<number, string>>({});

  const phases = [
    {
      id: 0,
      title: "Organization Setup",
      description: "Define organization scope and parameters",
      icon: Building,
      status: "active",
      component: OrganizationSetup,
      humanInput: false
    },
    {
      id: 1,
      title: "Team Onboarding",
      description: "Consent and process introduction",
      icon: Users,
      status: "pending",
      component: EmployeeOnboarding,
      humanInput: true
    },
    {
      id: 2,
      title: "Initial Exploration",
      description: "Conversational mini-interview and task discovery",
      icon: MessageSquare,
      status: "pending",
      component: InitialInterview,
      humanInput: true
    },
    {
      id: 3,
      title: "Deep Dive Assessment",
      description: "Task identification and HAS/automation rating",
      icon: Brain,
      status: "pending",
      component: DeepDiveInterview,
      humanInput: true
    },
    {
      id: 4,
      title: "Refinement & Scenarios",
      description: "Report review and scenario exploration",
      icon: MessageSquare,
      status: "pending",
      component: RefinementInterview,
      humanInput: true
    },
    {
      id: 5,
      title: "Validation & Planning",
      description: "Final validation and action planning",
      icon: CheckCircle,
      status: "pending",
      component: ValidationInterview,
      humanInput: true
    },
    {
      id: 6,
      title: "Reports & Analysis",
      description: "Multi-level reporting and insights",
      icon: BarChart3,
      status: "pending",
      component: ReportsDashboard,
      humanInput: false
    }
  ];

  const handlePhaseComplete = (phaseId: number, data: any) => {
    console.log(`Phase ${phaseId} completed with data:`, data);
    
    if (phaseId === 0) {
      setOrganizationData(data);
    } else {
      setEmployeeData(prev => ({ ...prev, [`phase_${phaseId}`]: data }));
    }
    
    setInterviewProgress(prev => ({ ...prev, [phaseId]: 'completed' }));
    
    // Auto-advance to next phase
    if (phaseId < phases.length - 1) {
      setCurrentPhase(phaseId + 1);
    }
  };

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

  const CurrentComponent = phases[currentPhase]?.component;

  // Convert employeeData to array for phases that expect previousPhaseData array
  const previousPhaseDataArray = Object.values(employeeData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Readiness Interview Process
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Multi-Stage, AI-Native User Flow for Systematic Assessment of Organizational AI Readiness
          </p>
        </div>

        {/* Progress Overview */}
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
                    onClick={() => status !== 'pending' && setCurrentPhase(phase.id)}
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

        {/* Main Content */}
        <Card className="min-h-[600px]">
          <CardHeader>
            <div className="flex items-center gap-3">
              {React.createElement(phases[currentPhase].icon, { 
                className: "h-6 w-6 text-blue-600" 
              })}
              <div>
                <CardTitle>{phases[currentPhase].title}</CardTitle>
                <CardDescription>{phases[currentPhase].description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {CurrentComponent && (
              <>
                {currentPhase === 1 ? (
                  <CurrentComponent
                    onComplete={(data: any) => handlePhaseComplete(currentPhase, data)}
                    organizationData={organizationData}
                    employeeData={employeeData}
                  />
                ) : (
                  <CurrentComponent
                    onComplete={(data: any) => handlePhaseComplete(currentPhase, data)}
                    organizationData={organizationData}
                    employeeData={employeeData}
                    previousPhaseData={currentPhase === 5 ? previousPhaseDataArray : employeeData[`phase_${currentPhase - 1}`]}
                  />
                )}
              </>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <Button 
            variant="outline" 
            onClick={() => setCurrentPhase(Math.max(0, currentPhase - 1))}
            disabled={currentPhase === 0}
          >
            Previous Phase
          </Button>
          
          <div className="text-sm text-gray-600">
            Phase {currentPhase + 1} of {phases.length}
          </div>
          
          <Button 
            variant="outline"
            onClick={() => setCurrentPhase(Math.min(phases.length - 1, currentPhase + 1))}
            disabled={currentPhase === phases.length - 1}
          >
            Next Phase
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
