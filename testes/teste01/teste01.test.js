const {sum, mult} = require('./teste01')

it ("Somar dois numeros", ()=>{
    expect(sum(1, 2)).toBe(3)
})

it ("Multiplicação dois numeros", ()=>{
    expect(mult(2, 5)).toBe(10)
})