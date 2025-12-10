// REGISTRO
const formRegistro = document.getElementById('formRegistro');

if (formRegistro) {
    formRegistro.addEventListener("submit", function (e) {
        e.preventDefault();

        let fullname = formRegistro.fullname.value;
        let email = formRegistro.email.value;
        let pass = formRegistro.password.value;
        let confirm = formRegistro.confirm_password.value;

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

        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "login.html";
    });
}


// LOGIN
const formLogin = document.getElementById('formLogin');

if (formLogin) {
    formLogin.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = formLogin.email.value;
        let password = formLogin.password.value;

        let usuarioGuardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

        if (!usuarioGuardado) {
            alert("No existe un usuario registrado.");
            return;
        }

        if (email === usuarioGuardado.correo && password === usuarioGuardado.password) {
            localStorage.setItem("sesionActiva", "true");
            localStorage.setItem("nombreUsuario", usuarioGuardado.nombre);

            alert("Inicio de sesión exitoso");
            window.location.href = "index.html";
        } else {
            alert("Email o contraseña incorrectos");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    let sesion = localStorage.getItem("sesionActiva");
    let nombre = localStorage.getItem("nombreUsuario");

    let iconoUser = document.querySelector(".bi-person");

    if (sesion === "true") {
        iconoUser.parentElement.innerHTML = `
            <span class="text-danger fw-semibold">${nombre}</span>
            <a href="#" class="ms-3 text-danger" id="cerrarSesion">Cerrar sesión</a>
        `;
    }

    // Cerrar sesión
    let btnCerrar = document.getElementById("cerrarSesion");
    if (btnCerrar) {
        btnCerrar.addEventListener("click", function () {
            localStorage.removeItem("sesionActiva");
            alert("Sesión cerrada");
            window.location.reload();
        });
    }
});
