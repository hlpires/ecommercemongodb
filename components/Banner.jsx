import React from 'react'
import Image from 'next/image';
import wave from '../img/wave.png'
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='bannerShow' style={{ background: '#17171b', marginTop: '-300px', position: 'relative' }}  >
      <div style={{ background: '#17171b', marginTop: '-100px', position: 'absolute', top: '0px', backgroundColor: 'white', height: '200px', width: '100vw' }}  ></div>
      <div style={{ width: '102vw', marginTop: '-100px', maxHeight: '500px', }}>
        <Image
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }} src={wave} fill height={460}></Image>
      </div>
      <div style={{ marginLeft: '10%', marginTop: '30px', marginBottom: '120px', width: '80%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', width: '1330px', marginTop: '2%', marginLeft: '100px' }} >
          <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'linear-gradient(to right,#35e4ee,#27edd5,#5df4af,#97f582,#d2f254);', display: 'flex', width: '100%', borderRadius: '15px', marginBottom: '10px' }}>
              {/* Conteúdo da primeira div aqui */}
              <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className='bannerRing' style={{ width: '300px', height: '260px', alignSelf: 'center', marginRight: '20px' }}></div>
              </div>
              <div style={{ width: '50%', float: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ marginTop: '37px', fontWeight: 'bold', fontSize: '60px' }}>É um novo anel!</h1>
                <p style={{ marginTop: '27px', fontSize: '24px', fontSize: '26px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. I nventore aperiam commodi corporis officiis quas quidem omnis praesentium obcaecati.</p>

                <button style={{ marginTop: '27px', marginBottom: '27px', fontSize: '18px', fontWeight: 'bold', width: '200px', height: '50px', backgroundColor: 'black', color: 'white', marginRight: '100px' }}>Comprar</button>

              </div>
            </div>
            <div style={{ borderRadius: '15px', position: 'relative', overflow: 'hidden', width: '100%', height: '350px', marginTop: '20px' }}>
              <iframe
                style={{ position: 'absolute', top: -60, left: '-10%', width: '120%', height: '130%' }}
                id="vimeoIframe"
                src="//player.vimeo.com/video/468857457?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;muted=true"
                allowFullScreen={false}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          <div style={{ height: '100%', width: '40%', marginLeft: '20px' }}>
            <div className='backgroundBanner3' style={{ backgroundColor: 'blue', height: '100%', borderRadius: '15px', }}></div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Banner