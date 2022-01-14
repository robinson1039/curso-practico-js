function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento)/100;
    return precioConDescuento;
}

function discount(){
    const price = document.getElementById('inputPrice');
    const priceValue = price.value

    const discount = document.getElementById('inputDiscount');
    const discountValue = discount.value

    const precioFinal = calcularPrecioConDescuento(priceValue, discountValue)

    const resultP = document.getElementById('resultP');
    resultP.innerHTML = 'El precio con descuento es: $' + precioFinal
}






