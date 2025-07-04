
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProcessOverview from '@/components/interview/ProcessOverview';
import PhaseNavigation from '@/components/interview/PhaseNavigation';
import PhaseRenderer from '@/components/interview/PhaseRenderer';
import { usePhaseData } from '@/hooks/usePhaseData';
import { phases } from '@/data/phaseConfig';
import { Brain, Sparkles } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced Header with sophisticated typography */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  AI Readiness Assessment
                </h1>
                <p className="text-sm text-gray-500 font-medium">Enterprise Intelligence Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-full border border-emerald-200/50">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">Live Assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Enhanced hero section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Multi-Stage Assessment in Progress</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Systematic Assessment of
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
              Organizational AI Readiness
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Navigate through our comprehensive multi-phase evaluation system designed to map your organization's 
            AI adoption potential with scientific precision and strategic insight.
          </p>
        </div>

        {/* Enhanced Progress Overview */}
        <div className="mb-12">
          <ProcessOverview 
            phases={phases}
            currentPhase={currentPhase}
            onPhaseClick={navigateToPhase}
          />
        </div>

        {/* Enhanced Main Content Card */}
        <div className="relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-3xl transform rotate-1"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-indigo-50/50 to-pink-50/50 rounded-3xl transform -rotate-1"></div>
          
          <Card className="relative backdrop-blur-xl bg-white/90 shadow-2xl border-0 rounded-3xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 opacity-20 rounded-3xl"></div>
            <div className="absolute inset-[1px] bg-white rounded-3xl"></div>
            
            <div className="relative">
              <CardHeader className="pb-8 pt-12 px-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                        {React.createElement(phases[currentPhase].icon, { 
                          className: "h-8 w-8 text-white" 
                        })}
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg">
                        <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{currentPhase + 1}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                        {phases[currentPhase].title}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600 font-medium">
                        {phases[currentPhase].description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-500 mb-1">Progress</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {Math.round(((currentPhase + 1) / phases.length) * 100)}%
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="px-12 pb-12">
                <div className="bg-gradient-to-br from-gray-50/50 to-blue-50/30 rounded-2xl p-8 border border-gray-200/50">
                  <PhaseRenderer
                    currentPhase={currentPhase}
                    onComplete={handlePhaseComplete}
                    organizationData={organizationData}
                    employeeData={employeeData}
                  />
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Enhanced Navigation */}
        <div className="mt-12">
          <PhaseNavigation
            currentPhase={currentPhase}
            totalPhases={phases.length}
            onPrevious={navigatePrevious}
            onNext={navigateNext}
          />
        </div>
      </div>

      {/* Subtle footer */}
      <div className="border-t border-gray-200/50 bg-white/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-gray-500">
            <p>Powered by Advanced AI • Secure & Confidential • Enterprise Grade</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
