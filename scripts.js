function mostrarProyectos() {
    const contenedorExtra = document.getElementById("extra-proyectos");
    
    // Proyectos nuevos para el "Ver más"
    const contenido = `
        <div class="grid-proyectos" style="margin-top: 0.9375rem;">
            <div class="card">
                <h4>Task Manager Pro</h4>
                <p>Gestor de tareas con LocalStorage y filtros de prioridad para productividad.</p>
            </div>
            <div class="card">
                <h4>Sistema de Inventario</h4>
                <p>Control de stock desarrollado con lógica de arreglos y persistencia de datos.</p>
            </div>
        </div>
    `;

    contenedorExtra.innerHTML = contenido;

    const boton = document.querySelector("#proyectos button");
    if (boton) boton.style.display = "none";
}

function volverInicio() {
    document.getElementById("inicio").scrollIntoView({
        behavior: "smooth"
    });
}

function enviarMail(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensajeTexto").value;

    let mailtoLink = `mailto:lautaro0811@gmail.com?subject=Contacto de ${nombre}&body=${mensaje} (Responder a: ${email})`;

    window.location.href = mailtoLink;
}

// Animaciones
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll("section").forEach(sec => {
    observer.observe(sec);
});

// Modo oscuro
function toggleModoOscuro() {
    document.body.classList.toggle("dark-mode");
}


// Lógica para mostrar/ocultar el botón "Back to Top"
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const threshold = 18.75 * fontSize;
    if (window.scrollY > threshold) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Asegurarnos de que el botón use la función volverInicio que ya tenés
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', volverInicio);
}