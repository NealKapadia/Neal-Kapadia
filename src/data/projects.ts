export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string; // may be empty if not provided yet
  problem: string; // may be empty if not provided yet
  process: string; // may be empty if not provided yet
  tech: string[]; // may be empty if not provided yet
  coverImage?: string;
  links?: { demo?: string; repo?: string; devpost?: string };
  awards?: string[];
};

export const projects: Project[] = [
  {
    slug: "shinobi-self",
    title: "Shinobi Self",
    summary: "HackAI 2025 project",
    role: "",
    problem: "",
    process: "",
    tech: [],
    coverImage: "/images/projects/shinobi-self.png",
    links: { devpost: "https://devpost.com/software/shinobi-self" },
    awards: ["HackAI 2025 — Winner NRVE Sponsor Challenge"],
  },
  {
    slug: "deepskin",
    title: "DeepSkin",
    summary: "AI-powered skin disease detection (AXXESS 2025)",
    role: "",
    problem: "",
    process: "",
    tech: [],
    coverImage: "/images/projects/deepskin.jpg",
    links: {
      repo: "https://github.com/NealKapadia/Generative-Predictive-AI-Model",
      devpost: "https://devpost.com/software/deepskin",
    },
  },
  {
    slug: "battery-life-prediction-model",
    title: "Battery Life Prediction Model",
    summary: "Battery Life Prediction Model",
    role: "",
    problem: "",
    process: "",
    tech: [],
    coverImage: "/images/projects/battery-life-prediction-model.png",
    links: { repo: "https://github.com/NealKapadia/Battery_Life_Prediction_Model" },
  },
  {
    slug: "mockai",
    title: "MockAI",
    summary: "MockAI Project",
    role: "",
    problem: "",
    process: "",
    tech: [],
    coverImage: "/images/projects/mockai.png",
    links: { repo: "https://github.com/NealKapadia/MockAI" },
  },
  {
    slug: "todo-list",
    title: "Full-stack ToDo List",
    summary: "Full-stack ToDo List",
    role: "",
    problem: "",
    process: "",
    tech: [],
    coverImage: "/images/projects/todo-list.png",
    links: { repo: "https://github.com/NealKapadia/ToDo-project" },
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    summary: "Personal Website",
    role: "",
    problem: "",
    process: "",
    tech: [],
    coverImage: "/images/projects/personal-website.jpg",
    links: { repo: "https://github.com/NealKapadia/Personal-Website" },
  },
  {
    slug: "summarizeit",
    title: "SummarizeIt",
    summary: "SummarizeIt Project",
    role: "",
    problem: "",
    process: "",
    tech: [],
    coverImage: "/images/projects/summarizeit.jpg",
    links: { repo: "https://github.com/MurtazaKhan24/Text-Summarizer" },
  },
  {
    slug: "sparse-matrix-calculator",
    title: "Sparse Matrix Calculator",
    summary: "Sparse Matrix Calculator",
    role: "",
    problem: "",
    process: "",
    tech: [],
    coverImage: "/images/projects/sparse-matrix-calculator.webp",
    links: { repo: "https://github.com/NealKapadia/SparseMatrixCalculator" },
  },
  {
    slug: "verilog",
    title: "Verilog",
    summary: "Verilog Projects",
    role: "",
    problem: "",
    process: "",
    tech: [],
    coverImage: "/images/projects/verilog.png",
    links: { repo: "https://github.com/nealkapadia/verilog_projects" },
  },
  {
    slug: "genengine",
    title: "GenEngine",
    summary: "AI-powered game development environment (HackRice 15)",
    role: "",
    problem: "",
    process: "",
    tech: [],
    coverImage: "/images/projects/genengine.png",
    links: { repo: "https://github.com/NealKapadia/HackRice25", devpost: "https://devpost.com/software/genengine" },
    awards: ["HackRice 15 — Winner Best AI Application Built with Cloudflare"],
  },
];
