import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/NavBar.css";

export default function NavBar() {
    return (
        <nav className="navbar" style={{position:"sticky"}}>

            {/* Page Links */}
            <ul className="nav-links" style={{ marginLeft: "8%" }}>
                <div className="logo">Dia</div>
                <li><a href="/Portfolio2/#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>

            {/* Social Links */}
            <ul className="social-links" style={{ marginRight: "8%" }}>
                
                <li>
                    <a href="https://www.linkedin.com/in/nilam-shinde-b91936279/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="mailto:nilamshinde252005@gmail.com">
                        <FaEnvelope />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/nilamshinde252005" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </li>
            </ul>
        </nav>
    );
}
