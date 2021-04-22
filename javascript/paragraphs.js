
//any global variables defined here
var initialPoints = 500;

//any shared functions start here
function quitGame() {
    var modifyButton1 = document.getElementById("button1");
    modifyButton1.onclick = function() {
        //clear inventory but keep points and name
        localStorage.removeItem("inventory", "conductorkey");
        localStorage.removeItem("damage", "Broken Wrist");
        localStorage.setItem("Points", initialPoints)
        localStorage.setItem("time", +new Date);
        window.location.href = "gamesummary.html";
}
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
    //Checks if any buttons are hidden, if so, show them
    var opacity1 = modifyButton1().style.opacity;
    var opacity2 = modifyButton2().style.opacity;
    var opacity3 = modifyButton3().style.opacity;

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
    document.getElementById("mainPhoto").src="../images/death.png";
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
    getMainBody().innerHTML = "You board the train and instantly notice the temperature; it's freezing. You take a seat, cusping the cup of boiling mud for warmth. You check your watch again just as the doors close. Your carriage is empty. <hr>This service is usualy overcrowded but not today, it's completely empty - departing late, of course but it's still empty. As the train pulls away from the platform, you begin to relax into your 45 minute journey. Disregarding the oddities as just that; odd. <hr>"
    + "Leaving Glasgow, you see the familiar grey, dull cloud hanging over the clyde and the drops of rain, running horizontally across the window. You close your eyes, trying to catch whatever extra sleep you can before you reach Ayr. <hr> However, as soon as you closed your eyes, you open them in a panic. The carriage swinging from side-to-side, static blaring over the intercomm, what sounds like screaming from the front carriage - you collaspe in sheer shock. <hr>"
    + "When you awake, you feel ill. The lights have all gone out and the carriage is in complete darkness. You can see nothing through the windows, it seems like a dense fog obfucating your view. You notice - just by the carriage door - a small red, illumated LED."
    document.getElementById("mainPhoto").src="../images/greyGlasgow.PNG";
    initialPoints = initialPoints + 50;
    createSecondStageButtons();
}

function checkForCoffee(){
    // Does nothing to the story, put back into menu
    checkButtonsHidden();
    getMainBody().textContent = "You go back to the coffee stand. Nobody is around and nobody is behind the stand."
    getMainBody().insertAdjacentText("beforeend", "\nLooks like you're stuck with your cup of mud.")
    hideButton3();
    initialPoints = initialPoints - 10;
}

function leaveGoHome() {
    // Leads to end of game
    checkButtonsHidden();
    getMainBody().textContent = "You pull out your mobile phone and decide to call your manager. You attempt to call in sick, however, during your call an announcement plays over the station tannoy:  ";
    getMainBody().insertAdjacentHTML("beforeend", "<br><p class='annoucement'>Could the passenger, standing on platform 11, floating around the train suspiciously please either board or leave the station? You are scaring the British Transport Police.</p>");
    getMainBody().insertAdjacentText("beforeend", "Your angry manager tells you that your P45 is in the post due to your failings. Speaking of failings: ");
    getMainBody().insertAdjacentHTML("beforeend", "<span style='border:0px;color:#FF8917;font-size:x-large;text-align:center;display:grid;'>YOU DIED!</span>")
    initialPoints = initialPoints - 10;
    editButtonsFailure();
    
}

//Second three options

function createSecondStageButtons(){
    // Button 1
    modifyButton1().innerHTML = "Curl up and accept death's warm embrace";
    modifyButton1().onclick = function(){
        checkButtonsHidden();
        getMainBody().innerHTML = "Well you probably could have guessed what happens when you choose that option.<hr>"
        +  "<span style='border:0px;color:#FF8917;font-size:x-large;text-align:center;display:grid;'>YOU DIED!</span>";
        initialPoints = initialPoints - 10;
        editButtonsFailure();
    };
    //Button 2
    modifyButton2().innerHTML = "Walk towards the red LED";
    modifyButton2().onclick = function(){
        var name = window.localStorage.getItem("charactername");
        checkButtonsHidden();
        document.getElementById("mainPhoto").src="../images/hal.jpg"
        getMainBody().innerHTML = "You get up from your seat and walk into the center aisle of the carriage. Nobody is here but yet, you still feel as if you are being watched. You walk slowly, down the carriage - towards the red light. Your sense of fear is increasing with every footstep; the light getting brighter and brighter the closer you get. The longer you stare at it, the more you want to run away but you persevere.<hr>"
        + "Finally, you reach the panel. There is no buttons, no screen, no way of interfacing at all - just a red LED. You peer through the glass in the carriage sliding-door, your view is obscured by some form of mist but you can just make out people, sitting in the seats in the adjacent carriage. You try your damndest to slide the door open but to no avail but then, from nowhere, a God-like voice proclaims: <br>"
        + '"' + name.italics().fontcolor("#FF8917") + "<span style='margin:0;padding:0;border:0px;color:#FF8917;'><p>, confess to what you have done</p></span>" + ' "';
        initialPoints = initialPoints + 50;
        createThirdStageButtons();
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

function createThirdStageButtons() {
    var name = window.localStorage.getItem("charactername");
    modifyButton1().innerHTML = "Tell the entity you have nothing to confess";
    modifyButton1().onclick = function() {
        getMainBody().innerHTML = "<p style='color:#FF8917'>" + '" ' + "We all have things to confess. Some people own up to what they have done, others do not. People that cannot own up to their actions shouldn't have the power that you have. You decide people's fate so it's only right that I decide your fate, "
                                   + name + ' "' + "</p>";
        getMainBody().insertAdjacentHTML("beforeend", "You suddenly feel overwhelmed with fear and feel faint.")
        document.getElementById("mainPhoto").src="../images/scream.jpg"
        initialPoints = initialPoints + 50;
        createForthStageButtons()

    }

    modifyButton2().innerHTML = "Go back to your seat and accept death";
    modifyButton2().onclick = function() {
        checkButtonsHidden();
        getMainBody().innerHTML = "<span style='text-align:center;border:0px'>Well that wasn't exactly clever, was it? I'd offer you the chance to choose another option but I can't, as unfortunately"
        + "<span style='border:0px;color:#FF8917;font-size:x-large;text-align:center;display:grid;'>YOU DIED!</span></span>"
        initialPoints = initialPoints - 10;
        editButtonsFailure();
    }

    modifyButton3().innerHTML = "Say a quick prayer then continue to attempt to open the door";
    modifyButton3().onclick = function() {
        checkButtonsHidden();
        document.getElementById("mainPhoto").src="../images/class800slidingdoor.jpg"
        getMainBody().innerHTML = "Even though you mean well with your prayer, it doesn't work. Your continued frustration and anger towards to sliding door causes you to attempt to break the glass with your shoulder.<hr> You bounce off the saftey glass and fall flat on the floor. <hr> You awake several hours later in a daze with the glass still intact."
        initialPoints = initialPoints - 50;
        hideButton3()
    }
}

function createForthStageButtons() {
    var name = window.localStorage.getItem("charactername");
    checkButtonsHidden();
    modifyButton1().innerHTML = "Confess to what you have done";
    modifyButton1().onclick = function() {
        getMainBody().innerHTML = "<span style='border:0px;font-size:xx-large'>What have you done, " + name + "? <hr><span style='font-style:xx-large;border:0px;text-align:center;'>You cannot confess to something you don't even know about.</span>";
        initialPoints = initialPoints - 10;
        hideButton1();
    }

    modifyButton2().innerHTML = "Search the carriage for something to break the glass on the door"
    modifyButton2().onclick = function() {
        checkButtonsHidden();
        getMainBody().innerHTML = "You turn your back on the door. You search under every seat, every overhead compartment and find what looks like a conductor's key. This metal object - with enough force - should be able to break the glass.";
        localStorage.setItem("inventory", "conductorkey");
        //10 points for finding the key, 50 points for choosing the right one
        initialPoints = initialPoints + 60;
        createFifthStageButtons();
        document.getElementById("mainPhoto").src="../images/key.jpg"
        
    }

    modifyButton3().innerHTML = "Verbally abuse the God-like voice";
    checkButtonsHidden();
    modifyButton3().onclick = function() {
        initialPoints = initialPoints - 10;
        getMainBody().innerHTML = "<span style='border:0px;font-size:xx-large'>Well, that achieved nothing. Did it?</span>";
        hideButton3();
    }

}

function createFifthStageButtons() {
    checkButtonsHidden();
    modifyButton1().innerHTML = "Put the conductor's key back as it doesn't belong to you";
    modifyButton1().onclick = function() {
        localStorage.removeItem("inventory", "conductorkey");
        initialPoints = initialPoints - 10;
        modifyButton1().innerHTML = "Go collect the conductor's key from where you placed it";
        getMainBody().innerHTML = "<span style='border:0px;text-align:center;'>You put the conductor's key back where you found it.<hr>" + "<span style='text-align:center;font-size:xx-large;border:0px;'>Seriously?</span></span>";
        hideButton2();
        hideButton3();
        modifyButton1().onclick = function() {
            initialPoints = initialPoints + 10;
            getMainBody().innerHTML = "<span style='border:0px;text-align:center;'>You pickup the conductor's key from where you placed it.<hr>" + "<span style='text-align:center;font-size:xx-large;border:0px;'> Well done.</span></span>";
            localStorage.setItem("inventory", "conductorkey");
            createFifthStageButtons();
        }
    }

    modifyButton2().innerHTML = "Try to break the glass on the sliding door with the conductor's key";
    var name = window.localStorage.getItem("charactername");
    modifyButton2().onclick = function() {
        checkButtonsHidden();
        initialPoints = initialPoints + 50;
        document.getElementById("mainPhoto").src="../images/carriagedark.jpg";
        getMainBody().innerHTML = "<span style='border:0px;'>You take the conductor's key and strike the glass. It does very little damage but you continue to strike the glass, over and over, until the glass pane shatters into thousands of shards and falls to the ground."
        + "<hr> The entity stays silent. You drop the conductor's key and make your way through into the next carriage. As you walk through, you notice the people in this carriage don't move. As you move closer, you notice their faces are pale-blue. Their eyes are wide open, staring blankly into nothingness - no sign of life inside. You check their pulse; nothing."
        + "<hr>You notice that the windows of this carriage are fogged up exactly the same as the previous carriage, except, there is a faint outline of what seems to be a creature moving. You cannot determine what it is. You move down the carriage until you come to the other end. The exact same panel with the illumated, red LED greets you:"
        + "<p style='color:#FF8917;'>" + '"' + "You can't escape without confessing, " + name + ". " +  "Where does the money come from?" + '"' + "</p></span>";
        getMainBody().insertAdjacentHTML("beforeend", "<span style='border:0px;text-align:center;'>You feel overwhelmed with a sense of worthlessness and disappointment.</span>")
        createSixthStageButtons();
    }

    modifyButton3().innerHTML = "Ask the entity what it wants";
    modifyButton3().onclick = function() {
        checkButtonsHidden();
        initialPoints = initialPoints - 10;
        getMainBody().innerHTML = "<span style='border:0px;font-size:xx-large;text-align:center;'>You get no response.</span>"
        hideButton3();
    }

}

function createSixthStageButtons() {
    var name = window.localStorage.getItem("charactername");

    modifyButton2().innerHTML = "Confess to where the money comes from";
    modifyButton2().onclick = function() {
        getMainBody().innerHTML = "<span style='border:0px;'>You tell the entity how you befrauded and cheated hundreds of innocent and disadvantaged people who were claiming their insurance. How you rejected their legitimate claims for healthcare, simply, to make yourself look good. <hr>"
        + "You blame your employer for incentivising this behaviour and deflect all the pain and hurt you caused onto the branch manager, your best friend."
        +  "<p style='color:#FF8917'>" + '"' + "Go to 12A, " 
        + name + '"'
        + "</p>You go towards the seat in which the entity directed you to. Walking towards the seat, you recognise the back of the head. You run round; it is. It's the branch manager. Pale-blue face, no facial expressions, no signs of life, staring into nothingness."
        + "<hr> Suddenly, just as you fall to your knees in shock, you are knocked unconscious by a pale-blue faced passenger, yielding the conductor's key. <hr>"
        + "When you awake, you find yourself sitting in 12B, next to the branch manager. Unable to move, unable to talk, unable to do anything apart from sit there and blink. <hr>"
        + "<span style='border:0px;color:#FF8917;font-size:x-large;text-align:center;display:grid;'>YOU DIED!</span></span>";
        initialPoints = initialPoints - 10;
        editButtonsFailure();

    }


    modifyButton1().innerHTML = "Search the carriage";
    modifyButton1().onclick = function() {
        getMainBody().innerHTML = "<span style='border:0px;'>You wander throughout the carriage, checking each overhead compartment. You find nothing. You check under each unoccupied seat and again, you find nothing."
        + "<hr>However, you notice one of the passengers blinking rapidly. Same pale-blue face, same blank expression; staring into nothingness. <hr>"
        + "You try to communicate with the passenger but it seems futile - The blinking passenger is starting to make you feel extremely uneasy.</span>";
        document.getElementById("mainPhoto").src="../images/blinking.gif"
        initialPoints = initialPoints + 50;
        createSeventhStageButtons();       
    }

    modifyButton3().innerHTML = "Burst into tears and beg for mercy";
    modifyButton3().onclick = function() {
        getMainBody().innerHTML = "<span style='border:0px;'>You sob into your hands and beg the entity to let you go. The entity stays silent and as you are distracted, you are bludgeoned by a pale-blue faced passenger who is yielding the conductor's key. <hr>"
        + "When you awake, you find yourself sitting in your original seat. Pale-blue faced, unable to move, unable to talk. You are in the same state as the other passengers and cannot escape. <hr>"
        + "<span style='border:0px;color:#FF8917;font-size:x-large;text-align:center;display:grid;'>YOU DIED!</span></span>";
        initialPoints = initialPoints - 10;
        editButtonsFailure();
    }
}

function createSeventhStageButtons() {
    modifyButton1().innerHTML = "Try to translate the blinking as morsecode";
    modifyButton1().onclick = function() {
        checkButtonsHidden();
        initialPoints = initialPoints + 50;
        getMainBody().innerHTML = "<span style='border:0px;text-align:center;'>You instantly go pickup the conductor's key and scratch the blinking patterns into the window. You then translate it from morsecode to English: <hr>"
        + "<span style='border:0px;color:#FF8917;text-align:center;display:grid;'>d o n ' t   t r u s t   i t   l e a v e <hr></span>"
        + "The entity cannot be trusted - you need to escape quickly.</span>";
        creatEighthStageButtons();
    }
    modifyButton2().innerHTML = "Attack the blinking passenger";
    modifyButton2().onclick = function(){
        checkButtonsHidden();
        getMainBody().innerHTML = "<span style='border:0px;'>That wasn't very wise. The passenger grabs you - with inhuman strength - and throws you down towards the rear end of the carriage. <hr>"
        + "<span style='border:0px;color:#FF8917;font-size:x-large;text-align:center;display:grid;'>You suspect you have broken your wrist.</span></span>"
        localStorage.setItem("damage", "Broken Wrist")
        //50 for breaking your wrist and 10 for the wrong one
        initialPoints = initialPoints - 60;
        hideButton2();

    }
    modifyButton3().innerHTML = "Burst into tears and beg for mercy";
    modifyButton3().onclick = function() {
        checkButtonsHidden();
        initialPoints = initialPoints - 10;
        getMainBody().innerHTML = "<span style='border:0px;'>You sob into your hands and beg the entity to let you go. The entity stays silent and as you are distracted, you are bludgeoned by a pale-blue faced passenger who is yielding the conductor's key. <hr>"
        + "When you awake, you find yourself sitting in your original seat. Pale-blue faced, unable to move, unable to talk. You are in the same state as the other passengers and cannot escape. <hr>"
        + "<span style='border:0px;color:#FF8917;font-size:x-large;text-align:center;display:grid;'>YOU DIED!</span></span>";
        editButtonsFailure();
    }
}

function creatEighthStageButtons() {
    modifyButton2().innerHTML = "Use the conductor's key to break the window";
    modifyButton2().onclick = function() {
        getMainBody().innerHTML = "<span style='border:0px;'>You take the conductor's key and begin hammering at the window. The entity begins to shout: <hr>"
        + "<p style='color:#FF8917'>CONFESS! CONFESS! CONFESS!</p>"
        +"You keep hitting the glass repetitively until small shards of glass begin to fall off of it. At this point, the entity lets out a roar: <hr>"
        + "<p style='color:#FF8917'>NOOO! YOU CANNOT ESCAPE, IT'S IMPOSSIBLE! CONFESS!</p>"
        + "With this roar, the passengers unbelievebly rise from their seats and begin making their way towards you. As they inch closer and closer, you are striking the window harder and harder "
        + "but then, just before the passengers reach you, with one fell swoop, the glass shatters into thousands of pieces. The white, dense fog pours into the carriage and the howling wind throws the passengers to the ground. </span>"
        initialPoints = initialPoints + 50;
        hideButton2();
        hideButton3()
        createFinalButtons();

    }
    modifyButton3().innerHTML = "Confess to where the money comes from";
    var name = window.localStorage.getItem("charactername");
    modifyButton3().onclick = function() {
        getMainBody().innerHTML = "<span style='border:0px;'>You tell the entity how you befrauded and cheated hundreds of innocent and disadvantaged people who were claiming their insurance. How you rejected their legitimate claims for healthcare, simply, to make yourself look good. <hr>"
        + "You blame your employer for incentivising this behaviour and deflect all the pain and hurt you caused onto the branch manager, your best friend."
        +  "<p style='color:#FF8917'>" + '"' + "Go to 12A, " 
        + name + '"'
        + "</p>You go towards the seat in which the entity directed you to. Walking towards the seat, you recognise the back of the head. You run round; it is. It's the branch manager. Pale-blue face, no facial expressions, no signs of life, staring into nothingness."
        + "<hr> Suddenly, just as you fall to your knees in shock, you are knocked unconscious by a pale-blue faced passenger, yielding the conductor's key. <hr>"
        + "When you awake, you find yourself sitting in 12B, next to the branch manager. Unable to move, unable to talk, unable to do anything apart from sit there and blink. <hr>"
        + "<span style='border:0px;color:#FF8917;font-size:x-large;text-align:center;display:grid;'>YOU DIED!</span></span>";
        initialPoints = initialPoints - 10;
        editButtonsFailure();
    }

    modifyButton1().innerHTML = "Burst into tears and beg for mercy";
    modifyButton1().onclick = function() {
        checkButtonsHidden();
        getMainBody().innerHTML = "<span style='border:0px;'>You sob into your hands and beg the entity to let you go. The entity stays silent and as you are distracted, you are bludgeoned by a pale-blue faced passenger who is yielding the conductor's key. <hr>"
        + "When you awake, you find yourself sitting in your original seat. Pale-blue faced, unable to move, unable to talk. You are in the same state as the other passengers and cannot escape. <hr>"
        + "<span style='border:0px;color:#FF8917;font-size:x-large;text-align:center;display:grid;'>YOU DIED!</span></span>";
        initialPoints = initialPoints - 10;
        editButtonsFailure();
    }

}

function createFinalButtons() {
    modifyButton1().innerHTML = "JUMP!"
    modifyButton1().onclick = function() {
        //Create final buttons
        modifyButton1().innerHTML = "Pay your ticket fare";
        document.getElementById("mainPhoto").src="../images/journey.jpg"
        getMainBody().innerHTML = "<span style='border:0px;'>You jump from the window, knowing well that it'll kill you as there doesn't seem to be any ground underneath. With your eyes closed, you begin to reflect on what you had done, "
        + "how you befrauded and cheated hundreds of innocent and disadvantaged people who were claiming their insurance. How you rejected their legitimate claims for healthcare, simply, to make yourself look good and for financial gain.<hr>" 
        + "You realise how awful and evil you have been, all in the persuit of money and at that moment, it all goes black.<hr>"
        + "You slowly open your eyes to be greeted with the grey, dull cloud hanging over the Clyde. You're visibly shaken, there is nobody on-board but everything seems fine. Was there never any accident? What happened? All these questions, running through your head."
        + " You stare at the cup of coffee pondering the possibility of it being spiked but then, out of nowhere, you hear the sliding door open. You instantly freeze with panic."
        + "<p style='color:#FF8917'>" + '"' + "Tickets Please!" + '"' + "</p>"
        + "You turn round to see your regular ticket inspector. It must've been a dream you tell yourself.<hr>"
        + "The rest of the train journey was bland as always - everything just seemed normal. After everything you experienced, you can't just forget it. You call your work, asking to speak with the branch manager. You're told he isn't available and hasn't been at work since last week. <hr>"
        + "Did you escape and he didn't? Is he stuck there? In that hell-hole? Did he drink the coffee too?</span>";
        initialPoints = initialPoints + 50;
        modifyButton1().onclick = function() {
            getMainBody().innerHTML = "<span style='border:0px;color:#FF8917;font-size:x-large;text-align:center;display:grid;'>Congratulations! You made it to Ayr alive and won the game.</span>"
            hideButton2();
            document.getElementById("mainPhoto").src="../images/ayrstation.jpg"
            createFinalPage();
        }
        modifyButton2().style.opacity = "100%"   
        modifyButton2().innerHTML = "Drink your coffee"

        modifyButton2().onclick = function(){
            checkButtonsHidden();
            getMainBody().innerHTML = "<span style='border:0px;'>You close your eyes, trying to catch whatever extra sleep you can before you reach Ayr. <hr> However, as soon as you closed your eyes, you open them in a panic. The carriage swinging from side-to-side, static blaring over the intercomm, what sounds like screaming from the front carriage - you collaspe in sheer shock. <hr>"
            + "When you awake, you feel ill. The lights have all gone out and the carriage is in complete darkness. You can see nothing through the windows, it seems like a dense fog obfucating your view. You notice - just by the carriage door - a small red, illumated LED.</span>"
            document.getElementById("mainPhoto").src="../images/greyGlasgow.PNG";
            initialPoints = initialPoints - 10;
            createSecondStageButtons();
        }
        
    }
}

function createFinalPage() {
    modifyButton1().innerHTML = "Exit";
    modifyButton1().onclick = function() {
        //clear inventory but keeps points and name
        localStorage.removeItem("inventory", "conductorkey");
        localStorage.removeItem("damage", "Broken Wrist");
        localStorage.setItem("Points", initialPoints);
        localStorage.setItem("time", +new Date);
        window.location.href = "gamesummary.html";
    }
}

