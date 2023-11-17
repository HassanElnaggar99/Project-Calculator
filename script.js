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
