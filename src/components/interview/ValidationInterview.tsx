
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, MessageCircle, Volume2, Target, Users, TrendingUp, BookOpen, Settings } from 'lucide-react';
import { InterviewPhaseData, OrganizationData, ResponseData, TaskData } from '@/types/interview';

interface ValidationInterviewProps {
  onComplete: (data: any) => void;
  previousPhaseData?: InterviewPhaseData[];
  organizationData?: OrganizationData;
}

const ValidationInterview: React.FC<ValidationInterviewProps> = ({ onComplete, previousPhaseData, organizationData }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState<Record<string, ResponseData>>({});
  const [currentResponse, setCurrentResponse] = useState('');

  const interviewSections = [
    {
      id: 'validation_summary',
      title: 'Validation of Overall Assessment',
      icon: CheckCircle,
      questions: [
        {
          type: 'overall_validation',
          text: "Based on all our conversations, the general picture for your role highlights a preference for AI to handle routine tasks while maintaining human involvement in strategic and interpersonal work. Does this overall summary resonate with you?",
          category: 'Assessment Validation'
        },
        {
          type: 'accuracy_check',
          text: "We've identified certain tasks where your desired human involvement differs from AI's current capabilities. Do you feel our system accurately captured the nuances of those differences?",
          category: 'Accuracy Verification'
        },
        {
          type: 'surprises_feedback',
          text: "Is there anything in our combined insights – either about your role, your department, or the organization – that surprises you, or that you'd like to clarify or refine?",
          category: 'Feedback & Refinement'
        }
      ]
    },
    {
      id: 'priority_integration',
      title: 'Prioritizing Integration Opportunities',
      icon: Target,
      questions: [
        {
          type: 'priority_selection',
          text: "Considering everything, which AI integration opportunities do you believe our organization should prioritize first for your role or department? Why those specific areas?",
          category: 'Strategic Prioritization'
        },
        {
          type: 'implementation_challenges',
          text: "What do you see as the biggest initial challenge in implementing AI for these prioritized tasks or areas?",
          category: 'Implementation Planning'
        }
      ]
    },
    {
      id: 'skill_development',
      title: 'Skill Development & Workforce Evolution',
      icon: BookOpen,
      questions: [
        {
          type: 'skill_shifts',
          text: "Our analysis suggests a shift towards skills like complex problem-solving and interpersonal communication becoming more central in an AI-augmented environment. What kind of training or development opportunities would be most beneficial for you?",
          category: 'Skill Development'
        },
        {
          type: 'daily_work_evolution',
          text: "How do you envision your typical day-to-day work changing over the next 1-3 years as AI agents become more integrated into your role?",
          category: 'Work Evolution'
        }
      ]
    },
    {
      id: 'organizational_changes',
      title: 'Organizational Adjustments & Support',
      icon: Settings,
      questions: [
        {
          type: 'hiring_focus',
          text: "If some tasks are significantly augmented or automated by AI, how might that change the focus or skill sets we look for in future hires for roles similar to yours?",
          category: 'Hiring Strategy'
        },
        {
          type: 'organizational_support',
          text: "What organizational support or changes (e.g., new processes, leadership communication, training programs) do you think will be most crucial for a successful transition to an AI-augmented workplace?",
          category: 'Change Management'
        }
      ]
    },
    {
      id: 'continuous_feedback',
      title: 'Continuous Feedback & Future Planning',
      icon: TrendingUp,
      questions: [
        {
          type: 'feedback_mechanism',
          text: "As we move forward with AI initiatives, what's the best way for you to provide ongoing feedback or insights to ensure these tools are truly helpful and align with your needs?",
          category: 'Feedback Systems'
        },
        {
          type: 'success_metrics',
          text: "How would you measure the success of AI integration in your role? What outcomes would indicate that AI is truly enhancing your work experience?",
          category: 'Success Measurement'
        }
      ]
    }
  ];

  const currentSectionData = interviewSections[currentSection];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = currentSectionData.questions[currentQuestionIndex];

  // Generate summary insights from previous phases
  const generateAssessmentSummary = () => {
    const taskData = Array.isArray(previousPhaseData) ? 
      previousPhaseData.find(phase => phase.taskRatings)?.taskRatings || {} :
      previousPhaseData?.taskRatings || {};
    
    const tasks = Object.values(taskData) as TaskData[];
    
    const highAutomationTasks = tasks.filter(t => t.automationDesire >= 4);
    const highHASTasks = tasks.filter(t => t.humanAgencyScale >= 3);
    const avgAutomationDesire = tasks.length > 0 ? 
      tasks.reduce((sum, t) => sum + t.automationDesire, 0) / tasks.length : 3;

    return {
      totalTasksAssessed: tasks.length,
      highAutomationDesire: highAutomationTasks.length,
      strongHumanAgency: highHASTasks.length,
      averageAutomationDesire: Math.round(avgAutomationDesire * 10) / 10,
      dominantPreference: avgAutomationDesire > 3 ? 'Automation-Friendly' : 'Human-Centric',
      keyInsights: [
        'Preference for AI handling routine, repetitive tasks',
        'Strong emphasis on human involvement in strategic decisions',
        'Collaborative approach to AI integration preferred',
        'Focus on augmentation rather than replacement'
      ]
    };
  };

  const assessmentSummary = generateAssessmentSummary();

  const handleResponseSubmit = () => {
    if (currentResponse.trim()) {
      const responseKey = `${currentSection}_${currentQuestionIndex}`;
      setResponses(prev => ({
        ...prev,
        [responseKey]: {
          section: currentSectionData.id,
          question: currentQuestion.text,
          response: currentResponse.trim(),
          category: currentQuestion.category,
          type: currentQuestion.type
        }
      }));

      setCurrentResponse('');

      // Move to next question or section
      if (currentQuestionIndex < currentSectionData.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else if (currentSection < interviewSections.length - 1) {
        setCurrentSection(currentSection + 1);
        setCurrentQuestionIndex(0);
      } else {
        // Complete the interview
        completeInterview();
      }
    }
  };

  const completeInterview = () => {
    const finalResponses = {
      ...responses,
      [`${currentSection}_${currentQuestionIndex}`]: {
        section: currentSectionData.id,
        question: currentQuestion.text,
        response: currentResponse.trim(),
        category: currentQuestion.category,
        type: currentQuestion.type
      }
    };

    // Generate final validation insights and action plan
    const actionPlan = generateActionPlan(finalResponses);

    onComplete({
      responses: finalResponses,
      assessmentSummary,
      actionPlan,
      validationComplete: true,
      completedAt: new Date().toISOString(),
      readyForReporting: true
    });
  };

  const generateActionPlan = (responses: Record<string, ResponseData>) => {
    const responseValues = Object.values(responses);
    
    // Extract key themes from responses
    const priorities = responseValues
      .filter(r => r.type === 'priority_selection')
      .map(r => r.response);
    
    const challenges = responseValues
      .filter(r => r.type === 'implementation_challenges')
      .map(r => r.response);
      
    const skillNeeds = responseValues
      .filter(r => r.type === 'skill_shifts')
      .map(r => r.response);
      
    const organizationalNeeds = responseValues
      .filter(r => r.type === 'organizational_support')
      .map(r => r.response);

    return {
      immediatePriorities: priorities,
      keychallenges: challenges,
      skillDevelopmentNeeds: skillNeeds,
      organizationalSupport: organizationalNeeds,
      recommendedTimeline: '6-12 months for initial implementation',
      successMetrics: [
        'Task completion time reduction',
        'Employee satisfaction with AI tools',
        'Quality improvement in outputs',
        'Time available for strategic work'
      ],
      nextSteps: [
        'Pilot program with high-priority tasks',
        'Skill development program design',
        'Change management communication plan',
        'Regular feedback collection system'
      ]
    };
  };

  const getTotalQuestions = () => {
    return interviewSections.reduce((total, section) => total + section.questions.length, 0);
  };

  const getCurrentQuestionNumber = () => {
    let count = 0;
    for (let i = 0; i < currentSection; i++) {
      count += interviewSections[i].questions.length;
    }
    return count + currentQuestionIndex + 1;
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestionIndex(interviewSections[currentSection - 1].questions.length - 1);
    }
  };

  const IconComponent = currentSectionData.icon;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Validation & Future Planning Discussion
        </h2>
        <p className="text-gray-600">
          Final validation and concrete action planning for AI integration
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Badge variant="outline">
            Section {currentSection + 1} of {interviewSections.length}
          </Badge>
          <Badge variant="outline">
            Question {getCurrentQuestionNumber()} of {getTotalQuestions()}
          </Badge>
        </div>
      </div>

      {/* Assessment Summary */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <CheckCircle className="h-5 w-5" />
            Your AI Readiness Assessment Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700">{assessmentSummary.totalTasksAssessed}</div>
              <div className="text-sm text-blue-600">Tasks Assessed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700">{assessmentSummary.averageAutomationDesire}/5</div>
              <div className="text-sm text-blue-600">Avg. Automation Desire</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700">{assessmentSummary.dominantPreference}</div>
              <div className="text-sm text-blue-600">Overall Preference</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-blue-900">Key Insights:</h4>
            {assessmentSummary.keyInsights.map((insight, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-blue-800">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                {insight}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <IconComponent className="h-6 w-6 text-blue-600" />
            {currentSectionData.title}
          </CardTitle>
          <CardDescription>
            Welcome to our final conversation. Today, we'll summarize our findings and discuss potential next steps for AI integration.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* AI Question */}
          <Alert>
            <Volume2 className="h-4 w-4" />
            <AlertDescription className="text-base">
              {currentQuestion.text}
            </AlertDescription>
          </Alert>

          {/* Question Category */}
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{currentQuestion.category}</Badge>
            <Badge variant="outline">{currentQuestion.type.replace('_', ' ').toUpperCase()}</Badge>
          </div>

          {/* Response Input */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Your Response:
              </label>
              <Textarea
                value={currentResponse}
                onChange={(e) => setCurrentResponse(e.target.value)}
                placeholder="Share your final thoughts and recommendations... Consider the practical implications for your organization and role."
                rows={6}
                className="min-h-[120px]"
              />
            </div>
          </div>

          {/* Context Information */}
          {currentSection === 0 && currentQuestionIndex === 0 && (
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                <strong>Context:</strong> You've completed assessments of {assessmentSummary.totalTasksAssessed} tasks 
                with an average automation desire of {assessmentSummary.averageAutomationDesire}/5, 
                showing a {assessmentSummary.dominantPreference.toLowerCase()} approach to AI integration.
              </AlertDescription>
            </Alert>
          )}

          {/* Previous Responses in Section */}
          {Object.keys(responses).some(key => responses[key].section === currentSectionData.id) && (
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Previous Responses in This Section:</h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {Object.entries(responses)
                  .filter(([_, response]) => response.section === currentSectionData.id)
                  .map(([key, response]) => (
                    <div key={key} className="text-xs bg-gray-50 p-2 rounded">
                      <div className="font-medium text-gray-600">{response.category}:</div>
                      <div className="text-gray-700">{response.response.substring(0, 100)}...</div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Section Progress */}
      <Card>
        <CardContent className="pt-4">
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span>Validation Sections</span>
            <span>{currentSection + 1} of {interviewSections.length}</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {interviewSections.map((section, index) => {
              const SectionIcon = section.icon;
              return (
                <div
                  key={index}
                  className={`p-2 rounded text-center border ${
                    index < currentSection ? 'bg-green-100 border-green-300 text-green-800' :
                    index === currentSection ? 'bg-blue-100 border-blue-300 text-blue-800' :
                    'bg-gray-50 border-gray-200 text-gray-500'
                  }`}
                >
                  <SectionIcon className="h-4 w-4 mx-auto mb-1" />
                  <div className="text-xs font-medium">{section.title.split(' ')[0]}</div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={currentSection === 0 && currentQuestionIndex === 0}
        >
          Previous Question
        </Button>
        
        <div className="text-sm text-gray-600">
          Final Stage: {getCurrentQuestionNumber()} of {getTotalQuestions()} questions
        </div>
        
        <Button 
          onClick={handleResponseSubmit}
          disabled={!currentResponse.trim()}
        >
          {currentSection === interviewSections.length - 1 && 
           currentQuestionIndex === currentSectionData.questions.length - 1 ? 
           'Complete Assessment' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

export default ValidationInterview;
