
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Star, MessageCircle, Mic, CheckCircle } from 'lucide-react';
import { TaskData, InterviewPhaseData } from '@/types/interview';

interface DeepDiveInterviewProps {
  onComplete: (data: any) => void;
  previousPhaseData?: InterviewPhaseData;
}

const DeepDiveInterview: React.FC<DeepDiveInterviewProps> = ({ onComplete, previousPhaseData }) => {
  const handleComplete = () => {
    // Generate dummy task data
    const dummyTaskData = {
      'Email Management': {
        task: 'Email Management',
        automationDesire: 4,
        humanAgencyScale: 1,
        timePercentage: 25,
        familiarityLevel: 2,
        automationReason: 'Very repetitive and time-consuming. AI could handle routine responses and prioritization.',
        hasReason: 'Most emails can be processed automatically with minimal human oversight.',
        completedAt: new Date().toISOString()
      },
      'Project Planning': {
        task: 'Project Planning',
        automationDesire: 2,
        humanAgencyScale: 4,
        timePercentage: 30,
        familiarityLevel: 2,
        automationReason: 'Requires strategic thinking and stakeholder understanding that AI might miss.',
        hasReason: 'Critical decisions and stakeholder relationships need human judgment and context.',
        completedAt: new Date().toISOString()
      },
      'Status Reporting': {
        task: 'Status Reporting',
        automationDesire: 4,
        humanAgencyScale: 2,
        timePercentage: 20,
        familiarityLevel: 2,
        automationReason: 'Data compilation and formatting is very repetitive and could be automated.',
        hasReason: 'Some human review needed for context and exceptions, but mostly automatable.',
        completedAt: new Date().toISOString()
      },
      'Team Mentoring': {
        task: 'Team Mentoring',
        automationDesire: 0,
        humanAgencyScale: 4,
        timePercentage: 15,
        familiarityLevel: 2,
        automationReason: 'This is purely human work that requires empathy and personal connection.',
        hasReason: 'Personal development and relationship building cannot be delegated to AI.',
        completedAt: new Date().toISOString()
      },
      'Data Analysis': {
        task: 'Data Analysis',
        automationDesire: 3,
        humanAgencyScale: 3,
        timePercentage: 10,
        familiarityLevel: 1,
        automationReason: 'AI could help with pattern recognition, but interpretation needs human insight.',
        hasReason: 'Equal partnership where AI processes data and human provides business context.',
        completedAt: new Date().toISOString()
      }
    };

    // Analyze the task data
    const tasks = Object.values(dummyTaskData);
    const greenLightTasks = tasks.filter(t => t.automationDesire >= 4);
    const redLightTasks = tasks.filter(t => t.automationDesire <= 2);
    const rndOpportunityTasks = tasks.filter(t => t.automationDesire >= 3 && t.humanAgencyScale >= 3);
    
    const avgAutomationDesire = tasks.reduce((sum, t) => sum + t.automationDesire, 0) / tasks.length;
    const avgHumanAgencyScale = tasks.reduce((sum, t) => sum + t.humanAgencyScale, 0) / tasks.length;
    
    const hasDistribution = [1, 2, 3, 4, 5].map(level => 
      tasks.filter(t => t.humanAgencyScale === level).length
    );
    const dominantHAS = hasDistribution.indexOf(Math.max(...hasDistribution)) + 1;

    const analysisResults = {
      taskCategorization: {
        greenLight: greenLightTasks,
        redLight: redLightTasks,
        rndOpportunity: rndOpportunityTasks,
        lowPriority: redLightTasks
      },
      averages: {
        automationDesire: avgAutomationDesire,
        humanAgencyScale: avgHumanAgencyScale
      },
      dominantHAS,
      totalTasks: tasks.length,
      completionRate: 100
    };

    onComplete({
      taskRatings: dummyTaskData,
      analysisResults,
      interviewCompleted: true,
      completedAt: new Date().toISOString()
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Deep Dive & Task Assessment Interview
        </h2>
        <p className="text-gray-600">
          Audio-based detailed assessment of tasks with automation preferences
        </p>
        <Badge variant="outline" className="mt-2">
          AI Interviewer Ready
        </Badge>
      </div>

      {/* Interview Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Star className="h-6 w-6 text-blue-600" />
            AI Audio Task Assessment
          </CardTitle>
          <CardDescription>
            Conversational assessment of your tasks and AI collaboration preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* AI Interviewer Status */}
          <Alert>
            <Mic className="h-4 w-4" />
            <AlertDescription className="text-base">
              I'll guide you through a detailed discussion of your key tasks, asking about your automation preferences 
              and ideal level of human involvement for each one.
            </AlertDescription>
          </Alert>

          {/* Interview Topics */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Assessment Areas:</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Task identification and validation</li>
              <li>• Automation desire rating (1-5 scale)</li>
              <li>• Human Agency Scale assessment</li>
              <li>• Time allocation and familiarity levels</li>
              <li>• Reasoning behind preferences</li>
            </ul>
          </div>

          {/* Sample Task Analysis */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Sample Task Analysis (Demo Data)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="font-medium text-green-800">High Automation Desire:</span>
                  <ul className="ml-4 mt-1 text-green-700">
                    <li>• Email Management</li>
                    <li>• Status Reporting</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-red-800">Low Automation Desire:</span>
                  <ul className="ml-4 mt-1 text-red-700">
                    <li>• Team Mentoring</li>
                    <li>• Project Planning</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="font-medium text-blue-800">R&D Opportunities:</span>
                  <ul className="ml-4 mt-1 text-blue-700">
                    <li>• Data Analysis (collaborative)</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-gray-800">Average Ratings:</span>
                  <ul className="ml-4 mt-1 text-gray-700">
                    <li>• Automation Desire: 2.6/5</li>
                    <li>• Human Agency: 2.8/5</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Button */}
      <div className="flex justify-center">
        <Button onClick={handleComplete} size="lg" className="px-8">
          Complete Task Assessment
        </Button>
      </div>
    </div>
  );
};

export default DeepDiveInterview;
