const toggleMenu = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");

let isOpen = false;

toggleMenu.addEventListener("click", () => {
    if (!isOpen) {
        isOpen = true;
        menu.style.width = "15vw";
        toggleMenu.textContent = "Fechar Menu <<";
        toggleMenu.style.justifyContent = "center";
        toggleMenu.style.alignItems = "center";
        toggleMenu.style.textAlign = "center";
        toggleMenu.style.paddingRight = "20px";
    } else {
        isOpen = false;
        menu.style.width = "4vw";
        toggleMenu.textContent = ">>";
        toggleMenu.style.justifyContent = "center";
        toggleMenu.style.textAlign = "center";
    }
});