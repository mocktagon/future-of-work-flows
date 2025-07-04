
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

const OrganizationSetup = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    totalEmployees: '',
    industry: '',
    departments: []
  });

  const industries = [
    'Finance & Banking',
    'Healthcare',
    'Manufacturing',
    'Creative Services',
    'Technology',
    'Retail',
    'Education',
    'Government',
    'Non-profit',
    'Other'
  ];

  const departmentOptions = [
    'Operations',
    'Human Resources',
    'Product Development',
    'Sales',
    'Customer Support',
    'Creative',
    'Marketing',
    'Finance',
    'IT',
    'Legal',
    'Research & Development'
  ];

  const handleDepartmentChange = (dept, checked) => {
    setFormData(prev => ({
      ...prev,
      departments: checked 
        ? [...prev.departments, dept]
        : prev.departments.filter(d => d !== dept)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Organization setup data:', formData);
    onComplete(formData);
  };

  const isFormValid = formData.organizationName && 
                     formData.totalEmployees && 
                     formData.industry && 
                     formData.departments.length > 0;

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
                  onChange={(e) => setFormData(prev => ({ ...prev, organizationName: e.target.value }))}
                  placeholder="Enter your organization name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="employees">Total Number of Employees *</Label>
                <Input
                  id="employees"
                  type="number"
                  value={formData.totalEmployees}
                  onChange={(e) => setFormData(prev => ({ ...prev, totalEmployees: e.target.value }))}
                  placeholder="e.g., 250"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry/Sector *</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
              {departmentOptions.map((dept) => (
                <div key={dept} className="flex items-center space-x-2">
                  <Checkbox
                    id={`dept-${dept}`}
                    checked={formData.departments.includes(dept)}
                    onCheckedChange={(checked) => handleDepartmentChange(dept, checked)}
                  />
                  <Label htmlFor={`dept-${dept}`} className="text-sm">
                    {dept}
                  </Label>
                </div>
              ))}
            </div>
            
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
            disabled={!isFormValid}
            className="px-8 py-2"
          >
            Complete Organization Setup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OrganizationSetup;
