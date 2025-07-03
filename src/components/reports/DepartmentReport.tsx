
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, TrendingUp, AlertTriangle, Target, BookOpen, MessageSquare, CheckCircle } from 'lucide-react';

const DepartmentReport = ({ data }) => {
  const participationScore = (data.participationRate / 100) * 100;
  const automationDesireScore = (data.averageAutomationDesire / 5) * 100;

  return (
    <div className="space-y-6">
      {/* Department Overview */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-green-900">
            <Users className="h-6 w-6" />
            {data.departmentName} AI Readiness Snapshot
          </CardTitle>
          <CardDescription className="text-green-700">
            Collective AI readiness analysis for your department
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-700 mb-1">{data.totalEmployees}</div>
              <div className="text-sm text-green-600">Total Employees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-700 mb-1">{data.participationRate}%</div>
              <div className="text-sm text-green-600">Participation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-700 mb-1">{data.averageAutomationDesire}/5</div>
              <div className="text-sm text-green-600">Avg. Automation Desire</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-700 mb-1">H{data.dominantHAS}</div>
              <div className="text-sm text-green-600">Dominant HAS Level</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Departmental Landscape */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            Departmental Desire-Capability Landscape
          </CardTitle>
          <CardDescription>
            Overview of task automation potential across the department
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Overall Automation Readiness</span>
                <span className="text-sm text-gray-600">{data.averageAutomationDesire}/5.0</span>
              </div>
              <Progress value={automationDesireScore} className="h-3" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Assessment Participation</span>
                <span className="text-sm text-gray-600">{data.participationRate}%</span>
              </div>
              <Progress value={participationScore} className="h-3" />
            </div>
          </div>

          {/* Task Distribution Visualization */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700 mb-1">25%</div>
                <div className="text-xs text-green-600">Green Light Tasks</div>
              </div>
            </Card>
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-700 mb-1">20%</div>
                <div className="text-xs text-blue-600">R&D Opportunity</div>
              </div>
            </Card>
            <Card className="p-4 bg-red-50 border-red-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-700 mb-1">30%</div>
                <div className="text-xs text-red-600">Red Light Tasks</div>
              </div>
            </Card>
            <Card className="p-4 bg-gray-50 border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-1">25%</div>
                <div className="text-xs text-gray-600">Low Priority</div>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Common Pain Points & Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Common Pain Points & Opportunities
          </CardTitle>
          <CardDescription>
            Shared challenges and automation opportunities within the department
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-green-900 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Most Desired for Automation
              </h4>
              <div className="space-y-2">
                {data.commonTasksForAutomation.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-200">
                    <span className="text-sm text-green-800">{task}</span>
                    <Badge className="bg-green-100 text-green-700 border-green-300">
                      {85 - index * 5}%
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-orange-900 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Common Concerns
              </h4>
              <div className="space-y-2">
                {data.sharedConcerns.map((concern, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-orange-50 rounded border border-orange-200">
                    <span className="text-sm text-orange-800">{concern}</span>
                    <Badge className="bg-orange-100 text-orange-700 border-orange-300">
                      {60 + index * 10}%
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* HAS Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            Departmental HAS Profile
          </CardTitle>
          <CardDescription>
            Distribution of preferred human agency levels across the department
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-2">
              {[
                { level: 1, percentage: 10, label: 'AI handles entirely' },
                { level: 2, percentage: 20, label: 'Minimal human input' },
                { level: 3, percentage: 40, label: 'Equal partnership' },
                { level: 4, percentage: 25, label: 'AI requires human input' },
                { level: 5, percentage: 5, label: 'Fully relies on human' }
              ].map((has) => (
                <div key={has.level} className="text-center">
                  <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-2">
                    <div className="font-bold text-lg text-blue-700">H{has.level}</div>
                    <div className="text-xs text-blue-600">{has.percentage}%</div>
                  </div>
                  <div className="text-xs text-gray-600">{has.label}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Department Insight</h4>
                  <p className="text-sm text-blue-800">
                    Your department shows a strong preference for H3 (Equal Partnership) collaboration, 
                    indicating a balanced approach to AI integration where both human expertise and AI 
                    capabilities are valued equally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skill Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Skill Trends for the Department
          </CardTitle>
          <CardDescription>
            How core skills within the department are expected to evolve
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
                {data.skillTrends.increasing.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-200">
                    <span className="text-sm text-green-800">{skill}</span>
                    <Badge className="bg-green-100 text-green-700 border-green-300">
                      +{20 + index * 5}%
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
                {data.skillTrends.decreasing.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-red-50 rounded border border-red-200">
                    <span className="text-sm text-red-800">{skill}</span>
                    <Badge className="bg-red-100 text-red-700 border-red-300">
                      -{15 + index * 10}%
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Department Recommendations */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-900">
            <Target className="h-5 w-5" />
            Department-Specific Recommendations
          </CardTitle>
          <CardDescription className="text-purple-700">
            Tailored strategies for your department's AI integration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-purple-900">Priority Actions</h4>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                  Focus on automating {data.commonTasksForAutomation[0]}
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                  Address trust and reliability concerns through training
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                  Develop collaborative AI workflows
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-purple-900">Team Development</h4>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                  Strengthen {data.skillTrends.increasing[0]} capabilities
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                  Create AI collaboration guidelines
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                  Establish department AI champions
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DepartmentReport;
