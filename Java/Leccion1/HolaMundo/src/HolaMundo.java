
import java.util.Scanner;

/**
 * @author Sere Olmedo
 */
public class HolaMundo {

    public static void main(String[] args) {
        /* System.out.println("Hola mundo desde Java");

        int miVariable = 10;
        System.out.println(miVariable);
        miVariable = 5;
        System.out.println(miVariable);
        //Tipo string
        String miVariableCadena = "Bienvenidos";
        System.out.println(miVariableCadena);
        miVariableCadena = "Sigamos creciendo en programación";
        System.out.println(miVariableCadena);
         */

        //Var - Interferencia en tipos de Java
        /*var miVariableEntera2 = 10;
        var miVariableCadena2 = "Seguimos estudiando";
        System.out.println("mivariableEadena2 = " + miVariableCadena2);
        System.out.println("miVariableCadena2 = " + miVariableCadena2);
        //soutv + tab
        //Para ejecutar Shift + F6 es la tecla para mayusculas
        //Reglas para definir una varuable en Java

        var usuario = "Osvaldo";
        var titulo = "Ingeniero";
        var union = titulo + " " + usuario;
        System.out.println("union = " + union);

        var a = 8;
        var b = 4;
        System.out.println(usuario + (a + b));
        //Ejercicio: Caracteres Especiales con Java
        var nombre = "Natalia";
        System.out.println("\nNueva linea: \n" + nombre);//Diagonal inversa y letra n
        System.out.println("Tabulador: \t" + nombre);//Tabulador un espacio para centrar
        System.out.println("\t\t.:MENÜ:.");
        System.out.println("Retroceso: \b\b"+nombre); //Caracter de retroceso
        System.out.println("Comillas simples: \'"+nombre+"\'");//Comillas simples
        System.out.println("Comillas dobles: \""+nombre+"\"");*/
        //Clase Scaner
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite su nombre: ");
        var usuario2 = entrada.nextLine();
        System.out.println("usuario2 = " + usuario2);
        System.out.println("Escriba el titulo: ");
        var titulo2 = entrada.nextLine();
        System.out.println("Resultado: "+titulo2+" "+usuario2);
    }

}
