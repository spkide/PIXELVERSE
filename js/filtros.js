function filterServers() {
    const type = $('#server-type').val();
    // Realiza una nueva petición a la API con el filtro de tipo
    const filteredURL = `https://api.mysite.com/minecraft-servers?type=${type}`;
    
    $.get(filteredURL, function(data) {
        let filteredHTML = '';

        data.servers.forEach(server => {
            filteredHTML += `
                <div class="server-item nes-container is-rounded">
                    <h3>${server.name}</h3>
                    <p><strong>IP:</strong> ${server.ip}</p>
                    <p><strong>Jugadores:</strong> ${server.playersOnline}/${server.maxPlayers}</p>
                    <p><strong>Versión:</strong> ${server.version}</p>
                    <p><strong>Estado:</strong> ${server.status}</p>
                    <a href="minecraft://connect/${server.ip}" class="nes-btn">Unirse al servidor</a>
                </div>
            `;
        });

        $('#server-list-container').html(filteredHTML);
    });
}