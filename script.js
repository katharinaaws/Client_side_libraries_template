// Get the canvas element from the page
const canvas = document.getElementById('myChart');

// Our data
const places = ['Campusgarten', 'Mühlbach', 'Interactive Media Lab', 'Mensa', `Sparkassenpark`];
const votes = [12, 9, 5, 4,8];
const votes_last_year = [5,12,8,7,4];

// Create a new chart: new Chart(where, configuration)
new Chart(canvas, {
  //javascript object"
  type: 'pie',                 // try: 'line', 'pie', 'doughnut'
  data: {
    labels: places,         // labels on the x-axis
    datasets: [{
      label: 'Number of votes',
      data: votes            // values (same order as labels!)
    }, {
      label: 'votes_last year',
      data: votes_last_year
    }]
    

  },
  options: {
    scales: {
      y: { beginAtZero: true } // y-axis starts at 0
    }
  }
});