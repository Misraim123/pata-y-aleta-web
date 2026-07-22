/*
====================================================
PATA Y ALETA
Premium Status Bar Engine
Version 1.0
====================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    if (typeof TRUST_MESSAGES === "undefined") return;

    const hero = document.querySelector(".hero");

if (!hero) return;

    const wrapper = document.createElement("section");
    wrapper.className = "trust-wrapper";

    const bar = document.createElement("div");
    bar.className = "trust-bar";

    const icon = document.createElement("div");
    icon.className = "trust-icon";

    const text = document.createElement("div");
    text.className = "trust-text";

    bar.appendChild(icon);
    bar.appendChild(text);

    wrapper.appendChild(bar);

    hero.insertAdjacentElement("afterend", wrapper);

    let current = 0;

    function getIcon(name){

        switch(name){

            case "shield":

                return `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"/>
                </svg>
                `;

            case "truck":

                return `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 3h15v13H1z"/>
                    <path d="M16 8h4l3 3v5h-7z"/>
                    <circle cx="5.5" cy="18.5" r="2"/>
                    <circle cx="18.5" cy="18.5" r="2"/>
                </svg>
                `;

            case "reef":

                return "🐠";

            case "tools":

                return "🛠";

            case "support":

                return "💬";

            case "premium":

                return "⭐";

            default:

                return "✓";

        }

    }

    function render(){

        const item = TRUST_MESSAGES[current];

        text.classList.add("hide");

        setTimeout(()=>{

            icon.innerHTML = getIcon(item.icon);

            text.textContent = item.title;

            text.classList.remove("hide");

        },250);

    }

    render();

    setInterval(()=>{

        current++;

        if(current >= TRUST_MESSAGES.length){

            current = 0;

        }

        render();

    },5000);

});