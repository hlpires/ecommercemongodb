import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Carrousel = () => {
  
  
const [cartItens,setCartItens] = useState([])
  
const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
     autoplaySpeed: 2000

  };
  useEffect(() => {
    fetch('/api/pegarproduto',{
     method: 'GET',
     headers: {'Content-Type': 'application/json'},
   })
   .then(res =>{
     return res.json();
   })
   .then(data =>{
    setCartItens(data)
   })
 }, []);
 



return (
   <div className = 'carrousel'>
     <div className ='carrouselTittle'>Outros Produtos</div>
    <Slider {...settings}>
     {cartItens.map(({name,imageurl,price}) => (
      <div className = 'produtosBoxCarrousel'>  
      <img className ='produtoImgCarrousel' src={imageurl} width={500} height={500} />
      <div className ='infoHolder'>
       <p className = 'textCarrousel'> {name} </p>
       <p className = 'textCarrousel'>R$ {price} </p>
       <p className = 'textCarrousel'>Até 10 vezes sem juros </p>
        </div>
        </div>        
     ))}
    </Slider> 
   </div>
  )
}

export default Carrousel