function getName() {
    var x = document.getElementById("inputName").value;

    //check if input value for name is blank, if so replace with default name of Michael
    if (x == ''){
        x = "Michael";
    };

    console.log(x);
    return x;
}

function storeCharacterName() {
    localStorage.setItem("charactername", getName());
}

// Adapted from https://stackoverflow.com/questions/56111480/how-can-i-hide-a-div-until-a-button-is-clicked
function showPlayButton() {
    var button = document.getElementById('clickPlay');
    button.style.display = "block";
}
function homePagePrintName() {
    var name = getName();
    console.log(name)
    // Prevents blank name
    if (name == ''){
        name = "Michael"
    };
    //Generate and store character name
    var initialText = "The character's name will be: " ;
    var nameStatement = initialText.concat(name);
    document.getElementById("playerName").innerHTML = nameStatement;
    storeCharacterName();
    showPlayButton();
}


