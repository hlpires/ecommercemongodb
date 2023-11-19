import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';
import Logo from '../img/preenchido.png'
import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [headerStyle, setHeaderStyle] = useState({
    height: '80px',
    position: 'relative',
    borderBottom: '2px solid #ddd',
    boxShadow: 'none',
    transition: 'all 0.3s ease-in-out', // Adiciona uma transição suave
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 80) {
        setHeaderStyle({
          height: '80px',
          position: 'fixed',
          borderBottom: '2px solid #ddd',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Aumenta a sombra quando fixo
          transition: 'all 0.3s ease-in-out', // Mantém a transição suave
        });
      } else {
        setHeaderStyle({
          height: '80px',
          position: 'relative',
          borderBottom: '2px solid #ddd',
          boxShadow: 'none',
          transition: 'all 0.3s ease-in-out', // Mantém a transição suave
        });
      }
    };

    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o evento de scroll quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='header' style={headerStyle}>
      <div className='position'>
        <div className='headerBox' style={{ overflow: 'hidden', display: 'flex', position: 'relative' }}>

          <div style={{ marginTop: '10px', float: 'left', left: 20, position: 'absolute', cursor: 'pointer' }}>
            <Link href="/"><Image src={Logo} width={130} height={45} /></Link>
          </div>
          <PersonIcon className='iconsShow' style={{ position: 'absolute', right: 180, top: 25, fontSize: '30px', cursor: 'pointer' }} onClick={() => signIn('credentials', { redirect: true })} ></PersonIcon>
          <Link href='/cart'><ShoppingCartIcon className='iconsShow' saale={60} style={{ position: 'absolute', fontSize: '28px', right: 40, top: 25, width: '100px', cursor: 'pointer' }} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;