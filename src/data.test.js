import test from 'node:test';
import assert from 'node:assert/strict';
import { sections, projects, nextSection, resolveRoute } from './data.js';
test('menu focus wraps in both directions', () => {
  assert.equal(nextSection(0, -1), sections.length - 1);
  assert.equal(nextSection(sections.length - 1, 1), 0);
});
test('direct links, previous links and unknown routes resolve safely', () => {
  assert.equal(resolveRoute(''), 'home');
  assert.equal(resolveRoute('#/home'), 'home');
  assert.equal(resolveRoute('#/projects'), 'projects');
  assert.equal(resolveRoute('#profile'), 'profile');
  assert.equal(resolveRoute('#/missing'), 'home');
  assert.equal(resolveRoute('#content'), 'home');
});
test('each section has a distinct portrait and unique route', () => {
  assert.equal(new Set(sections.map(item => item.id)).size, sections.length);
  assert.equal(new Set(sections.map(item => item.portrait)).size, sections.length);
  assert.equal(new Set(projects.map(item => item.id)).size, projects.length);
});

