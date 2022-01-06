//////////Codigo cuadrado/////////////////
console.group("Cuadrado");

function PerimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

//////////Codigo Triangulo/////////////////
console.group("Triangulo");

function PerimetroTriangulo(lado1, lado2, base) {   
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

//////////Codigo Circulo/////////////////
console.group("Circulo");

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;

function PerimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

///////////Interactuar con el HTML

/////////////////////////////Cuadrado
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

/////////////////////////////Triangulo
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("triangulo1");
  const value1 = Number(input1.value);

  const input2 = document.getElementById("triangulo2");
  const value2 = Number(input2.value);

  const input3 = document.getElementById("base");
  const value3 = Number(input3.value);

  const perimetro1 = PerimetroTriangulo(value1, value2, value3);
  alert(perimetro1);
}

function calcularAreaTriangulo() {
  const input5 = document.getElementById("base");
  const value5 = input5.value;
  const input4 = document.getElementById("altura");
  const value4 = input4.value;

  const area1 = areaTriangulo(value5, value4);
  alert(area1);
}

/////////////////////////////Circulo

function calcularDiametroCirculo() {
    const input = document.getElementById("radio");
    const value = input.value;
  
    const diametro = diametroCirculo(value);
    alert(diametro);
  }

  function calcularPerimetroCirculo() {
    const input = document.getElementById("radio");
    const value = input.value;
  
    const perimetro = PerimetroCirculo(value);
    alert(perimetro);
  }

  function calcularAreaCirculo() {
    const input = document.getElementById("radio");
    const value = input.value;
  
    const area = areaCirculo(value);
    alert(area);
  }
