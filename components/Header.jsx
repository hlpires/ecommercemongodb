import React from 'react'
import { useSession, signIn, signOut} from "next-auth/react"
import Link from 'next/link'



const Header = () => {
  return (
    <div className ='header'>
        <div className ='position'>
            <div className ='headerBox'>
                  <Link href="/"><div className = 'logo'></div></Link>      
                   <div className ='headerButtons' onClick={() => signIn('credentials',{redirect:true})} className = 'loginButton'></div>
                   <Link href="/"><div className = 'carrinhoButton'></div></Link>      
              </div>
        </div>
    </div>
  )
}

export default Header