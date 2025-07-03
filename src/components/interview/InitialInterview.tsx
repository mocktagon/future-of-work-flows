import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Triangle, MessageCircle, Mic, MicOff, Volume2 } from 'lucide-react';
import { OrganizationData, InterviewPhaseData } from '@/types/interview';

interface InitialInterviewProps {
  onComplete: (data: any) => void;
  organizationData?: OrganizationData;
  previousPhaseData?: InterviewPhaseData;
}

const InitialInterview: React.FC<InitialInterviewProps> = ({ onComplete, organizationData, previousPhaseData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [isRecording, setIsRecording] = useState(false);
  const [currentResponse, setCurrentResponse] = useState('');

  const employeeName = (previousPhaseData as any)?.employeeName || 'there';

  const interviewQuestions = [
    {
      id: 'role_description',
      prompt: `Welcome to our first conversation about AI and your work, ${employeeName}. Let's start broadly. Could you please describe what you do in your role in your own words, perhaps walking me through a typical day or week?`,
      followUp: "Thank you. That gives me a good picture of your role and responsibilities."
    },
    {
      id: 'main_tasks',
      prompt: "Now, thinking about your daily or weekly activities, what are some of the main tasks you find yourself doing regularly? Don't worry about being exhaustive, just what comes to mind first.",
      followUp: "Those sound like important responsibilities for your role."
    },
    {
      id: 'tools_software',
      prompt: "And what specific tools or software do you rely on most for these tasks? You can mention anything from specialized software to common office tools.",
      followUp: "It's helpful to understand the technology ecosystem you work in."
    },
    {
      id: 'ai_perceptions',
      prompt: "When you hear 'AI' or 'AI agents,' what comes to mind, especially in the context of your work? What are your initial thoughts or feelings about it? There are no right or wrong answers.",
      followUp: "Thank you for sharing your honest perspective on AI."
    },
    {
      id: 'repetitive_tasks',
      prompt: "Are there any tasks you currently do that you feel are particularly repetitive or low-value, tasks that perhaps take away from more interesting or challenging aspects of your job?",
      followUp: "I can understand how those tasks might feel less fulfilling."
    },
    {
      id: 'enjoyable_tasks',
      prompt: "On the flip side, what parts of your job do you enjoy the most, or feel require a very 'human touch'?",
      followUp: "It's clear you find meaning and satisfaction in those aspects of your work."
    }
  ];

  const currentQuestion = interviewQuestions[currentQuestionIndex];

  const handleResponseSubmit = () => {
    if (currentResponse.trim()) {
      setResponses(prev => ({
        ...prev,
        [currentQuestion.id]: currentResponse.trim()
      }));
      setCurrentResponse('');
      
      if (currentQuestionIndex < interviewQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Complete the interview
        completeInterview();
      }
    }
  };

  const completeInterview = () => {
    const finalResponses = {
      ...responses,
      [currentQuestion.id]: currentResponse.trim()
    };

    // Simulate AI analysis of responses
    const extractedThemes = analyzeResponses(finalResponses);

    onComplete({
      responses: finalResponses,
      extractedThemes,
      interviewCompleted: true,
      completedAt: new Date().toISOString(),
      duration: '15-20 minutes' // Simulated
    });
  };

  const analyzeResponses = (responses: Record<string, string>) => {
    // Simulate LLM-based topic modeling and analysis
    const themes = {
      commonTasks: extractTasks(responses.main_tasks),
      toolsUsed: extractTools(responses.tools_software),
      aiSentiment: categorizeAISentiment(responses.ai_perceptions),
      repetitiveTasks: extractTasks(responses.repetitive_tasks),
      valuedTasks: extractTasks(responses.enjoyable_tasks),
      concerns: extractConcerns(responses.ai_perceptions),
      collaborationPreferences: inferCollaborationStyle(responses)
    };

    return themes;
  };

  const extractTasks = (text?: string): string[] => {
    if (!text) return [];
    // Simulate AI task extraction
    const words = text.toLowerCase().split(/[,.\s]+/);
    const taskIndicators = ['review', 'create', 'manage', 'analyze', 'report', 'meet', 'email', 'plan', 'coordinate', 'update'];
    return taskIndicators.filter(task => words.some(word => word.includes(task)));
  };

  const extractTools = (text?: string): string[] => {
    if (!text) return [];
    const commonTools = ['excel', 'word', 'email', 'slack', 'teams', 'salesforce', 'jira', 'confluence', 'powerpoint'];
    return commonTools.filter(tool => text.toLowerCase().includes(tool));
  };

  const categorizeAISentiment = (text?: string): string => {
    if (!text) return 'neutral';
    const positiveWords = ['helpful', 'efficient', 'useful', 'excited', 'opportunity'];
    const negativeWords = ['worried', 'concerned', 'replace', 'fear', 'uncertain'];
    
    const lowerText = text.toLowerCase();
    const hasPositive = positiveWords.some(word => lowerText.includes(word));
    const hasNegative = negativeWords.some(word => lowerText.includes(word));
    
    if (hasPositive && !hasNegative) return 'positive';
    if (hasNegative && !hasPositive) return 'concerned';
    return 'mixed';
  };

  const extractConcerns = (text?: string): string[] => {
    if (!text) return [];
    const concerns: string[] = [];
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('job') || lowerText.includes('replace')) concerns.push('job_replacement');
    if (lowerText.includes('trust') || lowerText.includes('reliable')) concerns.push('trust_reliability');
    if (lowerText.includes('human') || lowerText.includes('personal')) concerns.push('human_touch');
    if (lowerText.includes('complex') || lowerText.includes('understand')) concerns.push('complexity_understanding');
    
    return concerns;
  };

  const inferCollaborationStyle = (responses: Record<string, string>): string => {
    // Analyze all responses to infer preferred collaboration style
    const allText = Object.values(responses).join(' ').toLowerCase();
    
    if (allText.includes('together') || allText.includes('partner')) return 'collaborative';
    if (allText.includes('assist') || allText.includes('help')) return 'assistive';
    if (allText.includes('automat') || allText.includes('handle')) return 'automation';
    
    return 'mixed';
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real implementation, this would start/stop speech recognition
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Initial Exploration Interview
        </h2>
        <p className="text-gray-600">
          Conversational mini-interview to understand your role and discover key tasks
        </p>
        <Badge variant="outline" className="mt-2">
          Question {currentQuestionIndex + 1} of {interviewQuestions.length}
        </Badge>
      </div>

      {/* Progress */}
      <div className="flex space-x-2 mb-6">
        {interviewQuestions.map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded ${
              index <= currentQuestionIndex ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Interview Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            AI Interviewer
          </CardTitle>
          <CardDescription>
            Speak naturally - the AI will guide you through the conversation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* AI Question */}
          <Alert>
            <Volume2 className="h-4 w-4" />
            <AlertDescription className="text-base">
              {currentQuestion.prompt}
            </AlertDescription>
          </Alert>

          {/* Response Input */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <Button
                variant={isRecording ? "destructive" : "outline"}
                size="lg"
                onClick={toggleRecording}
                className="flex items-center gap-2"
              >
                {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </Button>
              
              {isRecording && (
                <div className="flex items-center gap-2 text-red-600">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Recording...</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Your Response (or type instead of recording):
              </label>
              <Textarea
                value={currentResponse}
                onChange={(e) => setCurrentResponse(e.target.value)}
                placeholder="Share your thoughts here... You can speak naturally about your experiences and perspectives."
                rows={6}
                className="min-h-[120px]"
              />
            </div>
          </div>

          {/* Previous Responses Summary */}
          {Object.keys(responses).length > 0 && (
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Previous Responses:</h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {Object.entries(responses).map(([questionId, response]) => {
                  const question = interviewQuestions.find(q => q.id === questionId);
                  return (
                    <div key={questionId} className="text-xs bg-gray-50 p-2 rounded">
                      <div className="font-medium text-gray-600">{question?.id.replace('_', ' ').toUpperCase()}:</div>
                      <div className="text-gray-700">{String(response).substring(0, 100)}...</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous Question
        </Button>
        
        <div className="text-sm text-gray-600">
          Question {currentQuestionIndex + 1} of {interviewQuestions.length}
        </div>
        
        <Button 
          onClick={handleResponseSubmit}
          disabled={!currentResponse.trim()}
        >
          {currentQuestionIndex === interviewQuestions.length - 1 ? 'Complete Interview' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

export default InitialInterview;
