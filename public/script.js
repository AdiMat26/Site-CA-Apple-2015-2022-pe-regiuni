// Date reale de pe https://www.investing.com/academy/statistics/apple-facts/
const venit = {
    2015: { Americi: 93.8, Europa: 50.3, China: 58.7, Japonia: 15.7, 'Restul Pacificului': 15 },
    2016: { Americi: 86.6, Europa: 49.8, China: 48.5, Japonia: 16.9, 'Restul Pacificului': 13.6 },
    2017: { Americi: 96.6, Europa: 36.8, China: 51.6, Japonia: 15.3, 'Restul Pacificului': 44.1 },
    2018: { Americi: 112, Europa: 62.4, China: 51.9, Japonia: 21.7, 'Restul Pacificului': 17.4 },
    2019: { Americi: 116.9, Europa: 60.2, China: 42.6, Japonia: 21.5, 'Restul Pacificului': 17.8 },
    2020: { Americi: 124.5, Europa: 68.6, China: 40.3, Japonia: 21.4, 'Restul Pacificului': 19.6 },
    2021: { Americi: 153.3, Europa: 89.3, China: 68.3, Japonia: 28.4, 'Restul Pacificului': 26.3 },
    2022: { Americi: 169.66, Europa: 93.1, China: 74.19, Japonia: 25.99, 'Restul Pacificului': 29.37 }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const containerGrafic = document.getElementById('graficAfaceri').getContext('2d');
  
    // Date utile ulterior in grafic
    const ani = Object.keys(venit);
    const regiuni = Object.keys(venit[ani[0]]);
    const seturiDate = regiuni.map(regiune => ({
      label: regiune,
      data: ani.map(an => venit[an][regiune]),
      fill: false,
      borderColor: getRandomColor()
    }));
  
    // Graficul
    const graficAfaceri = new Chart(containerGrafic, {
      type: 'line',
      data: {
        labels: ani,
        datasets: seturiDate
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Cifra de Afaceri Apple pe Regiuni'
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'An'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Cifra de Afaceri (M USD)'
            }
          }]
        }
      }
    });
  });
  
//functie generatoare de culori

  function getRandomColor() {
    const litere = '0123456789ABCDEF';
    let culoare = '#';
    for (let i = 0; i < 6; i++) {
      culoare += litere[Math.floor(Math.random() * 16)];
    }
    return culoare;
  }
  