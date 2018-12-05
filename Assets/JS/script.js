const selectHand = () => {
    const hands = document.querySelectorAll(".hands.user > li");
    let canSelect = true
    
    for(let hand of hands){
        hand.onclick = () => {
            if (canSelect){
                hand.id = "selected"
                canSelect = false;
                const selectedHand =  hand.classList[0];
                showResult(userWin(selectedHand));
            }
        }
    }    
}

const computerTurn = () => {
    const hands = document.querySelectorAll(".hands.computer > li");
    let random = randomNumber(0,5);
    selectedHand = hands[random];
    selectedHand.id = "computerSelected";
    return selectedHand.classList[0];
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const userWin = (userSelectedHand) => {
    let computerSelectedHand = computerTurn();
    if(userSelectedHand == computerSelectedHand){
        return "draw";
    }
    else if (userSelectedHand == "rock"){
        if(computerSelectedHand == "scissors" || computerSelectedHand == "lizard"){
            return true;
        }
    }else if(userSelectedHand == "paper"){
        if(computerSelectedHand == "rock" || computerSelectedHand == "spock"){
            return true;
        }
    }else if(userSelectedHand == "scissors"){
        if(computerSelectedHand == "paper" || computerSelectedHand == "lizard"){
            return true;
        }
    }else if(userSelectedHand == "lizard"){
        if(computerSelectedHand == "spock" || computerSelectedHand == "paper"){
            return true;
        }
    }else if(userSelectedHand == "spock"){
        if(computerSelectedHand == "rock" || computerSelectedHand == "scissors"){
            return true;
        }
    return false;
    }
}

const showResult = (userWon) => {
    let winnerMessage = document.querySelector(".winner > p");
    let winnerDiv = document.querySelector(".winner");
    winnerDiv.classList.remove("hide");
    if(userWon == "draw"){
        winnerMessage.textContent = "Empate";
    }else if(userWon){
        let pontuation = document.querySelector("#pontuation1");
        pontuation.textContent ++;
        winnerMessage.textContent = "Você ganhou"; 
    }else{
        let pontuation = document.querySelector("#pontuation2");
        pontuation.textContent ++;
        winnerMessage.textContent = "O computador ganhou"; 
    }
}

const restart = () => {
    let winnerDiv = document.querySelector(".winner");
    winnerDiv.classList.add("hide");
    const userHands = document.querySelectorAll(".hands.user > li");
    for(let hand of userHands){
        hand.id = "";
    }
    const computerHands = document.querySelectorAll(".hands.computer > li");
    for(let hand of computerHands){
        hand.id = "";
    }
    selectHand();
}

const buttonRestart = document.querySelector(".winner > button");
buttonRestart.onclick = restart;

selectHand();