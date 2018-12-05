const KaprekarsConstant = require('./KaprekarsConstant');

test('that function returns 3 when it takes  3524 as parameter', ()=>{
    expect(KaprekarsConstant(3524)).toBe(3);
});

test('that function returns 5 when it takes  2111 as parameter', ()=>{
    expect(KaprekarsConstant(2111)).toBe(5);
});

test('that function returns 6 when it takes 8 as parameter', ()=>{
    expect(KaprekarsConstant(8)).toBe(6);
});

test('that function returns 5 when it takes  10 as parameter', ()=>{
    expect(KaprekarsConstant(10)).toBe(5);
});

test('that function returns 4 when it takes  0004 as parameter', ()=>{
    expect(KaprekarsConstant(0004)).toBe(4);
});

test('that function returns 5 when it takes  0330 as parameter', ()=>{
    expect(KaprekarsConstant(0330)).toBe(5);
});
test('that function returns 7 when it takes 9831 as parameter', ()=>{
    expect(KaprekarsConstant(9831)).toBe(7);
});

test('that function returns 3 when it takes  7060 as parameter', ()=>{
    expect(KaprekarsConstant(7060)).toBe(3);
});

test('that function returns 4 when it takes  6677 as parameter', ()=>{
    expect(KaprekarsConstant(6677)).toBe(4);
});

test('that function returns 3 when it takes  2345 as parameter', ()=>{
    expect(KaprekarsConstant(2345)).toBe(3);
});

test('that function returns 3 when it takes  5432 as parameter', ()=>{
    expect(KaprekarsConstant(5432)).toBe(3);
});