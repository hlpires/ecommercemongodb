import React, { useState, useEffect } from 'react';
import ringImage from '../img/ring.png';
import Image from 'next/image';
import Logo from '../img/newLogo.png';
import { Link } from 'react-scroll'
import MathImage from '../img/math.png'; // Renomeei a variável para evitar conflito com a importação do módulo Math

const Callout = () => {
    const [animate2, setAnimation2] = useState({
        rotate: 'translate(-50%, -50%) ',
        opacity: '0'
    });

    useEffect(() => {
        setTimeout(() => {
            setAnimation2({
                rotate: 'translate(-50%, -50%) rotate(180deg)',
                opacity: '0.4'
            });
        }, 300);
    }, []);

    return (
        <div
            style={{
                height: '100vh',
                maxHeight: '1500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                }}
            >
                <Image src={Logo} width={500} height={305} />
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: animate2.rotate,
                    opacity: animate2.opacity,
                    zIndex: 0,
                    transition: '1s',

                }}
            >
                <Image src={MathImage} width={650} height={545} />
            </div>

            <Link to="produtos" spy={true} smooth={true} offset={-100} duration={600}>
                <div
                    className='textCall'
                    onMouseEnter={(e) => e.target.style.filter = 'brightness(1.5)'}
                    onMouseLeave={(e) => e.target.style.filter = 'brightness(1)'}
                    style={{
                        height: '40px',
                        width: '200px',
                        marginLeft: '-100px',
                        position: 'absolute',
                        bottom: '250px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#fae4de',
                        color: 'black',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'  // Adiciona uma sombra
                    }}>Ver produtos</div>
            </Link >
        </div>
    );
};

export default Callout;