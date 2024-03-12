// menu para que el usuario se guie y solicite servicios

let sistema = new Sistema();       // instanciamos objeto

let usuario = prompt("Ingrese su nombre").toUpperCase()
alert(usuario + " bienvenida/o a nuestro salon de estetica integral")
alert(`Estos son nuestros servicios:\n_Corte \n_Lavado \n_Nutricion \n_Manicuria \n_Pedicuria \n_Depilacion`)
while (true) {
    let opc = prompt(`ingrese opcion
    1. solicitar servicio
    2. listar servicio
    0. salir del sistema`)
    if (opc < 0 || opc > 2) {
        alert("numero incorrecto, ingrese de nuevo")
    } else
        if (opc == "1") {
            sistema.solicitar_servicio()
        } else if (opc == "2") {
            sistema.listar_servicio()
        }
        else if (opc == "0") {
            alert("salir")
            break;
        }
}
