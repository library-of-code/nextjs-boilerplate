import axios from '../../utils/axios'

// A function to forward API calls from the client via the server.
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

  // console.log(response.data)
  res.send(response.data)
}
