document.querySelector("#menu-toggle").addEventListener("click", e => {
    const menu = document.querySelector("#mobile-menu");
    menu.classList.toggle("h-0");
    menu.classList.toggle("mb-4");
    menu.classList.toggle("opacity-0");
});


[...document.querySelectorAll("a[data-link]")].forEach(link => link.addEventListener("click", e => {
    document.querySelector(`#${e.target.dataset.link}`).scrollIntoView({ behavior: "smooth" });
}));