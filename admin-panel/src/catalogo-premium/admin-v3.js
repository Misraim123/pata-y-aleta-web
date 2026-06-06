import './admin-v3.css'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://vjyktubsdhpusyvnphvj.supabase.co',
  'sb_publishable_ORfJ3n0RVQ_oIJmexPkBwg_TRECBkzQ'
)

document.querySelector('#app').innerHTML = `
<div class="admin-container">

  <div class="admin-header">
    <h1>Pata y Aleta Admin V3</h1>
    <button id="refreshBtn">Actualizar</button>
  </div>

  <div class="admin-form">

    <input id="title" placeholder="Nombre producto">

    <textarea
      id="description"
      placeholder="Descripción"
    ></textarea>

    <select id="category">
      <option value="peces_marinos">Peces Marinos</option>
      <option value="corales">Corales</option>
      <option value="acuarios">Acuarios</option>
      <option value="mascotas">Mascotas</option>
      <option value="accesorios_mascotas">Accesorios Mascotas</option>
      <option value="alimento">Alimento</option>
      <option value="filtros">Filtros</option>
    </select>

    <input
      id="price_label"
      placeholder="Precio visible"
    >

    <button id="saveBtn">
      Guardar Producto
    </button>

  </div>

  <div id="products"></div>

</div>
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

  document.querySelector('#products').innerHTML =
    data.map(item => `
      <div class="product-row">
        <strong>${item.title || ''}</strong>
        <span>${item.category || ''}</span>
        <span>${item.price_label || ''}</span>
      </div>
    `).join('')
}

loadProducts()

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

    const { error } =
      await supabase
        .from('products')
        .insert([
          {
            title,
            description,
            category,
            price_label,
            published:true,
            status:'disponible'
          }
        ])

    if(error){
      console.log(error)
      alert('Error')
      return
    }

    alert('Guardado')

    loadProducts()

  })