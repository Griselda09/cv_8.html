// Función para mostrar información complementaria
function mostrarInformacion(info) {
    if (info === 'telefono') {
        document.getElementById('telefono').textContent = '116208700';
    } else if (info === 'email') {
        document.getElementById('email').textContent = 'Tu dirección de correo';
    }
}

// Asigna eventos a los botones
document.getElementById('btn-telefono').addEventListener('click', (telefono ) => {
    mostrarInformacion('telefono');
});

document.getElementById('btn-email').addEventListener('click', () => {
    mostrarInformacion('email');
});
