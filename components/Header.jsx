import React from 'react'


const Header = () => {
  return (
    <div className ='header'>
        <div className ='position'>
            <div className ='headerBox'>
                  <a href="/"><div className = 'logo'></div></a>      
                  <a href="/areausuario"> <div className = 'loginButton'></div></a>
              </div>
        </div>
    </div>
  )
}

export default Header