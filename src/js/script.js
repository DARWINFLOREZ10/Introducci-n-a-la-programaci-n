document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("registroForm").addEventListener("submit", (e) => {
        const f = e.target, v = (id) => f[id].value.trim(), err = (id, msg) => (f[id].nextElementSibling.textContent = msg);
        let valid = true;

        if (v("nombre").length < 3) err("nombre", "Mínimo 3 caracteres"), valid = false;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) err("email", "Correo no válido"), valid = false;
        if (v("password").length < 8) err("password", "Mínimo 8 caracteres"), valid = false;
        if (v("confirmPassword") !== v("password")) err("confirmPassword", "No coinciden"), valid = false;
        if (new Date().getFullYear() - new Date(v("birthdate")).getFullYear() < 18) err("birthdate", "Mayor de 18"), valid = false;

        if (!valid) e.preventDefault();
    });
});
