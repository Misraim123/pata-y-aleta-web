const supabaseUrl =
'https://vjyktubsdhpusyvnphvj.supabase.co'

const supabaseKey =
'sb_publishable_ORfJ3n0RVQ_oIJmexPkBwg_TRECBkzQ'

const homeSupabase =
window.supabase.createClient(
  supabaseUrl,
  supabaseKey
)

async function loadFeatured(){

  const { data,error } =
  await homeSupabase
    .from('products')
    .select('*')
    .eq('published',true)
    .eq('show_home',true)

  if(error){

    console.log(error)
    return

  }

  const container =
  document.getElementById('featuredProducts')

  if(!container) return

  container.innerHTML =

  data.map(product => `

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

      <h3>${product.title}</h3>

      <p>
      ${
        product.description ||
        'Producto Premium'
      }
      </p>

      <div class="featured-price">

      ${
        product.price_label ||
        '$' + product.price
      }

      </div>

    </div>

  </div>

  `).join('')

}

loadFeatured()