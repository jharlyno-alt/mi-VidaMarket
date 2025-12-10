// REGISTRO
const formRegistro = document.getElementById('formRegistro');

if (formRegistro) {
    formRegistro.addEventListener("submit", function (e) {
        e.preventDefault();

        let fullname = formRegistro.fullname.value.trim();
        let email = formRegistro.email.value.trim();
        let pass = formRegistro.password.value;
        let confirm = formRegistro.confirm_password.value;

        // Validaciones
        if (!fullname || !email || !pass || !confirm) {
            alert("Por favor, completa todos los campos");
            return;
        }

        if (pass.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        if (pass !== confirm) {
            alert("Las contraseñas no coinciden");
            return;
        }

        // Crear objeto usuario
        let usuario = {
            nombre: fullname,
            correo: email,
            password: pass
        };

        // Guardar en LocalStorage
        localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

        alert("✓ Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "login.html";
    });
}


// LOGIN
const formLogin = document.getElementById('formLogin');

if (formLogin) {
    formLogin.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = formLogin.email.value.trim();
        let password = formLogin.password.value;

        // Validar campos vacíos
        if (!email || !password) {
            alert("Por favor, completa todos los campos");
            return;
        }

        // Obtener usuario registrado
        let usuarioGuardado = localStorage.getItem("usuarioRegistrado");

        if (!usuarioGuardado) {
            alert("❌ No existe un usuario registrado. Por favor, regístrate primero.");
            return;
        }

        usuarioGuardado = JSON.parse(usuarioGuardado);

        // Validar credenciales
        if (email === usuarioGuardado.correo && password === usuarioGuardado.password) {
            // Guardar sesión
            localStorage.setItem("sesionActiva", "true");
            localStorage.setItem("nombreUsuario", usuarioGuardado.nombre);

            alert("✓ Inicio de sesión exitoso. ¡Bienvenido!");
            window.location.href = "index.html";
        } else {
            alert("❌ Email o contraseña incorrectos");
        }
    });
}


// VERIFICAR SESIÓN AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", function () {
    let sesion = localStorage.getItem("sesionActiva");
    let nombre = localStorage.getItem("nombreUsuario");

    // Buscar el elemento del icono de usuario
    let iconoUserLink = document.querySelector("a[href='login.html']");

    if (sesion === "true" && nombre && iconoUserLink) {
        // Encontrar el li padre
        let liPadre = iconoUserLink.closest('li');
        
        if (liPadre) {
            // Reemplazar todo el contenido del li
            liPadre.innerHTML = `
                <span class="nav-link text-danger fw-semibold">Hola, ${nombre}</span>
            `;
            
            // Agregar botón de cerrar sesión después del li
            let btnCerrarLi = document.createElement('li');
            btnCerrarLi.className = 'nav-item';
            btnCerrarLi.innerHTML = `
                <a href="#" class="nav-link text-danger" id="cerrarSesion">
                    <i class="bi bi-box-arrow-right"></i> Salir
                </a>
            `;
            liPadre.after(btnCerrarLi);

            // Agregar evento de cerrar sesión
            let btnCerrar = document.getElementById("cerrarSesion");
            if (btnCerrar) {
                btnCerrar.addEventListener("click", function (e) {
                    e.preventDefault();
                    localStorage.removeItem("sesionActiva");
                    localStorage.removeItem("nombreUsuario");
                    alert("✓ Sesión cerrada correctamente");
                    window.location.href = "index.html";
                });
            }
        }
    }
});


// FUNCIÓN PARA REDIRIGIR BÚSQUEDA
function redirigirBusqueda(event) {
    event.preventDefault();
    let termino = document.getElementById('inputBusqueda').value.trim();
    if (termino) {
        //redirigir a una página
        alert("Buscando: " + termino);
        window.location.href = "index.html?q=" + encodeURIComponent(termino);
    }
}