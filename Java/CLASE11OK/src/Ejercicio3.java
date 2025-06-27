
import java.util.Scanner;

/**
 *
 * @author Sere Olmedo
 */
public class Ejercicio3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Definir variables
        double num1, num2, resultado;

        // Leer datos
        System.out.print("Digite el primer número: ");
        num1 = scanner.nextDouble();

        System.out.print("Digite el segundo número: ");
        num2 = scanner.nextDouble();

        // Proceso de comparación
        if (num1 == num2) {
            resultado = num1 * num2;
        } else if (num1 > num2) {
            resultado = num1 - num2;
        } else {
            resultado = num1 + num2;
        }

        // Mostrar resultado
        System.out.println("El resultado es: " + resultado);
    }
}