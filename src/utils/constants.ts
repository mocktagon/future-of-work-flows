export const INDUSTRIES = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Retail',
  'Consulting',
  'Government',
  'Non-profit',
  'Other'
] as const;

export const COMMON_DEPARTMENTS = [
  'Human Resources',
  'Information Technology',
  'Finance & Accounting',
  'Marketing & Sales',
  'Operations',
  'Research & Development',
  'Customer Service',
  'Legal',
  'Administration',
  'Quality Assurance'
] as const;

export const AUTOMATION_SCALE_LABELS = {
  1: 'Not at all interested',
  2: 'Slightly interested',
  3: 'Moderately interested',
  4: 'Very interested',
  5: 'Extremely interested'
} as const;

export const HAS_SCALE_LABELS = {
  1: 'Minimal human input',
  2: 'Some human oversight',
  3: 'Balanced collaboration',
  4: 'Significant human control',
  5: 'Full human control'
} as const;

export const PHASE_STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const;

export const REPORT_TYPES = {
  SUMMARY: 'summary',
  INDIVIDUAL: 'individual',
  DEPARTMENT: 'department',
  ORGANIZATION: 'organization'
} as const;