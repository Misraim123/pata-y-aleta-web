import './styles.css'

import { createClient }
from '@supabase/supabase-js'

const supabaseUrl =
'https://vjyktubsdhpusyvnphvj.supabase.co'

const supabaseKey =
'sb_publishable_ORfJ3n0RVQ_oIJmexPkBwg_TRECBkzQ'

const supabase =
createClient(
  supabaseUrl,
  supabaseKey
)

async function loadProducts() {

  const { data, error } =
  await supabase
    .from('products')
    .select('*')
    .eq('published', true)

  if(error){

    console.log(error)
    return

  }

const homeProducts =
  data.filter(
    product =>
      product.show_home === true
  )

  const productsContainer =
  document.getElementById('products')

  productsContainer.innerHTML = ''

  const featuredContainer =
document.getElementById('featuredProducts')

if(featuredContainer){

featuredContainer.innerHTML =

homeProducts.map(product => `

<div class="featured-card">

  <div class="product-media">

    ${
      product.video_url

      ?

      `
      <video
        src="${product.video_url}"
        autoplay
        muted
        loop
        playsinline
      ></video>
      `

      :

      `
      <img
        src="${product.image_url}"
        alt="${product.title}"
      >
      `
    }

  </div>

  <div class="featured-info">

    <h3>
      ${product.title}
    </h3>

    <p>
      ${
        product.description ||
        'Producto premium'
      }
    </p>

    <div class="featured-price">

      ${
        product.price_label ||
        '$' + product.price
      }

    </div>

    <button
      class="featured-btn"
      onclick="location.href='/catalogo-vivo.html'"
    >
      Ver producto
    </button>

  </div>

</div>

`).join('')

}

  data.forEach(product => {

    const card = `

      <div class="product-card">

        <div class="product-media">

          ${
            product.video_url
            ? `
              <video
                src="${product.video_url}"
                controls
              ></video>
            `
            : `
              <img
                src="${product.image_url}"
                alt="${product.title}"
              />
            `
          }

        </div>

        <div class="product-content">

          <div class="product-category">

            ${
              product.category
              ?.replaceAll('_',' ')
              || 'Premium'
            }

          </div>

          <h2 class="product-title">

            ${product.title}

          </h2>

          <p class="product-description">

            ${
              product.description
              || 'Producto premium disponible.'
            }

          </p>

          <div class="product-price">

            ${
              product.show_price
              ? `$${product.price} MXN`
              : product.price_label || 'Cotizar'
            }

          </div>

          <a
            class="buy-btn"
            target="_blank"
            href="
https://wa.me/525514933535?text=Hola%20Pata%20y%20Aleta%20👋%0A%0AMe%20interesa:%20${encodeURIComponent(product.title)}
            "
          >

            Comprar por WhatsApp

          </a>

        </div>

      </div>

    `

    productsContainer.innerHTML += card

  })

}

loadProducts()