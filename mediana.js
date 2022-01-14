function promedio(lista){

    let sumaLista = 0;

    for (i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    
    const promList = sumaLista/lista.length;

    return promList;
}


const lista1 = [
    100,
    200,
    300,
    500
];

const mitadLista1 = parseInt (lista1.length/2);

function esPar (n){
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
    const elem1 = lista1[mitadLista1 -1] ;
    const elem2 = lista1[mitadLista1];

    const promedio1y2 = promedio ([elem1, elem2]);
    mediana = promedio1y2;
}else{
    mediana = lista1[mitadLista1];
}