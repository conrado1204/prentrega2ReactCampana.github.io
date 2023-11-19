const Productos = [
    { id: 1, nombre: "Producto 1", precio: 30, categoria: "A" },
    { id: 2, nombre: "Producto 2", precio: 40, categoria: "B" },
    { id: 3, nombre: "Producto 3", precio: 55, categoria: "C" },
    { id: 4, nombre: "Producto 4", precio: 70, categoria: "D" },
    { id: 5, nombre: "Producto 5", precio: 65, categoria: "D" },
    { id: 6, nombre: "Producto 6", precio: 82, categoria: "A" },
    { id: 7, nombre: "Producto 7", precio: 45, categoria: "C" },
    { id: 8, nombre: "Producto 8", precio: 50, categoria: "D" },
    { id: 9, nombre: "Producto 9", precio: 95, categoria: "A" },
    { id: 10, nombre: "Producto 10", precio: 30, categoria: "B" },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            
            const itemId = parseInt(id, 10);
            const producto = Productos.find((item) => item.id === itemId);
            resolve(producto);
        }, 500);
    });
};


export const getProdByCat = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = Productos.filter(item => item.categoria === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })
}