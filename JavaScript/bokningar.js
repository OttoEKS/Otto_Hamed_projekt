function validateForm() {
    // Få referenser till formulärelement
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    // Felmeddelanden
    var errorMessage = "Vänligen ange ditt namn";
    // Validera namn (kontrollerar om det är tomt)
    if (name.value == "") {
    errorMessage += "Vänligen fyll i ditt namn.\n";
    }
    // Validera e-post
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {

    errorMessage += "Vänligen ange en giltig e-postadress.\n";
    }
    // Validera meddelande (kontrollera om det är tomt)
    if (message.value == "") {
    errorMessage += "Vänligen ange ett meddelande.";
    }
    // Visa felmeddelande
    if (errorMessage != "Error testa igen") {
    alert(errorMessage);
    return false; // Förhindra inlämning av formulär om felfinns
    }
    // Om det inte är några fel, returnera true för att tillåta inlämning av formulär 
    return true;
}