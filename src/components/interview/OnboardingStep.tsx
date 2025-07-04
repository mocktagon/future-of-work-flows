
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface OnboardingStepProps {
  title: string;
  icon: LucideIcon;
  organizationName?: string;
  children: React.ReactNode;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({ 
  title, 
  icon: IconComponent, 
  organizationName,
  children 
}) => {
  return (
    <Card className="min-h-[500px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <IconComponent className="h-6 w-6 text-blue-600" />
          {title}
        </CardTitle>
        <CardDescription>
          {organizationName && (
            <span className="text-blue-600 font-medium">
              {organizationName}
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {children}
      </CardContent>
    </Card>
  );
};

export default OnboardingStep;
