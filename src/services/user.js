import axios from 'axios'
const baseUrl = 'https://api.rodeoworld.co.uk/businesses/login'

const userLogin = async credentials => {
  const { data } = await axios.post(baseUrl, credentials)
  return data
}

export default userLogin
