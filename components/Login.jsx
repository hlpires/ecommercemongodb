import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <div className = 'login'>
      <div className = 'position'>
        <div className = 'loginBox'>
            <form action ='/api/register' method = 'POST'>  
                <input placeholder = 'Login' type= 'email' name = 'email'></input>
                <input placeholder = 'Senha' type= 'password' name = 'password'></input>
                {/*<input placeholder = 'CPF'></inputaaa>*/}
                <button type ='submit' value = 'Register'></button>
            </form>
        </div>
      </div>
    </div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )

 
}

export default Login