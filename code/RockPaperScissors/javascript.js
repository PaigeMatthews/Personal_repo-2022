var game 



function housePlay(){
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}












function game() {
    //lets the game play 5 rounds
    for (let i = 0; i < 5; i++) {
        const playerSelect = playerPlay();
        const houseSelect = housePlay();
        const currentRound = playRound(playerSelect, houseSelect);
        return (currentRound);
    }
}
