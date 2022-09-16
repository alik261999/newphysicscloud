function show(){
    const CHART1 = document.getElementById('myChart1');
    let linechart = new Chart(CHART1, {
      type: 'line',
      data: {
          labels: ["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"],
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

