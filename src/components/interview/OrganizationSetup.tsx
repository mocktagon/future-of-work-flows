
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Circle } from 'lucide-react';
import { useOrganization } from '@/hooks/useOrganization';
import { INDUSTRIES, COMMON_DEPARTMENTS } from '@/utils/constants';
import { organizationSchema, type OrganizationFormData } from '@/utils/validation';
import { z } from 'zod';

interface OrganizationSetupProps {
  onComplete: (data: OrganizationFormData) => void;
}

const OrganizationSetup = ({ onComplete }: OrganizationSetupProps) => {
  const { saveOrganization, isSubmitting } = useOrganization();
  const [formData, setFormData] = useState<OrganizationFormData>({
    organizationName: '',
    email: '',
    totalEmployees: 1,
    industry: '',
    departments: []
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleDepartmentChange = (dept: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      departments: checked 
        ? [...prev.departments, dept]
        : prev.departments.filter(d => d !== dept)
    }));
    setValidationErrors(prev => ({ ...prev, departments: '' }));
  };

  const handleEmployeeCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setFormData(prev => ({
      ...prev,
      totalEmployees: value
    }));
    setValidationErrors(prev => ({ ...prev, totalEmployees: '' }));
  };

  const validateForm = () => {
    try {
      organizationSchema.parse(formData);
      setValidationErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0] as string] = err.message;
          }
        });
        setValidationErrors(errors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const result = await saveOrganization(formData as {
      organizationName: string;
      email: string;
      totalEmployees: number;
      industry: string;
      departments: string[];
    });
    if (result.success) {
      onComplete(formData);
    }
  };

  const isFormValid = () => {
    try {
      organizationSchema.parse(formData);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Define Organization for AI Readiness Assessment
        </h2>
        <p className="text-gray-600">
          Capture fundamental information about your organization to tailor the assessment process
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Circle className="h-5 w-5 text-blue-600" />
              Basic Information
            </CardTitle>
            <CardDescription>
              Core details about your organization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="orgName">Organization Name *</Label>
                <Input
                  id="orgName"
                  value={formData.organizationName}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, organizationName: e.target.value }));
                    setValidationErrors(prev => ({ ...prev, organizationName: '' }));
                  }}
                  placeholder="Enter your organization name"
                  required
                  className={validationErrors.organizationName ? 'border-destructive' : ''}
                />
                {validationErrors.organizationName && (
                  <p className="text-sm text-destructive mt-1">{validationErrors.organizationName}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Contact Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, email: e.target.value }));
                    setValidationErrors(prev => ({ ...prev, email: '' }));
                  }}
                  placeholder="your.email@company.com"
                  required
                  className={validationErrors.email ? 'border-destructive' : ''}
                />
                {validationErrors.email && (
                  <p className="text-sm text-destructive mt-1">{validationErrors.email}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="employees">Total Number of Employees *</Label>
                <Input
                  id="employees"
                  type="number"
                  value={formData.totalEmployees}
                  onChange={handleEmployeeCountChange}
                  placeholder="e.g., 250"
                  required
                  min="1"
                  className={validationErrors.totalEmployees ? 'border-destructive' : ''}
                />
                {validationErrors.totalEmployees && (
                  <p className="text-sm text-destructive mt-1">{validationErrors.totalEmployees}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry/Sector *</Label>
              <Select 
                value={formData.industry}
                onValueChange={(value) => {
                  setFormData(prev => ({ ...prev, industry: value }));
                  setValidationErrors(prev => ({ ...prev, industry: '' }));
                }}
              >
                <SelectTrigger className={validationErrors.industry ? 'border-destructive' : ''}>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  {INDUSTRIES.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {validationErrors.industry && (
                <p className="text-sm text-destructive mt-1">{validationErrors.industry}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Departments */}
        <Card>
          <CardHeader>
            <CardTitle>Key Departments/Teams *</CardTitle>
            <CardDescription>
              Select all departments that will participate in the assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {COMMON_DEPARTMENTS.map((dept) => (
                <div key={dept} className="flex items-center space-x-2">
                  <Checkbox
                    id={`dept-${dept}`}
                    checked={formData.departments.includes(dept)}
                    onCheckedChange={(checked) => handleDepartmentChange(dept, !!checked)}
                  />
                  <Label htmlFor={`dept-${dept}`} className="text-sm">
                    {dept}
                  </Label>
                </div>
              ))}
            </div>
            
            {validationErrors.departments && (
              <p className="text-sm text-destructive mt-2">{validationErrors.departments}</p>
            )}
            
            {formData.departments.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Selected departments:</p>
                <div className="flex flex-wrap gap-2">
                  {formData.departments.map((dept) => (
                    <Badge key={dept} variant="secondary">
                      {dept}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button 
            type="submit" 
            disabled={!isFormValid() || isSubmitting}
            className="px-8 py-2"
          >
            {isSubmitting ? 'Saving...' : 'Complete Organization Setup'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OrganizationSetup;
