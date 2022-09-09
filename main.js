const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    return console.log("Error!");
  }
};

// console.log(getUserChoice("rock"));
// console.log(getUserChoice("rok"));
const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }

    if (userChoice === 'bomb') {
      return 'congratulations, you won!'
    }
}
  // console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
  // console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
  // console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

 const playGame = () => {
   userChoice = getUserChoice('bomb');
   computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
 }

 playGame();
