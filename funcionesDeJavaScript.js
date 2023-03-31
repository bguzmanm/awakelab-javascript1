/* funciones de javascript */

// isNaN(valor): retorna si 
console.log(isNaN("cualquier cosa que no es un número"));
console.log(isNaN("13232"));
console.log(isNaN(1));

// parseInt(valor): retorna el valor convertido a numerico, si es posible.
console.log(parseInt("434"));
console.log(parseInt(434));

var numeroEnTexto = "73.84";
console.log(typeof numeroEnTexto);
console.log(numeroEnTexto + numeroEnTexto);
var numeroEnNumero = parseInt(numeroEnTexto);
console.log(numeroEnTexto);
console.log(numeroEnNumero + numeroEnNumero);

var j = "hola que ace";
var r = parseInt(j);
console.log(typeof r);

//parseFloat(valor): retorna un valor convertido en número, con coma flotante
var ivaEnTexto = "0.19";
var ivaEnFloat = parseFloat(ivaEnTexto);
console.log(typeof ivaEnFloat);

alert('mensajito');
