function getUserName() {
    var name = document.getElementById("Name").value;
    return name;
}

function getUserEmail() {
    var email = document.getElementById("Email").value
    return email;
}

function getUserMessage() {
    var message = document.getElementById("Message").value
    return message;
}


//Line break solution from https://stackoverflow.com/questions/9739354/javascript-email-linebreaks
function prepareEmail() {
    window.alert("Thank you for your message. Your default email client will now open.")
    window.open("mailto:40434053@live.napier.ac.uk?subject=Suggestions/Issues&body=User Email: " + getUserEmail() + "%0D%0A"
    + "User's Name: " + getUserName() + "%0D%0A"
    + "User's message: %0D%0A" + getUserMessage());

    window.alert("Thank ")
}