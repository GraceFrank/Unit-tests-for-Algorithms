
const except = require('./except');

test('[1, 2, 3, 4] and [2] gives [1, 3, 4]', () => {
  expect(except([1, 2, 3, 4], [2])).toEqual([1, 3, 4]);
});

test('[1, 2, 3, 3, 3, 3, 4] and [3] gives [1, 2, 4]', () => {
  expect(except([1, 2, 3, 3, 3, 3, 4], [3])).toEqual([1, 2, 4]);
});

test('[1, 2, 3, 4, 5] and [2, 4] gives [1, 3, 5]', () => {
  expect(except([1, 2, 3, 4, 5], [2, 4])).toEqual([1, 3, 5]);
});

test('[4, 4, 4, 4, 4, 4, 4, 4] and [4] gives []', () => {
  expect(except([4, 4, 4, 4, 4, 4, 4, 4], [4])).toEqual([]);
});

test('[2, 3, 4] and [3, 2, 4] gives []', () => {
  expect(except([2, 3, 4], [3, 2, 4])).toEqual([]);
});

test('[1, 2, 3, 4] and [1, 5] gives [2, 3, 4]', () => {
  expect(except([1, 2, 3, 4], [1, 5])).toEqual([2, 3, 4]);
});

test('[1, 2, 3, 4] and [5, 7] gives [1, 2, 3, 4]', () => {
  expect(except([1, 2, 3, 4], [5, 7])).toEqual([1, 2, 3, 4]);
});

test('[] and [1, 5] gives []', () => {
  expect(except([], [1, 5])).toEqual([]);
});

test('[] and [] gives []', () => {
  expect(except([], [])).toEqual([]);
});