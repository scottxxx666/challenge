const divisibleSumPairs = require('./divisible_sum_pairs');

test('simple one', () => {
  expect(divisibleSumPairs(2, 1, [1, 3])).toBe(1);
});

test('array length more than n', () => {
  expect(divisibleSumPairs(2, 1, [1, 3, 2])).toBe(1);
});

test('example', () => {
  expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5);
});
