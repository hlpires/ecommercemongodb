import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import Router from 'next/router'


const Carrousel = () => {
  
  
const [cartItens,setCartItens] = useState([])
const [settings,setSettings] = useState()

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






useEffect(() => {

if(window.innerWidth>1350){
setSettings({
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
   
  })}
  else if(window.innerWidth<=1349 && window.innerWidth>=760){
    setSettings({
      dots:false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
     
    })

  }
  else if(window.innerWidth<=759){
    setSettings({
      dots:false,
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
     <div className = 'position'>
 <div className = 'filterProductTittle'>Aproveite</div>
          <div className = 'subProductTittle'>T Para cada tipo de ocasião uma jóia, apenas brilhe</div>
          <div className = 'styleProductTittle'></div>
    <Slider {...settings}>
     {cartItens.map(({name,imageurl,price}) => (
      <div style = {{ width: 300 }} className = 'produtosBoxCarrousel' key = {'1'} onClick = {() => sendProdutos(name,imageurl,price)}>  
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
   </div>
  )
}

export default Carrousel