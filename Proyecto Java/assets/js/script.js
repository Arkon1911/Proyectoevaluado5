// Declaracion de variables

console.log("Entrando al programa");

var nota1HTML = document.getElementById ("HTML1");
var nota2HTML = document.getElementById ("HTML2");
var nota3HTML = document.getElementById ("HTML3");
var HTMLPromedio = document.getElementById ("HTMLPromedio");

var nota1h = Number(prompt("Ingrese nota 1 HTML:"));
var nota2h = Number(prompt("Ingrese nota 2 HTML:"));
var nota3h = Number(prompt("Ingrese nota 3 HTML:"));

var promedioh =(nota1h + nota2h + nota3h) / 3;

nota1HTML.innerHTML = nota1h;
nota2HTML.innerHTML = nota2h;
nota3HTML.innerHTML = nota3h;

HTMLPromedio.innerHTML = promedioh.toFixed(2); 

console.log("Promedio HTML:", promedioh);

var nota1CSS = document.getElementById ("CSS1");
var nota2CSS = document.getElementById ("CSS2");
var nota3CSS = document.getElementById ("CSS3");
var CSSPromedio = document.getElementById ("CSSPromedio");

var nota1c = Number(prompt("Ingrese nota 1 CSS:"));
var nota2c = Number(prompt("Ingrese nota 2 CSS:"));
var nota3c = Number(prompt("Ingrese nota 3 CSS:"));

var promedioc =(nota1c + nota2c + nota3c) / 3;

nota1CSS.innerHTML = nota1c;
nota2CSS.innerHTML = nota2c;
nota3CSS.innerHTML = nota3c;

CSSPromedio.innerHTML = promedioc.toFixed(2); 

var nota1JS = document.getElementById ("JS1");
var nota2JS = document.getElementById ("JS2");
var nota3JS = document.getElementById ("JS3");
var JSPromedio = document.getElementById ("JSPromedio");

var nota1j = Number(prompt("Ingrese nota 1 JS:"));
var nota2j = Number(prompt("Ingrese nota 2 JS:"));
var nota3j = Number(prompt("Ingrese nota 3 JS:"));

var promedioj =(nota1j + nota2j + nota3j) / 3;

nota1JS.innerHTML = nota1j;
nota2JS.innerHTML = nota2j;
nota3JS.innerHTML = nota3j;

JSPromedio.innerHTML = promedioj.toFixed(2); 



/*var nota1CCS = document.getElementById ("CSS1");
var nota2CCS = document.getElementById ("CSS2");
var nota3CCS = document.getElementById ("CCS3");



var nota1JS = document.getElementById ("JS1");
var nota2JS = document.getElementById ("JS2");
var nota3JS = document.getElementById ("JS3");




var CCSPromedio = document.getElementById ("CCSPromedio");
var JSPromedio = document.getElementById ("JSPromedio");

//. lectura de datos

nota1HTML = prompt("Ingrese nota 1 HTML:");
nota2HTML = prompt("Ingrese nota 2 HTML:");
nota3HTML = prompt("Ingrese nota 3 HTML:");

nota1CSS = prompt("Ingrese nota 1 CSS:");
nota2CSS = prompt("Ingrese nota 2 CSS:");
nota3CSS = prompt("Ingrese nota 3 CSS:");

nota1JS = prompt("Ingrese nota 1 JS:");
nota2JS = prompt("Ingrese nota 2 JS:");
nota3JS = prompt("Ingrese nota 3 JS:");

// Calculo de los promedio


CSSPromedio =(nota1CCS + nota2CCS + nota3CCS) / 3;
JSPromedio =(nota1JS + nota2JS + nota3JS) / 3;

console.log("Promedio HTML:", HTMLPromedio);
console.log("Promedio CSS:", CSSPromedio);
console.log("PromedioJS:" , JSPromedio);

// Resultado en HTML

HTML1.innerHTML = nota1HTML;
HTML2.innerHTML = nota2HTML;
HTML3.innerHTML = nota3HTML;

CCS1.innerHTML = nota1CSS;
CSS2.innerHTML = nota2CSS;
CCS3.innerHTML = nota3CSS;

JS1.innerHTML = nota1JS;
JS2.innerHTML = nota2JS;
JS3.innerHTML = nota3JS;

HTMLx.innerHTML = HTMLPromedio;
CCSx.innerHTML = CSSPromedio;
JSPx.innerHTML = JSPromedio;
*/

