import axios from 'axios'

let token = null
const setToken = newToken => {
  token = newToken
}

const getLists = baseUrl => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.get(baseUrl, config)
  return request.then(response => response.data)
}

export { setToken, getLists }
