const favoriteButtons = document.querySelectorAll(".favorite-btn");

let favorites = JSON.parse(localStorage.getItem("northStarFavorites")) || [];

favoriteButtons.forEach(function(button) {
    const product = button.dataset.product;

    if (favorites.includes(product)) {
        button.textContent = "Saved!";
    }

    button.addEventListener("click", function() {
        if (!favorites.includes(product)) {
            favorites.push(product);
            localStorage.setItem("northStarFavorites", JSON.stringify(favorites));
        }

        button.textContent = "Saved!";
    });
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        let isValid = true;

        if (name.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        if (email.value.trim() === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!email.value.includes("@")) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (message.value.trim().length < 10) {
            messageError.textContent = "Message must be at least 10 characters.";
            isValid = false;
        }

        if (isValid) {

    setTimeout(function() {
        alert("Thank you! Your message is ready to send.");
    }, 50);
}
    });
}