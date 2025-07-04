
import { Building, Users, MessageSquare, Brain, BarChart3, CheckCircle, Clock, Play, User, Bot, Upload } from 'lucide-react';

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
    title: "Team Onboarding & Upload",
    description: "Upload employee list and select your profile",
    icon: Upload,
    status: "pending",
    humanInput: true
  },
  {
    id: 2,
    title: "Initial AI Interview",
    description: "AI-powered conversational exploration of your role",
    icon: MessageSquare,
    status: "pending",
    humanInput: true
  },
  {
    id: 3,
    title: "Validation Interview",
    description: "Validate and refine discovered insights",
    icon: User,
    status: "pending",
    humanInput: true
  },
  {
    id: 4,
    title: "Deep Dive Assessment",
    description: "Task identification and HAS/automation rating",
    icon: User,
    status: "pending",
    humanInput: true
  },
  {
    id: 5,
    title: "Refinement & Scenarios",
    description: "Report review and scenario exploration",
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
