const productos = [
    // CATEGORÍA: ROPA
    {nombre: "Vestido", imagen: "imagenes/ROPA1.PNG", url: "ProdRopa1.html", categoria: "Ropa"},
    {nombre: "Polera negra", imagen: "imagenes/ROPA2.PNG", url: "ProdIndiv.html", categoria: "Ropa"},
    {nombre: "Camiseta básica", imagen: "imagenes/ROPA3.PNG", url: "ProdRopa2.html", categoria: "Ropa"},
    {nombre: "Pantalón jean", imagen: "imagenes/ROPA4.PNG", url: "ProdRopa3.html", categoria: "Ropa"},
    {nombre: "Sudadera con capucha", imagen: "imagenes/ROPA5.PNG", url: "ProdRopa4.html", categoria: "Ropa"},
    {nombre: "Chaqueta de cuero", imagen: "imagenes/ROPA6.PNG", url: "ProdRopa5.html", categoria: "Ropa"},
    {nombre: "Vestido de gala", imagen: "imagenes/ROPA7.PNG", url: "ProdRopa6.html", categoria: "Ropa"},
    {nombre: "Shorts deportivos", imagen: "imagenes/ROPA8.PNG", url: "ProdRopa7.html", categoria: "Ropa"},
    {nombre: "Calcetines", imagen: "imagenes/ROPA9.PNG", url: "ProdRopa8.html", categoria: "Ropa"},
    {nombre: "Zapatos deportivos", imagen: "imagenes/ROPA10.PNG", url: "ProdRopa9.html", categoria: "Ropa"},

    // CATEGORÍA: TECNOLOGÍA
    {nombre: "PC Gamer", imagen: "imagenes/tec1.png", url: "ProdIndivTecno.html", categoria: "Tecnología"},
    {nombre: "Iphone", imagen: "imagenes/tec3.png", url: "ProdIndiv.html", categoria: "Tecnología"},
    {nombre: "Dron", imagen: "imagenes/tecno1.png", url: "ProdIndiv.html", categoria: "Tecnología"},
    {nombre: "Tablet", imagen: "imagenes/tecno3.png", url: "ProdIndiv.html", categoria: "Tecnología"},
    {nombre: "Camara", imagen: "imagenes/tecno4.png", url: "ProdIndiv.html", categoria: "Tecnología"},
    {nombre: "Mouse inalámbrico", imagen: "imagenes/tecno5.png", url: "ProdIndiv.html", categoria: "Tecnología"},
    {nombre: "USB", imagen: "imagenes/tecno6.PNG", url: "ProdIndiv.html", categoria: "Tecnología"},
    {nombre: "Proyector Portátil", imagen: "imagenes/tecno7.PNG", url: "ProdIndiv.html", categoria: "Tecnología"},
    {nombre: "Router Wi-Fi", imagen: "imagenes/tecno8.PNG", url: "ProdIndiv.html", categoria: "Tecnología"},

    // CATEGORÍA: COCINA
    {nombre: "Cocina a gas", imagen: "imagenes/cocina2.png", url: "ProdIndiv.html", categoria: "Cocina"},
    {nombre: "Licuadora", imagen: "imagenes/cocina3.png", url: "ProdIndiv.html", categoria: "Cocina"},
    {nombre: "Olla a presión", imagen: "imagenes/cocina4.png", url: "ProdIndiv.html", categoria: "Cocina"},
    {nombre: "Lavavajillas", imagen: "imagenes/cocina5.png", url: "ProdIndiv.html", categoria: "Cocina"},
    {nombre: "Taza", imagen: "imagenes/cocina6.png", url: "ProdIndiv.html", categoria: "Cocina"},
    {nombre: "Microondas", imagen: "imagenes/cocina7.png", url: "ProdIndiv.html", categoria: "Cocina"},
    {nombre: "Tetera eléctrica", imagen: "imagenes/cocina8.PNG", url: "ProdIndiv.html", categoria: "Cocina"},
    {nombre: "Sartén antiadherente", imagen: "imagenes/cocina9.PNG", url: "ProdIndiv.html", categoria: "Cocina"},
    {nombre: "Exprimidor de jugos", imagen: "imagenes/cocina10.PNG", url: "ProdIndiv.html", categoria: "Cocina"},

    // CATEGORÍA: HOGAR
    {nombre: "Espejo decorativo", imagen: "imagenes/hogar11.png", url: "ProdIndiv.html", categoria: "Hogar"},
    {nombre: "Sillón", imagen: "imagenes/HOGAR2.png", url: "ProdIndiv.html", categoria: "Hogar"},
    {nombre: "Mesa de centro", imagen: "imagenes/HOGAR3.png", url: "ProdIndiv.html", categoria: "Hogar"},
    {nombre: "Silla de comedor", imagen: "imagenes/hogar4.png", url: "ProdIndiv.html", categoria: "Hogar"},
    {nombre: "Lámpara de pie", imagen: "imagenes/hogar5.png", url: "ProdIndiv.html", categoria: "Hogar"},
    {nombre: "Estantería", imagen: "imagenes/hogar6.png", url: "ProdIndiv.html", categoria: "Hogar"},
    {nombre: "Alfombra", imagen: "imagenes/hogar7.PNG", url: "ProdIndiv.html", categoria: "Hogar"},
    {nombre: "Cortinas", imagen: "imagenes/hogar8.PNG", url: "ProdIndiv.html", categoria: "Hogar"},
    {nombre: "Almohadas decoradas", imagen: "imagenes/hogar9.PNG", url: "ProdIndiv.html", categoria: "Hogar"}
];

// Función para redirigir a la página de búsqueda
function redirigirBusqueda(e) {
    e.preventDefault();
    const texto = document.getElementById("inputBusqueda").value.trim();
    if (texto !== "") {
        window.location.href = "Resultados.html?buscar=" + encodeURIComponent(texto);
    }
}

// Función para mostrar resultados en la página de búsqueda
function mostrarResultados(texto) {
    const lista = document.getElementById("listaProductos");
    const filtro = texto.toLowerCase();

    // Filtrar productos que coincidan con la búsqueda
    const resultados = productos.filter(p =>
        p.nombre.toLowerCase().includes(filtro) ||
        p.categoria.toLowerCase().includes(filtro)
    );

    // Limpiar contenedor
    lista.innerHTML = "";

    // Si no hay resultados
    if (resultados.length === 0) {
        lista.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search fs-1 text-muted"></i>
                <p class="mt-3 fs-5">No se encontraron resultados para <strong>"${texto}"</strong></p>
                <p class="text-muted">Intenta con otras palabras clave</p>
            </div>
        `;
        return;
    }

    // Mostrar cantidad de resultados
    lista.innerHTML = `
        <div class="col-12 mb-3">
            <p class="text-muted">Se encontraron ${resultados.length} resultado(s) para "<strong>${texto}</strong>"</p>
        </div>
    `;
    // Renderizar cada producto
    resultados.forEach(p => {
        lista.innerHTML += `
            <div class="col-12 col-md-4">
                <div class="text-center prodP-transparente">
                    <div class="img-box">
                        <img src="${p.imagen}" class="img-producto" alt="${p.nombre}">
                    </div>
                    <div class="d-flex gap-2 justify-content-center mt-2">
                        <h3>${p.nombre}</h3>
                    </div>
                    <div class="d-flex gap-2 justify-content-center mt-2">
                        <span class="badge bg-secondary">${p.categoria}</span>
                    </div>
                    <div class="d-flex gap-2 justify-content-center mt-2">
                        <a href="${p.url}" class="btn btn-danger btn-sm">VER</a>
                        <button class="btn btn-danger btn-sm" onclick="agregarAlCarrito(1)">
                            Añadir al Carrito
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    totalGeneral.textContent = total + " Bs";
    localStorage.setItem("totalGeneral", total);
}
// Inicializar búsqueda cuando se carga la página de resultados
document.addEventListener('DOMContentLoaded', function() {
    // Solo ejecutar en la página de resultados
    if (window.location.pathname.includes('Resultados.html')) {
        const params = new URLSearchParams(window.location.search);
        const query = params.get("buscar");
        
        if (query) {
            mostrarResultados(query);
        } else {
            const lista = document.getElementById("listaProductos");
            lista.innerHTML = `
                <div class="col-12 text-center py-5">
                    <p class="text-muted">No se especificó ningún término de búsqueda</p>
                </div>
            `;
        }
    }
});





function obtenerCarrito() {
            return JSON.parse(localStorage.getItem("carrito")) || [];
        }

        function guardarCarrito(carrito) {
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }

        //most carrito
        function mostrarCarrito() {
    const carrito = obtenerCarrito();
    const tabla = document.getElementById("tablaCarrito");
    const totalGeneral = document.getElementById("totalGeneral");
    const vacio = document.getElementById("carritoVacio");
    const contenido = document.getElementById("carritoContenido");

    tabla.innerHTML = "";

    if (carrito.length === 0) {
        vacio.classList.remove("d-none");
        contenido.classList.add("d-none");
        localStorage.setItem("totalGeneral", 0);
        return;
    }

    vacio.classList.add("d-none");
    contenido.classList.remove("d-none");

    let total = 0;

    carrito.forEach((p, index) => {
        let totalProducto = p.precio * p.cantidad;
        total += totalProducto;

        tabla.innerHTML += `
            <tr>
                <td><img src="${p.imagen}" width="70"></td>
                <td>${p.nombre}</td>
                <td>${p.precio} Bs</td>
                <td>
                    <button class="btn btn-sm btn-outline-danger" onclick="cambiarCantidad(${index}, -1)">-</button>
                    <span class="mx-2">${p.cantidad}</span>
                    <button class="btn btn-sm btn-outline-success" onclick="cambiarCantidad(${index}, 1)">+</button>
                </td>
                <td>${totalProducto} Bs</td>
                <td><button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">X</button></td>
            </tr>
        `;
    });
    totalGeneral.textContent = total + " Bs";
    localStorage.setItem("totalGeneral", total);
}


        // CAMBIAR CANTIDADES
        function cambiarCantidad(i, cambio) {
            const carrito = obtenerCarrito();

            carrito[i].cantidad += cambio;

            if (carrito[i].cantidad <= 0) carrito.splice(i, 1);

            guardarCarrito(carrito);
            mostrarCarrito();
        }

        //ELIMINAR PRODUCTO
        function eliminarProducto(i) {
            const carrito = obtenerCarrito();
            carrito.splice(i, 1);
            guardarCarrito(carrito);
            mostrarCarrito();
        }

        //VACIAR CARRITO
        function vaciarCarrito() {
            localStorage.removeItem("carrito");
            mostrarCarrito();
        }

        // Mostrar carrito al cargar la página
        mostrarCarrito();

        function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const existente = carrito.find(p => p.id === producto.id);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({...producto, cantidad: 1});
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
}




document.addEventListener("DOMContentLoaded", function() {
    // Cargar total desde localStorage
    const total = localStorage.getItem("totalGeneral");
    if (total) document.getElementById("montoPagar").textContent = total + " Bs";

    // Manejar envío de formulario
    const formPago = document.getElementById("formPago");
    if (formPago) {
        formPago.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("🎉 ¡Pago realizado con éxito! Gracias por tu compra.");
            localStorage.clear(); // Vaciar carrito
            window.location.href = "index.html"; // Regresar al inicio
        });
    }
});

