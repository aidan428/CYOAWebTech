function getPlayerName() {
    playerName = localStorage.getItem("charactername");
    //console.log(playerName);
    return playerName;
}

function getPointsPlayer() {
    points = localStorage.getItem("Points");
    return points;
}

//Adapted from https://stackoverflow.com/questions/20538199/store-date-and-retrieve-from-local-storage
function getTimePlayer() {
    var timestamp = new Date(parseInt(localStorage.getItem('time')));
    // console.log(test)
    return timestamp;
}
  

function getMainBody() {
    var span = document.getElementById("results");
    return span;
}

function printPlayersResults() {
    getMainBody().innerHTML = "<p>" + getPlayerName() + " scored " + getPointsPlayer() + " points and last completed the game on " + getTimePlayer(); + "</p>";
    getMainBody().insertAdjacentHTML("beforeend", "<hr>")
    getMainBody().insertAdjacentHTML("beforeend", "<p style='color:#E6B645;'>Thanks for playing!</p>")
    getMainBody().insertAdjacentHTML("beforeend", "<p style='color:#E6B645; font-size: x-large;'>Would you like to play again? If so, click below:</p>")
}