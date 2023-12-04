var gamesData;

fetch('/api/games')
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data) && data.length > 0) {
      gamesData = data;
    } else {
      console.error('Invalid or empty API response:', data);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

document.getElementById('generateBtn').addEventListener('click', function() {
  if (Array.isArray(gamesData) && gamesData.length > 0) {
    rollAnimation()
  } else {
    fetch('backup-NL.json')
      .then(data => data.json())
      .then(json => {
        gamesData = json;

        // Warn that backup is used and not live data
        document.getElementById('errMessage').innerText = 'Live data is not available. Using backup data instead.';

        rollAnimation();
      })

  }
});

function rollAnimation() {
  if (Array.isArray(gamesData) && gamesData.length > 0) {
    for (let i = 0; i < 25; i++) {
      setTimeout(function() {
        var randomIndex = Math.floor(Math.random() * gamesData.length);
        document.getElementById('output').innerText = gamesData[randomIndex].name;
      }, 100 * i);
    }
  }
}