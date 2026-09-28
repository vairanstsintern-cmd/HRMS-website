export interface Industry {
  id: string;
  label: string;
  icon: string;
  headline: string;
  description: string;
  workflows: string[];
  keyModules: string[];
}

export const industries: Industry[] = [
  {
    id: "technology",
    label: "Technology",
    icon: "Cpu",
    headline: "HR for fast-moving tech teams.",
    description:
      "Manage dynamic tech teams with project-based work tracking, performance by deliverables, flexible attendance policies and skills-based AI team assignment.",
    workflows: [
      "Sprint-based project tracking",
      "Remote attendance management",
      "Skills inventory & matching",
      "OKR-based performance",
      "Agile team management",
    ],
    keyModules: ["Projects", "Performance", "AI", "Attendance", "Core HR"],
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    icon: "Factory",
    headline: "HR built for the factory floor.",
    description:
      "Handle shift-based attendance, compliance-ready payroll, asset management and workforce scheduling for manufacturing operations of any scale.",
    workflows: [
      "Shift scheduling & management",
      "Compliance payroll processing",
      "Asset & equipment tracking",
      "Workforce deployment",
      "Production team management",
    ],
    keyModules: ["Attendance", "Payroll", "Assets", "Core HR", "Reports"],
  },
  {
    id: "construction",
    label: "Construction",
    icon: "HardHat",
    headline: "Workforce management for project sites.",
    description:
      "Manage site-based workers, project teams, attendance across multiple locations, expense tracking and contractor management from one platform.",
    workflows: [
      "Multi-site attendance tracking",
      "Project cost management",
      "Contractor management",
      "Site team deployment",
      "Expense & reimbursement",
    ],
    keyModules: ["Projects", "Attendance", "Expenses", "Core HR", "Reports"],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: "Stethoscope",
    headline: "HR for clinical and administrative teams.",
    description:
      "Manage clinical staff schedules, compliance documentation, leave for specialized roles, payroll and performance for healthcare organizations.",
    workflows: [
      "Clinical staff scheduling",
      "Compliance document management",
      "Leave management for shifts",
      "Credential & license tracking",
      "Performance reviews",
    ],
    keyModules: ["Attendance", "Core HR", "Payroll", "Performance", "Reports"],
  },
  {
    id: "education",
    label: "Education",
    icon: "GraduationCap",
    headline: "HR for academic institutions.",
    description:
      "Manage faculty, administrative staff, academic workflows, leave during term and holiday calendars, payroll and performance evaluations.",
    workflows: [
      "Academic calendar management",
      "Faculty performance reviews",
      "Term-based leave management",
      "Payroll for teaching staff",
      "Department management",
    ],
    keyModules: ["Core HR", "Attendance", "Payroll", "Performance", "Leave"],
  },
  {
    id: "logistics",
    label: "Logistics",
    icon: "Truck",
    headline: "People management for logistics operations.",
    description:
      "Manage driver and fleet staff attendance, route-based project tracking, payroll for field teams and expense management for operations.",
    workflows: [
      "Field staff attendance tracking",
      "Route-based task management",
      "Driver payroll processing",
      "Expense management for ops",
      "Asset & vehicle tracking",
    ],
    keyModules: ["Attendance", "Projects", "Payroll", "Expenses", "Assets"],
  },
  {
    id: "textile",
    label: "Textile",
    icon: "Scissors",
    headline: "HR for textile and garment operations.",
    description:
      "Manage large workforces with shift-based attendance, production-linked performance, compliance payroll and workforce deployment across departments.",
    workflows: [
      "Production shift management",
      "Workforce capacity planning",
      "Compliance payroll processing",
      "Departmental performance",
      "Labour compliance reports",
    ],
    keyModules: ["Attendance", "Payroll", "Core HR", "Reports", "Performance"],
  },
  {
    id: "professional-services",
    label: "Professional Services",
    icon: "Briefcase",
    headline: "HR for consulting and service firms.",
    description:
      "Manage billable hours, project teams, client-based expense tracking, performance by deliverables and flexible attendance for distributed service teams.",
    workflows: [
      "Billable project management",
      "Client-based expense tracking",
      "Consultant performance reviews",
      "Flexible attendance policies",
      "Resource allocation",
    ],
    keyModules: ["Projects", "Expenses", "Performance", "Attendance", "Reports"],
  },
];
