# Curso React JS: Proyecto Final
## E-commerce project
Se desarrolló una app de un e-commerce para poder vender ropa de forma online

### Funcionalidad basica de la aplicación

Los productos a disposición se pueden separar en distintas categorías. Si se clickea un producto se podrá ver los detalles del mismo junto a una opción de poder agregar el producto al carrito de compras dentro del cual se detalla el pedido junto al precio total. A su vez , es en el carrito donde se podrá concretar la compra y donde se pedirán los datos del cliente, los cuales serán almacenados junto a los detalles del pedido.

### Información sobre Componentes

#### A continuacion se detallará informacion relevante respecto a los componentes utilizados:

- Navbar: Es el navegador principal de la Tienda, el cual permite ver las distintas categorias que hay y tambien brinda el acceso visible al carrito

- CartWidget: Este componente es el icono del carrito que se ve en el NavBar en donde se muestra el icono junto a la cantidad total de productos agregados al carrito.

- ItemListContainer: Este componente es el contenedor de los productos que se muestran en la tienda y se encarga de recolectar los productos desde el firebase, tambien se encarga de separar los productos en distintas categorias en caso de que se detecte un categoryId en el URL. Este componente hace uso del componente ItemList.

- ItemList: Este componente recibe los items desde el componente ItemListContainer y se encarga de mostrarlos.

- CartContext: Este componente es el contexto en donde toda informacion relacionada a la compra que quiere realizar el cliente se va a almacenar. Tambien se encarga de proveer las funcionalidades basicas al carrito, por ejemplo, el CartContext se encarga de agregar los productos al carrito asi como de eliminarlos.

- Cart: Este componente se encarga de mostrar la informacion del carrito. Es decir, la informacion de la compra que el cliente podria realizar. Se comunica con el CartContext.

- ItemDetailContainer: Este componente permite extraer los detalles de cada producto desde firebase y provee la funcionalidad de brindar el detalle a cada producto individual si son clickeados.

- ItemDetail: Este componente es el que muestra los detalles de cada producto. El mismo esta compuesto por 2 componentes mas:
    - Description: Muestra la descripcion del producto, es decir, su precio, su descripcion, nombre e imagen.
    - ItemCount: Este componente provee la funcionalidad de modificar la cantidad de productos a agregar a carrito asi como el boton de agregar al carrito.
        - ItemQuantitySelector: Permite cambiar la cantidad de productos a agregar

- Checkout: Este componente es el formulario que se tiene que completar tras haber finalizado la compra en el carrito. Al enviar el formulario ya completado, la informacion del ciente es almacenado en el firebase junto a la informacion de su compra.