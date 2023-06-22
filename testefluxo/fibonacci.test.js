const fibonacci = require('./fibonacci.js');

it("teste fibonacci", () =>{
    expect(fibonacci.fibonacci(0)).toBe(1);
    expect(fibonacci.fibonacci(1)).toBe(1);
    expect(fibonacci.fibonacci(2)).toBe(1);
    expect(fibonacci.fibonacci(3)).toBe(2);
    expect(fibonacci.fibonacci(4)).toBe(3);
    expect(fibonacci.fibonacci(5)).toBe(5);
    expect(fibonacci.fibonacci(6)).toBe(8);
    expect(fibonacci.fibonacci(7)).toBe(13);
    expect(fibonacci.fibonacci(8)).toBe(21);
    expect(fibonacci.fibonacci(9)).toBe(34);
    expect(fibonacci.fibonacci(10)).toBe(55);
    expect(fibonacci.fibonacci(11)).toBe(89);
    expect(fibonacci.fibonacci(12)).toBe(144);
})