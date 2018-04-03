const saveThePrisoner = require('./save_the_prisoner');

test('1 people 1 candy start from 0', () => {
  expect(saveThePrisoner(1, 1, 0)).toBe(0);
});

test('1 people 2 candy start from 0', () => {
  expect(saveThePrisoner(1, 2, 0)).toBe(0);
});

test('2 people 1 candy start from 0', () => {
  expect(saveThePrisoner(2, 1, 0)).toBe(0);
});

test('2 people 1 candy start from 1', () => {
  expect(saveThePrisoner(2, 1, 1)).toBe(1);
});

test('2 people 2 candy start from 0', () => {
  expect(saveThePrisoner(2, 2, 0)).toBe(1);
});

test('2 people 2 candy start from 1', () => {
  expect(saveThePrisoner(2, 2, 1)).toBe(0);
});

test('2 people 3 candy start from 0', () => {
  expect(saveThePrisoner(2, 3, 0)).toBe(0);
});

test('2 people 3 candy start from 1', () => {
  expect(saveThePrisoner(2, 3, 1)).toBe(1);
});

test('5 people 2 candy start from 1', () => {
  expect(saveThePrisoner(5, 2, 1)).toBe(2);
});

test('5 people 2 candy start from 2', () => {
  expect(saveThePrisoner(5, 2, 2)).toBe(3);
});

test('5 people 2 candy start from 4', () => {
  expect(saveThePrisoner(5, 2, 4)).toBe(0);
});

test('5 people 6 candy start from 1', () => {
  expect(saveThePrisoner(5, 6, 1)).toBe(1);
});

test('5 people 6 candy start from 3', () => {
  expect(saveThePrisoner(5, 6, 3)).toBe(3);
});

test('try', () => {
  expect(saveThePrisoner(987208066, 992914997, 534359308)).toBe(540066238);
});
