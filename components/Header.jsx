import React from 'react'
import { useSession, signIn, signOut} from "next-auth/react"

const Header = () => {
  return (
    <div className ='header'>
        <div className ='position'>
            <div className ='headerBox'>
                  <a href="/"><div className = 'logo'></div></a>      
                   <div onClick={() => signIn('credentials',{redirect:true})} className = 'loginButton'></div>
                   <a href= '/cart' className = 'carrinhoButton'></a>
              </div>
        </div>
    </div>
  )
}

export default Header