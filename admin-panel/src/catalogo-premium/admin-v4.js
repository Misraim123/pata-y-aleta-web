import './admin-v3.css'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://vjyktubsdhpusyvnphvj.supabase.co',
  'sb_publishable_ORfJ3n0RVQ_oIJmexPkBwg_TRECBkzQ'
)

const totalLeads = data.length

const hoy = new Date()

const leadsHoy = data.filter(lead => {

  const fecha = new Date(lead.created_at)

  return (
    fecha.getDate() === hoy.getDate() &&
    fecha.getMonth() === hoy.getMonth() &&
    fecha.getFullYear() === hoy.getFullYear()
  )

}).length

const semana = new Date()

semana.setDate(hoy.getDate() - 7)

const leadsSemana = data.filter(lead =>
  new Date(lead.created_at) >= semana
).length

const productos = {}

data.forEach(lead => {

  const nombre =
    lead.producto || 'Sin Producto'

  productos[nombre] =
    (productos[nombre] || 0) + 1

})

const productoTop =
Object.keys(productos)
.sort((a,b)=>productos[b]-productos[a])[0]
|| 'N/A'

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

      </div>

    </div>

    <div class="executive-panel">

  <div class="executive-card">

   <div class="exec-title">
📊 Negocio
</div>

<div class="exec-row">
<span>📊 Total Leads</span>
<strong>${data.length}</strong>
</div>

<div class="exec-row">
<span>📅 Hoy</span>
<strong>${leadsHoy}</strong>
</div>

<div class="exec-row">
<span>📈 7 Días</span>
<strong>${leadsSemana}</strong>
</div>

<div class="exec-row">
<span>🔥 Top Producto</span>
<strong>${productoTop}</strong>
</div>

  </div>

  <div class="executive-card hotsale">

    <div class="exec-title">
      🔥 HOT SALE
    </div>

    <strong>
      3 Promociones
    </strong>

    <br>

    <span>
      Acuarios Premium
    </span>

  </div>

  <div class="executive-card peak">

    <div class="exec-title">
      🚀 PEAK SEASON
    </div>

    <strong>
      ACTIVO
    </strong>

    <br>

    <span>
      Verano Marino
    </span>

  </div>

</div>

    <div style="display:flex;gap:10px;">

<button id="showLeadsBtn">
📊 Leads
</button>

<button id="refreshBtn">
Actualizar
</button>

</div>

  </div>

  <div class="top-grid">

    <div class="admin-form">

      <input
        id="title"
        placeholder="Nombre producto"
      >

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
  id="stock"
  placeholder="Stock disponible (ej. Disponible / Últimas piezas)"
>

<input
  id="medidas"
  placeholder="Medidas (ej. 120x50x60 cm)"
>

<textarea
  id="galeria"
  placeholder="URLs galería separadas por coma"
></textarea>

      <input
  id="image_url"
  placeholder="URL Imagen"
  style="display:none;"
>
<div class="upload-title">
📷 Imagen Principal
</div>

<div class="upload-title">
📷 Galería 1
</div>

<input
  type="file"
  id="gallery1_upload"
  accept="image/*"
>

<input
  id="gallery_1"
  style="display:none;"
>

<div class="upload-title">
📷 Galería 2
</div>

<input
  type="file"
  id="gallery2_upload"
  accept="image/*"
>

<input
  id="gallery_2"
  style="display:none;"
>

<div class="upload-title">
📷 Galería 3
</div>

<input
  type="file"
  id="gallery3_upload"
  accept="image/*"
>

<input
  id="gallery_3"
  style="display:none;"
>

<div class="upload-title">
📷 Galería 4
</div>

<input
  type="file"
  id="gallery4_upload"
  accept="image/*"
>

<input
  id="gallery_4"
  style="display:none;"
>

      <input
  type="file"
  id="image_upload"
  accept="image/*"
>
<div class="upload-title">
🎥 Video del Producto
</div>
     <input
  id="video_url"
  placeholder="URL Video"
  style="display:none;"
>

      <input
  type="file"
  id="video_upload"
  accept="video/*"
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

        <label>

<input
  type="checkbox"
  id="show_home"
>

Home

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

      <video
        id="previewVideo"
        controls
        muted
        style="display:none;width:100%;border-radius:20px;"
      ></video>

      <div id="previewTitle">
        Producto Premium
      </div>

      <div id="previewCategory">
        Categoría
      </div>
      <div class="preview-price">
  <span id="previewPrice">
    Cotizar
  </span>
</div>

<div class="preview-tags">

  <span>
    ⭐ Premium
  </span>

  <span>
    🚚 Envío
  </span>

  <span>
    🐠 Disponible
  </span>

</div>

      <div class="preview-mini-stats">

  <div class="mini-stat">
    📦
    <strong id="headerProducts">0</strong>
    <span>Productos</span>
  </div>

  <div class="mini-stat">
    ⭐
    <strong id="headerFeatured">0</strong>
    <span>Destacados</span>
  </div>

  <div class="mini-stat">
🟢
<strong id="headerPublished">0</strong>
<span>Publicados</span>
</div>

  <div class="mini-stat">
    🎥
    <strong id="headerVideos">0</strong>
    <span>Videos</span>
  </div>

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

<div
id="products"
class="products-grid"
></div>

<div
id="leadsContainer"
style="display:none;"
></div>
`

window.editingId = null

async function loadProducts(){

  const { data,error } =
  await supabase
    .from('products')
    .select('*')
    .order('sort_order',{
      ascending:true
    })

  if(error){

    console.log(error)

    return

  }

  document.querySelector('#headerProducts').textContent =
data.length

document.querySelector('#headerFeatured').textContent =
data.filter(p => p.featured).length

document.querySelector('#headerPublished').textContent =
data.filter(p => p.published).length

document.querySelector('#headerVideos').textContent =
data.filter(p => p.video_url).length

  const search =
    document
      .querySelector('#searchInput')
      ?.value
      ?.toLowerCase() || ''

  const categoryFilter =
    document
      .querySelector('#filterCategory')
      ?.value || ''

  const filtered =
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

  filtered.map(item => `

  <div class="product-card">

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

        ${
          item.subcategory
          ? ' › ' + item.subcategory
          : ''
        }

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
      
<div class="sort-wrapper">

  <span>
    Orden
  </span>

  <input
    type="number"
    class="sort-input"
    value="${item.sort_order || 0}"
    onchange="
      updateSortOrder(
        '${item.id}',
        this.value
      )
    "
  >

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

window.deleteProduct = async(id)=>{

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

  delete data.id
  delete data.created_at

  data.title =
    data.title + ' (Copia)'

  await supabase
    .from('products')
    .insert([data])

  loadProducts()

}

loadProducts()

document
  .querySelector('#refreshBtn')
  .addEventListener(
    'click',
    loadProducts
  )

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

categorySelect.addEventListener(
  'change',
  loadSubcategories
)

loadSubcategories()

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

previewPrice.textContent =
  data.price_label || 'Cotizar'
  
  document.querySelector('#whatsapp').value =
    data.whatsapp || ''

  document.querySelector('#image_url').value =
    data.image_url || ''

    if(data.video_url){

  previewVideo.src =
    data.video_url

  previewVideo.style.display =
    'block'

  previewImage.style.display =
    'none'

}else{

  previewVideo.style.display =
    'none'

  previewImage.style.display =
    'block'

}

  document.querySelector('#video_url').value =
    data.video_url || ''

  document.querySelector('#featured').checked =
    data.featured || false

  document.querySelector('#published').checked =
    data.published || false

    document.querySelector('#show_home').checked =
  data.show_home || false

  previewTitle.textContent =
    data.title || 'Producto Premium'

    previewPrice.textContent =
  data.price_label || 'Cotizar'

  previewCategory.textContent =
    data.category || 'Categoría'

  previewImage.src =
    data.image_url ||
    'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5'

  window.editingId = id

  document.querySelector('#saveBtn').textContent =
    'Actualizar Producto'

  window.scrollTo({
    top:0,
    behavior:'smooth'
  })

}
const previewTitle =
  document.querySelector('#previewTitle')

const previewCategory =
  document.querySelector('#previewCategory')

  document
  .querySelector('#category')
  .addEventListener('change',e=>{

    previewCategory.textContent =
      e.target.value || 'Categoría'

  })

  const previewPrice =
  document.querySelector('#previewPrice')

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
  .querySelector('#price_label')
  .addEventListener('input',e=>{

    previewPrice.textContent =
      e.target.value || 'Cotizar'

  })

document
  .querySelector('#category')
  .addEventListener('change',e=>{

    previewCategory.textContent =
      e.target.value || 'Categoría'

  })

document
  .querySelector('#image_url')
  .addEventListener('input',e=>{

    if(e.target.value){

      previewImage.src =
        e.target.value

      previewImage.style.display =
        'block'

      previewVideo.style.display =
        'none'

    }

  })

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

document
  .querySelector('#saveBtn')
  .addEventListener('click',async()=>{

    const payload = {

      title:
        document.querySelector('#title').value,

      description:
        document.querySelector('#description').value,

      category:
        document.querySelector('#category').value,

      subcategory:
        document.querySelector('#subcategory').value,

      stock:
document.querySelector('#stock').value,

medidas:
document.querySelector('#medidas').value,

galeria:
document.querySelector('#galeria').value,

gallery_1:
document.querySelector('#gallery_1').value,

gallery_2:
document.querySelector('#gallery_2').value,

gallery_3:
document.querySelector('#gallery_3').value,

gallery_4:
document.querySelector('#gallery_4').value,

      price:
        document.querySelector('#price').value,

      price_label:
        document.querySelector('#price_label').value,

      whatsapp:
        document.querySelector('#whatsapp').value,

      image_url:
        document.querySelector('#image_url').value,

      video_url:
        document.querySelector('#video_url').value,

      featured:
        document.querySelector('#featured').checked,

      published:
  document.querySelector('#published').checked,

show_home:
  document.querySelector('#show_home').checked

    }

    let response

    if(window.editingId){

      response =
        await supabase
          .from('products')
          .update(payload)
          .eq('id',window.editingId)

    }else{

      response =
        await supabase
          .from('products')
          .insert([
            {
              ...payload,
              status:'disponible'
            }
          ])

    }

    if(response.error){

      console.log(response.error)

      alert('Error al guardar')

      return

    }

    alert('Guardado correctamente')

    window.editingId = null

    document.querySelector('#saveBtn').textContent =
      'Guardar Producto'

    document.querySelector('#title').value = ''
    document.querySelector('#description').value = ''
    document.querySelector('#price').value = ''
    document.querySelector('#price_label').value = ''
    document.querySelector('#whatsapp').value = ''
    document.querySelector('#image_url').value = ''
    document.querySelector('#video_url').value = ''

    document.querySelector('#featured').checked = false
    document.querySelector('#published').checked = true
    document.querySelector('#show_home').checked = false

    previewTitle.textContent =
      'Producto Premium'

    previewCategory.textContent =
      'Categoría'

    previewImage.src =
      'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5'

    previewImage.style.display =
      'block'

    previewVideo.style.display =
      'none'

    loadProducts()

  })
  document
  .querySelector('#image_upload')
  ?.addEventListener('change', async e => {

    const file = e.target.files[0]

    if(!file) return

    const fileName =
      Date.now() +
      '-' +
      file.name

    const { error } =
      await supabase
        .storage
        .from('pata-products')
        .upload(
          `images/${fileName}`,
          file
        )

    if(error){
      console.log(error)
      return
    }

    const { data } =
      supabase
        .storage
        .from('pata-products')
        .getPublicUrl(
          `images/${fileName}`
        )

    document.querySelector('#image_url').value =
      data.publicUrl

    previewImage.src =
      data.publicUrl

      document.querySelector('#image_url').value =
  data.publicUrl

previewImage.src =
  data.publicUrl

previewImage.style.display = 'block'

previewImage.style.width = '100%'

previewImage.style.height = '260px'

previewImage.style.objectFit = 'contain'
previewImage.style.background =
'#081a2d'
previewImage.style.borderRadius = '20px'

previewImage.style.border =
'1px solid rgba(255,255,255,.1)'

})
document
  .querySelector('#video_upload')
  ?.addEventListener('change', async e => {

    const file = e.target.files[0]

    if(!file) return

    const fileName =
      Date.now() +
      '-' +
      file.name

    const { error } =
      await supabase
        .storage
        .from('pata-products')
        .upload(
          `videos/${fileName}`,
          file
        )

    if(error){
      console.log(error)
      return
    }

    const { data } =
      supabase
        .storage
        .from('pata-products')
        .getPublicUrl(
          `videos/${fileName}`
        )

    document.querySelector('#video_url').value =
      data.publicUrl

      previewVideo.src =
  data.publicUrl

previewVideo.style.display =
  'block'

previewImage.style.display =
  'none'

})

async function uploadGallery(file, field){

  if(!file) return

  const fileName =
    Date.now() +
    '-' +
    file.name

  const { error } =
    await supabase
      .storage
      .from('pata-products')
      .upload(
        `gallery/${fileName}`,
        file
      )

  if(error){

    console.log(error)
    return

  }

  const { data } =
    supabase
      .storage
      .from('pata-products')
      .getPublicUrl(
        `gallery/${fileName}`
      )

  document.querySelector(field).value =
    data.publicUrl

}

document
.querySelector('#gallery1_upload')
?.addEventListener('change',e=>{

uploadGallery(
e.target.files[0],
'#gallery_1'
)

})

document
.querySelector('#gallery2_upload')
?.addEventListener('change',e=>{

uploadGallery(
e.target.files[0],
'#gallery_2'
)

})

document
.querySelector('#gallery3_upload')
?.addEventListener('change',e=>{

uploadGallery(
e.target.files[0],
'#gallery_3'
)

})

document
.querySelector('#gallery4_upload')
?.addEventListener('change',e=>{

uploadGallery(
e.target.files[0],
'#gallery_4'
)

})

window.updateSortOrder = async(id,value)=>{

  const { error } =
    await supabase
      .from('products')
      .update({
        sort_order:Number(value)
      })
      .eq('id',id)

  if(error){

    console.log(error)

    return

  }

  loadProducts()

}

async function loadLeads(){

const { data,error } =
await supabase
.from('leads')
.select('*')
.order(
'created_at',
{
ascending:false
}
);

console.log('LEADS:', data);

if(error){

console.log(error);

return;

}


document.querySelector(
'#leadsContainer'
).innerHTML = `

<table
style="
width:100%;
margin-top:30px;
border-collapse:collapse;
"
>

<tr>

<th>Fecha</th>

<th>Cliente</th>

<th>Teléfono</th>

<th>Producto</th>

<th>Acción</th>

</tr>

${data.map(lead => `

<tr>

<td>
${new Date(
lead.created_at
).toLocaleString()}
</td>

<td>
${lead.nombre || ''}
</td>

<td>
${lead.telefono || ''}
</td>

<td>
${lead.producto || ''}
</td>

<td>

<a
href="https://wa.me/52${lead.telefono}"
target="_blank"
>

📲 WhatsApp

</a>

</td>

</tr>

`).join('')}

</table>
`;

}

document
.querySelector('#showLeadsBtn')
?.addEventListener(
'click',
async()=>{

const leads =
document.querySelector(
'#leadsContainer'
);

if(
leads.style.display === 'block'
){

leads.style.display =
'none';

return;

}

await loadLeads();

leads.style.display =
'block';

});

supabase
.channel('leads-realtime')

.on(
'postgres_changes',
{
event:'INSERT',
schema:'public',
table:'leads'
},
payload => {

alert(
'🚨 Nuevo Lead: ' +
(payload.new.nombre || 'Cliente')
)

loadLeads()

}
)

.subscribe()
setInterval(() => {

const leads =
document.querySelector('#leadsContainer')

if(
leads &&
leads.style.display === 'block'
){
loadLeads()
}

},15000)