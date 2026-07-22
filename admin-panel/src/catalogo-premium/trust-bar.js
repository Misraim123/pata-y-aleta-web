/*
====================================================
PATA Y ALETA
Premium Customer Confidence Strip
Version 2.0
====================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    if (typeof TRUST_ITEMS === "undefined") return;

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const wrapper = document.createElement("section");
    wrapper.className = "trust-wrapper";

    const container = document.createElement("div");
    container.className = "trust-container";

    TRUST_ITEMS.forEach(item => {

        const chip = document.createElement("div");
        chip.className = "trust-chip";

        const icon = document.createElement("div");
        icon.className = "trust-chip-icon";

        icon.textContent = getIcon(item.icon);

        const title = document.createElement("span");
        title.className = "trust-chip-title";
        title.textContent = item.title;

        chip.appendChild(icon);
        chip.appendChild(title);

        container.appendChild(chip);

    });

    wrapper.appendChild(container);

    hero.insertAdjacentElement("afterend", wrapper);

});


function getIcon(type){

    switch(type){

        case "visa":
            return "💳";

        case "mastercard":
            return "💳";

        case "amex":
            return "💳";

        case "bank":
            return "🏦";

        case "truck":
            return "🚚";

        case "tools":
            return "🛠";

        case "support":
            return "🎓";

        default:
            return "✔";

    }

}