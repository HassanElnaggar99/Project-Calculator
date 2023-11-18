let num1, op, num2;

const operators = document.querySelector("#operators");
operators.addEventListener("mousedown", function(e) {
  let btn = e.target;
  if (btn.getAttribute('class') === 'operand'
      && e.button === 0) {
    btn.style.cssText = "background-color: #e6e6e6";
  }
});

operators.addEventListener("mouseup", function(e) {
  let btn = e.target;
  if (btn.getAttribute('class') === 'operand') {
    btn.style.cssText = "background-color: #fff";
  }
});

operators.addEventListener("mouseout", function(e) {
  let btn = e.target;
  if (btn.getAttribute('class') === 'operand') {
    btn.style.cssText = "background-color: #fff";
  }
});

operators.addEventListener("click", function(e) {
  const results = document.querySelector("#results");

  let btn = e.target, id = btn.id;
  if (btn.getAttribute('class') === 'operand') {
    // results.textContent += results.id;
    switch(btn.id) {
      case "btn_0":
      case "btn_1":
      case "btn_2":
      case "btn_3":
      case "btn_4":
      case "btn_5":
      case "btn_6":
      case "btn_7":
      case "btn_8":
      case "btn_9":
      case "btn_.":
        results.textContent += id[id.length - 1];
        break;
      case "btn_back":
        results.textContent = results.textContent.slice(0, -1);
        break;
      case "btn_clear":
        results.textContent = "";
        break;

    }
  }
});

const results = document.querySelector("#results");

function evaluate(string) {
  let parts = string.split(" ");
  let num1, op, num2, result;
  num1 = Number(parts[0]);
  for (let i = 1; i < parts.length; i += 2) {
    op = parts[i];
    num2 = Number(parts[i + 1]);
    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '×':
      case '*':
        result = num1 * num2;
        break;
      case '÷':
      case '/':
        result = num1 / num2;
        break;
      case '%':
        result = num1 / 100;
        break;
      case '+/-':
        result = -num1;
        break;
    }
    num1 = result;
  }
  return result || Number(string);
}
