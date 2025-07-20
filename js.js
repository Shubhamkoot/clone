document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".headerlisticon");
    const navMenu = document.querySelector(".headerlistnav ul");

    menuToggle.addEventListener("click", (event) => {
        event.preventDefault();
        navMenu.classList.toggle("active");
    });

    let cartCount = 0;
    const cartIcon = document.querySelector(".fa-shop");
    const cartCounter = document.createElement("span");
    cartCounter.classList.add("cart-counter");
    cartCounter.innerText = cartCount;
    cartIcon.appendChild(cartCounter);

    document.querySelectorAll(".fbox").forEach((box) => {
        box.addEventListener("click", () => {
            cartCount++;
            cartCounter.innerText = cartCount;
        });
    });
});
