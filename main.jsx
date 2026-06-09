import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

const skills = [
  { title: 'Languages', value: 'Python, SQL' },
  { title: 'Big Data / Streaming', value: 'Apache Spark, Hadoop, Hive' },
  { title: 'Cloud Platforms', value: 'AWS Redshift, GCP' },
  { title: 'Database / Storage', value: 'PostgreSQL, MongoDB, Cassandra, Snowflake' },
  { title: 'Data Engineering', value: 'ETL & ELT Pipelines, Data Processing, Data Transformation, Data Preprocessing, Data Modeling, EDA' },
  { title: 'Visualization & Workflow', value: 'Power BI, Tableau, Git, GitHub, Notion, dbt' },
];

const projects = [
  {
    title: 'Uber Data ETL Pipeline',
    stack: 'Python • PostgreSQL • ETL • Data Modeling',
    description: 'Designed and implemented an end-to-end ETL pipeline for processing Uber trip data. Performed extraction, transformation, and loading using Python and PostgreSQL. Developed structured data models for efficient querying and analytical reporting.',
    link: 'https://github.com/kanimozhijayakumar/uber-etl-data-pipeline',
    label: 'View Project',
  },
  {
    title: 'SQL Practice & Query Development',
    stack: 'SQL • Joins • Aggregations • Window Functions',
    description: 'Developed strong SQL proficiency by practicing DDL, DML, and advanced query techniques. Wrote queries using INNER JOIN, LEFT JOIN, GROUP BY, aggregations, and window functions. Organized SQL scripts to improve query optimization and problem-solving skills.',
    link: 'https://github.com/kanimozhijayakumar/sql',
    label: 'View Project',
  },
  {
    title: 'Food Donation Management System',
    stack: 'React.js • Firebase • Google Maps API',
    description: 'Developed a web application to streamline surplus food distribution between restaurants and NGOs. Integrated Google Maps API for real-time tracking and optimized route planning.',
    link: 'https://github.com/kanimozhijayakumar',
    label: 'View GitHub',
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="logo" href="#home">Kanimozhi J</a>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">☰</button>
      <nav className={`nav ${open ? 'show' : ''}`}>
        {navLinks.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>
        ))}
      </nav>
    </header>
  );
}

function SectionHeading({ label, title }) {
  return (
    <div className="section-heading">
      <p>{label}</p>
      <h2>{title}</h2>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="badge">Data Engineering Portfolio</p>
            <h1>Kanimozhi J</h1>
            <h2>Aspiring Data Engineer</h2>
            <p className="hero-text">
              Building efficient ETL and ELT pipelines, scalable data workflows,
              analytical data models, and business-ready dashboards using Python,
              SQL, Spark, PostgreSQL, MongoDB, Snowflake, Power BI, and Tableau.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn secondary" href="/kanimozhi_resume.pdf" download>Download Resume</a>
            </div>
            <div className="quick-links">
              <a href="https://github.com/kanimozhijayakumar" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/kanimozhi-jayakumar-021b28314/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:kanimozhijayakumar26@gmail.com">Email</a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeading label="About Me" title="Professional Summary" />
          <div className="content-card">
            <p>Aspiring Data Engineer with hands-on experience in Python, SQL, and data analytics, skilled in designing and building ETL and ELT pipelines, data transformation, and data visualization.</p>
            <p>Strong understanding of data warehousing concepts and scalable data workflows. Passionate about leveraging modern tools like Spark and cloud platforms to build efficient, reliable, and high-performance data systems.</p>
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading label="Technical Skills" title="Tools & Technologies" />
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading label="Experience" title="Internship" />
          <div className="timeline-card">
            <div>
              <h3>Vcodez</h3>
              <span>Data Analytics Intern</span>
            </div>
            <ul>
              <li>Performed customer churn analysis using Python, Pandas, NumPy, and SQL to identify key retention factors.</li>
              <li>Cleaned and preprocessed raw data, conducted EDA, and extracted actionable business insights.</li>
              <li>Created interactive dashboards using Power BI / Tableau to support data-driven decision making.</li>
            </ul>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading label="Projects" title="Featured Work" />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <span>{project.stack}</span>
                </div>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">{project.label}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <SectionHeading label="Education & Achievements" title="Background" />
          <div className="two-column">
            <div className="content-card">
              <h3>B.E Computer Science & Engineering</h3>
              <p>Anand Institute of Higher Technology, Anna University</p>
              <p>2022 – 2026 | GPA: 8.2</p>
            </div>
            <div className="content-card">
              <h3>Achievements</h3>
              <ul>
                <li>PCEP - Certified Entry-Level Python Programme</li>
                <li>Python for Data Science issued by IBM</li>
                <li>Deloitte Australia Data Analytics</li>
                <li>Certificate of Appreciation - TNWISE 2025 Hackathon</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <SectionHeading label="Contact" title="Let's Connect" />
          <div className="contact-card">
            <p>I am open to Data Engineer, Data Analyst, Python Developer, and Frontend Developer opportunities.</p>
            <div className="contact-links">
              <a href="mailto:kanimozhijayakumar26@gmail.com">kanimozhijayakumar26@gmail.com</a>
              <a href="tel:+918438975054">+91 8438975054</a>
              <a href="https://github.com/kanimozhijayakumar" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/kanimozhi-jayakumar-021b28314/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2026 Kanimozhi J. Professional Portfolio.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
