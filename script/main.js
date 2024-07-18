let todo__form = document.querySelector(".todo__form");
let todo__inp = document.querySelector(".todo__inp");
let todo__list = document.querySelector(".todo__list");
todo__form.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputValue = todo__inp.value;
    if (inputValue != "") {
        todo__list.innerHTML += `<li class="todo__item">${inputValue}<button class="close">X</button></li>`
        todo__inp.value = "";
    };
});
todo__list.addEventListener("click", (e) => {
    if (e.target.classList.contains('close')) {
        e.target.parentElement.remove();
    };
});