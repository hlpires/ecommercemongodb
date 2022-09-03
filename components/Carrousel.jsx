import React,{useState,useEffect} from 'react'
import Slider from "react-slick";

const Carrousel = () => {

const [cartItens,setCartItens] = useState([])
  
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

  };

 
useEffect(() => {
const data = JSON.parse(window.localStorage.getItem('cartitens'));
if (data !== null){
    setCartItens(data)
              
    }
}, []);

console.log(cartItens)

return (
   <div>
    <Slider {...settings}>
     {cartItens.map(({name,imageurl,price}) => (
      <div className = 'produtosBoxCarrousel'>  
      <img className ='produtoImgCarrousel' src={imageurl} width={500} height={500} />
      <div className ='infoHolder'>
       <p className = 'text'> {name} </p>
       <p className = 'text'>R$ {price} </p>
        </div>
        </div>        
     ))}
    </Slider> 
   </div>
  )
}

export default Carrousel