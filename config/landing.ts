import { FeatureLdg, InfoLdg, TestimonialType } from "types";

export const infos: InfoLdg[] = [
  {
    title: "Reach your race goals",
    description:
      "Build endurance and speed with training plans tailored for triathletes.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Structured",
        description: "Follow workouts designed for swim, bike and run.",
        icon: "laptop",
      },
      {
        title: "Progressive",
        description: "Adapt your training as you improve.",
        icon: "settings",
      },
      {
        title: "Flexible",
        description: "Plans that fit into your busy schedule.",
        icon: "search",
      },
    ],
  },
  {
    title: "Sync your devices",
    description:
      "Connect your favorite trackers and apps to keep all your data in one place.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Wearables",
        description:
          "Import workouts from watches and bike computers.",
        icon: "laptop",
      },
      {
        title: "Nutrition",
        description: "Track calories and macros effortlessly.",
        icon: "search",
      },
      {
        title: "Reliable",
        description:
          "Your data is backed up and always available.",
        icon: "settings",
      },
    ],
  },
];

export const features: FeatureLdg[] = [
  {
    title: "Personalized Workouts",
    description:
      "Get daily swim, bike and run sessions tailored to your goals.",
    link: "/",
    icon: "nextjs",
  },
  {
    title: "Race Calendar",
    description:
      "Keep track of upcoming events and taper perfectly.",
    link: "/",
    icon: "google",
  },
  {
    title: "Gear Tracker",
    description:
      "Monitor mileage on your bikes and shoes.",
    link: "/",
    icon: "gitHub",
  },
  {
    title: "Nutrition Logs",
    description:
      "Record meals and monitor hydration.",
    link: "/",
    icon: "laptop",
  },
  {
    title: "Community Challenges",
    description:
      "Join group challenges to stay motivated.",
    link: "/",
    icon: "user",
  },
  {
    title: "Detailed Progress Charts",
    description:
      "Visualize improvements across disciplines.",
    link: "/",
    icon: "copy",
  },
];

export const testimonials: TestimonialType[] = [
  {
    name: "Alex Rider",
    job: "Age-group Triathlete",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    review:
      "Triathlon Trainer kept me accountable and improved my race times dramatically.",
  },
  {
    name: "Nina Perez",
    job: "Coach",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    review:
      "My athletes love the structured plans and easy device syncing.",
  },
  {
    name: "Mark Lee",
    job: "Ironman Finisher",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    review:
      "The analytics and nutrition tracking helped me prepare for my first Ironman.",
  },
];
