let counter = 0;
let points = 0;
let imgPlayer;

class gameMain {
  constructor(title, background, options, playerChosen, imgPlayer) {
    this.title = title;
    this.background = background;
    this.result = document.getElementById('result');
    this.options = options;
    this.playerChosen = playerChosen;
    this.imgPlayer = imgPlayer;
    this.buttonAction();
    console.log(playerChosen)
  };

  // increment adding the function incrementPoints
  incrementCounter() {
    this.incrementPoints();
    counter++;
    if (counter === gameStory.length) {
      this.showResult();
    } else {
      this.changeContent();
    }
  };

  changeContent() {
    this.title = gameStory[counter].title;
    this.background = gameStory[counter].background;
    this.options = gameStory[counter].options;
    let title = document.querySelector("#game-container h1");
    title.innerHTML = gameStory[counter].title;
    let background = document.querySelector(".background")
    background.style.backgroundImage = gameStory[counter].background;
    let options = document.querySelector(".options");
    options.innerHTML = gameStory[counter].options.map(item => `<input type="radio" id="item" name="itemOption" value=${item.score}> <label for="item">  ${item.option} </label>`).join('');
  }

  // add the button action:
  buttonAction() {
    const button = document.querySelector("#button");
    button.addEventListener("click", () => {
      this.incrementCounter()
    });
  }

  // add the score of the input and print an error message that does not let the user continue:
  incrementPoints() {
    const selectedOption = document.querySelector('input[name="itemOption"]:checked');
    if (selectedOption) {
      points += parseInt(selectedOption.value);
      console.log("Score:", points);
    } else {
      alert("Please select a choice to continue!");
      throw new Error("Option not selected");
    }
  }

  // show result page and hide the game container and the button:
  showResult() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('button').style.display = 'none';
    if (points < 5) {
      this.result.innerHTML = `
          <div><h1 class="typing-red">Failed!</h1></div>
          <div><p class="final-result-text">You got only ${points} points. Please try to make better live decisions!</p></div>
        `;
    } else if (points < 10) {
      this.result.innerHTML = `
          <div><h1 class="typing">Good job!</h1></div>
          <div><p class="final-result-text">You got ${points} points. Keep it up and with time you will learn to choose better!</p></div>
        `;
    } else {
      this.result.innerHTML = `
          <div><h1 class="typing-green">Congratulations!</h1></div>
          <div><p class="final-result-text">You got ${points} points. You are awesome and will have a great future!</p></div>
        `;
    }
  }
};

// Choose your player
let playerChosen = null;
function choosePlayer() {
  let allPlayers = document.querySelectorAll(".player");
  allPlayers.forEach((player) => {
    player.addEventListener("click", () => {
      playerChosen = player;
    });
  });
}

// Player validation - function called in the start button

function playerValidation() {
  if (playerChosen === null) {
    alert("Please select a Player to continue!");
    throw new Error("Player not selected");
  }
}
choosePlayer();

// start without the game container and the game button:
document.getElementById('game-container').style.display = "none";
document.getElementById('button').style.display = 'none';

// Welcome page and start button:
imgPlayer = null;
function welcomePage() {
  document.querySelector("#start").addEventListener("click", () => {
    playerValidation()
    playerChosen.setAttribute("id", "theOne");
    imgPlayer = document.querySelector('#theOne img').getAttribute("src");
    console.log(imgPlayer);
    document.getElementById('welcomePage').style.display = "none";
    document.getElementById('game-container').style.display = "inline";
    document.getElementById('button').style.display = 'inline';
    initGame()
  });
  return imgPlayer;
}
console.log(imgPlayer);
welcomePage();

// display the game container:
function initGame() {
  const game = new gameMain(gameStory[0].title, gameStory[0].background, gameStory[0].options, playerChosen, imgPlayer);
  const container = document.getElementById('game-container');
  container.innerHTML =
    `<div class="background" style="background-image: ${game.background}">
<div class="content-box">
<h1 class="options-question">${game.title}</h1>
<img class="image-position-game" src="${game.imgPlayer}" height="50px" width="150px"/>
<div class="options">${game.options.map(item => `<input type="radio" id="item" name="itemOption" value=${item.score}> <label for="item">  ${item.option} </label>`).join('')}</div>
</div>
</div>`;
};