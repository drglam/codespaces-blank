const favoriteButtons = document.querySelectorAll(".favorite-btn");

const savedFavorites = JSON.parse(localStorage.getItem("northStarFavorites")) || [];
const favorites = savedFavorites;
favoriteButtons.forEach(function(button) {
const product = button.dataset.product;
if (favorites.includes(product)) {
    button.textContent = "Saved!";
    }
    });
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