//////////Codigo cuadrado/////////////////
console.group("Cuadrado");

function PerimetroCuadrado (lado) {
    return lado * 4;
} 

function areaCuadrado (lado) {
   return lado * lado;
} 

console.groupEnd();

//////////Codigo Triangulo/////////////////
console.group("Triangulo");

function PerimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura)/2;
} 
console.groupEnd();

//////////Codigo Circulo/////////////////
console.group("Circulo");

function diametroCirculo (radio) {
   return radio*2;
}

const PI = Math.PI;

function PerimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI
} 

function areaCirculo(radio){
   return (radio*radio)*PI;
} 

console.groupEnd();

///////////Interactuar con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("cuadrado");
    const value = input.value;

    const perimetro = PerimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("cuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}