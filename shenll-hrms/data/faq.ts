export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqCategories = [
  "General",
  "Payroll",
  "Attendance",
  "Leave",
  "Projects",
  "AI",
  "Security",
  "Implementation",
];

export const faqItems: FAQItem[] = [
  // General
  {
    id: "g1",
    category: "General",
    question: "What is Shenll HRMS?",
    answer:
      "Shenll HRMS is an AI-powered human resource management platform built by Shenll Technology Solutions Pvt. Ltd. It connects core HR, payroll, attendance, leave, projects, performance, expenses, assets and more into one unified platform — designed to adapt to the way your business works.",
  },
  {
    id: "g2",
    category: "General",
    question: "Is Shenll HRMS suitable for small businesses?",
    answer:
      "Yes. Shenll HRMS is modular and scalable — it works for small teams just starting out as well as large enterprises with complex workforce structures. You can start with the modules you need and expand as your organization grows.",
  },
  {
    id: "g3",
    category: "General",
    question: "What modules does Shenll HRMS include?",
    answer:
      "Shenll HRMS includes Core HR, Employee Management, Payroll & Compensation, Leave & Attendance, Assets & Invoices, Recruitment, Project & Task Management, Performance Management, Expense Management, Helpdesk, Reports, Compliance, Workflow Automation, and AI capabilities including an HR Assistant and AI Agents.",
  },
  {
    id: "g4",
    category: "General",
    question: "Is Shenll HRMS cloud-based?",
    answer:
      "Yes. Shenll HRMS is a cloud-based SaaS platform, which means you can access it from any device with an internet connection. There is no software to install and updates are delivered automatically.",
  },
  // Payroll
  {
    id: "p1",
    category: "Payroll",
    question: "Does Shenll HRMS support TDS and PF calculations?",
    answer:
      "Yes. Shenll HRMS supports automated TDS, PF and other statutory deductions as part of the payroll module. Calculations are based on your configured salary structures and employee information.",
  },
  {
    id: "p2",
    category: "Payroll",
    question: "Can payroll be connected to attendance data?",
    answer:
      "Yes. Payroll in Shenll HRMS is directly connected to attendance and leave data. Attendance-based deductions, overtime and leave adjustments can be automatically applied during payroll processing.",
  },
  {
    id: "p3",
    category: "Payroll",
    question: "Can employees access their payslips?",
    answer:
      "Yes. Employees can view and download their payslips directly from the mobile app or web platform. Payslips are generated automatically after each payroll cycle.",
  },
  {
    id: "p4",
    category: "Payroll",
    question: "Does Shenll HRMS support multi-component salary structures?",
    answer:
      "Yes. You can configure salary structures with multiple components including basic, HRA, allowances, deductions and more. Each component can have fixed or formula-based values.",
  },
  // Attendance
  {
    id: "a1",
    category: "Attendance",
    question: "How does attendance tracking work?",
    answer:
      "Shenll HRMS supports multiple attendance tracking methods including mobile check-in/check-out, web-based attendance marking and integration with biometric devices. All attendance data is stored centrally and flows into payroll automatically.",
  },
  {
    id: "a2",
    category: "Attendance",
    question: "Can I configure different shifts for different teams?",
    answer:
      "Yes. You can configure multiple shift patterns and assign them to different departments, teams or individual employees. Shift schedules can be set on a weekly or custom basis.",
  },
  // Leave
  {
    id: "l1",
    category: "Leave",
    question: "Can I configure custom leave policies?",
    answer:
      "Yes. Shenll HRMS allows you to define custom leave types, accrual policies, carryover rules and eligibility criteria. Leave policies can be configured per department or designation.",
  },
  {
    id: "l2",
    category: "Leave",
    question: "How are leave requests approved?",
    answer:
      "Leave requests go through a configurable approval workflow. Employees submit requests via the mobile app or web platform, and managers receive notifications to approve or reject them. All leave data is tracked and visible in reports.",
  },
  // Projects
  {
    id: "pr1",
    category: "Projects",
    question: "Can I track project time and billing?",
    answer:
      "Yes. The project module includes timesheet logging where employees can log hours against tasks and projects. This data can be used for project cost tracking, billing and performance analysis.",
  },
  {
    id: "pr2",
    category: "Projects",
    question: "Can tasks be assigned to multiple employees?",
    answer:
      "Yes. Tasks can be assigned to individual employees or teams. You can set priorities, deadlines, dependencies and track progress through the project dashboard.",
  },
  // AI
  {
    id: "ai1",
    category: "AI",
    question: "What AI capabilities does Shenll HRMS offer?",
    answer:
      "Shenll HRMS includes a Workforce AI Agent for intelligent team assignment, a Task Orchestration Agent for automated task management, a Predictive Intelligence Engine for natural language HR queries and insights, and support for Custom AI Agents that can be configured for specific business workflows.",
  },
  {
    id: "ai2",
    category: "AI",
    question: "Can I ask questions about my workforce data in natural language?",
    answer:
      "Yes. The Ask Shenll AI interface allows you to query your workforce data using natural language. You can ask questions like 'Show employees with attendance below 90% this month' and receive analyzed results with reports.",
  },
  {
    id: "ai3",
    category: "AI",
    question: "What are Custom AI Agents?",
    answer:
      "Custom AI Agents are configurable AI workflows that can be built around your specific business processes — handling approvals, automating repetitive tasks, generating reports and supporting decision-making workflows.",
  },
  // Security
  {
    id: "s1",
    category: "Security",
    question: "How is data security handled in Shenll HRMS?",
    answer:
      "Shenll HRMS uses role-based access control so employees only see what they are permitted to see. The platform is hosted on secure cloud infrastructure with data encryption and regular security practices. For detailed security specifications, please contact our team.",
  },
  {
    id: "s2",
    category: "Security",
    question: "Can I control what each employee or manager can access?",
    answer:
      "Yes. Shenll HRMS has a comprehensive role and permission system. You can define custom roles with granular access to specific modules, data types and actions.",
  },
  // Implementation
  {
    id: "i1",
    category: "Implementation",
    question: "How long does it take to implement Shenll HRMS?",
    answer:
      "Implementation timelines vary depending on the size of your organization and the modules being configured. Our team works with you through the onboarding process to ensure a smooth setup. Contact us to discuss your specific implementation requirements.",
  },
  {
    id: "i2",
    category: "Implementation",
    question: "Is training provided after implementation?",
    answer:
      "Yes. We provide training and onboarding support to help your HR team and employees get up and running with Shenll HRMS. Support is available through our helpdesk for ongoing assistance.",
  },
  {
    id: "i3",
    category: "Implementation",
    question: "Can Shenll HRMS be customized for our business workflows?",
    answer:
      "Yes. Shenll HRMS is designed to adapt to your business — not the other way around. You can configure approval workflows, custom fields, leave policies, salary structures, reporting formats and more to match your existing processes.",
  },
];
