import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../styles/About.css";

export default function About() {
    return (
        <div>
            <section id="about">
                <main className="main">

                    <p className="h1"> <strong >/ About me ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</strong>  </p>

                    <div className="tech-section">
                        <div className="left-col">

                            <p style={{ lineHeight: "1.5", marginBottom: "1.5rem" }}>
                                I am currently pursuing a Bachelor’s in Computer Science at the <strong>University of Westminster,</strong> while building experience on projects involving React, Node.js, Express, and REST APIs. I’ve also been expanded my knowledge through a Full-Stack Web Development Bootcamp at the <strong>University of Edinburgh.</strong>
                            </p>

                            <p>Here are some technologies I have been working with :</p>

                            <div className="languages">
                                  <ul className="ul">
    <p>Languages</p>
    <li>JavaScript (ES6+)</li>
    <li>Swift</li>
    <li>Python</li>
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
    <li>Next.js (learning)</li>
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
    <li>PostgreSQL</li>
    <li>Drizzle ORM</li>
    <li>JSON</li>
  </ul>

  <ul className="ul">
    <p>Tools</p>
    <li>Git & GitHub</li>
    <li>Postman</li>
    <li>VS Code</li>
    <li>Render</li>
    <li>Vercel</li>
  </ul>

  <ul className="ul">
    <p>Concepts</p>
    <li>Database Design</li>
    <li>UI/UX Principles</li>
    <li>Agile Workflow</li>
    <li>Testing & Debugging</li>
    <li>Project Planning</li>
  </ul>
                                </ul>
                            </div>

                        </div>
                    </div>


                </main>
            </section>
        </div>
    )
}
