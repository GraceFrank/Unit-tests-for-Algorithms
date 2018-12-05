
const removeVowels = require('./removeVowels');

test('simple string of no repeated elements', () => {
  expect(removeVowels('dare')).toEqual('dr');
});

test('intermediate', () => {
  expect(removeVowels('intermediate')).toEqual('dmnrtt');
});

test('joshua', () => {
  expect(removeVowels('joshua')).toEqual('hjs');
});




