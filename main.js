const numbers = document.querySelector('#numberBtn');
const out1 = document.querySelector('#out1');
const cual = document.querySelector('#cualBtn');
const out3 = document.querySelector('#out3');
const pokemonBtn = document.querySelector('#pokemonBtn');
const numberInput = document.querySelector('#numberInput');
const out2 = document.querySelector('#out2');

let impares = [];
const numbersarray = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
let sinumber = [];

const pokemons = [ 'bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle','blastoise','caterpie','metapod','butterfree',
  'weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot','rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash',
  'nidoran-f','nidorina','nidoqueen','nidoran-m','nidorino','nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff','wigglytuff','zubat','golbat',
  'oddish','gloom','vileplume','paras','parasect','venonat','venomoth','diglett','dugtrio','meowth','persian','psyduck','golduck','mankey','primeape','growlithe',
  'arcanine','poliwag','poliwhirl','poliwrath','abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell','victreebel','tentacool','tentacruel',
  'geodude','graveler','golem','ponyta','rapidash','slowpoke','slowbro','magnemite','magneton','farfetchd','doduo','dodrio','seel','dewgong','grimer','muk','shellder',
  'cloyster','gastly','haunter','gengar', 'onix','drowzee','hypno','krabby','kingler','voltorb' ]

numbers.addEventListener('click', (e) => {
  e.preventDefault();
  for(let i =0; i <= 50; i++){
    let impar = i % 2;
    if(impar != 0)
      impares.push(i)
  }
  out1.innerHTML = impares;
})

cual.addEventListener('click', (e) =>{
  e.preventDefault();
  for(let i = 0; i <= numbersarray.length - 1; i++){
    if (!isNaN(numbersarray[i])){
      sinumber.push(numbersarray[i]);
    }
  }
  out3.innerHTML = sinumber;
})

pokemonBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.clear()
  for(let i = 1; i <= numberInput.value; i++){
    const mulcinco = i % 5;
    if (mulcinco == 0){
      
      console.log(pokemons[i])
    }
  }
})