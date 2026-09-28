export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  tag: string;
}

export const features: Feature[] = [
  {
    id: "core-hr",
    title: "Core HR",
    description:
      "Manage employee information, organizational structures, departments and permissions — all in one connected system.",
    icon: "Users",
    highlights: [
      "Employee profiles & lifecycle management",
      "Org charts and department structures",
      "Document storage & management",
      "Role-based access control",
      "Custom fields & configurations",
    ],
    tag: "Foundation",
  },
  {
    id: "payroll",
    title: "Payroll & Compensation",
    description:
      "Automate salary processing, deductions, TDS, PF and payslip generation — connected directly to attendance and leave data.",
    icon: "CreditCard",
    highlights: [
      "Automated salary calculations",
      "Statutory deductions (TDS, PF, ESI)",
      "Payslip generation & distribution",
      "Multi-component salary structures",
      "Payroll approval workflows",
    ],
    tag: "Finance",
  },
  {
    id: "leave-attendance",
    title: "Leave & Attendance",
    description:
      "Track attendance, manage shifts, configure leave policies and maintain real-time workforce availability.",
    icon: "Clock",
    highlights: [
      "Flexible attendance tracking methods",
      "Multi-shift management",
      "Configurable leave policies",
      "Overtime & holiday management",
      "Attendance-to-payroll sync",
    ],
    tag: "Workforce",
  },
  {
    id: "assets",
    title: "Assets",
    description:
      "Manage company assets, assignments, returns and maintenance records with full audit history.",
    icon: "Package",
    highlights: [
      "Asset registry & categorization",
      "Employee asset assignment",
      "Return & condition tracking",
      "QR code support",
      "Asset lifecycle management",
    ],
    tag: "Operations",
  },
  {
    id: "recruitment",
    title: "Recruitment",
    description:
      "Manage candidates, job openings, interview workflows and seamless onboarding into the HR system.",
    icon: "UserPlus",
    highlights: [
      "Job posting management",
      "Candidate pipeline tracking",
      "Interview scheduling",
      "Offer management",
      "Onboarding workflows",
    ],
    tag: "Talent",
  },
  {
    id: "projects-tasks",
    title: "Projects & Tasks",
    description:
      "Connect employees, projects, tasks and timesheets. Track progress and manage resources in one view.",
    icon: "FolderKanban",
    highlights: [
      "Project creation & management",
      "Task assignment & prioritization",
      "Timesheet & hour logging",
      "Progress tracking & milestones",
      "Team workload overview",
    ],
    tag: "Productivity",
  },
  {
    id: "performance",
    title: "Performance",
    description:
      "Set goals, run reviews, collect ratings and generate performance insights that connect to real work data.",
    icon: "TrendingUp",
    highlights: [
      "Goal & OKR management",
      "Performance review cycles",
      "360° feedback collection",
      "Ratings & appraisals",
      "Performance analytics",
    ],
    tag: "Growth",
  },
  {
    id: "expenses",
    title: "Expense Management",
    description:
      "Streamline expense claims, approvals and reimbursements with structured workflows and reporting.",
    icon: "Receipt",
    highlights: [
      "Expense claim submission",
      "Multi-level approval flows",
      "Category & policy management",
      "Reimbursement tracking",
      "Expense reporting",
    ],
    tag: "Finance",
  },
  {
    id: "helpdesk",
    title: "Helpdesk",
    description:
      "Centralize employee support requests, manage tickets, track resolutions and measure HR response times.",
    icon: "Headphones",
    highlights: [
      "Employee ticket submission",
      "Category-based routing",
      "SLA management",
      "HR assignment & tracking",
      "Resolution analytics",
    ],
    tag: "Support",
  },
  {
    id: "reports",
    title: "Reports",
    description:
      "Turn workforce data across all modules into actionable reports, visualizations and scheduled insights.",
    icon: "BarChart3",
    highlights: [
      "Cross-module reporting",
      "Custom report builder",
      "Scheduled report delivery",
      "Export to Excel & PDF",
      "Compliance reporting",
    ],
    tag: "Intelligence",
  },
];
