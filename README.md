# Pre-entrega 5: Instanciando Objetos

## Descripción del proyecto

Este proyecto consiste en un simulador de inventario y ventas desarrollado con JavaScript como parte de las actividades del curso de Coderhouse.

El objetivo es administrar productos mediante un menú interactivo, aplicando los conceptos de programación orientada a objetos, arrays, funciones, condicionales, ciclos y validación de datos.

En esta entrega se incorpora la clase `Producto`, que permite crear instancias con sus propios datos y gestionar el stock mediante un método.

## Objetivos

- Crear una clase utilizando `class`.
- Definir un constructor con propiedades y utilizar `this`.
- Instanciar objetos mediante `new`.
- Implementar un método que modifique el estado de un objeto.
- Integrar los objetos con las operaciones del simulador.
- Validar los datos ingresados por el usuario.

## Tecnologías utilizadas

- HTML5
- JavaScript
- Git
- GitHub

## Estructura del proyecto

```text
proyecto/
├── index.html
├── main.js
└── README.md
```

> Nota: la ubicación de `main.js` en este esquema es ilustrativa. Conserva la ruta real de tu archivo dentro del proyecto.

## Clase Producto

La clase `Producto` representa cada artículo del inventario.

### Propiedades

| Propiedad | Descripción |
|---|---|
| `id` | Identificador del producto. |
| `nombre` | Nombre del producto. |
| `precio` | Precio unitario. |
| `categoria` | Categoría del producto. |
| `stock` | Cantidad disponible en inventario. |

### Método `vender(cantidad)`

Este método permite realizar una venta cuando la cantidad solicitada es válida.

Comprueba que la cantidad sea un número entero, mayor que cero y que no supere el stock disponible. Si la validación se cumple, descuenta las unidades vendidas y devuelve `true`. En caso contrario, devuelve `false`.

## Productos iniciales

El inventario comienza con cinco instancias de la clase `Producto`:

- Laptop
- Teclado
- Mouse
- Monitor
- Auriculares

Cada producto cuenta con su identificador, nombre, precio, categoría y stock inicial.

## Funcionalidades del simulador

El menú permite realizar las siguientes operaciones:

1. **Listar productos:** muestra los productos registrados.
2. **Agregar producto al final:** incorpora un nuevo producto al final del array.
3. **Agregar producto al principio:** incorpora un nuevo producto al inicio del array.
4. **Eliminar último producto:** utiliza `pop()`.
5. **Eliminar primer producto:** utiliza `shift()`.
6. **Buscar producto:** utiliza `find()` e `indexOf()` para localizar y consultar un producto.
7. **Reemplazar producto:** utiliza `findIndex()` y `splice()` para sustituir un producto conservando su identificador.
8. **Vender producto:** valida la cantidad, descuenta el stock y calcula el total de la compra.
9. **Salir:** muestra el mensaje de despedida.

## Cálculo del total de la compra

Cuando la venta es válida, el simulador calcula el importe mediante la siguiente fórmula:

**Total de la compra = precio unitario × cantidad comprada**

El resultado se muestra con formato numérico para pesos colombianos. También se informa el producto vendido, las unidades compradas y el stock restante.

Por ejemplo, si se compran dos Mouse a $65.000 cada uno, el total es de $130.000.

## Validaciones

El simulador incluye validaciones para:

- Evitar nombres vacíos.
- Comprobar que el precio sea un número válido mayor que cero.
- Verificar que el stock sea un número entero igual o mayor que cero.
- Evitar ventas con cantidades no enteras, negativas, iguales a cero o superiores al stock disponible.
- Informar cuando un producto no existe o cuando los datos ingresados no son válidos.
- Evitar eliminaciones cuando el inventario está vacío.

## Ejecución del proyecto

1. Descargar o clonar el repositorio.
2. Abrir el proyecto en Visual Studio Code.
3. Abrir `index.html` en el navegador, por ejemplo mediante Live Server.
4. Interactuar con el menú y seguir las instrucciones de los cuadros de diálogo.
5. Consultar la consola del navegador para revisar los resultados de las operaciones.

El archivo HTML carga el código JavaScript mediante la etiqueta `script` con el atributo `defer`.

## Autor

**Milton Developer**

Tecnólogo en Sistemas en formación como desarrollador Full Stack.

## Propósito académico

Proyecto desarrollado con fines educativos para practicar la creación de clases e instancias, la manipulación de arrays, el uso de métodos, la validación de datos y la integración de la programación orientada a objetos en un simulador funcional.