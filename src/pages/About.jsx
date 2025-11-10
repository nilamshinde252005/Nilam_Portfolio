import React from "react";
import { FaEnvelope } from "react-icons/fa"; 
import "../styles/About.css";

export default function About() {
  return (
    <div>
      <section id="about">
        <main className="main">
          <p className="h1">
            <strong>/ About me ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</strong>
          </p>

          <div className="tech-section">
            <div className="left-col">
              <p style={{ lineHeight: "1.5", marginBottom: "1.5rem" }}>
                I am currently pursuing a Bachelor’s in Computer Science at the{" "}
                <strong>University of Westminster</strong>, while building
                experience on projects involving React, Node.js, Express, and
                REST APIs. I am also expanding my knowledge through a{" "}
                <strong>
                  Full-Stack Web Development Bootcamp at the University of
                  Edinburgh
                </strong>
                .
              </p>

              <p>Here are some technologies I’ve been working with:</p>

              <div className="languages">
                <ul className="ul">
                  <p>Languages</p>
                  <li>JavaScript (ES6+)</li>
                  <li>Swift (basic)</li>
                  <li>Python (basic)</li>
                  <li>C++</li>
                  <li>SQL</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>

                <ul className="ul">
                  <p>Frontend</p>
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive Design</li>
                  <li>Bootstrap (familiar)</li>
                </ul>

                <ul className="ul">
                  <p>Backend</p>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>REST APIs</li>
                  <li>JWT Authentication</li>
                </ul>

                <ul className="ul">
                  <p>Database</p>
                  <li>PostgreSQL (basics)</li>
                  <li>Drizzle ORM (basics)</li>
                  <li>JSON</li>
                </ul>


                </ul>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
