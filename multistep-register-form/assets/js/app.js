let currentStep = 0

const steps = document.querySelectorAll("article")

const firstNextBtn = document.querySelector(".first-next")
const secondNextBtn = document.querySelector(".second-next")

const nameField = document.getElementById("name")
const emailField = document.getElementById("email")

function showStep(index) {
  steps.forEach(step => step.classList.remove("active"))
  steps[index].classList.add("active")
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

firstNextBtn.addEventListener("click", () => {
  let emailValidation = validateEmail(emailField.value)

  if (!nameField.value.trim || !emailValidation) {
    console.log("All fields are required!")
    return
  } else {
    if (currentStep < steps.length - 1) {
      currentStep++
      showStep(currentStep)
    }
  }
})
