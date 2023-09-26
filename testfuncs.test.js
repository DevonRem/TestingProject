const testfuncs = require('./testfuncs');
const capitalize = testfuncs.capitalize;
const reverseString = testfuncs.reverseString;
const Calculator = testfuncs.Calculator;
const caesarCipher = testfuncs.caesarCipher;
const analyzeArray = testfuncs.analyzeArray;

test('first character of string is capitalized', () => {
    expect(capitalize('test')).toBe('Test');
});

test('string is reversed', () => {
    expect(reverseString('abc')).toBe('cba');
});

describe("Calculator basic operations", () => {
    let calculator;
  
    beforeEach(function () {
      calculator = new Calculator();
    });

test('add', () => {
    expect(calculator.add(1,2)).toBe(3);
});

test('subtract', () => {
    expect(calculator.subtract(2,1)).toBe(1);
});

test('divide', () => {
    expect(calculator.divide(2,1)).toBe(2);
});

test('multiply', () => {
    expect(calculator.multiply(2,1)).toBe(2);
});
});

test('caesar cipher test', () => {
    expect(caesarCipher("what a wonderful day", 3)).toBe("zkdw d zrqghuixo gdb");
});

test('analyzeArray test', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      });
    });
