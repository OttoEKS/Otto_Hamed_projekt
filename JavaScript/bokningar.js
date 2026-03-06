function validateForm() {
    // Få referenser till formulärelement
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    // Felmeddelanden (valfritt)
    var errorMessage = "";
    // Validera namn (kontrollera om det är tomt)
    if (name.value === "") {
    errorMessage += "Vänligen fyll i ditt namn.\n";
    }
    // Validera e-post (kontrollera format med reguljärt uttryck)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {

    errorMessage += "Vänligen ange en giltig e-postadress.\n";
    }
    // Validera meddelande (kontrollera om det är tomt)
    if (message.value === "") {
    errorMessage += "Vänligen ange ett meddelande.";
    }
    // Visa felmeddelande (valfritt)
    if (errorMessage !== "") {
    alert(errorMessage);
    return false; // Förhindra inlämning av formulär om felfinns
    }
    // Om inga fel, returnera true för att tillåta inlämning av formulär 
    return true;
}