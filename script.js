Papa.parse('smokingrates.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,
  complete: function(results) {
    console.log("running");
    console.log(results.data);
    const tbody = document.querySelector('#dataTable tbody');
 
    results.data.forEach(row => {
 
      const tr = document.createElement('tr');
 
      tr.innerHTML = `
        <td>${row.Year}</td>
        <td>${row.AgeGroup}</td>
        <td>${row.SmokingPercent}</td>
      `;
 
      tbody.appendChild(tr); 
    });
  },
 
  error: function(err) {
    console.error('Failed to load the CSV file:', err);
  }
});