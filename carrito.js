class Carrito {
  constructor(nombre = "Usuario", total = 0) {
    this.nombre = nombre;
    this.total = total;
    this.productos = [];
  }

    agregarItem (libros) {
      if (libros.hayStock(libros)) {
        if (this.productos[libros.id] == undefined) {
          this.productos[libros.id] = libros;
        }
        this.productos[libros.id].cant++;
      } else {
        return console.log("No hay stock");
      }
      actualizar();
    };

    precioProducto() {
      let totalP = 0;
      for (let producto of this.productos) {
        if (producto != undefined) {
          totalP += producto.precio * producto.cant;
        }
      }
      this.total = totalP;
      return totalP;
    };

}