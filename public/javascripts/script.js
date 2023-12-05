var gamesData;

document.getElementById('game-output').addEventListener('click', initPick);
document.getElementById('reroll-button').addEventListener('click', pickGame);
document.getElementById('update-button').addEventListener('click', reset);

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

function rollAnimation() {
  if (Array.isArray(gamesData) && gamesData.length > 0) {
    document.getElementById('restart-options').style.display = 'none';
    document.getElementById('plan-options').style.display = 'none';

    for (let i = 0; i < 25; i++) {
      setTimeout(function() {
        var randomIndex = Math.floor(Math.random() * gamesData.length);
        document.getElementById('game-output').innerText = gamesData[randomIndex].name;
      }, 100 * i);
    }

    setTimeout(function() {
      document.getElementById('restart-options').style.display = 'flex';
    }, 2500);
  }
}

function pickGame() {
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
}

function initPick() {
  pickGame();
  document.getElementById('game-output').removeEventListener('click', initPick);
}

function reset() {
  document.getElementById('plan-options').style.display = 'flex';
  document.getElementById('restart-options').style.display = 'none';
  document.getElementById('game-output').innerText = 'Click to roll';
  document.getElementById('game-output').addEventListener('click', initPick);
}
