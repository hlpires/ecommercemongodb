import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import Router from 'next/router'



const CarrouselSlug = () => {
  
  
const [cartItens,setCartItens] = useState([])


const sendProdutos = (name,imageurl,price) =>{
  
  
    Router.push({
      pathname: "/produtos/[slug]",
      query: { name,imageurl,price,slug:'slug'}
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
  
const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
   <div className = 'carrouselSlug'>
 <div className = 'filterProductTittle'>Aproveite</div>
          <div className = 'subProductTittle'>Toda Joia conta uma Historia, escolha a sua</div>
          <div className = 'styleProductTittle'></div>
    <Slider {...settings}>
     {cartItens.map(({name,imageurl,price}) => (
      <div style = {{ width: 300 }} className = 'produtosBoxCarrouselSlug' onClick ={() => sendProdutos(name,imageurl,price)}>  
      <img className ='produtoImgCarrouselSlug' src={imageurl} width={500} height={500} />
    </div>        
     ))}
    </Slider> 
   </div>
  )
}

export default CarrouselSlug