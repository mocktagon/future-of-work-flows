import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, TrendingUp, Users } from 'lucide-react';
import { OrganizationData, InterviewPhaseData, TaskData } from '@/types/interview';

interface ValidationInterviewProps {
  onComplete: (data: InterviewPhaseData) => void;
  organizationData?: OrganizationData;
  previousPhaseData?: InterviewPhaseData | InterviewPhaseData[];
}

const ValidationInterview: React.FC<ValidationInterviewProps> = ({ 
  onComplete, 
  organizationData, 
  previousPhaseData 
}) => {
  const [feedback, setFeedback] = useState('');
  const [actionPlan, setActionPlan] = useState('');

  // Safely extract task data from previous phases
  const getTaskData = (): TaskData[] => {
    let taskData: Record<string, TaskData> = {};
    
    if (Array.isArray(previousPhaseData)) {
      const phaseWithTasks = previousPhaseData.find(phase => 
        phase && typeof phase === 'object' && 'taskRatings' in phase && phase.taskRatings
      );
      if (phaseWithTasks && 'taskRatings' in phaseWithTasks) {
        taskData = phaseWithTasks.taskRatings || {};
      }
    } else if (previousPhaseData && typeof previousPhaseData === 'object' && 'taskRatings' in previousPhaseData) {
      taskData = previousPhaseData.taskRatings || {};
    }
    
    return Object.values(taskData).filter((task): task is TaskData => 
      task !== null && task !== undefined && typeof task === 'object'
    );
  };

  const tasks = getTaskData();
  const highAutomationTasks = tasks.filter(t => t.automationDesire >= 4);
  const highHASTasks = tasks.filter(t => t.humanAgencyScale >= 3);

  const handleSubmit = () => {
    const data = {
      feedback,
      actionPlan,
      highAutomationTasks,
      highHASTasks
    };
    onComplete(data);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Validation & Planning
          </CardTitle>
          <CardDescription>
            Review the insights and define an action plan.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {tasks.length === 0 ? (
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    <TrendingUp className="h-5 w-5 inline-block mr-1" />
                    High Automation Desire Tasks
                  </h3>
                  {highAutomationTasks.length > 0 ? (
                    <ul className="list-disc pl-5">
                      {highAutomationTasks.map((task, index) => (
                        <li key={index}>{task.task}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No tasks with high automation desire.</p>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    <Users className="h-5 w-5 inline-block mr-1" />
                    High Human Agency Scale Tasks
                  </h3>
                  {highHASTasks.length > 0 ? (
                    <ul className="list-disc pl-5">
                      {highHASTasks.map((task, index) => (
                        <li key={index}>{task.task}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No tasks with high human agency scale.</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback">Overall Feedback</Label>
                <Textarea
                  id="feedback"
                  placeholder="Provide your feedback on the assessment process."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="actionPlan">Action Plan</Label>
                <Textarea
                  id="actionPlan"
                  placeholder="Define the next steps and action plan based on the assessment results."
                  value={actionPlan}
                  onChange={(e) => setActionPlan(e.target.value)}
                />
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Button onClick={handleSubmit}>Complete Validation</Button>
    </div>
  );
};

export default ValidationInterview;
