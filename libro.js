class Libro {
  constructor(nombre, autor, precio, id, stock, cant = 0) {
    this.nombre = nombre;
    this.autor = autor;
    this.precio = precio;
    this.id = id;
    this.stock = stock;
    this.cant = cant;
  }
  hayStock() {
    if (this.stock > 0) {
      this.stock--;
      return true;
    }
    if (libros.stock == 0) {
      console.log("No hay mas en stock");
      return false;
    }
    if (libros.stock < this.cant) {
      console.log("La cantidad ingresada excede el stock");
      return false;
    }
  }
}
