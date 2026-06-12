export default async function handler(req, res) {

  return res.status(200).json({

    apiKeyExiste: !!process.env.RESEND_API_KEY

  })

}