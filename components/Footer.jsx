import React from 'react'
import Link from 'next/link'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Logo from '../img/preenchido.png'
import Image from 'next/image'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='footer'>
      <div className='position'>
        <div className='footerBox'>
          <div style={{ marginLeft: '30px', float: 'left', left: 20, marginTop: '60px' }}>
            <Link href="/"><Image src={Logo} width={130} height={45} /></Link>
          </div>
          <div className='menuBox' style={{ overflow: 'hidden', position: 'relative', marginTop: '150px' }}>
            <Link href='/cart'><p className='menuBoxText'>Carrinho</p></Link>
            <Link href='/signin ' ><p className='menuBoxText'>Login</p></Link>
            <div style={{ position: 'absolute', left: '50%', bottom: '10px' }} onClick={scrollToTop}>
              <ArrowCircleUpIcon style={{ fontSize: '50px', cursor: 'pointer' }} />
            </div>
          </div>
          <div className='artBox'>

          </div>
          <div className='devByBox'><p className='devByText'>Desenvolvido por Higor Luis Pires © Safire 2022. Todos os direitos reservados. Imagens meramente ilustrativas. </p></div>

        </div>
      </div>
    </div>
  )
}

export default Footer