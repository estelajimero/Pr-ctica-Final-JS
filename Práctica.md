Se propone realizar una página web que calcule la letra del número de DNI introducido
por el usuario.

De acuerdo con la web del Ministerio del Interior el algoritmo para calcular el DNI es
el siguiente; se divide el número entre 23 y el resto se sustituye por una letra que
se determina por inspección mediante la siguiente tabla:

Resto 0 1 2 3 4 5 6 7 8 9 10 11
Letra T R W A G M Y F P D  X  B

Resto 12 13 14 15 16 17 18 19 20 21 22
Letra  N  J  Z  S  Q  V  H  L  C  K  E

Por ejemplo, si el número del DNI es 12345678 al dividirlo entre 23 da un resto de
14, luego la letra sería la Z: el resultado sería 12345678Z.

El programa ha de cumplir los siguientes requisitos:
 Se ha de solicitar un número y una letra de DNI al usuario.
 Se deben validar las entradas del usuario. En el caso de no sea correcta se
deberán indicar los motivos del error. No se debe permitir una entrada vacía
ni una entrada no numérica en el caso del número de DNI, ni una entrada numérica
y superior a un carácter en el caso de la letra. Se ha de permitir el uso
de letras mayúsculas y minúsculas.
 Los mensajes de validación se mostrarán mediante ventanas emergentes.
 Si se produce un error se borrará la entrada del usuario para que vuelva a introducir
de nuevo los datos.
 Se usará un array para almacenar las diferentes letras.
 Se mostrará en la propia página la letra resultado (utilizando funciones del
DOM) usando un tipo de letra grande, mínimo "h1".
Si la letra introducida por el usuario no coincide con la calculada se mostrará
en la propia página con un formato "h3" en rojo y el mensaje en verde en caso
contrario.
 Para el cálculo de la letra del DNI podrá utilizarse un botón para tal fin o bien
pulsar la tecla "Enter" una vez tecleada la entrada del usuario. La pulsación de
"Enter" se ha de detectar tanto en el campo de entrada para el número como
en el campo de entrada para la letra.

Demo: https://estelajimero.github.io/Pr-ctica-Final-JS/
