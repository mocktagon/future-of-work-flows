
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Shield, Users } from 'lucide-react';
import EmployeeUpload from '../EmployeeUpload';

interface EmployeeRecord {
  name: string;
  email: string;
}

interface OnboardingStepContentProps {
  stepIndex: number;
  employeeList: EmployeeRecord[];
  selectedEmployee: string;
  hasConsented: boolean;
  organizationName?: string;
  onEmployeeListChange: (employees: EmployeeRecord[]) => void;
  onSelectedEmployeeChange: (employee: string) => void;
  onConsentChange: (consented: boolean) => void;
}

const OnboardingStepContent: React.FC<OnboardingStepContentProps> = ({
  stepIndex,
  employeeList,
  selectedEmployee,
  hasConsented,
  organizationName,
  onEmployeeListChange,
  onSelectedEmployeeChange,
  onConsentChange
}) => {
  const stepContent = [
    // Step 0: Welcome and Upload
    (
      <div className="space-y-4">
        <p className="text-gray-700">
          Hello! This process is designed to understand how AI agents can best support your work, 
          making it more efficient and fulfilling.
        </p>
        <EmployeeUpload
          employeeList={employeeList}
          selectedEmployee={selectedEmployee}
          onEmployeeListChange={onEmployeeListChange}
          onSelectedEmployeeChange={onSelectedEmployeeChange}
        />
      </div>
    ),
    // Step 1: Process Overview
    (
      <div className="space-y-4">
        <p className="text-gray-700">
          We'll explore your tasks, your preferences for working with AI, and what this means 
          for future skill development.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">What to Expect:</h4>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>• 4 short, conversational interviews in the next steps</li>
            <li>• Each interview builds on the previous one</li>
            <li>• AI-powered conversational interface - speak naturally</li>
            <li>• Approximately 15-20 minutes per session</li>
          </ul>
        </div>
      </div>
    ),
    // Step 2: Privacy & Confidentiality
    (
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
    ),
    // Step 3: Consent & Participation
    (
      <div className="space-y-4">
        <p className="text-gray-700">
          By participating, you'll help {organizationName || 'your organization'} 
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
            onCheckedChange={(checked) => onConsentChange(checked === true)}
          />
          <Label htmlFor="consent" className="text-sm">
            I agree to participate in this AI readiness assessment and consent to the use of 
            my anonymized responses for organizational AI strategy development.
          </Label>
        </div>
      </div>
    )
  ];

  return stepContent[stepIndex] || null;
};

export default OnboardingStepContent;
