import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../styles/Home.css";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import { ReactTyped } from "react-typed";
import Footer from "../components/Footer";
import cosmos from "../assets/cosmos2.gif";

export default function Home() {
    return (
        <main >
            <section id="home">
                <header className="hero">
                    <img
                        src={cosmos}
                        alt="Animated graphic"
                        className="hero-gif"
                        style={{marginBottom:"3%"}}
                    />
                    <p className="h1">
                        {" "}
                        <strong className="name-accent">
                            <ReactTyped
                                strings={["Hi, I’m Nilam"]}
                                typeSpeed={150}
                                backSpeed={50}
                                showCursor={true}
                                cursorChar="|"
                                loop={false}
                            />
                        </strong>
                    </p>

                    <p className="h2">I love creating things that live on the internet.</p>
                    <p className="lead">
                        I’m a <strong>software engineer </strong> (student) passionate about building applications that are simple, useful, and meaningful. I’m fascinated by <em>design, web technologies, and scalable apps</em>, and I’m always learning new ways to turn ideas into reality.
                    </p>

                    <a className="cta" href="mailto:dia.wagle@gmail.com" aria-label="Email Dia">
                        <FaEnvelope className="cta-icon" />
                        <span className="cta-text">Get in touch</span>
                    </a>
                </header>
            </section>

            <About />
            <Experiences />
            <Projects />
            <Footer />
        </main>
    );
}
