
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProcessOverview from '@/components/interview/ProcessOverview';
import PhaseNavigation from '@/components/interview/PhaseNavigation';
import PhaseRenderer from '@/components/interview/PhaseRenderer';
import { usePhaseData } from '@/hooks/usePhaseData';
import { phases } from '@/data/phaseConfig';

const Index = () => {
  const {
    currentPhase,
    organizationData,
    employeeData,
    handlePhaseComplete,
    navigateToPhase,
    navigatePrevious,
    navigateNext
  } = usePhaseData();

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
        <ProcessOverview 
          phases={phases}
          currentPhase={currentPhase}
          onPhaseClick={navigateToPhase}
        />

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
            <PhaseRenderer
              currentPhase={currentPhase}
              onComplete={handlePhaseComplete}
              organizationData={organizationData}
              employeeData={employeeData}
            />
          </CardContent>
        </Card>

        {/* Navigation */}
        <PhaseNavigation
          currentPhase={currentPhase}
          totalPhases={phases.length}
          onPrevious={navigatePrevious}
          onNext={navigateNext}
        />
      </div>
    </div>
  );
};

export default Index;
