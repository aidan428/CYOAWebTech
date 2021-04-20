//any shared functions start here
function quitGame() {
    var modifyButton1 = document.getElementById("button1");
    modifyButton1.onclick = location.href="gameover.html";
}

function getMainBody() {
    var span = document.getElementById("mainBodyText");
    return span;
}

function modifyButton1() {
    var modifyButton1 = document.getElementById("button1");
    return modifyButton1;
}

function modifyButton2() {
    var modifyButton2 = document.getElementById("button2");
    return modifyButton2;
}

function modifyButton3() {
    var modifyButton3 = document.getElementById("button3");
    return modifyButton3;
}

function hideButton1() {
    modifyButton1().style.opacity = "0%";
}

function hideButton2() {
    modifyButton2().style.opacity = "0%";
}

function hideButton3() {
    modifyButton3().style.opacity = "0%";
}

function checkButtonsHidden() {
    var opacity1 = modifyButton1().style.opacity;
    var opacity2 = modifyButton2().style.opacity;
    var opacity3 = modifyButton3().style.opacity;

    //console.log(opacity3)

    if (opacity1 < 100) {
        modifyButton1().style.opacity = 100;
    } 
     if (opacity2 < 100) {
        modifyButton2().style.opacity = 100;
    } 
     if (opacity3 < 100) {
        modifyButton3().style.opacity = 100;
    }
}

function editButtonsFailure() {
    var list = document.getElementById("listQuestions");
    //Get rid of existing buttons
    hideButton2();
    hideButton3();
    //Add exit button
    modifyButton1().innerHTML = "Quit Game!";
    modifyButton1().onclick = function(){
        quitGame();
    };
    
}


//Game functions for each option start here
//First three options
function boardTrain() {
    //Primary option to advance through game
    checkButtonsHidden();
    getMainBody().innerHTML = "You board the train and instantly notice the temperature; it's freezing. You take a seat, cusping the cup of boiling mud for warmth. You check your watch again just as the doors close. Your carriage is empty. <hr>This service is usualy overcrowed but not today, it's completely empty - departing late, of course but it's still empty. As the train pulls away from the platform, you begin to relax into your 45 minute journey. Disregarding the oddities as just that; odd. <hr>"
    + "Leaving Glasgow, you see the familiar grey, dull cloud hanging over the clyde and the drops of rain, running horizontally across the window. You close your eyes, trying to catch whatever extra sleep you can before you reach Ayr. <hr> However, as soon as you closed your eyes, you open them in a panic. The carriage swinging from side-to-side, static blaring over the intercomm, what sounds like screaming from the front carriage - you collaspe in sheer shock. <hr>"
    + "When you awake, you feel ill. The lights have all gone out and the carriage is in complete darkness. You can see nothing through the windows, it seems like a dense fog obfucating your view. You notice - just by the carriage door - a small red, illumated LED."
    document.getElementById("mainPhoto").src="../images/greyGlasgow.PNG";
    createSecondStageButtons();
}

function checkForCoffee(){
    // Does nothing to the story, put back into menu
    checkButtonsHidden();
    getMainBody().textContent = "You go back to the coffee stand. Nobody is around and nobody is behind the stand."
    getMainBody().insertAdjacentText("beforeend", "\nLooks like you're stuck with your cup of mud.")
    hideButton3();
}

function leaveGoHome() {
    // Leads to end of game
    checkButtonsHidden();
    getMainBody().textContent = "You pull out your mobile phone and decide to call your manager. You attempt to call in sick, however, during your call an announcement plays over the station tannoy:  ";
    getMainBody().insertAdjacentHTML("beforeend", "<br><p class='annoucement'>Could the passenger, standing on platform 11, floating around the train suspiciously please either board or leave the station? You are scaring the British Transport Police.</p>");
    getMainBody().insertAdjacentText("beforeend", "Your angry manager tells you that your P45 is in the post due to your failings. Speaking of failings: YOU FAILED!");
    document.getElementById("mainPhoto").src="../images/angryManMachine.jpg";
    editButtonsFailure();
}

//Second three options

function createSecondStageButtons(){
    // Button 1
    modifyButton1().innerHTML = "Curl up and accept death's warm embrace";
    modifyButton1().onclick = function(){
        checkButtonsHidden();
        getMainBody().innerHTML = "Well you probably could have guessed what happens when you choose that option.<hr> YOU FAILED!";
        document.getElementById("mainPhoto").src="../images/death.png";
        editButtonsFailure();
    };
    //Button 2
    modifyButton2().innerHTML = "Attempt to go towards the red LED";
    modifyButton2().onclick = function(){
        checkButtonsHidden();
        getMainBody().innerHTML = "walking";
    };

    //Button 3
    modifyButton3().innerHTML = "Search your seat area";
    modifyButton3().onclick = function() {
        checkButtonsHidden();
        getMainBody().innerHTML = "You look round your seat, looking for anything at all that may eldude to what had happened. Your coffee cup is gone but apart from that, nothing else has changed. You continue to notice the bright, illumated red LED on some form of control panel at the end of the carriage.";
        hideButton3();
        document.getElementById("mainPhoto").src="../images/hal.jpg";
    };
}