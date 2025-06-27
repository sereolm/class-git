
import java.util.Scanner;

/**
 *
 * @author Sere Olmedo
 */
public class Ejercicio3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double participacion, parcial1, parcial2, examenFinal, notaFinal;

        System.out.print("Ingrese la nota de participación (10%): ");
        participacion = sc.nextDouble();

        System.out.print("Ingrese la nota del primer parcial (25%): ");
        parcial1 = sc.nextDouble();

        System.out.print("Ingrese la nota del segundo parcial (25%): ");
        parcial2 = sc.nextDouble();

        System.out.print("Ingrese la nota del examen final (40%): ");
        examenFinal = sc.nextDouble();

        notaFinal = participacion * 0.10 + parcial1 * 0.25 + parcial2 * 0.25 + examenFinal * 0.40;

        System.out.println("La calificación final del estudiante es: " + notaFinal);
    }
}
