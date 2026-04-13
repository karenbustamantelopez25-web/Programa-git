let libroActual = "";

function leer(titulo, contenido) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("tituloLibro").innerText = titulo;
    document.getElementById("contenidoLibro").innerText = contenido;
}

function cerrar() {
    document.getElementById("modal").style.display = "none";
}

function abrirCompra(libro) {
    libroActual = libro;
    document.getElementById("compraModal").style.display = "flex";
    document.getElementById("libroSeleccionado").innerText = "Libro: " + libro;
}

function cerrarCompra() {
    document.getElementById("compraModal").style.display = "none";
}

function confirmarCompra() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let direccion = document.getElementById("direccion").value;
    let pago = document.getElementById("pago").value;

    if (nombre === "" || correo === "" || direccion === "") {
        alert("Por favor completa todos los campos");
        return;
    }

    alert("Compra realizada con éxito 📚\nLibro: " + libroActual +
        "\nNombre: " + nombre);

    cerrarCompra();
}