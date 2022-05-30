const modal = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".popup__close");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  console.log("a");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/*
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, orange) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(orange);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} pieces of orange`;
  return juice;
};

console.log(fruitProcessor(2, 3));

const calcNumber = function (a, b) {
  return a + b;
};

const sum = function (c, d, e, f) {
  const sum1 = calcNumber(c, d);
  const sum2 = calcNumber(e, f);
  return sum1 * sum2;
};
console.log(sum(1, 2, 3, 4));
*/
