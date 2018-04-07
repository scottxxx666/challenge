const jumpingOnClouds = require('./jumping_on_clouds.js');

test('2 jump end', () => {
  expect(jumpingOnClouds([0, 0], 1)).toBe(98);
});

test('2 jump end with a thunder', () => {
  expect(jumpingOnClouds([0, 1], 1)).toBe(96);
});

test('2 jump end with 2 thunder', () => {
  expect(jumpingOnClouds([1, 1], 1)).toBe(94);
});

test('2 jump end with 2 thunder', () => {
  expect(jumpingOnClouds([1, 1], 2)).toBe(97);
});

test('example', () => {
  expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)).toBe(92);
});
