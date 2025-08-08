import { z } from 'zod';

export const organizationSchema = z.object({
  organizationName: z.string().min(1, 'Organization name is required'),
  email: z.string().email('Valid email is required'),
  totalEmployees: z.number().min(1, 'Total employees must be at least 1'),
  industry: z.string().min(1, 'Industry is required'),
  departments: z.array(z.string()).min(1, 'At least one department is required')
});

export const employeeSchema = z.object({
  employeeName: z.string().min(1, 'Employee name is required'),
  email: z.string().email('Valid email is required').optional(),
  consentGiven: z.boolean(),
  onboardingCompleted: z.boolean().default(false)
});

export const taskDataSchema = z.object({
  task: z.string().min(1, 'Task description is required'),
  automationDesire: z.number().min(1).max(5),
  humanAgencyScale: z.number().min(1).max(5),
  timePercentage: z.number().min(0).max(100),
  familiarityLevel: z.number().min(1).max(5),
  automationReason: z.string().min(1, 'Automation reason is required'),
  hasReason: z.string().min(1, 'HAS reason is required'),
  completedAt: z.string()
});

export type OrganizationFormData = z.infer<typeof organizationSchema>;
export type EmployeeFormData = z.infer<typeof employeeSchema>;
export type TaskFormData = z.infer<typeof taskDataSchema>;