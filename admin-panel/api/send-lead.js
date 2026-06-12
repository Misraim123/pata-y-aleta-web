export default async function handler(req, res) {

  return res.status(200).json({

    todas: Object.keys(process.env)

  })

}