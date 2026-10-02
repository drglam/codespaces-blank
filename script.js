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