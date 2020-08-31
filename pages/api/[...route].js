import axios from '../../utils/axios'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req, res) => {

  const {
    query: { route: [ finalRoute ] },
    method,
    body
  } = req

  var response = await axios({
    url: finalRoute,
    method: method,
    data: body
  })

  console.log(response.data)
  res.send(response.data)
}
