import './admin-v3.css'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://vjyktubsdhpusyvnphvj.supabase.co',
  'sb_publishable_ORfJ3n0RVQ_oIJmexPkBwg_TRECBkzQ'
)

document.querySelector('#app').innerHTML = `
<div class="admin-container">

  <div class="admin-header">
    <div class="brand">

<img
  src="/logo-completo.png"
  class="brand-logo"
>

  <div>

    <h1>Pata y Aleta</h1>

    <span>
      Admin Premium
    </span>
    <div class="header-stats">

  <div class="header-stat">
    <span>📦</span>
    <strong id="headerProducts">0</strong>
  </div>

  <div class="header-stat">
    <span>⭐</span>
    <strong id="headerFeatured">0</strong>
  </div>

  <div class="header-stat">
    <span>🟢</span>
    <strong id="headerPublished">0</strong>
  </div>

</div>

  </div>

</div>
    <button id="refreshBtn">Actualizar</button>
  </div>

  <div class="top-grid">

<div class="admin-form">

    <input id="title" placeholder="Nombre producto">

    <textarea
      id="description"
      placeholder="Descripción"
    ></textarea>

    <select id="category">

  <option value="peces_marinos">
    Peces Marinos
  </option>

  <option value="peces_dulces">
  Peces Dulces
</option>

  <option value="corales">
    Corales
  </option>

  <option value="acuarios">
    Acuarios
  </option>

  <option value="mascotas">
    Mascotas
  </option>

  <option value="accesorios_mascotas">
    Accesorios Mascotas
  </option>

  <option value="alimento">
    Alimento
  </option>

  <option value="filtros">
    Filtros
  </option>

</select>

<select id="subcategory">

  <option value="">
    Selecciona Subcategoría
  </option>

</select>

    <input
      id="price_label"
      placeholder="Precio visible"
    >

<input
  id="price"
  placeholder="Precio numérico"
>

<input
  id="whatsapp"
  placeholder="WhatsApp"
>

<input
  id="image_url"
  placeholder="URL Imagen"
>

<input
  id="video_url"
  placeholder="URL Video"
>

<div class="check-group">

  <label>
    <input
      type="checkbox"
      id="featured"
    >
    Destacado
  </label>

  <label>
    <input
      type="checkbox"
      id="published"
      checked
    >
    Publicado
  </label>

</div>

    <button id="saveBtn">
      Guardar Producto
    </button>

  </div>

<div class="preview-panel">

  <h2>Vista previa</h2>

  <img
    id="previewImage"
    src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5"
  >

  <div id="previewTitle">
    Producto Premium
  </div>

  <div id="previewCategory">
    Categoría
  </div>
  <div class="admin-stats">

  <div class="stat-card">
    <span>📦</span>
    <strong id="totalProducts">0</strong>
    <small>Productos</small>
  </div>

  <div class="stat-card">
    <span>⭐</span>
    <strong id="featuredProducts">0</strong>
    <small>Destacados</small>
  </div>

  <div class="stat-card">
    <span>🟢</span>
    <strong id="publishedProducts">0</strong>
    <small>Publicados</small>
  </div>

</div>

</div>

</div>
<div class="toolbar">

  <input
    id="searchInput"
    placeholder="🔎 Buscar producto..."
  >

  <select id="filterCategory">

    <option value="">
      Todas las categorías
    </option>

    <option value="peces_marinos">
      Peces Marinos
    </option>

    <option value="peces_dulces">
      Peces Dulces
    </option>

    <option value="corales">
      Corales
    </option>

    <option value="acuarios">
      Acuarios
    </option>

    <option value="mascotas">
      Mascotas
    </option>

    <option value="accesorios_mascotas">
      Accesorios
    </option>

    <option value="alimento">
      Alimento
    </option>

    <option value="filtros">
      Filtros
    </option>

  </select>

</div>

<div id="products"></div>
`

async function loadProducts() {

  const { data, error } =
    await supabase
      .from('products')
      .select('*')
      .order('created_at',{ascending:false})

  if(error){
    console.log(error)
    return
  }
  document.querySelector('#totalProducts').textContent =
data.length

document.querySelector('#headerProducts').textContent =
data.length

document.querySelector('#headerFeatured').textContent =
data.filter(p => p.featured).length

document.querySelector('#headerPublished').textContent =
data.filter(p => p.published).length

document.querySelector('#featuredProducts').textContent =
data.filter(p => p.featured).length

document.querySelector('#publishedProducts').textContent =
data.filter(p => p.published).length

const search =
  document
    .querySelector('#searchInput')
    ?.value
    ?.toLowerCase() || ''

const categoryFilter =
  document
    .querySelector('#filterCategory')
    ?.value || ''

let filtered =
  data.filter(item=>{

    const matchesSearch =
      (item.title || '')
      .toLowerCase()
      .includes(search)

    const matchesCategory =
      !categoryFilter ||
      item.category === categoryFilter

    return (
      matchesSearch &&
      matchesCategory
    )

  })
  document.querySelector('#products').innerHTML =
filtered.map(item =>
  

<div class="product-image">

  ${
    item.video_url

    ? `

    <video
      src="${item.video_url}"
      controls
      muted
      preload="metadata"
    ></video>

    `

    :

    `

    <img
      src="${
        item.image_url ||
        'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5'
      }"
      alt="${item.title}"
    >

    `
  }

</div>

  <div class="product-body">

    <div class="product-category">
      ${item.category || ''}
      ${item.subcategory ? ' › ' + item.subcategory : ''}
    </div>

    <h3 class="product-title">
      ${item.title || ''}
    </h3>

    <div class="product-price">
      ${item.price_label || 'Cotizar'}
    </div>

    <div class="badges">

      ${
        item.featured
        ? '<span class="badge gold">⭐ Destacado</span>'
        : ''
      }

      ${
        item.published
        ? '<span class="badge green">🟢 Publicado</span>'
        : ''
      }

    </div>

    <div class="actions">

    <button
  class="copy-btn"
  onclick="duplicateProduct('${item.id}')"
>
  📋
</button>

      <button
        class="edit-btn"
        onclick="editProduct('${item.id}')"
      >
        ✏️
      </button>

      <button
        class="delete-btn"
        onclick="deleteProduct('${item.id}')"
      >
        🗑️
      </button>

    </div>

  </div>

</div>

`).join('')
}

loadProducts()

window.deleteProduct = async(id)=>{
    window.duplicateProduct = async(id)=>{

  const { data,error } =
    await supabase
      .from('products')
      .select('*')
      .eq('id',id)
      .single()

  if(error){
    console.log(error)
    return
  }

  const copy = {

    ...data,

    title:
      data.title +
      ' (Copia)'

  }

  delete copy.id
  delete copy.created_at

  const result =
    await supabase
      .from('products')
      .insert([copy])

  if(result.error){

    console.log(result.error)

    return

  }

  loadProducts()

}

  if(!confirm('¿Eliminar producto?'))
    return

  const { error } =
    await supabase
      .from('products')
      .delete()
      .eq('id',id)

  if(error){
    console.log(error)
    return
  }

  loadProducts()
}

window.editProduct = async(id)=>{

  const { data,error } =
    await supabase
      .from('products')
      .select('*')
      .eq('id',id)
      .single()

  if(error){
    console.log(error)
    return
  }

  document.querySelector('#title').value =
    data.title || ''

  document.querySelector('#description').value =
    data.description || ''

  document.querySelector('#category').value =
    data.category || ''

  loadSubcategories()

  document.querySelector('#subcategory').value =
    data.subcategory || ''

  document.querySelector('#price').value =
    data.price || ''

  document.querySelector('#price_label').value =
    data.price_label || ''

  document.querySelector('#whatsapp').value =
    data.whatsapp || ''

  document.querySelector('#image_url').value =
    data.image_url || ''

  document.querySelector('#video_url').value =
    data.video_url || ''

  document.querySelector('#featured').checked =
    data.featured || false

  document.querySelector('#published').checked =
    data.published || false

previewTitle.textContent =
  data.title || 'Producto Premium'

previewCategory.textContent =
  data.category || 'Categoría'

previewImage.src =
  data.image_url ||
  'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5'

  window.editingId = id

  window.scrollTo({
    top:0,
    behavior:'smooth'
    
  })
}
document
  .querySelector('#saveBtn')
  .textContent =
  'Actualizar Producto'

document
  .querySelector('#refreshBtn')
  .addEventListener('click',loadProducts)

document
  .querySelector('#saveBtn')
  .addEventListener('click',async()=>{

    const title =
      document.querySelector('#title').value

    const description =
      document.querySelector('#description').value

    const category =
      document.querySelector('#category').value

    const price_label =
      document.querySelector('#price_label').value
      const subcategory =
  document.querySelector('#subcategory').value

const price =
  document.querySelector('#price').value

const whatsapp =
  document.querySelector('#whatsapp').value

const image_url =
  document.querySelector('#image_url').value

const video_url =
  document.querySelector('#video_url').value

const featured =
  document.querySelector('#featured').checked

const published =
  document.querySelector('#published').checked

    let response

if(window.editingId){

  response =
    await supabase
      .from('products')
      .update({
        title,
        description,
        category,
        subcategory,
        price,
        price_label,
        whatsapp,
        image_url,
        video_url,
        featured,
        published
      })
      .eq('id',window.editingId)

}else{

  response =
    await supabase
      .from('products')
      .insert([
        {
          title,
          description,
          category,
          subcategory,
          price,
          price_label,
          whatsapp,
          image_url,
          video_url,
          featured,
          published,
          status:'disponible'
        }
      ])
}
   if(response.error){
  console.log(response.error)
  alert('Error')
  return
}

    alert('Guardado')

    window.editingId = null

    document.querySelector('#title').value = ''
document.querySelector('#description').value = ''
document.querySelector('#price').value = ''
document.querySelector('#price_label').value = ''
document.querySelector('#whatsapp').value = ''
document.querySelector('#image_url').value = ''
document.querySelector('#video_url').value = ''

document.querySelector('#featured').checked = false
document.querySelector('#published').checked = true

document.querySelector('#saveBtn').textContent =
'Guardar Producto'

    loadProducts()

  })

  const categorySelect =
  document.querySelector('#category')

const subcategorySelect =
  document.querySelector('#subcategory')

const subcategories = {

  peces_marinos:[
    'Payasos',
    'Cirujanos',
    'Ángeles',
    'Gobios',
    'Blénidos',
    'Wrasses',
    'Invertebrados',
    'Otras Especies'
  ],

  peces_dulces:[
    'Bettas',
    'Tetras',
    'Cíclidos',
    'Goldfish',
    'Guppys',
    'Plecos',
    'Corydoras',
    'Otras Especies'
  ],

  corales:[
    'SPS',
    'LPS',
    'Zoanthus',
    'Soft Corals',
    'Anémonas',
    'Otros Corales'
  ],

  acuarios:[
    'Marino',
    'Dulce',
    'Nano Reef',
    'Premium',
    'Empresarial',
    'Residencial'
  ],

 mascotas:[
  'Perros',
  'Gatos',
  'Aves',
  'Roedores',
  'Reptiles',
  'Anfibios',
  'Exóticos',
  'Otros'
],

  accesorios_mascotas:[
  'Correas',
  'Collares',
  'Juguetes',
  'Camas',
  'Transportadoras',
  'Comederos',
  'Rascadores',
  'Higiene',
  'Otros'
],

  alimento:[
  'Marino',
  'Dulce',
  'Perro',
  'Gato',
  'Aves',
  'Roedores',
  'Reptiles',
  'Anfibios',
  'Premium',
  'Medicados'
],

  filtros:[
    'Canister',
    'Mochila',
    'Interno',
    'Sump'
  ]

}

function loadSubcategories(){

  const category =
    categorySelect.value

  subcategorySelect.innerHTML =
    '<option value="">Selecciona Subcategoría</option>'

  if(!subcategories[category])
    return

  subcategories[category]
    .forEach(item=>{

      subcategorySelect.innerHTML += `
        <option value="${item}">
          ${item}
        </option>
      `

    })

}

categorySelect
  .addEventListener(
    'change',
    loadSubcategories
  )

loadSubcategories()
document
  .addEventListener(
    'input',
    e=>{

      if(
        e.target.id === 'searchInput'
      ){
        loadProducts()
      }

    }
  )

document
  .addEventListener(
    'change',
    e=>{

      if(
        e.target.id === 'filterCategory'
      ){
        loadProducts()
      }

    }
  )
const previewTitle =
  document.querySelector('#previewTitle')

const previewCategory =
  document.querySelector('#previewCategory')

const previewImage =
  document.querySelector('#previewImage')

  const previewVideo =
  document.querySelector('#previewVideo')

document
  .querySelector('#title')
  .addEventListener('input',e=>{

    previewTitle.textContent =
      e.target.value || 'Producto Premium'

  })

document
  .querySelector('#category')
  .addEventListener('change',e=>{

    previewCategory.textContent =
      e.target.value

  })

document
  .querySelector('#image_url')
  .addEventListener('input',e=>{

    document
.querySelector('#video_url')
.addEventListener('input',e=>{

  if(e.target.value){

    previewVideo.src =
      e.target.value

    previewVideo.style.display =
      'block'

    previewImage.style.display =
      'none'

  }

})

    if(e.target.value){

      previewImage.src =
        e.target.value

    }

  })