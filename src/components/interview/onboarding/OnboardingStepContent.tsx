import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LucideIcon } from 'lucide-react';
import { CheckCircle, Shield, MessageSquare, Clock } from 'lucide-react';

interface OnboardingStepContentProps {
  step: any;
  teamMemberName: string;
  setTeamMemberName: (name: string) => void;
  consentGiven: boolean;
  setConsentGiven: (consent: boolean) => void;
  organizationName: string;
  setOrganizationName: (name: string) => void;
}

const OnboardingStepContent: React.FC<OnboardingStepContentProps> = ({
  step,
  teamMemberName,
  setTeamMemberName,
  consentGiven,
  setConsentGiven,
  organizationName,
  setOrganizationName
}) => {
  const renderStepContent = () => {
    switch (step.id) {
      case 'welcome':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.content.subtitle}
              </h3>
              <p className="text-gray-600 mb-6">
                {step.content.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">What to expect:</h4>
              <ul className="space-y-3">
                {step.content.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <Label htmlFor="teamMember" className="text-sm font-medium text-gray-700">
                Your Name
              </Label>
              <Input
                id="teamMember"
                type="text"
                placeholder="Enter your name"
                value={teamMemberName}
                onChange={(e) => setTeamMemberName(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
                Organization Name
              </Label>
              <Input
                id="organization"
                type="text"
                placeholder="Enter your organization name"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        );

      case 'consent':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.content.subtitle}
              </h3>
              <p className="text-gray-600 mb-6">
                {step.content.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Privacy commitments:</h4>
              <ul className="space-y-3">
                {step.content.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Checkbox
                id="consent"
                checked={consentGiven}
                onCheckedChange={(checked) => setConsentGiven(checked as boolean)}
              />
              <Label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                I understand and agree to participate in this AI readiness assessment. 
                I consent to the collection and processing of my responses for the purpose 
                of generating personalized AI integration recommendations.
              </Label>
            </div>
          </div>
        );

      case 'instructions':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.content.subtitle}
              </h3>
              <p className="text-gray-600 mb-6">
                {step.content.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Tips for best results:</h4>
              <ul className="space-y-3">
                {step.content.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-green-600" />
                <h4 className="font-medium text-green-900">Ready to begin?</h4>
              </div>
              <p className="text-green-800 text-sm">
                Once you proceed, you'll start the first interview phase. 
                The AI interviewer will guide you through understanding your current tasks and processes.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div>{renderStepContent()}</div>;
};

export default OnboardingStepContent;
