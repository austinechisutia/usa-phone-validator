const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const result = document.getElementById("results-div");



checkBtn.addEventListener("click", function(){
  const inputValue = userInput.value.trim();

  if(inputValue===""){
    alert("Please provide a phone number")
    return;
  }

  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s.-]?)\d{3}([\s.-]?)\d{4}$/;


 if(phoneRegex.test(inputValue)){
   result.textContent = `Valid US number: ${inputValue}`
 }else{
    result.textContent = `Invalid US number: ${inputValue}`
 }
})




clearBtn.addEventListener("click", function(){
  result.textContent = ""
})


