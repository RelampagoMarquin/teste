const {triangulo, isTriangulo} = require('./triangulo')

it ('triangulo valido',() =>{
    expect(isTriangulo(3,3,3)).toBe(true)
    expect(isTriangulo(1,2,3)).toBe(false)
    expect(isTriangulo(1,2)).toBe(false)
    expect(isTriangulo('n',1,2)).toBe(false)
})

it ('Equilatero',() =>{
    expect(triangulo(3,3,3)).toBe('Equilatero')
})
it ('Isoceles com ordem alternada',() =>{
    expect(triangulo(3,3,4)).toBe('Isoceles')
    expect(triangulo(4,3,3)).toBe('Isoceles')
    expect(triangulo(3,4,3)).toBe('Isoceles')
})
it ('Escaleno com ordem alternada',() =>{
    expect(triangulo(2,3,4)).toBe('Escaleno')
    expect(triangulo(2,4,3)).toBe('Escaleno')
    expect(triangulo(3,4,2)).toBe('Escaleno')  
})

it ('teste de zero',() =>{
    expect(triangulo(3,0,1)).toBe('Algun(s) ou todos os valores 0(zero) o que não pode')
})