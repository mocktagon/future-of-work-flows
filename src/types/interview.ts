
// Interview data types
export interface TaskData {
  task: string;
  automationDesire: number;
  humanAgencyScale: number;
  timePercentage: number;
  familiarityLevel: number;
  automationReason: string;
  hasReason: string;
  completedAt: string;
}

export interface ResponseData {
  section: string;
  question: string;
  response: string;
  category: string;
  type: string;
}

export interface OrganizationData {
  organizationName: string;
  totalEmployees: number;
  industry: string;
  departments: string[];
  primaryGoals: string[];
}

export interface EmployeeData {
  employeeName: string;
  consentGiven: boolean;
  onboardingCompleted: boolean;
  completedAt: string;
}

export interface InterviewPhaseData {
  responses?: Record<string, any>;
  taskRatings?: Record<string, TaskData>;
  extractedThemes?: {
    commonTasks: string[];
    toolsUsed: string[];
    aiSentiment: string;
    repetitiveTasks: string[];
    valuedTasks: string[];
    concerns: string[];
    collaborationPreferences: string;
  };
  analysisResults?: {
    taskCategorization: {
      greenLight: TaskData[];
      redLight: TaskData[];
      rndOpportunity: TaskData[];
      lowPriority: TaskData[];
    };
    averages: {
      automationDesire: number;
      humanAgencyScale: number;
    };
    dominantHAS: number;
    totalTasks: number;
    completionRate: number;
  };
  refinementInsights?: any;
  assessmentSummary?: any;
  actionPlan?: any;
  [key: string]: any;
}
