import React from 'react'

const Login = () => {




  return (
  <div className = 'login'>
      <div className = 'position'>
        <div className = 'loginBox'>
            <form action ='/api/register' method = 'POST'>  
                <input placeholder = 'Login' type= 'email' name = 'email'></input>
                <input placeholder = 'Senha' type= 'password' name = 'password'></input>
                {/*<input placeholder = 'CPF'></input>*/}
                <button type ='submit' value = 'Register'></button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login