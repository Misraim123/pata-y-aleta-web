/*=========================================
PATA Y ALETA
OCEAN PULSE ENGINE
v0.2
=========================================*/

let currentPromotion = 0;

document.addEventListener("DOMContentLoaded", () => {

    const container =
        document.querySelector("#ocean-pulse");

    if(!container) return;

    renderPromotion(container);

});

function renderPromotion(container){

    const promo =
        OCEAN_PULSE[currentPromotion];

    container.innerHTML = `

<div class="op-compact">

    <div
        class="op-icon"
        style="color:${promo.color}"
    >
        ${promo.icon}
    </div>

    <div class="op-title">

        ${promo.title}

    </div>

</div>

`;

}