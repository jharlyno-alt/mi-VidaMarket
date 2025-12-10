const productos = [
        {nombre: "Cocina a gas", imagen: "imagenes/cocina2.png", url:"ProdIndiv.html"},
        {nombre: "Licuadora", imagen: "imagenes/cocina3.png", url:"ProdIndiv.html"},
        {nombre: "Polera negra", imagen: "imagenes/ROPA2.PNG", url:"ProdIndiv.html"},
        {nombre: "Tostadora", imagen: "imagenes/cocina6.png", url:"ProdIndiv.html"},
        // Aquí se agregan todos tus productos...
    ];
// Capturar el texto buscado
const params = new URLSearchParams(window.location.search);
const query = params.get("buscar");

if (query) {
    mostrarResultados(query);
}
// Función para pintar los resultados
function mostrarResultados(texto) {
    const lista = document.getElementById("listaProductos");
    const filtro = texto.toLowerCase();

    const resultados = productos.filter(p =>
        p.nombre.toLowerCase().includes(filtro)
    );

    if (resultados.length === 0) {
        lista.innerHTML = `<p>No se encontraron resultados para <strong>${texto}</strong></p>`;
        return;
    }

    resultados.forEach(p => {
        lista.innerHTML += `
            <div class="col-12 col-md-4">
                <div class="card p-3 text-center shadow-sm">
                    <img src="${p.imagen}" class="img-fluid mb-2">
                    <h4>${p.nombre}</h4>
                    <a href="${p.url}" class="btn btn-danger btn-sm mt-2">Ver</a>
                </div>
            </div>
        `;
    });
}



function redirigirBusqueda(e) {
    e.preventDefault();
    const texto = document.getElementById("inputBusqueda").value.trim();
    if (texto !== "") {
        window.location.href = "Resultados.html?buscar=" + encodeURIComponent(texto);
    }
}


