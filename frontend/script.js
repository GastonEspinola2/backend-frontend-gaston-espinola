function enviarSolicitud() {
    const nombre = document.getElementById('nombre').value.trim();

    if (!nombre) {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    fetch(`http://localhost:3000/bienvenida/${nombre}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('mensaje').textContent = data;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al enviar la solicitud.');
        });
}
