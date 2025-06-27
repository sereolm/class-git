
import java.util.Scanner;

/**
 *
 * @author Sere Olmedo
 */
public class Ejercicio2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a, b, resultado;

        System.out.print("Ingrese el valor de a: ");
        a = sc.nextDouble();

        System.out.print("Ingrese el valor de b: ");
        b = sc.nextDouble();

        resultado = Math.pow(a + b, 2); // (a + b)^2

        System.out.println("El resultado de (a + b)^2 es: " + resultado);
    }
}


