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
                                    <p> skills</p>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>JWT Authentication</li>
                                    <li>Axios</li><li>CORS</li>
                                </ul>

                                <ul className="ul">
                                    <p> skills</p>
                                    <li>PHP (basic)</li> <li>Python</li><li>Javascript</li><li>Middleware</li><li>Postman</li>

                                </ul>
                            </div>

                        </div>
                    </div>


                </main>
            </section>
        </div>
    )
}