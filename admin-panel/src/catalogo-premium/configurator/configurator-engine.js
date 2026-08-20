console.log("CONFIGURATOR ENGINE LOADED");

/* =========================================================
   PATA Y ALETA — CONFIGURATOR ENGINE
   ========================================================= */

const app = document.getElementById("app");

let currentStep = 0;

let answers = {};

let selectedFish = [];

let selectedCorals = [];

/* =========================================================
   PROJECT PERSISTENCE
   ========================================================= */

const CONFIGURATOR_STORAGE_KEY =
"pataYaletaConfiguratorProgress";


function saveConfiguratorProgress(){

    try{

        const progressData = {

            version:1,

            savedAt:
            new Date().toISOString(),

            currentStep:
            currentStep,

            answers:
            answers,

            selectedFish:
            selectedFish,

            selectedCorals:
            selectedCorals

        };


        localStorage.setItem(
            CONFIGURATOR_STORAGE_KEY,
            JSON.stringify(progressData)
        );


        console.log(
            "PATA Y ALETA — PROGRESO GUARDADO",
            progressData
        );

    }catch(error){

        console.warn(
            "No fue posible guardar el progreso del configurador.",
            error
        );

    }

}


function loadConfiguratorProgress(){

    try{

        const stored =
        localStorage.getItem(
            CONFIGURATOR_STORAGE_KEY
        );


        if(!stored){
            return false;
        }


        const progressData =
        JSON.parse(stored);


        if(
            !progressData ||
            typeof progressData !== "object"
        ){
            return false;
        }


        if(
            progressData.answers &&
            typeof progressData.answers === "object"
        ){

            answers =
            progressData.answers;

        }


        if(
            Array.isArray(
                progressData.selectedFish
            )
        ){

            selectedFish =
            progressData.selectedFish;

        }


        if(
            Array.isArray(
                progressData.selectedCorals
            )
        ){

            selectedCorals =
            progressData.selectedCorals;

        }


        if(
            Number.isInteger(
                progressData.currentStep
            ) &&
            progressData.currentStep >= 0 &&
            progressData.currentStep <
            CONFIGURATOR.length
        ){

            currentStep =
            progressData.currentStep;

        }


        console.log(
            "PATA Y ALETA — PROGRESO RECUPERADO",
            progressData
        );


        return true;

    }catch(error){

        console.warn(
            "No fue posible recuperar el progreso del configurador.",
            error
        );


        return false;

    }

}


function clearConfiguratorProgress(){

    try{

        localStorage.removeItem(
            CONFIGURATOR_STORAGE_KEY
        );


        console.log(
            "PATA Y ALETA — PROGRESO ELIMINADO"
        );

    }catch(error){

        console.warn(
            "No fue posible eliminar el progreso.",
            error
        );

    }

}


/* =========================================================
   HELPERS
   ========================================================= */

function getCurrentStep(){

    return CONFIGURATOR[currentStep];

}


function getProgress(){

    return ((currentStep + 1) / CONFIGURATOR.length) * 100;

}


function nextStep(){

    if(currentStep < CONFIGURATOR.length - 1){

        currentStep++;

saveConfiguratorProgress();

renderStep();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

}


function previousStep(){

    if(currentStep > 0){

        currentStep--;

saveConfiguratorProgress();

renderStep();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

}


/* =========================================================
   CONDITIONAL FLOW
   ========================================================= */

function shouldSkipStep(step){

    if(!step){
        return false;
    }


    const project =
    answers.project;


    const includes =
    Array.isArray(answers.includes)
        ? answers.includes
        : [];


    /*
       =====================================================
       SELECCIÓN DE PECES
       =====================================================

       Mostrar si:

       - Es Marino Reef
       - Es Marino Fish Only
       - El usuario seleccionó Peces
         en "¿Qué deseas incluir?"
    */

    if(step.id === "fish"){

        const marineProject =
        project &&
        (
            project.id === "reef" ||
            project.id === "fishonly"
        );


        const fishSelected =
        includes.includes("fish");


        if(
            !marineProject &&
            !fishSelected
        ){
            return true;
        }

    }


    /*
       =====================================================
       SELECCIÓN DE CORALES
       =====================================================

       Nunca mostrar en Marino Fish Only.

       Mostrar si:

       - Es Marino Reef
       - O el usuario seleccionó Corales
         en "¿Qué deseas incluir?"
    */

    if(step.id === "corals"){

        if(
            project &&
            project.id === "fishonly"
        ){
            return true;
        }


        const reefProject =
        project &&
        project.id === "reef";


        const coralsSelected =
        includes.includes("corals");


        if(
            !reefProject &&
            !coralsSelected
        ){
            return true;
        }

    }


    return false;

}

function goToNextAvailableStep(){

    let nextIndex = currentStep + 1;

    while(
        nextIndex < CONFIGURATOR.length &&
        shouldSkipStep(CONFIGURATOR[nextIndex])
    ){

        nextIndex++;

    }

    if(nextIndex < CONFIGURATOR.length){

        currentStep = nextIndex;

saveConfiguratorProgress();

renderStep();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

}

function goToPreviousAvailableStep(){

    let previousIndex = currentStep - 1;

    while(
        previousIndex >= 0 &&
        shouldSkipStep(CONFIGURATOR[previousIndex])
    ){

        previousIndex--;

    }

    if(previousIndex >= 0){

        currentStep = previousIndex;

saveConfiguratorProgress();

renderStep();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

}


/* =========================================================
   MAIN RENDER
   ========================================================= */

function renderStep(){

    const step = getCurrentStep();

    if(!step){
        console.error(
            "CONFIGURATOR: paso inexistente",
            currentStep
        );
        return;
    }

    if(shouldSkipStep(step)){
        goToNextAvailableStep();
        return;
    }

    switch(step.type){

        case "intro":
            renderIntro(step);
            return;

        case "single":
            renderSingle(step);
            return;

        case "multiple":
            renderMultiple(step);
            return;

 case "species":

    if(
        step.id === "fish" ||
        step.id === "fishes"
    ){

        renderFishSelector(step);
        return;

    }


    if(
        step.id === "corals"
    ){

        renderCoralSelector(step);
        return;

    }


    renderSpecies(step);
    return;

        case "measure":
            renderMeasure(step);
            return;

        case "upload":
            renderUpload(step);
            return;

        case "textarea":
        case "text":
            renderText(step);
            return;

        case "final":
            renderFinal(step);
            return;

        case "summary":
            renderSummary(step);
            return;

        default:
            console.error(
                "CONFIGURATOR: tipo de paso no soportado",
                step.type,
                step
            );
            return;
    }
}


/* =========================================================
   INTRO
   ========================================================= */

function renderIntro(step){

    app.innerHTML = `

    <div class="configurator">

        <div class="config-card show step-${step.id}">

            <div class="progress-wrapper">

                <div class="progress-label">
                    ${currentStep + 1} / ${CONFIGURATOR.length}
                </div>

                <div class="progress">

                    <div
                        class="progress-fill"
                        style="width:${getProgress()}%">
                    </div>

                </div>

            </div>


            <div class="intro-content">

                <div class="intro-premium-mark">
                    ✦ PATA Y ALETA AQUARIUM DESIGN STUDIO
                </div>

                <h1>
                    ${step.title}
                </h1>

                <p class="intro-description">

                    ${
                        step.description ||
                        "Diseñemos juntos un acuario extraordinario."
                    }

                </p>

                <div class="intro-features">

                    <span>✦ Diseño personalizado</span>

                    <span>✦ Selección de especies</span>

                    <span>✦ Tecnología Premium</span>

                </div>


                <button
                    id="introNext"
                    class="next-btn intro-start-btn"
                    type="button">

                    Comenzar mi proyecto →

                </button>

            </div>

        </div>

    </div>

    `;


    const next =
    document.getElementById("introNext");


    if(next){

        next.onclick = ()=>{

            goToNextAvailableStep();

        };

    }

}


/* =========================================================
   SINGLE OPTIONS
   ========================================================= */

function renderSingle(step){

    const selected =
    answers[step.id] || null;


    app.innerHTML = `

    <div class="configurator">

        <div class="config-card show step-${step.id}">


            <div class="progress-wrapper">

                <div class="progress-label">
                    ${currentStep + 1} / ${CONFIGURATOR.length}
                </div>


                <div class="progress">

                    <div
                        class="progress-fill"
                        style="width:${getProgress()}%">
                    </div>

                </div>

            </div>


            <h1>
                ${step.title}
            </h1>


            <div class="options premium-grid">

                ${step.options.map((option,index)=>`

                    <div
                        class="option-card ${
                            selected &&
                            selected.id === option.id
                            ? "selected"
                            : ""
                        }"
                        data-index="${index}">


                        ${
                            option.image
                            ? `
                            <div
                                class="option-placeholder"
                                style="
                                    background-image:url('${option.image}');
                                    background-size:cover;
                                    background-position:center;
                                ">
                            </div>
                            `
                            : option.icon
                            ? `
                            <div class="option-icon">
                                ${option.icon}
                            </div>
                            `
                            : ""
                        }


                        <h3>
                            ${option.title}
                        </h3>


                        ${
                            option.description
                            ? `
                            <p>
                                ${option.description}
                            </p>
                            `
                            : ""
                        }


                        ${
                            option.badge
                            ? `
                            <div class="option-badge">
                                ${option.badge}
                            </div>
                            `
                            : ""
                        }


                    </div>

                `).join("")}

            </div>


            <div class="bottom-actions">

                <button
                    id="singleBack"
                    class="secondary-btn"
                    type="button">

                    ← Atrás

                </button>


                <button
                    id="singleNext"
                    class="next-btn"
                    type="button"
                    style="${
                        selected
                        ? "display:inline-flex"
                        : "display:none"
                    }">

                    Continuar →

                </button>

            </div>

        </div>

    </div>

    `;


    const cards =
    document.querySelectorAll(".option-card");


    const next =
    document.getElementById("singleNext");


    const back =
    document.getElementById("singleBack");


    if(back){

        back.onclick = ()=>{

            goToPreviousAvailableStep();

        };

    }


    cards.forEach(card=>{

        card.onclick = ()=>{

            const index =
            Number(card.dataset.index);


            const option =
            step.options[index];


            answers[step.id] =
            option;


            cards.forEach(item=>{

                item.classList.remove("selected");

            });


            card.classList.add("selected");


            if(next){

                next.style.display =
                "inline-flex";

            }

        };

    });


    if(next){

        next.onclick = ()=>{

            if(!answers[step.id]){
                return;
            }


            goToNextAvailableStep();

        };

    }

}


/* =========================================================
   MULTIPLE OPTIONS
   ========================================================= */

/* =========================================================
   FISH SELECTOR
   Buscador premium de peces
   ========================================================= */

function renderFishSelector(step){

    const allFish =
typeof FISH !== "undefined" &&
Array.isArray(FISH)
    ? FISH
    : [];


const project =
answers.project;


const projectId =
project && typeof project === "object"
    ? project.id
    : project;


const fishList =
allFish.filter(fish=>{

    /*
       AGUA DULCE
       Incluye proyectos:
       - fresh
       - planted
    */

    if(
        projectId === "fresh" ||
        projectId === "planted"
    ){

        if(fish.water !== "freshwater"){
            return false;
        }


        /*
           En Plantado mostramos únicamente
           especies compatibles con plantados.
        */

        if(
            projectId === "planted" &&
            fish.planted !== true
        ){
            return false;
        }


        return true;

    }


    /*
       MARINO
       Incluye:
       - reef
       - fishonly

       Los peces marinos actuales no tienen
       propiedad water, por eso todo lo que
       NO sea freshwater se considera marino.
    */

    if(
        projectId === "reef" ||
        projectId === "fishonly"
    ){

        return fish.water !== "freshwater";

    }


    /*
       FALLBACK
       Si todavía no existe proyecto,
       mostramos todo el catálogo.
    */

    return true;

});


    const selected =
    Array.isArray(answers[step.id])
        ? [...answers[step.id]]
        : [];


    app.innerHTML = `

    <div class="configurator">

        <div class="config-card show step-${step.id}">


            <div class="progress-wrapper">

                <div class="progress-label">
                    ${currentStep + 1} / ${CONFIGURATOR.length}
                </div>


                <div class="progress">

                    <div
                        class="progress-fill"
                        style="width:${getProgress()}%">
                    </div>

                </div>

            </div>


            <div class="species-header">

                <div class="species-heading">

                    <span class="species-kicker">
                        🐠 SELECCIÓN DE ESPECIES
                    </span>


                    <h1>
                        Elige tus peces
                    </h1>


                    <p>
                        Puedes mostrarnos qué peces te gustan
                        o buscarlos en nuestro catálogo.
                    </p>

                </div>


                <div class="species-counter">

                    <strong id="fishSelectedCount">
                        ${selected.length}
                    </strong>

                    <span>
                        seleccionados
                    </span>

                </div>

            </div>


            <div class="species-choice-panel">


                <button
                    id="uploadFishOption"
                    class="species-choice-card"
                    type="button">

                    <span class="species-choice-icon">
                        📷
                    </span>

                    <span class="species-choice-copy">

                        <strong>
                            Sube tus peces
                        </strong>

                        <small>
                            Muéstranos una foto de las especies que te gustan
                        </small>

                    </span>

                </button>


                <button
                    id="searchFishOption"
                    class="species-choice-card active"
                    type="button">

                    <span class="species-choice-icon">
                        🔎
                    </span>

                    <span class="species-choice-copy">

                        <strong>
                            Busca tus peces
                        </strong>

                        <small>
                            Explora nuestro catálogo por nombre
                        </small>

                    </span>

                </button>


            </div>


            <input
                id="fishPhotoInput"
                type="file"
                accept="image/*"
                multiple
                hidden>


            <div
                id="fishPhotoPreview"
                class="species-upload-preview">
            </div>


            <div
                id="fishCatalogPanel"
                class="species-catalog-panel">


                <div class="species-search-wrapper">

                    <span class="species-search-icon">
                        🔎
                    </span>


                    <input
                        id="fishSearch"
                        class="species-search"
                        type="search"
                        autocomplete="off"
                        placeholder="Busca por nombre comercial o científico...">

                </div>


                <div class="species-helper">

                    ¿No sabes cuál elegir?
                    Puedes continuar sin seleccionar especies.
                    Nuestro especialista podrá recomendarte
                    las más adecuadas para tu proyecto.

                </div>


                <div
                    id="fishResults"
                    class="species-grid">
                </div>


            </div>


            <div class="bottom-actions">

                <button
                    id="fishBack"
                    class="secondary-btn"
                    type="button">

                    ← Atrás

                </button>


                <button
                    id="fishNext"
                    class="next-btn"
                    type="button">

                    Continuar →

                </button>

            </div>


        </div>

    </div>

    `;


        const uploadFish =
    document.getElementById(
        "uploadFishOption"
    );


    const searchFish =
    document.getElementById(
        "searchFishOption"
    );


    const photoInput =
    document.getElementById(
        "fishPhotoInput"
    );


    const photoPreview =
    document.getElementById(
        "fishPhotoPreview"
    );


    const catalogPanel =
    document.getElementById(
        "fishCatalogPanel"
    );


    let fishPhotos =
    Array.isArray(answers.fishPhotos)
        ? [...answers.fishPhotos]
        : [];


    function renderFishPhotoPreview(){

        if(!photoPreview){
            return;
        }


        if(!fishPhotos.length){

            photoPreview.innerHTML = "";
            photoPreview.style.display = "none";

            return;

        }


        photoPreview.style.display = "grid";


        photoPreview.innerHTML =
        fishPhotos.map((photo,index)=>`

            <div class="species-upload-item">

                <img
                    src="${photo.preview || ""}"
                    alt="Referencia de pez ${index + 1}"
                    draggable="false">


                <button
                    type="button"
                    class="species-upload-remove"
                    data-remove-fish-photo="${index}"
                    aria-label="Eliminar fotografía">

                    ×

                </button>

            </div>

        `).join("");


        photoPreview
        .querySelectorAll(
            "[data-remove-fish-photo]"
        )
        .forEach(button=>{

            button.onclick = ()=>{

                const index =
                Number(
                    button.dataset.removeFishPhoto
                );


                fishPhotos.splice(
                    index,
                    1
                );


                answers.fishPhotos =
                [...fishPhotos];


                renderFishPhotoPreview();

            };

        });

    }

    function addFishPhotos(fileList){

        const incoming =
        Array.from(fileList || []);


        incoming.forEach(file=>{

            if(
                !file ||
                !file.type ||
                !file.type.startsWith("image/")
            ){
                return;
            }


            if(fishPhotos.length >= 10){
                return;
            }


            const reader =
            new FileReader();


            reader.onload = event=>{

                fishPhotos.push({

                    name:file.name,

                    type:file.type,

                    size:file.size,

                    preview:event.target.result

                });


                answers.fishPhotos =
                [...fishPhotos];


                renderFishPhotoPreview();

            };


            reader.readAsDataURL(file);

        });

    }


    // renderFishPhotoPreview();


    if(uploadFish && photoInput){

        uploadFish.onclick = event=>{

            event.preventDefault();

            photoInput.click();

        };

    }


    if(photoInput){

        photoInput.onchange = ()=>{

            addFishPhotos(
                photoInput.files
            );


            photoInput.value = "";

        };

    }


    if(searchFish && catalogPanel){

        searchFish.onclick = ()=>{

            catalogPanel.style.display =
            "block";


            searchFish.classList.add(
                "active"
            );


            if(search){

                search.focus();

            }

        };

    }

    const search =
    document.getElementById(
        "fishSearch"
    );


    const results =
    document.getElementById(
        "fishResults"
    );


    const counter =
    document.getElementById(
        "fishSelectedCount"
    );


    const back =
    document.getElementById(
        "fishBack"
    );


    const next =
    document.getElementById(
        "fishNext"
    );


    function isFishSelected(id){

        return selected.includes(id);

    }


    function updateCounter(){

        if(counter){

            counter.textContent =
            selected.length;

        }

    }

        function normalizeFishSearch(value){

        return String(value || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();

    }


    function fishMatchesSearch(fish, query){

        const normalizedQuery =
        normalizeFishSearch(query);


        if(!normalizedQuery){
            return true;
        }


        const searchableValues = [

            fish.name,

            fish.scientific,

            fish.category,

            ...(Array.isArray(fish.aliases)
                ? fish.aliases
                : [])

        ];


        const searchableText =
        searchableValues
        .filter(Boolean)
        .map(normalizeFishSearch)
        .join(" ");


        return searchableText.includes(
            normalizedQuery
        );

    }


    function renderFishResults(query = ""){

        if(!results){
            return;
        }


                const normalized =
        normalizeFishSearch(query);


        const filtered =
        fishList.filter(fish=>{

            return fishMatchesSearch(
                fish,
                normalized
            );

        });


        if(!filtered.length){

    const requestedName =
    query.trim();


    results.innerHTML = `

        <div class="species-empty species-manual-result">

            <div class="species-empty-icon">
                🐠
            </div>


            <div class="species-empty-copy">

                <span class="species-empty-kicker">
                    NO ESTÁ EN NUESTRO CATÁLOGO
                </span>


                <h3>
                    ¿Buscas “${requestedName}”?
                </h3>


                <p>
                    No hay problema. Agrégalo a tu proyecto
                    y nuestro especialista podrá ayudarte
                    a identificar la especie correcta.
                </p>

            </div>


            <button
                id="addCustomFish"
                class="species-custom-add"
                type="button">

                + Agregar “${requestedName}”

            </button>

        </div>

    `;


    const addCustom =
    document.getElementById(
        "addCustomFish"
    );


    if(addCustom){

        addCustom.onclick = ()=>{

            const customId =
            "custom:" +
            normalizeFishSearch(
                requestedName
            );


            if(
                !selected.includes(
                    customId
                )
            ){

                selected.push(
                    customId
                );

            }


            if(
                !Array.isArray(
                    answers.customFish
                )
            ){

                answers.customFish = [];

            }


            const alreadySaved =
            answers.customFish.some(
                fish =>
                fish.id === customId
            );


            if(!alreadySaved){

                answers.customFish.push({

                    id:customId,

                    name:requestedName,

                    custom:true

                });

            }


            answers[step.id] =
            [...selected];


            updateCounter();


            addCustom.textContent =
            "✓ Agregado a tu proyecto";


            addCustom.classList.add(
                "added"
            );


            addCustom.disabled =
            true;

        };

    }


    return;

}


                results.innerHTML =
        filtered.map(fish=>`

            <button
                class="species-card ${
                    isFishSelected(fish.id)
                        ? "selected"
                        : ""
                }"
                type="button"
                data-fish-id="${fish.id}">


                <div class="species-image">

                    <img
                        src="${fish.image || ""}"
                        alt="${fish.name || "Pez"}"
                        loading="lazy"
                        draggable="false">

                </div>


                <div class="species-card-content">


                    <div class="species-card-top">

                        <div>

                            <h3>
                                ${fish.name || ""}
                            </h3>


                            <em>
                                ${fish.scientific || ""}
                            </em>

                        </div>


                        <div class="species-check">
                            ✓
                        </div>

                    </div>


                    <div class="species-meta">

                        ${
                            fish.difficulty
                            ? `
                            <span>
                                ${fish.difficulty}
                            </span>
                            `
                            : ""
                        }


                        ${
                            fish.category
                            ? `
                            <span>
                                ${fish.category}
                            </span>
                            `
                            : ""
                        }

                    </div>


                    ${
                        fish.price
                        ? `
                        <div class="species-price">
                            ${fish.price}
                        </div>
                        `
                        : ""
                    }


                </div>

            </button>

        `).join("");


        results
        .querySelectorAll(
            "[data-fish-id]"
        )
        .forEach(card=>{

            card.onclick = ()=>{

                const id =
                card.dataset.fishId;


                const index =
                selected.indexOf(id);


                if(index >= 0){

                    selected.splice(
                        index,
                        1
                    );

                    card.classList.remove(
                        "selected"
                    );

                }else{

                    selected.push(id);

                    card.classList.add(
                        "selected"
                    );

                }


                answers[step.id] =
                [...selected];


                updateCounter();

            };

        });

    }


    renderFishResults();


    if(search){

        search.oninput = ()=>{

            renderFishResults(
                search.value
            );

        };

    }


    if(back){

        back.onclick = ()=>{

            answers[step.id] =
            [...selected];


            goToPreviousAvailableStep();

        };

    }


    if(next){

        next.onclick = ()=>{

            answers[step.id] =
            [...selected];


            goToNextAvailableStep();

        };

    }


    }

    /* =========================================================
   CORAL SELECTOR
   Buscador premium de corales
   ========================================================= */

function renderCoralSelector(step){

    const coralList =
    typeof CORALS !== "undefined" &&
    Array.isArray(CORALS)
        ? CORALS
        : [];


    const selected =
    Array.isArray(answers[step.id])
        ? [...answers[step.id]]
        : [];


    let coralPhotos =
    Array.isArray(answers.coralPhotos)
        ? [...answers.coralPhotos]
        : [];


    app.innerHTML = `

    <div class="configurator">

        <div class="config-card show step-${step.id}">

            <div class="progress-wrapper">

                <div class="progress-label">
                    ${currentStep + 1} / ${CONFIGURATOR.length}
                </div>

                <div class="progress">

                    <div
                        class="progress-fill"
                        style="width:${getProgress()}%">
                    </div>

                </div>

            </div>


            <div class="species-header">

                <div class="species-heading">

                    <span class="species-kicker">
                        🪸 SELECCIÓN DE CORALES
                    </span>

                    <h1>
                        Elige tus corales
                    </h1>

                    <p>
                        Puedes mostrarnos qué corales te gustan
                        o buscarlos en nuestro catálogo.
                    </p>

                </div>


                <div class="species-counter">

                    <strong id="coralSelectedCount">
                        ${selected.length + coralPhotos.length}
                    </strong>

                    <span>
    en tu proyecto
</span>

                </div>

            </div>


            <div class="species-choice-panel">

                <button
                    id="uploadCoralOption"
                    class="species-choice-card"
                    type="button">

                    <span class="species-choice-icon">
                        📷
                    </span>

                    <span class="species-choice-copy">

                        <strong>
                            Sube tus corales
                        </strong>

                        <small>
                            Haz clic o arrastra aquí fotografías de referencia
                        </small>

                    </span>

                </button>


                <button
                    id="searchCoralOption"
                    class="species-choice-card active"
                    type="button">

                    <span class="species-choice-icon">
                        🔎
                    </span>

                    <span class="species-choice-copy">

                        <strong>
                            Busca tus corales
                        </strong>

                        <small>
                            Explora nuestro catálogo por nombre o tipo
                        </small>

                    </span>

                </button>

            </div>


            <input
                id="coralPhotoInput"
                type="file"
                accept="image/*"
                multiple
                hidden>


            <div
                id="coralPhotoPreview"
                class="species-upload-preview">
            </div>


            <div
                id="coralCatalogPanel"
                class="species-catalog-panel">

                <div class="species-search-wrapper">

                    <span class="species-search-icon">
                        🔎
                    </span>

                    <input
                        id="coralSearch"
                        class="species-search"
                        type="search"
                        autocomplete="off"
                        placeholder="Busca coral, nombre científico, LPS, SPS...">

                </div>


                <div class="species-helper">

                    ¿No sabes cuál elegir?
                    Puedes continuar sin seleccionar corales.
                    Nuestro especialista podrá recomendarte
                    los más adecuados para tu proyecto.

                </div>


                <div
                    id="coralResults"
                    class="species-grid">
                </div>

            </div>


            <div class="bottom-actions">

                <button
                    id="coralBack"
                    class="secondary-btn"
                    type="button">

                    ← Atrás

                </button>


                <button
                    id="coralNext"
                    class="next-btn"
                    type="button">

                    Continuar →

                </button>

            </div>

        </div>

    </div>

    `;


    const search =
    document.getElementById(
        "coralSearch"
    );


    const results =
    document.getElementById(
        "coralResults"
    );


    const uploadOption =
    document.getElementById(
        "uploadCoralOption"
    );


    const searchOption =
    document.getElementById(
        "searchCoralOption"
    );


    const photoInput =
    document.getElementById(
        "coralPhotoInput"
    );


    const photoPreview =
    document.getElementById(
        "coralPhotoPreview"
    );


    const catalogPanel =
    document.getElementById(
        "coralCatalogPanel"
    );


    const count =
    document.getElementById(
        "coralSelectedCount"
    );


    const back =
    document.getElementById(
        "coralBack"
    );


    const next =
    document.getElementById(
        "coralNext"
    );


    function normalizeCoralText(value){

        return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

    }


    function updateCoralCount(){

    if(!count){
        return;
    }


    const coralTotal =
    selected.length;


    const photoTotal =
    coralPhotos.length;


    if(
        coralTotal > 0 &&
        photoTotal > 0
    ){

        count.textContent =
        `${coralTotal} coral${
            coralTotal === 1 ? "" : "es"
        } · ${photoTotal} referencia${
            photoTotal === 1 ? "" : "s"
        }`;

        return;

    }


    if(coralTotal > 0){

        count.textContent =
        `${coralTotal} coral${
            coralTotal === 1 ? "" : "es"
        }`;

        return;

    }


    if(photoTotal > 0){

        count.textContent =
        `${photoTotal} referencia${
            photoTotal === 1 ? "" : "s"
        }`;

        return;

    }


    count.textContent =
    "0";

}


    function saveCoralState(){

        answers[step.id] =
        [...selected];


        answers.coralPhotos =
        [...coralPhotos];

    }


    function renderCoralPhotoPreview(){

        if(!photoPreview){
            return;
        }


        if(!coralPhotos.length){

            photoPreview.innerHTML = "";
            return;

        }


        photoPreview.innerHTML =
        coralPhotos.map((photo,index)=>`

            <div class="species-upload-item">

                <img
                    src="${photo.preview || ""}"
                    alt="Referencia de coral ${index + 1}"
                    draggable="false">


                <button
                    type="button"
                    class="species-upload-remove"
                    data-remove-coral-photo="${index}"
                    aria-label="Eliminar fotografía">

                    ×

                </button>

            </div>

        `).join("");


        photoPreview
        .querySelectorAll(
            "[data-remove-coral-photo]"
        )
        .forEach(button=>{

            button.onclick = event=>{

                event.preventDefault();
                event.stopPropagation();


                const index =
                Number(
                    button.dataset.removeCoralPhoto
                );


                coralPhotos.splice(
                    index,
                    1
                );


                saveCoralState();

                updateCoralCount();

                renderCoralPhotoPreview();

            };

        });

    }


    function addCoralPhotos(fileList){

        const incoming =
        Array.from(fileList || []);


        incoming.forEach(file=>{

            if(
                !file ||
                !file.type ||
                !file.type.startsWith("image/")
            ){
                return;
            }


            if(coralPhotos.length >= 10){
                return;
            }


            const reader =
            new FileReader();


            reader.onload = event=>{

                coralPhotos.push({

                    name:file.name,

                    type:file.type,

                    size:file.size,

                    preview:event.target.result

                });


                saveCoralState();

                updateCoralCount();

                renderCoralPhotoPreview();

            };


            reader.readAsDataURL(file);

        });

    }


    function renderCoralResults(query = ""){

        if(!results){
            return;
        }


        const normalized =
        normalizeCoralText(query);


        const filtered =
        coralList.filter(coral=>{

            if(!normalized){
                return true;
            }


            const aliases =
            Array.isArray(coral.aliases)
                ? coral.aliases.join(" ")
                : "";


            const searchable =
            normalizeCoralText(`

                ${coral.name || ""}

                ${coral.scientific || ""}

                ${coral.type || ""}

                ${coral.category || ""}

                ${aliases}

            `);


            return searchable.includes(
                normalized
            );

        });


        if(
            normalized &&
            !filtered.length
        ){

            const requestedName =
            query.trim();


            const customId =
            "custom:" +
            normalizeCoralText(
                requestedName
            );


            const alreadyAdded =
            selected.includes(
                customId
            );


            results.innerHTML = `

                <div class="species-not-found">

                    <div class="species-not-found-icon">
                        🪸
                    </div>


                    <div class="species-not-found-kicker">
                        NO ESTÁ EN NUESTRO CATÁLOGO
                    </div>


                    <h3>
                        ¿Buscas “${requestedName}”?
                    </h3>


                    <p>
                        No hay problema. Agrégalo a tu proyecto
                        y nuestro especialista podrá ayudarte
                        a identificar el coral correcto.
                    </p>


                    <button
                        id="addCustomCoral"
                        class="species-custom-add ${
                            alreadyAdded
                            ? "added"
                            : ""
                        }"
                        type="button"
                        ${alreadyAdded ? "disabled" : ""}>

                        ${
                            alreadyAdded
                            ? "✓ Agregado a tu proyecto"
                            : `+ Agregar “${requestedName}”`
                        }

                    </button>

                </div>

            `;


            const addCustom =
            document.getElementById(
                "addCustomCoral"
            );


            if(
                addCustom &&
                !alreadyAdded
            ){

                addCustom.onclick = ()=>{

                    selected.push(
                        customId
                    );


                    if(
                        !Array.isArray(
                            answers.customCorals
                        )
                    ){

                        answers.customCorals = [];

                    }


                    const exists =
                    answers.customCorals.some(
                        coral =>
                        coral.id === customId
                    );


                    if(!exists){

                        answers.customCorals.push({

                            id:customId,

                            name:requestedName,

                            custom:true

                        });

                    }


                    saveCoralState();

                    updateCoralCount();

                    renderCoralResults(
                        query
                    );

                };

            }


            return;

        }


        results.innerHTML =
        filtered.map(coral=>{

            const isSelected =
            selected.includes(
                coral.id
            );


            return `

                <button
                    class="species-card ${
                        isSelected
                        ? "selected"
                        : ""
                    }"
                    type="button"
                    data-coral-id="${coral.id}">


                    <div class="species-card-image">

                        <img
                            src="${coral.image || ""}"
                            alt="${coral.name || "Coral"}"
                            loading="lazy"
                            draggable="false">

                    </div>


                    <div class="species-card-content">

                        <div class="species-card-heading">

                            <div>

                                <h3>
                                    ${coral.name || ""}
                                </h3>

                                <em>
                                    ${coral.scientific || ""}
                                </em>

                            </div>


                            <span class="species-check">

                                ${
                                    isSelected
                                    ? "✓"
                                    : ""
                                }

                            </span>

                        </div>


                        <div class="species-tags">

                            ${
                                coral.type
                                ? `<span>${coral.type}</span>`
                                : ""
                            }

                            ${
                                coral.difficulty
                                ? `<span>${coral.difficulty}</span>`
                                : ""
                            }

                            ${
                                coral.category
                                ? `<span>${coral.category}</span>`
                                : ""
                            }

                        </div>


                        ${
                            coral.price
                            ? `
                            <strong class="species-price">
                                ${coral.price}
                            </strong>
                            `
                            : ""
                        }

                    </div>

                </button>

            `;

        }).join("");


        results
        .querySelectorAll(
            "[data-coral-id]"
        )
        .forEach(card=>{

            card.onclick = event=>{

                event.preventDefault();


                const coralId =
                card.dataset.coralId;


                const index =
                selected.indexOf(
                    coralId
                );


                if(index >= 0){

                    selected.splice(
                        index,
                        1
                    );

                }else{

                    selected.push(
                        coralId
                    );

                }


                saveCoralState();

                updateCoralCount();


                renderCoralResults(
                    search?.value || ""
                );

            };

        });

    }


    /* =========================================================
       SUBIR FOTOGRAFIAS
       ========================================================= */

    if(uploadOption && photoInput){

        uploadOption.onclick = event=>{

            event.preventDefault();

            uploadOption.classList.add(
                "active"
            );


            if(searchOption){

                searchOption.classList.remove(
                    "active"
                );

            }


            photoInput.click();

        };

    }


    if(photoInput){

        photoInput.onchange = ()=>{

            addCoralPhotos(
                photoInput.files
            );


            photoInput.value = "";

        };

    }


    /* =========================================================
       DRAG & DROP
       ========================================================= */

    if(uploadOption){

        uploadOption.ondragover = event=>{

            event.preventDefault();

            event.stopPropagation();

            uploadOption.classList.add(
                "active"
            );

        };


        uploadOption.ondragenter = event=>{

            event.preventDefault();

            event.stopPropagation();

        };


        uploadOption.ondragleave = event=>{

            event.preventDefault();

            event.stopPropagation();

        };


        uploadOption.ondrop = event=>{

            event.preventDefault();

            event.stopPropagation();


            const files =
            event.dataTransfer?.files;


            if(
                files &&
                files.length
            ){

                addCoralPhotos(
                    files
                );

            }

        };

    }


    /* =========================================================
       EVITAR QUE EL NAVEGADOR ABRA IMAGENES ARRASTRADAS
       ========================================================= */

    const configurator =
    app.querySelector(
        ".configurator"
    );


    if(configurator){

        configurator.ondragover = event=>{

            if(
                event.dataTransfer &&
                Array.from(
                    event.dataTransfer.types || []
                ).includes("Files")
            ){

                event.preventDefault();

            }

        };


        configurator.ondrop = event=>{

            if(
                event.dataTransfer &&
                event.dataTransfer.files &&
                event.dataTransfer.files.length
            ){

                event.preventDefault();

            }

        };

    }


    /* =========================================================
       BUSCADOR
       ========================================================= */

    if(searchOption){

        searchOption.onclick = event=>{

            event.preventDefault();


            searchOption.classList.add(
                "active"
            );


            if(uploadOption){

                uploadOption.classList.remove(
                    "active"
                );

            }


            if(catalogPanel){

                catalogPanel.style.display =
                "block";

            }


            if(search){

                search.focus();

            }

        };

    }


    if(search){

        search.oninput = ()=>{

            renderCoralResults(
                search.value
            );

        };

    }


    /* =========================================================
       NAVEGACION
       ========================================================= */

    if(back){

        back.onclick = ()=>{

            saveCoralState();

            goToPreviousAvailableStep();

        };

    }


    if(next){

        next.onclick = ()=>{

            saveCoralState();

            goToNextAvailableStep();

        };

    }


    renderCoralPhotoPreview();

    renderCoralResults();

    updateCoralCount();

}


   function renderMultiple(step){

    const selected =
    answers[step.id] || [];


    app.innerHTML = `

    <div class="configurator">

        <div class="config-card step-${step.id}">


            <div class="progress-wrapper">

                <div class="progress-label">
                    ${currentStep + 1} / ${CONFIGURATOR.length}
                </div>


                <div class="progress">

                    <div
                        class="progress-fill"
                        style="width:${getProgress()}%">
                    </div>

                </div>

            </div>


            <h1>
                ${step.title}
            </h1>


            <div class="options ${
                step.id === "includes"
                    ? "includes-grid"
                    : step.id === "equipment"
                    ? "equipment-grid"
                    : ""
            }">


                ${step.options.map((option,index)=>`

                    <div
                        class="multiple-card ${
                            selected.includes(option.id)
                            ? "selected"
                            : ""
                        }"
                        data-index="${index}">


                        ${
                            option.image
                            ? `
                            <div class="multiple-card-image">

                                <img
                                    src="${option.image}"
                                    alt="${option.title}"
                                    loading="lazy">

                            </div>
                            `
                            : ""
                        }


                        <div class="multiple-card-content">

                            <h3>
                                ${option.title}
                            </h3>


                            ${
                                option.description
                                ? `
                                <p>
                                    ${option.description}
                                </p>
                                `
                                : ""
                            }


                            ${
                                option.badge
                                ? `
                                <div class="multiple-badge">
                                    ${option.badge}
                                </div>
                                `
                                : ""
                            }

                        </div>

                    </div>

                `).join("")}

            </div>


            <div class="bottom-actions">

                <button
                    id="multipleBack"
                    class="secondary-btn"
                    type="button">

                    ← Atrás

                </button>


                <button
                    id="multipleNext"
                    class="next-btn"
                    type="button"
                    style="${
                        selected.length
                        ? "display:inline-flex"
                        : "display:none"
                    }">

                    Continuar →

                </button>

            </div>

        </div>

    </div>

    `;


    const cards =
    document.querySelectorAll(".multiple-card");


    const next =
    document.getElementById("multipleNext");


    const back =
    document.getElementById("multipleBack");


    if(back){

        back.onclick = ()=>{

            goToPreviousAvailableStep();

        };

    }


    cards.forEach(card=>{

        card.onclick = ()=>{

            const index =
            Number(card.dataset.index);


            const option =
            step.options[index];


            let values =
            answers[step.id] || [];


            if(values.includes(option.id)){

                values =
                values.filter(
                    id => id !== option.id
                );

                card.classList.remove(
                    "selected"
                );

            }else{

                values.push(option.id);

                card.classList.add(
                    "selected"
                );

            }


            answers[step.id] =
            values;


            if(next){

                next.style.display =
                values.length
                ? "inline-flex"
                : "none";

            }

        };

    });


    if(next){

        next.onclick = ()=>{

            const values =
            answers[step.id] || [];


            if(!values.length){
                return;
            }


            goToNextAvailableStep();

        };

    }

}


/* =========================================================
   SPECIES
   PECES / CORALES
   ========================================================= */

function renderSpecies(step){

    const isFish =
    step.id === "fish";


    const isCorals =
    step.id === "corals";


    const selected =
    isFish
        ? selectedFish
        : selectedCorals;


    app.innerHTML = `

    <div class="configurator">

        <div class="config-card show step-${step.id}">


            <div class="progress-wrapper">

                <div class="progress-label">
                    ${currentStep + 1} / ${CONFIGURATOR.length}
                </div>


                <div class="progress">

                    <div
                        class="progress-fill"
                        style="width:${getProgress()}%">
                    </div>

                </div>

            </div>


            <h1>
                ${step.title}
            </h1>


            ${
                step.description
                ? `
                <p class="species-description">
                    ${step.description}
                </p>
                `
                : ""
            }


            <div class="species-search-wrapper">

                <input
                    id="speciesSearch"
                    class="species-search"
                    type="search"
                    autocomplete="off"
                    placeholder="Buscar por nombre comercial o científico...">

            </div>


            <div
                id="speciesGrid"
                class="species-grid">
            </div>


            <div class="bottom-actions">

                <button
                    id="speciesBack"
                    class="secondary-btn"
                    type="button">

                    ← Atrás

                </button>


                <button
                    id="speciesNext"
                    class="next-btn"
                    type="button">

                    Continuar →

                </button>

            </div>

        </div>

    </div>

    `;


    const search =
    document.getElementById(
        "speciesSearch"
    );


    const grid =
    document.getElementById(
        "speciesGrid"
    );


    const back =
    document.getElementById(
        "speciesBack"
    );


    const next =
    document.getElementById(
        "speciesNext"
    );


    let species = [];

        if(isFish){

        if(
            typeof FISH_CATALOG !== "undefined" &&
            Array.isArray(FISH_CATALOG)
        ){
            species = FISH_CATALOG;

        }else if(
            step.options &&
            Array.isArray(step.options)
        ){
            species = step.options;
        }

    }


    if(isCorals){

        if(
            typeof CORAL_CATALOG !== "undefined" &&
            Array.isArray(CORAL_CATALOG)
        ){
            species = CORAL_CATALOG;

        }else if(
            step.options &&
            Array.isArray(step.options)
        ){
            species = step.options;
        }

    }


    function getSpeciesId(item,index){

        return (
            item.id ||
            item.slug ||
            item.scientific ||
            item.scientificName ||
            item.title ||
            item.name ||
            `${step.id}-${index}`
        );

    }


    function getSpeciesTitle(item){

        return (
            item.title ||
            item.name ||
            item.commonName ||
            item.common ||
            "Especie"
        );

    }


    function getScientificName(item){

        return (
            item.scientific ||
            item.scientificName ||
            item.scientific_name ||
            ""
        );

    }


    function getSpeciesImage(item){

        return (
            item.image ||
            item.img ||
            item.photo ||
            ""
        );

    }


    function renderSpeciesGrid(filter = ""){

        if(!grid){
            return;
        }


        const term =
        filter
        .trim()
        .toLowerCase();


        const filtered =
        species.filter(item=>{

            const title =
            getSpeciesTitle(item)
            .toLowerCase();


            const scientific =
            getScientificName(item)
            .toLowerCase();


            return (
                !term ||
                title.includes(term) ||
                scientific.includes(term)
            );

        });


        if(!filtered.length){

            grid.innerHTML = `

                <div class="species-empty">

                    No encontramos especies con esa búsqueda.

                </div>

            `;

            return;

        }


        grid.innerHTML =
        filtered.map(item=>{

            const originalIndex =
            species.indexOf(item);


            const id =
            getSpeciesId(
                item,
                originalIndex
            );


            const title =
            getSpeciesTitle(item);


            const scientific =
            getScientificName(item);


            const image =
            getSpeciesImage(item);


            const active =
            selected.includes(id);


            return `

                <div
                    class="species-card ${
                        active
                        ? "selected"
                        : ""
                    }"
                    data-species-index="${originalIndex}">


                    ${
                        image
                        ? `
                        <div class="species-image">

                            <img
                                src="${image}"
                                alt="${title}"
                                loading="lazy">

                        </div>
                        `
                        : `
                        <div class="species-image species-image-empty">

                            🐠

                        </div>
                        `
                    }


                    <div class="species-info">

                        <h3>
                            ${title}
                        </h3>


                        ${
                            scientific
                            ? `
                            <p class="scientific-name">
                                ${scientific}
                            </p>
                            `
                            : ""
                        }

                    </div>


                    <div class="species-check">
                        ✓
                    </div>

                </div>

            `;

        }).join("");


        grid
        .querySelectorAll(".species-card")
        .forEach(card=>{

            card.onclick = ()=>{

                const index =
                Number(
                    card.dataset.speciesIndex
                );


                const item =
                species[index];


                if(!item){
                    return;
                }


                const id =
                getSpeciesId(
                    item,
                    index
                );


                const position =
                selected.indexOf(id);


                if(position >= 0){

                    selected.splice(
                        position,
                        1
                    );


                    card.classList.remove(
                        "selected"
                    );

                }else{

                    selected.push(id);


                    card.classList.add(
                        "selected"
                    );

                }


                if(isFish){

                    selectedFish =
                    [...selected];

                    answers[step.id] =
                    [...selectedFish];

                }


                if(isCorals){

                    selectedCorals =
                    [...selected];

                    answers[step.id] =
                    [...selectedCorals];

                }

            };

        });

    }


    renderSpeciesGrid();


    if(search){

        search.oninput = ()=>{

            renderSpeciesGrid(
                search.value
            );

        };

    }


    if(back){

        back.onclick = ()=>{

            goToPreviousAvailableStep();

        };

    }


    if(next){

        next.onclick = ()=>{

            if(isFish){

                answers[step.id] =
                [...selectedFish];

            }


            if(isCorals){

                answers[step.id] =
                [...selectedCorals];

            }


            goToNextAvailableStep();

        };

    }

}


/* =========================================================
   MEDIDAS
   ========================================================= */

function renderMeasure(step){

    const saved =
    answers[step.id] || {};


    const unknown =
    saved.unknown === true;


    const width =
    saved.width || "";


    const height =
    saved.height || "";


    const depth =
    saved.depth || "";


    app.innerHTML = `

    <div class="configurator">

        <div class="config-card show step-${step.id}">


            <div class="progress-wrapper">

                <div class="progress-label">

                    ${currentStep + 1} / ${CONFIGURATOR.length}

                </div>


                <div class="progress">

                    <div
                        class="progress-fill"
                        style="width:${getProgress()}%">
                    </div>

                </div>

            </div>


            <h1>
                ${step.title}
            </h1>


            ${
                step.description
                ? `
                <p class="measure-subtitle">
                    ${step.description}
                </p>
                `
                : ""
            }


            <div class="measure-grid">


                <label>

                    <span>
                        ↔ Largo
                    </span>

                    <input
                        id="measureWidth"
                        type="number"
                        min="1"
                        inputmode="decimal"
                        value="${width}"
                        placeholder="Ej. 120"
                        ${unknown ? "disabled" : ""}>

                </label>


                <label>

                    <span>
                        ↕ Alto
                    </span>

                    <input
                        id="measureHeight"
                        type="number"
                        min="1"
                        inputmode="decimal"
                        value="${height}"
                        placeholder="Ej. 60"
                        ${unknown ? "disabled" : ""}>

                </label>


                <label>

                    <span>
                        ▰ Fondo
                    </span>

                    <input
                        id="measureDepth"
                        type="number"
                        min="1"
                        inputmode="decimal"
                        value="${depth}"
                        placeholder="Ej. 50"
                        ${unknown ? "disabled" : ""}>

                </label>

            </div>


            <label class="unknown-measures">

                <input
                    id="unknownMeasures"
                    type="checkbox"
                    ${unknown ? "checked" : ""}>

                <span>
                    No tengo las medidas todavía
                </span>

            </label>


            <div
                id="measureVolume"
                class="measure-volume">
            </div>


            <div class="bottom-actions">

                <button
                    id="measureBack"
                    class="secondary-btn"
                    type="button">

                    ← Atrás

                </button>


                <button
                    id="measureNext"
                    class="next-btn"
                    type="button">

                    Continuar →

                </button>

            </div>

        </div>

    </div>

    `;


    const widthInput =
    document.getElementById(
        "measureWidth"
    );


    const heightInput =
    document.getElementById(
        "measureHeight"
    );


    const depthInput =
    document.getElementById(
        "measureDepth"
    );


    const unknownInput =
    document.getElementById(
        "unknownMeasures"
    );


    const volume =
    document.getElementById(
        "measureVolume"
    );


    const back =
    document.getElementById(
        "measureBack"
    );


    const next =
    document.getElementById(
        "measureNext"
    );


    function updateVolume(){

        const w =
        Number(
            widthInput?.value || 0
        );


        const h =
        Number(
            heightInput?.value || 0
        );


        const d =
        Number(
            depthInput?.value || 0
        );


        if(
            volume &&
            !unknownInput?.checked &&
            w > 0 &&
            h > 0 &&
            d > 0
        ){

            const liters =
            Math.round(
                (w * h * d) / 1000
            );


            volume.innerHTML = `

                Capacidad aproximada:

                <strong>
                    ${liters.toLocaleString("es-MX")} L
                </strong>

            `;

        }else if(volume){

            volume.innerHTML = "";

        }

    }


    function toggleUnknown(){

        const disabled =
        !!unknownInput?.checked;


        [
            widthInput,
            heightInput,
            depthInput
        ].forEach(input=>{

            if(input){

                input.disabled =
                disabled;

            }

        });


        updateVolume();

    }


    [
        widthInput,
        heightInput,
        depthInput
    ].forEach(input=>{

        if(input){

            input.oninput =
            updateVolume;

        }

    });


    if(unknownInput){

        unknownInput.onchange =
        toggleUnknown;

    }


    toggleUnknown();


    if(back){

        back.onclick = ()=>{

            goToPreviousAvailableStep();

        };

    }


    if(next){

        next.onclick = ()=>{

            if(unknownInput?.checked){

                answers[step.id] = {
                    unknown:true
                };


                goToNextAvailableStep();

                return;

            }


            const w =
            Number(
                widthInput?.value || 0
            );


            const h =
            Number(
                heightInput?.value || 0
            );


            const d =
            Number(
                depthInput?.value || 0
            );


            if(
                !w ||
                !h ||
                !d
            ){

                const emptyInput =
                [
                    widthInput,
                    heightInput,
                    depthInput
                ].find(
                    input =>
                    input &&
                    !input.value
                );


                if(emptyInput){

                    emptyInput.focus();

                }


                return;

            }


            answers[step.id] = {

                width:w,

                height:h,

                depth:d,

                liters:
                Math.round(
                    (w * h * d) / 1000
                ),

                unknown:false

            };


            goToNextAvailableStep();

        };

    }

}


/* =========================================================
   FOTOGRAFÍAS / UPLOAD
   ========================================================= */

function renderUpload(step){

    const saved =
    answers[step.id] || [];


    app.innerHTML = `

    <div class="configurator">

        <div class="config-card show step-${step.id}">


            <div class="progress-wrapper">

                <div class="progress-label">

                    ${currentStep + 1} / ${CONFIGURATOR.length}

                </div>


                <div class="progress">

                    <div
                        class="progress-fill"
                        style="width:${getProgress()}%">
                    </div>

                </div>

            </div>


            <h1>
                ${step.title}
            </h1>


            ${
                step.description
                ? `
                <p class="upload-description">
                    ${step.description}
                </p>
                `
                : ""
            }


            <div
    id="photoDropZone"
    class="upload-area">

                <div class="upload-icon">
                    📸
                </div>


                <h3>
                    Agrega fotografías del espacio
                </h3>


                <p>
                    Puedes seleccionar varias imágenes.
                </p>


               <input
    id="photoInput"
    class="photo-native-input"
    type="file"
    accept="image/jpeg,image/png,image/webp"
    multiple>


<input
    id="cameraInput"
    class="photo-native-input"
    type="file"
    accept="image/*"
    capture="environment">


<div class="photo-actions">

    <label
        for="photoInput"
        class="upload-btn photo-select-label">

        📁 Subir fotografías

    </label>


    <label
        for="cameraInput"
        class="upload-btn photo-select-label camera-select-label">

        📷 Tomar fotografía

    </label>

</div>


<div class="photo-drop-hint">

    Arrastra tus fotografías aquí

</div>

            </div>


            <div
                id="photoPreview"
                class="photo-preview">
            </div>


            <div class="bottom-actions">

                <button
                    id="uploadBack"
                    class="secondary-btn"
                    type="button">

                    ← Atrás

                </button>


                <button
                    id="uploadNext"
                    class="next-btn"
                    type="button">

                    Continuar →

                </button>

            </div>

        </div>

    </div>

    `;


    const input =
    document.getElementById(
        "photoInput"
    );

    const cameraInput =
document.getElementById(
    "cameraInput"
);


const dropZone =
document.getElementById(
    "photoDropZone"
);

    const preview =
    document.getElementById(
        "photoPreview"
    );


    const back =
    document.getElementById(
        "uploadBack"
    );


    const next =
    document.getElementById(
        "uploadNext"
    );


    let files =
    Array.isArray(saved)
        ? [...saved]
        : [];

            function renderPhotoPreview(){

        if(!preview){
            return;
        }


        if(!files.length){

            preview.innerHTML = "";

            return;

        }


        preview.innerHTML =
files.map((file,index)=>{

    const src =
    typeof file === "string"
        ? file
        : file.preview || "";


    return `

        <div
            class="photo-preview-item"
            data-photo-index="${index}">

            ${
                src
                ? `
                <div class="photo-image-wrapper">

                    <img
                        src="${src}"
                        alt="Fotografía ${index + 1}"
                        class="photo-preview-image"
                        draggable="false">

                </div>
                `
                : `
                <div class="photo-placeholder">
                    📸
                </div>
                `
            }


            <button
                class="remove-photo"
                type="button"
                data-remove-photo="${index}">

                ×

            </button>

        </div>

    `;

}).join("");


        preview
        .querySelectorAll(
            "[data-remove-photo]"
        )
        .forEach(button=>{

            button.onclick = ()=>{

                const index =
                Number(
                    button.dataset.removePhoto
                );


                files.splice(
                    index,
                    1
                );


                answers[step.id] =
                [...files];


                renderPhotoPreview();

            };

        });

    }

   

    renderPhotoPreview();

    function addPhotoFiles(selectedFiles){

    const imageFiles =
    Array.from(
        selectedFiles || []
    );


    imageFiles.forEach(file=>{

        if(
            !file ||
            !file.type ||
            !file.type.startsWith("image/")
        ){
            return;
        }


        const exists =
        files.some(savedFile=>

            savedFile &&
            typeof savedFile === "object" &&
            savedFile.name === file.name &&
            savedFile.size === file.size

        );


        if(
            exists ||
            files.length >= 10
        ){
            return;
        }


        const reader =
        new FileReader();


        reader.onload = loadEvent=>{

            files.push({

                name:file.name,

                type:file.type,

                size:file.size,

                preview:loadEvent.target.result

            });


            answers[step.id] =
            [...files];


            renderPhotoPreview();

        };


        reader.onerror = ()=>{

            console.warn(
                "No fue posible leer la fotografía:",
                file.name
            );

        };


        reader.readAsDataURL(file);

    });

}


if(input){

    input.onchange = ()=>{

        addPhotoFiles(
            input.files
        );

        input.value = "";

    };

}


if(cameraInput){

    cameraInput.onchange = ()=>{

        addPhotoFiles(
            cameraInput.files
        );

        cameraInput.value = "";

    };

}

/* =========================================================
   DRAG & DROP — FOTOGRAFIAS
   ========================================================= */

if(dropZone){

    dropZone.ondragenter = event=>{

        event.preventDefault();
        event.stopPropagation();

        dropZone.classList.add(
            "drag-active"
        );

    };


    dropZone.ondragover = event=>{

        event.preventDefault();
        event.stopPropagation();

        if(event.dataTransfer){

            event.dataTransfer.dropEffect =
            "copy";

        }

        dropZone.classList.add(
            "drag-active"
        );

    };


    dropZone.ondragleave = event=>{

        event.preventDefault();
        event.stopPropagation();


        if(
            !dropZone.contains(
                event.relatedTarget
            )
        ){

            dropZone.classList.remove(
                "drag-active"
            );

        }

    };


    dropZone.ondrop = event=>{

        event.preventDefault();
        event.stopPropagation();

        dropZone.classList.remove(
            "drag-active"
        );


        const droppedFiles =
        event.dataTransfer
            ? event.dataTransfer.files
            : [];


        addPhotoFiles(
            droppedFiles
        );

    };

}


    if(back){

        back.onclick = ()=>{

            answers[step.id] =
            [...files];


            goToPreviousAvailableStep();

        };

    }


    if(next){

        next.onclick = ()=>{

            answers[step.id] =
            [...files];


            goToNextAvailableStep();

        };

    }

}


/* =========================================================
   TEXTO / IDEAS — PASO 11
   ========================================================= */

function renderText(step){

    const saved =
    answers[step.id] || "";


    app.innerHTML = `

    <div class="configurator">

        <div class="config-card show step-${step.id}">


            <div class="progress-wrapper">

                <div class="progress-label">

                    ${currentStep + 1} / ${CONFIGURATOR.length}

                </div>


                <div class="progress">

                    <div
                        class="progress-fill"
                        style="width:${getProgress()}%">
                    </div>

                </div>

            </div>


            <div class="ideas-layout">


                <div class="ideas-copy">

                    <div class="ideas-premium-mark">
                        ✦ ÚLTIMOS DETALLES
                    </div>


                    <h1>
                        ${step.title}
                    </h1>


                    <p class="ideas-description">

                        ${
                            step.description ||
                            "Cuéntanos cualquier detalle que nos ayude a entender cómo imaginas tu acuario."
                        }

                    </p>


                    <div class="ideas-hints">

                        <span>
                            ✦ Ubicación o ambiente
                        </span>

                        <span>
                            ✦ Colores o estilo
                        </span>

                        <span>
                            ✦ Especies favoritas
                        </span>

                        <span>
                            ✦ Necesidades especiales
                        </span>

                    </div>

                </div>


                <div class="ideas-editor">

                    <textarea
                        id="stepTextInput"
                        class="premium-textarea"
                        maxlength="1200"
                        placeholder="${
                            step.placeholder ||
                            "Ejemplo: Quiero un acuario protagonista en la sala, elegante, moderno y con mantenimiento sencillo."
                        }">${saved}</textarea>


                    <div class="textarea-footer">

                        <span>
                            Opcional
                        </span>

                        <span id="textCounter">
                            ${String(saved).length} / 1200
                        </span>

                    </div>

                </div>

            </div>


            <div class="bottom-actions">

                <button
                    id="textBack"
                    class="secondary-btn"
                    type="button">

                    ← Atrás

                </button>


                <button
                    id="textNext"
                    class="next-btn"
                    type="button">

                    Continuar →

                </button>

            </div>

        </div>

    </div>

    `;


    const textarea =
    document.getElementById(
        "stepTextInput"
    );


    const counter =
    document.getElementById(
        "textCounter"
    );


    const back =
    document.getElementById(
        "textBack"
    );


    const next =
    document.getElementById(
        "textNext"
    );


    if(textarea){

        textarea.oninput = ()=>{

            answers[step.id] =
            textarea.value;


            if(counter){

                counter.textContent =
                `${textarea.value.length} / 1200`;

            }

        };

    }


    if(back){

        back.onclick = ()=>{

            if(textarea){

                answers[step.id] =
                textarea.value.trim();

            }


            goToPreviousAvailableStep();

        };

    }


    if(next){

        next.onclick = ()=>{

            if(textarea){

                answers[step.id] =
                textarea.value.trim();

            }


            goToNextAvailableStep();

        };

    }

}


/* =========================================================
   HELPERS DEL RESUMEN
   ========================================================= */

function getSummaryValue(configStep,answer){

    if(
        answer === undefined ||
        answer === null ||
        answer === ""
    ){
        return "";
    }


    if(Array.isArray(answer)){

        if(!answer.length){
            return "";
        }


        if(configStep.id === "photos"){

            return `${answer.length} fotografía${
                answer.length === 1
                ? ""
                : "s"
            }`;

        }


        return answer
        .map(item=>{

            if(typeof item === "string"){

    /*
       Especies agregadas manualmente
       desde el buscador.
       Ejemplo:
       custom:damisela
       →
       Damisela
    */

    if(item.startsWith("custom:")){

        const customName =
        item
        .replace("custom:", "")
        .trim();


        if(!customName){
            return "";
        }


        return (
            customName.charAt(0).toUpperCase() +
            customName.slice(1)
        );

    }


    const option =
    configStep.options?.find(
        option =>
        option.id === item
    );


    return (
        option?.title ||
        item
    );

}


            return (
                item.title ||
                item.name ||
                item.commonName ||
                item.id ||
                ""
            );

        })
        .filter(Boolean)
        .join(", ");

    }


    if(typeof answer === "object"){

        if(answer.unknown){

            return "Por definir";

        }


        if(
            answer.width &&
            answer.height &&
            answer.depth
        ){

            let value =
            `${answer.width} × ${answer.height} × ${answer.depth} cm`;


            if(answer.liters){

                value +=
                ` · ${answer.liters.toLocaleString("es-MX")} L aprox.`;

            }


            return value;

        }


        return (
            answer.title ||
            answer.name ||
            answer.label ||
            answer.id ||
            ""
        );

    }


    return String(answer);

}


/* =========================================================
   RESUMEN — PASO 12
   ========================================================= */

function renderSummary(step){

    const summaryItems = [];


    CONFIGURATOR.forEach(configStep=>{

        if(
            configStep.id === "intro" ||
            configStep.id === step.id ||
            shouldSkipStep(configStep)
        ){
            return;
        }


        const answer =
        answers[configStep.id];


        const value =
        getSummaryValue(
            configStep,
            answer
        );


        if(!value){
            return;
        }


        summaryItems.push({

            id:configStep.id,

            title:configStep.title,

            value:value

        });

    });


    app.innerHTML = `

    <div class="configurator">

        <div class="config-card show step-${step.id}">


            <div class="progress-wrapper">

                <div class="progress-label">

                    ${currentStep + 1} / ${CONFIGURATOR.length}

                </div>


                <div class="progress">

                    <div
                        class="progress-fill"
                        style="width:100%">
                    </div>

                </div>

            </div>


            <div class="summary-header">

                <div class="summary-premium-mark">
                    ✦ TU PROYECTO PATA Y ALETA
                </div>


                <h1>
                    ${step.title || "Resumen de tu proyecto"}
                </h1>


                <p>

                    Revisa tu selección. Después podrás enviarnos tu proyecto para preparar una propuesta personalizada.

                </p>

            </div>


            <div class="summary-grid">

                ${summaryItems.map(item=>`

                    <div
                        class="summary-item summary-${item.id}">


                        <div class="summary-item-title">

                            ${item.title}

                        </div>


                        <div class="summary-item-value">

                            ${item.value}

                        </div>

                    </div>

                `).join("")}

            </div>


            <div class="summary-cta-panel">

                <div>

                    <span class="summary-cta-kicker">
                        SIGUIENTE PASO
                    </span>


                    <h3>
                        Recibe una propuesta personalizada
                    </h3>


                    <p>
                        Nuestro equipo revisará la configuración para ayudarte a convertirla en un proyecto real.
                    </p>

                </div>


                <div class="summary-security">

                    <span>✓ Diseño personalizado</span>

                    <span>✓ Selección profesional</span>

                    <span>✓ Proyecto a tu medida</span>

                </div>

            </div>


            <div class="bottom-actions summary-actions">

                <button
                    id="summaryBack"
                    class="secondary-btn"
                    type="button">

                    ← Atrás

                </button>


                <button
                    id="summaryNext"
                    class="next-btn"
                    type="button">

                    Solicitar proyecto →

                </button>

            </div>

        </div>

    </div>

    `;


    const back =
    document.getElementById(
        "summaryBack"
    );


    const next =
    document.getElementById(
        "summaryNext"
    );


    if(back){

        back.onclick = ()=>{

            goToPreviousAvailableStep();

        };

    }


    if(next){

        next.onclick = ()=>{

            renderProjectRequest();

        };

    }

}


/* =========================================================
   SOLICITUD DEL PROYECTO
   ========================================================= */

function renderProjectRequest(){

    app.innerHTML = `

    <div class="configurator">

        <div class="config-card show project-request-step">

            <div class="request-premium-shell">

                <div class="request-success-icon">
                    ✓
                </div>

                <div class="request-premium-mark">
                    ✦ CONFIGURACIÓN COMPLETA
                </div>

                <h1>
                    Tu acuario comienza aquí
                </h1>

                <p class="request-subtitle">
                    Un especialista de Pata y Aleta revisará personalmente
                    tu proyecto para preparar una propuesta a tu medida.
                </p>


                <div class="request-benefits">

                    <span>
                        ✦ Revisión personalizada
                    </span>

                    <span>
                        ✦ Recomendaciones profesionales
                    </span>

                    <span>
                        ✦ Propuesta a tu medida
                    </span>

                </div>


                <div class="request-form-premium">

                    <label>

                        <span>
                            👤 Nombre
                        </span>

                        <input
                            id="requestName"
                            type="text"
                            autocomplete="name"
                            placeholder="Tu nombre">

                    </label>


                    <label>

                        <span>
                            📱 WhatsApp
                        </span>

                        <input
                            id="requestWhatsapp"
                            type="tel"
                            autocomplete="tel"
                            placeholder="55 0000 0000">

                    </label>


                    <label>

                        <span>
                            📍 Ciudad
                        </span>

                        <input
                            id="requestCity"
                            type="text"
                            autocomplete="address-level2"
                            placeholder="Ciudad">

                    </label>

                </div>


                <button
                    id="sendProjectRequest"
                    class="next-btn request-send-btn"
                    type="button">

                    Enviar mi proyecto →

                </button>


                <div class="request-privacy">
                    🔒 Tus datos serán utilizados únicamente para atender tu proyecto.
                </div>


                <button
                    id="requestBack"
                    class="request-back-btn"
                    type="button">

                    ← Regresar al resumen

                </button>


                <p
                    id="requestMessage"
                    class="request-message">
                </p>

            </div>

        </div>

    </div>

    `;


    const name =
    document.getElementById(
        "requestName"
    );


    const whatsapp =
    document.getElementById(
        "requestWhatsapp"
    );


    const city =
    document.getElementById(
        "requestCity"
    );


    const send =
    document.getElementById(
        "sendProjectRequest"
    );


    const back =
    document.getElementById(
        "requestBack"
    );


    const message =
    document.getElementById(
        "requestMessage"
    );


    if(back){

        back.onclick = ()=>{

            renderSummary(
                getCurrentStep()
            );

        };

    }


    if(send){

        send.onclick = ()=>{

            const customer = {

                name:
                name?.value.trim() || "",

                whatsapp:
                whatsapp?.value.trim() || "",

                city:
                city?.value.trim() || ""

            };


            if(
                !customer.name ||
                !customer.whatsapp
            ){

                if(message){

                    message.textContent =
                    "Ingresa tu nombre y WhatsApp para continuar.";

                }


                if(!customer.name && name){

                    name.focus();

                }else if(whatsapp){

                    whatsapp.focus();

                }


                return;

            }


            answers.customer =
            customer;


            const projectPayload = {

                createdAt:
                new Date().toISOString(),

                customer:
                customer,

                configuration:
                answers

            };


            console.log(
                "PATA Y ALETA PROJECT REQUEST",
                projectPayload
            );


            try{

                localStorage.setItem(
                    "pataYaletaConfiguratorProject",
                    JSON.stringify(
                        projectPayload
                    )
                );

            }catch(error){

                console.warn(
                    "No fue posible guardar el proyecto localmente.",
                    error
                );

            }

                        const businessWhatsapp =
            "525656774264";


           const getProjectLabel = () => {

    const projectStep =
    CONFIGURATOR.find(
        step => step.id === "project"
    );

    const selected =
    projectStep?.options?.find(
        option =>
        option.id === answers.project?.id ||
        option.id === answers.project
    );

    return selected?.title || "No especificado";

};


const getOptionLabels = (stepId) => {

    const configStep =
    CONFIGURATOR.find(
        step => step.id === stepId
    );

    const answer =
    answers[stepId];


    if(!answer){
        return "No especificado";
    }


    const ids =
    Array.isArray(answer)
        ? answer.map(item =>
            typeof item === "object"
                ? item.id
                : item
        )
        : [
            typeof answer === "object"
                ? answer.id
                : answer
        ];


    const labels =
    ids.map(id => {

        const option =
        configStep?.options?.find(
            item =>
            item.id === id ||
            item.title === id
        );

        return option?.title || id;

    }).filter(Boolean);


    return labels.length
        ? labels.join(", ")
        : "No especificado";

};


const getSpeciesLabels = (stepId) => {

    const answer =
    answers[stepId];

    if(!answer){
        return [];
    }

    const items =
    Array.isArray(answer)
        ? answer
        : [answer];

    const catalog =
    stepId === "fish"
        ? (
            typeof FISH !== "undefined"
                ? FISH
                : []
        )
        : stepId === "corals"
        ? (
            typeof CORALS !== "undefined"
                ? CORALS
                : []
        )
        : [];

    const labels =
    items.map(item => {

        const itemId =
        typeof item === "string"
            ? item
            : item?.id;

        const catalogItem =
        catalog.find(species =>
            species.id === itemId
        );

        if(catalogItem?.name){
            return catalogItem.name;
        }

        if(typeof item === "object"){

            return (
                item?.name ||
                item?.title ||
                item?.commonName ||
                item?.scientific ||
                item?.scientificName ||
                item?.id ||
                ""
            );

        }

        return itemId || "";

    }).filter(Boolean);

    return labels;

};


const projectType =
getProjectLabel();


const location =
getOptionLabels(
    "location"
);


const ecosystem =
getOptionLabels(
    "ecosystem"
);


const includes =
getOptionLabels(
    "includes"
);


const equipment =
getOptionLabels(
    "equipment"
);


const style =
getOptionLabels(
    "style"
);


const budget =
getOptionLabels(
    "budget"
);


const fish =
getSpeciesLabels(
    "fish"
);


const corals =
getSpeciesLabels(
    "corals"
);


const ideas =
typeof answers.ideas === "string"
    ? answers.ideas.trim()
    : (
        answers.ideas?.value ||
        answers.ideas?.text ||
        ""
    );


const formatSpeciesList = (items) => {

    if(
        !Array.isArray(items) ||
        !items.length
    ){
        return "• Sin selección";
    }

    return items
        .map(item => `• ${item}`)
        .join("\n");

};


const fishList =
formatSpeciesList(fish);


const coralList =
formatSpeciesList(corals);


const projectId =
"PA-" +
new Date()
    .toISOString()
    .slice(2,10)
    .replace(/-/g,"") +
"-" +
Math.random()
    .toString(36)
    .slice(2,6)
    .toUpperCase();


const whatsappMessage =
`🐾🌊 *NUEVO PROYECTO | PATA Y ALETA*
━━━━━━━━━━━━━━━━━━━━

🔖 *PROYECTO ${projectId}*

👤 *DATOS DEL CLIENTE*
Nombre: ${customer.name}
WhatsApp: ${customer.whatsapp}
Ciudad: ${customer.city || "No especificada"}

🐠 *TU ACUARIO*
Tipo: ${projectType}
Ubicación: ${location}
Ecosistema: ${ecosystem}

✨ *CONFIGURACIÓN*
${includes
    .split(",")
    .map(item => `✓ ${item.trim()}`)
    .join("\n")}

🐟 *PECES SELECCIONADOS*
${fishList}

🪸 *CORALES SELECCIONADOS*
${coralList}

⚙️ *EQUIPAMIENTO*
${equipment}

🎨 *ESTILO*
${style}

💰 *PRESUPUESTO*
${budget}

📝 *DETALLES DEL PROYECTO*
${ideas || "Sin comentarios adicionales"}

━━━━━━━━━━━━━━━━━━━━
✨ *Tu proyecto comienza aquí.*

Un especialista de *Pata y Aleta* revisará tu configuración para preparar una propuesta personalizada.

🐾 *PATA Y ALETA*
_Creamos equilibrio, cuidamos lo que amas._`;

const whatsappUrl =
"https://wa.me/" +
businessWhatsapp +
"?text=" +
encodeURIComponent(
    whatsappMessage
);


window.open(
    whatsappUrl,
    "_blank"
);


            renderFinal();

        };

    }

}


/* =========================================================
   FINAL
   ========================================================= */

function renderFinal(){

    app.innerHTML = `

    <div class="configurator">

        <div class="config-card show final-step">


            <div class="final-content">

                <div class="final-icon">
                    ✓
                </div>


                <div class="final-premium-mark">
                    PATA Y ALETA
                </div>


                <h1>
                    Proyecto registrado
                </h1>


                <p>

                    Tu configuración quedó guardada correctamente. Ya podemos utilizarla como base para la siguiente etapa de tu proyecto.

                </p>


                <button
                    id="finalReview"
                    class="secondary-btn"
                    type="button">

                    ← Revisar configuración

                </button>

            </div>

        </div>

    </div>

    `;


    const review =
    document.getElementById(
        "finalReview"
    );


    if(review){

        review.onclick = ()=>{

            renderSummary(
                getCurrentStep()
            );

        };

    }

}


/* =========================================================
   PROYECTO GUARDADO
   ========================================================= */

function renderSavedProject(){

    const project =
    answers.project?.title ||
    answers.project?.id ||
    "Tu acuario";

    const savedFishCount =
    Array.isArray(selectedFish)
        ? selectedFish.length
        : 0;

    const savedCoralsCount =
    Array.isArray(selectedCorals)
        ? selectedCorals.length
        : 0;


    app.innerHTML = `

    <div class="configurator">

        <div class="config-card show saved-project-step">

            <div class="saved-project-content">


                <div class="saved-project-logo-wrap">

                    <img
                        src="../logo-oficial.png"
                        alt="Pata y Aleta"
                        class="saved-project-logo">

                </div>


                <div class="saved-project-eyebrow">
                    ✦ TU PROYECTO SIGUE AQUÍ
                </div>


                <h1>
                    Continúa creando tu acuario
                </h1>


                <p class="saved-project-description">
                    Guardamos automáticamente tu configuración
                    para que puedas continuar exactamente donde la dejaste.
                </p>


                <div class="saved-project-resume">

                    <div class="saved-project-resume-main">

                        <span class="saved-project-resume-label">
                            PROYECTO EN PROGRESO
                        </span>

                        <strong>
                            ${project}
                        </strong>

                    </div>


                    <div class="saved-project-stats">

                        <div>

                            <span>
                                🐠
                            </span>

                            <strong>
                                ${savedFishCount}
                            </strong>

                            <small>
                                Peces
                            </small>

                        </div>


                        <div>

                            <span>
                                🪸
                            </span>

                            <strong>
                                ${savedCoralsCount}
                            </strong>

                            <small>
                                Corales
                            </small>

                        </div>


                        <div>

                            <span>
                                ✓
                            </span>

                            <strong>
                                ${currentStep + 1}/${CONFIGURATOR.length}
                            </strong>

                            <small>
                                Avance
                            </small>

                        </div>

                    </div>

                </div>


                <div class="saved-project-actions">

                    <button
                        id="continueSavedProject"
                        class="next-btn saved-continue-btn"
                        type="button">

                        Continuar mi proyecto →

                    </button>


                    <button
                        id="startNewProject"
                        class="secondary-btn saved-new-btn"
                        type="button">

                        Comenzar un proyecto nuevo

                    </button>

                </div>


                <div class="saved-project-note">

                    <span>
                        🔒
                    </span>

                    Tu progreso permanece guardado
                    únicamente en este dispositivo.

                </div>


            </div>

        </div>

    </div>

    `;


    const continueButton =
    document.getElementById(
        "continueSavedProject"
    );


    const newButton =
    document.getElementById(
        "startNewProject"
    );


    if(continueButton){

        continueButton.onclick = ()=>{

            renderStep();

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        };

    }


    if(newButton){

        newButton.onclick = ()=>{

            clearConfiguratorProgress();

            currentStep = 0;

            answers = {};

            selectedFish = [];

            selectedCorals = [];

            renderStep();

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        };

    }

}


/* =========================================================
   ARRANQUE
   ========================================================= */

const hasSavedProgress =
loadConfiguratorProgress();


if(hasSavedProgress){

    renderSavedProject();

}else{

    renderStep();

}