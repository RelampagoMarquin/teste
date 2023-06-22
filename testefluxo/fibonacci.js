function fibonacci(n){
    let i = 1
    let a = 0
    let b = 1

    if(n > 1){
        while (i < n){
            let temp = b
            b = b + a
            a = temp
            i = i + 1
        }
    }
    return b
}

module.exports = {
    fibonacci
  }