
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MessageCircle, Mic, Play, Pause, Volume2 } from 'lucide-react';
import { OrganizationData, InterviewPhaseData } from '@/types/interview';

interface InitialInterviewProps {
  onComplete: (data: any) => void;
  organizationData?: OrganizationData | null;
  previousPhaseData?: InterviewPhaseData;
}

const InitialInterview: React.FC<InitialInterviewProps> = ({ onComplete, organizationData, previousPhaseData }) => {
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const employeeName = (previousPhaseData as any)?.employeeName || (previousPhaseData as any)?.teamMemberName || 'there';

  const interviewQuestions = [
    "Hello! Let's start by having you tell me about your current role. What would you say are your main responsibilities?",
    "What does a typical day or week look like for you? Walk me through your regular tasks.",
    "What tools and software do you use most frequently in your work?",
    "Are there any tasks you find yourself doing repeatedly that feel routine or mechanical?",
    "What aspects of your work do you find most engaging or valuable?",
    "How do you currently feel about AI and automation in the workplace?",
    "If you could automate any part of your job, what would it be and why?"
  ];

  const handleStartInterview = () => {
    setIsInterviewStarted(true);
    setIsInterviewActive(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleCompleteInterview();
    }
  };

  const handleCompleteInterview = () => {
    setIsInterviewActive(false);
    
    // Generate realistic interview data
    const interviewData = {
      responses: {
        role_description: "I work as a project manager coordinating between different teams and managing project timelines.",
        main_tasks: "I primarily handle project planning, team meetings, status reporting, and resource allocation.",
        tools_software: "I use Jira, Confluence, Slack, Excel, and PowerPoint for most of my daily work.",
        ai_perceptions: "I think AI could be really helpful for automating routine tasks and generating reports, though I'm concerned about maintaining the human touch in team communication.",
        repetitive_tasks: "Creating weekly status reports and updating project tracking spreadsheets are quite repetitive.",
        enjoyable_tasks: "I really enjoy the strategic planning sessions and mentoring team members - those require a lot of human insight."
      },
      extractedThemes: {
        commonTasks: ['project planning', 'team meetings', 'status reporting', 'resource allocation'],
        toolsUsed: ['jira', 'confluence', 'slack', 'excel', 'powerpoint'],
        aiSentiment: 'positive',
        repetitiveTasks: ['status reporting', 'spreadsheet updates'],
        valuedTasks: ['strategic planning', 'mentoring'],
        concerns: ['human_touch'],
        collaborationPreferences: 'assistive'
      },
      interviewCompleted: true,
      completedAt: new Date().toISOString(),
      duration: '15-20 minutes',
      participantName: employeeName
    };

    onComplete(interviewData);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          AI Interview - Initial Exploration
        </h2>
        <p className="text-gray-600">
          Conversational interview to understand your role and discover key tasks
        </p>
        <Badge variant="outline" className="mt-2">
          {isInterviewActive ? 'Interview in Progress' : 'AI Interviewer Ready'}
        </Badge>
      </div>

      {!isInterviewStarted ? (
        /* Pre-Interview Setup */
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <MessageCircle className="h-6 w-6 text-blue-600" />
              Ready to Begin Your AI Interview
            </CardTitle>
            <CardDescription>
              Hello {employeeName}! I'm your AI interviewer and I'm ready to learn about your work.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <Mic className="h-4 w-4" />
              <AlertDescription className="text-base">
                This will be a conversational interview where I'll ask you questions about your daily work, 
                the tools you use, and your thoughts on AI. The session typically takes 15-20 minutes.
              </AlertDescription>
            </Alert>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">What We'll Discuss:</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Your role and daily responsibilities</li>
                <li>• Main tasks you perform regularly</li>
                <li>• Tools and software you use</li>
                <li>• Your thoughts on AI in the workplace</li>
                <li>• Tasks that feel repetitive or time-consuming</li>
                <li>• Work that you find most meaningful and engaging</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <Button onClick={handleStartInterview} size="lg" className="px-8">
                <Play className="h-5 w-5 mr-2" />
                Start AI Interview
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        /* Active Interview Interface */
        <Card>
          <CardHeader>
            <CardTitle className="flex items-between justify-between">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-green-600" />
                AI Interview in Progress
              </div>
              <Badge variant="secondary">
                Question {currentQuestion + 1} of {interviewQuestions.length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / interviewQuestions.length) * 100}%` }}
              ></div>
            </div>

            {/* Current Question */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Volume2 className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-green-900 mb-2">AI Interviewer:</h4>
                  <p className="text-green-800 text-lg leading-relaxed">
                    {interviewQuestions[currentQuestion]}
                  </p>
                </div>
              </div>
            </div>

            {/* Response Area */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mic className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Please respond naturally - I'm listening...</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-white rounded-lg p-4 border border-gray-300">
                  <p className="text-gray-500 italic">
                    [Simulated: Your response would be captured here via speech recognition]
                  </p>
                </div>
                <Button onClick={handleNextQuestion} variant="outline">
                  {currentQuestion < interviewQuestions.length - 1 ? 'Next Question' : 'Complete Interview'}
                </Button>
              </div>
            </div>

            {/* Interview Progress Info */}
            <div className="text-center text-sm text-gray-500">
              <p>Interview progress: {Math.round(((currentQuestion + 1) / interviewQuestions.length) * 100)}% complete</p>
              <p>Estimated time remaining: {Math.max(1, interviewQuestions.length - currentQuestion - 1) * 2} minutes</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default InitialInterview;
