const apiKey = 'e3f41b01d9694e62a488ca872eddbd85';
let url = `https://api.rawg.io/api/games?key=${apiKey}&ordering=rating&page_size=9`;
var selectCat = 'populares';

//essa funçao é chamada logo depois, atribui a url de acordo com a categoria e chama o initFetch
function fetchGames() {
  if (selectCat === 'populares') {
    url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2020-01-01,2024-12-31&ordering=metacritic=100&page_size=9`;
    initFecth()
  } else if (selectCat === 'inclusivos') {
    url = `https://api.rawg.io/api/games?key=${apiKey}&search=The+Last+of+Us+Smash+Bros+Overcooked&page_size=6`;
    initFecth()
  } else if (selectCat === 'indie') {
    url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2011-01-01,2024-12-31&ordering=metacritic=100&genres=indie&page_size=9`;
    initFecth()
  }
}

//validacao caso tenha algum problema com o chamado da api pela url
if (!url) {
  console.error("A URL não foi definida corretamente.");
}

// a funcao initFecth é chamada toda vez que o usuario escolhe um botão
function initFecth() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById(selectCat); //pega a div da categoria escolhida usando a variavel que tem o mesmo nome do id
      container.innerHTML = '';  //limpa a div antes de adicionar novos jogos

      data.results.forEach(game => {
        const gameElement = document.createElement('div'); //cria uma nova div pra infos do jogo o jogo
        gameElement.classList.add('game'); // adiciona a class game na div criada agora

        // cria uma span
        const gameTittle = document.createElement('span');
        gameTittle.textContent = game.name; //adiciona o nome do jogo ao conteudo da span
        gameTittle.classList.add('span-tittle'); //adiciona  a classe p/ estilização
        gameElement.appendChild(gameTittle); //coloca a span do titulo dentro da div game

        //add as plataformas do jogo
        const gameDevice = document.createElement('span');
        var platformsText = "";

        for (var index = 0; index < game.platforms.length; index++) {
          platformsText += game.platforms[index].platform.name;
            if (index < game.platforms.length - 1) {
              platformsText += ", ";
            }
        }

        gameDevice.textContent = platformsText;
        gameDevice.classList.add('span-2');
        gameElement.appendChild(gameDevice);

        //add a data de lancamento do jogo
        const gameReleased = document.createElement('span');
        gameReleased.textContent = game.released;
        gameReleased.classList.add('span-1');
        gameElement.appendChild(gameReleased);

        //add a imagem de capa do jogo
        const gameImage = document.createElement('img');
        gameImage.src = game.background_image;
        gameImage.alt = game.name;
        gameElement.appendChild(gameImage);

        //add a div game na div correspondente
        container.appendChild(gameElement);
      });
    })
    .catch(error => console.error('Erro ao buscar jogos:', error));
}


// essa funçao é chamada primeiro pelo user, escolhendo a div e atribuindo o valor da variavel e chama a fetchGames
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


