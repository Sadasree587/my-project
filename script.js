let result = document.getElementById("result");

// Basic operations
function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}

// Scientific
function squareRoot() {
  result.value = Math.sqrt(result.value);
}

function square() {
  result.value = result.value * result.value;
}

function percent() {
  result.value = result.value / 100;
}

// Dark Mode
document.getElementById("modeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Keyboard Support
document.addEventListener("keydown", function(e) {
  if ((e.key >= 0 && e.key <= 9) || "+-*/.".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearResult();
  }
});
