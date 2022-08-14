import React, {useEffect} from 'react'
import { useSession, signIn, signOut} from "next-auth/react"


const Login = () => {
  const { data: session } = useSession()


  const jobs = {
    elo:'prata',
    duo:false,
    discord:false,
    elofinal:'bronze'
  }

 useEffect(() => {
  fetch('/api/register',{
    
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(''),
    
  });
   
  }, []);


const pegarJob = async () => {
    fetch('/api/pegarjob',{
    
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(jobs),
      
    });
   
  }


  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <button onClick={() => pegarJob()}></button>
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