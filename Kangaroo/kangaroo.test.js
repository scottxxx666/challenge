const kangaroo = require('./kangaroo');

test('Y faster and further', () => {
  expect(kangaroo(0, 2, 5, 3)).toBe('NO');
});

test('X faster and further', () => {
  expect(kangaroo(5, 3, 0, 2)).toBe('NO');
});

test('Distance is multiple of velocity', () => {
  expect(kangaroo(0, 3, 4, 2)).toBe('YES');
});

test('0 Distance but diff velocity', () => {
  expect(kangaroo(0, 3, 0, 2)).toBe('NO');
});

test('Has Distance but same velocity', () => {
  expect(kangaroo(0, 2, 1, 2)).toBe('NO');
});

test('Distance is not multiple of velocity', () => {
  expect(kangaroo(0, 2, 1, 4)).toBe('NO');
});
