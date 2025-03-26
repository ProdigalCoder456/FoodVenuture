document.addEventListener("DOMContentLoaded", () => {
    const item = localStorage.getItem("selectedItem");
    document.getElementById("item-name").textContent = item.charAt(0).toUpperCase() + item.slice(1);
});

function saveConfig() {
    const selectedOptions = Array.from(document.querySelectorAll('input[name="ingredients"]:checked'))
                                .map(checkbox => checkbox.value);

    localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
    window.location.href = "view.html";
}
