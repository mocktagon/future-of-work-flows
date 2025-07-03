
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Square, Shield, Clock, MessageCircle, Users } from 'lucide-react';

const EmployeeOnboarding = ({ onComplete, organizationData }) => {
  const [employeeName, setEmployeeName] = useState('');
  const [hasConsented, setHasConsented] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const onboardingSteps = [
    {
      title: "Welcome to Your AI Readiness Interview",
      icon: MessageCircle,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Hello! This process is designed to understand how AI agents can best support your work, 
            making it more efficient and fulfilling.
          </p>
          <div className="space-y-2">
            <Label htmlFor="employeeName">Your Name</Label>
            <Input
              id="employeeName"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="Enter your full name"
              className="max-w-md"
            />
          </div>
        </div>
      )
    },
    {
      title: "Process Overview",
      icon: Clock,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            We'll explore your tasks, your preferences for working with AI, and what this means 
            for future skill development.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">What to Expect:</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• 4 short, conversational interviews over the coming weeks</li>
              <li>• Each interview builds on the previous one</li>
              <li>• AI-powered conversational interface - speak naturally</li>
              <li>• Approximately 15-20 minutes per session</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Privacy & Confidentiality",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Your responses are confidential and will be used to generate aggregated insights 
              for the organization's AI strategy, not for individual performance evaluation or job replacement.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Data Usage:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">✓</Badge>
                Anonymized responses for organizational AI strategy
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">✓</Badge>
                Aggregated insights across departments
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">✗</Badge>
                Individual performance evaluation
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">✗</Badge>
                Job replacement decisions
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Consent & Participation",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            By participating, you'll help {organizationData?.organizationName || 'your organization'} 
            develop a thoughtful AI integration strategy that considers employee preferences and maintains 
            human agency in meaningful work.
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-medium text-green-900 mb-2">Your Benefits:</h4>
            <ul className="space-y-1 text-sm text-green-800">
              <li>• Influence how AI is integrated into your role</li>
              <li>• Receive personalized AI readiness insights</li>
              <li>• Shape skill development opportunities</li>
              <li>• Contribute to thoughtful workforce transformation</li>
            </ul>
          </div>

          <div className="flex items-center space-x-2 pt-4">
            <Checkbox
              id="consent"
              checked={hasConsented}
              onCheckedChange={setHasConsented}
            />
            <Label htmlFor="consent" className="text-sm">
              I agree to participate in this AI readiness assessment and consent to the use of 
              my anonymized responses for organizational AI strategy development.
            </Label>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = onboardingSteps[currentStep];
  const IconComponent = currentStepData.icon;

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      onComplete({
        employeeName,
        consentGiven: hasConsented,
        onboardingCompleted: true,
        completedAt: new Date().toISOString()
      });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    if (currentStep === 0) return employeeName.trim().length > 0;
    if (currentStep === onboardingSteps.length - 1) return hasConsented;
    return true;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Employee Onboarding</h2>
          <Badge variant="outline">
            Step {currentStep + 1} of {onboardingSteps.length}
          </Badge>
        </div>
        
        <div className="flex space-x-2">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded ${
                index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current Step Content */}
      <Card className="min-h-[500px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <IconComponent className="h-6 w-6 text-blue-600" />
            {currentStepData.title}
          </CardTitle>
          <CardDescription>
            {organizationData && (
              <span className="text-blue-600 font-medium">
                {organizationData.organizationName}
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentStepData.content}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-6">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        
        <div className="text-sm text-gray-600">
          {currentStep + 1} of {onboardingSteps.length}
        </div>
        
        <Button 
          onClick={handleNext}
          disabled={!canProceed()}
        >
          {currentStep === onboardingSteps.length - 1 ? 'Begin Assessment' : 'Continue'}
        </Button>
      </div>
    </div>
  );
};

export default EmployeeOnboarding;
