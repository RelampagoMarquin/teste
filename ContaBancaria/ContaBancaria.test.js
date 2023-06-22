const ContaBancaria = require('./ContaBancaria.js');

const c1 = new ContaBancaria.Conta(10000, 1, "Undertaker", "1354986")
const c2 = new ContaBancaria.Conta(2000, 2, "João", "6546833")
let c3

// Q1
it("Verificar Login Correto", () => {
    expect(c1.autenticar("Undertaker", "1354986")).toBe("Login Relaizado com sucesso")
})

it("Verificar Login Incorreto", () => {
    expect(c1.autenticar("Unrtaker", "1356")).toBe("Acesso Negado")
})

it("Realiza o Saque Se o Login estiver correto", () => {
    expect(c1.sacar(1000, "Undertaker", "1354986")).toBe("Saque Realizado com sucesso! Saldo atual: " + 9000)
})

it("Não Realiza o Saque Pois o Login Estará Errado", () => {
    expect(c1.sacar(1000, "Underter", "13986")).toBe("Acesso Negado")
})

// Q2
it("Realiza o Saque valor É Menor Que o Saldo", () => {
    expect(c1.sacar(1000, "Undertaker", "1354986")).toBe("Saque Realizado com sucesso! Saldo atual: " + 8000)
})

it("Não Realiza o Saque Pois O Valor Maior Que o Saldo", () => {
    expect(c1.sacar(10000, "Undertaker", "1354986")).toBe("não é possível realizar o saque pois o saldo ficará negativo!")
})

// Q3
describe("O teste de Verificar Conta, Deposito, Sacar, Verificar Outra Conta", () => {
    it("Testa se tudo passa e se cai nas restrições de saldo e conta invalida", () => {
        expect(c1.autenticar("Undertaker", "1354986")).toBe("Login Relaizado com sucesso")
        expect(c1.sacar(1000, "Undertaker", "1354986")).toBe("Saque Realizado com sucesso! Saldo atual: " + 7000)
        expect(c1.sacar(10000, "Undertaker", "1354986")).toBe("não é possível realizar o saque pois o saldo ficará negativo!")
        expect(c1.verificarOutraConta(c2)).toBe("Conta Existe")
        expect(c1.verificarOutraConta(c3)).toBe("Conta Inexistente")
        expect(c1.depositarOutraConta(1000, c2, "Undertaker", "1354986")).toBe("Saque Realizado com sucesso!")
        
    })

});



