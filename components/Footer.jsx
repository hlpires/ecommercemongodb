import React from 'react'
import Link from 'next/link'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className = 'footer'>
        <div className = 'position'>
          <div className = 'footerBox'>
              <div className = 'pagueBox'></div>
              <div className ='menuBox'>
                  <Link href = '/cart'><p className = 'menuBoxText'>Carrinho</p></Link>
                  <Link href = '/signin ' ><p className = 'menuBoxText'>Login</p></Link>
                 <div className ='footerButton' onClick ={scrollToTop}><p className = 'menuBoxText1'> </p></div>
              </div>
              <div className ='artBox'>
                
              </div>
              <div className = 'devByBox'><p className = 'devByText'>Desenvolvido por Higor Luis Pires © Safire 2022. Todos os direitos reservados. Imagens meramente ilustrativas. </p></div>

          </div>
        </div>
    </div>
  )
}

export default Footer