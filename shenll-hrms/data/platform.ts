export interface PlatformModule {
  id: string;
  label: string;
  icon: string;
  headline: string;
  description: string;
  features: string[];
  ctaLabel: string;
  accentColor: string;
}

export const platformModules: PlatformModule[] = [
  {
    id: "core-hr",
    label: "Core HR",
    icon: "Users",
    headline: "One source of truth for your entire workforce.",
    description:
      "Employee profiles, departments, documents, roles, permissions and organizational structures — all connected in one place. Manage your workforce from hire to retire with complete visibility.",
    features: [
      "Employee profiles & records",
      "Org charts & departments",
      "Document management",
      "Role-based permissions",
      "Onboarding workflows",
      "Custom fields",
    ],
    ctaLabel: "Explore Core HR",
    accentColor: "#E53E3E",
  },
  {
    id: "payroll",
    label: "Payroll",
    icon: "CreditCard",
    headline: "Payroll that calculates itself from real data.",
    description:
      "Automate salary processing, statutory deductions, TDS, PF and payslip generation. Payroll that connects directly to attendance and leave data for a consistent, error-free process.",
    features: [
      "Automated salary calculations",
      "TDS & PF compliance",
      "Payslip generation",
      "Approval workflows",
      "Multi-component salaries",
      "Payroll reports",
    ],
    ctaLabel: "Explore Payroll",
    accentColor: "#E53E3E",
  },
  {
    id: "attendance",
    label: "Attendance",
    icon: "Clock",
    headline: "Attendance and leave, fully connected.",
    description:
      "Track attendance, manage shifts, configure leave policies and monitor workforce availability. Attendance data flows directly into payroll — no manual reconciliation needed.",
    features: [
      "Daily attendance tracking",
      "Shift management",
      "Leave policies & requests",
      "Overtime calculations",
      "Holiday calendar",
      "Attendance reports",
    ],
    ctaLabel: "Explore Attendance",
    accentColor: "#E53E3E",
  },
  {
    id: "projects",
    label: "Projects",
    icon: "FolderKanban",
    headline: "Connect people, projects and performance.",
    description:
      "Manage projects, assign tasks, track timesheets and monitor progress. Every project is connected to your workforce data — skills, availability and performance all in one view.",
    features: [
      "Project management",
      "Task assignment & tracking",
      "Timesheet logging",
      "Team workload overview",
      "Milestone tracking",
      "Project reports",
    ],
    ctaLabel: "Explore Projects",
    accentColor: "#E53E3E",
  },
  {
    id: "performance",
    label: "Performance",
    icon: "TrendingUp",
    headline: "Performance that drives real growth.",
    description:
      "Set goals, conduct reviews, collect ratings and generate insights. Connect individual performance to team and organizational objectives for a complete performance picture.",
    features: [
      "Goal setting (OKR/KPI)",
      "Performance reviews",
      "360° feedback",
      "Rating & appraisals",
      "Performance dashboards",
      "Development plans",
    ],
    ctaLabel: "Explore Performance",
    accentColor: "#E53E3E",
  },
  {
    id: "expenses",
    label: "Expenses",
    icon: "Receipt",
    headline: "Expense management without the paper trail.",
    description:
      "Manage expense claims, approvals, reimbursements and reports. Employees submit, managers approve, and finance processes — all in one structured workflow.",
    features: [
      "Expense claim submission",
      "Multi-level approvals",
      "Reimbursement tracking",
      "Category management",
      "Policy enforcement",
      "Expense reports",
    ],
    ctaLabel: "Explore Expenses",
    accentColor: "#E53E3E",
  },
  {
    id: "assets",
    label: "Assets",
    icon: "Package",
    headline: "Know where every asset is, always.",
    description:
      "Track company assets, manage assignments, record returns and maintain complete asset histories. QR-code enabled tracking for physical asset management.",
    features: [
      "Asset registry",
      "Assignment tracking",
      "Return management",
      "QR code support",
      "Maintenance records",
      "Asset reports",
    ],
    ctaLabel: "Explore Assets",
    accentColor: "#E53E3E",
  },
  {
    id: "reports",
    label: "Reports",
    icon: "BarChart3",
    headline: "Turn workforce data into actionable insights.",
    description:
      "Generate reports across all modules — payroll, attendance, performance, projects and more. Export, schedule and share insights with stakeholders.",
    features: [
      "Cross-module reporting",
      "Custom report builder",
      "Scheduled reports",
      "Export to Excel/PDF",
      "Data visualization",
      "Compliance reports",
    ],
    ctaLabel: "Explore Reports",
    accentColor: "#E53E3E",
  },
  {
    id: "helpdesk",
    label: "Helpdesk",
    icon: "Headphones",
    headline: "Employee support, centralized and resolved.",
    description:
      "Centralize all employee support requests. Manage tickets, assign to HR, track resolutions and measure response times — all within the platform.",
    features: [
      "Ticket management",
      "Category-based routing",
      "SLA tracking",
      "HR assignment",
      "Resolution tracking",
      "Support analytics",
    ],
    ctaLabel: "Explore Helpdesk",
    accentColor: "#E53E3E",
  },
];
