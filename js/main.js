// Clase que representa un producto del inventario.
class Producto {
    constructor(id, nombre, precio, categoria, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    // Valida la venta y actualiza el stock.
    vender(cantidad) {
        if (
            Number.isInteger(cantidad) &&
            cantidad > 0 &&
            cantidad <= this.stock
        ) {
            this.stock -= cantidad;
            return true;
        }

        return false;
    }
}

// Inventario inicial.
const productos = [
    new Producto(1, "Laptop", 2500000, "Computadores", 7),
    new Producto(2, "Teclado", 120000, "Perifericos", 10),
    new Producto(3, "Mouse", 65000, "Perifericos", 15),
    new Producto(4, "Monitor", 850000, "Pantallas", 5),
    new Producto(5, "Auriculares", 180000, "Audio", 8)
];

// Muestra todos los productos.
function listarProductos() {
    console.log("=== LISTA DE PRODUCTOS ===");

    for (const producto of productos) {
        console.log(producto.nombre);
    }
}

// Genera un ID nuevo sin repetir los existentes.
function obtenerNuevoId() {
    return Math.max(0, ...productos.map(producto => producto.id)) + 1;
}

// Agrega un producto al final del inventario.
function agregarProductoFinal() {
    const nombre = prompt("Nombre del producto:");

    if (nombre === null || nombre.trim() === "") return;

    const entradaPrecio = prompt("Precio del producto:");
    if (entradaPrecio === null) return;

    const categoria = prompt("Categoría del producto:");
    if (categoria === null) return;

    const entradaStock = prompt("Stock del producto:");
    if (entradaStock === null) return;

    const precio = Number(entradaPrecio);
    const stock = Number(entradaStock);

    if (
        categoria.trim() !== "" &&
        Number.isFinite(precio) &&
        precio > 0 &&
        Number.isInteger(stock) &&
        stock >= 0
    ) {
        const nuevoProducto = new Producto(
            obtenerNuevoId(),
            nombre.trim(),
            precio,
            categoria.trim(),
            stock
        );

        productos.push(nuevoProducto);
        console.log("Producto agregado:", nuevoProducto);
    } else {
        console.log("Datos inválidos. No se agregó el producto.");
    }
}

// Agrega un producto al principio del inventario.
function agregarProductoInicio() {
    const nombre = prompt("Nombre del producto:");

    if (nombre === null || nombre.trim() === "") return;

    const entradaPrecio = prompt("Precio del producto:");
    if (entradaPrecio === null) return;

    const categoria = prompt("Categoría del producto:");
    if (categoria === null || categoria.trim() === "") return;

    const entradaStock = prompt("Stock del producto:");
    if (entradaStock === null) return;

    const precio = Number(entradaPrecio);
    const stock = Number(entradaStock);

    if (
        Number.isFinite(precio) &&
        precio > 0 &&
        Number.isInteger(stock) &&
        stock >= 0
    ) {
        const nuevoProducto = new Producto(
            obtenerNuevoId(),
            nombre.trim(),
            precio,
            categoria.trim(),
            stock
        );

        productos.unshift(nuevoProducto);
        console.log("Producto agregado al principio:", nuevoProducto);
    } else {
        console.log("Precio o stock inválido. No se agregó el producto.");
    }
}

// Elimina el último producto.
function eliminarUltimoProducto() {
    if (productos.length > 0) {
        const eliminado = productos.pop();
        console.log("Producto eliminado:", eliminado.nombre);
    } else {
        console.log("No hay productos para eliminar.");
    }
}

// Elimina el primer producto.
function eliminarPrimerProducto() {
    if (productos.length > 0) {
        const eliminado = productos.shift();
        console.log("Producto eliminado:", eliminado.nombre);
    } else {
        console.log("No hay productos para eliminar.");
    }
}

// Busca un producto por su nombre.
function buscarProducto() {
    const buscado = prompt("¿Qué producto deseas buscar?");

    if (buscado === null || buscado.trim() === "") return;

    const encontrado = productos.find(
        producto =>
            producto.nombre.toLowerCase() === buscado.trim().toLowerCase()
    );

    if (encontrado) {
        console.log("Producto encontrado:", encontrado.nombre);
        console.log("Precio:", encontrado.precio);
        console.log("Categoría:", encontrado.categoria);
        console.log("Stock:", encontrado.stock);
        console.log("Posición en el array:", productos.indexOf(encontrado));
    } else {
        console.log("El producto no existe en la lista.");
    }
}

// Reemplaza un producto existente.
function reemplazarProducto() {
    const productoAnterior = prompt("¿Qué producto deseas reemplazar?");

    if (
        productoAnterior === null ||
        productoAnterior.trim() === ""
    ) return;

    const posicion = productos.findIndex(
        producto =>
            producto.nombre.toLowerCase() ===
            productoAnterior.trim().toLowerCase()
    );

    if (posicion === -1) {
        console.log("El producto no existe en la lista.");
        return;
    }

    const nombre = prompt("Nombre del nuevo producto:");

    if (nombre === null || nombre.trim() === "") return;

    const entradaPrecio = prompt("Precio del nuevo producto:");
    if (entradaPrecio === null) return;

    const categoria = prompt("Categoría del nuevo producto:");
    if (categoria === null) return;

    const entradaStock = prompt("Stock del nuevo producto:");
    if (entradaStock === null) return;

    const precio = Number(entradaPrecio);
    const stock = Number(entradaStock);

    if (
        categoria.trim() !== "" &&
        Number.isFinite(precio) &&
        precio > 0 &&
        Number.isInteger(stock) &&
        stock >= 0
    ) {
        const productoNuevo = new Producto(
            productos[posicion].id,
            nombre.trim(),
            precio,
            categoria.trim(),
            stock
        );

        productos.splice(posicion, 1, productoNuevo);

        console.log(
            "Producto reemplazado correctamente:",
            productoNuevo
        );
    } else {
        console.log("Datos inválidos. No se reemplazó el producto.");
    }
}

// Procesa la venta de un producto.
function venderProducto() {
    const nombreBuscado = prompt("¿Qué producto deseas comprar?");

    if (
        nombreBuscado === null ||
        nombreBuscado.trim() === ""
    ) return;

    const productoEncontrado = productos.find(
        producto =>
            producto.nombre.toLowerCase() ===
            nombreBuscado.trim().toLowerCase()
    );

    if (!productoEncontrado) {
        console.log("El producto no existe en la lista.");
        return;
    }

    const entradaCantidad = prompt("¿Cuántas unidades deseas comprar?");

    if (entradaCantidad === null) return;

    if (entradaCantidad.trim() === "") {
        console.log("Debes ingresar una cantidad.");
        return;
    }

    const cantidad = Number(entradaCantidad);

    if (productoEncontrado.vender(cantidad)) {
        console.log("Venta realizada correctamente.");
        console.log("Producto:", productoEncontrado.nombre);
        console.log("Unidades vendidas:", cantidad);
        console.log("Stock restante:", productoEncontrado.stock);
        console.log(
            "Total de la venta:",
            productoEncontrado.precio * cantidad
        );
    } else {
        console.log(
            "Venta no válida. Revisa la cantidad y el stock disponible."
        );
    }
}

// Finaliza el simulador.
function salir() {
    alert("Hasta pronto.");
}

// Menú principal.
let opcion = "";

while (opcion !== "9") {
    opcion = prompt(
        "SIMULADOR DE PRODUCTOS\n" +
        "1. Listar productos\n" +
        "2. Agregar producto al final\n" +
        "3. Agregar producto al principio\n" +
        "4. Eliminar último producto\n" +
        "5. Eliminar primer producto\n" +
        "6. Buscar producto\n" +
        "7. Reemplazar producto\n" +
        "8. Vender producto\n" +
        "9. Salir\n\n" +
        "Elige una opción:"
    );

    if (opcion === null) break;

    switch (opcion) {
        case "1":
            listarProductos();
            break;

        case "2":
            agregarProductoFinal();
            break;

        case "3":
            agregarProductoInicio();
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
            venderProducto();
            break;

        case "9":
            salir();
            break;

        default:
            alert("Opción no válida. Intenta nuevamente.");
    }
}


