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
        text: "1 link",
      },
      {
        text: "Analytics",
        tooltip: "See how many people view your links",
      },
      {
        text: "Custom domain",
        tooltip: "Add your own domain to your links",
        notAvailable: true,
      },
      {
        text: "Remove branding",
        tooltip: "Remove branding from your links",
        notAvailable: true,
      },
      {
        text: "Video cards",
        tooltip: "Add video cards to your links",
        notAvailable: true,
      },
    ],
    footer: "All features might not be available yet",
  },
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
        text: "1 link",
      },
      {
        text: "Analytics",
        tooltip: "See how many people view your links",
      },
      {
        text: "Custom domain",
        tooltip: "Add your own domain to your links",
        notAvailable: true,
      },
      {
        text: "Remove branding",
        tooltip: "Remove branding from your links",
        notAvailable: true,
      },
      {
        text: "Video cards",
        tooltip: "Add video cards to your links",
        notAvailable: true,
      },
    ],
    footer: "All features might not be available yet",
  },
];
