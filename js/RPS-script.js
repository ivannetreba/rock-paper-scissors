
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore()

function playRPS(playerMove) {
  const compMove = сompChoose();

  let result = ``;
  if (playerMove === `Rock`) {
    if (compMove === `Rock`) {
      result = `Tie.`;
    } else if (compMove === `Paper`) {
      result = `You lose.`;
    } else if (compMove === `Scissors`) {
      result = `You win.`;
    }

  } else if (playerMove === `Paper`) {
    if (compMove === `Rock`) {
      result = `You win.`;
    } else if (compMove === `Paper`) {
      result = `Tie.`;
    } else if (compMove === `Scissors`) {
      result = `You lose.`;
    }

  } else if (playerMove === `Scissors`) {
    if (compMove === `Rock`) {
      result = `You lose.`;
    } else if (compMove === `Paper`) {
      result = `You win.`;
    } else if (compMove === `Scissors`) {
      result = `Tie.`;
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  if (playerMove === `Reset`) {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.getElementById('gameResult').innerHTML = '';
    document.getElementById('gameMoves').innerHTML = '';
  } else {
    document.getElementById('gameResult').innerHTML = `${result}`;

    document.getElementById('gameMoves').innerHTML = 
    `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${compMove}-emoji.png" class="move-icon"> Computer`;
  }
  
  updateScore()

  localStorage.setItem('score', JSON.stringify(score));
}


function updateScore() {
  document.getElementById('score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}


function сompChoose() {
  const randomNumber = Math.random();
  let compMove = ``;
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    compMove = `Rock`;
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    compMove = `Paper`;
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    compMove = `Scissors`;
  }
  return compMove;
}