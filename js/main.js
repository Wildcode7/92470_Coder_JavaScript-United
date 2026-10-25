 // Clase que representa un producto del inventario.
class Producto {
    // El constructor recibe los datos iniciales de cada producto.
    constructor(id, nombre, precio, categoria, stock) {
        this.id = id;                 // Identificador del producto.
        this.nombre = nombre;         // Nombre del producto.
        this.precio = precio;         // Precio del producto.
        this.categoria = categoria;   // Categoría del producto.
        this.stock = stock;           // Cantidad disponible.
    }

    // Valida una venta y descuenta las unidades del inventario.
    vender(cantidad) {
        // La cantidad debe ser un entero positivo y no superar el stock.
        if (Number.isInteger(cantidad) && cantidad > 0 && cantidad <= this.stock) {
            this.stock -= cantidad;   // Actualiza el stock después de la venta.
            return true;              // Indica que la venta fue exitosa.
        }

        return false;                 // Indica que la venta no es válida.
    }
}

// Array que almacena las instancias de Producto.
const productos = [
    new Producto(1, "Laptop", 2500000, "Computadores", 7),
    new Producto(2, "Teclado", 120000, "Perifericos", 10),
    new Producto(3, "Mouse", 65000, "Perifericos", 15),
    new Producto(4, "Monitor", 850000, "Pantallas", 5),
    new Producto(5, "Auriculares", 180000, "Audio", 8)
];

// Recorre el inventario y muestra el nombre de cada producto.
function listarProductos() {
    console.log("=== LISTA DE PRODUCTOS ===");

    for (const producto of productos) {
        console.log(producto.nombre);
    }
}

// Variable que almacena la opción seleccionada en el menú.
let opcion = "";

// Mantiene el menú activo hasta que se seleccione la opción 9.
while (opcion !== "9") {
    // Solicita al usuario la operación que desea realizar.
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

    // Termina el ciclo si el usuario cancela el menú.
    if (opcion === null) {
        break;
    }

    // Ejecuta la acción correspondiente a la opción elegida.
    switch (opcion) {
        case "1":
            // Muestra los productos registrados.
            listarProductos();
            break;

        case "2": {
            // Solicita los datos del producto que se agregará al final.
            const nombre = prompt("Nombre del producto:");

            if (nombre !== null && nombre.trim() !== "") {
                const entradaPrecio = prompt("Precio del producto:");
                if (entradaPrecio === null) break;

                const categoria = prompt("Categoría del producto:");
                if (categoria === null) break;

                const entradaStock = prompt("Stock del producto:");
                if (entradaStock === null) break;

                // Convierte el precio y el stock de texto a números.
                const precio = Number(entradaPrecio);
                const stock = Number(entradaStock);

                // Comprueba que los datos ingresados sean válidos.
                if (
                    categoria !== null &&
                    categoria.trim() !== "" &&
                    Number.isFinite(precio) &&
                    precio > 0 &&
                    Number.isInteger(stock) &&
                    stock >= 0
                ) {
                    // Crea una instancia nueva con los datos validados.
                    const nuevoProducto = new Producto(
                        productos.length + 1,
                        nombre.trim(),
                        precio,
                        categoria.trim(),
                        stock
                    );

                    // Agrega el producto al final del array.
                    productos.push(nuevoProducto);
                    console.log("Producto agregado:", nuevoProducto);
                } else {
                    console.log("Datos inválidos. No se agregó el producto.");
                }
            }

            break;
        }

        case "3": {
            // Solicita los datos del producto que se agregará al principio.
            const nombre = prompt("Nombre del producto:");

            if (nombre !== null && nombre.trim() !== "") {
                const entradaPrecio = prompt("Precio del producto:");
                const categoria = prompt("Categoría del producto:");
                const entradaStock = prompt("Stock del producto:");

                // Verifica que las entradas no hayan sido canceladas.
                if (
                    entradaPrecio !== null &&
                    entradaStock !== null &&
                    categoria !== null &&
                    categoria.trim() !== ""
                ) {
                    const precio = Number(entradaPrecio);
                    const stock = Number(entradaStock);

                    // Valida el precio y el stock.
                    if (
                        Number.isFinite(precio) &&
                        precio > 0 &&
                        Number.isInteger(stock) &&
                        stock >= 0
                    ) {
                        // Genera un ID superior al máximo ID existente.
                        const nuevoProducto = new Producto(
                            Math.max(0, ...productos.map(producto => producto.id)) + 1,
                            nombre.trim(),
                            precio,
                            categoria.trim(),
                            stock
                        );

                        // Inserta el producto al inicio del array.
                        productos.unshift(nuevoProducto);
                        console.log("Producto agregado al principio:", nuevoProducto);
                    } else {
                        console.log("Precio o stock inválido. No se agregó el producto.");
                    }
                }
            }

            break;
        }

        case "4": {
            // Elimina y devuelve el último producto del array.
            if (productos.length > 0) {
                const eliminado = productos.pop();
                console.log("Producto eliminado:", eliminado.nombre);
            } else {
                console.log("No hay productos para eliminar.");
            }

            break;
        }

        case "5": {
            // Elimina y devuelve el primer producto del array.
            if (productos.length > 0) {
                const eliminado = productos.shift();
                console.log("Producto eliminado:", eliminado.nombre);
            } else {
                console.log("No hay productos para eliminar.");
            }

            break;
        }

        case "6": {
            // Solicita el nombre del producto que se desea buscar.
            const buscado = prompt("¿Qué producto deseas buscar?");

            if (buscado !== null && buscado.trim() !== "") {
                // Busca el producto sin distinguir mayúsculas y minúsculas.
                const encontrado = productos.find(
                    producto =>
                        producto.nombre.toLowerCase() === buscado.trim().toLowerCase()
                );

                if (encontrado) {
                    // Obtiene la posición del producto encontrado en el array.
                    const posicion = productos.indexOf(encontrado);

                    // Muestra la información del producto.
                    console.log("Producto encontrado:", encontrado.nombre);
                    console.log("Precio:", encontrado.precio);
                    console.log("Categoría:", encontrado.categoria);
                    console.log("Stock:", encontrado.stock);
                    console.log("Posición en el array:", posicion);
                } else {
                    console.log("El producto no existe en la lista.");
                }
            }

            break;
        }

        case "7": {
            // Solicita el nombre del producto que se desea reemplazar.
            const productoAnterior = prompt("¿Qué producto deseas reemplazar?");

            if (productoAnterior !== null && productoAnterior.trim() !== "") {
                // Busca el índice del producto que se va a sustituir.
                const posicion = productos.findIndex(
                    producto =>
                        producto.nombre.toLowerCase() === productoAnterior.trim().toLowerCase()
                );

                if (posicion !== -1) {
                    const nombre = prompt("Nombre del nuevo producto:");

                    if (nombre !== null && nombre.trim() !== "") {
                        const entradaPrecio = prompt("Precio del nuevo producto:");
                        if (entradaPrecio === null) break;

                        const categoria = prompt("Categoría del nuevo producto:");
                        if (categoria === null) break;

                        const entradaStock = prompt("Stock del nuevo producto:");
                        if (entradaStock === null) break;

                        const precio = Number(entradaPrecio);
                        const stock = Number(entradaStock);

                        // Comprueba los datos del nuevo producto antes de reemplazar.
                        if (
                            categoria !== null &&
                            categoria.trim() !== "" &&
                            Number.isFinite(precio) &&
                            precio > 0 &&
                            Number.isInteger(stock) &&
                            stock >= 0
                        ) {
                            // Crea el reemplazo conservando el ID anterior.
                            const productoNuevo = new Producto(
                                productos[posicion].id,
                                nombre.trim(),
                                precio,
                                categoria.trim(),
                                stock
                            );

                            // Elimina un elemento e inserta el nuevo en esa posición.
                            productos.splice(posicion, 1, productoNuevo);
                            console.log("Producto reemplazado correctamente:", productoNuevo);
                        } else {
                            console.log("Datos inválidos. No se reemplazó el producto.");
                        }
                    }
                } else {
                    console.log("El producto no existe en la lista.");
                }
            }

            break;
        }

        case "8": {
            // Solicita el nombre del producto que se desea comprar.
            const nombreBuscado = prompt("¿Qué producto deseas comprar?");

            if (nombreBuscado !== null && nombreBuscado.trim() !== "") {
                // Busca el producto por nombre, sin distinguir mayúsculas y minúsculas.
                const productoEncontrado = productos.find(
                    producto =>
                        producto.nombre.toLowerCase() === nombreBuscado.trim().toLowerCase()
                );

                if (productoEncontrado) {
                    const entradaCantidad = prompt("¿Cuántas unidades deseas comprar?");

                    if (entradaCantidad !== null) {
                        if (entradaCantidad.trim() === "") {
                            console.log("Debes ingresar una cantidad.");
                        } else {
                            // Convierte la cantidad ingresada a un número.
                            const cantidad = Number(entradaCantidad);

                            // El método vender valida la cantidad y actualiza el stock.
                            if (productoEncontrado.vender(cantidad)) {

                            // Calcula el valor total de las unidades compradas.
                            const total = productoEncontrado.precio * cantidad;
                            console.log("Total de la compra: $" + total.toLocaleString("es-CO"));

                                console.log("Venta realizada correctamente.");
                                console.log("Producto:", productoEncontrado.nombre);
                                console.log("Unidades vendidas:", cantidad);
                                console.log("Stock restante:", productoEncontrado.stock);
                            } else {
                                console.log(
                                    "Venta no válida. Revisa la cantidad y el stock disponible."
                                );
                            }
                        }
                    }
                } else {
                    console.log("El producto no existe en la lista.");
                }
            }

            break;
        }

        case "9":
            // Muestra el mensaje de despedida.
            alert("Hasta pronto.");
            break;

        default:
            // Informa que la opción ingresada no existe.
            alert("Opción no válida. Intenta nuevamente.");
    }
}

