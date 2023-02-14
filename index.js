let input = document.querySelector(".input");
let custom = document.querySelector(".custom");
let people = document.querySelector(".people");
let personAmt = document.getElementById("person-amt");
let secondAmt = document.getElementById("second-amt");
let reset = document.querySelector(".reset");
let allbuttons = document.querySelectorAll(".btn");
let errorEl = document.querySelector(".error");

// for (let btn of allbuttons) {
//   btn.addEventListener("click", function () {
//     buttonPercent = Number(allbuttons.innerHTML);
//     // Number.parseInt(btn.innerHTML);
//   });
// }

for (let i = 0; i < allbuttons.length; i++) {
  allbuttons[i].addEventListener("click", function () {
    buttonPercent = Number.parseInt(allbuttons[i].innerHTML);
  });
}
people.addEventListener("input", function () {
  let billNumber = +input.value;
  let NumberofPeople = +people.value;

  let tip = (billNumber * buttonPercent) / 100;
  let total = billNumber + tip;

  personAmt.textContent = `$${(tip / NumberofPeople).toFixed(2)}`;
  secondAmt.textContent = `$${(total / NumberofPeople).toFixed(2)}`;

  if (custom.value !== "") {
    buttonPercent = +custom.value;
  }

  if (+people.value === 0) {
    errorEl.style.display = "block";
    personAmt.textContent = "$0.00";
    secondAmt.textContent = "$0.00";
  } else {
    errorEl.style.display = "none";
  }
});
reset.addEventListener("click", function () {
  buttonPercent = 0;
  personAmt.textContent = "$0.00";
  secondAmt.textContent = "$0.00";
  input.value = "";
  custom.value = "";
  people.value = "";
});
