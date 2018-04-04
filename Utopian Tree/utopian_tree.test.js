const utopianTree = require('./utopian_tree');

test('0', () => {
    expect(utopianTree(0)).toBe(1);
})

test('1', () => {
    expect(utopianTree(1)).toBe(2);
})

test('4', () => {
    expect(utopianTree(4)).toBe(7);
})
