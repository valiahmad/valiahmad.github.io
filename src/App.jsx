import { projects } from './data/projects'
import { experience } from './data/experience'

function App() {
  return (
    <div className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top">VR<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">COMPUTER ENGINEER / AI / SOFTWARE / SYSTEMS</p>
            <h1>Building intelligent software and reliable systems.</h1>
            <p className="hero-text">
              I am Vali Rahmani, a Computer Engineer with professional experience in
              IT infrastructure, networking, systems, and software development — now
              building deeper expertise in Artificial Intelligence and Machine Learning.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View selected work</a>
              <a className="button button-secondary" href="#contact">Get in touch</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="terminal-top"><span></span><span></span><span></span></div>
            <div className="terminal-line"><b>~/vali</b> $ whoami</div>
            <div className="terminal-output">computer_engineer</div>
            <div className="terminal-line"><b>~/vali</b> $ focus</div>
            <div className="terminal-output">AI · software · systems</div>
            <div className="terminal-line"><b>~/vali</b> $ status</div>
            <div className="terminal-output active">building_next →</div>
          </div>
        </section>

        <section id="about" className="section about-section">
  <div className="section-heading">
    <span className="section-number">01</span>
    <div>
      <p className="eyebrow">About</p>
      <h2>Engineering systems today. Building toward AI.</h2>
    </div>
  </div>

  <div className="about-grid">
    <div className="about-main">
      <p className="about-lead">
        I am a Computer Engineer working across software, systems,
        infrastructure, and intelligent applications.
      </p>

      <p>
        My professional experience has given me a strong foundation in
        enterprise IT infrastructure, networking, systems administration,
        security, virtualization, troubleshooting, monitoring, and
        automation.
      </p>

      <p>
        Alongside this professional work, my academic background has been
        strongly connected to Artificial Intelligence and Natural Language
        Processing. I am now deliberately deepening that direction through
        AI projects, machine learning, NLP, and research-oriented work.
      </p>

      <p>
        My goal is to combine strong engineering fundamentals with
        increasingly specialized expertise in AI and intelligent software
        systems.
      </p>
    </div>

    <div className="about-aside">
      <div className="about-stat">
        <span>01</span>
        <strong>AI</strong>
        <p>Primary specialization direction</p>
      </div>

      <div className="about-stat">
        <span>02</span>
        <strong>Software</strong>
        <p>Applications, APIs & automation</p>
      </div>

      <div className="about-stat">
        <span>03</span>
        <strong>Systems</strong>
        <p>Infrastructure & operational engineering</p>
      </div>
    </div>
  </div>
</section>

        <section id="expertise" className="section">
          <p className="eyebrow">02 / EXPERTISE</p>
          <div className="expertise-grid">
            {[
              ['AI / ML', 'Machine Learning · NLP · Deep Learning · LLMs'],
              ['Software', 'Python · Django · JavaScript · APIs · Databases'],
              ['Systems', 'Windows Server · Linux · VMware · Hyper-V · Deployment'],
              ['Infrastructure', 'Networking · Firewalls · VPN · DNS · Virtualization'],
            ].map(([title, text]) => (
              <article className="expertise-card" key={title}>
                <span className="card-index">0{['AI / ML','Software','Systems','Infrastructure'].indexOf(title)+1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
  <div className="section-heading">
    <span className="section-number">03</span>
    <div>
      <p className="eyebrow">Selected work</p>
      <h2>Projects built around real problems.</h2>
    </div>
  </div>

  <div className="projects-grid">
    {projects.map((project, index) => (
      <article
        className={`project-card ${
          project.featured ? "project-featured" : ""
        }`}
        key={project.title}
      >
        <div className="project-topline">
          <span className="project-index">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="project-category">
            {project.category}
          </span>
        </div>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-details">
          <div>
            <span className="detail-label">Problem</span>
            <p>{project.problem}</p>
          </div>

          <div>
            <span className="detail-label">Approach</span>
            <p>{project.solution}</p>
          </div>
        </div>

        <div className="project-footer">
          <div className="tech-list">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <span className="project-status">
            {project.status}
          </span>
        </div>
      </article>
    ))}
  </div>
</section>

        <section id="experience" className="section">
          <p className="eyebrow">04 / EXPERIENCE</p>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-period">{item.period}</div>
                <div><h3>{item.role}</h3><p className="organization">{item.organization}</p><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section academic">
          <div>
            <p className="eyebrow">05 / ACADEMIC FOUNDATION</p>
            <h2>Computer Engineering · AI/NLP foundation</h2>
          </div>
          <div className="academic-facts">
            <div><strong>3.84 / 4</strong><span>Overall GPA</span></div>
            <div><strong>3.94 / 4</strong><span>Last two years</span></div>
            <div><strong>2023</strong><span>B.Sc. Computer Engineering</span></div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">06 / CONTACT</p>
          <h2>Let's build something useful.</h2>
          <a className="email" href="mailto:valirahmani.ac@gmail.com">valirahmani.ac@gmail.com</a>
          <div className="contact-links"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">LinkedIn ↗</a></div>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} Vali Rahmani</footer>
    </div>
  )
}

export default App
