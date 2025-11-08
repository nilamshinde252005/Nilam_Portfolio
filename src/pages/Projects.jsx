import React from "react";
import "../styles/Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import CarouselImage from "../components/CarouselImage";

const PROJECTS = [
  {
    id: "p1",
    title: "withYOU",
    description:
      "A full-stack pixel-themed journaling and productivity web app featuring secure JWT authentication, personalized to-do lists, custom daily rules, and an interactive 'Magic Book' gratitude tracker. Designed to promote mindfulness and digital well-being.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "Axios",
      "CORS","Middleware","Postman",
    ],
    github: "https://github.com/nilamshinde252005/withYOU",
    live:"https://withyou-nnfp.onrender.com/",
  },
  {
    id: "p5",
    title: "Little Travellers London",
    description:
      "An interactive educational app for early learners developed in collaboration with Playroom Consultant and the University of Westminster. Focused on gamified learning through storytelling, sticker-based progress tracking, and Montessori-inspired UI design. Features include itinerary creation, flashcards, and parent–child activity recommendations.",
    tags: [
      "Swift",
      "SwiftUI",
      "Figma",
      "User Research",
      "UX Design",
      "Gamified Learning",
      "Educational Technology",
    ],
    github: "https://github.com/nilamshinde252005/LittleTravellersLondon", // update if needed
    live: "", // or add link to prototype/demo if available
  },
 
  {
    id: "p3",
    title: "MatchaMinutes",
    description:
      "A pixel-retro lofi café web experience combining ambience, focus, and design. Users can listen to looping lofi stations, run Pomodoro timers, and switch between themed café environments — all crafted with pure HTML, CSS, and JavaScript for a cozy, immersive feel.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Audio/Video APIs",

    ],
    github: "https://github.com/nilamshinde252005/MatchaMinutes",
    live: "https://nilamshinde252005.github.io/MatchaMinutes/",
  },
  {
    id: "p4",
    title: "Vintage PhotoBooth",
    description:
      "A retro browser photobooth that captures webcam images, applies aesthetic filters, and generates downloadable film-strip layouts. Built with vanilla JavaScript and the Canvas API for real-time rendering, and localStorage for session persistence.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Canvas API",
      "MediaDevices API",
      "LocalStorage",
    ],
    github: "https://github.com/nilamshinde252005/PhotoBooth",
    live: "https://nilamshinde252005.github.io/PhotoBooth/",
  },

   {
    id: "p2",
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, Vite, and React Router to showcase my projects, technical skills, and design journey through a clean and responsive interface.",
    tags: ["React.js", "Vite", "JavaScript"],
    github: "https://github.com/nilamshinde252005/Nilam_Portfolio/",
    live:"https://nilamshinde252005.github.io/Nilam_Portfolio/",
  },
];

export default function Projects() {
  return (
    <div style={{ marginLeft: "15%", marginRight: "15%" }}>
      <section id="projects" aria-labelledby="projects-heading">
        <p id="projects-heading" className="h1">
          <strong>/ Projects ⎯⎯⎯</strong>
        </p>

        <CarouselImage />

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className="project-card"
              aria-labelledby={`${p.id}-title`}
            >
              <div className="card-header">
                <h4 id={`${p.id}-title`} className="project-title">
                  {p.title}
                </h4>

                <div className="project-links">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                      aria-label={`Open ${p.title} on GitHub`}
                    >
                      <FaGithub />
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-link"
                      aria-label={`View ${p.title} live demo`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-desc">{p.description}</p>

              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
