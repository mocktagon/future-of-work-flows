
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Download } from 'lucide-react';

interface EmployeeRecord {
  name: string;
  email: string;
}

interface EmployeeUploadProps {
  employeeList: EmployeeRecord[];
  selectedEmployee: string;
  onEmployeeListChange: (employees: EmployeeRecord[]) => void;
  onSelectedEmployeeChange: (employee: string) => void;
}

const EmployeeUpload: React.FC<EmployeeUploadProps> = ({
  employeeList,
  selectedEmployee,
  onEmployeeListChange,
  onSelectedEmployeeChange
}) => {
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
      
      onEmployeeListChange(employees);
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-4">
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
          <Select value={selectedEmployee} onValueChange={onSelectedEmployeeChange}>
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
  );
};

export default EmployeeUpload;
