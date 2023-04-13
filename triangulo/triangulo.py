e1 = 0
e2 = 0
e3 = 0
def valores():
    global e1, e2, e3
    e1 = int(input('Digite o numero de um dos lados: '))
    while(e1<=0):
        e1 = int(input('Digite o numero de um dos lados QUE NÃO SEJA ZERO OU NEGATIVO: '))

    e2 = int(input('Digite o numero de um dos lados: '))
    while(e2<=0):
        e2 = int(input('Digite o numero de um dos lados QUE NÃO SEJA ZERO OU NEGATIVO: '))

    e3 = int(input('Digite o numero de um dos lados: '))
    while(e3<=0):
        e3 = int(input('Digite o numero de um dos lados QUE NÃO SEJA ZERO OU NEGATIVO: '))

def isTriangulo(e1, e2, e3):
    t1 = abs(e2 - e3) < e1 < e2 + e3
    t2 = abs(e1 - e3) < e2 < e1 + e3
    t3 = abs(e1 - e2) < e3 < e1 + e2
    if(t1 and t2 and t3):
        return True
    else:
        return False

def triangulo(e1, e2, e3):
    existe = isTriangulo(e1, e2, e3)
    if(existe):
        if ( e1 == e2 and e1 == e3 ):
            print('equilatero')
        elif (e1 == e2 or e1 == e3 or e2 == e3):
            print('Isoceles')
        else:
            print('escaleno')
    else:
        print('Não é um triangulo')

def run():
    valores()
    triangulo(e1, e2, e3)
    n = int(input('tentar novamente? (0 para não e 1 para sim) '))
    while (n > 2 or n < 0):
        n = int(input('tentar novamente? (0 para não e 1 para sim) '))
    if (n == 0):
        print('bye')
    else:
        print(f'lados anteriores a = {e1}, b = {e2}, c = {e3}')
        run()

run()
