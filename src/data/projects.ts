export type Project = {
  slug: string;
  title: string;
  summary: string;
  role?: string;
  problem?: string;
  process?: string;
  tech: string[];
  coverImage?: string;
  links?: { demo?: string; repo?: string; devpost?: string };
  awards?: string[];
  winner?: boolean;
};

// Ordered by recency per CV: GenEngine (Sep 2025), Shinobi Self (Apr–May 2025),
// DeepSkin (Jan–Feb 2025), Battery Life Prediction (Oct 2024–Jan 2025), then others.
export const projects: Project[] = [
  {
    slug: "genengine",
    title: "GenEngine",
    summary: "Turn natural language into playable HTML5 Canvas games.",
    role: "Full‑stack (React/TS)",
    tech: ["React", "TypeScript", "Cloudflare", "Google Gemini"],
    coverImage: "/images/projects/genengine.png",
    links: { repo: "https://github.com/NealKapadia/HackRice25", devpost: "https://devpost.com/software/genengine" },
    awards: ["HackRice 15 — Best AI Application Built with Cloudflare"],
    winner: true,
  },
  {
    slug: "shinobi-self",
    title: "Shinobi Self",
    summary: "Naruto-themed mental wellness app with quests, mood tracking, and ML personalization.",
    role: "Flutter / Riverpod",
    tech: ["Flutter", "Riverpod", "OpenAI API"],
    coverImage: "/images/projects/shinobi-self.png",
    links: { repo: "https://github.com/reyanp/ShinobiSelf", devpost: "https://devpost.com/software/shinobi-self" },
    awards: ["HackAI 2025 — NRVE Sponsor Challenge (1st Place)"],
    winner: true,
  },
  {
    slug: "deepskin",
    title: "DeepSkin",
    summary: "CV app for skin disease recognition using PyTorch and Kaggle data.",
    role: "ML Engineer",
    tech: ["PyTorch", "Python", "Next.js"],
    coverImage: "/images/projects/deepskin.jpg",
    links: { devpost: "https://devpost.com/software/deepskin" },
  },
  {
    slug: "battery-life-prediction-model",
    title: "Battery Life Prediction Model",
    summary: "Predict battery cycle life and energy density with PyTorch + Bayesian Optimization.",
    role: "ML Research",
    tech: ["PyTorch", "Bayesian Optimization", "Pandas", "Matplotlib"],
    coverImage: "/images/projects/battery-life-prediction-model.png",
    links: { repo: "https://github.com/NealKapadia/Battery_Life_Prediction_Model" },
  },
  {
    slug: "mockai",
    title: "MockAI",
    summary: "C++ character-distribution text generator with hashmap + sliding window.",
    role: "C++ Systems",
    tech: ["C++", "Algorithms"],
    coverImage: "/images/projects/mockai.png",
    links: { repo: "https://github.com/NealKapadia/MockAI" },
  },
  {
    slug: "summarizeit",
    title: "SummarizeIt",
    summary: "Fine‑tuned BERT summarizer with an interactive demo.",
    role: "NLP Engineer",
    tech: ["Python", "BERT", "Hugging Face", "Gradio"],
    coverImage: "/images/projects/summarizeit.jpg",
    links: { repo: "https://github.com/MurtazaKhan24/Text-Summarizer" },
  },
  {
    slug: "sparse-matrix-calculator",
    title: "Sparse Matrix Calculator",
    summary: "C++ data structures for efficient sparse matrix operations.",
    role: "C++ DS&A",
    tech: ["C++"],
    coverImage: "/images/projects/sparse-matrix-calculator.webp",
    links: { repo: "https://github.com/NealKapadia/SparseMatrixCalculator" },
  },
  {
    slug: "todo-list",
    title: "Full‑stack ToDo List",
    summary: "Classic CRUD with clean UI.",
    role: "Full‑stack",
    tech: ["React", "Node"],
    coverImage: "/images/projects/todo-list.png",
    links: { repo: "https://github.com/NealKapadia/ToDo-project" },
  },
  {
    slug: "personal-website",
    title: "Personal Website (v1)",
    summary: "Earlier site with Material‑UI and Three.js flourishes.",
    role: "Frontend",
    tech: ["JavaScript", "Three.js", "MUI"],
    coverImage: "/images/projects/personal-website.jpg",
    links: { repo: "https://github.com/NealKapadia/Personal-Website" },
  },
  {
    slug: "verilog",
    title: "Verilog Labs",
    summary: "Digital circuits and logic experiments.",
    role: "Digital Design",
    tech: ["Verilog"],
    coverImage: "/images/projects/verilog.png",
    links: { repo: "https://github.com/nealkapadia/verilog_projects" },
  },
];
