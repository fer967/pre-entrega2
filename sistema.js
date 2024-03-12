// llevamos la logica para agregar, listar, servicios

class Sistema {
    constructor() {              // constructor vacio, el sistema no necesita datos del usuario
        this.servicios = []
    }
    // metodos
    solicitar_servicio() {                          // pedir descripcion y prioridad                        
        let desc = prompt("ingrese descripcion").toLowerCase()
        while (desc == "") {
            desc = prompt("por favor ingrese descripcion").toLowerCase()
        }
        if(desc=="corte" || desc== "lavado" || desc== "nutricion" || desc== "manicuria" || desc== "pedicuria" || desc== "depilacion"){
            let priori = Number(prompt("ingrese orden de prioridad (del 1 al 6)"))
        while (isNaN(priori) || (priori < 1 || priori > 6)) {
            alert("dato incorrecto")
            priori = Number(prompt("ingrese orden de prioridad (del 1 al 6)"))
        }
        this.servicios.push(new Servicio(desc, priori))
        }
        else{
            alert("descripcion incorrecta, ingrese de nuevo")
        }
    }
    listar_servicio() {
        this.servicios.sort((a, b) => a.priori - b.priori)         // sort ordena nros o string, le tengo que decir que ordene sobre 1 propiedad 
        let lista = ""                                          // del objeto
        this.servicios.forEach((servicio) => {
            lista += `${servicio.descripcion} - ${servicio.prioridad}\n`
        })
        alert(lista);
    }
}