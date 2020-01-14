  let searchButton = document.querySelector("#enter");

  let userInput = document.querySelector("#userInput");

  let pokeName = document.querySelector("#poke-name");

  let pokeHeight = document.querySelector("#poke-height");

  let pokeWeight = document.querySelector("#poke-weight");

  let pokeAbilities = document.querySelector("#abilities");

  let imgWrapper = document.querySelector("#img-wrapper");




  async function display(input) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
      const data = await response.json();
      let imageLink = data.sprites.front_default
      let image = document.createElement("IMG");
      image.setAttribute("src", imageLink);
      image.setAttribute("class", "enlarge");
      imgWrapper.lastChild.remove();
      imgWrapper.appendChild(image);
      let name = data.name;
      pokeName.innerHTML = `Name: ${name}`;
      let height = data.height;
      pokeHeight.innerHTML = `Height: ${height}`;
      let weight = data.weight;
      pokeWeight.innerHTML = `Weight: ${weight}`;
      abilitiesArray = data.abilities;
      pokeAbilities.innerHTML = "Abilities: ";
      for await (let abilityObject of abilitiesArray) {
        let abilityName = abilityObject.ability.name;
        console.log(abilityName);
        pokeAbilities.innerHTML = pokeAbilities.innerHTML + `${abilityName}, `;
      };
    } catch(error) {
      alert("No such pokemon");
    }
  }



  function inputLength() {
    return userInput.value.length;
  }

  function displayAfterClick() {
    if (inputLength() > 0) {
      display(userInput.value);
    }
  }

  function displayAfterEnter() {
    if (inputLength() > 0 && event.keyCode === 13) {
      display(userInput.value);
    }
  }

  searchButton.addEventListener("click",displayAfterClick);

  userInput.addEventListener("keypress", displayAfterEnter);
