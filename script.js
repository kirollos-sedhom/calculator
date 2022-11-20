function add(first, second) {
  return first + second;
}

function subtract(first, second) {
  return first - second;
}

function multiply(first, second) {
  return first * second;
}

function divide(first, second) {
  return first / second;
}
let calculated = false;
function operate(operatorr, first, second) {
  if (operatorr == "add") {
    return add(first, second);
  } else if (operatorr == "multiply") {
    return multiply(first, second);
  } else if (operatorr == "subtact") {
    return subtract(first, second);
  } else if (operatorr == "divide") {
    return divide(first, second);
  } else {
    alert("error occured");
  }
}
let clrall = document.querySelector("#clearall");
let deletee = document.querySelector("#delete");
let display_value = 0;
let screen = document.querySelector(".screenoutput");
let btns = document.querySelectorAll(".btn");
btns.forEach((item) => {
  item.addEventListener("click", () => {
    // alert(display_value);
    display_value = item.textContent;
    if (calculated == true) {
      calculated = false;
      screen.textContent = display_value;
      display_value = screen.textContent;
    } else if (screen.textContent == 0 || chain == true) {
      screen.textContent = display_value;
      display_value = screen.textContent;
    } else {
      screen.textContent += display_value;
      display_value = screen.textContent;
    }
  });
});
let chain = false;
let first = 0;
let second = 0;
let firstoperation = true;
let flag = "";

// clear using ac
clrall.addEventListener("click", () => {
  display_value = 0;

  screen.textContent = 0;
});
deletee.addEventListener("click", () => {
  display_value = Math.floor(screen.textContent / 10);
  // alert(`screen contains ${display_value}`);
  screen.textContent = display_value;
});

let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#subtract");
let multiplyButton = document.querySelector("#multiply");
let divideButton = document.querySelector("#divide");

let evalButton = document.querySelector("#eval");
// let first = 0;
addButton.addEventListener("click", () => {
  if (chain == true) {
    calculated = true;
    second = display_value;
    // chain = false;
    if (flag == "add") {
      display_value = add(parseInt(first), parseInt(second));
      // screen.textContent = display_value;
      screen.textContent = "";
      screen.textContent = display_value;
    } else if (flag == "multiply") {
      screen.textContent = multiply(parseInt(first), parseInt(second));
    } else if (flag == "subtract") {
      screen.textContent = subtract(parseInt(first), parseInt(second));
    } else if (flag == "divide") {
      screen.textContent = divide(parseInt(first), parseInt(second));
    } else {
      alert("error occured");
    }
    first = 0;
    second = 0;
    screen.textContent = display_value;
    flag = "add";
    // flag = "";
  } else {
    chain = true;
    first = display_value;
    // display_value = 0;
    // screen.textContent = display_value;
    screen.textContent = 0;
    flag = "add";
  }
});
multiplyButton.addEventListener("click", () => {
  if (chain == true) {
    second = display_value;
    chain = false;
    if (flag == "add") {
      display_value = add(parseInt(first), parseInt(second));
      screen.textContent = "";
      screen.textContent = display_value;
    } else if (flag == "multiply") {
      screen.textContent = multiply(parseInt(first), parseInt(second));
    } else if (flag == "subtract") {
      screen.textContent = subtract(parseInt(first), parseInt(second));
    } else if (flag == "divide") {
      screen.textContent = divide(parseInt(first), parseInt(second));
    } else {
      alert("error occured");
    }
    first = 0;
    second = 0;
    screen.textContent = display_value;

    // flag = "";
  }
  chain = true;
  first = display_value;

  display_value = 0;
  screen.textContent = display_value;

  flag = "multiply";
});
divideButton.addEventListener("click", () => {
  if (chain == true) {
    second = display_value;
    chain = false;
    if (flag == "add") {
      display_value = add(parseInt(first), parseInt(second));
      screen.textContent = "";
      screen.textContent = display_value;
    } else if (flag == "multiply") {
      screen.textContent = multiply(parseInt(first), parseInt(second));
    } else if (flag == "subtract") {
      screen.textContent = subtract(parseInt(first), parseInt(second));
    } else if (flag == "divide") {
      screen.textContent = divide(parseInt(first), parseInt(second));
    } else {
      alert("error occured");
    }
    first = 0;
    second = 0;
    screen.textContent = display_value;

    // flag = "";
  }
  chain = true;
  first = display_value;

  display_value = 0;
  screen.textContent = display_value;

  flag = "divide";
});
subtractButton.addEventListener("click", () => {
  if (chain == true) {
    second = display_value;
    chain = false;
    if (flag == "add") {
      display_value = add(parseInt(first), parseInt(second));
      screen.textContent = "";
      screen.textContent = display_value;
    } else if (flag == "multiply") {
      screen.textContent = multiply(parseInt(first), parseInt(second));
    } else if (flag == "subtract") {
      screen.textContent = subtract(parseInt(first), parseInt(second));
    } else if (flag == "divide") {
      screen.textContent = divide(parseInt(first), parseInt(second));
    } else {
      alert("error occured");
    }
    first = 0;
    second = 0;
    screen.textContent = display_value;

    // flag = "";
  }
  chain = true;
  first = display_value;

  display_value = 0;
  screen.textContent = display_value;

  flag = "subtract";
});
evalButton.addEventListener("click", () => {
  second = display_value;
  chain = false;
  if (flag == "add") {
    display_value = add(parseInt(first), parseInt(second));
    screen.textContent = "";
    screen.textContent = display_value;
  } else if (flag == "multiply") {
    screen.textContent = multiply(parseInt(first), parseInt(second));
  } else if (flag == "subtract") {
    screen.textContent = subtract(parseInt(first), parseInt(second));
  } else if (flag == "divide") {
    screen.textContent = divide(parseInt(first), parseInt(second));
  } else {
    alert("error occured");
  }
  first = 0;
  second = 0;
  calculated = true;
  flag = "";
});
