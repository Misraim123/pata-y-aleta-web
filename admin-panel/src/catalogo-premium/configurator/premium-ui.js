window.renderPremiumCards = function(step){

    if(
        !step ||
        !step.options ||
        !step.options.length
    ){
        return false;
    }

    const progress =
    ((currentStep+1)/CONFIGURATOR.length)*100;

    app.innerHTML=`

    <div class="config-card">

        <div class="progress-wrapper">

            <div class="progress-label">
                ${currentStep+1} / ${CONFIGURATOR.length}
            </div>

            <div class="progress">

                <div
                    class="progress-fill"
                    style="width:${progress}%">
                </div>

            </div>

        </div>

        <h1>${step.title}</h1>

        <div class="premium-selector">

            <div class="premium-preview">

                <img
                    id="heroImage"
                    class="hero-image"
                    src="${step.options[0].image || ''}"
                    alt="">

            </div>

            <div class="premium-list">

                ${step.options.map((option,index)=>`

                    <div
                        class="premium-item"
                        data-index="${index}">

                        <h3>${option.title}</h3>

                        <p>${option.description||''}</p>

                        ${
                            option.badge
                            ?`
                            <div class="premium-badge">
                                ${option.badge}
                            </div>
                            `
                            :''
                        }

                    </div>

                `).join('')}

            </div>

        </div>

        <div class="bottom-actions">

            <button
                id="premiumBack"
                class="secondary-btn"
                type="button">

                ← Atrás

            </button>

            <button
                id="premiumNext"
                class="next-btn"
                type="button"
                style="display:none;">

                Continuar →

            </button>

        </div>

    </div>

    `;


    const hero =
    document.getElementById("heroImage");


    document
    .querySelectorAll(".premium-item")
    .forEach(item=>{

        item.onmouseenter=()=>{

            const option=
            step.options[
                Number(item.dataset.index)
            ];

            if(hero){

                hero.src=option.image;

            }

        };


        item.onclick=()=>{

            const option =
            step.options[
                Number(item.dataset.index)
            ];

            answers[step.id] = option;

            document
            .querySelectorAll(".premium-item")
            .forEach(card=>{

                card.classList.remove("active");

            });

            item.classList.add("active");


            const next =
            document.getElementById("premiumNext");

            if(next){

                next.style.display="inline-flex";

            }

        };

    });


    const premiumBack =
    document.getElementById("premiumBack");

    const premiumNext =
    document.getElementById("premiumNext");


    if(premiumBack){

        premiumBack.onclick=()=>{

            previousStep();

        };

    }


    if(premiumNext){

        premiumNext.onclick=()=>{

            if(!answers[step.id]){

                return;

            }

            nextStep();

        };

    }


    return true;

};