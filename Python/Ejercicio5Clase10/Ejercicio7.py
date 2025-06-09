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
