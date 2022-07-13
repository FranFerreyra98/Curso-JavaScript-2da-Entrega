let listaProductos = [
    {
        id: 1,
        nombre: "Branca",
        precio: 950,
        tipo: "Fernet",
    },
    {    
        id: 2,
        nombre: "Bulldog",
        precio: 3750,
        tipo: "Gin",
    },
    {
        id: 3,
        nombre: "Absolut",
        precio: 3300,
        tipo: "Vodka",
    }
];

let carrito = [];

let contenedorProductos = document.getElementById("contenedor-productos");
let tabla;

function inicializarElementos(){
    tabla = document.getElementById("tablaProductos")
}





for(const producto of listaProductos){
    let columna = document.createElement("div")
    columna.className = "col-md-4 mt-3"
    columna.id = `columna-${producto.id}`
    columna.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                <p class="card-text">Precio: <b>${producto.precio}</b></p>
                <p class="card-text">Tipo: <b>${producto.tipo}</b></p>
                <button type="button" id="boton" class="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
    `
    contenedorProductos.append(columna)

}

let boton = document.querySelectorAll("#boton");
console.log(boton);

boton.forEach(btn => {
    btn.addEventListener("click", console.log("Hola"))
})

// function inicializarEventos(){
//     boton.forEach = (btn) => btn.addEventListener("click",console.log("Hola"))
// }

function sumarLista(){
    const boton1 = listaProductos.find((producto) => producto.nombre === "Branca");
    const boton2 = listaProductos.find((producto) => producto.nombre === "Bulldog");
    const boton3 = listaProductos.find((producto) => producto.nombre === "Absolut");
    
        let filaTabla = document.createElement("tr");
        filaTabla.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.tipo}</td>`

        tabla.tBodies[0].append(filaTabla);
    ;
}

function limpiarTabla(){
    while(tabla.rows.length > 1){
        tabla.deleteRow(1);
    }
}

function main(){
    inicializarElementos()
    // inicializarEventos()
}

main()


