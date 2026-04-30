function showProjects() {
    const extraContainer = document.getElementById("extra-projects");
    
    // Proyectos nuevos para el "Ver más"
    const content = `
        <div class="grid-projects" style="margin-top: 15px;">
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

    extraContainer.innerHTML = content;

    const button = document.querySelector("#projects button");
    if (button) button.style.display = "none";
}

function scrollToTop() {
    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });
}

function sendEmail(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("messageText").value;

    let mailtoLink = `mailto:lautaro0811@gmail.com?subject=Contacto de ${name}&body=${message} (Responder a: ${email})`;

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

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});

// Modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


// Lógica para mostrar/ocultar el botón "Back to Top"
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    // Si el scroll baja más de 300px desde el inicio
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Asegurarnos de que el botón use la función volverInicio que ya tenés
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', scrollToTop);
}