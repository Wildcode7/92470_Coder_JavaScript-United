const productos = ["Laptop", "Teclado", "Mouse", "Monitor", "Auriculares"];

// 1. Listar productos
function listarProductos() {
    console.log("=== LISTA DE PRODUCTOS ===");

    for (const producto of productos) {
        console.log("Producto: " + producto);
    }
}

// 2. Agregar al final
function agregarProductoFinal() {
    const nuevoProducto = prompt("Nombre del producto:");

    if (nuevoProducto !== null && nuevoProducto.trim() !== "") {
        productos.push(nuevoProducto.trim());
        console.log("Producto agregado: " + nuevoProducto);
    }
}

// 3. Agregar al principio
function agregarProductoPrincipio() {
    const nuevoProducto = prompt("Nombre del producto:");

    if (nuevoProducto !== null && nuevoProducto.trim() !== "") {
        productos.unshift(nuevoProducto.trim());
        console.log("Producto agregado: " + nuevoProducto);
    }
}

// 4. Eliminar el último
function eliminarUltimoProducto() {
    if (productos.length > 0) {
        const eliminado = productos.pop();
        console.log("Producto eliminado: " + eliminado);
    } else {
        console.log("No hay productos para eliminar.");
    }
}

// 5. Eliminar el primero
function eliminarPrimerProducto() {
    if (productos.length > 0) {
        const eliminado = productos.shift();
        console.log("Producto eliminado: " + eliminado);
    } else {
        console.log("No hay productos para eliminar.");
    }
}

// 6. Buscar producto
function buscarProducto() {
    const buscado = prompt("¿Qué producto deseas buscar?");

    if (buscado !== null) {
        if (productos.includes(buscado)) {
            const posicion = productos.indexOf(buscado);
            console.log("Producto encontrado: " + buscado);
            console.log("Posición en el array: " + posicion);
        } else {
            console.log("El producto no existe en la lista.");
        }
    }
}

// 7. Reemplazar producto
function reemplazarProducto() {
    const productoAnterior = prompt("¿Qué producto deseas reemplazar?");

    if (productoAnterior !== null) {
        const posicion = productos.indexOf(productoAnterior);

        if (posicion !== -1) {
            const productoNuevo = prompt("Escribe el nuevo nombre:");

            if (productoNuevo !== null && productoNuevo.trim() !== "") {  
                productos.splice(posicion, 1, productoNuevo.trim());
                console.log("Producto reemplazado correctamente.");
            }
        } else {
            console.log("El producto no existe en la lista.");
        }
    }
}

// 8. Mensaje de salida
function salirSimulador() {
    console.log("Simulador finalizado.");
    alert("Hasta pronto.");
}

// Menú principal
let opcion = "";

while (opcion !== "8") {
    opcion = prompt(
        "SIMULADOR DE PRODUCTOS\n" +
        "1. Listar productos\n" +
        "2. Agregar producto al final\n" +
        "3. Agregar producto al principio\n" +
        "4. Eliminar último producto\n" +
        "5. Eliminar primer producto\n" +
        "6. Buscar producto\n" +
        "7. Reemplazar producto\n" +
        "8. Salir\n\n" +
        "Elige una opción:"
    );

    if (opcion === null) {
        break;
    }

    switch (opcion) {
        case "1":
            listarProductos();
            break;
        case "2":
            agregarProductoFinal();
            break;
        case "3":
            agregarProductoPrincipio();
            break;
        case "4":
            eliminarUltimoProducto();
            break;
        case "5":
            eliminarPrimerProducto();
            break;
        case "6":
            buscarProducto();
            break;
        case "7":
            reemplazarProducto();
            break;
        case "8":
            salirSimulador();
            break;
        default:
            mostrarOpcionInvalida();
    }
}

function mostrarOpcionInvalida() {
    
    alert("Opción no válida. Intenta nuevamente.");
}





























