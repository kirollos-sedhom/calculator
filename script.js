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

function operate(operatorr, first, second) {
  if (operatorr == "+") {
    return add(first, second);
  } else if (operatorr == "*") {
    return multiply(first, second);
  } else if (operatorr == "-") {
    return subtract(first, second);
  } else if (operatorr == "/") {
    return divide(first, second);
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
    if (screen.textContent == 0) {
      screen.textContent = display_value;
    } else {
      screen.textContent += display_value;
    }
  });
});
let first = 0;
let second = 0;
// let operatorss = document.querySelectorAll(".orange");
// operatorss.forEach((item) => {
//   item.addEventListener("click", () => {
//     display_value = screen.textContent;
//     let operator = item.textContent;
//     let firstno = display_value;
//     if (item.textContent == "=") {
//       // alert(operate(operator, firstno, display_value));
//       second = screen.textContent;
//       alert(
//         `adding ${first} to ${second} equals ${operate(
//           operator,
//           parseInt(first),
//           parseInt(second)
//         )}`
//       );
//       // screen.textContent += operate(operator, first, second);
//       first = 0;
//       second = 0;
//       // alert(operate(operator, first, second));
//     } else {
//       display_value = screen.textContent;
//       first = screen.textContent;
//       screen.textContent = 0;
//     }
//   });
// });
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
