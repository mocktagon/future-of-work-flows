
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Hexagon, MessageCircle, Volume2, TrendingUp, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

const RefinementInterview = ({ onComplete, previousPhaseData }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState({});
  const [currentResponse, setCurrentResponse] = useState('');

  // Extract analysis from previous phase
  const taskData = previousPhaseData?.taskRatings || {};
  const analysisResults = previousPhaseData?.analysisResults || {};

  const interviewSections = [
    {
      id: 'task_review',
      title: 'Task & Desire-Capability Review',
      icon: TrendingUp,
      content: generateTaskReviewContent(taskData, analysisResults)
    },
    {
      id: 'has_discrepancy',
      title: 'Human Agency Scale Discussion',
      icon: AlertTriangle,
      content: generateHASDiscussionContent(taskData)
    },
    {
      id: 'qualitative_themes',
      title: 'AI Perspectives Revisited',
      icon: MessageCircle,
      content: generateQualitativeContent()
    },
    {
      id: 'departmental_context',
      title: 'Departmental Context',
      icon: CheckCircle,
      content: generateDepartmentalContent()
    },
    {
      id: 'scenario_exploration',
      title: 'Future Scenarios & "What If" Questions',
      icon: Lightbulb,
      content: generateScenarioContent(taskData)
    }
  ];

  function generateTaskReviewContent(taskData, analysisResults) {
    const greenLightTasks = analysisResults.taskCategorization?.greenLight || [];
    const redLightTasks = analysisResults.taskCategorization?.redLight || [];
    const rndTasks = analysisResults.taskCategorization?.rndOpportunity || [];

    return {
      prompt: "Based on our previous talks, our system has prepared some insights about your work and how AI could interact with it. Let's discuss your personalized AI readiness profile.",
      questions: [
        {
          type: 'green_light',
          text: `For tasks like '${greenLightTasks[0]?.task || 'Email Management'}', our analysis shows both your high desire for automation and high AI capability. This is a 'Green Light' task. How do you envision this impacting your daily work if AI handled it?`,
          category: 'Green Light Zone'
        },
        {
          type: 'red_light',
          text: `On the other hand, for '${redLightTasks[0]?.task || 'Customer Communication'}', while AI has capability, you indicated preference for human involvement. Can you help me understand what about this task makes human involvement crucial for you?`,
          category: 'Red Light Zone'
        },
        {
          type: 'rnd_opportunity',
          text: `For '${rndTasks[0]?.task || 'Strategic Planning'}', you showed high desire, but requires significant human collaboration. This is an 'R&D Opportunity'. What specifically makes you want AI for this, and what challenges do you foresee?`,
          category: 'R&D Opportunity Zone'
        }
      ]
    };
  }

  function generateHASDiscussionContent(taskData) {
    const tasks = Object.values(taskData);
    const highHASTasks = tasks.filter(t => t.humanAgencyScale >= 3);
    
    return {
      prompt: "Let's explore some differences between your desired level of human involvement and what AI might currently support.",
      questions: [
        {
          type: 'has_alignment',
          text: `For '${highHASTasks[0]?.task || 'Project Planning'}', you see essential human involvement, but AI assessment suggests potential for more automation. Can you explain the critical human elements that AI might miss?`,
          category: 'Human Agency Requirement'
        },
        {
          type: 'collaboration_style',
          text: `You mentioned preferring AI as an 'assistant.' For tasks where you see moderate collaboration as ideal, what would an 'equal partnership' look like practically?`,
          category: 'Collaboration Preference'
        }
      ]
    };
  }

  function generateQualitativeContent() {
    return {
      prompt: "Let's revisit some themes from our first conversation about AI and work.",
      questions: [
        {
          type: 'trust_concerns',
          text: "In our first chat, concerns about AI accuracy and reliability came up. How do these specific task insights relate to those concerns now?",
          category: 'Trust & Reliability'
        },
        {
          type: 'collaboration_evolution',
          text: "Your preference for AI assistance has become clearer through our task discussions. How has your perspective on AI collaboration evolved?",
          category: 'Perspective Evolution'
        }
      ]
    };
  }

  function generateDepartmentalContent() {
    return {
      prompt: "Let's consider how your insights fit within your department and team context.",
      questions: [
        {
          type: 'team_patterns',
          text: "Many in similar roles express high desire for AI to handle repetitive tasks like data entry and report generation. Does this resonate with challenges you observe on your team?",
          category: 'Team Dynamics'
        },
        {
          type: 'skill_trends',
          text: "At a departmental level, tasks involving analysis and coordination are generally viewed as having high collaboration potential. How might this trend impact the skills emphasized in your department?",
          category: 'Skill Evolution'
        }
      ]
    };
  }

  function generateScenarioContent(taskData) {
    const greenLightTasks = Object.values(taskData).filter(t => t.automationDesire >= 4);
    const rndTasks = Object.values(taskData).filter(t => t.automationDesire >= 4 && t.humanAgencyScale >= 3);

    return {
      prompt: "Let's explore future possibilities and scenarios for AI integration in your work.",
      questions: [
        {
          type: 'automation_impact',
          text: `Imagine AI fully automates your high-automation-desire tasks like '${greenLightTasks[0]?.task || 'routine tasks'}'. What new, higher-value tasks or strategic initiatives might you dedicate your freed-up time to?`,
          category: 'Future Opportunities'
        },
        {
          type: 'ideal_collaboration',
          text: `If AI could achieve the ideal collaboration level for '${rndTasks[0]?.task || 'complex analysis'}', how would that fundamentally change your workflow, and what new skills might you need?`,
          category: 'Workflow Evolution'
        },
        {
          type: 'emerging_tasks',
          text: "Looking ahead, are there any tasks that don't exist in your role today, but you envision becoming possible or necessary with more advanced AI agents?",
          category: 'Emerging Roles'
        }
      ]
    };
  }

  const currentSectionData = interviewSections[currentSection];
  const currentQuestions = currentSectionData.content.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = currentQuestions[currentQuestionIndex];

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
      if (currentQuestionIndex < currentQuestions.length - 1) {
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

    // Analyze refinement insights
    const refinementInsights = analyzeRefinementData(finalResponses);

    onComplete({
      responses: finalResponses,
      refinementInsights,
      interviewCompleted: true,
      completedAt: new Date().toISOString()
    });
  };

  const analyzeRefinementData = (responses) => {
    const responseValues = Object.values(responses);
    
    return {
      validationConfirmations: responseValues.filter(r => r.type.includes('alignment')),
      futureOpportunities: responseValues.filter(r => r.type.includes('automation') || r.type.includes('emerging')),
      collaborationInsights: responseValues.filter(r => r.type.includes('collaboration')),
      trustEvolution: responseValues.filter(r => r.type.includes('trust')),
      skillDevelopmentNeeds: responseValues.filter(r => r.category.includes('Skill')),
      scenarioPreparation: responseValues.filter(r => r.category.includes('Future'))
    };
  };

  const getTotalQuestions = () => {
    return interviewSections.reduce((total, section) => total + section.content.questions.length, 0);
  };

  const getCurrentQuestionNumber = () => {
    let count = 0;
    for (let i = 0; i < currentSection; i++) {
      count += interviewSections[i].content.questions.length;
    }
    return count + currentQuestionIndex + 1;
  };

  const getOverallProgress = () => {
    return (getCurrentQuestionNumber() / getTotalQuestions()) * 100;
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestionIndex(interviewSections[currentSection - 1].content.questions.length - 1);
    }
  };

  const IconComponent = currentSectionData.icon;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Refinement & Scenario Exploration Interview
        </h2>
        <p className="text-gray-600">
          Review personalized insights and explore future AI integration scenarios
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

      {/* Overall Progress */}
      <Card>
        <CardContent className="pt-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Interview Progress</span>
              <span>{Math.round(getOverallProgress())}% Complete</span>
            </div>
            <Progress value={getOverallProgress()} className="h-2" />
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
            {currentSectionData.content.prompt}
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
                placeholder="Share your thoughts and insights... Consider how this relates to your previous responses and future work scenarios."
                rows={6}
                className="min-h-[120px]"
              />
            </div>
          </div>

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

      {/* Section Navigation */}
      <Card>
        <CardContent className="pt-4">
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span>Sections</span>
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
          {getCurrentQuestionNumber()} of {getTotalQuestions()} questions
        </div>
        
        <Button 
          onClick={handleResponseSubmit}
          disabled={!currentResponse.trim()}
        >
          {currentSection === interviewSections.length - 1 && 
           currentQuestionIndex === currentQuestions.length - 1 ? 
           'Complete Interview' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

export default RefinementInterview;
