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
                <p class="card-text">Nombre: <b class="title">${producto.nombre}</b></p>
                <p class="card-text" >Precio: <b class="price">${producto.precio}</b></p>
                <p class="card-text">Tipo: <b class="type">${producto.tipo}</b></p>
                <button type="button" id="boton" class="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
    `
    contenedorProductos.append(columna)

}

let boton = document.querySelectorAll("#boton");
let hola = (e) => {
    console.log(e.target.closest(".card"))
}

boton.forEach(btn => {
    btn.addEventListener(`click`, sumarLista)
})


function sumarLista(e){

    const boton = e.target
    const item = boton.closest(".card")
    const title = item.querySelector(".title").textContent
    const price = item.querySelector(".price").textContent
    const type = item.querySelector(".type").textContent

        let filaTabla = document.createElement("tr");
        filaTabla.innerHTML = `
        <td>${title}</td>
        <td>${price}</td>
        <td>${type}</td>`

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
}

main()


