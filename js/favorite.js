function toggleFavorite(element) {
  element.classList.toggle("active");

  const itemId = element.parentElement.id;
  const isFavorite = element.classList.contains("active");

  let favorites = JSON.parse(localStorage.getItem("favorites")) || {};
  favorites[itemId] = isFavorite;
  localStorage.setItem("favorites", JSON.stringify(favorites));

  console.log(`Item ${itemId} favori durumu: ${isFavorite}`);
}

window.onload = function () {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || {};
  for (const [itemId, isFavorite] of Object.entries(favorites)) {
    if (isFavorite) {
      document.querySelector(`#${itemId} .star`).classList.add("active");
    }
  }
};
