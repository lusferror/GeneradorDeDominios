let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function generadorDeNombres() {
  let dominio = "";
  for (let i of pronoun) {
    dominio = i;
    for (let j of adj) {
      dominio = i + j;
      for (let k of noun) {
        dominio = i + j + k + ".com";
        console.log(dominio);
      }
    }
  }
}
generadorDeNombres();
