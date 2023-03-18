// const myButton = document.getElementById('myButton');
// myButton.addEventListener('click', function() {
//   document.body.innerHTML = '<h1>dsfsdf</h1><button id="myButton2">Ir a la siguiente página</button>';
// });


class gameMain {
  constructor (title, subtitle, background, options){
      this.title = title;
      this.subtitle = subtitle;
      this.background = background;
      this.options = options;
  }
}
const game = new gameMain(gameStory[0].title, gameStory[0].subtitle, gameStory[0].background, gameStory[0].options);

const container = document.getElementById('game-container');
container.innerHTML = `
  <h1>${game.title}</h1>
  <h2>${game.subtitle}</h2>
  <div style="background-image: ${game.background}"></div>
  <ul>
    ${game.options.map(option => `<li>${option.option} - ${option.Score}</li>`).join('')}
  </ul>
`;

