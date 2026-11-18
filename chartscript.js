Papa.parse('smokingrates.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,
  complete: function(results) {
    const years = [];
    const datasets = [];
    const ageGroups = ['16 to 24', '25 to 34', '35 to 49', '50 to 59', '60 and over'];

    results.data.forEach(row => {
      if (!years.includes(row.Year)) {
        years.push(row.Year);
      }
    });

    ageGroups.forEach(group => {
      const rates = [];

      results.data.forEach(row => {
        if (row.AgeGroup === group) {
          rates.push(Number(row.SmokingPercent));
        }
      });

      datasets.push({ label: group, data: rates });
    });

    new Chart(document.getElementById('smokingChart'), {
      type: 'line',
      data: { labels: years, datasets: datasets },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Smoking rate (%)' }
          }
        }
      }
    });
  }
});