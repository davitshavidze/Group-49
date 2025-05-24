document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".input-container > input[type='number']");
  const radioInputs = document.querySelectorAll(".input-container > input[type='radio']");
  const radioInputContainers = document.querySelectorAll(".input-container.radio-input");
  const calculateButton = document.querySelector(".calculate-btn");
  const form = document.querySelector("form");
  const emptyResultContainer = document.querySelector(".empty");
  const notEmptyResultContainer = document.querySelector(".not-empty");
  const monthlyRepaymentTag = document.querySelector(".result-box > h1");
  const totalRepaymentTag = document.querySelector(".result-box > h3");

  let mortgageAmount = null,
    mortgageTerm = null,
    interestRate = null,
    mortgageType = null;

  const toggleFocusClass = (input, action) => {
    const inputContainer = input.parentElement;
    const unitBox = inputContainer.firstElementChild;
    inputContainer.classList[action]("input-focused");
    unitBox.classList[action]("unit-focused");
  };

  const handleInputFocus = (input) => {
    input.addEventListener("focus", () => toggleFocusClass(input, "add"));
    input.addEventListener("blur", () => toggleFocusClass(input, "remove"));
  };

  const handleRadioInputClick = (container) => {
    container.addEventListener("click", () => {
      radioInputs.forEach((radioInput) => {
        const isSelected = container.firstElementChild.name === radioInput.name;
        const action = isSelected ? "add" : "remove";
        radioInput.parentElement.classList[action]("input-focused-background");
        radioInput.parentElement.classList[action]("input-focused");
        radioInput.checked = isSelected;
        if (isSelected) mortgageType = radioInput.name;
      });
    });
  };

  const validateInput = (input, value) => {
    const showError = !value;
    const inputContainer = input.parentElement;
    const errorMessage = inputContainer.nextElementSibling;
    const unitBox = input.previousElementSibling;

    errorMessage.classList.toggle("hidden", !showError);
    unitBox.classList.toggle("error-unit", showError);
    inputContainer.classList.toggle("error-border", showError);

    return value;
  };

  const formatNumber = (number) => {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const calculateRepayments = (amount, term, rate) => {
    const monthlyInterestRate = rate / 1200;
    const totalMonths = term * 12;
    const monthlyRepayment =
      (amount * (monthlyInterestRate * (1 + monthlyInterestRate) ** totalMonths)) / ((1 + monthlyInterestRate) ** totalMonths - 1);
    const totalRepaymentAmount = monthlyRepayment * totalMonths;

    return {
      monthlyRepayment: formatNumber(monthlyRepayment.toFixed(2)),
      totalRepaymentAmount: formatNumber(totalRepaymentAmount.toFixed(2)),
    };
  };

  inputs.forEach(handleInputFocus);
  radioInputContainers.forEach(handleRadioInputClick);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    inputs.forEach((input) => {
      const value = input.value;
      switch (input.name) {
        case "amount":
          mortgageAmount = validateInput(input, value);
          break;
        case "term":
          mortgageTerm = validateInput(input, value);
          break;
        case "rate":
          interestRate = validateInput(input, value);
          break;
      }
    });

    if (!mortgageType) {
      calculateButton.previousElementSibling.classList.remove("hidden");
    } else {
      calculateButton.previousElementSibling.classList.add("hidden");
    }

    if (!mortgageAmount || !mortgageTerm || !mortgageType || !interestRate) return;

    const { monthlyRepayment, totalRepaymentAmount } = calculateRepayments(mortgageAmount, mortgageTerm, interestRate);

    emptyResultContainer.classList.add("hidden");
    notEmptyResultContainer.classList.remove("hidden");

    monthlyRepaymentTag.textContent = `£${monthlyRepayment}`;
    totalRepaymentTag.textContent = `£${totalRepaymentAmount}`;
  });
});