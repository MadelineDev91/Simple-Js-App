// array of objects

let pokemonList = [
  { name: 'Butterfree', height: 3, type: ['honey', 'flowers']},
  { name: 'Pidgeotto', height: 4, type: ['grass', 'bugs']},
  { name: 'Pikachu', height: 9, type: ['steel', 'electric']}
];

for (let i=0; i < pokemonList.length; i++) {
  if (pokemonList[i].height <4 && pokemonList[i].height >1) {
    document.write(pokemonList[i].name + ", height - " + pokemonList[i].height + " :This is a small Pokemon" + "<br>");
  }else if (pokemonList[i].height <5){
    document.write(pokemonList[i].name + ", height - " + pokemonList[i].height + " :This is a medium Pokemon" + "<br>");
  }else {
    document.write(pokemonList[i].name + ", height - " +  pokemonList[i].height + " :Wow, this is a big Pokemon!" + "<br>");
  }
}
