const kaprekarsConstant = require('./play');

test('that function returns 3 when it takes  3524 as parameter', ()=>{
    expect(kaprekarsConstant(3524)).toBe(3);
});

test('that function returns 5 when it takes  2111 as parameter', ()=>{
    expect(kaprekarsConstant(2111)).toBe(5);
});

test('that function returns 6 when it takes 8 as parameter', ()=>{
    expect(kaprekarsConstant(8)).toBe(6);
});

test('that function returns 5 when it takes  10 as parameter', ()=>{
    expect(kaprekarsConstant(10)).toBe(5);
});

test('that function returns 4 when it takes  8111 as parameter', ()=>{
    expect(kaprekarsConstant(8111)).toBe(4);
});

test('that function returns 6 when it takes  3330 as parameter', ()=>{
    expect(kaprekarsConstant(3330)).toBe(6);
});
test('that function returns 7 when it takes 9831 as parameter', ()=>{
    expect(kaprekarsConstant(9831)).toBe(7);
});

test('that function returns 3 when it takes  7060 as parameter', ()=>{
    expect(kaprekarsConstant(7060)).toBe(3);
});

test('that function returns 4 when it takes  6677 as parameter', ()=>{
    expect(kaprekarsConstant(6677)).toBe(4);
});

test('that function returns 3 when it takes  2345 as parameter', ()=>{
    expect(kaprekarsConstant(2345)).toBe(3);
});

test('that function returns 3 when it takes  5432 as parameter', ()=>{
    expect(kaprekarsConstant(5432)).toBe(3);
});