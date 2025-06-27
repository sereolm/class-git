
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Sere Olmedo
 */
public class Ejercicio1 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        float nota1, nota2, nota3, promedio;

        System.out.println("Digite las 3 calificaciones:");
        nota1 = entrada.nextFloat();
        nota2 = entrada.nextFloat();
        nota3 = entrada.nextFloat();

        promedio = (nota1 + nota2 + nota3) / 3;

        if (promedio >= 70) {
            System.out.println("El alumno está aprobado con: " + promedio);
        } else {
            System.out.println("El alumno está desaprobado con: " + promedio);
        }
    }
}

