console.log("Hoja de Vida Interactiva Cargada");

// Lista de proyectos anteriores
const listaProyectos = [
    'Proyecto React',
    'Proyecto Java',
    'Proyecto Angular',
    // ... más proyectos
];

// Lista de certificaciones
const certificaciones = [
    "Certificación Aws",
    "Certificación Microservicios",
    "Certificación UX/IU",
    // ... más certificaciones
];

// Función para mostrar certificaciones
function mostrarCertificaciones() {
    let ul = document.getElementById('listaCertificaciones'); // Asegúrate de que este es el ID correcto en tu HTML
    ul.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos elementos
    certificaciones.forEach(certificacion => {
        let li = document.createElement('li');
        li.textContent = certificacion;
        ul.appendChild(li);
    });
}

// Función para mostrar proyectos anteriores
function mostrarProyectosAnteriores(cantidad) {
    cantidad = parseInt(cantidad);
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, introduce un número válido.");
        return;
    }
    // Limitar la cantidad al número de proyectos disponibles
    cantidad = Math.min(cantidad, listaProyectos.length);
    
    let proyectosAMostrar = listaProyectos.slice(0, cantidad);
    alert('Aquí están los proyectos:\n' + proyectosAMostrar.join('\n'));
}

// Asegurarse de que el DOM esté completamente cargado antes de asignar los manejadores de eventos
document.addEventListener('DOMContentLoaded', function() {
    // Manjeador de evento para añadir habilidades
    document.getElementById('addSkill').addEventListener('click', function() {
        let newSkill = prompt("Introduce una nueva habilidad:");
        if (newSkill) {
            let ul = document.getElementById('skillsList'); 
            let li = document.createElement('li');
            li.textContent = newSkill;
            ul.appendChild(li);
        }
    });

    // Manejador de evento para conectar
    document.getElementById('conectar').addEventListener('click', function() {
        let correo = prompt("Ingrese su correo electronico:");
        if(correo){
            alert("Gracias " + correo + "!!!");
        }
    });

    // Manejador de evento para mostrar proyectos anteriores
    document.getElementById('viewPreviousProjects').addEventListener('click', function() {
        let numProyectos = prompt("¿Cuántos proyectos anteriores deseas ver?");
        if (numProyectos) {
            mostrarProyectosAnteriores(numProyectos);
        }
    });

    // Mostrar certificaciones al cargar la página
    mostrarCertificaciones();
});
function añadirHabilidad() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList');
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
}
document.getElementById('addSkill').addEventListener('click', añadirHabilidad);

const saludoPersonalizado = () => {
    alert("¡Gracias por visitar mi sección de experiencia laboral!");
}


const calificarHojaDeVida = () => {
    let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
    alert(`¡Gracias por calificar con un ${calificacion}!`);
}

// Función para añadir habilidades
function añadirHabilidad() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList');
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
}


// Agregar eventos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addSkill').addEventListener('click', añadirHabilidad);
    document.getElementById('greetUser').addEventListener('click', saludoPersonalizado);
    document.getElementById('rateCV').addEventListener('click', calificarHojaDeVida);

    // ... resto del código para otros eventos ...
});




