import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ctx = document.getElementById('myChart');

if(ctx){
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Spotify', 'AppleMusic', 'Yandex.Music', 'Boom'],
      datasets: [
        {
          label: '# of Listens',
          data: [500, 320, 800, 100],
          backgroundColor: [
            'rgb(46, 189, 89)',
            'rgb(250, 35, 59)',
            'rgb(255, 204, 0)',
            'rgb(255, 45, 85)'
          ],
          borderWidth: 0
        }
      ],
    }
  });
}
