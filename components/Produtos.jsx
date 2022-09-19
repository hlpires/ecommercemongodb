import React, {useState,useEffect}from 'react'
import Router from 'next/router'
import pulseira from '../img/pulseira.png'
import aneis from '../img/anéis.png'
import colares from '../img/colares.png'
import brinco from '../img/brinco.png'
import Image from 'next/image'
import Carrousel from './Carrousel'




const Produtos = () => {

const [produtos,setProdutos] = useState()
const [produtosF,setProdutosF] = useState()
const [showMore, setShowMore] = useState(false);
const [showButton,setShowButton] = useState('');
const scrollToTop = () => {
  const documento = document.getElementsByClassName('produstosHolder')
  const posicao = documento[0].offsetTop
  console.log(posicao)
 setTimeout( function(){window.scrollTo(0,posicao-200);},200)
};
const mystyle = {
display:showButton
}


const sendProdutos = (name,imageurl,price) =>{
  
  
  Router.push({
    pathname: "/produtos/[slug]",
    query: { name,imageurl,price,slug:'slug'}
  },)     
  
}


useEffect(() => {
   fetch('/api/pegarproduto',{
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
  .then(res =>{
    return res.json();
  })
  .then(data =>{
   setProdutos(data)
  })
}, []);

useEffect(() => {
setProdutosF(produtos)
}, [produtos]);

const filtro = (letra) =>{
  setProdutosF(produtos.filter(({name}) => name.startsWith(letra)))
}

useEffect(() => {
  if(produtosF)
if(produtosF.length<5){
setShowButton('none')
}
}, [produtosF]);

  return (
    <div className = 'produtos'>
        <div className = 'position'>
          <div className = 'filterProductTittle'>Navegue por Categoria</div>
          <div className = 'subProductTittle'> Para cada tipo de ocasião uma jóia, apenas brilhe</div>
          <div className = 'styleProductTittle'></div>
        <div className = 'filterBox'>
         
              <div className = 'filterItem' onClick = {() =>{filtro('P')}}><Image className ='filterText' onClick={scrollToTop} src={pulseira} alt="" /></div>
              <div className = 'filterItem' onClick = {() =>{filtro('A')}}><Image className ='filterText' onClick={scrollToTop} src={aneis} alt="" /></div>
              <div className = 'filterItem' onClick = {() =>{filtro('B')}}><Image className ='filterText' onClick={scrollToTop} src={brinco} alt="" /></div>
              <div className = 'filterItem' onClick = {() =>{filtro('C')}}><Image className ='filterText' onClick={scrollToTop} id ='colares' src={colares} alt="" /></div>
            </div>
            <div className = 'itemNameBox'>
              <div className = 'itemName' onClick = {() =>{filtro('A')}}><p className ='filterText'  alt="" />Pulseiras</div>
              <div className = 'itemName' onClick = {() =>{filtro('C')}}><p className ='filterText'  alt="" />Anéis</div>
              <div className = 'itemName' onClick = {() =>{filtro('P')}}><p className ='filterText'  alt="" />Brincos</div>
              <div className = 'itemName' onClick = {() =>{filtro('B')}}><p className ='filterText'  alt="" />Colares</div>
            </div>
            <div className = 'filterProductTittle'>Nossos Produtos</div>
          <div className = 'subProductTittle'> Para cada tipo de ocasião uma jóia, apenas brilhe</div>
          <div className = 'styleProductTittle'></div> 

        {(() => {
           if (typeof produtosF !== 'undefined') {
                return ( 
                  <div className = 'produstosHolder'>
                  
                  {produtosF.slice(0,8).map(({name,imageurl,price}) => (
                   <div key = {'1'} className = 'produtosBox' onClick={() => sendProdutos(name,imageurl,price)}>
                     
                     <img className ='produtoImg' src={imageurl} width={500} height={500} />
                     <div className ='infoHolder'>
                       <p className = 'text'> {name} </p>
                       <p className = 'text'>R$ {price} </p>
                     </div>
                     <div className ='comprarProduto'><p className = 'text1'>Comprar</p></div>
                     </div>
                  ))} 
                  
                  {showMore && produtosF.slice(8).map(({name,imageurl,price}) => (
                   <div key = {'1'}  className = 'produtosBox' onClick={() => sendProdutos(name,imageurl,price)}>
                     
                     <img className ='produtoImg' src={imageurl} width={500} height={500} />
                     <div className ='infoHolder'>
                       <p className = 'text'> {name} </p>
                       <p className = 'text'>R$ {price} </p>
                     </div>
                     <div className ='comprarProduto'><p className = 'text1'>Comprar</p></div>
                     </div>
                  ))}  
                   <div style = {mystyle} className ='buttonBox'><button type="button" className="button" onClick={() =>{
                     setShowButton('none')
                     setShowMore(true)}}>Carregar mais </button></div>
                  </div>
           )}})()} 
            <Carrousel/>
        </div>
        
    </div>
  )
}

export default Produtos