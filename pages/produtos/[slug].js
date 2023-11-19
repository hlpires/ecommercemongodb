import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import CarrouselSlug from '../../components/CarrouselSlug'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuid } from 'uuid';

const ProdutosSlug = () => {


  const router = useRouter()
  const { query: { name, imageurl, price } } = router
  const [numero, setNumero] = useState(1)
  const [cart, setCart] = useState(false)
  const [cartData, setCartData] = useState([])
  const [dataJson, setDataJson] = useState()
  const [passData, setPassData] = useState()
  const id = uuid();

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('cartitens'));
    if (data !== null) {
      setDataJson(data)
    }
  }, []);



  const incNum = () => {

    setNumero((prevQty) => prevQty + 1);

  }

  const decNum = () => {
    if (!numero < 0) {
      setNumero((prevQty) => prevQty - 1);
    } else {
      setNumero(1)
    }
  }

  const adicionar = () => {
    setCartData((prevState) => ([
      { name, imageurl, price, numero, id },
      ...prevState

    ]));

    setCart(true)
  }


  useEffect(() => {
    if (typeof dataJson !== 'undefined') {
      setPassData([...dataJson, ...cartData])
    } else {
      setPassData(cartData)
    }
  }, [cartData]);

  useEffect(() => {
    if (passData !== undefined) {
      window.localStorage.setItem('cartitens', JSON.stringify(passData))

    }

  }, [passData])



  const removeItem = (id) => {

    setCartData((state) => state.filter((item) => item.id !== id))
    setDataJson((state) => state.filter((item) => item.id !== id))
  }



  return (


    <div>
      <Header />

      <div className='slug'>
        <div className='position'>
          <div className='slugBox'>
            <div className='imageBox'>

              <img className='image' src={imageurl}></img>
            </div>
            <div className='details'>
              <div className='detailsBox'  >
                <p className='tittleSlug'>{name}</p>
                <div className='slugArt'></div>
                <div className='priceQuantidade'>
                  <p className='priceSlug'><span className='real'>R$</span>{price + ',00'}</p>
                  <div className='quantidadeBox'>
                    <div className='counter' id='counter1' onClick={decNum}></div>
                    <div className='numero'>{numero}</div>
                    <div className='counter' id='counter2' onClick={incNum}></div>
                  </div>
                </div>
                <div className='comprarButton' style={{ height: '50px' }} onClick={adicionar}><h4>Adicionar ao carrinho</h4></div>

                <CarrouselSlug />
              </div>
            </div>

          </div>


        </div>
      </div>
      <Cart open={cart} cartProps={passData} removeItem={removeItem} onClear={() => {
        setCartData([])
        setDataJson([])
      }} onClose={() => setCart(false)} />
      <Footer />
    </div>
  )
}

export default ProdutosSlug