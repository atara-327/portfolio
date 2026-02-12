export interface Work {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  year: string;
  details: string; // HTML content or long text
  demoUrl?: string; // Optional
  repoUrl?: string; // Optional
}

export const works: Work[] = [
  {
    slug: "portfolio-site",
    title: "Portfolio v1",
    description: "My personal portfolio site built with Astro and Tailwind CSS.",
    thumbnail: "https://placehold.co/600x400/1a1a1a/ffffff?text=Portfolio", // Placeholder for now
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    year: "2024",
    details: `
      <h2>Overview</h2>
      <p>This is my first portfolio site designed to showcase my works and skills. I focused on a clean, minimal design with high performance.</p>
      <h2>Tech Stack</h2>
      <ul>
        <li>Astro for static site generation</li>
        <li>Tailwind CSS for styling</li>
        <li>TypeScript for type safety</li>
      </ul>
      <h2>Key Features</h2>
      <p>The site is fully responsive and achieves a perfect score on Lighthouse.</p>
    `,
  },
  {
    slug: "task-manager",
    title: "Task Manager App",
    description: "A simple task management application with drag-and-drop features.",
    thumbnail: "https://placehold.co/600x400/2563eb/ffffff?text=Task+App",
    tags: ["React", "DnD", "Vite"],
    year: "2023",
    details: `
      <h2>Overview</h2>
      <p>A productivity tool to help users manage their daily tasks efficiently.</p>
      <h2>Challenges</h2>
      <p>Implementing smooth drag-and-drop interactions was the main challenge. I used React DnD library to achieve this.</p>
    `,
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Real-time weather dashboard using OpenWeatherMap API.",
    thumbnail: "https://placehold.co/600x400/eab308/ffffff?text=Weather",
    tags: ["JavaScript", "API Integration", "Chart.js"],
    year: "2023",
    details: `
      <h2>Overview</h2>
      <p>Displays current weather and 5-day forecast for any city.</p>
      <h2>Tech Details</h2>
      <p>Used Fetch API to get data and Chart.js to visualize temperature trends.</p>
    `,
  },
];
