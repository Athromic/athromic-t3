export const PLANS: {
  name: string;
  description: string;
  price: Record<"monthly" | "annually", { amount: number; priceId?: string }>;
  features: {
    text: string;
    tooltip?: string;
    notAvailable?: boolean;
  }[];
  footer?: string;
}[] = [
  {
    name: "Free",
    description: "Free forever",
    price: {
      monthly: {
        amount: 0,
      },
      annually: {
        amount: 0,
      },
    },
    features: [
     {
        text: "Feature #1",
      },
      {
        text: "Feature #2",
        tooltip: "tooltip",
      },
      {
        text: "Feature #3",
        tooltip: "tooltip",
      },
      {
        text: "Feature #4",
        tooltip: "tooltip",
      },
      {
        text: "Feature #5",
        tooltip: "tooltip",
      },
    ],
    footer: "All features might not be available yet",
  },
  {
    name: "Pay as you go",
    description: "Pay only for what you use.",
    price: {
      monthly: {
        amount: 0,
      },
      annually: {
        amount: 0,
      },
    },
    features: [
      {
        text: "Feature #1",
      },
      {
        text: "Feature #2",
        tooltip: "tooltip",
      },
      {
        text: "Feature #3",
        tooltip: "tooltip",
      },
      {
        text: "Feature #4",
        tooltip: "tooltip",
      },
      {
        text: "Feature #5",
        tooltip: "tooltip",
      },
    ],
    footer: "*This plan is not yet available.",
  },
];
