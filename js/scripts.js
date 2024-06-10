let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById('carrito-list');
    const carritoCount = document.getElementById('carrito-count');
    carritoElement.innerHTML = '';
    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger btn-sm';
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarDelCarrito(index);
        li.appendChild(botonEliminar);
        carritoElement.appendChild(li);
    });
    carritoCount.textContent = carrito.length;
}

function enviarPorWhatsApp() {
    const numero = '5493484698036'; // Reemplazar con el número de teléfono destino
    let mensaje = 'Hola, me gustaría comprar estos productos:\n';
    carrito.forEach(producto => {
        mensaje += `- ${producto.nombre} - $${producto.precio}\n`;
    });
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// Función para buscar productos
function buscarProductos() {
    const input = document.getElementById('buscador').value.toLowerCase();
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        const nombre = producto.querySelector('p').textContent.toLowerCase();
        const descripcion = producto.querySelectorAll('p')[1].textContent.toLowerCase();
        if (nombre.includes(input) || descripcion.includes(input)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

document.getElementById('buscador').addEventListener('input', buscarProductos);
