
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Hexagon, MessageCircle, Mic, TrendingUp, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import { InterviewPhaseData } from '@/types/interview';

interface RefinementInterviewProps {
  onComplete: (data: any) => void;
  previousPhaseData?: InterviewPhaseData;
}

const RefinementInterview: React.FC<RefinementInterviewProps> = ({ onComplete, previousPhaseData }) => {
  const handleComplete = () => {
    // Generate dummy refinement data
    const dummyResponses = {
      'task_review': {
        section: 'task_review',
        question: 'How do you envision AI handling your high-automation tasks?',
        response: 'I think AI could really help with email management and status reporting, freeing up time for strategic work.',
        category: 'Green Light Zone',
        type: 'green_light'
      },
      'has_discussion': {
        section: 'has_discrepancy',
        question: 'What human elements are crucial for tasks requiring high human involvement?',
        response: 'For project planning, I need to understand stakeholder dynamics and make nuanced decisions based on business context.',
        category: 'Human Agency Requirement',
        type: 'has_alignment'
      },
      'ai_perspectives': {
        section: 'qualitative_themes',
        question: 'How has your perspective on AI collaboration evolved?',
        response: 'I\'m more optimistic now about AI handling routine tasks, but I still want to maintain control over strategic decisions.',
        category: 'Perspective Evolution',
        type: 'collaboration_evolution'
      },
      'departmental_context': {
        section: 'departmental_context',
        question: 'How might AI trends impact skills in your department?',
        response: 'We\'ll need to focus more on strategic thinking and relationship management as AI handles operational tasks.',
        category: 'Skill Evolution',
        type: 'skill_trends'
      },
      'future_scenarios': {
        section: 'scenario_exploration',
        question: 'What new opportunities would emerge if AI automated your routine tasks?',
        response: 'I could spend more time on innovation projects and developing my team members professionally.',
        category: 'Future Opportunities',
        type: 'automation_impact'
      }
    };

    const refinementInsights = {
      validationConfirmations: [dummyResponses.has_discussion],
      futureOpportunities: [dummyResponses.future_scenarios],
      collaborationInsights: [dummyResponses.ai_perspectives],
      trustEvolution: [dummyResponses.ai_perspectives],
      skillDevelopmentNeeds: [dummyResponses.departmental_context],
      scenarioPreparation: [dummyResponses.future_scenarios]
    };

    onComplete({
      responses: dummyResponses,
      refinementInsights,
      interviewCompleted: true,
      completedAt: new Date().toISOString()
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Refinement & Scenario Exploration Interview
        </h2>
        <p className="text-gray-600">
          Audio-based review of insights and exploration of future AI integration scenarios
        </p>
        <Badge variant="outline" className="mt-2">
          AI Interviewer Ready
        </Badge>
      </div>

      {/* Interview Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Hexagon className="h-6 w-6 text-blue-600" />
            AI Audio Refinement Session
          </CardTitle>
          <CardDescription>
            Conversational review of your personalized AI readiness profile
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* AI Interviewer Status */}
          <Alert>
            <Mic className="h-4 w-4" />
            <AlertDescription className="text-base">
              I'll walk through your personalized insights and explore scenarios for future AI integration in your work.
            </AlertDescription>
          </Alert>

          {/* Interview Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <h4 className="font-medium text-green-900">Task Review</h4>
              </div>
              <p className="text-sm text-green-700">
                Discussion of your green-light, red-light, and R&D opportunity tasks
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <h4 className="font-medium text-yellow-900">Human Agency</h4>
              </div>
              <p className="text-sm text-yellow-700">
                Exploring why certain tasks require high human involvement
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="h-4 w-4 text-blue-600" />
                <h4 className="font-medium text-blue-900">AI Perspectives</h4>
              </div>
              <p className="text-sm text-blue-700">
                Revisiting your thoughts on AI collaboration
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-purple-600" />
                <h4 className="font-medium text-purple-900">Future Scenarios</h4>
              </div>
              <p className="text-sm text-purple-700">
                Exploring what-if scenarios and emerging opportunities
              </p>
            </div>
          </div>

          {/* Sample Insights */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Sample Discussion Points (Demo Data)
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• How AI automation of email management could free up 25% of your time</p>
              <p>• Why project planning requires high human agency despite automation potential</p>
              <p>• Evolution from AI concerns to seeing collaborative opportunities</p>
              <p>• Future skill development needs as AI handles routine tasks</p>
              <p>• New innovation opportunities with automated operational work</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Button */}
      <div className="flex justify-center">
        <Button onClick={handleComplete} size="lg" className="px-8">
          Complete Refinement Interview
        </Button>
      </div>
    </div>
  );
};

export default RefinementInterview;
