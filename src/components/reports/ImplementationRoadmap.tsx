import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target } from 'lucide-react';

interface RoadmapStep {
  phase: string;
  color: string;
  badgeColor: string;
  actions: string[];
}

interface ImplementationRoadmapProps {
  steps: RoadmapStep[];
}

const ImplementationRoadmap = ({ steps }: ImplementationRoadmapProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-blue-600" />
          Implementation Roadmap
        </CardTitle>
        <CardDescription>
          Your step-by-step plan for AI integration success
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className={`p-4 rounded-lg border ${step.color}`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{step.phase}</h3>
                <Badge className={step.badgeColor}>
                  {step.actions.length} Actions
                </Badge>
              </div>
              <div className="space-y-2">
                {step.actions.map((action, actionIndex) => (
                  <div key={actionIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-current opacity-60" />
                    <span className="text-sm">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImplementationRoadmap;