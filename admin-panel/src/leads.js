import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://vjyktubsdhpusyvnphvj.supabase.co',
  'TU_PUBLISHABLE_KEY'
)

async function loadLeads() {

  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending:false })

  if(error){

    document.querySelector('#app').innerHTML =
      `<h2>Error cargando leads</h2>`

    return
  }

  document.querySelector('#app').innerHTML = `

  <div class="admin-layout">

    <h1>📊 Leads Capturados</h1>

    <table class="lead-table">

      <thead>
        <tr>
          <th>Fecha</th>
          <th>Cliente</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th>Producto</th>
          <th>Categoría</th>
          <th>Comentarios</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>

      ${data.map(lead => `

      <tr>

        <td>
          ${new Date(lead.created_at).toLocaleString()}
        </td>

        <td>${lead.nombre || ''}</td>

        <td>${lead.telefono || ''}</td>

        <td>${lead.correo || ''}</td>

        <td>${lead.producto || ''}</td>

        <td>${lead.categoria || ''}</td>

        <td>${lead.comentarios || ''}</td>

        <td>

          <a
            href="https://wa.me/52${lead.telefono}"
            target="_blank"
          >
            WhatsApp
          </a>

        </td>

      </tr>

      `).join('')}

      </tbody>

    </table>

  </div>
  `
}

loadLeads()