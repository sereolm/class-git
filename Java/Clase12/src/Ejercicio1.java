
import java.util.Scanner;

/**
 *
 * @author Sere Olmedo
 */
public class Ejercicio1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int totalHoras, semanas, dias, horas;

        System.out.print("Ingrese el total de horas: ");
        totalHoras = sc.nextInt();

        semanas = totalHoras / (7 * 24); // 1 semana = 7 días * 24 horas
        int restoHoras = totalHoras % (7 * 24);

        dias = restoHoras / 24;
        horas = restoHoras % 24;

        System.out.println(totalHoras + " horas equivalen a: ");
        System.out.println(semanas + " semanas, " + dias + " días, " + horas + " horas.");
    }
}

