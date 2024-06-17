const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    const isExpanded = hamMenu.getAttribute('aria-expanded') === 'true';
    hamMenu.setAttribute('aria-expanded', !isExpanded);  // Toggle the aria-expanded attribute
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});
