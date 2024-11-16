const apiKey = 'e3f41b01d9694e62a488ca872eddbd85';
let url = `https://api.rawg.io/api/games?key=${apiKey}&ordering=rating&page_size=6`;
var selectCat = 'populares';

function fetchGames() {
  if (selectCat === 'populares') {
    url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2020-01-01,2024-12-31&ordering=metacritic=100&page_size=6`;
    initFecth()
  } else if (selectCat === 'inclusivos') {
    url = `https://api.rawg.io/api/games?key=${apiKey}&search=The+Last+of+Us+Smash+Bros+Overcooked&page_size=6`;
    initFecth()
  } else if (selectCat === 'indie') {
    url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2011-01-01,2024-12-31&ordering=metacritic=100&genres=indie&page_size=6`;
    initFecth()
  }
}

if (!url) {
  console.error("A URL não foi definida corretamente.");
}

function initFecth() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById(selectCat);
      container.innerHTML = '';  // Limpa o conteúdo da div antes de adicionar novos jogos

      data.results.forEach(game => {
        // Cria um novo elemento para o jogo
        const gameElement = document.createElement('div');
        gameElement.classList.add('game');

        // Adiciona o título do jogo
        const gameTittle = document.createElement('span');
        gameTittle.textContent = game.name;
        gameTittle.classList.add('span-tittle');
        gameElement.appendChild(gameTittle);

        // Adiciona as plataformas do jogo
        const gameDevice = document.createElement('span');
        var platformsText = "";

        for (var i = 0; i < game.platforms.length; i++) {
          platformsText += game.platforms[i].platform.name;
            if (i < game.platforms.length - 1) {
              platformsText += ", ";
            }
        }

        gameDevice.textContent = platformsText;
        gameDevice.classList.add('span-2');
        gameElement.appendChild(gameDevice);

        // Adiciona a data de lancamento do jogo
        const gameReleased = document.createElement('span');
        gameReleased.textContent = game.released;
        gameReleased.classList.add('span-1');
        gameElement.appendChild(gameReleased);

        // Adiciona a imagem de capa do jogo
        const gameImage = document.createElement('img');
        gameImage.src = game.background_image;
        gameImage.alt = game.name;
        gameElement.appendChild(gameImage);

        // Adiciona o jogo na div correspondente
        container.appendChild(gameElement);
      });
    })
    .catch(error => console.error('Erro ao buscar jogos:', error));
}


function popular() {
  document.getElementById('populares').style.display = 'flex';
  document.getElementById('inclusivos').style.display = 'none';
  document.getElementById('indie').style.display = 'none';
  selectCat = 'populares';
  fetchGames();
}

function inclusivo() {
  document.getElementById('populares').style.display = 'none';
  document.getElementById('inclusivos').style.display = 'flex';
  document.getElementById('indie').style.display = 'none';
  selectCat = 'inclusivos';
  fetchGames();
}

function indie() {
  document.getElementById('populares').style.display = 'none';
  document.getElementById('inclusivos').style.display = 'none';
  document.getElementById('indie').style.display = 'flex';
  selectCat = 'indie';
  fetchGames();
}


