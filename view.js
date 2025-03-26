document.addEventListener("DOMContentLoaded", () => {
    const item = localStorage.getItem("selectedItem");
    const ingredients = JSON.parse(localStorage.getItem("selectedOptions")) || [];

    document.getElementById("final-item").textContent = item.charAt(0).toUpperCase() + item.slice(1);

    const list = document.getElementById("ingredients-list");
    ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        list.appendChild(li);
    });
});
