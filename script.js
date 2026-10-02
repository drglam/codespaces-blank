const favoriteButtons = document.querySelectorAll(".favorite-btn");

const favorites = [];

function saveFavorites() {
    localStorage.setItem("northStarFavorites", JSON.stringify(favorites));
}

favoriteButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const product = button.dataset.product;
        favorites.push(product);
        saveFavorites();
        button.textContent = "Saved!";
    });
});