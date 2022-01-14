function promedio(lista){

    let sumaLista = 0;

    for (i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    
    const promList = sumaLista/lista.length;

    return promList;
}


