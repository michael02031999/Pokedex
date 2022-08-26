let pokemonTypeColors = {
  grass: "rgb(222, 253, 223)",
  fire: "rgb(253, 223, 223)",
  water: "rgb(222, 242, 253)",
  bug: "rgb(248, 212, 163)",
  normal: "rgb(245, 245, 245)",
  poison: "rgb(152, 215, 165)",
  electric: "rgb(251, 247, 221)",
  ground: "rgb(244,231,217)",
  fairy: "rgb(252, 235, 254)",
  fighting: "rgb(230,224,212)",
  psychic: "rgb(235, 237, 161)",
  rock: "rgb(213, 213, 212)",
  ghost: "rgb(112, 88, 152)",
  ice: "rgb(152, 216, 216)",
  dragon: "rgb(151, 179, 230)",
  flying: "rgb(245, 245, 245)",
};

let pokemonNumberColors = {
  grass: "rgb(202, 233, 203)",
  fire: "rgb(233, 203, 203)",
  water: "rgb(202, 232, 233)",
  bug: "rgb(228, 152, 143)",
  normal: "rgb(225, 225, 225)",
  poison: "rgb(132, 195, 145)",
  electric: "rgb(231, 227, 201)",
  ground: "rgb(224,211,197)",
  fairy: "rgb(232, 215, 234)",
  fighting: "rgb(210,204,192)",
  psychic: "rgb(215, 217, 141)",
  rock: "rgb(193, 193, 192)",
  ghost: "rgb(92, 68, 132)",
  ice: "rgb(132, 196, 196)",
  dragon: "rgb(131, 159, 210)",
  flying: "rgb(225, 225, 225)",
};

let pokemonContainer = document.getElementById("pokemonContainer");

async function getPokemon() {
  let allPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=999")
    .then((response) => response.json())
    .then((data) => data);

  for (let i = 0; i < 999; i++) {
    //console.log(allPokemon["results"][i]["url"]);
    let url = allPokemon["results"][i]["url"];
    let pokemon = await fetch(url)
      .then((response) => response.json())
      .then((data) => data);

    //console.log(pokemon["types"].length);

    console.log(pokemon["types"][pokemon["types"].length - 1]["type"]["name"]);

    /* console.log(
      pokemon["sprites"]["other"]["official-artwork"]["front_default"]
    ); */
    /* console.log(pokemon["types"][0]["type"]["name"]);
    console.log(pokemonTypeColors[pokemon["types"][0]["type"]["name"]]);
 */

    //This div is to create the card and background colord

    let pokemonCard = document.createElement("div");
    pokemonCard.classList.add("card");
    pokemonCard.style.backgroundColor =
      pokemonTypeColors[
        pokemon["types"][pokemon["types"].length - 1]["type"]["name"]
      ];

    pokemonContainer.append(pokemonCard);

    //This div is for pokemon icon

    let pokemonIconHolder = document.createElement("div");

    pokemonIconHolder.classList.add("iconHolder");
    pokemonIconHolder.style.backgroundImage =
      "url(" +
      pokemon["sprites"]["other"]["official-artwork"]["front_default"] +
      ")";

    pokemonCard.append(pokemonIconHolder);

    //This div is for the pokemon number

    numbers = "#00" + (i + 1);
    if (numbers.length > 4) {
      do {
        numbers = numbers.replace("0", "");
      } while (numbers.length > 4);
    }

    let pokemonNumber = document.createElement("div");
    pokemonNumber.classList.add("pokemonNumber");
    pokemonNumber.style.backgroundColor =
      pokemonNumberColors[
        pokemon["types"][pokemon["types"].length - 1]["type"]["name"]
      ];

    pokemonCard.append(pokemonNumber);
    pokemonNumber.insertAdjacentText("beforeend", numbers);

    //This div is for pokemon name

    let pokemonName = document.createElement("div");
    pokemonName.classList.add("pokemonName");

    let name = pokemon["name"];

    name = name.charAt(0).toUpperCase() + name.slice(1);

    pokemonName.insertAdjacentText("beforeend", name);
    pokemonCard.append(pokemonName);

    //This div is for the pokemon type

    let pokemonType = document.createElement("div");
    pokemonType.classList.add("pokemonType");
    pokemonType.insertAdjacentText(
      "beforeend",
      "Type: " + pokemon["types"][pokemon["types"].length - 1]["type"]["name"]
    );

    pokemonCard.append(pokemonType);
  }
}

getPokemon();

/* let numbers;

for (let i = 1; i < 150; i++) {
  numbers = "#00" + i;
  if (numbers.length > 4) {
    do {
      numbers = numbers.replace("0", "");
    } while (numbers.length > 4);
  }
  console.log(numbers);
} */
