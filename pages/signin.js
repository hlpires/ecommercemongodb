import React, {useEffect} from 'react'
import { getCsrfToken } from "next-auth/react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSession, signIn, signOut} from "next-auth/react"
import { useRouter } from 'next/router'

export default function SignIn({ csrfToken }) {

const router = useRouter()
const { data: session } = useSession()

useEffect(() => {
console.log(session)
if(typeof session !== 'undefined' && session !== null){
router.push('/areausuario')
}
}, [session]);

 const entrarDemo = () =>{
fetch('/api/auth/callback/credentials',{
    
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        csrfToken: csrfToken,
        username:'monark',
        password: '1234'
      }),
  });

 }


  return (
   <div>
     <Header/>
    <div className = 'loginPage'>
      <div className = 'loginAuth'>

      <div className = 'loginTittleHandler'><p className ='tittleSlug'>Login</p></div>
       <form method="post" action="/api/auth/callback/credentials">
         <input className = 'input' name="csrfToken" type="hidden" defaultValue={csrfToken} />
         <input className = 'input' name="username" type="text" placeholder = 'Login' />
         <input className = 'input' name="password" type="password"  placeholder = 'Senha' />
         <button className = 'buttonLogin' type="submit">Entrar</button>
         <button className = 'buttonLogin' onClick ={entrarDemo} type="submit">Conta Demo</button>
        </form>
      </div>
    </div>
   </div> 
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

