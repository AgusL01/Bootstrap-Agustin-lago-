let simulador = true

while (simulador) {
    let dolar = 300
    let euro = 250
    let libra = 350
    let monedaElegida = prompt("elige la moneda en la que queiras el cambio: \n1.Dolar \n2.Euro \n3.Libra").toLowerCase
    alert("Seleccionaste tu cambio en" + monedaElegida)
    if (monedaElegida == "dolar") {
        let montoCambiar = Number(prompt("¿Cuanto quieres cambiar?"))
        let montoCambiado = montoCambiar / dolar
        alert("cambiaste " + montoCambiar +" pesos por" + montoCambiado + " dolares")
    } else if (monedaElegida == "euro") {
        let montoCambiar = Number(prompt("¿Cuanto quieres cambiar?"))
        let montoCambiado = montoCambiar / euro
        alert("cambiaste " + montoCambiar + " pesos por" + montoCambiado + " dolares")
} else if (monedaElegida == "libra") {
    let montoCambiar = Number(prompt("¿Cuanto quieres cambiar?"))
    let montoCambiado = montoCambiar / libra
    alert("cambiaste " + montoCambiar + " pesos por" + montoCambiado + " dolares")
}
}