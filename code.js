const inputElA = document.querySelector("#input-a");
const inputElB = document.querySelector("#input-b");
const calcBtn = document.querySelector("#btn-calc");
const resetBtn = document.querySelector("#btn-reset");
const resultEl = document.querySelector("#result");

function add(a, b) {
  return Number(a) + Number(b);
}

calcBtn.addEventListener("click", () => {
  const total = add(inputElA.value, inputElB.value);
  resultEl.innerHTML = total;
});

resetBtn.addEventListener("click", () => {
  inputElA.value = " ";
  inputElB.value = " ";
  resultEl.innerText = " ";
});

console.log(add(5, 8));

/**
 * 1) Eingaben aus Inputs auslesen
 * 2) Funktion add ausführen bei Klick auf den Calc button
 * 3) Ergebnis in das Span Element eintragen
 */

// Alle Element mit denen ihr interagieren müsst in eine Variable speichern
/*
const inputElA = document.querySelector("#input-a");
const inputElB = document.querySelector("#input-b");
const calcBtn = document.querySelector("#btn-calc");
const resetBtn = document.querySelector("#btn-reset");
const resultEl = document.querySelector("#result");

console.log(inputElA);
console.log(inputElB);
console.log(calcBtn);
console.log(resultEl);

function add(a, b) {
  return Number(a) + Number(b);
}

// ❌ Niemals eine Funktion direkt ausführen
// calcBtn.addEventListener("click", add());

// ✅ Immer die Funktion im Callback ausführen
// calcBtn.addEventListener("click", () => add());

calcBtn.addEventListener("click", () => {
  const total = add(inputElA.value, inputElB.value);
  resultEl.innerHTML = total;
});

resetBtn.addEventListener("click", () => {
  inputElA.value = "";
  inputElB.value = "";
  resultEl.innerText = "";
});
*/
