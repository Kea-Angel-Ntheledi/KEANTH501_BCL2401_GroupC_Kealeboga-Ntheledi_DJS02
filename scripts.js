const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const dividend = entries.get("dividend");
  const divider = entries = entries.get("divider");

//check if inputs are empty
if (!dividend || !divider) {
  //result.classlist.add("error message")
  result.innertext = 
  "Division not performed. Both values are required in inputs. Try again.";
  return;
}