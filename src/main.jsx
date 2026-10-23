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
    <p className="note">Built with React. My professional specialization is Angular.</p>
  </>;
}

function Journey() {
  return <>
    <p className="eyebrow">EVERY CHAPTER / A NEW VERSION</p>
    <h1>ALWAYS<br /><em>EVOLVING.</em></h1>
    <ol className="timeline">
      <li><time>OCT 2025 — PRESENT</time><h2>Software Engineer</h2><h3>F1RST Digital Services</h3><p>Modernizing the investment ecosystem, integrating Santander and Toro, and delivering Angular 20 micro-frontends.</p></li>
      <li><time>NOV 2022 — OCT 2025</time><h2>Junior Software Engineer</h2><h3>F1RST Digital Services</h3><p>Built digital investment journeys, including Minhas Reservas, and supported CI/CD pipelines and production releases.</p></li>
      <li><time>2016 — 2022</time><h2>Environmental Engineering</h2><h3>São Paulo State University / UNESP</h3><p>Bachelor’s degree. Also led a social entrepreneurship project at Enactus UNESP Sorocaba from 2019 to 2020.</p></li>
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
    <p role="status" className="note">{status || 'English or Portuguese. Let’s connect.'}</p>
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
    <footer><span><kbd>↑</kbd><kbd>↓</kbd> EXPLORE <span className="footer-divider">/</span><kbd>ENTER</kbd> OPEN { !home && <><span className="footer-divider">/</span><kbd>ESC</kbd> HOME</>}</span><span>BUILT WITH REACT <b>/</b> MADE TO MOVE FORWARD</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);


