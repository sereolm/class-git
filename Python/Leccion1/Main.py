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