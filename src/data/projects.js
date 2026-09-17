// ─── Project Data ─────────────────────────────────────────────────────────────
// Add, remove, or reorder projects here. No JSX changes needed.
// categories: array of strings used by the filter tabs.
// hidden: true = only shows when "View More" is clicked.

export const PROJECTS = [
  {
    id: "proj-ocr",
    name: "Glucose OCR Pipeline",
    categories: ["automation", "backend"],
    description:
      "Automated glucose data extraction from PDF graphs at Completum Health using custom OCR + computer vision. Reduced manual entry by <strong>90%+</strong>. Containerized on Azure with Kubernetes; processes 1k–5k readings in 1–4 seconds.",
    tags: ["Node.js", "Python", "OpenCV", "Docker", "Kubernetes", "Azure", "MongoDB"],
    links: [
      { label: "GitHub", href: "https://github.com/InViSibleTorNadO" },
    ],
    hidden: false,
  },
  {
    id: "proj-url",
    name: "URL Shortener",
    categories: ["fullstack", "backend"],
    description:
      "Full-stack URL shortener with custom alias support, click analytics, and QR code generation. JWT-authenticated user accounts, MongoDB persistence, and a real-time dashboard to track link performance.",
    tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", "JWT"],
    links: [
      { label: "GitHub", href: "https://github.com/InViSibleTorNadO/URL-Shortener" },
    ],
    hidden: false,
  },
  {
    id: "proj-tally",
    name: "Tally",
    categories: ["backend"],
    description:
      "High-performance URL shortener and request counter built in Go for blazing-fast throughput. Demonstrates Go concurrency patterns and building backend services from scratch without heavy frameworks.",
    tags: ["Go", "HTTP", "Concurrency"],
    links: [
      { label: "GitHub", href: "https://github.com/InViSibleTorNadO/Tally" },
    ],
    hidden: false,
  },
  {
    id: "proj-video",
    name: "Video Generator",
    categories: ["automation"],
    description:
      "Automated video generation pipeline that programmatically assembles video content from text/data inputs using Python media processing libraries — no manual editing required.",
    tags: ["Python", "Automation", "Media Processing"],
    links: [
      { label: "GitHub", href: "https://github.com/InViSibleTorNadO/Video-Generator" },
    ],
    hidden: false,
  },
  {
    id: "proj-yelp",
    name: "YelpCamp",
    categories: ["fullstack"],
    description:
      "Full-stack campground review platform with CRUD, Cloudinary image uploads, Passport.js authentication, and Mapbox interactive maps. MVC architecture with Express and MongoDB.",
    tags: ["Node.js", "Express.js", "MongoDB", "Passport.js", "EJS"],
    links: [
      { label: "GitHub", href: "https://github.com/InViSibleTorNadO/YelpCamp" },
    ],
    hidden: true,
  },
  {
    id: "proj-auto",
    name: "Automatic Extractor",
    categories: ["automation"],
    description:
      "Python-powered document data extraction tool using OCR and computer vision to batch-process documents and extract structured fields at high accuracy. Precursor to the Completum Health production pipeline.",
    tags: ["Python", "OCR", "OpenCV", "Automation"],
    links: [
      { label: "GitHub", href: "https://github.com/InViSibleTorNadO/Automatic_ext" },
    ],
    hidden: true,
  },
];

// Filter tab definitions — label shown in UI + the value matched against categories[]
export const FILTER_TABS = [
  { id: "filter-all",        label: "All",        value: "all" },
  { id: "filter-fullstack",  label: "Full-Stack", value: "fullstack" },
  { id: "filter-backend",    label: "Backend",    value: "backend" },
  { id: "filter-automation", label: "Automation", value: "automation" },
];
