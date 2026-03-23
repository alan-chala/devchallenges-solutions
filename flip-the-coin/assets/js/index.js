const coinImage = document.querySelector('.coin');
const coinFace = document.querySelector('.coin-face');
const flipButton = document.querySelector('button');

const options = ['Heads', 'Tails'];

flipButton.addEventListener("click", () => {

  const option = Math.floor(Math.random() * options.length);
  let result = options[option];

  if (result === "Heads") {
    coinImage.src = "./assets/images/heads.svg";
  } else {
    coinImage.src = "./assets/images/tails.svg";
  }

  coinFace.textContent = result;

})
