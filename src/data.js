export const sections = [
  { id: 'profile', label: 'PROFILE', caption: 'WHO I AM', number: '01', portrait: 'positive.webp', alt: 'Pedro smiling and giving a thumbs-up' },
  { id: 'projects', label: 'MISSIONS', caption: 'SELECTED WORK', number: '02', portrait: 'presentation.webp', alt: 'Pedro gesturing toward his selected work' },
  { id: 'skills', label: 'ARSENAL', caption: 'SKILLS & TOOLS', number: '03', portrait: 'arms-crossed.webp', alt: 'Pedro with his arms crossed' },
  { id: 'journey', label: 'JOURNEY', caption: 'EXPERIENCE', number: '04', portrait: 'pointing-up.webp', alt: 'Pedro looking and pointing upward' },
  { id: 'contact', label: 'CONTACT', caption: 'LET’S CONNECT', number: '05', portrait: 'invitation.webp', alt: 'Pedro smiling with a welcoming gesture' },
];

export const projects = [
  { id: 'modernization', title: 'From legacy to what’s next.', client: 'SANTANDER', category: 'MODERNIZATION', tags: ['Angular 20', 'TypeScript', 'Micro-frontends'], number: '01', summary: 'Modernizing investment applications from Angular 8 to Angular 20, with an architecture built to evolve.', role: 'Contributed to delivering 10+ micro-frontends and completing a modernization initiative in under six months after it had been stalled for more than two years.', details: ['Migrated applications and modernized their HTML and CSS foundations.', 'Built modular front-end architecture with micro-frontends.', 'Created AI-assisted development playbooks to standardize migration workflows.'] },
  { id: 'integration', title: 'Investments, connected.', client: 'SANTANDER + TORO', category: 'INTEGRATION', tags: ['Angular 20', 'Micro-frontends', 'Architecture'], number: '02', summary: 'A consolidated experience for customers to follow investments across Santander and Toro.', role: 'Developed the integration between the platforms while transitioning functionality from a monolithic application to a micro-frontend architecture.', details: ['Consolidated investments into a single customer experience.', 'Moved functionality incrementally out of the monolith.', 'Collaborated across teams to translate business requirements into interfaces.'] },
  { id: 'reserves', title: 'Turn goals into progress.', client: 'SANTANDER', category: 'GOAL-BASED SAVINGS', tags: ['Angular', 'TypeScript', 'Digital journeys'], number: '03', summary: 'A digital journey to create and manage financial reserves around personal goals.', role: 'Developed the Minhas Reservas experience, enabling customers to set personalized targets and track investments within the banking experience.', details: ['Built goal-based reserve creation and management.', 'Enabled personalized targets and investment tracking.', 'Developed customer-facing interfaces using Angular and TypeScript.'] },
];

export const skillGroups = [
  { name: 'FRONT-END', items: ['Angular 8 → 20', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
  { name: 'ARCHITECTURE', items: ['Micro-frontends', 'Legacy modernization', 'Scalable interfaces'] },
  { name: 'DELIVERY', items: ['Git & GitHub Actions', 'CI/CD', 'Jest', 'Node.js', 'AI-assisted development'] },
];
export function nextSection(index, direction) { return (index + direction + sections.length) % sections.length; }
export function resolveRoute(hash) {
  const id = hash.replace(/^#\/?/, '');
  return sections.some(section => section.id === id) ? id : 'home';
}

