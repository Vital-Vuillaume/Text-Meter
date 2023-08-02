//------Pour que le site soit securise------\\

if (window.location.protocol != "https:") {
  window.location.protocol="https:";
}

//------Element html------\\

const txt = document.querySelector(".txt");
const nb = document.querySelector(".nb");

//------Caractere qui augmente------\\

txt.addEventListener("input", function() {
    const texte = txt.value;
    const nbCaracteres = texte.length;
    nb.textContent = nbCaracteres;
});

//------Nombre de caractere dans le textarea------\\

function limitNumberLength(input, maxLength) {
  if (input.value.length > maxLength) {
    input.value = input.value.slice(0, maxLength);
  }
}
