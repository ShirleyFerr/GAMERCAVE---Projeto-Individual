//grafico generos de jogos favoritos 

const ctx1 = document.getElementById('chartGen');

  const data = {
        datasets: [{
            data: [10, 20, 30]
        }],
    
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    };

  const config1 = {
    type: 'pie',
    data: data,
  };

new Chart(ctx1, config1);

//grafico com dispositivos favoritos

const ctx2 = document.getElementById('chartDevice');

  const data2 = {
        datasets: [{
            data: [10, 20, 30]
        }],
    
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    };

  const config2 = {
    type: 'pie',
    data: data2,
  };

new Chart(ctx2, config2);


//grafico com quantidade de jogos por usuario

const ctx3 = document.getElementById('chartQtd');

  const data3 = {
        datasets: [{
            data: [10, 20, 30]
        }],
    
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    };

  const config3 = {
    type: 'pie',
    data: data3,
  };

new Chart(ctx3, config3);

