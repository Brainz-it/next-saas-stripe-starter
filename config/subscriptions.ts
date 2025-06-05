import { PlansRow, SubscriptionPlan } from "types";
import { env } from "@/env.mjs";

export const pricingData: SubscriptionPlan[] = [
  {
    title: "Sprint",
    description: "For new triathletes",
    benefits: [
      "Up to 4 workouts per week",
      "Access to beginner training plans",
      "Basic race-day tips",
    ],
    limitations: [
      "Email support only",
      "No personalized coaching",
      "Limited data insights",
      "Access to community forums only",
    ],
    prices: {
      monthly: 0,
      yearly: 0,
    },
    stripeIds: {
      monthly: null,
      yearly: null,
    },
  },
  {
    title: "Olympic",
    description: "Step up your training",
    benefits: [
      "Up to 8 workouts per week",
      "Personalized training feedback",
      "Nutrition recommendations",
      "Priority coaching support",
      "Exclusive training webinars",
    ],
    limitations: [
      "No custom nutrition plans",
      "Limited pro resources",
    ],
    prices: {
      monthly: 15,
      yearly: 144,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID,
    },
  },
  {
    title: "Ironman",
    description: "For serious competitors",
    benefits: [
      "Unlimited workouts",
      "Advanced performance analytics",
      "Custom nutrition planning",
      "24/7 coaching access",
      "Personalized race strategy",
    ],
    limitations: [],
    prices: {
      monthly: 30,
      yearly: 300,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID,
    },
  },
];

export const plansColumns = [
  "sprint",
  "olympic",
  "ironman",
  "elite",
] as const;

export const comparePlans: PlansRow[] = [
  {
    feature: "Training Analytics Access",
    sprint: true,
    olympic: true,
    ironman: true,
    elite: "Custom",
    tooltip: "All plans include basic training analytics.",
  },
  {
    feature: "Nutrition Guidance",
    sprint: null,
    olympic: "500/mo",
    ironman: "1,500/mo",
    elite: "Unlimited",
    tooltip: "Nutrition guidance is available from the Olympic plan onwards.",
  },
  {
    feature: "Priority Coaching",
    sprint: null,
    olympic: "Email",
    ironman: "Email & Chat",
    elite: "24/7 Support",
  },
  {
    feature: "Advanced Performance Reports",
    sprint: null,
    olympic: null,
    ironman: true,
    elite: "Custom",
    tooltip:
      "Advanced performance reports are available in Ironman and Elite plans.",
  },
  {
    feature: "Dedicated Coach",
    sprint: null,
    olympic: null,
    ironman: null,
    elite: true,
    tooltip: "Elite plan includes a dedicated coach.",
  },
  {
    feature: "Device Sync API Access",
    sprint: "Limited",
    olympic: "Standard",
    ironman: "Enhanced",
    elite: "Full",
  },
  {
    feature: "Monthly Training Webinars",
    sprint: false,
    olympic: true,
    ironman: true,
    elite: "Custom",
    tooltip: "Olympic and higher plans include monthly training webinars.",
  },
  {
    feature: "Training Plan Integrations",
    sprint: false,
    olympic: false,
    ironman: "Available",
    elite: "Available",
    tooltip:
      "Plan integrations are available in Ironman and Elite plans.",
  },
  {
    feature: "Team Management",
    sprint: null,
    olympic: "Basic",
    ironman: "Advanced",
    elite: "Advanced",
    tooltip:
      "Team management features improve with higher plans.",
  },
  {
    feature: "Onboarding Assistance",
    sprint: false,
    olympic: "Self-service",
    ironman: "Assisted",
    elite: "Full Service",
    tooltip: "Higher plans include more comprehensive onboarding assistance.",
  },
  // Add more rows as needed
];
