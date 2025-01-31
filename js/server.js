const serverForm = document.getElementById('server-form');
const serverSelect = document.getElementById('server-select');
const serverStatusContainer = document.getElementById('server-status');

serverForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const selectedServer = serverSelect.value; // Obtener el servidor seleccionado
  const apiUrl = `https://api.mcstatus.io/v2/status/java/${selectedServer}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let serverCard = ''; // Variable para guardar las cards

      if (data.online) {
        // Crear una card para el servidor en línea
        serverCard = `
          <div class="nes-container is-rounded server-card">
            <h3>Servidor: ${selectedServer}</h3>
            <img src="${data.icon}" alt="Icono del servidor" class="server-icon" />
            <p><strong>Estado:</strong> En línea</p>
            <p><strong>Versión:</strong> ${data.version.name}</p>
            <p><strong>Jugadores en línea:</strong> ${data.players.online}</p>
            <p><strong>Jugadores máximos:</strong> ${data.players.max}</p>
            <p><strong>Mensaje:</strong> ${data.motd.text}</p>
          </div>
        `;
      } else {
        // Card para el servidor fuera de línea
        serverCard = `
          <div class="nes-container is-rounded server-card">
            <h3>Servidor: ${selectedServer}</h3>
            <img src="https://via.placeholder.com/50" alt="Icono de servidor offline" class="server-icon" />
            <p><strong>Estado:</strong> Offline</p>
          </div>
        `;
      }

      // Insertamos la card en el contenedor
      serverStatusContainer.innerHTML = serverCard;
    })
    .catch(error => {
      serverStatusContainer.innerHTML = `
        <h2>Error al obtener la información del servidor.</h2>
        <p>${error.message}</p>
      `;
    });
});