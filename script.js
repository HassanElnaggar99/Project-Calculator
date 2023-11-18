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
      case "btn_=":
      {
        results.textContent = evaluate(results.textContent) || "";
      }
        break;
      case "btn_+":
      case "btn_-":
      case "btn_x":
      case "btn_divide":
        let ans = evaluate(results.textContent);
        if (ans) {
          results.textContent = ans ;
        }
        switch(btn.id) {
          case "btn_+":
            results.textContent += " + ";
            break;
          case "btn_-":
            results.textContent += " - ";
            break;
          case "btn_x":
            results.textContent += " × ";
            break;
          case "btn_divide":
            results.textContent += " ÷ ";
            break;
        }

        break;
      case "btn_percent":
        results.textContent += " %";
        results.textContent = evaluate(results.textContent) || "";
        break;
      case "btn_sign":
        results.textContent += " +/-";
        results.textContent = evaluate(results.textContent) || "";
        break;
    }
  }
});

const results = document.querySelector("#results");

function myPrecision(num) {
  return Math.round(num * 1000) / 1000;
}

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
  if (result === Infinity || result === -Infinity) {
    return "ERROR";
  }
  result = result || Number(string);
  return myPrecision(result);
}
