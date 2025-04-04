// agregar un nuevo elemento a la lista
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  
  if (inputValue === '') {
      alert("Debes escribir algo!");
      return;
  }
  
  li.textContent = inputValue;
  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";

  // Botón de eliminar (X)
  var span = document.createElement("SPAN");
  span.textContent = "\u00D7";
  span.className = "close";
  li.appendChild(span);

  span.onclick = function() {
      this.parentElement.remove();
  };
}

// Marcar tarea como completada
document.querySelector("ul").addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
  }
});
