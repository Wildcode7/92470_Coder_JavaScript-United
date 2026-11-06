// Clase que representa un producto del inventario.
class Producto {
    constructor(id, nombre, precio, categoria, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    vender(cantidad) {
    if (cantidad <= 0) {
        return false;
    }

    if (cantidad % 1 !== 0) {
        return false;
    }

    if (cantidad > this.stock) {
        return false;
    }

    this.stock -= cantidad;
    return true;
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

function obtenerNuevoId() {
    let idMayor = 0;

    for (const producto of productos) {
    if (producto.id > idMayor) {
        idMayor = producto.id;
    }
}

    return idMayor + 1;
}

// Agrega un producto al final del inventario.
function agregarProductoFinal() {
    const nombre = prompt("Nombre del producto:");

    if (nombre === null || nombre.trim() === "") {
        return false;
    }

    const entradaPrecio = prompt("Precio del producto:");

    if (entradaPrecio === null) {
        return false;
    }

    const categoria = prompt("Categoría del producto:");

    if (categoria === null || categoria.trim() === "") {
        return false;
    }

    const entradaStock = prompt("Stock del producto:");

    if (entradaStock === null || entradaStock.trim() === "") {
        return false;
    }

    const precio = Number(entradaPrecio);
    const stock = Number(entradaStock);

// Validar precio
    if (isNaN(precio)) return false;
    if (precio <= 0) return false;

// Validar stock
    if (isNaN(stock)) return false;
    if (stock % 1 !== 0) return false;
    if (stock < 0) return false;
    
        const nuevoProducto = new Producto(
            obtenerNuevoId(),
            nombre.trim(),
            precio,
            categoria.trim(),
            stock
        );

        productos.push(nuevoProducto);
        console.log("Producto agregado:", nuevoProducto);
    
}

// Agrega un producto al principio del inventario.
function agregarProductoInicio() {
    const nombre = prompt("Nombre del producto:");

    if (nombre === null || nombre.trim() === "") {
        return false;
    }

    const entradaPrecio = prompt("Precio del producto:");

    if (entradaPrecio === null) {
        return false;
    }

    const categoria = prompt("Categoría del producto:");

    if (categoria === null || categoria.trim() === "") {
        return false;
    }

    const entradaStock = prompt("Stock del producto:");

    if (entradaStock === null || entradaStock.trim() === "") {
        return false;
    }

    const precio = Number(entradaPrecio);
    const stock = Number(entradaStock);

    // Validar precio
if (isNaN(precio)) return false;
if (precio <= 0) return false;

// Validar stock
if (isNaN(stock)) return false;
if (stock % 1 !== 0) return false;
if (stock < 0) return false;
    
        const nuevoProducto = new Producto(
            obtenerNuevoId(),
            nombre.trim(),
            precio,
            categoria.trim(),
            stock
        );

        productos.unshift(nuevoProducto);
        console.log("Producto agregado al principio:", nuevoProducto);
    
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

    if (buscado === null || buscado.trim() === "") {
        return false;
    }

    let encontrado = null;

    for (const producto of productos) {
        if (
            producto.nombre.toLowerCase() ===
            buscado.trim().toLowerCase()
        ) {
            encontrado = producto;
            break;
        }
    }

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

// Busca un producto por su ID utilizando find().
function buscarProductoPorId() {
    const entradaId = prompt("Ingresa el ID del producto:");

    if (entradaId === null || entradaId.trim() === "") {
        return false;
    }

    const id = Number(entradaId);

    const encontrado = productos.find(
        producto => producto.id === id
    );

    if (encontrado) {
        console.log("Producto encontrado:", encontrado);
    } else {
        console.log("No existe un producto con ese ID.");
    }
}

// Filtra productos por categoría utilizando filter().
function filtrarPorCategoria() {
    const categoria = prompt("Ingresa la categoría:");

    if (categoria === null || categoria.trim() === "") {
        return false;
    }

    const encontrados = productos.filter(
        producto =>
            producto.categoria.toLowerCase() ===
            categoria.trim().toLowerCase()
    );

    if (encontrados.length > 0) {
        console.log("Productos encontrados:", encontrados);
    } else {
        console.log("No hay productos en esa categoría.");
    }
}

// Genera una lista de precios con descuento utilizando map().
function mostrarPreciosConDescuento() {
    const entradaDescuento = prompt("Ingresa el porcentaje de descuento:");

    if (entradaDescuento === null || entradaDescuento.trim() === "") {
        return false;
    }

    const descuento = Number(entradaDescuento);

    if (isNaN(descuento) || descuento <= 0 || descuento >= 100) {
        console.log("Ingresa un porcentaje mayor que 0 y menor que 100.");
        return false;
    }

    const productosConDescuento = productos.map(producto => ({
        nombre: producto.nombre,
        precioOriginal: producto.precio,
        precioConDescuento: producto.precio - (producto.precio * descuento / 100)
    }));

    console.log("Precios con descuento:", productosConDescuento);
}

// Reemplaza un producto existente.
function reemplazarProducto() {
    const productoAnterior = prompt("¿Qué producto deseas reemplazar?");

    if (
        productoAnterior === null ||
        productoAnterior.trim() === ""
    ) {
        return false;
    }

    let posicion = -1;
let indice = 0;

for (const producto of productos) {
    if (
        producto.nombre.toLowerCase() ===
        productoAnterior.trim().toLowerCase()
    ) {
        posicion = indice;
        break;
    }

    indice++;
}

    if (posicion === -1) {
        console.log("El producto no existe en la lista.");
        return false;
    }

    const nombre = prompt("Nombre del nuevo producto:");

    if (nombre === null || nombre.trim() === "") {
        return false;
    }

    const entradaPrecio = prompt("Precio del nuevo producto:");

    if (entradaPrecio === null) {
        return false;
    }


    const categoria = prompt("Categoría del nuevo producto:");

    if (categoria === null || categoria.trim() === "") {
        return false;
    }


    const entradaStock = prompt("Stock del nuevo producto:");

    if (entradaStock === null || entradaStock.trim() === "") {
        return false;
    }

    const precio = Number(entradaPrecio);
    const stock = Number(entradaStock);

    // Validar precio
if (isNaN(precio)) return false;
if (precio <= 0) return false;

// Validar stock
if (isNaN(stock)) return false;
if (stock % 1 !== 0) return false;
if (stock < 0) return false;
    
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
}

// Procesa la venta de un producto.
function venderProducto() {
    const nombreBuscado = prompt("¿Qué producto deseas comprar?");

    if (
        nombreBuscado === null ||
        nombreBuscado.trim() === ""
    ) {
        return false;
    }


    let productoEncontrado = null;

    for (const producto of productos) {
    if (
        producto.nombre.toLowerCase() ===
        nombreBuscado.trim().toLowerCase()
    ) {
        productoEncontrado = producto;
        break;
    }
}

    if (!productoEncontrado) {
        console.log("El producto no existe en la lista.");
        return false;
    }


    const entradaCantidad = prompt("¿Cuántas unidades deseas comprar?");

    if (entradaCantidad === null) {
        return false;
    }

    if (entradaCantidad.trim() === "") {
        console.log("Debes ingresar una cantidad.");
        return false;
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

let opcion = "";

while (opcion !== "12") {
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
            "9. Buscar producto por ID\n" +
            "10. Filtrar productos por categoría\n" +
            "11. Mostrar precios con descuento\n" +
            "12. Salir\n\n" +            
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
            buscarProductoPorId();
            break;

        case "10":
            filtrarPorCategoria();
            break;

        case "11":
            mostrarPreciosConDescuento();
            break;

        case "12":
            salir();
            break;

        default:
            console.log("Opción no válida. Intenta nuevamente.");
    }
}

