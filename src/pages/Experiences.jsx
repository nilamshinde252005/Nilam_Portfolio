import React, { useState } from "react";
import "../styles/Experiences.css";

const EXPERIENCES = [
  {
    id: "int1",
    title: "Software Development Intern",
    company: "– Nyati Technologies Pvt. Ltd.",
    date: "Jun 2024 — August 2024",
    location: "Pune, India",
    bullets: [
      "Implemented Authentication: Contributed to developing a secure login system and user authentication process.",
      "Collaborated in Teams: Worked under supervision of senior developers to ensure compliance with internal standards.",
      "Project Coordination: Assisted in aligning project milestones with client requirements and internal workflows.",
      "Improved Technical Proficiency: Enhanced skills in React, UI development, and API consumption."
    ],
    tech: ["JavaScript", "React.js", "HTML5", "API Integration"]
  },
  {
    id: "int2",
    title: "Software Development Intern",
    company: "Intech Solutions",
    date: "July 2025 — Augest 202%",
    location: "Remote",
    bullets: [
      "Implemented responsive React components for feature Y.",
      "Improved Lighthouse score from 60 → 86.",
      "Collaborated closely with design to ship accessible UI."
    ],
    tech: ["React", "TypeScript", "Postman", "Express.js","Node.js"]
  },

];

export default function Experiences() {
  const [activeId, setActiveId] = useState(EXPERIENCES[0].id);
  const active = EXPERIENCES.find((e) => e.id === activeId);

  return (
    <section id="experiences" className="experiences-section">
      <div className="experiences-header">
        <p className="h1">
          <strong style={{ paddingBottom: "4%" }}>
            / Experiences ⎯⎯⎯⎯⎯⎯⎯
          </strong>
        </p>
        <div className="hint">Click a role to view details</div>
      </div>

      <div className="experiences-container">
        <nav className="exp-list" aria-label="Experience list">
          {EXPERIENCES.map((exp) => (
            <button
              key={exp.id}
              className={`exp-btn ${exp.id === activeId ? "active" : ""}`}
              onClick={() => setActiveId(exp.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveId(exp.id);
                }
              }}
              aria-pressed={exp.id === activeId}
            >
              <div className="exp-title">{exp.title}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-mini-date">{exp.date.replace(" — ", " • ")}</div>
            </button>
          ))}
        </nav>

        <div className="divider" aria-hidden="true" />

        <article className="exp-details" aria-live="polite">
          <header>
            <h3 className="exp-headline">
              {active.title} <span className="dash">—</span> <span className="company-name">{active.company}</span>
            </h3>
            <div className="exp-meta">{active.date} • {active.location}</div>
          </header>

          <ul className="exp-bullets">
            {active.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <div className="exp-tech" aria-hidden="false">
            {active.tech.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
