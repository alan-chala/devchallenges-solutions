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

function showStep(index) {
  steps.forEach((step) => step.classList.remove("active"));
  steps[index].classList.add("active");
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

function updateTopicSelectionState() {
  checkBoxes.forEach((checkbox) => {
    const label = checkbox.closest("label");
    if (label) {
      label.classList.toggle("selected", checkbox.checked);
    }
  });
}

function updateSummary() {
  nameSpan.textContent = nameField.value.trim();
  emailSpan.textContent = emailField.value.trim();
  topicsList.innerHTML = userSelection
    .map((item) => `<li>${item}</li>`)
    .join("");
}

firstNextBtn.addEventListener("click", () => {
  const hasName = nameField.value.trim() !== "";
  const emailValidation = validateEmail(emailField.value.trim());

  if (!hasName || !emailValidation) {
    document.querySelector(".message-1").style.display = "block";
    return;
  }

  document.querySelector(".message-1").style.display = "none";
  updateSummary();

  if (currentStep < steps.length - 1) {
    currentStep += 1;
    showStep(currentStep);
  }
});

checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const index = userSelection.indexOf(selectedValue);

    if (event.target.checked && index === -1) {
      userSelection.push(selectedValue);
    }

    if (!event.target.checked && index !== -1) {
      userSelection.splice(index, 1);
    }

    updateTopicSelectionState();
  });
});

secondNextBtn.addEventListener("click", () => {
  if (userSelection.length === 0) {
    document.querySelector(".message-2").style.display = "block";
    return;
  }

  document.querySelector(".message-2").style.display = "none";
  updateSummary();

  if (currentStep < steps.length - 1) {
    currentStep += 1;
    showStep(currentStep);
  }
});

updateTopicSelectionState();
