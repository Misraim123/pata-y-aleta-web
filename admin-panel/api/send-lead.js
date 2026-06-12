import { Resend } from 'resend'

export default async function handler(req, res) {

  return res.status(200).json({

    apiKeyExiste: !!process.env.RESEND_API_KEY,

    apiKeyPrimeros5:
      process.env.RESEND_API_KEY
      ? process.env.RESEND_API_KEY.substring(0,5)
      : null

  })

}