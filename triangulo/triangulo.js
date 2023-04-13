function isTriangulo(e1, e2, e3) {
    const t1 = Math.abs(e2 - e3) < e1 && e1 < e2 + e3;
    const t2 = Math.abs(e1 - e3) < e2 && e2 < e1 + e3;
    const t3 = Math.abs(e1 - e2) < e3 && e3 < e1 + e2;
    return t1 && t2 && t3;
}

function triangulo(e1, e2, e3) {
    if (e1 == 0 || e2 == 0 || e3 == 0){
        return 'Algun(s) ou todos os valores 0(zero) o que não pode'
    }
    const existe = isTriangulo(e1, e2, e3);
    if (existe) {
        if (e1 == e2 && e1 == e3) {
            return 'Equilatero'
        }
        else if (e1 == e2 || e1 == e3 || e2 == e3) {
            return 'Isoceles'
        }
        else {
            return 'Escaleno'
        }
    } else {
        return 'Não é um triângulo'
    }
}


module.exports = {
    triangulo,
    isTriangulo
}