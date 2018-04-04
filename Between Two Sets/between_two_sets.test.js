const betweenTwoSets = require('./between_two_sets');

test('0', () => {
    expect(betweenTwoSets([2, 4], [16, 32, 96])).toBe(3);
})
