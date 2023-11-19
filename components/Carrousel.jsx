import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import Router from 'next/router'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Carrousel = () => {


  const [cartItens, setCartItens] = useState([])
  const [settings, setSettings] = useState()

  const sendProdutos = (name, imageurl, price) => {


    Router.push({
      pathname: "/produtos/[slug]",
      query: { name, imageurl, price, slug: 'slug' }
    },)

  }

  function SampleNextArrow(props) {
    //const { className, style, onClick } = props;
    const className = 'carrouselButton'
    return (
      <div
        className={className}

      />
    );
  }

  function SamplePrevArrow(props) {
    const className = 'carrouselButton'
    return (
      <div
        className={className}

      />
    );
  }






  useEffect(() => {

    if (window.innerWidth > 1350) {
      setSettings({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,

      })
    }
    else if (window.innerWidth <= 1349 && window.innerWidth >= 760) {
      setSettings({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,

      })

    }
    else if (window.innerWidth <= 759) {
      setSettings({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,

      })
    }
  }, []);

  useEffect(() => {
    fetch('/api/pegarproduto', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCartItens(data)
      })
  }, []);




  return (
    <div className='carrousel carrouselShow' style={{ marginBottom: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', marginLeft: '0px' }}>
      <div className='position'>
        <div className='filterProductTittle' style={{ marginLeft: '18px', textAlign: 'left' }}>Aproveite</div>
        {/* <div className='subProductTittle'>T Para cada tipo de ocasião uma jóia, apenas brilhe</div> */}
        {/* <div className='styleProductTittle'></div> */}
        <Slider style={{ paddingRight: '70px' }} {...settings}>
          {cartItens.map(({ name, imageurl, price }) => (
            <div className='produtosBoxCarrousel' key={'1'} onClick={() => sendProdutos(name, imageurl, price)}>
              <img className='produtoImgCarrousel' src={imageurl} width={500} height={500} />
              <div className='infoHolder'>
                <p style={{ fontSize: '20px', fontWeight: 'bold' }} className='textCarrousel'> {name} </p>
                <p className='textCarrousel' style={{ color: 'grey' }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. I nventore aperiam commodi corporis officiis quas quidem
                </p>
                <div style={{ display: 'flex', width: '100%', position: 'relative', height: '70px' }}>
                  <div><p style={{ fontWeight: 'bold', position: 'absolute', top: '33px', left: '10px' }}>R$ {price} </p> </div>
                  <div style={{ border: '1px solid #ddd', width: '100px', height: '36px', position: 'absolute', top: '25px', right: '40px' }}>
                    <AddShoppingCartIcon style={{ color: 'green' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div >
      <div className='position'>
        {/* <div className='subProductTittle'>T Para cada tipo de ocasião uma jóia, apenas brilhe</div> */}
        {/* <div className='styleProductTittle'></div> */}
        <Slider style={{ paddingRight: '70px' }}{...settings}>
          {cartItens.reverse().map(({ name, imageurl, price }) => (
            <div className='produtosBoxCarrousel' key={'1'} onClick={() => sendProdutos(name, imageurl, price)}>
              <img className='produtoImgCarrousel' src={imageurl} width={500} height={500} />
              <div className='infoHolder'>
                <p style={{ fontSize: '20px', fontWeight: 'bold' }} className='textCarrousel'> {name} </p>
                <p className='textCarrousel' style={{ color: 'grey' }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. I nventore aperiam commodi corporis officiis quas quidem
                </p>
                <div style={{ display: 'flex', width: '100%', position: 'relative', height: '70px' }}>
                  <div><p style={{ fontWeight: 'bold', position: 'absolute', top: '33px', left: '10px' }}>R$ {price} </p> </div>
                  <div style={{ border: '1px solid #ddd', width: '100px', height: '36px', position: 'absolute', top: '25px', right: '40px' }}>
                    <AddShoppingCartIcon style={{ color: 'green' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div >
    </div >
  )
}

export default Carrousel