// ─── Experience Data ──────────────────────────────────────────────────────────

export const EXPERIENCE = [
  {
    id: "exp-completum",
    period: "July 2025 — Dec 2025",
    location: "Remote · Amritsar, IN",
    role: "Full-Stack Engineering Intern",
    company: "Completum Health",
    bullets: [
      "Automated glucose data extraction from PDF graphs using a custom-built OCR and computer vision pipeline, reducing manual data entry by <strong>over 90%</strong>.",
      "Enabled longitudinal patient tracking via a multi-pass OCR timestamp system with cross-year inference ensuring correct sequencing across month/year boundaries.",
      "Containerized backend services with Docker and deployed on Azure using Kubernetes, enabling horizontal scaling.",
      "Optimized ingestion with in-memory buffering and batched DB operations — processing 1k–5k readings per upload in 1–4 seconds on standard hardware.",
    ],
    tags: [
      "Node.js", "Express.js", "MongoDB", "Python", "OpenCV",
      "Docker", "Kubernetes", "Azure",
    ],
  },
];
