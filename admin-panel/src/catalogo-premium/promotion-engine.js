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

<div class="op-card">

    <div class="op-left">

        <div
        class="op-icon"
        style="color:${promo.color}"
        >

            ${promo.icon}

        </div>

    </div>

    <div class="op-right">

        <span class="op-badge">

            ${promo.badge}

        </span>

        <h3>

            ${promo.title}

        </h3>

        <p>

            ${promo.subtitle}

        </p>

    </div>

</div>

`;

}