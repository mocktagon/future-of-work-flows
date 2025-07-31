export const generateReportData = (organizationData?: any, employeeData?: any) => {
  // In a real implementation, this would aggregate data from all employees
  // For demo purposes, we'll simulate comprehensive data
  
  const mockSummaryData = {
    overallReadinessScore: 7.2,
    totalTasksAnalyzed: 45,
    automationOpportunities: 12,
    teamReadinessLevel: 'High',
    priorityActions: 5,
    estimatedEfficiencyGain: '35%'
  };

  const mockIndividualData = {
    employeeName: employeeData?.phase_1?.employeeName || 'Team Member',
    department: 'Product Development',
    role: 'Senior Analyst',
    tasksAssessed: 8,
    automationDesire: 3.4,
    dominantHAS: 3,
    keyInsights: [
      'High desire for automating routine data processing tasks',
      'Strong preference for human involvement in strategic decisions',
      'Collaborative approach to AI integration preferred',
      'Concerns about AI accuracy in complex analysis'
    ],
    taskZones: {
      greenLight: ['Email Management', 'Report Generation', 'Data Entry'],
      redLight: ['Client Meetings', 'Strategic Planning'],
      rndOpportunity: ['Market Analysis', 'Trend Identification'],
      lowPriority: ['Documentation']
    }
  };

  const mockDepartmentData = {
    departmentName: 'Product Development',
    totalEmployees: 12,
    participationRate: 92,
    averageAutomationDesire: 3.2,
    dominantHAS: 3,
    commonTasksForAutomation: ['Data Processing', 'Report Generation', 'Email Management'],
    sharedConcerns: ['Job replacement fears', 'Trust in AI accuracy'],
    skillTrends: {
      increasing: ['Complex Problem Solving', 'Creative Thinking', 'Interpersonal Communication'],
      decreasing: ['Routine Data Processing', 'Manual Calculations']
    }
  };

  const mockOrganizationData = {
    organizationName: organizationData?.organizationName || 'TechCorp Solutions',
    totalEmployees: organizationData?.totalEmployees || 250,
    participationRate: 88,
    departmentsAssessed: organizationData?.departments?.length || 6,
    overallReadinessScore: 7.2,
    topAutomationOpportunities: [
      'Email and Communication Management',
      'Data Processing and Analysis',
      'Report and Document Generation',
      'Scheduling and Coordination'
    ],
    keyBarriers: [
      'Trust and reliability concerns',
      'Fear of job displacement',
      'Lack of technical understanding',
      'Change management resistance'
    ],
    strategicRecommendations: [
      'Implement pilot programs for high-confidence tasks',
      'Develop comprehensive training programs',
      'Establish clear AI governance policies',
      'Create feedback loops for continuous improvement'
    ]
  };

  return {
    summary: mockSummaryData,
    individual: mockIndividualData,
    department: mockDepartmentData,
    organization: mockOrganizationData
  };
};

export const nextStepsData = [
  {
    phase: 'Immediate (Week 1-2)',
    color: 'bg-red-50 border-red-200 text-red-800',
    badgeColor: 'bg-red-100 text-red-700',
    actions: [
      'Set up pilot program with email automation',
      'Form AI implementation team',
      'Communicate assessment results to stakeholders'
    ]
  },
  {
    phase: 'Short-term (Month 1-3)',
    color: 'bg-orange-50 border-orange-200 text-orange-800',
    badgeColor: 'bg-orange-100 text-orange-700',
    actions: [
      'Launch training program on AI collaboration',
      'Implement first automation solutions',
      'Establish success metrics and monitoring'
    ]
  },
  {
    phase: 'Medium-term (Month 3-6)',
    color: 'bg-blue-50 border-blue-200 text-blue-800',
    badgeColor: 'bg-blue-100 text-blue-700',
    actions: [
      'Scale successful pilots to broader teams',
      'Develop advanced AI integration strategies',
      'Create feedback loops for continuous improvement'
    ]
  }
];