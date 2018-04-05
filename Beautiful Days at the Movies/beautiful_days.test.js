const beautifulDays = require('./beautiful_days');

test('only one beautiful day', () => {
    expect(beautifulDays(1, 1, 1)).toBe(1);
});

test('2 beautiful day', () => {
    expect(beautifulDays(1, 2, 1)).toBe(2);
});

test('2 beautiful day', () => {
    expect(beautifulDays(20, 23, 6)).toBe(2);
});
