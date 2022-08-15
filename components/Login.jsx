import React, {useEffect} from 'react'
import { useSession, signIn, signOut} from "next-auth/react"


const Login = () => {
  const { data: session } = useSession()


  const jobs = {
    name:'celular',
    preço:'1200',
    imageurl:'dasodkoasdfkoasdkoasdkoa',
    quantidadeDisp:'22',
    descritivo:'ASKOAKOSKOASKOASOKASKOASKOASKOAKOSo'
  }



const pegarJob = async () => {
    fetch('/api/pegarjob',{
    
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(jobs),
      
    });
   
  }


  if (session) {
    return (
      <div className = 'login'>
        <div className = 'position'>
          
          
          <div className = 'loginBox'>
           Signed in as {session.user.name} 
           <button onClick={() => signOut()}>Sign out</button>
          </div>
          
          
          <div className = 'insertProduct'>
            <form>
               <input></input>
               <button onClick={() => pegarJob()}></button>
            </form>  
          </div>
          
          <div className = 'productList'>

          </div>


        </div>
      </div>     
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