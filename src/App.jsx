import { projects } from './data/projects'
import { experience } from './data/experience'
import NetworkBackground from "./components/NetworkBackground";

function App() {
  return (
    <div className="site-shell">
      <NetworkBackground />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top">VR<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#academic">Academic</a>
          <a href="#research">Research</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="main-content"><div id="top" />
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">VALI AHMAD RAHMANI / COMPUTER ENGINEER</p>
            <h1>Software experience. An AI direction.</h1>
            <p className="hero-text">
              I build software for real operational needs, from monitoring applications to a
              conversational assistant in development. My background combines embassy IT
              operations with academic work in NLP and sentiment analysis. I am now
              deepening my focus on applied AI.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View selected work</a>
              <a className="button button-secondary" href="#academic">Explore academic background</a>
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
          <div className="section-heading">
            <span className="section-number">02</span>
            <div>
              <p className="eyebrow">Expertise</p>
              <h2>A broad engineering foundation with a clear AI direction.</h2>
            </div>
          </div>

          <div className="expertise-grid">
            <article className="expertise-card expertise-primary">
              <span className="expertise-number">01</span>
              <h3>Applied AI & NLP</h3>
              <p>
                Academic work in sentiment analysis and NLP, with current hands-on
                development of a Telegram assistant using Django and Ollama.
              </p>
              <div className="expertise-tags">
                <span>Python</span>
                <span>NLP</span>
                <span>Machine Learning</span>
                <span>LLM</span>
                <span>AI</span>
              </div>
            </article>

            <article className="expertise-card">
              <span className="expertise-number">02</span>
              <h3>Software Engineering</h3>
              <p>
                Backend applications, REST APIs, automation, databases, deployment,
                version control, and software architecture.
              </p>
              <div className="expertise-tags">
                <span>Python</span>
                <span>Django</span>
                <span>JavaScript</span>
                <span>REST API</span>
                <span>Git</span>
              </div>
            </article>

            <article className="expertise-card">
              <span className="expertise-number">03</span>
              <h3>Systems & Infrastructure</h3>
              <p>
                Enterprise systems, virtualization, Windows and Linux environments,
                monitoring, troubleshooting, and operational automation.
              </p>
              <div className="expertise-tags">
                <span>Windows Server</span>
                <span>Linux</span>
                <span>VMware</span>
                <span>Monitoring</span>
                <span>Automation</span>
              </div>
            </article>

            <article className="expertise-card">
              <span className="expertise-number">04</span>
              <h3>Networking & Security</h3>
              <p>
                Enterprise networking, switching, routing, VLANs, VPNs, firewalls,
                network troubleshooting, and security infrastructure.
              </p>
              <div className="expertise-tags">
                <span>Cisco</span>
                <span>FortiGate</span>
                <span>TCP/IP</span>
                <span>VLAN</span>
                <span>VPN</span>
              </div>
            </article>
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
                className={`project-card ${project.featured ? "project-featured" : ""
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
          <div className="section-heading">
            <span className="section-number">04</span>

            <div>
              <p className="eyebrow">Experience</p>
              <h2>From infrastructure engineering to intelligent systems.</h2>
            </div>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item" key={item.organization + item.role}>
                <div className="experience-meta">
                  <span className="experience-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="experience-period">
                    {item.period}
                  </span>
                </div>

                <div className="experience-content">
                  <div className="experience-heading">
                    <div>
                      <p className="experience-type">
                        {item.type}
                      </p>

                      <h3>{item.role}</h3>

                      <p className="experience-organization">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <p className="experience-description">
                    {item.description}
                  </p>

                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="experience-technologies">
                    {item.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="academic" className="section academic-section">
          <div className="section-heading">
            <span className="section-number">05</span>

            <div>
              <p className="eyebrow">Academic foundation</p>
              <h2>A strong foundation in computer engineering and AI.</h2>
            </div>
          </div>

          <div className="academic-grid">
            <div className="academic-primary">
              <div className="degree-label">
                B.Sc. / Computer Engineering
              </div>

              <h3>
                Islamic Azad University
              </h3>

              <p className="academic-location">
                Tehran, Iran · 2019 — 2023
              </p>

              <p>
                Undergraduate study covering computer engineering fundamentals,
                algorithms, software engineering, operating systems, databases,
                computer networks, artificial intelligence, computational
                intelligence, Natural Language Processing, and computer vision.
              </p>
            </div>

            <div className="academic-metrics">
              <div className="academic-metric">
                <strong>3.84</strong>
                <span>/ 4.00</span>
                <p>Overall GPA · as reported in my CV</p>
              </div>

              <div className="academic-metric">
                <strong>3.94</strong>
                <span>/ 4.00</span>
                <p>Last two years · as reported in my CV</p>
              </div>

              <div className="academic-metric">
                <strong>6th</strong>
                <p>Rank among 2019 entrance students</p>
              </div>
            </div>
          </div>

          <div className="academic-lower">
            <div>
              <p className="eyebrow">Selected coursework</p>

              <div className="course-list">
                <span>Natural Language Processing</span>
                <span>Artificial Intelligence</span>
                <span>Computational Intelligence</span>
                <span>Computer Vision</span>
                <span>Algorithms Design</span>
                <span>Data Structures</span>
                <span>Database</span>
                <span>Operating Systems</span>
                <span>Software Engineering</span>
                <span>Software Testing</span>
                <span>Computer Networks</span>
                <span>Engineering Mathematics</span>
                <span>Discrete Mathematics</span>
              </div>
            </div>

            <div>
              <p className="eyebrow">Academic work</p>

              <div className="academic-work">
                <div>
                  <span>01</span>
                  <strong>
                    Product Feature Extraction & Sentiment Analysis
                  </strong>
                  <p>
                    B.Sc. final project focused on Natural Language Processing
                    and sentiment analysis.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <strong>
                    Advanced Programming — Teaching Assistant
                  </strong>
                  <p>
                    Supported programming education and student technical work.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <strong>
                    Natural Language Processing — Mentor
                  </strong>
                  <p>
                    Mentored students in NLP-related coursework and projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="section">
          <div className="section-heading">
            <span className="section-number">06</span>

            <div>
              <p className="eyebrow">Research</p>
              <h2>Exploring language, intelligence, and machine learning.</h2>
            </div>
          </div>

          <div className="research-grid">
            <article className="research-main">
              <p className="research-label">
                Earlier research work
              </p>

              <h3>
                Improving Naïve Bayes Algorithm Using Lexicon in Sentiment Analysis
              </h3>

              <p>
                Research work investigating the use of lexical information to
                improve sentiment-analysis performance with a Naïve Bayes
                classifier.
              </p>

              <span className="research-status">
                Listed as in preparation in my earlier CV; not a published paper.
              </span>
            </article>

            <aside className="research-interests">
              <p className="eyebrow">Research interests</p>

              <ul>
                <li>Natural Language Processing</li>
                <li>Machine Learning</li>
                <li>Reliable language model applications</li>
                <li>Evaluation of conversational systems</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="cv" className="section">
          <div className="section-heading"><span className="section-number">07</span><div>
            <p className="eyebrow">Experience and education</p><h2>Two ways to explore my background.</h2>
          </div></div>
          <div className="audience-grid">
            <article className="audience-card"><p className="eyebrow">For hiring teams</p>
              <h3>Software and applied AI</h3><p>Python and Django projects, operational troubleshooting, databases, and deployment experience.</p>
              <a className="button button-secondary" href="#projects">Explore practical work</a>
              <a className="cv-download" href="/cv/Vali_Rahmani_Job_Resume.docx" download>Job résumé · Word draft ↓</a>
            </article>
            <article className="audience-card"><p className="eyebrow">For academic readers</p>
              <h3>Computer science and NLP</h3><p>Computer engineering education, sentiment analysis, teaching experience, and an interest in reliable language applications.</p>
              <a className="button button-secondary" href="#academic">Explore education and research</a>
              <a className="cv-download" href="/cv/Vali_Rahmani_Academic_CV.docx" download>Academic CV · Word draft ↓</a>
            </article>
          </div>
        </section>
        <section id="contact" className="section contact">
          <p className="eyebrow">08 / CONTACT</p>
          <h2>Software, AI, and research opportunities.</h2>
          <a className="email" href="mailto:valirahmani.ac@gmail.com">valirahmani.ac@gmail.com</a>
          <div className="contact-links"><a href="https://github.com/valiahmad" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} Vali Rahmani</footer>
    </div>
  )
}

export default App
