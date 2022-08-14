import React, {useEffect} from 'react'
import { useSession, signIn, signOut} from "next-auth/react"

const Login = () => {
  const { data: session } = useSession()


 useEffect(() => {
  fetch('/api/register',{
    
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(''),
    
  });
   
  }, []);


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
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )

 
}

export default Login