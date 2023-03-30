const playerDiceValue           = document.getElementById("player-dice-value");
const computerDiceValue         = document.getElementById("computer-dice-value");
const btnRollDice               = document.getElementById("roll-dice");
const btnNewGame                = document.getElementById("new-game");
const playerName                = document.getElementById("player-name").innerHTML;
const computerName              = document.getElementById("computer-name").innerHTML;
const playerScoreOne            = document.getElementById("player-score1")
const computerScoreOne          = document.getElementById("computer-score1")
const playerScoreTwo            = document.getElementById("player-score2")
const computerScoreTwo          = document.getElementById("computer-score2")
const playerScoreThree          = document.getElementById("player-score3")
const computerScoreThree        = document.getElementById("computer-score3")
const playerTotalScoreHTML      = document.getElementById("player-total")
const computerTotalScoreHTML    = document.getElementById("computer-total")
const winner                    = document.getElementById("winner");

class Dice{
    constructor ( value = 1 ){
        const verifiedValues = [1,2,3,4,5,6];
        if( verifiedValues.includes(value) ){
            this.value = value;
        }
        else{
            console.log("Incorrect Dice Value - choose between 1 and 6");
            this.value = 1;
        }
    }

    rollDice(){
        return Math.floor( (Math.random() * 6) + 1 );
    }

    describeSelf( id ){
        const pathToImage = `image-icon/inverted-dice-${this.value}.png`;
        const imgAlt      = `Dice Value ${this.value}`   
        //update the src="" of the main slide
        $(id).attr("src", pathToImage);
        $(id).attr("alt", imgAlt);
    }
}

diceOne = new Dice(1);
diceTwo = new Dice(1);
diceThree = new Dice(1);
diceFour = new Dice(1);

var counter = 0;
var playerDiceScore = 0;
var computerDiceScore = 0;
var playerTotalScore = 0;
var computerTotalScore = 0;

//hide the winner initially
winner.style.display = "none";

function updateDiceValues(){
    diceOne.value = diceOne.rollDice();
    diceTwo.value = diceTwo.rollDice();
    diceThree.value = diceThree.rollDice();
    diceFour.value = diceFour.rollDice();

    diceOne.describeSelf("#player-dice-1");
    diceTwo.describeSelf("#player-dice-2");
    diceThree.describeSelf("#computer-dice-1");
    diceFour.describeSelf("#computer-dice-2");
}

function updateDataLists(){

    const playerDataList = 
    `<ul>
        <li>You Rolled: ${diceOne.value} and a ${diceTwo.value}</li>
    </ul>`;

    const computerDataList =
    `<ul>
        <li>Computer Rolled: ${diceThree.value} and a ${diceFour.value}</li>
    </ul>`;

    playerDiceValue.innerHTML = `${playerDataList}`;
    computerDiceValue.innerHTML = `${computerDataList}`;
}

function checkCounter() {
var btn = btnRollDice;

counter += 1;

if(counter >= 3) 
     btn.style.display = "none";
}

function updateScores(){
    
    if( diceOne.value == 1 || diceTwo.value == 1 ){
        playerDiceScore = 0;
    }
        else if( diceOne.value == diceTwo.value ){
            playerDiceScore = (diceOne.value + diceTwo.value) * 2
        }
            else{
                playerDiceScore = diceOne.value + diceTwo.value
            }
        
    if( diceThree.value == 1 || diceFour.value == 1 ){
        computerDiceScore = 0;
    }
        else if( diceThree.value == diceFour.value ){
            computerDiceScore = (diceThree.value + diceFour.value) * 2
        }
            else{
                computerDiceScore = diceThree.value + diceFour.value
            }

    if(counter == 1){
        computerScoreOne.innerHTML = `${computerDiceScore}`;
        playerScoreOne.innerHTML = `${playerDiceScore}`;

        computerTotalScore += computerDiceScore;
        playerTotalScore += playerDiceScore;
    }
    if(counter == 2){
        computerScoreTwo.innerHTML += `${computerDiceScore}`;
        playerScoreTwo.innerHTML += `${playerDiceScore}`;
        
        computerTotalScore += computerDiceScore;
        playerTotalScore += playerDiceScore;
    }
    if(counter == 3){
        computerScoreThree.innerHTML += `${computerDiceScore}`;
        playerScoreThree.innerHTML += `${playerDiceScore}`;
        
        computerTotalScore += computerDiceScore;
        playerTotalScore += playerDiceScore;
        computerTotalScoreHTML.innerHTML = computerTotalScore;
        playerTotalScoreHTML.innerHTML = playerTotalScore;

        winner.style.display = "block";
        declareWinner();

    }
}

function declareWinner(){
    if(playerTotalScore > computerTotalScore){
        winner.innerHTML = `${playerName} win with a total score of ${playerTotalScore}`
    }
    else if(computerTotalScore > playerTotalScore){
        winner.innerHTML = `${computerName} wins with a total score of ${computerTotalScore}`
    }
    else{
        winner.innerHTML = `Wow! It's a tie! I guess you'll have to play again.`
    }
}

function newGame(){
    var btn = btnRollDice;
    btn.style.display = "";
    counter = 0;

    diceOne.value = 1;
    diceTwo.value = 1;
    diceThree.value = 1;
    diceFour.value = 1;

    playerDiceScore = 0;
    computerDiceScore = 0;
    playerDiceValue.innerHTML = "";
    computerDiceValue.innerHTML = "";

    computerScoreOne.innerHTML = "";
    playerScoreOne.innerHTML = "";
    computerScoreTwo.innerHTML = "";
    playerScoreTwo.innerHTML = "";
    computerScoreThree.innerHTML = "";
    playerScoreThree.innerHTML = "";

    playerTotalScore = 0;
    computerTotalScore = 0;
    playerTotalScoreHTML.innerHTML = "";
    computerTotalScoreHTML.innerHTML = "";
    winner.style.display = "none";
}

btnRollDice.addEventListener('click', function(){
    clearTimeout(timerHandler); // Clear timer on pop-up
    checkCounter();
    updateDiceValues();
    updateDataLists();
    updateScores();
    
});

btnNewGame.addEventListener('click', function(){
    clearTimeout(timerHandler); // Clear timer on pop-up
    newGame();
    
    diceOne.describeSelf("#player-dice-1");
    diceTwo.describeSelf("#player-dice-2");
    diceThree.describeSelf("#computer-dice-1");
    diceFour.describeSelf("#computer-dice-2");
});

