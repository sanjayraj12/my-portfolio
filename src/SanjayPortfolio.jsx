import React, { useEffect } from "react";
import "./SanjayPortfolio.css";

export default function SanjayPortfolio() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section, .hero");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      {/* HERO SECTION */}
{/* HERO SECTION */}
<section className="hero enhanced-hero">
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <img src="/profilepicme.jpeg" alt="Profile" />
    <h1>Sanjay Raj J</h1>
    <p className="title">Java Full-Stack Developer | Final Year Student</p>
    <p className="contact">
      Madurai, India ·{" "}
      <a href="mailto:jsanjayraj012@gmail.com">jsanjayraj012@gmail.com</a> ·{" "}
      <a href="tel:+918220524422">+91 8220524422</a>
    </p>

    <div className="hero-buttons">
      <a
        href="/javafullstackresume.pdf"
        download
        className="hero-btn download-btn"
      >
        📄 Download Resume
      </a>
      <a
        href="https://www.linkedin.com/in/sanjay-raj-j-045648384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-btn linkedin-btn"
      >
        🔗 LinkedIn Profile
      </a>
      <a
  href="mailto:jsanjayraj012@gmail.com"
  className="hero-btn mail-btn"
>
  ✉️ Mail Me
</a>

    </div>
  </div>
</section>



      {/* ABOUT SECTION */}
      <section className="section about">
        <h2>About Me</h2>
        <p>
          I’m passionate about creating full-stack web applications using Java,
          Spring Boot, and modern frontend frameworks. I specialize in backend
          systems and RESTful API development, focusing on clean architecture,
          performance, and usability. My goal is to combine strong logic with
          creativity to craft user-friendly and secure web solutions.
        </p>
      </section>

      {/* EDUCATION SECTION */}
      <section className="section education">
        <h2>Education</h2>
        <div className="education-highlight">
          <h3>BE - Computer Science and Engineering</h3>
          <p className="college-name">
            NPR College of Engineering and Technology (2022 – 2026)
          </p>
          <ul className="edu-points">
            <li>Focused on Backend Development and Secure Web Applications</li>
            <li>Actively exploring Artificial Intelligence with full stack devlopment</li>
            <li>Building practical projects integrating Java with AI-driven concepts</li>
          </ul>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="section skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            "Java",
            "Spring Boot",
            "RESTful APIs",
            "Backend Security",
            "Authentication & Authorization",
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "MySQL",
            "PostgreSQL",
            "GitHub",
            "API Integration",
            "Debugging",
            "Artificial Intelligence (Basics)",
          ].map((skill) => (
            <div key={skill} className="skill-box">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="section experience">
        <h2>Experience</h2>
        <div className="cards">
          <div className="card">
            <h3>Unified Mentor</h3>
            <span className="duration">June 2025 - July 2025</span>
            <p>
              Developed responsive full-stack web apps for e-commerce platforms
              using Java, Spring Boot, and frontend technologies. Enhanced
              backend performance and implemented authentication modules for
              secure user access.
            </p>
          </div>
          <div className="card">
            <h3>Dot Com Infoway Ltd</h3>
            <span className="duration">July 2025 - August 2025</span>
            <p>
              Built interactive dashboards and full-stack applications.
              Collaborated with designers to convert Figma prototypes into
              production-ready interfaces, improving engagement by 15%.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      {/* PROJECTS SECTION */}
<section className="section projects">
  <h2>Projects</h2>
  <div className="cards">
    <div className="card">
      <h3>Retail Billing System (Java & Spring Boot)</h3>
      <p>
        A retail billing and inventory system with secure login, email
        verification, and role-based access for admins and users.
        Integrated real-time stock management and automated billing
        generation.
      </p>
      <a
        href="https://github.com/sanjayraj12/RetailBillingSystem"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        🔗 View on GitHub
      </a>
    </div>

    <div className="card">
      <h3>Student Management System</h3>
      <p>
        A full-stack CRUD app for managing students, attendance, and grades.
        Developed using Java, Spring Boot, and frontend technologies with
        an intuitive UI for admins, teachers, and students.
      </p>
      <a
        href="https://github.com/sanjayraj12/StudentManagementSystem"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        🔗 View on GitHub
      </a>
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Sanjay Raj J | Java Full-Stack Developer</p>
      </footer>
    </div>
  );
}
