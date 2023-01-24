{
    const welcome = () => {
        console.log("Witam serdecznie! Jeśli spodziewałeś się cudów... no coż. Ale jest to już na GitHub'ie");
    }
    
    const toggleBackgroundColor = () => {
        const container = document.querySelector(".container");
        container.classList.toggle("container--modified");
    }
    
    const trollButtonAction = () => {
        const trollButton = document.querySelector(".js-buttonJustForTrolling");
        trollButton.classList.toggle("button--modified")
        trollButton.innerHTML = trollButton.classList.contains("button--modified") ? "Prosiłem nie KLIKAJ ?!" : "Nie klikaj w ten przycisk!"
    }
    
    const init = () => {
        welcome()
        const button = document.querySelector(".js-buttonChangeBackgroundColor");
        const trollButton = document.querySelector(".js-buttonJustForTrolling");
        button.addEventListener("click", toggleBackgroundColor);
        trollButton.addEventListener("click", trollButtonAction);      
    }
    
    init()
}
