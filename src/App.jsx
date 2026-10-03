import { useEffect, useRef, useState } from 'react';
import { projects } from './data/projects';
import { experience } from './data/experience';
import NetworkBackground from './components/NetworkBackground';

const email = 'valirahmani.ac@gmail.com';
const nav = [['about', 'About'], ['projects', 'Projects'], ['experience', 'Experience'], ['skills', 'Skills'], ['education', 'Education'], ['contact', 'Contact']];
const cvBase = `${import.meta.env.BASE_URL}cv/`;
function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    external: <><path d="M7 17 17 7M7 7h10v10" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    moon: <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    code: <><path d="m7 7-5 5 5 5m10-10 5 5-5 5m-4-13-2 16" /></>,
    brain: <><circle cx="12" cy="12" r="3" /><circle cx="4" cy="5" r="2" /><circle cx="20" cy="5" r="2" /><circle cx="4" cy="19" r="2" /><circle cx="20" cy="19" r="2" /><path d="m6 6 4 4m4 0 4-4M6 18l4-4m4 0 4 4" /></>,
    server: <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01M12 6.5h5M12 17.5h5" /></>,
    book: <><path d="M12 6v15M3 3c4-1 6 0 9 3 3-3 5-4 9-3v15c-4-1-6 0-9 3-3-3-5-4-9-3Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    copy: <><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M16 8V3H3v13h5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    pause: <><path d="M8 5v14M16 5v14" /></>,
    play: <path d="m8 4 12 8-12 8Z" />,
    note: <><path d="M5 3h10l4 4v14H5ZM15 3v5h4M8 12h8m-8 4h6" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.code}</svg>;
}
function Modal({ open, onClose, title, id, children, drawer = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!open) { if (dialog.open) dialog.close(); return; }
    dialog.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = old; if (dialog.open) dialog.close(); };
  }, [open]);
  return <dialog ref={ref} className={drawer ? 'modal notes-drawer' : 'modal cv-modal'} aria-labelledby={id} onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) { const b = e.currentTarget.getBoundingClientRect(); if (e.clientX < b.left || e.clientX > b.right || e.clientY < b.top || e.clientY > b.bottom) onClose(); } }}>
    <div className="modal-top"><span className="eyebrow">VALI RAHMANI / PORTFOLIO</span><button className="icon-button" aria-label={`Close ${title.toLowerCase()}`} onClick={onClose}><Icon name="close" /></button></div>
    <h2 id={id}>{title}</h2>{children}
  </dialog>;
}
function SectionHeading({ number, label, title, children }) {
  return <div className="section-heading"><p className="eyebrow"><span>{number}</span> / {label}</p><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>;
}
function NeuralVisual() {
  return <div className="hero-visual" aria-hidden="true">
    <div className="visual-top"><span><i /> APPLIED INTELLIGENCE</span><span>01 — 04</span></div>
    <svg className="neural-map" viewBox="0 0 500 350" fill="none">
      <defs><radialGradient id="halo"><stop stopColor="var(--accent)" stopOpacity=".2" /><stop offset="1" stopColor="var(--accent)" stopOpacity="0" /></radialGradient><linearGradient id="core" x1="180" y1="100" x2="320" y2="230" gradientUnits="userSpaceOnUse"><stop stopColor="var(--accent)" stopOpacity=".14" /><stop offset="1" stopColor="var(--purple)" stopOpacity=".08" /></linearGradient></defs>
      <circle cx="250" cy="175" r="170" fill="url(#halo)" />
      <g className="orbit-lines" stroke="var(--line)"><ellipse cx="250" cy="175" rx="215" ry="127" /><ellipse cx="250" cy="175" rx="165" ry="96" /><path d="M35 175h430M250 40v270" strokeDasharray="3 7" /></g>
      <g stroke="var(--accent)" opacity=".38"><path d="M90 96h68l50 55M90 255h68l50-55M410 96h-68l-50 55M410 255h-68l-50-55" /><path d="M90 96v159M410 96v159" strokeDasharray="4 7" /></g>
      <g className="signal"><circle cx="157" cy="96" r="4" fill="var(--accent)" /><circle cx="343" cy="255" r="4" fill="var(--purple)" /></g>
      <g className="core-chip"><rect x="191" y="116" width="118" height="118" rx="24" fill="var(--surface)" stroke="var(--accent)" strokeOpacity=".4" /><rect x="200" y="125" width="100" height="100" rx="18" fill="url(#core)" />
      <path d="m227 189 23-45 23 45m-35-16h24M281 145v44" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {[0,1,2,3,4].map(i => <path key={i} d={`M${220+i*15} 107v9M${220+i*15} 234v9M182 ${145+i*15}h9M309 ${145+i*15}h9`} stroke="var(--accent)" opacity=".5" />)}</g>
      {[[90,96,'NLP'],[410,96,'PYTHON'],[90,255,'DATA'],[410,255,'SYSTEMS']].map(([x,y,t])=><g key={t}><rect x={x-40} y={y-21} width="80" height="42" rx="10" fill="var(--surface)" stroke="var(--line)" /><text x={x} y={y+4} textAnchor="middle" fill="var(--text)" fontSize="10" fontFamily="monospace">{t}</text></g>)}
    </svg>
    <div className="visual-caption"><span>Language. Software. Systems.</span><span className="mono">CONNECTED BY DESIGN</span></div>
  </div>;
}
const projectMeta = [
  { type:'ai', icon:'brain', short:'AI Embassy Assistant', number:'01', role:'Application development', focus:'Conversational access to service information', next:'Improve source grounding and measure answer quality before public use.' },
  { type:'software', icon:'server', short:'NetWatch', number:'02', role:'Backend development & operations', focus:'Monitoring, attendance, and reporting', next:'Continue improving permissions, documentation, and operational reliability.' },
  { type:'ai', icon:'book', short:'Product reviews, understood', number:'03', role:'Undergraduate NLP project', focus:'Product feature extraction and sentiment analysis', next:'Extend the academic foundation through reproducible NLP experiments.' },
  { type:'software', icon:'code', short:'Employee Inquiry Portal', number:'04', role:'Deployment & maintenance', focus:'Employee verification and identification workflows', next:'Maintain reliable application access and database connectivity.' }
];
const skills = [
  {icon:'code',title:'Software development',label:'PROJECT EXPERIENCE',description:'Applications that support operational work.',tags:['Python','Django','JavaScript','SQL','PostgreSQL','Git']},
  {icon:'brain',title:'Applied AI & NLP',label:'ACADEMIC + DEVELOPING',description:'A language-focused foundation, applied to a working chatbot.',tags:['Sentiment analysis','NLP','Machine learning','Ollama','Telegram bots']},
  {icon:'server',title:'Systems & deployment',label:'PROFESSIONAL EXPERIENCE',description:'The infrastructure behind dependable applications.',tags:['Windows Server','VMware','IIS','DNS / TLS','GitHub Actions','Networking']},
  {icon:'book',title:'Teaching & problem solving',label:'ACADEMIC + PROFESSIONAL',description:'Breaking down technical problems and explaining solutions.',tags:['NLP mentoring','Programming support','Troubleshooting','Technical documentation']}
];
export default function App() {
  const [theme,setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const [menu,setMenu] = useState(false);
  const [notes,setNotes] = useState(false);
  const [cv,setCv] = useState(false);
  const [filter,setFilter] = useState('all');
  const [paused,setPaused] = useState(false);
  const [copied,setCopied] = useState(false);
  const [copyFailed,setCopyFailed] = useState(false);
  const timer=useRef(null);
  useEffect(() => { document.documentElement.dataset.theme=theme; try { localStorage.setItem('vali-theme',theme); } catch {} }, [theme]);
  useEffect(() => { document.documentElement.dataset.motion=paused?'paused':'running'; }, [paused]);
  useEffect(() => { const close=e=>{if(e.key==='Escape')setMenu(false);};window.addEventListener('keydown',close);return()=>{window.removeEventListener('keydown',close);clearTimeout(timer.current);}; }, []);
  async function copyEmail() { try { await navigator.clipboard.writeText(email);setCopied(true);setCopyFailed(false);clearTimeout(timer.current);timer.current=setTimeout(()=>setCopied(false),2500); } catch { setCopyFailed(true); } }
  const openCv=()=>{setMenu(false);setCv(true);};
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <NetworkBackground paused={paused} theme={theme} />
    <header className="site-header"><div className="nav-wrap">
      <a href="#top" className="brand" aria-label="Vali Rahmani home">Vali<span>Rahmani</span><b>.</b></a>
      <nav className={`nav-links ${menu?'is-open':''}`} id="primary-nav" aria-label="Main navigation">{nav.map(([id,label])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{label}</a>)}</nav>
      <div className="nav-actions"><button className="button nav-cv" onClick={openCv}><Icon name="download" size={15} /> CV</button><button className="icon-button theme-toggle" onClick={()=>setTheme(theme==='light'?'dark':'light')} aria-label={`Switch to ${theme==='light'?'dark':'light'} mode`} title={`Switch to ${theme==='light'?'dark':'light'} mode`}><Icon name={theme==='light'?'moon':'sun'} /></button><button className="icon-button menu-toggle" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} aria-controls="primary-nav" onClick={()=>setMenu(!menu)}><Icon name={menu?'close':'menu'} /></button></div>
    </div></header>
    <button className="recruiter-tab" onClick={()=>setNotes(true)} aria-haspopup="dialog"><span className="status-dot" /><span>Recruiter notes</span><Icon name="note" size={16} /></button>
    <main id="main">
      <section className="hero section" id="top">
        <div className="hero-copy"><div className="identity"><div className="monogram" aria-hidden="true">VR<span /></div><div><p className="hero-name">Vali Ahmad Rahmani</p><p className="eyebrow">COMPUTER ENGINEER · TEHRAN, IRAN</p></div></div>
          <h1>I build software.<br /><span>My focus is AI.</span></h1>
          <p className="hero-subtitle">From practical systems to intelligent applications.</p>
          <p className="hero-description">Python and Django development, an academic foundation in NLP, and hands-on experience running embassy IT. Bringing these together to build useful, reliable AI applications.</p>
          <div className="hero-actions"><a href="#projects" className="button primary">Explore my work <Icon name="arrow" size={17} /></a><button className="button" onClick={openCv}><Icon name="download" size={17} /> Download CV</button><a className="text-link" href="https://github.com/valiahmad" target="_blank" rel="noreferrer">GitHub <Icon name="external" size={16} /></a></div>
          <div className="hero-facts"><div><strong>Python + Django</strong><span>Practical development</span></div><div><strong>NLP + AI</strong><span>Academic foundation</span></div><div><strong>IT Manager</strong><span>Embassy of Afghanistan</span></div></div>
        </div><NeuralVisual />
        <div className="hero-bottom"><a href="#about">SCROLL TO EXPLORE <span>↓</span></a><button onClick={()=>setPaused(!paused)} className="motion-toggle" aria-pressed={paused}><Icon name={paused?'play':'pause'} size={13} />{paused?'Resume animation':'Pause animation'}</button></div>
      </section>
      <section id="about" className="section section-lined"><SectionHeading number="01" label="ABOUT" title="Engineering experience. A clear AI direction." />
        <div className="about-grid"><div className="terminal"><div className="terminal-bar"><span className="terminal-dots"><i /><i /><i /></span><span>vali / profile</span></div><div className="terminal-content"><p><em>$</em> whoami</p><strong>Vali Ahmad Rahmani</strong><p><em>$</em> cat current_role</p><span>IT Manager<br />Afghanistan Embassy · Tehran</span><p><em>$</em> cat direction</p><span className="terminal-accent">Applied AI · NLP · Software</span><p className="terminal-last"><em>$</em><i className="cursor" /></p></div></div>
        <div className="about-prose"><p className="lead">I work where software meets real operational needs.</p><p>At the Afghanistan Embassy in Tehran, I manage IT operations and develop tools for monitoring, attendance, and everyday workflows. That work has taught me to follow a problem through the application, database, and infrastructure.</p><p>My academic work in natural language processing and sentiment analysis set the direction I want to pursue more deeply. I’m now applying that foundation to a conversational assistant built with Django, Telegram, and local language models.</p><div className="direction-note"><span />Building toward applied AI through software, experiments, and continued study.</div></div></div>
      </section>
      <section id="projects" className="section section-lined"><SectionHeading number="02" label="SELECTED WORK" title="Useful problems. Practical projects.">A closer look at the problem, my contribution, and the current state of each project.</SectionHeading>
        <div className="project-filters" role="group" aria-label="Filter projects">{[['all','All work'],['software','Software & systems'],['ai','AI & research']].map(([id,label])=><button key={id} aria-pressed={filter===id} className={filter===id?'active':''} onClick={()=>setFilter(id)}>{label}</button>)}</div>
        <p className="sr-only" role="status">{projects.filter((_,i)=>filter==='all'||projectMeta[i].type===filter).length} projects shown</p>
        <div className="project-grid">{projects.map((project,i)=>{const meta=projectMeta[i];return filter!=='all'&&meta.type!==filter?null:<article className={`project-card ${meta.type}`} key={project.title}>
          <div className="project-top"><div className="project-symbol"><Icon name={meta.icon} size={24} /></div><span className="mono project-number">{meta.number} / {meta.type==='ai'?'AI & RESEARCH':'SOFTWARE'}</span></div>
          <div className="project-status"><span />{project.status}</div><h3>{meta.short}</h3><p className="project-description">{project.description}</p><p className="project-focus">{meta.focus}</p>
          <div className="tags">{project.technologies.map(t=><span key={t}>{t}</span>)}</div>
          <details className="project-details"><summary>Explore project <span>+</span></summary><div className="case-study"><h4>The problem</h4><p>{project.problem}</p><h4>My contribution</h4><p>{project.solution}</p><h4>Role</h4><p>{meta.role}</p><h4>Next direction</h4><p>{meta.next}</p></div></details>
        </article>;})}</div>
      </section>
      <section id="experience" className="section section-lined"><SectionHeading number="03" label="EXPERIENCE" title="Building, operating, and explaining." /><div className="timeline">{experience.map(item=><article className="experience-item" key={item.role}><div className="experience-date"><span className="timeline-dot" /><span className="mono">{item.period}</span><small>{item.type}</small></div><div className="experience-body"><h3>{item.role}</h3><p className="organization">{item.organization}</p><p>{item.description}</p><ul>{item.highlights.map(h=><li key={h}>{h}</li>)}</ul></div></article>)}</div></section>
      <section id="skills" className="section section-lined"><SectionHeading number="04" label="SKILLS" title="A foundation built through practice.">Tools and concepts connected to my professional work, academic projects, and current development.</SectionHeading><div className="skills-grid">{skills.map(s=><article className="skill-card" key={s.title}><Icon name={s.icon} size={23} /><p className="eyebrow">{s.label}</p><h3>{s.title}</h3><p>{s.description}</p><div className="tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></section>
      <section id="education" className="section section-lined"><SectionHeading number="05" label="EDUCATION & RESEARCH" title="Computer engineering, with language at the center." /><div className="education-grid"><article className="education-card"><p className="eyebrow">FEBRUARY 2019 — JULY 2023</p><h3>B.Sc. in Computer Engineering</h3><p>Islamic Azad University · Tehran, Iran</p><div className="academic-stats"><div><strong>3.84<span>/4</span></strong><p>Overall GPA</p></div><div><strong>3.94<span>/4</span></strong><p>Final two years</p></div></div><p className="small">GPA figures as reported in my academic CV.</p><h4>Selected coursework</h4><div className="tags">{['Natural Language Processing','Artificial Intelligence','Computational Intelligence','Computer Vision','Data Structures','Software Engineering'].map(t=><span key={t}>{t}</span>)}</div></article><div className="research-stack"><article><p className="eyebrow">UNDERGRADUATE FINAL PROJECT</p><h3>Product Feature Extraction & Sentiment Analysis</h3><p>Investigating product attributes and opinions in unstructured reviews. The starting point for my interest in language applications.</p></article><article><p className="eyebrow">EARLIER RESEARCH WORK</p><h3>Lexicon-assisted sentiment analysis</h3><p>“Improving Naïve Bayes Algorithm Using Lexicon in Sentiment Analysis” was listed as in preparation in my earlier CV.</p><span className="research-note">Unpublished manuscript · current status unverified</span></article></div></div></section>
      <section id="cv" className="section section-lined"><div className="cv-section"><div><p className="eyebrow">06 / CURRICULUM VITAE</p><h2>Two perspectives.<br />One engineering background.</h2><p>Professional experience for hiring teams.<br />Academic work for graduate study and research.</p></div><div className="cv-choices">{[['Job résumé','Software development, projects, and operations.','Job_Resume'],['Academic CV','Education, NLP work, and teaching.','Academic_CV']].map(([title,desc,file])=><div className="cv-choice" key={title}><div><h3>{title}</h3><p>{desc}</p></div><a className="download-round" href={`${cvBase}Vali_Rahmani_${file}.pdf`} download aria-label={`Download ${title} PDF`}><Icon name="download" /></a></div>)}<p className="draft-note">Current drafts · employment dates are being finalized.</p><button className="text-link" onClick={openCv}>All download formats <Icon name="arrow" size={16} /></button></div></div></section>
      <section id="contact" className="section section-lined contact-section"><p className="eyebrow">07 / CONTACT</p><h2>Let’s build something<br /><span>worth using.</span></h2><p>Interested in software opportunities, applied AI projects,<br className="desktop-break" /> and graduate study in computer science.</p><div className="contact-actions"><a className="button primary" href={`mailto:${email}`}><Icon name="mail" size={18} /> Email me <Icon name="external" size={16} /></a><button className="button" onClick={()=>setNotes(true)}>Recruiter notes <Icon name="note" size={17} /></button><a className="text-link" href="https://github.com/valiahmad" target="_blank" rel="noreferrer">GitHub <Icon name="external" size={17} /></a></div><div className="email-line"><a href={`mailto:${email}`}>{email}</a><button className="icon-button" aria-label="Copy email address" onClick={copyEmail}><Icon name={copied?'check':'copy'} size={16} /></button><span role="status">{copied?'Copied':copyFailed?'Select the email to copy it.':''}</span></div></section>
    </main>
    <footer className="footer"><span>© {new Date().getFullYear()} Vali Ahmad Rahmani</span><span>Software · AI · Systems</span><a href="#top">Back to top ↑</a></footer>
    <Modal open={notes} onClose={()=>setNotes(false)} title="Recruiter notes" id="notes-title" drawer><p className="modal-intro">A quick overview before starting a conversation.</p><div className="notes-content">
      <div><span className="eyebrow">ROLE DIRECTION</span><h3>Where does my experience fit?</h3><p>Python and backend development, automation, and software roles with scope to grow in applied AI. My current AI work focuses on NLP and conversational applications.</p></div>
      <div><span className="eyebrow">CURRENT WORK</span><h3>What am I doing now?</h3><p>IT Manager at the Afghanistan Embassy in Tehran, combining systems operations with software development for monitoring, attendance, and service workflows.</p></div>
      <div><span className="eyebrow">PROJECTS TO REVIEW</span><h3>Where should you start?</h3><p>NetWatch for Django and operational workflows; the AI Embassy Assistant for local model integration; my final project for an academic NLP foundation.</p><a className="text-link" href="#projects" onClick={()=>setNotes(false)}>View selected projects <Icon name="arrow" size={16} /></a></div>
      <div><span className="eyebrow">LOCATION & LOGISTICS</span><h3>Based in Tehran, Iran</h3><p>Start date, work arrangement, relocation, and work authorization should be discussed for the specific role.</p></div>
      <div><span className="eyebrow">ACADEMIC DIRECTION</span><h3>Computer science and applied AI</h3><p>B.Sc. in Computer Engineering, with NLP project work and programming teaching experience. Interested in Master’s study in computer science and further AI specialization.</p></div>
    </div><a className="button primary full-width" href={`mailto:${email}`}>Start a conversation <Icon name="external" size={17} /></a><button className="text-link notes-cv" onClick={()=>{setNotes(false);setCv(true);}}>Download a CV <Icon name="download" size={16} /></button></Modal>
    <Modal open={cv} onClose={()=>setCv(false)} title="Download my CV" id="cv-title"><p className="modal-intro">Choose the version that matches your interests.</p><div className="download-grid">{[['Job résumé','Professional projects and practical experience.','Job_Resume'],['Academic CV','Education, research interests, and teaching.','Academic_CV']].map(([title,desc,file])=><article key={title}><Icon name={file==='Job_Resume'?'code':'book'} size={26} /><h3>{title}</h3><p>{desc}</p><a className="button primary" href={`${cvBase}Vali_Rahmani_${file}.pdf`} download><Icon name="download" size={16} /> Download PDF</a><a className="word-link" href={`${cvBase}Vali_Rahmani_${file}.docx`} download>Word version (.docx)</a></article>)}</div><p className="draft-note">Both versions are drafts. Employment chronology and the flagged application records still require confirmation.</p></Modal>
  </>;
}
