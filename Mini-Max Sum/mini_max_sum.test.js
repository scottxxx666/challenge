const miniMaxSum = require('./mini_max_sum');

test('[1, 2, 3, 4, 5] to 10 14', () => {
  console.log = jest.fn();
  miniMaxSum([1, 2, 3, 4, 5])
  expect(console.log.mock.calls[0][0]).toBe('10 14');
});
