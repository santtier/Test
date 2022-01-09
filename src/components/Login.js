import { useEffect, useState } from 'react'
import LoginForm from './LoginForm'

function Login () {
  const [user, setUser] = useState(null)

  //Este efecto es para leer el local Storage y saber si el usuario esta con la sesión iniciada

  // useEffect(() => {
  //   const loggedUserJSON = window.localStorage.getItem('loggedUser')
  //   if (loggedUserJSON) {
  //     const user = JSON.parse(loggedUserJSON)
  //     setUser(user)
  // Y si queremos que la lista tengan el token tendríamos que hacer setToken y pasarle el token. Con esto logrmos no tener que iniciar sesión cada vex que refrescamos la página
  //   }
  // }, [])

  const saveUser = user => {
    setUser(user)
  }

  return (
    <div>
      <LoginForm onSaveUser={saveUser} />
      {/* {user === null && <LoginForm onSaveUser={saveUser} />} */}

      {/* Acá iría la lista de las venues */}
      {/* {user !== null && <ul></ul>} */}
    </div>
  )
}

export default Login
