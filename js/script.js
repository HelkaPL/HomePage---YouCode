console.log("Witam serdecznie! Jeśli spodziewałeś się cudów... no coż.");

const button = document.querySelector(".js-buttonChangeBackgroundColor");
const trollButton = document.querySelector(".js-buttonJustForTrolling");
const container = document.querySelector(".container");
const exchanageApp = document.querySelector("#js-inputValue")

button.addEventListener("click", () => {
    container.classList.toggle("container--modified");
});
trollButton.addEventListener("click", () => {
    trollButton.classList.toggle("button--modified")

    trollButton.innerHTML = trollButton.classList.contains("button--modified") ? "Prosiłem nie KLIKAJ ?!" : "Nie klikaj w ten przycisk!"
});
