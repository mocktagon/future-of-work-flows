
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Circle, Square, CheckCircle, Shield, MessageSquare, Users, Upload, Download } from 'lucide-react';
import ProgressIndicator from './ProgressIndicator';
import OnboardingNavigation from './OnboardingNavigation';
import OnboardingStep from './OnboardingStep';
import OnboardingStepContent from './onboarding/OnboardingStepContent';
import { OrganizationData } from '@/types/interview';

interface EmployeeRecord {
  name: string;
  email: string;
}

interface EmployeeOnboardingProps {
  onComplete: (data: any) => void;
  organizationData?: OrganizationData | null;
}

const EmployeeOnboarding: React.FC<EmployeeOnboardingProps> = ({ onComplete, organizationData }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [consentGiven, setConsentGiven] = useState(false);
  const [employeeList, setEmployeeList] = useState<EmployeeRecord[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const onboardingSteps = [
    {
      id: 'consent',
      title: 'Consent & Privacy',
      icon: Shield,
      content: {
        subtitle: 'Your privacy is our priority',
        description: 'We collect only the information necessary to provide you with valuable insights.',
        details: [
          'Your responses are anonymized and aggregated',
          'No personal information is shared with third parties',
          'You can withdraw from the assessment at any time',
          'Data is used solely for generating your AI readiness report'
        ]
      }
    },
    {
      id: 'upload',
      title: 'Upload Team List',
      icon: Upload,
      content: {
        subtitle: 'Upload your team member list',
        description: 'Upload a CSV file with team member names and email addresses.',
        details: [
          'Download our template to get started',
          'Include all team members who will participate',
          'Select your own name from the uploaded list',
          'This helps us personalize your assessment experience'
        ]
      }
    },
    {
      id: 'instructions',
      title: 'How It Works',
      icon: MessageSquare,
      content: {
        subtitle: 'Simple, conversational approach',
        description: 'Our AI interviewer will guide you through each step of the assessment process.',
        details: [
          'Speak naturally - our AI understands conversational responses',
          'Be honest about your current processes and challenges',
          'There are no right or wrong answers',
          'The more detailed your responses, the better your recommendations'
        ]
      }
    }
  ];

  const downloadTemplate = () => {
    const csvContent = "Name,Email\nJohn Doe,john.doe@company.com\nJane Smith,jane.smith@company.com";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'employee_template.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split('\n');
      const employees: EmployeeRecord[] = [];
      
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
          const [name, email] = line.split(',');
          if (name && email) {
            employees.push({ name: name.trim(), email: email.trim() });
          }
        }
      }
      
      setEmployeeList(employees);
    };
    reader.readAsText(file);
  };

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Onboarding complete, submit data
      const selectedEmployeeData = employeeList.find(emp => emp.name === selectedEmployee);
      const onboardingData = {
        teamMemberName: selectedEmployee,
        employeeName: selectedEmployee,
        email: selectedEmployeeData?.email || '',
        organizationName: organizationData?.organizationName || 'Organization',
        consentGiven,
        employeeList,
        selectedEmployee,
        onboardingCompleted: true,
        completedAt: new Date().toISOString()
      };
      onComplete(onboardingData);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };

  const canProceed = (() => {
    switch (currentStep) {
      case 0:
        return consentGiven === true;
      case 1:
        return employeeList.length > 0 && selectedEmployee !== '';
      case 2:
        return true;
      default:
        return false;
    }
  })();

  return (
    <div className="max-w-4xl mx-auto">
      <ProgressIndicator 
        currentStep={currentStep}
        totalSteps={onboardingSteps.length}
        title="Team Onboarding"
      />

      <OnboardingStep
        title={onboardingSteps[currentStep].title}
        icon={onboardingSteps[currentStep].icon}
        organizationName={organizationData?.organizationName}
      >
        {currentStep === 1 ? (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {onboardingSteps[currentStep].content.subtitle}
              </h3>
              <p className="text-gray-600 mb-6">
                {onboardingSteps[currentStep].content.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">What you'll need:</h4>
              <ul className="space-y-3">
                {onboardingSteps[currentStep].content.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Upload className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-center space-y-4">
                <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Upload Employee List</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload a CSV file with employee names and email addresses
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={downloadTemplate}
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download Template
                    </Button>
                    <Label htmlFor="file-upload" className="cursor-pointer">
                      <Button variant="outline" size="sm" asChild>
                        <span className="flex items-center gap-2">
                          <Upload className="h-4 w-4" />
                          Upload CSV
                        </span>
                      </Button>
                    </Label>
                    <Input
                      id="file-upload"
                      type="file"
                      accept=".csv"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            {employeeList.length > 0 && (
              <div className="space-y-2">
                <Label htmlFor="employeeSelect">Select Your Name</Label>
                <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                  <SelectTrigger className="max-w-md">
                    <SelectValue placeholder="Choose your name from the list" />
                  </SelectTrigger>
                  <SelectContent>
                    {employeeList.map((employee, index) => (
                      <SelectItem key={index} value={employee.name}>
                        {employee.name} ({employee.email})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {employeeList.length > 0 && (
              <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                Successfully loaded {employeeList.length} employees from the uploaded file.
              </div>
            )}
          </div>
        ) : (
          <OnboardingStepContent 
            step={onboardingSteps[currentStep]}
            teamMemberName=""
            setTeamMemberName={() => {}}
            consentGiven={consentGiven}
            setConsentGiven={setConsentGiven}
            organizationName={organizationData?.organizationName || ''}
            setOrganizationName={() => {}}
          />
        )}
      </OnboardingStep>

      <OnboardingNavigation
        currentStep={currentStep}
        totalSteps={onboardingSteps.length}
        canProceed={canProceed}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default EmployeeOnboarding;
