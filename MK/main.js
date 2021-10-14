
const player1 = {
  name: 'sonya',
  hp: 100,
  img: '',
  weapon: ['Kunai', 'Футбольный мячик'],
  attack: function () {
    console.log('name ' + 'Fight...')
  }
}
const player2 = {
  name: 'Scorpion',
  hp: 100,
  img: '',
  weapon: 'Kunai',
  attack: function () {
    console.log('name ' + 'Fight...')
  }
}
function createPlayer(player, name, hp ) {
  const $player = document.createElement('div');
  $player.classList.add(`${player}`);

  const $arenas = document.querySelector('.arenas')

  const $progressBar = document.createElement('div');
  $progressBar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $life = document.createElement('div');
  $life.classList.add('life')
  $life.style.width = hp + '%';
  const $name = document.createElement('div');
  $name.classList.add('name')
  $name.innerText = name;

  const $img = document.createElement('img');
  $player.appendChild($progressBar);
  $img.src = 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif'

  $player.appendChild($character);

  $progressBar.appendChild($life);

  $progressBar.appendChild($name);

  $character.appendChild($img);

  $arenas.appendChild($player);

}
createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);