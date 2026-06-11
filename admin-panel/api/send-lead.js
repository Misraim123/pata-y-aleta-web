import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    })
  }

  try {

    const {
      nombre,
      telefono,
      correo,
      producto,
      comentarios
    } = req.body

    await resend.emails.send({

      from: 'Pata y Aleta <onboarding@resend.dev>',

      to: [
        'patayaleta@gmail.com',
        'ian_raim10.1@hotmail.com'
      ],

      subject: `🔥 Nuevo Lead - ${producto}`,

      html: `
        <h2>Nuevo Lead Capturado</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>

        <p><strong>Teléfono:</strong> ${telefono}</p>

        <p><strong>Correo:</strong> ${correo}</p>

        <p><strong>Producto:</strong> ${producto}</p>

        <p><strong>Comentarios:</strong></p>

        <p>${comentarios || 'Sin comentarios'}</p>
      `
    })

    return res.status(200).json({
      success: true
    })

} catch(error){

  console.error('ERROR RESEND:', error)

  return res.status(500).json({

    error: String(error),

    stack: error?.stack || null

  })

}

}