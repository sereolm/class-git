'''
miVariable = 3
print(miVariable)
miVariable = "Hola a todos los estudiantes de la tecnicatura"
print(miVariable)
miVariable = 3.5
print(miVariable)
x = 10
y = 2
z = x + y
print(id(x))
# Las literales se escriben x664, la variable y = x408, la variable z = x728
print(id(y))
print(id(z))

#Tipos int, float, String, Bool
x = 10
print(x)
print(type(x))
x = 14.5
print(x)
print(type(x))
x =("Hola Alumnos")
print(x)
print(type(x))
x = True
print(x)
print(type(x))
x = False
print(x)
print(type(x))

# Manejo de cadenas (String)
miGrupoFavorito = "The Letter Black:"
caracteristicas = "The Best Rock Band"
print("Mi grupo favorito es:", miGrupoFavorito, caracteristicas)

numero1 = "7"
numero2 = "8"
print(int(numero1) + int(numero2))

# Tipos Boleanos (bool)
miBooleano = 1 > 2
print(miBooleano)

if miBooleano:
    print("El resultado es verdadero")
else:
    print("El resultado es falso")

# Procesar la entrada del usuario
# Funcion input
# resultado = input("Digite un numero: ") # Regresa un dato tipo string
# print(resultado)

# Conversion de la entrada de datos
numero1 = int(input("Escribe el primer numero: "))
numero2 = int(input("Escribe el segundo numero: "))
resultado = numero1+numero2
print("El resultado de la suma es: ", resultado)
'''
"""
operandoA = 8
operandoB = 5
suma = operandoA + operandoB
#print("El resultado de la suma:",suma)
print(f'El resultado de la suma es: {suma}')

resta = operandoA - operandoB
print(f"El resultado de la resta es: {resta}")

multiplicacion = operandoA * operandoB
print(f"El resultado de la multiplicacion es: {multiplicacion}")

division = operandoA / operandoB
print(f"El resultado de la divisio es: {division}")
division = operandoA//operandoB
print(f"El resultado de la division (int) es: {division}")
modulo = operandoA%operandoB
print(f"El resultado de la division o residuo (modulo) es: {modulo}")
exponente = operandoA**operandoB
print(f"El resultado del expoente es: {exponente}")
"""
"""
alto= int(input('Proporciona el alto del rectangulo: '))
ancho = int(input('Proporciona el ancho del rectangulo: '))
area = alto*ancho
perimetro = (alto+ancho) * 2
print('Área: ', area)
print('Perimetro: ', perimetro)
"""
"""
miVariable3 =10
print(miVariable3)

# Operadores de reasignación
miVariable3 = miVariable3+1
print(miVariable3)

miVariable3+= 1
print(miVariable3)

# miVariable3 = miVarible3-2
miVariable3 -= 2
print(miVariable3)

# miVariable3 = miVarible3*3
miVariable3*=3
print(miVariable3)

# miVariable3 = miVarible3/3
miVariable3/=2
print(miVariable3)

# Operadores de comparación

d= 4
b= 6
resultado= d == b # Comprobamos si son iguales
print(resultado)

# Operador diferente
resultado = d!= b
print(resultado)

# Operador mayor que
resultado = d>b
print(resultado)

# Operador menor que
resultado = d < b
print(resultado)

# Operador menor o igual que
resultado= d <= b
print(resultado)

# Operador mayor o igual que
resultado= d >= b
print(resultado)
"""
"""
a= int(input("Digite un número: "))
print(f"El residuo de la división es: {a%2}")
if a%2 == 0:
    print(f"El valor de a es: {a} es un número PAR")
else:
    print(f"El valor de a es: {a} es un número IMPAR")
"""
edadAdulto = 18
edadPersona = int(input("Digite su edad: "))
if edadPersona>= edadAdulto:
    print(f"Su edad es: {edadPersona} años, usted es mayor de edad")
else:
    print(f"Su edad es: {edadPersona} años, usted es menor de edad")

