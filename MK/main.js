const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')

const player1 = {
  player: 1,
  name: 'sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['Kunai', 'Футбольный мячик'],
  attack: function () {
    console.log('name ' + 'Fight...')
  }
}
const player2 = {
  player: 2,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: 'Kunai',
  attack: function () {
    console.log('name ' + 'Fight...')
  }
}
function createPlayer(player, name, hp ) {
  const $player = document.createElement('div');
  $player.classList.add(player);

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
  $img.src ='http://reactmarathon-api.herokuapp.com/assets/sonya.gif'

  $player.appendChild($character);

  $progressBar.appendChild($life);

  $progressBar.appendChild($name);

  $character.appendChild($img);
  $arenas.appendChild($player);

}
function playerLose(name) {
  const $loseTitle = document.createElement('div') 
  $loseTitle.classList.add('loseTitle')
  $loseTitle.innerText = name + ' lose';
  

  return $loseTitle
}
function playerWin() {
  const $winTitle = document.createElement('div');
  $winTitle.classList.add('winTitle')
  $winTitle.innerHTML = player1.name + ' win'
  return $winTitle
}
function playerWin2() {
  const $winTitle = document.createElement('div');
  $winTitle.classList.add('winTitle')
  $winTitle.innerHTML = player2.name + ' win'
  return $winTitle
}
function changeHP(player) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life')
    player.hp -= Math.ceil(Math.random() * 20)
    $playerLife.style.width = player.hp + '%';
    if (player.hp > 1){
      $randomButton.disabled = false
    }
    if(player1.hp <= 0) {
      $arenas.appendChild(playerWin2())
      $randomButton.disabled = true

      }else if(player2.hp <= 0) {
        $arenas.appendChild(playerWin())
      $randomButton.disabled = true
      }
      else if (player.hp <= 0){
      $playerLife.style.width = '0%';   
    }
  }

$randomButton.addEventListener('click', function () {
  console.log('$$$: Click random button');
  changeHP(player1);
  changeHP(player2);
  console.log('hmmmm')
})
createPlayer('player1', 'SONYA', 100);
createPlayer('player2', 'SCORPION', 100);