function leer() {
document.getElementById("modal").style.display = "flex";
}

function cerrar() {
document.getElementById("modal").style.display = "none";
}

function abrirCompra() {
document.getElementById("compraModal").style.display = "flex";
}

function cerrarCompra() {
document.getElementById("compraModal").style.display = "none";
}

function confirmarCompra() {
alert("Compra realizada con éxito📚");
document.getElementById("compraModal").style.display = "none";
}