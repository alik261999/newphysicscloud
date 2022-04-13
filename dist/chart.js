function show(){
    const CHART1 = document.getElementById('myChart1');
    let linechart = new Chart(CHART1, {
      type: 'line',
      data: {
          labels: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
          datasets: [{
              label: 'Overall Performances',
              data: [65, 59, 80, 81, 56, 55, 40, 90, 99, 80, 0, 96],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
      }
    });
}