const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const dividend = entries.get("dividend");
  const divider = entries = entries.get("divider");

// check if inputs are empty
  if (!dividend || !divider) {
    //result.classList.add("error-message")
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  //checks if inputs contain invalid characters
  const validInputRegex = /^[0-9]+$/;
if (!validInputRegex.test(dividend) || !validInputRegex.test(divider)) {
    result.classList.add("critical-error");
    result,innerText = "something critical went wrong. Please reload the page.";
    return;
}

try {
  //force number conversion
  const dividentNumber = Number(dividend);
  const dividerNumber = Number(divider);
//check for other numeric errors
if (isNaN(dividentNumber) || isNaN(dividentNumber) || dividerNumber === 0) {
  throw new Error(
    "Invalid input: Divivson by zero or non-numeric vvalue provided."
  );
}

const resultValue = Math.floor(dividentNumber / dividerNumber);
result.innerText = resultValue.toString();
} catch (error) {
  console.error("An error occured:", error);
  console.error("call stack:", error.stack);

  //critical Error Handling
  result.innerText = 
  "Invalid input: Division by zero or non-numeric value provided.";
}
});