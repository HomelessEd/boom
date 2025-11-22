console.log("test");

const userInput = document.getElementById("userInput");
const countdownDiv = document.getElementById("countdown");
const resultDiv = document.getElementById("result");
const restartBtn = document.getElementById("restart");

let countdownInterval;

function gameStart() {
    resultDiv.textContent ="";
    countdownDiv.textContent ="";
    userInput.disabled = false;

    const randomNumber = Math.floor(Math.random() *3) +1;
    let finalCountdown = 10;
    countdownDiv.textContent = finalCountdown;

    countdownInterval = setInterval(() =>{
        finalCountdown--;
        countdownDiv.textContent = finalCountdown;
        if (finalCountdown <=0){
            clearInterval(countdownInterval);
            checkResult(randomNumber);
        }
    },1000);
}

function checkResult(randomNumber) {
    const userChoice = parseInt(userInput.value);
      if (![1,2,3].includes(userChoice)){
        resultDiv.textContent="Oi! I need a number between 1 and 3";
        resultDiv.className= "red";
        return;
     }




  if (userChoice === randomNumber) {
        resultDiv.innerHTML = `<span class="green"> ¡Congrats you saved us! Tu número: ${userChoice}, Número correcto: ${randomNumber}`;
        
    } else {
        resultDiv.innerHTML = `<span class= "red"> Oh no! The bomb went off 💥. Tu número: ${userChoice}, Número correcto: ${randomNumber}`;
       
    }

}
    restartBtn.addEventListener("click", () => {
  clearInterval(countdownInterval);
  userInput.value = "";
  gameStart();
});


gameStart();