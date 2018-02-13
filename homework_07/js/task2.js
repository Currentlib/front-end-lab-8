let range = 5,
    attempts = 3,
    totalPrize = 0,
    currentPrize = 10,
    prize = 10,
    random = 0,
    userGuess = 0,
    cont = true,
    start = confirm("Do you want to play a game?");

if (start) {
    while (start) {
        while (cont) {
            for (attempts = 3; attempts>0; attempts--) {
                random = Math.floor(Math.random()*(range+1));
                console.log(random);
                userGuess = Number(prompt(`Enter a number from 0 to ${range}\nAttempts left: ${attempts}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${currentPrize}$`, "0"));
                if (userGuess == random) {
                    prize*=3;
                    range*=2;
                    attempts=4;
                    totalPrize+=currentPrize;
                    currentPrize=prize;
                    cont = confirm("Do you want to continue?");
                    if (!cont) {
                        break;
                    }
                } else {
                    currentPrize = Math.floor(currentPrize/2);
                }
            }
            console.log("Thank you for a game. Your prize is: " + totalPrize);
            cont = confirm("Do you want to play again?");
            range = 5;
            totalPrize = 0;
            currentPrize = 10;
            prize = 10;
        }
        start = false;
    }
} else {
    console.log("You did not become a millionaire")
}
