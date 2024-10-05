
//DECLARE VARIABLES TO BE USED
let playerScore = 0;
let enemyScore = 0;

let roundsPlayed = 0;
let totalRounds = 15;

const humanChoice = document.querySelector('#aHumanChoice');
const computerChoice = document.querySelector('#aComputerChoice');
const humanScore = document.querySelector('#aHumanScore');
const computerScore = document.querySelector('#aComputerScore');
const result = document.querySelector('#aResult');

const button = document.querySelector('#newGame');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//CREATING A FUNCTION FOR COMPUTER ANSWER
function getComputerChoice(){

    let randomInt = Math.random() * 3;

    if (randomInt <= 1){
        return 'Rock';
    } else if (randomInt <= 2){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

//CREATING A FUNCTION TO DISABLE BUTTONS WHEN GAME IS DONE
function disableButtons() {
    rock.disable = true;
    paper.disable = true;
    scissors.disable = true;
}

//DISPLAY FINAL RESULTS
function displayResult(){
    if (playerScore > enemyScore) {
        result.textContent = 'YOU WON!';
    } else if (enemyScore > playerScore) {
        result.textContent =  'YOU LOST!';
    } else {
        result.textContent = "TOO BAD, IT'S A TIE!"
    }
}


//CREATE THE GAME ROUND
function playRound(yourChoice, getComputerChoice) {
    if (roundsPlayed < totalRounds) {
        let computerPick = getComputerChoice();

//CONTENT AFTER A ROUND
        const lose = () => {
            enemyScore++;
            humanChoice.textContent = 'You picked : ' + yourChoice;
            computerChoice.textContent = 'Computer got : ' + computerPick;
            humanScore.textContent = 'Your score : ' + playerScore;
            computerScore.textContent = 'Computer score : ' + enemyScore;
            result.textContent = 'You Lost!'
        }
        const win = () => {
            playerScore++;
            humanChoice.textContent = 'You picked : ' + yourChoice;
            computerChoice.textContent = 'Computer got : ' + computerPick;
            humanScore.textContent = 'Your score : ' + playerScore;
            computerScore.textContent = 'Computer score : ' + enemyScore;
            result.textContent = 'You Won!'
        }
        const tie = () => {
            humanChoice.textContent = 'You picked : ' + yourChoice;
            computerChoice.textContent = 'Computer got : ' + computerPick;
            humanScore.textContent = 'Your score : ' + playerScore;
            computerScore.textContent = 'Computer score : ' + enemyScore;
            result.textContent = "Too bad, it's a tie!"
        }

//CONDITIONS FOR WINNING A ROUND
        if (yourChoice == 'Rock' && computerPick == 'Paper')
            {
                lose();
            }
        else if (yourChoice == 'Paper' && computerPick == 'Rock')
            {
                win();
            }
        else if (yourChoice == 'Rock' && computerPick == 'Scissor')
            {
                win();
            }
        else if (yourChoice == 'Scissors' && computerPick == 'Rock')
            {
                lose()
            }
        else if (yourChoice == 'Scissors' && computerPick == 'Paper')
            {
                win()
            }
        else if (yourChoice == 'Paper' && computerPick == 'Scissors')
            {
                lose()
            }
        else
            {
                tie()
            }
        roundsPlayed++

//ROUND OVER FUNCTIONS TO SHOW RESULTS
        if (roundsPlayed === totalRounds){
            disableButtons();
            displayResult();
            newGame.style.display = 'inline';
            }
        }
    }

//ADDING A FUNCTION TO THE BUTTONS
rock.addEventListener('click', () => {playRound('Rock', getComputerChoice);});
paper.addEventListener('click', () => {playRound('Paper', getComputerChoice);});
scissors.addEventListener('click', () => {playRound('Scissors', getComputerChoice);});

//FUNCTION FOR RESETTING GAME
function resetGame(){
    playerScore = 0;
    enemyScore = 0;
    roundsPlayed = 0;
    humanChoice.textContent = '';
    computerChoice.textContent = '';
    humanScore.textContent = '';
    computerScore.textContent = '';
    result.textContent = '';
    rock.disable = false;
    paper.disable = false;
    scissors.disable = false;
    newGame.style.display = 'none';
}

newGame.addEventListener('click', resetGame)