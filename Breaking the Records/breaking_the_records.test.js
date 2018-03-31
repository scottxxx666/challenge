const breakingRecords = require('./breaking_the_records');

test('[10, 5] to [0, 1]', () => {
  expect(breakingRecords([10, 5])).toEqual([0, 1]);
});

test('[10, 5, 3] to [0, 2]', () => {
  expect(breakingRecords([10, 5, 3])).toEqual([0, 2]);
});

test('[5, 10] to [1, 0]', () => {
  expect(breakingRecords([5, 10])).toEqual([1, 0]);
});

test('[5, 10, 15] to [2, 0]', () => {
  expect(breakingRecords([5, 10, 15])).toEqual([2, 0]);
});

test('[10, 5, 20, 20, 4, 5, 2, 25, 1] to [2, 4]', () => {
  expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual([2, 4]);
});
