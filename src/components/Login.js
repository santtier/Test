import { useState } from 'react'
import axios from 'axios'

import './Login.css'
import logo from '../images/logo.png'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailHandler = event => {
    setEmail(event.target.value)
  }

  const passwordHandler = event => {
    setPassword(event.target.value)
  }

  const submitHandler = async event => {
    event.preventDefault()

    const data = await fetch(
      'https://api-development.rodeoworld.co.uk/venues/list',
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const response = data.json()
    localStorage.setItem('user-info', JSON.stringify(response))
    // history.push()
    console.log(response)

    // axios
    //   .post('https://api-development.rodeoworld.co.uk/businesses/login', {
    //     email,
    //     password
    //   })
    //   .then(response => {
    //     console.log(response.status)
    //   })
    //   .catch(error => console.log(error))

    setEmail('')
    setPassword('')
  }

  return (
    <div className='wrapper fadeInDown'>
      <div id='formContent'>
        <div className='fadeIn first'>
          <img src={logo} width='100px' alt='User Icon' />
        </div>

        <form onSubmit={submitHandler}>
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

export default Login
