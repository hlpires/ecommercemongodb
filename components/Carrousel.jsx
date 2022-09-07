import React,{useState,useEffect} from 'react'
import Slider from "react-slick";

const Carrousel = () => {
  
  
const [cartItens,setCartItens] = useState([])


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
  
const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
   
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
 <div className = 'filterProductTittle'>Aproveite</div>
          <div className = 'subProductTittle'>Toda Joia conta uma Historia, escolha a sua</div>
          <div className = 'styleProductTittle'></div>
    <Slider {...settings}>
     {cartItens.map(({name,imageurl,price}) => (
      <div style = {{ width: 300 }} className = 'produtosBoxCarrousel'>  
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