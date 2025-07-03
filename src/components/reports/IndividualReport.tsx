
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { User, TrendingUp, Brain, CheckCircle, AlertTriangle, Target } from 'lucide-react';
import { TaskData, InterviewPhaseData } from '@/types/interview';

interface IndividualReportProps {
  employeeData: Record<string, any>;
  allPhaseData: InterviewPhaseData[];
}

const IndividualReport: React.FC<IndividualReportProps> = ({ employeeData, allPhaseData }) => {
  // Extract data from phases
  const taskData = allPhaseData.find(phase => phase.taskRatings)?.taskRatings || {};
  const analysisResults = allPhaseData.find(phase => phase.analysisResults)?.analysisResults;
  const validationData = allPhaseData.find(phase => phase.validationComplete) || {};

  const tasks = Object.values(taskData) as TaskData[];
  const employeeName = Object.values(employeeData)[0]?.employeeName || 'Employee';

  // Calculate metrics
  const avgAutomationDesire = tasks.length > 0 ? 
    tasks.reduce((sum, t) => sum + t.automationDesire, 0) / tasks.length : 0;
  
  const avgHumanAgencyScale = tasks.length > 0 ? 
    tasks.reduce((sum, t) => sum + t.humanAgencyScale, 0) / tasks.length : 0;

  // Safely access taskCategorization with fallbacks
  const greenLightTasks = analysisResults?.taskCategorization?.greenLight || [];
  const redLightTasks = analysisResults?.taskCategorization?.redLight || [];
  const rndTasks = analysisResults?.taskCategorization?.rndOpportunity || [];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <User className="h-6 w-6 text-blue-600" />
            {employeeName}'s AI Readiness Profile
          </CardTitle>
          <CardDescription>
            Personalized insights into your tasks' AI readiness and automation potential
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Executive Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Executive Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{tasks.length}</div>
              <div className="text-sm text-gray-600">Tasks Assessed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{Math.round(avgAutomationDesire * 10) / 10}/5</div>
              <div className="text-sm text-gray-600">Avg. Automation Desire</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{Math.round(avgHumanAgencyScale * 10) / 10}/5</div>
              <div className="text-sm text-gray-600">Avg. Human Agency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{greenLightTasks.length || 0}</div>
              <div className="text-sm text-gray-600">Green Light Tasks</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Key Findings:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                You show {avgAutomationDesire > 3 ? 'strong preference' : 'moderate preference'} for AI automation of routine tasks
              </li>
              <li className="flex items-start gap-2">
                <Brain className="h-4 w-4 text-purple-600 mt-0.5" />
                Your preferred collaboration style emphasizes {avgHumanAgencyScale > 3 ? 'significant human involvement' : 'AI-led processes'} in task execution
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-blue-600 mt-0.5" />
                {greenLightTasks.length || 0} tasks identified as immediate automation opportunities
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Task Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Green Light Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <CheckCircle className="h-5 w-5" />
              Green Light Zone
            </CardTitle>
            <CardDescription>High automation desire + High AI capability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Array.isArray(greenLightTasks) && greenLightTasks.length > 0 ? (
                greenLightTasks.map((task, index) => (
                  <div key={index} className="p-3 bg-green-50 rounded border border-green-200">
                    <div className="font-medium text-green-800">{task.task}</div>
                    <div className="text-sm text-green-600">
                      Automation Desire: {task.automationDesire}/5
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No tasks identified in this category</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Red Light Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-5 w-5" />
              Red Light Zone
            </CardTitle>
            <CardDescription>Low automation desire despite AI capability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Array.isArray(redLightTasks) && redLightTasks.length > 0 ? (
                redLightTasks.map((task, index) => (
                  <div key={index} className="p-3 bg-red-50 rounded border border-red-200">
                    <div className="font-medium text-red-800">{task.task}</div>
                    <div className="text-sm text-red-600">
                      Automation Desire: {task.automationDesire}/5
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No tasks identified in this category</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* R&D Opportunity Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <TrendingUp className="h-5 w-5" />
              R&D Opportunity Zone
            </CardTitle>
            <CardDescription>High desire but requires AI advancement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Array.isArray(rndTasks) && rndTasks.length > 0 ? (
                rndTasks.map((task, index) => (
                  <div key={index} className="p-3 bg-blue-50 rounded border border-blue-200">
                    <div className="font-medium text-blue-800">{task.task}</div>
                    <div className="text-sm text-blue-600">
                      Automation Desire: {task.automationDesire}/5
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No tasks identified in this category</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skill Development Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Skills in Focus for Your Role</CardTitle>
          <CardDescription>
            How AI integration might affect the skills needed for your specific role
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-green-800 mb-2">Skills to Strengthen</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Complex problem-solving and strategic thinking</li>
                  <li>• Interpersonal communication and collaboration</li>
                  <li>• AI oversight and quality assurance</li>
                  <li>• Creative and innovative approaches</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-2">Emerging Opportunities</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• AI prompt engineering and management</li>
                  <li>• Human-AI collaboration workflows</li>
                  <li>• Process optimization and improvement</li>
                  <li>• Knowledge management and curation</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">1</Badge>
              <div>
                <div className="font-medium">Start with Green Light tasks</div>
                <div className="text-sm text-gray-600">Begin AI integration with tasks showing high automation desire and capability</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">2</Badge>
              <div>
                <div className="font-medium">Develop collaboration skills</div>
                <div className="text-sm text-gray-600">Focus on skills that complement AI capabilities and maintain human value</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-300">3</Badge>
              <div>
                <div className="font-medium">Monitor and provide feedback</div>
                <div className="text-sm text-gray-600">Actively participate in AI implementation feedback loops</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndividualReport;
