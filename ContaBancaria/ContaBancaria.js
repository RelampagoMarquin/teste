class Conta{
  constructor(saldoInicial, numeroConta, login, senha){
    this.saldo = saldoInicial,
    this.numeroConta = numeroConta
    this.login = login
    this.senha = senha
  }

  autenticar = (login, senha) => {
    if (login.toLowerCase() == this.login.toLowerCase() && senha == this.senha) {
      return "Login Relaizado com sucesso"
    } else {
      return "Acesso Negado"
    }
  }

  verificarLogin = (login, senha) => {
    if (login.toLowerCase() == this.login.toLowerCase() && senha == this.senha) {
      return true
    } else {
      return false
    }
  }

  sacar = (valor, login, senha) => {
    const autenticar = this.verificarLogin(login, senha)
    if(autenticar){
      if(this.saldo >= valor){
        this.saldo -= valor
        return "Saque Realizado com sucesso! Saldo atual: " + this.saldo
      } else {
        return "não é possível realizar o saque pois o saldo ficará negativo!"
      }
    }
    return "Acesso Negado"
  }

  depositar = (valor, login, senha) => {
    const autenticar = this.verificarLogin(login, senha)
    if(autenticar){
        this.saldo += valor
        return "Saque Realizado com sucesso! Saldo atual: " + this.saldo
    }
    return "Acesso Negado"
  }

  depositarOutraConta = (valor, conta, login, senha) => {
    const autenticar = this.verificarLogin(login, senha)
    if(autenticar){
      conta.saldo += valor
      return "Saque Realizado com sucesso!"
    }
    return "Acesso Negado"
  }

  transferir = (valor, conta, login, senha) => {
    const autenticar = this.verificarLogin(login, senha)
    if(autenticar){
      if(this.saldo >= valor){
        this.saldo -= valor
        conta.saldo += valor   
        return this.saldo
      } else {
        return "não é possível realizar o saque pois o saldo ficará negativo!"
      }
    }
    return "Acesso Negado"
  }

  verificarOutraConta = (conta) => {
    if(conta){
      return "Conta Existe"
    }
    return "Conta Inexistente"
  }

}

module.exports = {
  Conta
}
