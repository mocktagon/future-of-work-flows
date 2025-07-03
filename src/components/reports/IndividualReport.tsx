
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { User, Target, TrendingUp, MessageSquare, BookOpen, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

const IndividualReport = ({ data }) => {
  const automationDesireScore = (data.automationDesire / 5) * 100;
  const hasLevelColors = {
    1: 'bg-red-100 text-red-800 border-red-200',
    2: 'bg-orange-100 text-orange-800 border-orange-200',
    3: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    4: 'bg-blue-100 text-blue-800 border-blue-200',
    5: 'bg-green-100 text-green-800 border-green-200'
  };

  const getHASDescription = (level) => {
    const descriptions = {
      1: 'AI handles entirely',
      2: 'Minimal human input',
      3: 'Equal partnership',
      4: 'AI requires human input',
      5: 'Fully relies on your involvement'
    };
    return descriptions[level] || 'Unknown';
  };

  const getZoneColor = (zone) => {
    const colors = {
      greenLight: 'bg-green-100 text-green-800 border-green-200',
      redLight: 'bg-red-100 text-red-800 border-red-200',
      rndOpportunity: 'bg-blue-100 text-blue-800 border-blue-200',
      lowPriority: 'bg-gray-100 text-gray-600 border-gray-200'
    };
    return colors[zone] || 'bg-gray-100 text-gray-600 border-gray-200';
  };

  const getZoneTitle = (zone) => {
    const titles = {
      greenLight: 'Green Light Zone',
      redLight: 'Red Light Zone',
      rndOpportunity: 'R&D Opportunity Zone',
      lowPriority: 'Low Priority Zone'
    };
    return titles[zone] || 'Unknown Zone';
  };

  const getZoneDescription = (zone) => {
    const descriptions = {
      greenLight: 'High automation desire + High AI capability = Ready for implementation',
      redLight: 'Low automation desire + High AI capability = Proceed with caution',
      rndOpportunity: 'High automation desire + Limited AI capability = Future development opportunity',
      lowPriority: 'Low automation desire + Limited AI capability = Not a current focus'
    };
    return descriptions[zone] || 'Zone description not available';
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-blue-900">
            <User className="h-6 w-6" />
            {data.employeeName}'s AI Readiness Profile
          </CardTitle>
          <CardDescription className="text-blue-700">
            Personalized insights and recommendations for AI integration in your role
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">{data.role}</div>
              <div className="text-sm text-blue-600">Current Role</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">{data.department}</div>
              <div className="text-sm text-blue-600">Department</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">{data.tasksAssessed}</div>
              <div className="text-sm text-blue-600">Tasks Assessed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">H{data.dominantHAS}</div>
              <div className="text-sm text-blue-600">Preferred HAS Level</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Executive Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Executive Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Automation Desire Score</span>
                  <span className="text-sm text-gray-600">{data.automationDesire}/5.0</span>
                </div>
                <Progress value={automationDesireScore} className="h-3" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Preferred Human Agency Level</span>
                  <Badge className={hasLevelColors[data.dominantHAS]}>
                    H{data.dominantHAS} - {getHASDescription(data.dominantHAS)}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Key Insights:</h4>
              {data.keyInsights.map((insight, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  {insight}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task Zone Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            Your Tasks on the AI Desire-Capability Map
          </CardTitle>
          <CardDescription>
            Tasks categorized by automation potential and your preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {Object.entries(data.taskZones).map(([zone, tasks]) => (
            <div key={zone} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{getZoneTitle(zone)}</h4>
                <Badge className={getZoneColor(zone)}>
                  {tasks.length} task{tasks.length !== 1 ? 's' : ''}
                </Badge>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">
                {getZoneDescription(zone)}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {tasks.map((task, index) => (
                  <Card key={index} className={`p-3 ${getZoneColor(zone)} bg-opacity-50`}>
                    <div className="text-sm font-medium">{task}</div>
                  </Card>
                ))}
              </div>
              
              {zone !== 'lowPriority' && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Human Agency Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            Human Agency for Your Tasks
          </CardTitle>
          <CardDescription>
            Analysis of your preferred level of human involvement across different tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-2 text-center">
              {[1, 2, 3, 4, 5].map((level) => (
                <div key={level} className={`p-3 rounded border ${hasLevelColors[level]}`}>
                  <div className="font-bold text-lg">H{level}</div>
                  <div className="text-xs">{getHASDescription(level)}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Your Dominant Preference: H{data.dominantHAS}</h4>
                  <p className="text-sm text-blue-800">
                    You tend to prefer "{getHASDescription(data.dominantHAS)}" collaboration with AI systems. 
                    This suggests you value {data.dominantHAS >= 4 ? 'maintaining strong human control and oversight' : 
                    data.dominantHAS === 3 ? 'balanced partnership between human and AI capabilities' : 
                    'efficient AI assistance with minimal human oversight'}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Focus */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Skills in Focus for Your Role
          </CardTitle>
          <CardDescription>
            How AI integration might affect the skills needed for your role
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-green-900 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Skills Gaining Importance
              </h4>
              <div className="space-y-2">
                {['Complex Problem Solving', 'Strategic Thinking', 'Interpersonal Communication', 'Creative Innovation'].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {skill}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-orange-900 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Skills Being Automated
              </h4>
              <div className="space-y-2">
                {['Routine Data Processing', 'Manual Calculations', 'Basic Reporting', 'Simple Analysis'].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                      {skill}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personalized Recommendations */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-900">
            <Lightbulb className="h-5 w-5" />
            Personalized Recommendations
          </CardTitle>
          <CardDescription className="text-purple-700">
            Tailored suggestions for your AI integration journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-purple-900">Immediate Actions</h4>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                  Start with automating {data.taskZones.greenLight[0] || 'routine tasks'}
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                  Request AI training for collaboration tools
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                  Identify skill development opportunities
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-purple-900">Long-term Development</h4>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                  Develop expertise in strategic decision-making
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                  Enhance interpersonal and leadership skills
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                  Stay updated on AI collaboration best practices
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndividualReport;
