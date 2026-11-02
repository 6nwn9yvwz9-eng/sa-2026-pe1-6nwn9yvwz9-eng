const test = require('node:test');
const assert = require('node:assert/strict');

const { createGreeting } = require('../src/index.js');

test('uses the default name when none is provided', () => {
  assert.equal(createGreeting(), 'Hello, world!');
});

test('greets a provided name', () => {
  assert.equal(createGreeting('Alice'), 'Hello, Alice!');
});
