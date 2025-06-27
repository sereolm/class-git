#Solicitamos la cantidad de números
n = int(input("Ingrese la cantidad de números: "))
#Iniciamos las variables
suma_pares = 0
contador_pares = 0
suma_impares = 0
contador_impares = 0
#Ingresamos los números y realizamos los cálculos
for i in range(n):
    numero = int(input(f"Ingrese el número {i+1}: "))
    if numero % 2 == 0:
        suma_pares += numero
        contador_pares += 1
    else:
        suma_impares += numero
        contador_impares += 1
#Calcular el promedio de impares
if contador_impares > 0:
    promedio_impares = suma_impares / contador_impares
else:
    promedio_impares = 0  #evitamos la división por cero
#mostramos resultado
print(f"\nSuma de números pares: {suma_pares}")
print(f"Cantidad de números pares: {contador_pares}")
print(f"Promedio de números impares: {promedio_impares:.2f}")




'''
# Ejercicio 8: Calcular salario de 5 empleados y la suma total

suma = 0

# Bucle para los 5 empleados
for i in range(1, 6):
    print(f"\nSalario del empleado {i}:")

    horas = int(input("Digite las horas trabajadas: "))

    tarifa = float(input("Digite la tarifa por hora: "))

    salario = horas * tarifa

    print("El salario es: $", salario)

    # Suma total
    suma += salario

print("\nLa suma de todos los salarios es: $", suma)
'''
