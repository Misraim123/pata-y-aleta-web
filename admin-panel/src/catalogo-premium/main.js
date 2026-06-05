import './styles.css'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
'https://vjyktubsdhpusyvnphvj.supabase.co'

const supabaseKey =
'sb_publishable_ORfJ3n0RVQ_oIJmexPkBwg_TRECBkzQ'

const supabase =
createClient(supabaseUrl, supabaseKey)

document.querySelector('#app').innerHTML = `
<div class="admin-layout">

  <aside class="sidebar">

    <h1>Pata y Aleta</h1>

    <button>📦 Productos</button>
    <button>🐠 Peces</button>
    <button>🐶 Mascotas</button>
    <button>⚙️ Configuración</button>

  </aside>

  <main class="content">

    <div class="topbar">

      <h2>Panel Administrativo</h2>

      <button
        class="new-product-btn"
        id="openModalBtn"
      >
        + Nuevo producto
      </button>

    </div>

    <table>

      <thead>
        <tr>
          <th>Foto</th>
          <th>Producto</th>
          <th>Categoría</th>
          <th>Subcategoría</th>
          <th>Precio</th>
          <th>Status</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody id="productsTable"></tbody>

    </table>

    <div
      id="productModal"
      class="modal"
    >

      <div class="modal-content">

        <h2>Nuevo Producto</h2>

        <input
          type="text"
          id="productTitle"
          placeholder="Nombre"
        >

        <input
          type="file"
          id="productImage"
        >

       <select id="productCategory">

  <option value="peces_marinos">
    Peces Marinos
  </option>

  <option value="corales">
    Corales
  </option>

  <option value="acuarios">
    Acuarios
  </option>

  <option value="accesorios_mascotas">
    Accesorios Mascotas
  </option>

  <option value="alimento">
    Alimento
  </option>

</select>

<select id="productSubcategory">

  <option value="">
    Seleccionar
  </option>

  <option value="sps">
    SPS
  </option>

  <option value="lps">
    LPS
  </option>

  <option value="zoanthus">
    Zoanthus
  </option>

  <option value="soft_corals">
    Soft Corals
  </option>

  <option value="marino">
    Marino
  </option>

  <option value="dulce">
    Dulce
  </option>

  <option value="nano_reef">
    Nano Reef
  </option>

  <option value="premium">
    Premium
  </option>

</select>

        <textarea
          id="productDescription"
          placeholder="Descripción"
        ></textarea>

        <input
          type="text"
          id="productPrice"
          placeholder="Precio"
        >

        <input
          type="text"
          id="productWhatsapp"
          placeholder="WhatsApp"
        >

        <label class="featured-check">

          <input
            type="checkbox"
            id="productFeatured"
          >

          Producto destacado

        </label>

        <button id="saveProductBtn">
          Guardar
        </button>

      </div>

    </div>

  </main>

</div>
`

async function loadProducts() {

  const { data } =
    await supabase
      .from('products')
      .select()

  const table =
    document.querySelector('#productsTable')

  table.innerHTML = ''

  data.forEach(product => {

    table.innerHTML += `

    <tr>

      <td>
        <img src="${product.image_url}">
      </td>

      <td>${product.title}</td>

      <td>${product.category}</td>

      <td>${product.subcategory || '-'}</td>

      <td>${product.price_label}</td>

      <td>${product.status || 'activo'}</td>

      <td>

        <button
          class="action-btn edit-btn"
          onclick="editProduct('${product.id}')"
        >
          ✏️
        </button>

        <button
          class="action-btn delete-btn"
          onclick="deleteProduct('${product.id}')"
        >
          🗑️
        </button>

      </td>

    </tr>

    `

  })

}

loadProducts()

window.deleteProduct = async (id) => {

  const confirmDelete =
    confirm('¿Eliminar producto?')

  if (!confirmDelete) return

  const { error } =
    await supabase
      .from('products')
      .delete()
      .eq('id', id)

  if (error) {

    alert('Error al eliminar')

    console.log(error)

    return

  }

  alert('Producto eliminado')

  loadProducts()

}

window.editProduct = async (id) => {

  const newTitle =
    prompt('Nuevo nombre del producto')

  if (!newTitle) return

  const { error } =
    await supabase
      .from('products')
      .update({
        title: newTitle
      })
      .eq('id', id)

  if (error) {

    alert('Error al editar')

    console.log(error)

    return

  }

  alert('Producto actualizado')

  loadProducts()

}

document
  .querySelector('#openModalBtn')
  .addEventListener('click', () => {

    document
      .querySelector('#productModal')
      .style.display = 'flex'

  })

document
  .querySelector('#saveProductBtn')
  .addEventListener('click', async () => {

    const title =
      document.querySelector('#productTitle').value

    const category =
      document.querySelector('#productCategory').value

    const subcategory =
      document.querySelector('#productSubcategory').value

    const description =
      document.querySelector('#productDescription').value

    const price =
      document.querySelector('#productPrice').value

    const whatsapp =
      document.querySelector('#productWhatsapp').value

    const featured =
      document.querySelector('#productFeatured').checked

    const imageFile =
      document.querySelector('#productImage')
      .files[0]

    if (!imageFile) {

      alert('Selecciona una imagen')

      return

    }

    const fileName =
      `${Date.now()}-${imageFile.name}`

    const { error: uploadError } =
      await supabase
        .storage
        .from('products')
        .upload(fileName, imageFile)

    if (uploadError) {

      alert('Error subiendo imagen')

      console.log(uploadError)

      return

    }

    const imageUrl =
      `https://vjyktubsdhpusyvnphvj.supabase.co/storage/v1/object/public/products/${fileName}`

    const { error } =
      await supabase
        .from('products')
        .insert([
          {
            title: title,
            category: category,
            subcategory: subcategory,
            description: description,
            price_label: price,
            image_url: imageUrl,
            whatsapp: whatsapp,
            featured: featured,
            status: 'activo'
          }
        ])

    if (error) {

      alert('Error al guardar producto')

      console.log(error)

      return

    }

    alert('Producto guardado')

    document
      .querySelector('#productModal')
      .style.display = 'none'

    loadProducts()

  })