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

    const promo = OCEAN_PULSE[currentPromotion];

    container.innerHTML = `

<div class="op-wrapper">

    <div class="op-bar">

        <div
            class="op-icon"
            style="color:${promo.color}"
        >
            ${promo.icon}
        </div>

        <div class="op-title">
            ${promo.title}
        </div>

        <div class="op-arrow">

            <svg viewBox="0 0 24 24">

                <path
                    d="M6 9l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>

            </svg>

        </div>

    </div>

    <div class="op-panel">

    <div class="op-item">

        <div class="op-item-icon">⚡</div>

        <div class="op-item-text">

            <h4>Rescate 48 hrs</h4>

            <p>Agenda hoy mismo</p>

        </div>

        <div class="op-go">→</div>

    </div>

    <div class="op-item">

        <div class="op-item-icon">🐠</div>

        <div class="op-item-text">

            <h4>Corales Australianos</h4>

            <p>Nueva colección disponible</p>

        </div>

        <div class="op-go">→</div>

    </div>

    <div class="op-item">

        <div class="op-item-icon">💎</div>

        <div class="op-item-text">

            <h4>Diseño Premium</h4>

            <p>Creamos tu ecosistema ideal</p>

        </div>

        <div class="op-go">→</div>

    </div>

    <div class="op-item">

        <div class="op-item-icon">🎁</div>

        <div class="op-item-text">

            <h4>Promoción del mes</h4>

            <p>10% primer mantenimiento</p>

        </div>

        <div class="op-go">→</div>

    </div>

</div>

</div>

`;

}