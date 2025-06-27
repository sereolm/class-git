
import java.util.Scanner;


/**
 *
 * @author Sere Olmedo
 */
public class EJERCICIO_CLASE10 {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.print("Digite un número entre 0 y 10: ");
        int calificacion = Integer.parseInt(entrada.nextLine());

        switch (calificacion) {
            case 10:
            case 9:
                System.out.println("A");
                break;
            case 8:
                System.out.println("B");
                break;
            case 7:
                System.out.println("C");
                break;
            case 6:
                System.out.println("D");
                break;
            case 5:
            case 4:
            case 3:
            case 2:
            case 1:
            case 0:
                System.out.println("F");
                break;
            default:
                System.out.println("Fuera de rango");
                break;
        }
    }
}
