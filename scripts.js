document.addEventListener("DOMContentLoaded", function () {
  const salvarBtn = document.getElementById("salvarBtn");
  const textoInput = document.getElementById("texto");
  const listaTextos = document.getElementById("listaTextos");
  const textoSalvoDiv = document.getElementById("textoSalvo");

  const textosSalvos = []; // Vetor para armazenar os textos salvos

  salvarBtn.addEventListener("click", function () {
    const texto = textoInput.value;
    textosSalvos.push(texto); // Adiciona o texto ao vetor de textos salvos
    exibirTextosSalvos();
  });

  textoInput.addEventListener("input", function () {
    exibirTextosSalvos();
  });

  function exibirTextosSalvos() {
    listaTextos.innerHTML = ""; // Limpa a lista de textos salvos
    textosSalvos.forEach(function (texto, index) {
      const li = document.createElement("li");
      li.textContent = `Linha ${index + 1}: ${texto}`;
      listaTextos.appendChild(li);
    });
    textoSalvoDiv.classList.remove("hidden");
  }
});
