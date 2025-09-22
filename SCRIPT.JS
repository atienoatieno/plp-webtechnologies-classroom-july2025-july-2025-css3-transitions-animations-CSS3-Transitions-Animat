// Example: Global variable
let globalMessage = "This is a global variable";

// Demonstrate scope: local vs global
function showScopeExample() {
  let localMessage = "This is a local variable";
  document.getElementById("scope-output").innerText =
    `Global: ${globalMessage} | Local: ${localMessage}`;
}

// Function with parameters & return value
function calculateArea(width, height) {
  let area = width * height; // local scope
  document.getElementById("calc-output").innerText =
    `Rectangle area (${width} x ${height}) = ${area}`;
  return area;
}

// Trigger CSS animation with JS
function triggerBoxAnimation() {
  let box = document.querySelector(".js-box");
  box.classList.remove("animate"); // reset
  void box.offsetWidth; // reflow trick to restart animation
  box.classList.add("animate");
}

// Toggle modal window
function toggleModal() {
  let modal = document.getElementById("modal");
  modal.classList.toggle("show");
}
