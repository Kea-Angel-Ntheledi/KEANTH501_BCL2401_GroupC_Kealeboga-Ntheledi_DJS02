const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const dividend = entries.get("dividend");
  const divider = entries.get("divider");

  //check if inputs are empty
  if (!dividend || !divider) {
    //result.classList.add("error-message")
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // check if inputs contain invalid characters
  const validInputRegex = /^[0-9]+$/;
  if (!validInputRegex.test(dividend) || !validInputRegex.test(divider)) {
    result.classList.add("critical-error");
    result.innerText = "Something critical went wrong. Please reload the page.";
    return;
  }

  try {
    // Force Number conversion
    const dividendNumber = Number(dividend);
    const dividerNumber = Number(divider);

    // Check for other numeric errors
    if (isNaN(dividendNumber) || isNaN(dividendNumber) || dividerNumber === 0) {
      throw new Error(
        "Invalid input: Division by zero or non-numeric value provided."
      );
    }

    const resultValue = Math.floor(dividendNumber / dividerNumber);
    result.innerText = resultValue.toString();
  } catch (error) {
    console.error("An error occurred:", error);
    console.error("Call stack:", error.stack);

    // Critical Error Handling
    result.innerText =
      "Invalid input: Division by zero or non-numeric value provided.";
  }
});
