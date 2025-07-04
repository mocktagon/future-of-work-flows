
import { Building, Users, MessageSquare, Brain, BarChart3, CheckCircle, Clock, Play, User, Bot } from 'lucide-react';

export const phases = [
  {
    id: 0,
    title: "Organization Setup",
    description: "Define organization scope and parameters",
    icon: Building,
    status: "active",
    humanInput: false
  },
  {
    id: 1,
    title: "Team Onboarding",
    description: "Consent and process introduction",
    icon: User,
    status: "pending",
    humanInput: true
  },
  {
    id: 2,
    title: "Initial Exploration",
    description: "Conversational mini-interview and task discovery",
    icon: User,
    status: "pending",
    humanInput: true
  },
  {
    id: 3,
    title: "Deep Dive Assessment",
    description: "Task identification and HAS/automation rating",
    icon: User,
    status: "pending",
    humanInput: true
  },
  {
    id: 4,
    title: "Refinement & Scenarios",
    description: "Report review and scenario exploration",
    icon: User,
    status: "pending",
    humanInput: true
  },
  {
    id: 5,
    title: "Validation & Planning",
    description: "Final validation and action planning",
    icon: User,
    status: "pending",
    humanInput: true
  },
  {
    id: 6,
    title: "Reports & Analysis",
    description: "Multi-level reporting and insights",
    icon: Bot,
    status: "pending",
    humanInput: false
  }
];
