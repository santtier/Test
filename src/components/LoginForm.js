import { useState } from 'react'
import axios from 'axios'

import logo from '../images/logo.png'
import './Login.css'

const LoginForm = props => {
  const baseUrl = 'https://api-development.rodeoworld.co.uk'

  // const [errorMessage, setErrorMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async credentials => {
    const { data } = await axios.post(
      baseUrl + '/businesses/login',
      credentials
    )
    return data
  }

  const emailHandler = event => {
    setEmail(event.target.value)
  }

  const passwordHandler = event => {
    setPassword(event.target.value)
  }

  const loginHandler = async event => {
    event.preventDefault()

    try {
      const user = login({
        email,
        password
      })

      console.log(user)
      props.onSaveUser(user)

      // Acá guardariamos el token que nos envia la dat del API para no tener que iniciar sesion cada vez que refrescamos el navegador
      window.localStorage.setItem('loggedUser', JSON.stringify(user))

      setEmail('')
      setPassword('')
    } catch (e) {
      // setErrorMessage()
    }
  }

  return (
    <div className='wrapper fadeInDown'>
      <div id='formContent'>
        <div className='fadeIn first'>
          <img src={logo} width='100px' alt='User Icon' />
        </div>

        <form onSubmit={loginHandler}>
          <input
            type='text'
            className='fadeIn second'
            name='email'
            value={email}
            placeholder='Email'
            onChange={emailHandler}
          />
          <input
            type='password'
            className='fadeIn third'
            name='password'
            value={password}
            placeholder='Password'
            onChange={passwordHandler}
          />
          <input type='submit' className='fadeIn fourth' value='Log In' />
        </form>
      </div>
    </div>
  )
}

export default LoginForm

// const data = await fetch(baseUrl + '/businesses/login', {
//   method: 'POST',
//   body: JSON.stringify({
//     email,
//     password
//   }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// const response = await data.json()
// console.log(response)
