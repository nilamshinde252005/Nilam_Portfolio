import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";
import CarouselImage from "../components/CarouselImage";
const PROJECTS = [
  {
    id: "p1",
    title: "withyou",
    description:"A pixel-themed journaling & productivity web app with JWT sign-in,to-do lists, custom rules, and a “magic book” daily entry feature.",
    tags: ["React", "Node.js", "Express.js", "JWT Authentication", "Postman","Javascript"],
    github: "https://github.com/nilamshinde252005/withYOu"
  },
  {
    id: "p2",
    title: "Portfolio Website",
    description:"Personal portfolio built with React, Vite, and React Router. It showcases projects, skills, and my coding journey.",
    tags: ["React.js","Javascript"],
    github: null
  }
];

export default function Projects() {
  return (
    <div style={{ marginLeft: "15%", marginRight: "15%" }}>
      <section id="projects" aria-labelledby="projects-heading">
        <p id="projects-heading" className="h1">
          <strong >/ Project ⎯⎯⎯</strong>
        </p>
        <CarouselImage/>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.id} className="project-card" aria-labelledby={`${p.id}-title`}>
              <div className="card-header">
                <h4 id={`${p.id}-title`} className="project-title">
                  {p.title}
                </h4>

                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    aria-label={`Open ${p.title} on GitHub`}
                  >
                    <FaGithub />
                  </a>
                ) : (
                  <div className="github-placeholder" aria-hidden="true" />
                )}
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
