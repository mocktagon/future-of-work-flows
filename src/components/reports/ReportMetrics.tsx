import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

interface ReportMetricsProps {
  summaryData: {
    overallReadinessScore: number;
    totalTasksAnalyzed: number;
    automationOpportunities: number;
    teamReadinessLevel: string;
    priorityActions: number;
    estimatedEfficiencyGain: string;
  };
}

const ReportMetrics = ({ summaryData }: ReportMetricsProps) => {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-900">
          <TrendingUp className="h-6 w-6" />
          Key Findings at a Glance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-700 mb-1">
              {summaryData.overallReadinessScore}/10
            </div>
            <div className="text-xs text-blue-600">Readiness Score</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-700 mb-1">
              {summaryData.totalTasksAnalyzed}
            </div>
            <div className="text-xs text-blue-600">Tasks Analyzed</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-green-700 mb-1">
              {summaryData.automationOpportunities}
            </div>
            <div className="text-xs text-green-600">Quick Wins</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-700 mb-1">
              {summaryData.estimatedEfficiencyGain}
            </div>
            <div className="text-xs text-purple-600">Efficiency Gain</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-700 mb-1">
              {summaryData.priorityActions}
            </div>
            <div className="text-xs text-orange-600">Priority Actions</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-700 mb-1">
              {summaryData.teamReadinessLevel}
            </div>
            <div className="text-xs text-indigo-600">Team Readiness</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportMetrics;