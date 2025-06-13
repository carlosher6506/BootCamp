/* Ejercicio 1: calcula cuantas horas le llevaria llegar a la luna una nave espacial y guarda el resultado en una variable
    La distancia desde la tierra hasta la luna es de 384.400 kilometros
    la velocidad de la nave es de 1225 kilometros por hora
    formula: T=D/V
*/  

let tiempo;
let velocidad = 1225;
let distancia = 384400;

tiempo = distancia/velocidad;

console.log("Este es el tiempo en que tardaria en llegar la nave espacial a la luna: ", Math.ceil(tiempo));

/*-----------------------------------------------------------------------------------------------*/

/* Ejercicio 2: Tenemos 7 cajas con 8 cockies rellenas de chocolate cada 1
    ¿cuantas cookies en total tenemos en realidad?  */

let cajas = 7;
const cockies_pc = 8;

cockies_total = cajas * cockies_pc;

console.log("Estas son las cookies que hay en total: ", cockies_total);

/*-----------------------------------------------------------------------------------------------*/

/* Ejercicio 3: ¿Cuantos minutos tiene 7 horas?
    utilizar variables y operadores para resolverlos
*/

let hora = 7;
const min_porH = 60;
let minutos_totales;

minutos_totales = hora * min_porH;

console.log("estos son los minutos que tienen las 7 horas: ", minutos_totales);

/*-----------------------------------------------------------------------------------------------*/

/* Ejercicio 4:  
    Tenemos una jirafa en el zoo que pesa 1.120 kilos.
    Y le damos de comer 141 kilos de hojas frescas.
    ¿Cuanto pesa ahora la jirafa?
*/

let jirafa = 1120;
let hojas = 141;

peso = jirafa + hojas;

console.log("La jirafa pesa: ", peso, "kilos");

/*-----------------------------------------------------------------------------------------------*/

/* Ejercicio 5:
    Tengo una tarta de queso con 16 porciones.
    Cada porcion vale 3.8 euros.
    ¿Si vendo todas las porciones cuanto dinero gano en total?
*/

let tarta = 16;
let precio = 3.8;

ganancia = tarta * precio;

console.log(`Las ganancias por las tartas es de ${ganancia} euros`);


/*-----------------------------------------------------------------------------------------------*/

/* Ejercicio 6:
    En mi tienda de videojuegos tenemos una oferta.
    Si compras un juego de 50 euros o màs, te hacemos un 20% de descuento.
    Si un cliente compra el Tekken 15 que cuesta 50 euros, ¿En cuanto se le queda? 
*/

tekken = 50;
descuento = 0.20;

precio_f = tekken - (tekken * descuento);

console.log(`El descuneto de viedojuego es de 20%, dando un total del costo del juego en: ${precio_f} euros`);

/*-----------------------------------------------------------------------------------------------*/

/* Ejercicio 7:
    Tenemos un circulo con un diametro de 18 cm.
    Calcula el radio del circulo y dime cual es en una alerta. 
*/

let circulo = 18

radio = circulo / 2;

alert(`El radio del circulo es de:  ${radio} cm `);

/*-----------------------------------------------------------------------------------------------*/

/* Ejercicio 8:
    Tengo una heladeria y cadda bola de helado vale 1.8 euros.
    ¿Cuanto cuestan los cucuruchos de 1, 2 y 3 bolas?
    Ten en cuenta que el barquillo cuesta cincuenta centimos de euros.
*/

let bola = 1.8;
let barquillo = 0.5;

helado1 = barquillo + bola;
helado2 = barquillo + (bola * 2);
helado3 = barquillo + (bola * 3);

console.log(`Este es el precio del helado con una bola: ${helado1} euros`);
console.log(`Este es el precio del helado con dos bola: ${helado2} euros`);
console.log(`Este es el precio del helado con tres bola: ${helado3} euros`);

/*-----------------------------------------------------------------------------------------------*/

/* Ejercicio 9:
    Una milla son 1.6 kilometros.
    ¿Cuantos kilometros tiene una autopista de 120 millas?
*/

let milla = 1.6;
let kilometro = 120;

millas_t = milla * kilometro;

console.log(`${millas_t} kilometros tiene 120 millas`);

/*-----------------------------------------------------------------------------------------------*/

/* Ejercicio 10:
    El otro dia fui con mi amigo Pepe y Manolo a un restaurante de smash burgers.
    yo me comi 2, pepe se comio 3 y manolo, como es culturista se comio 6.
    ¿Cunatas amburgesas nos comimos en total?
    Y... ¿Es cierto que yo comi menos que pepe?
    Responde a estas dos preguntas devolviendo el resultado en la consola del navegador.
*/

let yo = 2;
let pepe = 3;
let manolo = 6;

total_burger = yo + pepe + manolo;
esCierto = yo < pepe;

console.log(`Las amburgesas comidas en total fueron: ${total_burger}`);
console.log(`yo comi menos que pepe, comi: ${yo}, por lo tanto es: ${esCierto}`);

/*-----------------------------------------------------------------------------------------------*/