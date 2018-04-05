const sequenceEquation = require('./sequence_equation');

test('[2, 3, 1]', () => {
  expect(sequenceEquation.permutationEquation([2, 3, 1])).toEqual([2, 3, 1]);
});
