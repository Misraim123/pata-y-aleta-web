/*=========================================
PATA Y ALETA
OCEAN PULSE ENGINE
v1.0
=========================================*/

let currentPromotion = 0;

document.addEventListener("DOMContentLoaded", () => {

    const container =
        document.querySelector(".live-ribbon-content");

    if (!container) return;

    renderPromotion(container);

});

function renderPromotion(container){

    const promo =
        OCEAN_PULSE[currentPromotion];

    container.innerHTML = `

<span>${promo.icon}</span>

<span>${promo.badge}</span>

<span>${promo.title}</span>

<span>${promo.subtitle}</span>

`;

}