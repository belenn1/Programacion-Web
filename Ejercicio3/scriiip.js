function agregarElemento() {
  const input = document.getElementById("input").value;
  const lista = document.getElementById("lista");

  const elementoDeLista = document.createElement("li");
  elementoDeLista.textContent = input;
  lista.appendChild(elementoDeLista);

  const button = document.createElement("button;");
  button.textContent = "borrar";
  elementoDeLista.appendChild(button);

  button.onclick = function () {
    lista.removeChild(elementoDeLista);
  };
}
