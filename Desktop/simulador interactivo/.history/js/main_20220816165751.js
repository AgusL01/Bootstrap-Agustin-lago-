let simulador = true

while (simulador) {
const listaPersonas = []

    let dolar = 300
    let euro = 250
    let libra = 350
let nombres = prompt("Ingrese su nombre completo para consinuar la operacion")
listaPersonas.push(nombres);
console.log(listadePersonas.length);
    let monedaElegida = prompt(nombres + "elige la moneda en la que queiras el cambio: \n1.Dolar \n2.Euro \n3.Libra").toLowerCase()
    alert("Seleccionaste tu cambio en " + monedaElegida)
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
    if (confirm("¿ Desea hacer otra operacion?")){
            alert("Muy bien!! \n vamos con las siguiente operacion")
    } else{
        break
    }
}
