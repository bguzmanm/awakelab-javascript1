var montoAntesDeImpuesto = 10489;
var nombreCliente = 'Cristian';

const IVA = 19;

var impuesto = montoAntesDeImpuesto * (IVA / 100);
var montoVenta = montoAntesDeImpuesto + impuesto;
console.log(montoVenta);

// operadores de incremento y decremento

var contador = 1;
contador = contador + 1;
contador += 1;
contador++;

contador = contador - 1;
contador -= 1;
contador--;
console.log(contador);

// operadores de comparación
var a = 10;
var b = 11;

console.log(a == b); //false
console.log(a != b); //true
console.log(a >= b); //false
console.log(a <= b); //true

var verdad = true;
var mentira = false;

console.log(!verdad);
console.log(verdad && mentira);
console.log(verdad || mentira);




