const evenInterval = require('./Interval');

test('Takes in an empty array', () => {
    expect(evenInterval([])).toEqual([ [], [] ]);
  });

test('A simple case', () => {
    expect(evenInterval([3,1])).toEqual([ [ 2 ], [] ]);
  });

test('a simple case of an array of only negative number', () => {
    expect(evenInterval([-3,-7,-5])).toEqual([ [ -2 ], [] ]);
  });

test('a simple case including 0', () => {
    expect(evenInterval([0,4,2,6,3,5,7])).toEqual([ [ 2 ], [ 1, 1 ] ]);
  });

test('a simple case of 0 and negative numbers', () => {
    expect(evenInterval([-2,0,-3,-5])).toEqual([ [], [-1, 5] ]);
  });

test('In a case of an array with negative numbers', () => {
    expect(evenInterval([2,5,-3,-4,-6,6,4,-2])).toEqual([ [ -2, 2 ], [ -1, 1 ] ]);
  });

test('In a case of an array with different numbers, an odd length and an undefined element', () => {
    expect(evenInterval([1,5,6,9,4,,7])).toEqual([ [ 2 ], [ 3, 1 ] ]);
  });

test('In a case of an array with only negative numbers', () => {
    expect(evenInterval([-12,-14,-15,-19,-17,-20,-10])).toEqual([ [ -2, -2 ], [ -1 ] ]);
  });

test('In a case of an array with only an element', () => {
    expect(evenInterval([1])).toEqual([ [], [] ]);
  });

test('in a case of an array with different numbers, even length and an undefined element', () => {
    expect(evenInterval([5,6,9,4,,7])).toEqual([ [], [ 1, 1, NaN ] ]);
  });

test('in a case of an array of both negative and positive numbers', () => {
    expect(evenInterval([-1,0,-6,-10,-59,44,33,6,11,-33])).toEqual([ [ -26, 6, 22, -38 ], [ -9 ] ]);
  });

test('in a case of an array of negative numbers', () => {
    expect(evenInterval([-1,-4,-5,-22,-1000,-44,-33])).toEqual([ [ -40 ], [ -999, -11 ] ]);
  });

test('a case of an array zero, negative and positive numbers', () => {
    expect(evenInterval([-5,-2,0,-1,-3,5,2,4,-4,3])).toEqual([ [], [ -1, -1, 5, 1, 1 ] ]);
  });
  
test('in a case of an array of only same numbers', () => {
    expect(evenInterval([3,3,3,3,3,3,3,3,3,3,3,3,3])).toEqual([ [], [] ]);
  });

test('in a case of an array of containing same numbers and an undefined element', () => {
    expect(evenInterval([4,,4,4,4,4,4,4])).toEqual([ [], [ NaN ] ]);
  });
  