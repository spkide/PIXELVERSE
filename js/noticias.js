const API_KEY = 'd4306b768f4e4bc99d0da02003f629e7';
        const RAWG_API_URL = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2025-01-01,2025-12-31&page_size=5`;
        const CONSOLE_NEWS_URL = `https://api.rawg.io/api/platforms?key=${API_KEY}&page_size=5`;

        // Función para cargar noticias de videojuegos
        function loadGameNews() {
            $.get(RAWG_API_URL, function(data) {
                let newsHTML = '';
                if (data.results.length > 0) {
                    data.results.forEach(game => {
                        newsHTML += `
                            <div class="nes-list-item news-item">
                                <a href="https://rawg.io/games/${game.slug}" target="_blank">
                                    <img src="${game.background_image}" alt="${game.name}" />
                                    <div class="news-content">
                                        <h3>${game.name}</h3>
                                        <p>Fecha de lanzamiento: ${game.released}</p>
                                    </div>
                                </a>
                            </div>
                        `;
                    });
                } else {
                    newsHTML = '<p>No hay juegos lanzados en 2025 disponibles aún.</p>';
                }
                $('#game-news').html(newsHTML);
            }).fail(function() {
                $('#game-news').html('<p>No se pudieron cargar los juegos. Intenta nuevamente más tarde.</p>');
            });
        }

        // Función para cargar noticias de consolas
        function loadConsoleNews() {
            $.get(CONSOLE_NEWS_URL, function(data) {
                let newsHTML = '';
                if (data.results.length > 0) {
                    data.results.forEach(console => {
                        newsHTML += `
                            <div class="nes-list-item news-item">
                                <a href="https://rawg.io/platforms/${console.slug}" target="_blank">
                                    <img src="${console.image_background}" alt="${console.name}" />
                                    <div class="news-content">
                                        <h3>${console.name}</h3>
                                        <p>Consola</p>
                                    </div>
                                </a>
                            </div>
                        `;
                    });
                } else {
                    newsHTML = '<p>No hay noticias sobre consolas disponibles.</p>';
                }
                $('#console-news').html(newsHTML);
            }).fail(function() {
                $('#console-news').html('<p>No se pudieron cargar las noticias de consolas. Intenta nuevamente más tarde.</p>');
            });
        }

        $(document).ready(function() {
            loadGameNews();
            loadConsoleNews(); // Cargar noticias sobre consolas
        });