/*!
 * Pata y Aleta — Ocean Pulse
 * Archivo oficial independiente
 * Requiere: promotion-data.js cargado antes de este archivo
 * Montaje oficial: <div id="ocean-pulse"></div>
 */
(() => {
    'use strict';

    const ROOT_ID = 'ocean-pulse';
    const PANEL_ID = 'oceanPulsePanel';
    const DEFAULT_INTERVAL = 6500;

    const ICONS = {
        ocean: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 15c2.2 0 2.2-2 4.4-2s2.2 2 4.4 2 2.2-2 4.4-2 2.2 2 4.4 2"/>
        <path d="M3 19c2.2 0 2.2-2 4.4-2s2.2 2 4.4 2 2.2-2 4.4-2 2.2 2 4.4 2"/>
        <path d="M12 3v7"/>
        <path d="m8.5 6.5 3.5-3.5 3.5 3.5"/>
      </svg>`,

        fish: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12c2.1-3.6 5-5.4 8.5-5.4 2.1 0 4.1.7 5.7 2.2L21 6.8v10.4l-2.8-2.1a9 9 0 0 1-5.7 2.1C9 17.2 6.1 15.4 4 12Z"/>
        <path d="M10 12h.01"/>
      </svg>`,

        coral: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21V9"/>
        <path d="M12 14 7 9V5"/>
        <path d="M12 17 17 12V7"/>
        <path d="M12 10 15 7V3"/>
        <path d="M7 5h3M17 7h3M15 3h3"/>
      </svg>`,

        rescue: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s7-4.7 7-10.5A4.3 4.3 0 0 0 12 7.2a4.3 4.3 0 0 0-7 3.3C5 16.3 12 21 12 21Z"/>
        <path d="M9.4 12h5.2M12 9.4v5.2"/>
      </svg>`,

        care: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s-7-4.7-7-10.2A4.5 4.5 0 0 1 12 7.7a4.5 4.5 0 0 1 7 3.1C19 16.3 12 21 12 21Z"/>
        <path d="M9.5 12h5M12 9.5v5"/>
      </svg>`,

        gift: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 10h16v10H4z"/>
        <path d="M12 10v10M3 6h18v4H3z"/>
        <path d="M12 6H8.8a2 2 0 1 1 2-2C10.8 5.1 12 6 12 6Z"/>
        <path d="M12 6h3.2a2 2 0 1 0-2-2C13.2 5.1 12 6 12 6Z"/>
      </svg>`,

        diamond: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4 9 4-5h8l4 5-8 11L4 9Z"/>
        <path d="M4 9h16M8 4l4 5 4-5M12 9l-2 11M12 9l2 11"/>
      </svg>`,

        arrow: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h13"/>
        <path d="m13 6 6 6-6 6"/>
      </svg>`,

        close: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6 6 12 12M18 6 6 18"/>
      </svg>`,

        chevron: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 10 4 4 4-4"/>
      </svg>`
    };

    const state = {
        root: null,
        panel: null,
        track: null,
        dots: null,
        cards: [],
        promotions: [],
        activeIndex: 0,
        intervalId: null,
        initialized: false
    };

    function valueOf(...values) {
        return values.find(
            value =>
                value !== undefined &&
                value !== null &&
                value !== ''
        );
    }

    function cleanText(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function iconFor(type) {
        const normalized = String(type || '').toLowerCase();

        if (['rescate', 'rescue', 'urgente', 'emergency'].includes(normalized)) {
            return 'rescue';
        }

        if (['mantenimiento', 'maintenance', 'servicio', 'service', 'cuidado', 'care'].includes(normalized)) {
            return 'care';
        }

        if (['corales', 'coral', 'reef'].includes(normalized)) {
            return 'coral';
        }

        if (['oferta', 'promo', 'promocion', 'promoción', 'gift'].includes(normalized)) {
            return 'gift';
        }

        if (['premium', 'luxury', 'especial'].includes(normalized)) {
            return 'diamond';
        }

        if (['peces', 'fish', 'marino', 'marine'].includes(normalized)) {
            return 'fish';
        }

        return 'ocean';
    }

    function labelFor(type) {
        const normalized = String(type || '').toLowerCase();

        if (['rescate', 'rescue', 'urgente', 'emergency'].includes(normalized)) {
            return 'RESCATE 48 HRS';
        }

        if (['mantenimiento', 'maintenance', 'servicio', 'service', 'cuidado', 'care'].includes(normalized)) {
            return 'CUIDADO PREMIUM';
        }

        if (['corales', 'coral', 'reef'].includes(normalized)) {
            return 'ARRECIFE VIVO';
        }

        if (['oferta', 'promo', 'promocion', 'promoción', 'gift'].includes(normalized)) {
            return 'SELECCIÓN ESPECIAL';
        }

        if (['premium', 'luxury', 'especial'].includes(normalized)) {
            return 'EXPERIENCIA PREMIUM';
        }

        return 'OCEAN PULSE';
    }

    function iconMarkup(iconName) {
        return ICONS[iconName] || ICONS.ocean;
    }

    function rawPromotions() {
        const candidates = [
            window.OCEAN_PULSE_PROMOTIONS,
            window.promotionData,
            window.PROMOTION_DATA,
            window.oceanPulseData,
            window.OCEAN_PULSE_DATA,
            window.promotions
        ];

        for (const candidate of candidates) {
            if (Array.isArray(candidate)) {
                return candidate;
            }

            if (candidate && Array.isArray(candidate.promotions)) {
                return candidate.promotions;
            }

            if (candidate && Array.isArray(candidate.items)) {
                return candidate.items;
            }

            if (candidate && Array.isArray(candidate.data)) {
                return candidate.data;
            }
        }

        return [];
    }

    function normalizePromotion(item, position) {
        const promotion = item || {};

        const type = String(
            valueOf(
                promotion.type,
                promotion.category,
                promotion.kind,
                promotion.tag,
                'premium'
            )
        ).toLowerCase();

        const rawIcon = valueOf(
            promotion.icon,
            promotion.iconName,
            iconFor(type)
        );

        const icon = ICONS[rawIcon]
            ? rawIcon
            : iconFor(type);

        return {
            id: String(
                valueOf(
                    promotion.id,
                    `ocean-pulse-${position + 1}`
                )
            ),

            active: valueOf(
                promotion.active,
                promotion.enabled,
                promotion.visible,
                true
            ) !== false,

            priority: Number(
                valueOf(
                    promotion.priority,
                    promotion.order,
                    promotion.position,
                    position
                )
            ) || position,

            startDate: valueOf(
                promotion.startDate,
                promotion.startsAt,
                promotion.start,
                null
            ),

            endDate: valueOf(
                promotion.endDate,
                promotion.endsAt,
                promotion.end,
                null
            ),

            type,
            icon,

            label: String(
                valueOf(
                    promotion.label,
                    promotion.badge,
                    labelFor(type)
                )
            ),

            title: String(
                valueOf(
                    promotion.title,
                    promotion.headline,
                    promotion.name,
                    'Experiencias premium para tu mundo acuático'
                )
            ),

            description: String(
                valueOf(
                    promotion.description,
                    promotion.subtitle,
                    promotion.text,
                    promotion.message,
                    'Descubre soluciones boutique para acuarios, peces, corales y mascotas.'
                )
            ),

            cta: String(
                valueOf(
                    promotion.cta,
                    promotion.buttonText,
                    promotion.actionText,
                    promotion.button,
                    'Conocer más'
                )
            ),

            image: valueOf(
    promotion.image,
    promotion.imageUrl,
    promotion.banner,
    promotion.photo,
    ''
),

            href: String(
                valueOf(
                    promotion.href,
                    promotion.link,
                    promotion.url,
                    promotion.ctaUrl,
                    '#contacto'
                )
            ),

            external: Boolean(
                valueOf(
                    promotion.external,
                    promotion.newTab,
                    false
                )
            )
        };
    }

    function dateAllows(promotion) {
        const now = new Date();

        const start = promotion.startDate
            ? new Date(promotion.startDate)
            : null;

        const end = promotion.endDate
            ? new Date(promotion.endDate)
            : null;

        if (
            start &&
            !Number.isNaN(start.getTime()) &&
            start > now
        ) {
            return false;
        }

        if (
            end &&
            !Number.isNaN(end.getTime()) &&
            end < now
        ) {
            return false;
        }

        return promotion.active;
    }

    function config() {
        const source =
            window.OCEAN_PULSE_CONFIG ||
            window.oceanPulseConfig ||
            {};

        return {
            autoRotate: source.autoRotate !== false,

            interval: Math.max(
                3200,
                Number(source.interval || DEFAULT_INTERVAL)
            )
        };
    }

    function createPanel() {
        const panel = document.createElement('section');

        panel.id = PANEL_ID;
        panel.className = 'ocean-pulse-panel';
        panel.setAttribute('aria-hidden', 'true');
        panel.setAttribute('aria-label', 'Ocean Pulse');

        panel.innerHTML = `
      <div
        class="ocean-pulse-panel__backdrop"
        data-ocean-pulse-close
      ></div>

      <div
        class="ocean-pulse-panel__glass"
        role="dialog"
        aria-modal="true"
        aria-labelledby="oceanPulseTitle"
      >
        <div
          class="ocean-pulse-panel__light-rays"
          aria-hidden="true"
        ></div>

        <div
          class="ocean-pulse-panel__fish-layer"
          aria-hidden="true"
        >
          <span class="ocean-pulse-panel__fish ocean-pulse-panel__fish--one"></span>
          <span class="ocean-pulse-panel__fish ocean-pulse-panel__fish--two"></span>
          <span class="ocean-pulse-panel__fish ocean-pulse-panel__fish--three"></span>
          <span class="ocean-pulse-panel__fish ocean-pulse-panel__fish--four"></span>
        </div>

        <div
          class="ocean-pulse-panel__bubble-layer"
          aria-hidden="true"
        >
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>

        <div class="ocean-pulse-panel__content">

          <header class="ocean-pulse-panel__header">

            <div>
              <span class="ocean-pulse-panel__eyebrow">
                PATA Y ALETA · OCEAN PULSE
              </span>

              <h2 id="oceanPulseTitle">
                Una corriente de experiencias premium.
              </h2>
            </div>

            <div class="ocean-pulse-panel__chips">

    <button class="ocean-chip active">

        ⭐ Destacado

    </button>

</div>

            <button
              class="ocean-pulse-panel__close"
              type="button"
              aria-label="Cerrar Ocean Pulse"
              data-ocean-pulse-close
            >
              ${ICONS.close}
            </button>

          </header>

         <section
class="ocean-pulse-panel__hero"
id="oceanHeroBackground">

    <div class="ocean-pulse-panel__hero-info">

        <span class="ocean-hero-badge">

            ⭐ PROMOCIÓN DESTACADA

        </span>

        <h3
class="ocean-hero-title"
id="oceanHeroTitle">

</h3>

<p
class="ocean-hero-description"
id="oceanHeroDescription">

</p>

        <div class="ocean-hero-buttons">

<button
class="ocean-btn-primary"
id="oceanHeroButton"
type="button">

Ver promoción

</button>

<button
class="ocean-btn-secondary"
id="oceanHeroWhatsapp"
type="button">

WhatsApp

</button>
        </div>

    </div>

    <div class="ocean-pulse-panel__hero-media">

    <span class="reef-bubble"></span>
<span class="reef-bubble"></span>
<span class="reef-bubble"></span>
<span class="reef-bubble"></span>
<span class="reef-bubble"></span>
<span class="reef-bubble"></span>
<span class="reef-bubble"></span>

<div class="reef-fish emperor-fish">

<img
src="./fish-emperor.png"
alt="Ángel Emperador Juvenil"
>

</div>

<div class="reef-fish puffer-fish">

<img
src="./fish-puffer.png"
alt="Pez Globo"
>

</div>

<div class="reef-fish emperor-fish">

<img
src="./fish-emperor.png"
alt=""
>

</div>

<div class="ocean-hero-image">

<div class="ocean-light"></div>

<div class="ocean-glass-image">
    <img
        src="/img/ocean-premium.jpg"
        alt="Ocean Premium"
    >
</div>

<div class="ocean-water-flow"></div>

<div class="ocean-caustics"></div>

<div class="ocean-particles"></div>

<div class="ocean-fish-layer"></div>

<div class="ocean-fish fish-blue"></div>

<div
class="ocean-live-wrapper"
id="oceanLiveWrapper">

    <div
    class="ocean-live-panel"
    id="oceanLivePanel">

    </div>

</div>

    <span class="ocean-bubble bubble-1"></span>
    <span class="ocean-bubble bubble-2"></span>
    <span class="ocean-bubble bubble-3"></span>
    <span class="ocean-bubble bubble-4"></span>
    <span class="ocean-bubble bubble-5"></span>
    <span class="ocean-bubble bubble-6"></span>
    <span class="ocean-bubble bubble-7"></span>
    <span class="ocean-bubble bubble-8"></span>

</div>

</div>

</section>

          <div class="ocean-pulse-panel__carousel">

            <button
              class="ocean-pulse-panel__nav ocean-pulse-panel__nav--prev"
              type="button"
              aria-label="Promoción anterior"
            >
              ${ICONS.arrow}
            </button>

            <div class="ocean-pulse-panel__viewport">
              <div class="ocean-pulse-panel__track"></div>
            </div>

            <button
              class="ocean-pulse-panel__nav ocean-pulse-panel__nav--next"
              type="button"
              aria-label="Siguiente promoción"
            >
              ${ICONS.arrow}
            </button>

          </div>

          <footer class="ocean-pulse-panel__footer">

            <div
              class="ocean-pulse-panel__dots"
              aria-label="Seleccionar promoción"
            ></div>

            <span class="ocean-pulse-panel__signature">
              Bajo el cristal, vive el océano.
            </span>

          </footer>

        </div>
      </div>
    `;

        document.body.appendChild(panel);

        state.panel = panel;
        state.track = panel.querySelector('.ocean-pulse-panel__track');
        state.dots = panel.querySelector('.ocean-pulse-panel__dots');
    }

    function createBar() {

        state.root.innerHTML = `
  
  <div class="ocean-pulse__bar">

    <button
      class="ocean-pulse__bar-main"
      type="button"
      aria-expanded="false"
      aria-controls="${PANEL_ID}"
    >

      <div class="ocean-pulse__promo">

        <div class="ocean-pulse__promo-title">

        </div>

        <div class="ocean-pulse__promo-subtitle">

        </div>

      </div>

      <div class="ocean-pulse__arrow">

        ${ICONS.chevron}

      </div>

    </button>

  </div>

  `;

    }

    function renderPromotions() {
        const current = state.promotions[state.activeIndex];

        state.track.innerHTML = state.promotions
            .map((promotion, index) => {
                return `
          <article
            class="ocean-pulse-card ocean-pulse-card--${cleanText(promotion.type)} ${index === state.activeIndex ? 'is-active' : ''}"
            data-ocean-pulse-index="${index}"
            aria-hidden="${index === state.activeIndex ? 'false' : 'true'}"
          >
            <div
              class="ocean-pulse-card__surface"
              aria-hidden="true"
            ></div>

            <div
              class="ocean-pulse-card__icon"
              aria-hidden="true"
            >
              ${iconMarkup(promotion.icon)}
            </div>

            <div class="ocean-pulse-card__body">

              <span class="ocean-pulse-card__label">
                ${cleanText(promotion.label)}
              </span>

              <h3>
                ${cleanText(promotion.title)}
              </h3>

              <p>
                ${cleanText(promotion.description)}
              </p>

              <a
                class="ocean-pulse-card__cta"
                href="${cleanText(promotion.href)}"
                ${promotion.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
                data-ocean-pulse-id="${cleanText(promotion.id)}"
              >
                <span>
                  ${cleanText(promotion.cta)}
                </span>

                ${ICONS.arrow}
              </a>

            </div>
          </article>
        `;
            })
            .join('');

        state.dots.innerHTML = state.promotions
            .map((promotion, index) => {
                return `
          <button
            type="button"
            class="ocean-pulse-panel__dot ${index === state.activeIndex ? 'is-active' : ''}"
            data-ocean-pulse-dot="${index}"
            aria-label="Ver promoción ${index + 1}: ${cleanText(promotion.title)}"
          ></button>
        `;
            })
            .join('');

        updateBar(current);
        cacheCards();
        updateActive();
    }

    function cacheCards() {
        state.cards = Array.from(
            state.track.querySelectorAll('.ocean-pulse-card')
        );
    }

    function updateBar(promotion) {

        if (!promotion) return;

        const title =
            state.root.querySelector(
                '.ocean-pulse__promo-title'
            );

        const subtitle =
            state.root.querySelector(
                '.ocean-pulse__promo-subtitle'
            );

        const ICON_MAP = {

            shipping: "🚚",

            service: "⚡",

            new: "🐠",

            promo: "🎁",

            premium: "💎"

            

        };

        const icon =
            ICON_MAP[promotion.type] || "🐠";

        title.innerHTML = `
<span class="promo-emoji">
${icon}
</span>

<span>
${promotion.title}
</span>
`;

        if (subtitle) {

            subtitle.textContent =
                promotion.description;

        }

        }

        function updateHero(promotion){
    
      console.log("HERO UPDATE", promotion);  
      
      console.log("IMAGEN:", promotion.image);

console.log(promotion);

    if(!promotion) return;

    const title =
        document.getElementById(
            'oceanHeroTitle'
        );

    const description =
        document.getElementById(
            'oceanHeroDescription'
        );

const heroImage =
document.querySelector(
'.ocean-glass-image img'
);

if(heroImage){

    heroImage.src =
    './ocean-reef-premium.jpg';

}   

    const button =
        document.getElementById(
            'oceanHeroButton'
        );

    if(title){

        title.textContent =
            promotion.title;

     const primaryButton =
document.getElementById(
'oceanHeroButton'
);

if(primaryButton){

    primaryButton.onclick = ()=>{

        setOpen(false);

        setTimeout(()=>{

            switch(promotion.type){

                case "shipping":

                case "service":

                    document
                    .querySelector("#contacto")
                    ?.scrollIntoView({
                        behavior:"smooth"
                    });

                    break;

                case "premium":

                    window.location.href =
                    "/catalogo-vivo.html";

                    break;

                default:

                    if(promotion.href){

                        window.location.href =
                        promotion.href;

                    }

            }

        },250);

    };

}

const whatsappButton =
document.getElementById(
'oceanHeroWhatsapp'
);

if(whatsappButton){

    whatsappButton.onclick = ()=>{

        const mensaje = encodeURIComponent(

`Hola Pata y Aleta.

Me interesa la promoción:

${promotion.title}

¿Podrían darme más información?`

        );

        window.open(

`https://wa.me/525656774264?text=${mensaje}`,

"_blank"

        );

    };

}      

    }

    if(description){

        description.textContent =
            promotion.description;

    }

    if(button){

        button.textContent =
            promotion.cta;

    }

const heroWrapper =
document.querySelector(
'.ocean-pulse-panel__hero-media'
);

if(heroWrapper){

    heroWrapper.style.backgroundImage =
        "url('./ocean-reef-premium.jpg')";

    heroWrapper.style.backgroundSize =
        'cover';

    heroWrapper.style.backgroundPosition =
        'center';

    heroWrapper.style.backgroundRepeat =
        'no-repeat';

}

    const heroBackground =
document.getElementById('oceanHeroBackground');

if(heroBackground){

    heroBackground.style.backgroundImage = `
linear-gradient(
rgba(2,15,28,.45),
rgba(2,15,28,.72)
),
url('./ocean-reef-premium.jpg')
`;

    heroBackground.style.backgroundSize = "cover";

    heroBackground.style.backgroundPosition = "center";

    heroBackground.style.backgroundRepeat = "no-repeat";

}

    const liveWrapper =
document.getElementById('oceanLiveWrapper');

if(
    liveWrapper &&
    promotion.image
){

    liveWrapper.style.backgroundImage =
    `url(${promotion.image})`;

}

    const livePanel =
document.getElementById('oceanLivePanel');

if(livePanel){

    livePanel.innerHTML = '';

    [
    ...state.promotions.slice(state.activeIndex),
    ...state.promotions.slice(0, state.activeIndex)
]
.slice(0,3)
        .forEach(item=>{

            livePanel.innerHTML += `

<div class="live-card">

    <div class="live-card-icon">

        ${item.type === 'shipping'
            ? '🚚'
            : item.type === 'service'
            ? '⚡'
            : '🐠'}

    </div>

    <div class="live-card-content">

        <h4>${item.title}</h4>

        <p>${item.description}</p>

    </div>

</div>

`;

        });

}

}

        function updateActive() {

            const promotion =
                state.promotions[state.activeIndex];

            if (!promotion) {
                return;
            }

            if (state.cards) {

                state.cards.forEach((card, index) => {

                    const isActive =
                        index === state.activeIndex;

                    card.classList.toggle(
                        'is-active',
                        isActive
                    );

                    card.setAttribute(
                        'aria-hidden',
                        isActive ? 'false' : 'true'
                    );

                });

            }

            console.log("PROMOCION COMPLETA:");
console.dir(promotion);

console.log("IMAGE FINAL:", promotion.image);

            updateBar(promotion);

            updateHero(promotion);

        }

        function goTo(index) {
            const total = state.promotions.length;

            if (!total) {
                return;
            }

            state.activeIndex =
                ((index % total) + total) % total;

            console.log('Ocean Pulse:', state.activeIndex);

            updateActive();
        }

        function isOpen() {
            return Boolean(
                state.panel &&
                state.panel.classList.contains('is-open')
            );
        }

        function setOpen(open) {
            if (!state.panel || !state.root) {
                return;

                
            }

            const bar = state.root.querySelector(
                '.ocean-pulse__bar-main'
            );

            if (state.panel) {

                state.panel.classList.toggle('is-open', open);

                state.panel.setAttribute(
                    'aria-hidden',
                    open ? 'false' : 'true'
                );

            }

            bar?.setAttribute(
                'aria-expanded',
                open ? 'true' : 'false'
            );

            document.body.classList.toggle(
                'ocean-pulse-is-open',
                open
            );

            if (open) {
                window.setTimeout(() => {
                    state.panel
                        .querySelector('.ocean-pulse-panel__close')
                        ?.focus();
                }, 30);

                document.dispatchEvent(
                    new CustomEvent('oceanpulse:open', {
                        detail: state.promotions[state.activeIndex]
                    })
                );

                return;
            }

            bar?.focus();

            document.dispatchEvent(
                new CustomEvent('oceanpulse:close')
            );
        }

        function bindEvents() {

            const bar = state.root.querySelector(
                '.ocean-pulse__bar-main'
            );

          bar?.addEventListener('click', () => {

    if (state.panel) {
        setOpen(!isOpen());
    }

});


            if (state.panel && state.track && state.dots) {

                state.panel
                    .querySelectorAll('[data-ocean-pulse-close]')
                    .forEach(element => {

                        element.addEventListener('click', () => {
                            setOpen(false);
                        });

                    });

                state.panel
                    .querySelector('.ocean-pulse-panel__nav--prev')
                    ?.addEventListener('click', () => {
                        goTo(state.activeIndex - 1);
                    });

                state.panel
                    .querySelector('.ocean-pulse-panel__nav--next')
                    ?.addEventListener('click', () => {
                        goTo(state.activeIndex + 1);
                    });

                state.dots.addEventListener('click', event => {

                    const button = event.target.closest(
                        '[data-ocean-pulse-dot]'
                    );

                    if (!button) {
                        return;
                    }

                    goTo(
                        Number(button.dataset.oceanPulseDot)
                    );

                });

                state.track.addEventListener('click', event => {

                    const link = event.target.closest(
                        '[data-ocean-pulse-id]'
                    );

                    if (!link) {
                        return;
                    }

                    event.preventDefault();

                    event.stopPropagation();

                    document.dispatchEvent(
                        new CustomEvent('oceanpulse:cta', {
                            detail: state.promotions[state.activeIndex]
                        })
                    );

                });

                let touchStartX = 0;

                state.track.addEventListener(
                    'touchstart',
                    event => {

                        touchStartX =
                            event.changedTouches[0].clientX;

                    },
                    { passive: true }
                );

                state.track.addEventListener(
                    'touchend',
                    event => {

                        const distance =
                            event.changedTouches[0].clientX -
                            touchStartX;

                        if (Math.abs(distance) < 40) {
                            return;
                        }

                        goTo(
                            state.activeIndex +
                            (distance > 0 ? -1 : 1)
                        );

                    },
                    { passive: true }
                );

            }

            document.addEventListener('keydown', event => {

                if (!state.panel || !isOpen()) {
                    return;
                }

                if (event.key === 'ArrowRight') {
                    goTo(state.activeIndex + 1);
                }

                if (event.key === 'ArrowLeft') {
                    goTo(state.activeIndex - 1);
                }

            });

        }

        /******************************************************************
 OCEAN DRAWER V2
 Arquitectura oficial
 No modificar Ocean Pulse Engine
******************************************************************/

/*
const drawer = {

    initialized: false,

    element: null,

    isOpen: false

};
*/
/*
function createDrawer(){

    if(drawer.initialized){
        return;
    }

    drawer.element = document.createElement("div");

    drawer.element.className = "ocean-drawer";

drawer.element.innerHTML = `

<div class="ocean-drawer__surface">

    <div class="ocean-drawer__tabs">

    <div class="ocean-chip active">

        ⭐ Destacado

    </div>

</div>

    <div class="ocean-drawer__content">

    </div>

    <div class="ocean-drawer__footer">

    </div>

</div>

`;

state.root.appendChild(drawer.element);

// drawer.element.classList.add("is-open");

    drawer.initialized = true;

}
    */

/******************************************************************/

        function startRotation() {
            const options = config();

            if (
                !options.autoRotate ||
                state.promotions.length < 2
            ) {
                return;
            }

            window.clearInterval(state.intervalId);

            state.intervalId = window.setInterval(() => {
                if (!isOpen()) {
                    goTo(state.activeIndex + 1);
                }
            }, options.interval);
        }

        function refresh() {
            const nextPromotions = rawPromotions()
                .map(normalizePromotion)
                .filter(dateAllows)
                .sort((a, b) => a.priority - b.priority);

            if (!nextPromotions.length) {
                state.root.innerHTML = '';
                return;
            }

            state.promotions = nextPromotions;
            state.activeIndex = 0;

            if (state.track) {
                renderPromotions();
            } else {
                updateBar(state.promotions[state.activeIndex]);
            }

            startRotation();

            document.addEventListener(

    "OceanPulseReload",

    ()=>{

        refresh();

    }

);
        }
        

        function init() {
            if (state.initialized) {
                return window.OceanPulse;
            }

            

            state.root = document.getElementById(ROOT_ID);

            if (!state.root) {
                console.warn(
                    '[Ocean Pulse] No existe #ocean-pulse en index.html.'
                );

                return null;
            }

            let promotions = [];

if(
    window.OCEAN_PULSE_PROMOTIONS &&
    Array.isArray(window.OCEAN_PULSE_PROMOTIONS) &&
    window.OCEAN_PULSE_PROMOTIONS.length
){

    promotions =
    window.OCEAN_PULSE_PROMOTIONS
        .map(normalizePromotion)
        .filter(dateAllows)
        .sort((a,b)=>a.priority-b.priority);

}else{

    promotions =
    rawPromotions()
        .map(normalizePromotion)
        .filter(dateAllows)
        .sort((a,b)=>a.priority-b.priority);

}

if(!promotions.length){

    console.info(
        '[Ocean Pulse] Sin promociones.'
    );

    return null;

}

state.promotions = promotions;
            createBar();
// createDrawer();
createPanel();
state.root.classList.add('is-ready');
            if (state.track) {

    renderPromotions();

}

updateActive();

bindEvents();
startRotation();

            state.initialized = true;

            const api = {
                open: () => setOpen(true),
                close: () => setOpen(false),
                next: () => goTo(state.activeIndex + 1),
                prev: () => goTo(state.activeIndex - 1),
                goTo,
                refresh,
                getActive: () => state.promotions[state.activeIndex] || null,
                getAll: () => [...state.promotions]
            };

            window.OceanPulse = api;

            document.dispatchEvent(
                new CustomEvent('oceanpulse:ready', {
                    detail: api
                })
            );

            return api;
        }

        if (document.readyState === 'loading') {
            document.addEventListener(
                'DOMContentLoaded',
                init,
                { once: true }
            );
        } else {
            init();
        }
    }) ();