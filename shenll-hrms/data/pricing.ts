export interface PricingFeature {
  name: string;
  included: boolean;
  note?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: string | null;
  yearlyPrice: string | null;
  priceNote: string;
  ctaLabel: string;
  ctaVariant: "primary" | "secondary" | "outline";
  isPopular?: boolean;
  features: PricingFeature[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "For small teams getting started.",
    monthlyPrice: null,
    yearlyPrice: null,
    priceNote: "Contact us for pricing",
    ctaLabel: "Get Started",
    ctaVariant: "outline",
    features: [
      { name: "Core HR", included: true },
      { name: "Employee Management", included: true },
      { name: "Leave & Attendance", included: true },
      { name: "Basic Reports", included: true },
      { name: "Mobile App", included: true },
      { name: "Payroll", included: false },
      { name: "Project Management", included: false },
      { name: "Performance Management", included: false },
      { name: "AI Assistant", included: false },
      { name: "Custom AI Agents", included: false },
      { name: "Workflow Automation", included: false },
      { name: "Priority Support", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For growing organizations.",
    monthlyPrice: null,
    yearlyPrice: null,
    priceNote: "Contact us for pricing",
    ctaLabel: "Book a Demo",
    ctaVariant: "primary",
    isPopular: true,
    features: [
      { name: "Core HR", included: true },
      { name: "Employee Management", included: true },
      { name: "Leave & Attendance", included: true },
      { name: "Advanced Reports", included: true },
      { name: "Mobile App", included: true },
      { name: "Payroll", included: true },
      { name: "Project Management", included: true },
      { name: "Performance Management", included: true },
      { name: "AI Assistant", included: true },
      { name: "Custom AI Agents", included: false },
      { name: "Workflow Automation", included: true },
      { name: "Priority Support", included: false },
    ],

  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For complex workforce operations.",
    monthlyPrice: null,
    yearlyPrice: null,
    priceNote: "Custom pricing",
    ctaLabel: "Talk to Sales",
    ctaVariant: "secondary",
    features: [
      { name: "Core HR", included: true },
      { name: "Employee Management", included: true },
      { name: "Leave & Attendance", included: true },
      { name: "Advanced Reports", included: true },
      { name: "Mobile App", included: true },
      { name: "Payroll", included: true },
      { name: "Project Management", included: true },
      { name: "Performance Management", included: true },
      { name: "AI Assistant", included: true },
      { name: "Custom AI Agents", included: true },
      { name: "Workflow Automation", included: true },
      { name: "Priority Support", included: true },
    ],
  },
];
