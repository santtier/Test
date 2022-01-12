import { useState, useEffect } from 'react'

import LoginForm from './LoginForm'
import VenuesList from '../Venues/VenuesList'
import { setToken } from '../../services/offersVenues'

function Login () {
  const [user, setUser] = useState(null)

  //Este efecto es para leer el local Storage y saber si el usuario esta con la sesión iniciada y asi cada vez que recargue la pagina no tiene que poner el email y la password
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      setToken(user.token)
    }
  }, [])

  const handleLogout = () => {
    setUser(null)
    setToken(user.token)
    window.localStorage.removeItem('loggedUser')
  }

  const saveUser = user => {
    setUser(user)
  }

  return (
    <div>
      {user ? (
        <VenuesList onLogout={handleLogout} userObject={user} />
      ) : (
        <LoginForm onSaveUser={saveUser} />
      )}
    </div>
  )
}

export default Login
