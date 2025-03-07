let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIDX = Math.floor(Math.random() * 3);
    return options[randIDX];
};

const drawGame = () => {
    msg.innerText = "Game Is Drawn. Play Again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userChoice, computerChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Congratulations! You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lost! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);

    // Convert userChoice to match the case of computerChoice
    const formattedUserChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();

    const computerChoice = genComputerChoice();
    console.log("Computer choice =", computerChoice);
    
    if (formattedUserChoice === computerChoice) {
        drawGame();
    } else {
        let userwin = true;
        if (formattedUserChoice === "Rock") {
            userwin = computerChoice === "Paper" ? false : true;
        } else if (formattedUserChoice === "Paper") {
            userwin = computerChoice === "Scissors" ? false : true;
        } else {
            userwin = computerChoice === "Rock" ? false : true;
        }
        showWinner(userwin, formattedUserChoice, computerChoice);
    } 
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
    