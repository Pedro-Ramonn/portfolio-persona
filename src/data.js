export const sections = [
  { id: 'profile', label: 'PERFIL', english: 'WHO I AM', number: '01' },
  { id: 'projects', label: 'MISSÕES', english: 'SELECTED WORK', number: '02' },
  { id: 'skills', label: 'ARSENAL', english: 'SKILLS & TOOLS', number: '03' },
  { id: 'journey', label: 'JORNADA', english: 'EXPERIENCE', number: '04' },
  { id: 'contact', label: 'CONTATO', english: 'LET’S CONNECT', number: '05' },
];

export const projects = [
  { id: 'modernization', title: 'Do legado ao próximo nível.', client: 'SANTANDER · MODERNIZAÇÃO', tags: ['Angular 20', 'TypeScript', 'Micro-frontends'], number: '01', summary: 'Modernização de aplicações de investimento: de Angular 8 para Angular 20, com uma arquitetura preparada para evoluir.', role: 'Contribuí para a entrega de mais de 10 micro-frontends e para a conclusão, em menos de seis meses, de uma iniciativa que estava parada havia mais de dois anos.', details: ['Migração de aplicações e modernização de HTML e CSS.', 'Arquitetura modular com micro-frontends.', 'Playbooks de desenvolvimento assistido por IA para padronizar as migrações.'] },
  { id: 'integration', title: 'Investimentos, conectados.', client: 'SANTANDER + TORO · INTEGRAÇÃO', tags: ['Angular 20', 'Micro-frontends', 'Arquitetura'], number: '02', summary: 'Uma experiência consolidada para acompanhar investimentos de Santander e Toro.', role: 'Desenvolvi a integração entre as plataformas, migrando funcionalidades de uma aplicação monolítica para uma arquitetura de micro-frontends.', details: ['Consolidação de investimentos em uma experiência única.', 'Transição gradual de funcionalidades do monólito.', 'Colaboração entre equipes e requisitos de negócio.'] },
  { id: 'reserves', title: 'Planos que ganham forma.', client: 'SANTANDER · MINHAS RESERVAS', tags: ['Angular', 'TypeScript', 'Jornadas digitais'], number: '03', summary: 'Uma jornada digital para criar e gerenciar reservas financeiras orientadas a objetivos.', role: 'Desenvolvi a experiência Minhas Reservas, permitindo criar metas personalizadas e acompanhar investimentos dentro da experiência bancária.', details: ['Criação e gestão de reservas por objetivo.', 'Metas personalizadas e acompanhamento.', 'Desenvolvimento de interfaces com Angular e TypeScript.'] },
];

export const skillGroups = [
  { name: 'FRONT-END', items: ['Angular 8 → 20', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
  { name: 'ARQUITETURA', items: ['Micro-frontends', 'Modernização de legado', 'Interfaces escaláveis'] },
  { name: 'ENTREGA', items: ['Git & GitHub Actions', 'CI/CD', 'Jest', 'Node.js', 'Desenvolvimento com IA'] },
];

export function nextSection(index, direction) { return (index + direction + sections.length) % sections.length; }
