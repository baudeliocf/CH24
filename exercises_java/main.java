package practica1;

import java.util.Date;
import java.util.Calendar;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

public class Practica {
	// 1 Escribir un metodo para encontrar el área de un triángulo a partir de 3
	// lados ingresados
	// Revisar si es un triángulo válido
	// Utilizando la formula de heron
	static void areaTriangle(double a, double b, double c) {
		if (a <= 0 || b <= 0 || c <= 0) {
			System.out.println("Invalid triangle");
			return;
		}
		double s = (a + b + c) / 2.0; // always positive because a, b and c area positive

		double area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // always positive

		System.out.println("The area triangle is: " + area);
	}

	// 2 Escribir un metodo para encontrar el area y la circunferencia de un circulo
	// dado el radio
	// Utilizar PI de la libreria de Java
	static void circleAreaPerimeter(double r) {
		if (r <= 0) {
			System.out.println("Invalid radio");
			return;
		}

		double area = Math.pow(r, 2.0) * Math.PI;

		double perimeter = r * 2.0 * Math.PI;

		System.out.println("The area circle is: " + area);
		System.out.println("The perimeter circle is: " + perimeter);
	}

	// 3 Escribir un metodo que muestre por consola la hora del sistema
	// Utilizar e investigar la libreria de Java
	static void timeSystem() {
//		Date date = new Date();
//		System.out.println(date.getHours());
//		System.out.println(date.getTime());

		Calendar calendarNow = Calendar.getInstance();
		System.out.println("Hour: " + calendarNow.get(Calendar.HOUR) + "Minutes: " + calendarNow.get(Calendar.MINUTE));

		DateTimeFormatter format = DateTimeFormatter.ofPattern("HH:mm:ss");
		LocalDateTime localNow = LocalDateTime.now();
		System.out.println(format.format(localNow));
	}

	// 4 Escribir un metodo que convierta n cantidad de segundos a (hora, minutos,
	// segundos) segun sea el caso
	// ej 3600 = "1 hora = 60 min = 3600 seg"
	static void secondsToHMS(int n) {
		int hours = n / 3600;
		int minutes = (n - hours * 3600) / 60;
		int seconds = n - hours * 3600 - minutes * 60;

		System.out.println("Hours: " + hours);
		System.out.println("Minutes: " + minutes);
		System.out.println("Seconds: " + seconds);
	}

	// 5 Escribir un metodo para encontrar el volumen de una esfera dado el radio
	static void sphereVol(double r) {
		System.out.println("Sphere volume: " + (Math.PI * Math.pow(r, 3)) * (4.0 / 3.0));
	}

	// 6 Escribir un metodo para encontrar el volumen de un cono a dado el radio y
	// la altura
	static void coneVol(double r, double h) {
		System.out.println("Sphere volume: " + (Math.PI * Math.pow(r, 2) * h) / 3.0);
	}

	// 7 Encontrar el area superficial de un cubo dado un lado a
	static void cubeArea(double a) {
		System.out.println("Area cube: " + a * a * 6);
	}

	// 8 Escribir un metodo para descubrir si un año ingresado es bisiesto o no
	static void yearIs(int year) {
		if (year % 400 == 0) {
			System.out.println("YES");
		} else if (year % 100 == 0) {
			System.out.println("NO");
		} else if (year % 4 == 0) {
			System.out.println("YES");
		}
	}

	// 9. Escribir mostrar en pantalla los primeros 100 numeros primos
	static void primes() {
		int primes_count = 0;
		int number = 1;
		int value = 1;
		int count = 1;
		while (primes_count < 100) {
			while (value <= number) {
				if (number % value == 0) {
					count++;
				}
				value++;
//				System.out.println(value);
			}
			if (count == 2) {
				primes_count++;
				System.out.println(number);
			}
			number++;
			value = 1;
			count = 0;
		}
	}

	// 10. Escribir un programa para sumar 2 numeros sin usar operadores aritmeticos
	static void sumTwoNumbers(int num1, int num2) {
		int result = 0;
		for (int i = 0; i < num1; i++) {
			result++;
		}
		for (int i = 0; i < num2; i++) {
			result++;
		}
		System.out.println("Result: " + result);
	}

	// 11. Escribir un método para verificar si un numero positivo de 2 digitos es
	// palindromo
	static void isPalindrome(int num1) {
		int a = num1 / 10;
		int b = num1 - a * 10;
		if (a == b) {
			System.out.println("YES");
		} else {
			System.out.println("NO");
		}
	}

	// 12. Sin usar loops, escribir un metodo para sumar todos los digitos de un
	// numero donde 99 >= n >= 10
	static void sumDigits(int num1) {
		int a = num1 / 10;
		int b = num1 - a * 10;
		System.out.println(a + b);
	}

	// 13. Escribir un método para remover espacios en blanco de un String. ej ->
	// "Hola Mundo" -> "HolaMundo"
	static void removeSpaces(String word) {
//		for (int i = 0; i < word.length(); i++) {
//			if (String.valueOf(word.charAt(i)) != " ") {
//				
//			}
//		}
		System.out.println(word.replace(" ", ""));
	}

	// 14. Escribir un método para invertir un String. ej -> "Hola" -> "aloH" ---
	// Sin usar loops
	static void invertWord(String word) {
//		String[] split = word.split("");
//		String joined1 = String.join("", split);
//		System.out.println(joined1);
		System.out.println(new StringBuilder(word).reverse().toString());
	}

	public static void main(String[] args) {
//		invertWord("Hola");
	}

}
