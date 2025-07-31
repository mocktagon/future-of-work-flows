import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, TrendingUp } from 'lucide-react';

const QuickWins = () => {
  const readyTasks = ['Email Management', 'Report Generation', 'Data Entry', 'Scheduling'];
  
  return (
    <Card className="bg-green-50 border-green-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-900">
          <CheckCircle className="h-5 w-5" />
          Quick Wins - Start Here
        </CardTitle>
        <CardDescription className="text-green-700">
          High-impact, low-effort opportunities to begin your AI journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-medium text-green-900">Ready for Automation</h4>
            <div className="space-y-2">
              {readyTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-white rounded border border-green-200">
                  <span className="text-sm text-green-800">{task}</span>
                  <Badge className="bg-green-100 text-green-700">Ready</Badge>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-green-900">Expected Benefits</h4>
            <div className="space-y-2 text-sm text-green-800">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Save 8-12 hours per week per team member</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Reduce errors by 60-80%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Improve job satisfaction scores</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickWins;