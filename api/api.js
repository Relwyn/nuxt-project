import axios from 'axios'

function createRequest() {
  return axios.create({
    baseURL: `https://db.ygoprodeck.com`
  })
}

const request = createRequest()

export function getCardInfo(name = 91152256) {
  return request
    .get(`/api/v5/cardinfo.php`, {
      params: {
        name,
        la: 'french'
      }
    })
    .then(({ data }) => data)
    .catch((error) => console.log(error))
}
