import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { sections, projects, skillGroups, nextSection } from './data.js';
import './styles.css';

function Profile() {
  return <><p className="eyebrow">SÃO PAULO, BRASIL / FRONT-END ENGINEER</p><h1>QUEBRAR O<br />LEGADO.<br /><span>CRIAR O NOVO.</span></h1><p className="intro">Eu sou <strong>Pedro Ramon.</strong> Transformo aplicações complexas em experiências que fazem sentido.</p><p className="body-copy">Engenheiro de software com mais de 3 anos de experiência no setor financeiro. Meu foco é Angular, TypeScript e arquiteturas de front-end que evoluem junto com o produto.</p><div className="stats"><div><strong>3+</strong><span>ANOS DE EXPERIÊNCIA</span></div><div><strong>10+</strong><span>MICRO-FRONTENDS ENTREGUES</span></div><div><strong>8 → 20</strong><span>MODERNIZAÇÃO ANGULAR</span></div></div><div className="availability"><span /> Aberto a oportunidades remotas internacionais</div></>;
}

function Projects() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  return <><p className="eyebrow">EXPERIÊNCIA REAL / IMPACTO EM PRODUÇÃO</p><h1>MISSÕES<br /><span>EXECUTADAS.</span></h1><div className="project-picker" aria-label="Selecionar projeto">{projects.map((p, index) => <button key={p.id} aria-pressed={index === selected} className={index === selected ? 'chosen' : ''} onClick={() => setSelected(index)}><small>{p.number}</small>{p.client.split(' · ')[1]}</button>)}</div><article className="project-detail" key={project.id}><p className="eyebrow">{project.client}</p><h2>{project.title}</h2><p>{project.summary}</p><p>{project.role}</p><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article><p className="note">Cases de atuação profissional. Código e telas corporativas não estão disponíveis neste portfólio.</p></>;
}

function Skills() {
  return <><p className="eyebrow">FERRAMENTAS / PRÁTICA / EVOLUÇÃO</p><h1>MEU<br /><span>ARSENAL.</span></h1><p className="body-copy">Da interface ao deploy. Ferramentas que uso para construir, modernizar e entregar aplicações.</p><div className="skill-groups">{skillGroups.map((group, index) => <section key={group.name}><div className="group-heading"><span>0{index + 1}</span><h2>{group.name}</h2></div><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></section>)}</div><div className="languages"><strong>PT-BR</strong> Nativo <i>/</i> <strong>EN</strong> Proficiência profissional</div><p className="note">Este portfólio é construído em React. Minha especialidade profissional é Angular.</p></>;
}

function Journey() {
  return <><p className="eyebrow">CADA ETAPA / UMA NOVA VERSÃO</p><h1>EM CONSTANTE<br /><span>EVOLUÇÃO.</span></h1><ol className="timeline"><li><time>OUT 2025 — ATUAL</time><h2>Software Engineer</h2><h3>F1RST Digital Services</h3><p>Modernização do ecossistema de investimentos, integração Santander + Toro e entrega de micro-frontends em Angular 20.</p></li><li><time>NOV 2022 — OUT 2025</time><h2>Junior Software Engineer</h2><h3>F1RST Digital Services</h3><p>Jornadas digitais de investimento, Minhas Reservas, pipelines de CI/CD e suporte a entregas em produção.</p></li><li><time>2016 — 2022</time><h2>Engenharia Ambiental</h2><h3>UNESP</h3><p>Graduação e atuação como líder de projeto na Enactus UNESP Sorocaba, entre 2019 e 2020.</p></li></ol></>;
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    try { await navigator.clipboard.writeText('pedrorcdiaz5@gmail.com'); setCopied(true); setCopyError(false); clearTimeout(timer.current); timer.current = setTimeout(() => setCopied(false), 2500); }
    catch { setCopyError(true); }
  }
  return <><p className="eyebrow">PRÓXIMA MISSÃO / VAMOS CONVERSAR?</p><h1>BOAS IDEIAS<br />MERECEM<br /><span>UM COMEÇO.</span></h1><p className="intro">Procurando alguém para evoluir seu front-end?</p><p className="body-copy">Estou no Brasil e aberto a oportunidades remotas internacionais. Vamos conversar sobre engenharia, produtos e o próximo desafio.</p><div className="contact-links"><a className="primary-link" href="mailto:pedrorcdiaz5@gmail.com">ENVIAR E-MAIL <span>↗</span></a><a href="https://www.linkedin.com/in/pedro-ramon-coser-diaz/" target="_blank" rel="noreferrer">LINKEDIN <span>↗</span></a><a href="https://github.com/Pedro-Ramonn" target="_blank" rel="noreferrer">GITHUB <span>↗</span></a></div><div className="email-copy"><span>pedrorcdiaz5@gmail.com</span><button onClick={copyEmail}>{copied ? 'COPIADO ✓' : 'COPIAR'}</button></div><p role="status" className="note">{copyError ? 'Não foi possível copiar. Selecione o endereço acima ou use Enviar e-mail.' : copied ? 'E-mail copiado.' : 'Português ou inglês. Pode chamar.'}</p></>;
}

const pages = { profile: Profile, projects: Projects, skills: Skills, journey: Journey, contact: Contact };

function App() {
  const initialIndex = sections.findIndex(section => section.id === window.location.hash.slice(1));
  const [active, setActive] = useState(initialIndex < 0 ? 0 : initialIndex);
  const [motion, setMotion] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const panel = useRef();
  const section = sections[active];
  const Page = pages[section.id];
  useEffect(() => {
    const sync = () => { const index = sections.findIndex(s => s.id === window.location.hash.slice(1)); if (index >= 0) setActive(index); };
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);
  useEffect(() => { panel.current?.scrollTo({ top: 0 }); }, [active]);
  function navigate(index) { setActive(index); window.location.hash = sections[index].id; }
  function menuKey(event) {
    const direction = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 0;
    let index;
    if (direction) index = nextSection(active, direction);
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = sections.length - 1;
    else return;
    event.preventDefault(); navigate(index); document.getElementById(`nav-${sections[index].id}`)?.focus();
  }
  return <div className={`app ${motion ? '' : 'reduce-motion'} scene-${section.id}`}><a className="skip-link" href="#content">Pular para o conteúdo</a><div className="halftone" aria-hidden="true" /><header><a className="wordmark" href="#profile" aria-label="Pedro Ramon, início">PR<span>★</span></a><p>PORTFÓLIO <span>/</span> PEDRO RAMON</p><button className="motion-button" onClick={() => setMotion(value => !value)} aria-pressed={motion}>ANIMAÇÕES <b>{motion ? 'ON' : 'OFF'}</b></button></header><main><aside className="identity"><div className="portrait-frame"><div className="portrait-star" aria-hidden="true">✦</div><span className="portrait-word" aria-hidden="true">CREATE<br />CHANGE</span><img src={`${import.meta.env.BASE_URL}pedro.png`} alt="Retrato de Pedro Ramon em preto e branco" className="portrait" /><div className="nameplate"><span>FRONT-END ENGINEER</span><strong>PEDRO<br />RAMON<span>★</span></strong></div></div><nav aria-label="Seções do portfólio" onKeyDown={menuKey}>{sections.map((item, index) => <button id={`nav-${item.id}`} key={item.id} className={`nav-item ${index === active ? 'active' : ''}`} aria-current={index === active ? 'page' : undefined} onClick={() => navigate(index)}><span className="nav-number">{item.number}</span><span className="nav-label">{item.label}</span><span className="nav-arrow" aria-hidden="true">↗</span></button>)}</nav></aside><section className="content-shell" ref={panel} id="content" tabIndex="-1" aria-label={section.label}><div className="page-content" key={section.id}><div className="section-kicker"><span>{section.number} / 05</span><span>{section.english}</span></div><Page /></div></section><div className="edge-label" aria-hidden="true">TAKE YOUR NEXT STEP ★</div></main><footer><span><kbd>↑</kbd><kbd>↓</kbd> NAVEGAR NO MENU <span className="footer-divider">/</span> <kbd>↵</kbd> SELECIONAR</span><span>FEITO COM REACT <b>★</b> PERSONALIDADE EM CADA PIXEL</span></footer></div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);

