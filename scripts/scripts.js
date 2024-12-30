

function cambiarImagen(imagen) {
    if (imagen === 'Museo del prado') {
        const imgElement = document.getElementById('imgMuseo');
        // Comprobar el nombre de la imagen para cambiarla
        if (imgElement.src.includes("Museo%20del%20prado.jpg")) {
            imgElement.src = 'images/Museo%20del%20prado2.jpg'; // Ruta a la segunda imagen
        } else {
            imgElement.src = 'images/Museo%20del%20prado.jpg'; // Volver a la primera imagen
        }
    } else if (imagen === 'Plaza Mayor') {
        const imgElement = document.getElementById('imgPlaza');
        // Comprobar el nombre de la imagen para cambiarla
        if (imgElement.src.includes("Plaza%20Mayor.jpg")) {
            imgElement.src = 'images/Plaza%20Mayor2.jpg'; // Ruta a la segunda imagen
        } else {
            imgElement.src = 'images/Plaza%20Mayor.jpg'; // Volver a la primera imagen
        }
    }
}

// Obtener el objeto de la página
const movingObject = document.getElementById("movingObject");

// Variable para controlar la posición del objeto
let position = 0;

// Velocidad de movimiento en píxeles
const speed = 2;

// Función para mover el objeto
function moveObject() {
    // Obtener el ancho de la ventana
    const windowWidth = window.innerWidth;

    // Mover el objeto incrementando su posición
    position += speed;

    // Si el objeto alcanza el borde derecho, lo reiniciamos a la izquierda
    if (position > windowWidth) {
        position = -50; // El ancho del objeto es de 50px, por lo que comienza fuera de la pantalla
    }

    // Establecer la nueva posición del objeto
    movingObject.style.left = position + 'px';
}

// Ejecutar la función moveObject cada 16 ms (aproximadamente 60 FPS)
setInterval(moveObject, 16);