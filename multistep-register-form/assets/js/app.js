let currentStep = 0;

const steps = document.querySelectorAll("article");

const firstNextBtn = document.querySelector(".first-next");
const secondNextBtn = document.querySelector(".second-next");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");

const nameSpan = document.querySelector(".name");
const emailSpan = document.querySelector(".email");

const topicsList = document.querySelector(".topics");

const checkBoxes = document.querySelectorAll("input[type='checkbox']");
const userSelection = [];

const formElement = document.querySelector(".form");

function showStep(index) {
  steps.forEach((step) => step.classList.remove("active"));
  steps[index].classList.add("active");
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

firstNextBtn.addEventListener("click", () => {
  let emailValidation = validateEmail(emailField.value);

  if (!nameField.value.trim || !emailValidation) {
    document.querySelector(".message-1").style.display = "block";
    return;
  } else {
    nameSpan.textContent = nameField.value;
    emailSpan.textContent = emailField.value;

    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  }
});

checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const checkBoxValue = e.target.value
    
    if (e.target.checked && !userSelection.includes(checkBoxValue)) {
      userSelection.push(checkBoxValue);
    }
  });
});

secondNextBtn.addEventListener("click", () => {
  if (userSelection.length === 0) {
    document.querySelector(".message-2").style.display = "block";
    return;
  } else {
    const generatedHtml = userSelection.map((item) => {
        return `<li>${item}</li>`;
      }).join("");

    topicsList.innerHTML = generatedHtml;

    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  }
});
