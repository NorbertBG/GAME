let counter = 0;
let points = 0;
class gameMain {
  constructor(title, subtitle, background, options) {
    this.title = title;
    this.subtitle = subtitle;
    this.background = background;
    this.result = document.getElementById('result');
    this.options = options;
    this.buttonAction();
  }
  // increment adding the function incrementPoints:
  incrementCounter() {
    this.incrementPoints();
    counter++;
    if (counter === gameStory.length) {
      this.showResult();
    } else {
      this.changeContent();
    }
  }
  changeContent() {
    this.title = gameStory[counter].title;
    this.subtitle = gameStory[counter].subtitle;
    this.background = gameStory[counter].background;
    this.options = gameStory[counter].options;
    let title = document.querySelector("#game-container h1");
    title.innerHTML = gameStory[counter].title;
    let subtitle = document.querySelector("#game-container h2");
    subtitle.innerHTML = gameStory[counter].subtitle;
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
  // add the score of the input:
  incrementPoints() {
    const selectedOption = document.querySelector('input[name="itemOption"]:checked');
    if (selectedOption) {
      points += parseInt(selectedOption.value);
      console.log("Score:", points);
    }
  }
  // show result page and hide the game container and the button:
  showResult() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('button').style.display = 'none';
    if (points < 50) {
      this.result.innerHTML = `
          <div><h1>Failed!</h1></div>
          <div><p>You got only ${points} points. Please try to make better live decisions!</p></div>
        `;
    } else if (points < 100) {
      this.result.innerHTML = `
          <div><h1>Good job!</h1></div>
          <div><p>You got ${points} points. Keep it up and with time you will learn to choose better!</p></div>
        `;
    } else {
      this.result.innerHTML = `
          <div><h1>Congratulations!</h1></div>
          <div><p>You got ${points} points. You are awesome and will have a great future!</p></div>
        `;
    }
  }
}
// display the game container:
const game = new gameMain(gameStory[0].title, gameStory[0].subtitle, gameStory[0].background, gameStory[0].options);
const container = document.getElementById('game-container');
container.innerHTML =
  `<div class="background" style="background-image: ${game.background}">
<div class="content-box">
<h1>${game.title}</h1>
<h2>${game.subtitle}</h2>
<div class="options">${game.options.map(item => `<input type="radio" id="item" name="itemOption" value=${item.score}> <label for="item">  ${item.option} </label>`).join('')}</div>
</div>
</div>`;
