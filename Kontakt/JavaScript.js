// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// FORMULÄR
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("responseMessage").textContent =
        "Tack för ditt meddelande, " + name + "! Vi återkommer snart.";

    this.reset();
});
    
