// const myButton = document.getElementById('myButton');
// myButton.addEventListener('click', function() {
//   document.body.innerHTML = '<h1>dsfsdf</h1><button id="myButton2">Ir a la siguiente página</button>';
// });

let counter = 0;
let points = 0;
class gameMain {
  constructor(title, subtitle, background, options) {
    this.title = title;
    this.subtitle = subtitle;
    this.background = background;
    this.options = options;
    this.buttonAction();
  }
  incrementCounter() {
    counter++;
    this.changeContent();
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
    options.innerHTML = gameStory[counter].options.map(item => `<input type="radio" id="item" name="itemOption" value=${item.option.score}> <label for="item">  ${item.option} </label>`).join('');
  }
  buttonAction() {
    console.log(this);
    const button = document.querySelector("#button");
    button.addEventListener("click", () => {
      this.incrementCounter()
    });
  }
}
// incrementPoints() {
//   points += this.options.score
// }
const game = new gameMain(gameStory[0].title, gameStory[0].subtitle, gameStory[0].background, gameStory[0].options);
const container = document.getElementById('game-container');
container.innerHTML =
  `<div class="background" style="background-image: ${game.background}">
<div class="content-box">
<h1>${game.title}</h1>
<h2>${game.subtitle}</h2>
<div class="options">${game.options.map(item => `<input type="radio" id="item" name="itemOption" value=${item.option.score}><label for="item">${item.option}</label>`).join('')}</div>
</div>
</div>`;

