const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const result = document.getElementById("results-div");

checkBtn.addEventListener("click", function(){
  const inputValue = userInput.value.trim();

  if(inputValue===""){
    result.textContent = "Please provide a phone number"
    return;
  }
})