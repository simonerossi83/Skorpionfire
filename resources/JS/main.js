//DONUT CHART

var options = {
    series: [30, 30, 30],
    labels: ["Analytical", "Artist", "Introvert"],
    legend: {
        position: 'bottom',
        fontSize: '20px',
        fontFamily: 'Roboto',
        fontWeight: 400,
        labels: {
            colors:['#CEE7F3', '#204C61', '#5D90A8']
        },
      },
      
    chart: {
    type: 'donut'
        },

  dataLabels: {enabled: false},
  tooltip: {enabled: false},
  colors:['#CEE7F3', '#204C61', '#5D90A8'],
  
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 100
      }
    }
  }],

  
  };


  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();