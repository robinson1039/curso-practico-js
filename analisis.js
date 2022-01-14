// utils 
function esPar (num){
    return (num % 2 === 0);
}

function calcularMEdiaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElem){
            return valorAcumulado + nuevoElem;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
// calculadora medianas 

function medianaSalarios (lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMEdiaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana general 
const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);


const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%

const spliceStart = (salariosColSorted.length*90) / 100;
spliceCount = salariosColSorted.length - spliceStart;

const salariosColtop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColtop10)

console.log ({
    medianaGeneralCol,
    medianaTop10Col,
}
   
)