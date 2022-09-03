import React,{useState} from 'react'
import {useRouter} from 'next/router'
import Header from '../../components/Header'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const produtosSlug = () => {
  

  const router =  useRouter()
  const {query:{name,imageurl,price}} = router
  const [numero,setNumero] = useState(1)
  const [cart,setCart] = useState(false)
  const [cartData,setCartData] = useState([])

  const [cartData1,setCartData1] = useState([
    {
      nome:'jailson',
      price:'2000',
      numero:'5',
      imageurl:'3123901290412i9'
    },
    {
      nome:'jailson',
      price:'2000',
      numero:'5',
      imageurl:'3123901290412i9'
    },
    {
      nome:'jailson',
      price:'2000',
      numero:'5',
      imageurl:'3123901290412i9'
    },
    {
      nome:'jailson',
      price:'2000',
      numero:'5',
      imageurl:'3123901290412i9'
    },
    {
      nome:'jailson',
      price:'2000',
      numero:'5',
      imageurl:'3123901290412i9'
    },


  ])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

  };


  const incNum = () => {
    setNumero((prevQty) => prevQty + 1);
  }

  const decNum = () => { 
    setNumero((prevQty) => prevQty - 1);
  }
  
  const adicionar = () =>{
    setCartData((prevState) => ([
      {name,imageurl,price,numero},
      ...prevState
      
      ]));

      setCart(true)
      
  }


  return (
    
    <div>
    <Header/>
      
      <div className ='slug'>
       <div className = 'position'>
         <div className = 'slugBox'>
           <div className ='imageBox'>
             
             <img className ='image' src ={imageurl}></img>
             </div>
           <div className ='details'>
           <div className ='detailsBox'>
           <p className ='tittleSlug'>{name}</p>
           <p className ='priceSlug'><span className = 'real'>R$</span>{price+',00'}</p>
           <div className ='quantidadeBox'>
             <div className ='counter' id ='counter1' onClick = {decNum}></div>
             <div className = 'numero'>{numero}</div>
             <div className ='counter'  id ='counter2' onClick = {incNum}></div>
           </div>
           <div className = 'comprarButton' onClick = {adicionar}><h4>Adicionar a Sacola</h4></div>
           </div>
           </div>

         </div>
         <Slider {...settings}>
         {cartData1.map(({name,imageurl,price}) => (
                   <div className = 'produtosBoxCarrousel'>
                     
                     <div className ='produtoImgCarrousel' src={imageurl} width={500} height={500} />
                     <div className ='infoHolder'>
                       <p className = 'text'> {name} </p>
                       <p className = 'text'>R$ {price} </p>
                     </div>
                     
                     </div>

                     
                             
                  ))}
          </Slider>        
       </div>
      </div>
      <Cart open={cart} cartProps={cartData} onClear = {() => {setCartData([])}} onClose={() => setCart(false)}/>
      <Footer/>
    </div>
  )
}

export default produtosSlug