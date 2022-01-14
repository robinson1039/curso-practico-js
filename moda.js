const lista1 =[
    1,
    1,
    2,
    3,
    3,
    3,
    4,
    5
];

const lista1Count = {};

lista1.map(

    function (elem){
        if(lista1Count[elem]){
            lista1Count[elem] +=1;
        }else{
            lista1Count [elem] = 1;
        }
        
    }

);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];

    }
);

const moda = lista1Array[lista1Array.length - 1];