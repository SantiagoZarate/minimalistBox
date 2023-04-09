
document.getElementById("items").onmousemove = e => {
    for (const card of document.getElementsByClassName("card__item")) {

        const rect = card.getBoundingClientRect();
        x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
}

let tarjetaEl = document.getElementById("cards");

tarjetaEl.onmousemove = e => {
    // e.stopPropagation();
    const pruebaX = e.clientX - 200,
          pruebaY = e.clientY - 200;

    tarjetaEl.style.setProperty("--pos-mouseX", `${pruebaX}px`)
    tarjetaEl.style.setProperty("--pos-mouseY", `${pruebaY}px`)
}