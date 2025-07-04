
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Triangle, MessageCircle, Mic } from 'lucide-react';
import { OrganizationData, InterviewPhaseData } from '@/types/interview';

interface InitialInterviewProps {
  onComplete: (data: any) => void;
  organizationData?: OrganizationData;
  previousPhaseData?: InterviewPhaseData;
}

const InitialInterview: React.FC<InitialInterviewProps> = ({ onComplete, organizationData, previousPhaseData }) => {
  const employeeName = (previousPhaseData as any)?.employeeName || 'there';

  const handleComplete = () => {
    // Generate dummy data for the interview completion
    const dummyResponses = {
      role_description: "I work as a project manager coordinating between different teams and managing project timelines.",
      main_tasks: "I primarily handle project planning, team meetings, status reporting, and resource allocation.",
      tools_software: "I use Jira, Confluence, Slack, Excel, and PowerPoint for most of my daily work.",
      ai_perceptions: "I think AI could be really helpful for automating routine tasks and generating reports, though I'm concerned about maintaining the human touch in team communication.",
      repetitive_tasks: "Creating weekly status reports and updating project tracking spreadsheets are quite repetitive.",
      enjoyable_tasks: "I really enjoy the strategic planning sessions and mentoring team members - those require a lot of human insight."
    };

    // Simulate AI analysis of responses
    const extractedThemes = {
      commonTasks: ['project planning', 'team meetings', 'status reporting', 'resource allocation'],
      toolsUsed: ['jira', 'confluence', 'slack', 'excel', 'powerpoint'],
      aiSentiment: 'positive',
      repetitiveTasks: ['status reporting', 'spreadsheet updates'],
      valuedTasks: ['strategic planning', 'mentoring'],
      concerns: ['human_touch'],
      collaborationPreferences: 'assistive'
    };

    onComplete({
      responses: dummyResponses,
      extractedThemes,
      interviewCompleted: true,
      completedAt: new Date().toISOString(),
      duration: '15-20 minutes'
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Initial Exploration Interview
        </h2>
        <p className="text-gray-600">
          Audio-based conversational interview to understand your role and discover key tasks
        </p>
        <Badge variant="outline" className="mt-2">
          AI Interviewer Ready
        </Badge>
      </div>

      {/* Interview Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            AI Audio Interviewer
          </CardTitle>
          <CardDescription>
            Our AI interviewer will conduct a conversational audio session with you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* AI Interviewer Status */}
          <Alert>
            <Mic className="h-4 w-4" />
            <AlertDescription className="text-base">
              Hello {employeeName}! I'm ready to begin our conversational interview about your work and AI preferences. 
              This will be an audio-based discussion where I'll ask you questions and you can respond naturally.
            </AlertDescription>
          </Alert>

          {/* Simulated Interview Content */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Interview Topics We'll Cover:</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Your role and daily responsibilities</li>
              <li>• Main tasks you perform regularly</li>
              <li>• Tools and software you use</li>
              <li>• Your thoughts on AI in the workplace</li>
              <li>• Tasks that feel repetitive or low-value</li>
              <li>• Work that you find most meaningful</li>
            </ul>
          </div>

          {/* Dummy Data Preview */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Sample Interview Insights (Demo Data):</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Role:</span>
                <p className="text-gray-600">Project Manager</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Key Tools:</span>
                <p className="text-gray-600">Jira, Slack, Excel</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">AI Sentiment:</span>
                <p className="text-gray-600">Positive - Interested in automation</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Repetitive Tasks:</span>
                <p className="text-gray-600">Status reports, data entry</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Button */}
      <div className="flex justify-center">
        <Button onClick={handleComplete} size="lg" className="px-8">
          Complete Audio Interview
        </Button>
      </div>
    </div>
  );
};

export default InitialInterview;
