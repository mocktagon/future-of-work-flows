
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Building, TrendingUp, Target, AlertTriangle, Lightbulb, Users, BookOpen, Settings, CheckCircle } from 'lucide-react';

const OrganizationReport = ({ data }) => {
  const readinessScore = (data.overallReadinessScore / 10) * 100;
  const participationScore = data.participationRate;

  return (
    <div className="space-y-6">
      {/* Organization Overview */}
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-purple-900">
            <Building className="h-6 w-6" />
            {data.organizationName} AI Readiness Strategy Report
          </CardTitle>
          <CardDescription className="text-purple-700">
            Strategic overview of your organization's AI readiness posture
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-700 mb-1">{data.totalEmployees}</div>
              <div className="text-sm text-purple-600">Total Employees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-700 mb-1">{data.departmentsAssessed}</div>
              <div className="text-sm text-purple-600">Departments Assessed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-700 mb-1">{data.participationRate}%</div>
              <div className="text-sm text-purple-600">Participation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-700 mb-1">{data.overallReadinessScore}/10</div>
              <div className="text-sm text-purple-600">Readiness Score</div>
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
          <CardDescription>
            High-level strategic insights for leadership decision-making
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Overall AI Readiness</span>
                <span className="text-sm text-gray-600">{data.overallReadinessScore}/10</span>
              </div>
              <Progress value={readinessScore} className="h-3 mb-4" />
              <p className="text-sm text-gray-600">
                Your organization shows <strong>strong readiness</strong> for AI integration with 
                balanced employee sentiment and clear automation opportunities.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Employee Engagement</span>
                <span className="text-sm text-gray-600">{data.participationRate}%</span>
              </div>
              <Progress value={participationScore} className="h-3 mb-4" />
              <p className="text-sm text-gray-600">
                High participation rate indicates <strong>strong employee buy-in</strong> and 
                willingness to engage with AI transformation initiatives.
              </p>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 bg-green-50 border-green-200 text-center">
              <div className="text-xl font-bold text-green-700">42%</div>
              <div className="text-xs text-green-600">High Automation Desire</div>
            </Card>
            <Card className="p-4 bg-blue-50 border-blue-200 text-center">
              <div className="text-xl font-bold text-blue-700">38%</div>
              <div className="text-xs text-blue-600">Collaborative Preference</div>
            </Card>
            <Card className="p-4 bg-yellow-50 border-yellow-200 text-center">
              <div className="text-xl font-bold text-yellow-700">15%</div>
              <div className="text-xs text-yellow-600">Need Upskilling</div>
            </Card>
            <Card className="p-4 bg-purple-50 border-purple-200 text-center">
              <div className="text-xl font-bold text-purple-700">5%</div>
              <div className="text-xs text-purple-600">Strong Resistance</div>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Overall Desire-Capability Landscape */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            Overall Desire-Capability Landscape
          </CardTitle>
          <CardDescription>
            Comprehensive view of all tasks across the organization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Zone Distribution */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700 mb-1">28%</div>
                <div className="text-sm text-green-600 mb-2">Green Light Zone</div>
                <div className="text-xs text-green-500">Ready for Implementation</div>
              </div>
            </Card>
            
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-700 mb-1">22%</div>
                <div className="text-sm text-blue-600 mb-2">R&D Opportunity</div>
                <div className="text-xs text-blue-500">Future Development</div>
              </div>
            </Card>
            
            <Card className="p-4 bg-red-50 border-red-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-700 mb-1">25%</div>
                <div className="text-sm text-red-600 mb-2">Red Light Zone</div>
                <div className="text-xs text-red-500">Proceed with Caution</div>
              </div>
            </Card>
            
            <Card className="p-4 bg-gray-50 border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-1">25%</div>
                <div className="text-sm text-gray-600 mb-2">Low Priority</div>
                <div className="text-xs text-gray-500">Not Current Focus</div>
              </div>
            </Card>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Strategic Insight</h4>
            <p className="text-sm text-blue-800">
              With 28% of tasks in the Green Light Zone and 22% showing R&D potential, 
              your organization has a solid foundation for both immediate AI deployment 
              and strategic future development.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Top Automation Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-600" />
            Top Automation Opportunities
          </CardTitle>
          <CardDescription>
            Most desired tasks for AI automation across the organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.topAutomationOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded border border-green-200">
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-100 text-green-700 border-green-300">
                    #{index + 1}
                  </Badge>
                  <span className="font-medium text-green-800">{opportunity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-green-600">{90 - index * 5}% desire</span>
                  <Progress value={90 - index * 5} className="w-20 h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Resistance & Trust Barriers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            Key Resistance & Trust Barriers
          </CardTitle>
          <CardDescription>
            Most prominent concerns and barriers across the organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.keyBarriers.map((barrier, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded border border-orange-200">
                <span className="text-sm text-orange-800">{barrier}</span>
                <Badge className="bg-orange-100 text-orange-700 border-orange-300">
                  {35 + index * 8}%
                </Badge>
              </div>
            ))}
          </div>
          
          <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-medium text-orange-900 mb-2">Mitigation Strategy</h4>
            <p className="text-sm text-orange-800">
              These barriers are addressable through targeted training, transparent communication, 
              and gradual implementation with strong change management support.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Organizational Skill Transformation Map */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Organizational Skill Transformation Map
          </CardTitle>
          <CardDescription>
            How core competencies are shifting across the workforce
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
                {[
                  'Complex Problem Solving',
                  'Strategic Thinking',
                  'Interpersonal Communication',
                  'Creative Innovation',
                  'Leadership & Management'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-200">
                    <span className="text-sm text-green-800">{skill}</span>
                    <Badge className="bg-green-100 text-green-700 border-green-300">
                      +{25 + index * 5}%
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-red-900 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Skills Being Automated
              </h4>
              <div className="space-y-2">
                {[
                  'Routine Data Processing',
                  'Manual Calculations',
                  'Basic Reporting',
                  'Simple Analysis',
                  'Administrative Tasks'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-red-50 rounded border border-red-200">
                    <span className="text-sm text-red-800">{skill}</span>
                    <Badge className="bg-red-100 text-red-700 border-red-300">
                      -{20 + index * 5}%
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strategic Recommendations */}
      <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-900">
            <Lightbulb className="h-5 w-5" />
            Strategic Recommendations for AI Investment & Workforce Development
          </CardTitle>
          <CardDescription className="text-indigo-700">
            Data-backed recommendations for leadership and strategic planning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {data.strategicRecommendations.map((recommendation, index) => (
              <div key={index}>
                <div className="flex items-start gap-3 mb-3">
                  <Badge className="bg-indigo-100 text-indigo-700 border-indigo-300 mt-0.5">
                    {index + 1}
                  </Badge>
                  <div>
                    <h4 className="font-medium text-indigo-900 mb-1">{recommendation}</h4>
                    <p className="text-sm text-indigo-700">
                      {getRecommendationDetails(recommendation)}
                    </p>
                  </div>
                </div>
                {index < data.strategicRecommendations.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Roadmap */}
      <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-900">
            <Settings className="h-5 w-5" />
            Implementation Roadmap
          </CardTitle>
          <CardDescription className="text-emerald-700">
            Phased approach to AI integration and workforce transformation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-emerald-900">Phase 1: Foundation (0-6 months)</h4>
                <ul className="space-y-2 text-sm text-emerald-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    Launch pilot programs in Green Light zones
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    Establish AI governance framework
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    Begin trust-building initiatives
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-emerald-900">Phase 2: Expansion (6-18 months)</h4>
                <ul className="space-y-2 text-sm text-emerald-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    Scale successful pilots
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    Implement comprehensive training
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    Address R&D opportunities
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-emerald-900">Phase 3: Optimization (18+ months)</h4>
                <ul className="space-y-2 text-sm text-emerald-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    Full organizational integration
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    Advanced collaboration workflows
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                    Continuous improvement culture
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper function to provide detailed explanations for recommendations
const getRecommendationDetails = (recommendation) => {
  const details = {
    'Implement pilot programs for high-confidence tasks': 'Start with Green Light zone tasks that have high employee desire and proven AI capability to build trust and demonstrate value.',
    'Develop comprehensive training programs': 'Address trust barriers and skill gaps through targeted education on AI collaboration and emerging competencies.',
    'Establish clear AI governance policies': 'Create frameworks for ethical AI use, data privacy, and human oversight to address employee concerns.',
    'Create feedback loops for continuous improvement': 'Implement systems to gather ongoing employee feedback and adapt AI tools to meet evolving needs.'
  };
  
  return details[recommendation] || 'Strategic implementation guidance based on assessment findings.';
};

export default OrganizationReport;
