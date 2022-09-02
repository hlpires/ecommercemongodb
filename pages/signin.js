import React, {useEffect,useState} from 'react'
import { getCsrfToken } from "next-auth/react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSession, signIn, signOut,getSession} from "next-auth/react"
import { useRouter } from 'next/router'

export default function SignIn({ csrfToken }) {

const router = useRouter()
const axios = require('axios').default;
const [entrar,setEntrar] = useState()

{/*const { data: session } = useSession()
useEffect(() => {
if(typeof session !== 'undefined' && session !== null){
 console.log('logado')
}
}, [session]); */}


 const entrarDemo = () =>{
   console.log('try to fetch')
   
  axios.post('/api/auth/callback/credentials',{ 
        csrfToken: csrfToken,
        username:'funcionario',
        password: '2442424'
  });
 
 }



  return (
   <div>
     <Header/>
    <div className = 'loginPage'>
      <div className = 'loginAuth'>

      <div className = 'loginTittleHandler'><p className ='tittleSlug'>Login</p></div>
       <form method="post" >
         <input className = 'input' name="csrfToken" type="hidden" defaultValue={csrfToken} />
         <input className = 'input' name="username" type="text" placeholder = 'Login' />
         <input className = 'input' name="password" type="password"  placeholder = 'Senha' />
         <button className = 'buttonLogin' type="submit">Entrar</button>
         <button className = 'buttonLogin' onClick ={entrarDemo}>Conta Demo</button>
         <button className = 'buttonLogin' onClick ={()=>{signOut({callbackUrl: 'http://localhost:3000/signin' })}} type="submit">Sair</button>
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

