const gameArray = ["rock", "paper", "scissors"];
const numberOfRounds = 5;
let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;

const resultStrings = {
	rockString: `Rock beats scissors!`,
	paperString: `Paper beats rock!`,
	scissorsString: `Scissors beats paper!`,
	winString: `You win!`,
	loseString: `You lose!`,
	drawString: `It's a draw!`,
};

const computerPlay = () => {
	let randomNumber = Math.floor(Math.random() * gameArray.length);
	return gameArray[randomNumber];
};

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		return resultStrings.drawString;
	} else if (playerSelection === `rock` && computerSelection === `paper`) {
		return `${resultStrings.loseString} ${resultStrings.paperString}`;
	} else if (playerSelection === `paper` && computerSelection === `rock`) {
		return `${resultStrings.winString} ${resultStrings.paperString}`;
	} else if (playerSelection === `rock` && computerSelection === `scissors`) {
		return `${resultStrings.winString} ${resultStrings.rockString}`;
	} else if (playerSelection === `scissors` && computerSelection === `rock`) {
		return `${resultStrings.loseString} ${resultStrings.rockString}`;
	} else if (playerSelection === `paper` && computerSelection === `scissors`) {
		return `${resultStrings.loseString} ${resultStrings.scissorsString}`;
	} else if (playerSelection === `scissors` && computerSelection === `paper`) {
		return `${resultStrings.winString} ${resultStrings.scissorsString}`;
	} else {
		alert(`Invalid Input`);
		return `Invalid`;
	}
};

const game = () => {
	for (let i = 0; i < numberOfRounds; i++) {
		const computerSelection = computerPlay();
		roundString = `ROUND ${
			i + 1
		}:  Please input your selected shape (rock, paper, scissors)`;
		const playerSelection = prompt(roundString).toLowerCase();
		const result = playRound(playerSelection, computerSelection);
		if (result === `Invalid`) {
			i -= 1;
			continue;
		} else if (result.includes(`win`)) {
			playerScore += 1;
		} else if (result.includes(`draw`)) {
			drawCounter += 1;
		}
		console.log(
			`ROUND ${i + 1}: 
			\nYour choice: ${playerSelection} ||| Computer's Choice: ${computerSelection} 
			\n${result} 
			\nYour Score: ${playerScore}`
		);
	}
	console.log(`----------------------GAME FINISHED----------------------`);

	computerScore = numberOfRounds - playerScore - drawCounter;

	if (playerScore > computerScore) {
		console.log(`YOU WIN! \nYou: ${playerScore} | Computer: ${computerScore}`);
	} else if (playerScore === computerScore) {
		console.log(
			`GAME DRAW! \nYou: ${playerScore} | Computer: ${computerScore}`
		);
	} else {
		console.log(`YOU LOSE! \nYou: ${playerScore} | Computer: ${computerScore}`);
	}
};

alert(`Welcome to Rock, Paper, Scissors!`);
game();
