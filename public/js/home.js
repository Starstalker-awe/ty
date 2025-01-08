document.querySelector("#menu-toggle").addEventListener("click", e => {
    const menu = document.querySelector("nav");
    menu.classList.toggle("h-0");
});


[...document.querySelectorAll("a[data-link]")].forEach(link => link.addEventListener("click", e => {
    document.querySelector(`#${e.target.dataset.link}`).scrollIntoView({ behavior: "smooth" });
}))