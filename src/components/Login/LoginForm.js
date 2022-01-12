import { useState } from 'react'

import { setToken } from '../../services/offersVenues'
import loginService from '../../services/user'
import logo from '../../images/logo.png'
import './Login.css'

const LoginForm = props => {
  const [errorMessage, setErrorMessage] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailHandler = event => {
    setEmail(event.target.value)
  }

  const passwordHandler = event => {
    setPassword(event.target.value)
  }

  const loginHandler = async event => {
    event.preventDefault()

    try {
      const user = await loginService({
        email,
        password
      })
      props.onSaveUser(user)

      window.localStorage.setItem('loggedUser', JSON.stringify(user))

      setToken(user.token)

      setEmail('')
      setPassword('')
    } catch (e) {
      setErrorMessage(true)
      setTimeout(() => {
        setErrorMessage(false)
      }, 5000)
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

        {errorMessage && (
          <div className='alert alert-danger' role='alert'>
            Incorrect email or password
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginForm
