export interface ServiceData {
  id: string;
  iconName: 'Target' | 'Megaphone' | 'Users' | 'Zap';
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  detailedContent: {
    overview: string;
    whatIsIncluded: { title: string; items: string[] }[];
    outcome: string;
    saStats: {
      stat: string;
      label: string;
      context: string;
    }[];
    chartData?: { name: string; value: number }[];
    chartConfig?: { dataKey: string; stroke: string; fill: string; title: string };
  };
}

export const servicesData: ServiceData[] = [
  {
    id: "lead-generation",
    iconName: "Target",
    title: "Lead Generation",
    subtitle: "Fill Your Pipeline With Qualified Opportunities",
    description: "Identify ideal prospects, connect with decision-makers, and create a predictable flow of sales conversations without spending hours every day.",
    features: [
      "LinkedIn Automation",
      "Qualified ICP List Building",
      "Targeted Email Outreach",
      "Cold & Warm Calling"
    ],
    detailedContent: {
      overview: "Most businesses don't struggle with finding prospects — they struggle with consistently reaching the right people, starting conversations, and generating qualified opportunities. Aurora's Lead Generation service helps you identify ideal prospects, connect with decision-makers, and create a predictable flow of sales conversations.",
      whatIsIncluded: [
         {
           title: "LinkedIn Automation",
           items: ["Connection request campaigns", "Personalized messaging sequences", "Prospect engagement tracking", "Follow-up automation", "Appointment generation support"]
         },
         {
           title: "Qualified ICP List Building",
           items: ["Industry targeting", "Company size segmentation", "Job title identification", "Decision-maker research", "Lead enrichment and verification"]
         },
         {
           title: "Targeted Email Outreach",
           items: ["Prospect segmentation", "Personalized email campaigns", "Follow-up sequences", "Campaign management", "Response tracking"]
         },
         {
           title: "Cold & Warm Calling",
           items: ["Cold calling campaigns", "Warm lead follow-up", "Lead qualification", "Appointment setting", "Prospect nurturing"]
         }
      ],
      outcome: "More conversations with decision-makers, a clean database of ideal prospects, and faster movement through the sales pipeline.",
      chartData: [
        { name: "Week 1", value: 10 },
        { name: "Week 4", value: 45 },
        { name: "Week 8", value: 120 },
        { name: "Week 12", value: 310 }
      ],
      chartConfig: { dataKey: "value", stroke: "#a855f7", fill: "#a855f720", title: "Cumulative Qualified Opportunities" },
      saStats: [
        {
          stat: "78%",
          label: "B2B Decision Makers",
          context: "In South Africa use LinkedIn to research B2B purchasing decisions, making it a critical outbound channel."
        },
        {
          stat: "3.2x",
          label: "Higher Conversion",
          context: "Targeted, hyper-personalized email sequences see over triple the engagement compared to standard broadcasts in the SA market."
        },
        {
          stat: "65%",
          label: "Pipeline Growth",
          context: "Companies leveraging combined cold-calling and digital outreach experience massive pipeline acceleration."
        }
      ]
    }
  },
  {
    id: "marketing-engine",
    iconName: "Megaphone",
    title: "Marketing Engine",
    subtitle: "Build Consistent Visibility",
    description: "Create, publish, and manage content that builds authority, generates engagement, and captures leads seamlessly.",
    features: [
      "Content Calendar Development",
      "Content Scheduling & Publishing",
      "Graphic Design",
      "Lead Capture Systems"
    ],
    detailedContent: {
      overview: "Marketing only works when it's consistent. Aurora's Marketing Engine helps businesses create, publish, and manage content that builds authority, generates engagement, and captures leads.",
      whatIsIncluded: [
        {
          title: "Content Calendar Development",
          items: ["Monthly content planning", "Campaign alignment", "Topic research", "Content scheduling framework", "Posting strategy"]
        },
        {
          title: "Content Creation & Publ.",
          items: ["Social media content", "LinkedIn posts", "Platform scheduling", "Publishing oversight", "Calendar execution"]
        },
        {
          title: "Graphic Design",
          items: ["Social media graphics", "Marketing collateral", "Lead magnets", "Presentation design", "Brand-aligned visuals"]
        },
        {
          title: "Lead Capture & Analytics",
          items: ["Landing pages & lead forms", "Call-to-action optimisation", "Funnel setup", "Campaign reporting", "Performance insights"]
        }
      ],
      outcome: "Consistent content that supports your goals, reliable presence across channels, and clear visibility into marketing ROI.",
      chartData: [
        { name: "Q1", value: 20 },
        { name: "Q2", value: 65 },
        { name: "Q3", value: 140 },
        { name: "Q4", value: 280 }
      ],
      chartConfig: { dataKey: "value", stroke: "#e879f9", fill: "#e879f920", title: "Brand Impression Growth Index" },
      saStats: [
        {
          stat: "25M+",
          label: "Active SA Social Users",
          context: "Representing over 40% of the South African population, making digital real estate pivotal for brand authority."
        },
        {
          stat: "R40Bn",
          label: "Digital Ad Spend",
          context: "Expected digital marketing spend in SA by 2026, forcing agencies to compete on content quality rather than simply volume."
        },
        {
          stat: "411%",
          label: "ROI on Content",
          context: "B2B businesses utilizing structured content marketing pipelines see massive long-term lead capture advantages."
        }
      ]
    }
  },
  {
    id: "sales-support-specialists",
    iconName: "Users",
    title: "Sales Support Specialists",
    subtitle: "Turn Pipeline Into Revenue",
    description: "Our dedicated specialists become an extension of your team, helping you maintain momentum throughout the entire sales process.",
    features: [
      "Pipeline & CRM Management",
      "Lead Generation Support",
      "Outreach Coordination",
      "Reporting & Visibility"
    ],
    detailedContent: {
      overview: "Most businesses don't have a lead problem—they have a follow-up, consistency, and execution problem. Our dedicated Sales Support Specialists become an extension of your team, helping you maintain momentum throughout the sales process.",
      whatIsIncluded: [
        {
          title: "Pipeline & CRM Management",
          items: ["CRM hygiene and maintenance", "Pipeline tracking", "Lead segmentation", "Opportunity management", "Follow-up coordination"]
        },
        {
          title: "Lead Generation Support",
          items: ["Prospect research", "Database building", "Lead enrichment", "Account targeting", "Data management"]
        },
        {
          title: "Outreach Support",
          items: ["LinkedIn engagement management", "Follow-up tracking", "Response monitoring", "Lead routing", "Outreach coordination"]
        },
        {
          title: "Sales Administration",
          items: ["Meeting scheduling", "Proposal coordination", "Follow-up reminders", "Internal coordination", "Pipeline reporting"]
        }
      ],
      outcome: "A structured, organised sales process that creates more meetings, faster follow-ups, and better conversion rates.",
      chartData: [
        { name: "Month 1", value: 15 },
        { name: "Month 2", value: 28 },
        { name: "Month 3", value: 45 },
        { name: "Month 4", value: 72 }
      ],
      chartConfig: { dataKey: "value", stroke: "#818cf8", fill: "#818cf820", title: "Meetings Set / Month" },
      saStats: [
        {
          stat: "48%",
          label: "Sales Rep Turnover",
          context: "High turnover in SA sales floors makes scalable, outsourced support processes vital for continuity."
        },
        {
          stat: "80%",
          label: "Require 5+ Follow-ups",
          context: "While most reps give up after 2, our dedicated follow-up coordination ensures no lead slips through the cracks."
        },
        {
          stat: "1.5x",
          label: "Deal Velocity",
          context: "Proper CRM hygiene and managed data processes increase close rates and shorten B2B sales cycles significantly."
        }
      ]
    }
  },
  {
    id: "growth-support-specialists",
    iconName: "Zap",
    title: "Growth Support Specialists",
    subtitle: "Eliminate Operational Drag",
    description: "As your business grows, operational tasks multiply. We provide dedicated support that keeps your business running efficiently.",
    features: [
      "Inbox & Communication",
      "Scheduling & Coordination",
      "Administrative Support",
      "Operational Flow Support"
    ],
    detailedContent: {
      overview: "As businesses grow, operational tasks multiply. Aurora Growth Support Specialists provide dedicated support that keeps your business organised, responsive, and running efficiently.",
      whatIsIncluded: [
        {
          title: "Communication Mgmt",
          items: ["Inbox management", "Client response handling", "Partner communication", "Ensuring nothing is missed"]
        },
        {
          title: "Scheduling & Coordination",
          items: ["Handle meetings", "Calendar management", "Day-to-day coordination", "Resource booking"]
        },
        {
          title: "Administrative Support",
          items: ["Keep systems organised", "Document management", "Process documentation", "Filing & record keeping"]
        },
        {
          title: "Operational Flow Support",
          items: ["Ensure tasks are completed", "Project momentum tracking", "Reduce bottlenecks", "Improve day-to-day efficiency"]
        }
      ],
      outcome: "More capacity, improved organisation, and a team that can focus on growth instead of administration.",
      chartData: [
        { name: "Day 1", value: 100 },
        { name: "Day 30", value: 60 },
        { name: "Day 60", value: 25 },
        { name: "Day 90", value: 5 }
      ],
      chartConfig: { dataKey: "value", stroke: "#60a5fa", fill: "#60a5fa20", title: "Hours Wasted on Operational Drag" },
      saStats: [
        {
          stat: "35%",
          label: "Time Wasted",
          context: "SA executives spend over a third of their week on non-revenue-generating administrative and operational tasks."
        },
        {
          stat: "R2.5M",
          label: "Opportunity Cost",
          context: "The average annual cost to growing SA agencies bogged down by operational drag instead of active scaling."
        },
        {
          stat: "99.9%",
          label: "Operational Uptime",
          context: "Dedicated specialists ensure your engine runs efficiently while your core team focuses entirely on strategic growth."
        }
      ]
    }
  }
];
