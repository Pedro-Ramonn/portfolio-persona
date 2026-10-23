import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { sections, projects, skillGroups, nextSection, resolveRoute } from './data.js';
import './styles.css';

const asset = name => `${import.meta.env.BASE_URL}portraits/${name}`;

function Profile() {
  return <>
    <p className="eyebrow">SÃO PAULO, BRAZIL / FRONT-END ENGINEER</p>
    <h1>BREAK THE<br />LEGACY.<br /><em>BUILD THE NEXT.</em></h1>
    <p className="intro">I’m <strong>Pedro Ramon.</strong> I turn complex applications into experiences that make sense.</p>
    <p className="body-copy">Software engineer with 3+ years of experience in the financial industry. I specialize in Angular, TypeScript and front-end architecture that grows with the product.</p>
    <div className="stats"><div><strong>3+</strong><span>YEARS OF EXPERIENCE</span></div><div><strong>10+</strong><span>MICRO-FRONTENDS DELIVERED</span></div><div><strong>8 → 20</strong><span>ANGULAR MODERNIZATION</span></div></div>
    <div className="profile-story">
      <section><h2>BUILDING WHERE RELIABILITY MATTERS</h2><p>My experience comes from the financial industry, where customer journeys, complex business rules and reliable delivery need to work together. At F1RST Digital Services, I build and modernize investment experiences in the Santander ecosystem.</p></section>
      <section><h2>OWNERSHIP, FROM CODE TO PRODUCTION</h2><p>I work beyond individual features: from understanding requirements and shaping interfaces to automated testing, CI/CD pipelines and production releases. I enjoy collaborating across disciplines and making complex systems easier to maintain.</p></section>
      <section><h2>WHAT I WANT TO BUILD NEXT</h2><p>I’m looking for a team that values engineering quality, ownership and continuous improvement. I bring hands-on modernization experience, curiosity and a practical approach to turning technical challenges into useful products.</p></section>
    </div>
    <p className="availability"><span /> Open to international remote opportunities</p>
  </>;
}

function Projects() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  return <>
    <p className="eyebrow">REAL CHALLENGES / PRODUCTION IMPACT</p>
    <h1>MISSIONS<br /><em>ACCOMPLISHED.</em></h1>
    <div className="project-picker" aria-label="Choose a project">{projects.map((item, index) => <button key={item.id} aria-pressed={index === selected} className={index === selected ? 'chosen' : ''} onClick={() => setSelected(index)}><small>{item.number}</small>{item.category}</button>)}</div>
    <article className="project-detail" key={project.id}><p className="eyebrow">{project.client} / {project.category}</p><h2>{project.title}</h2><p>{project.summary}</p><p>{project.role}</p><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>
    <p className="note">Professional case studies. Corporate source code and internal screens are not shared here.</p>
  </>;
}

function Skills() {
  return <>
    <p className="eyebrow">TOOLS / PRACTICE / CONTINUOUS LEARNING</p>
    <h1>MY<br /><em>ARSENAL.</em></h1>
    <p className="body-copy">From interface to deployment. The tools I use to build, modernize and ship applications.</p>
    <div className="skill-groups">{skillGroups.map((group, index) => <section key={group.name}><div className="group-heading"><span>0{index + 1}</span><h2>{group.name}</h2></div><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></section>)}</div>
    <p className="languages"><strong>PORTUGUESE</strong> Native <span>/</span> <strong>ENGLISH</strong> Full professional proficiency</p>
    <p className="note">Built with React. My professional specialization is Angular. I also bring hands-on experience with automated testing, release pipelines and production troubleshooting.</p>
  </>;
}

function Journey() {
  return <>
    <p className="eyebrow">EVERY CHAPTER / A NEW VERSION</p>
    <h1>ALWAYS<br /><em>EVOLVING.</em></h1>
    <ol className="timeline">
      <li><time>OCT 2025 — PRESENT</time><h2>Software Engineer</h2><h3>F1RST Digital Services / São Paulo, Brazil</h3><p>I work on the modernization of Santander’s investment technology ecosystem, moving applications from Angular 8 to Angular 20 and replacing legacy structures with scalable micro-frontends.</p><p>My contributions include the Santander + Toro integration, which brings investments from both platforms into one customer experience. I also created AI-assisted development playbooks to make migration workflows more consistent across projects.</p><p>In a major modernization initiative, I contributed to delivering more than 10 micro-frontends and completing the work in under six months after it had been stalled for over two years.</p></li>
      <li><time>NOV 2022 — OCT 2025</time><h2>Junior Software Engineer</h2><h3>F1RST Digital Services / São Paulo, Brazil</h3><p>I developed customer-facing investment journeys with Angular and TypeScript, including Minhas Reservas: an experience for creating goal-based financial reserves, setting personalized targets and tracking progress.</p><p>I also built the digital investment contribution journey for business customers, expanding the bank’s B2B investment capabilities. Alongside feature development, I worked with GitHub Actions, CI/CD pipelines and production deployments, troubleshooting delivery issues to support reliable releases.</p><p>This role gave me hands-on experience connecting business requirements, front-end implementation and the practical demands of running financial products in production.</p></li>
      <li><time>FEB 2022 — NOV 2022</time><h2>Administrative Assistant</h2><h3>Multilab / Jaguariúna, Brazil</h3><p>I supported procurement activities in the pharmaceutical industry, including contracts with third-party suppliers and administrative work across business areas. The role involved coordinating practical needs across different parts of the organization.</p></li>
      <li><time>JAN 2020 — FEB 2021</time><h2>International Trade Intern</h2><h3>Brown Import &amp; Export / Holambra, Brazil</h3><p>I supported administrative and international trade activities in an import and export environment, gaining early experience working with business operations before moving into software engineering.</p></li>
      <li><time>2016 — 2022</time><h2>Environmental Engineering</h2><h3>São Paulo State University / UNESP</h3><p>I earned my bachelor’s degree in Environmental Engineering. During university, I also served as a project leader at Enactus UNESP Sorocaba from August 2019 to March 2020.</p><p>At Enactus, I coordinated team activities and supported the planning and execution of social impact initiatives. It was an opportunity to take responsibility for a shared goal and collaborate on projects beyond the classroom.</p></li>
    </ol>
  </>;
}

function Contact() {
  const [status, setStatus] = useState('');
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('pedrorcdiaz5@gmail.com');
      setStatus('Email copied.');
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus(''), 2500);
    } catch { setStatus('Copy unavailable. Select the address below or use Send email.'); }
  }
  return <>
    <p className="eyebrow">NEXT MISSION / LET’S TALK</p>
    <h1>GOOD IDEAS<br />DESERVE<br /><em>A BEGINNING.</em></h1>
    <p className="intro">Looking for someone to move your front-end forward?</p>
    <p className="body-copy">Based in Brazil and open to international remote opportunities. Let’s talk about engineering, products and the next challenge.</p>
    <div className="contact-links"><a className="primary-link" href="mailto:pedrorcdiaz5@gmail.com">SEND EMAIL <span>↗</span></a><a href="https://www.linkedin.com/in/pedro-ramon-coser-diaz/" target="_blank" rel="noreferrer">LINKEDIN <span>↗</span></a><a href="https://github.com/Pedro-Ramonn" target="_blank" rel="noreferrer">GITHUB <span>↗</span></a></div>
    <div className="email-copy"><span>pedrorcdiaz5@gmail.com</span><button onClick={copyEmail}>{status === 'Email copied.' ? 'COPIED' : 'COPY'}</button></div>
    <p role="status" className="note">{status || 'English, Spanish or Portuguese. Let’s connect.'}</p>
  </>;
}

const pages = { profile: Profile, projects: Projects, skills: Skills, journey: Journey, contact: Contact };

function Menu({ route, onNavigate, compact = false }) {
  function onKeyDown(event) {
    const links = Array.from(event.currentTarget.querySelectorAll('a'));
    const index = links.indexOf(document.activeElement);
    let next;
    if (['ArrowDown', 'ArrowRight'].includes(event.key)) next = nextSection(index < 0 ? 0 : index, 1);
    else if (['ArrowUp', 'ArrowLeft'].includes(event.key)) next = nextSection(index < 0 ? 0 : index, -1);
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = links.length - 1;
    else return;
    event.preventDefault(); links[next]?.focus();
  }
  return <nav className={compact ? 'scene-menu' : 'home-menu'} aria-label="Portfolio sections" onKeyDown={onKeyDown}>{sections.map(section => <a key={section.id} href={`#/${section.id}`} aria-current={route === section.id ? 'page' : undefined} onClick={() => onNavigate(section.id)}><span className="nav-number">{section.number}</span><span className="nav-label">{section.label}</span><span className="nav-arrow" aria-hidden="true">↗</span>{!compact && <small>{section.caption}</small>}</a>)}</nav>;
}

function Home({ onNavigate }) {
  return <main className="home-scene" id="content" tabIndex={-1}>
    <div className="home-backdrop" aria-hidden="true"><span>BUILD.</span><span>EVOLVE.</span></div>
    <div className="home-portrait"><img src={asset('presentation.webp')} alt="Pedro Ramon wearing a black T-shirt, with his left-arm tattoos visible" fetchPriority="high" /><span className="portrait-caption">ENGINEERING WITH PERSONALITY</span></div>
    <div className="home-title"><p className="eyebrow">SOFTWARE ENGINEER / ANGULAR SPECIALIST</p><h1>PEDRO<br /><em>RAMON.</em></h1><p>Complex challenges.<br />Thoughtful interfaces.</p></div>
    <Menu route="home" onNavigate={onNavigate} />
    <p className="home-location">BASED IN BRAZIL <span>/</span> OPEN TO THE WORLD</p>
  </main>;
}

function App() {
  const [route, setRoute] = useState(() => resolveRoute(window.location.hash));
  const [motion, setMotion] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const contentRef = useRef();
  const headingRef = useRef();
  const shouldFocus = useRef(false);
  const home = route === 'home';
  const section = sections.find(item => item.id === route);
  const Page = pages[route];

  useEffect(() => {
    const sync = () => setRoute(resolveRoute(window.location.hash));
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);
  useEffect(() => {
    document.title = `${home ? 'Front-end Engineer' : section.label} — Pedro Ramon`;
    contentRef.current?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
    if (shouldFocus.current) { headingRef.current?.focus({ preventScroll: true }); shouldFocus.current = false; }
  }, [route]);
  useEffect(() => {
    const escape = event => { if (event.key === 'Escape' && route !== 'home') window.location.hash = '/home'; };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [route]);
  function navigate(id) { shouldFocus.current = id !== 'home'; }

  return <div className={`app ${home ? 'is-home' : 'is-detail'} ${motion ? '' : 'reduce-motion'} scene-${route}`}>
    <a className="skip-link" href="#content" onClick={event => { event.preventDefault(); document.getElementById('content')?.focus(); }}>Skip to content</a><div className="halftone" aria-hidden="true" />
    <header><a className="wordmark" href="#/home" aria-label="Pedro Ramon — home">PEDRO<span>/</span>RAMON</a><p>PORTFOLIO <span>/</span> FRONT-END ENGINEER</p><button className="motion-button" onClick={() => setMotion(value => !value)} aria-pressed={motion}>MOTION <b>{motion ? 'ON' : 'OFF'}</b></button></header>
    {home ? <Home onNavigate={navigate} /> : <main className="detail-scene" key={route}>
      <aside className="scene-identity"><a className="back-link" href="#/home">← BACK TO MENU</a><div className="scene-portrait"><span className="scene-word" aria-hidden="true">{section.label}</span><img src={asset(section.portrait)} alt={section.alt} /><span className="scene-counter">{section.number}<small>/ 05</small></span></div><Menu compact route={route} onNavigate={navigate} /></aside>
      <section className="content-shell" ref={contentRef} id="content" tabIndex={-1} aria-labelledby="scene-heading"><div className="page-content"><div className="section-kicker"><span>{section.number} / 05</span><h2 ref={headingRef} tabIndex={-1} id="scene-heading">{section.caption}</h2></div><Page /></div></section>
      <span className="edge-label" aria-hidden="true">TAKE YOUR NEXT STEP /</span>
    </main>}
    <footer><span>BUILT WITH REACT <b>/</b> MADE TO MOVE FORWARD</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
