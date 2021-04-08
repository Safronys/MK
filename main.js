function createPlayer(namePlayer,nameHero ){
  const $pl = document.createElement('div');
  $pl.classList.add(nameHero.name);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $life = document.createElement('div');
  $life.classList.add("life");
  $life.style.width = nameHero.hp + '%';

  const $name = document.createElement('div');
  $name.innerText = nameHero.name;
  $name.classList.add('name');

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $img = document.createElement('img');
  $img.src = nameHero.img;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  $pl.appendChild($progressbar);
  $pl.appendChild($character);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($pl);



}

const scorpion = {
    name: 'Scorpion',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Sword'],
    attack: function (){
        console.log(pl1.name + ' Fight...');
    }
}

createPlayer('Player1', scorpion);









