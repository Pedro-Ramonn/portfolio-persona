import test from 'node:test';
import assert from 'node:assert/strict';
import { sections, projects, nextSection } from './data.js';

test('keyboard navigation wraps in both directions', () => {
  assert.equal(nextSection(0, -1), sections.length - 1);
  assert.equal(nextSection(sections.length - 1, 1), 0);
  assert.equal(nextSection(2, 1), 3);
});
test('section and project identifiers remain unique for navigation', () => {
  for (const collection of [sections, projects]) assert.equal(new Set(collection.map(item => item.id)).size, collection.length);
});
