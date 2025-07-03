
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Star, MessageCircle, Volume2, CheckCircle } from 'lucide-react';

const DeepDiveInterview = ({ onComplete, previousPhaseData }) => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [taskRatings, setTaskRatings] = useState({});
  const [currentRatings, setCurrentRatings] = useState({
    automationDesire: [3],
    humanAgencyScale: [3],
    timePercentage: [20],
    familiarityLevel: [2]
  });
  const [currentReasonings, setCurrentReasonings] = useState({
    automationReason: '',
    hasReason: ''
  });

  // Extract tasks from previous phase data
  const extractedTasks = previousPhaseData?.extractedThemes?.commonTasks || 
    ['Email Management', 'Report Creation', 'Data Analysis', 'Meeting Coordination', 'Customer Communication'];

  // Add some additional realistic tasks based on common patterns
  const allTasks = [
    ...extractedTasks,
    'Document Review',
    'Project Planning',
    'Quality Assurance',
    'Team Communication',
    'Process Documentation'
  ].slice(0, 8); // Limit to 8 tasks for demo

  const currentTask = allTasks[currentTaskIndex];

  const automationDesireLabels = [
    'Not at all',
    'Slightly',
    'Moderately', 
    'A lot',
    'Entirely'
  ];

  const hasLabels = [
    'AI handles entirely (H1)',
    'Minimal human input (H2)',
    'Equal partnership (H3)',
    'AI requires human input (H4)',
    'Fully relies on your involvement (H5)'
  ];

  const familiarityLabels = [
    'Novice',
    'Average',
    'Expert'
  ];

  const handleTaskComplete = () => {
    // Save current task ratings
    const taskData = {
      task: currentTask,
      automationDesire: currentRatings.automationDesire[0],
      humanAgencyScale: currentRatings.humanAgencyScale[0],
      timePercentage: currentRatings.timePercentage[0],
      familiarityLevel: currentRatings.familiarityLevel[0],
      automationReason: currentReasonings.automationReason,
      hasReason: currentReasonings.hasReason,
      completedAt: new Date().toISOString()
    };

    setTaskRatings(prev => ({
      ...prev,
      [currentTask]: taskData
    }));

    // Reset for next task
    setCurrentRatings({
      automationDesire: [3],
      humanAgencyScale: [3],
      timePercentage: [20],
      familiarityLevel: [2]
    });
    setCurrentReasonings({
      automationReason: '',
      hasReason: ''
    });

    if (currentTaskIndex < allTasks.length - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    } else {
      // Complete the deep dive interview
      completeInterview();
    }
  };

  const completeInterview = () => {
    // Include the current task data
    const finalTaskData = {
      ...taskRatings,
      [currentTask]: {
        task: currentTask,
        automationDesire: currentRatings.automationDesire[0],
        humanAgencyScale: currentRatings.humanAgencyScale[0],
        timePercentage: currentRatings.timePercentage[0],
        familiarityLevel: currentRatings.familiarityLevel[0],
        automationReason: currentReasonings.automationReason,
        hasReason: currentReasonings.hasReason,
        completedAt: new Date().toISOString()
      }
    };

    // Analyze the task data to create insights
    const analysisResults = analyzeTaskData(finalTaskData);

    onComplete({
      taskRatings: finalTaskData,
      analysisResults,
      interviewCompleted: true,
      completedAt: new Date().toISOString()
    });
  };

  const analyzeTaskData = (taskData) => {
    const tasks = Object.values(taskData);
    
    // Categorize tasks into zones
    const greenLightTasks = tasks.filter(t => t.automationDesire >= 4);
    const redLightTasks = tasks.filter(t => t.automationDesire <= 2);
    const rndOpportunityTasks = tasks.filter(t => t.automationDesire >= 4 && t.humanAgencyScale >= 4);
    
    // Calculate average scores
    const avgAutomationDesire = tasks.reduce((sum, t) => sum + t.automationDesire, 0) / tasks.length;
    const avgHumanAgencyScale = tasks.reduce((sum, t) => sum + t.humanAgencyScale, 0) / tasks.length;
    
    // Identify dominant HAS level
    const hasDistribution = [1, 2, 3, 4, 5].map(level => 
      tasks.filter(t => t.humanAgencyScale === level).length
    );
    const dominantHAS = hasDistribution.indexOf(Math.max(...hasDistribution)) + 1;

    return {
      taskCategorization: {
        greenLight: greenLightTasks,
        redLight: redLightTasks,
        rndOpportunity: rndOpportunityTasks,
        lowPriority: tasks.filter(t => t.automationDesire <= 2)
      },
      averages: {
        automationDesire: avgAutomationDesire,
        humanAgencyScale: avgHumanAgencyScale
      },
      dominantHAS,
      totalTasks: tasks.length,
      completionRate: 100
    };
  };

  const handlePrevious = () => {
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex(currentTaskIndex - 1);
      // Restore previous task data if available
      const prevTask = allTasks[currentTaskIndex - 1];
      if (taskRatings[prevTask]) {
        const prevData = taskRatings[prevTask];
        setCurrentRatings({
          automationDesire: [prevData.automationDesire],
          humanAgencyScale: [prevData.humanAgencyScale],
          timePercentage: [prevData.timePercentage],
          familiarityLevel: [prevData.familiarityLevel]
        });
        setCurrentReasonings({
          automationReason: prevData.automationReason,
          hasReason: prevData.hasReason
        });
      }
    }
  };

  const canProceed = () => {
    return currentReasonings.automationReason.trim().length > 0 && 
           currentReasonings.hasReason.trim().length > 0;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Deep Dive & Initial Ratings Interview
        </h2>
        <p className="text-gray-600">
          Detailed assessment of tasks with automation desire and human agency ratings
        </p>
        <Badge variant="outline" className="mt-2">
          Task {currentTaskIndex + 1} of {allTasks.length}
        </Badge>
      </div>

      {/* Progress */}
      <div className="flex space-x-2 mb-6">
        {allTasks.map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded ${
              index < currentTaskIndex ? 'bg-green-600' : 
              index === currentTaskIndex ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Current Task Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Star className="h-6 w-6 text-blue-600" />
            Task Assessment: {currentTask}
          </CardTitle>
          <CardDescription>
            AI-assisted task evaluation with detailed ratings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* AI Prompts */}
          <div className="space-y-4">
            <Alert>
              <Volume2 className="h-4 w-4" />
              <AlertDescription>
                Let's dive deeper into '{currentTask}'. We want to understand your preferences regarding AI's role.
              </AlertDescription>
            </Alert>

            <Alert>
              <MessageCircle className="h-4 w-4" />
              <AlertDescription>
                If an AI system could do '{currentTask}' completely on its own, how much would you want it to do it for you? 
                Think about whether it would free up your time, or if it's repetitive.
              </AlertDescription>
            </Alert>
          </div>

          {/* Task Validation */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-4">
              <h4 className="font-medium text-blue-900 mb-2">Task Validation</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-800">
                    Do you regularly perform this task?
                  </label>
                  <Badge variant="outline" className="bg-white">Yes</Badge>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-800">
                    Familiarity Level
                  </label>
                  <div className="space-y-2">
                    <Slider
                      value={currentRatings.familiarityLevel}
                      onValueChange={(value) => setCurrentRatings(prev => ({ ...prev, familiarityLevel: value }))}
                      max={2}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-sm text-blue-700">
                      {familiarityLabels[currentRatings.familiarityLevel[0]]}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-800">
                    Time Percentage (% of work time)
                  </label>
                  <div className="space-y-2">
                    <Slider
                      value={currentRatings.timePercentage}
                      onValueChange={(value) => setCurrentRatings(prev => ({ ...prev, timePercentage: value }))}
                      max={100}
                      min={5}
                      step={5}
                      className="w-full"
                    />
                    <div className="text-sm text-blue-700">
                      {currentRatings.timePercentage[0]}%
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Automation Desire Rating */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Automation Desire Assessment</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  How much would you want AI to handle '{currentTask}'?
                </label>
                <Slider
                  value={currentRatings.automationDesire}
                  onValueChange={(value) => setCurrentRatings(prev => ({ ...prev, automationDesire: value }))}
                  max={4}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-600">
                  {automationDesireLabels.map((label, index) => (
                    <span key={index} className={index === currentRatings.automationDesire[0] ? 'font-bold text-blue-600' : ''}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Why do you feel this way about AI handling this task?
                </label>
                <Textarea
                  value={currentReasonings.automationReason}
                  onChange={(e) => setCurrentReasonings(prev => ({ ...prev, automationReason: e.target.value }))}
                  placeholder="Explain your reasoning... (e.g., it's repetitive, frees up time for higher-value work, improves quality, etc.)"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Human Agency Scale (HAS) Rating */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Human Agency Scale Assessment</h3>
            
            <Alert>
              <MessageCircle className="h-4 w-4" />
              <AlertDescription>
                Now, let's think about if an AI system were to assist you with '{currentTask}'. 
                How much collaboration between you and the AI would be needed for it to be completed effectively?
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Ideal level of human involvement:
                </label>
                <Slider
                  value={currentRatings.humanAgencyScale}
                  onValueChange={(value) => setCurrentRatings(prev => ({ ...prev, humanAgencyScale: value }))}
                  max={4}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-600">
                  {hasLabels.map((label, index) => (
                    <span key={index} className={`text-center ${index === currentRatings.humanAgencyScale[0] ? 'font-bold text-blue-600' : ''}`}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  What makes this level of human involvement ideal?
                </label>
                <Textarea
                  value={currentReasonings.hasReason}
                  onChange={(e) => setCurrentReasonings(prev => ({ ...prev, hasReason: e.target.value }))}
                  placeholder="Explain why this level is necessary... (e.g., crucial decisions, specialized knowledge, interpersonal communication, etc.)"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Completed Tasks Summary */}
          {Object.keys(taskRatings).length > 0 && (
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Completed Tasks ({Object.keys(taskRatings).length})
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Object.values(taskRatings).map((task, index) => (
                  <div key={index} className="text-xs bg-green-50 p-2 rounded border border-green-200">
                    <div className="font-medium text-green-800">{task.task}</div>
                    <div className="text-green-700">
                      Automation: {automationDesireLabels[task.automationDesire]} | 
                      HAS: H{task.humanAgencyScale + 1}
                    </div>
                  </div>
                ))}
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
          disabled={currentTaskIndex === 0}
        >
          Previous Task
        </Button>
        
        <div className="text-sm text-gray-600">
          Task {currentTaskIndex + 1} of {allTasks.length}
        </div>
        
        <Button 
          onClick={handleTaskComplete}
          disabled={!canProceed()}
        >
          {currentTaskIndex === allTasks.length - 1 ? 'Complete Assessment' : 'Next Task'}
        </Button>
      </div>
    </div>
  );
};

export default DeepDiveInterview;
