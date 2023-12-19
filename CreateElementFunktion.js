// skapar containers till alla pokemon i teamlist och reservlist
function createPokemonElement(pokemon) {
  const element = document.createElement("li");
  const button = document.createElement("button");
  const pelement = document.createElement("p");
  const divContainer = document.createElement("div");
  const moveButtonUpp = document.createElement("button");
  const moveButtonDown = document.createElement("button");
  element.classList.add("element");
  button.classList.add("kick-button");
  moveButtonDown.classList.add("move-btn-down");
  moveButtonUpp.classList.add("move-btn-upp");
  moveButtonUpp.innerText = "Flytta upp";
  moveButtonDown.innerText = "Flytta ner";
  divContainer.classList.add("container-div");
  element.innerText = `${pokemon.name}`.toUpperCase();
  button.innerText = "kicka";
  pelement.innerText = "Abilitys:";
  pelement.classList.add("ability");
  if (pokemon.bild) {
    const bild = document.createElement("img");
    bild.src = `${pokemon.bild}`;
    element.appendChild(bild);
    bild.classList.add("bild");
  } else {
    const bild2 = document.createElement("img");
    bild2.src = "./bilder/anonymbild.jpg";
    element.appendChild(bild2);
    bild2.classList.add("bild2");
  }
  if (pokemon.abilities && pokemon.abilities.length > 0) {
    pokemon.abilities.forEach((ability) => {
      const abilityName = ability.name;
      const abilityParagraph = document.createElement("p");
      abilityParagraph.innerText = `${abilityName}`;
      abilityParagraph.classList.add("ability-name");
      pelement.appendChild(abilityParagraph);
    });
  }
  element.appendChild(pelement);
  element.appendChild(button);
  element.appendChild(divContainer);
  divContainer.appendChild(moveButtonDown);
  divContainer.appendChild(moveButtonUpp);
  return element;
}
export { createPokemonElement };
