
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Sere Olmedo
 */
public class Ejercicio2 {

    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);
        double compra, descuento, precioFinal;

        System.out.print("Digite la cantidad a pagar: ");
        compra = entrada.nextDouble();

        if (compra > 100) {
            descuento = compra * 0.20;
        } else {
            descuento = 0;
        }

        precioFinal = compra - descuento;

        System.out.println("El precio a pagar es: $" + precioFinal);
    }
}

