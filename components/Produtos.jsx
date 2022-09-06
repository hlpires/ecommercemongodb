import React, {useState,useEffect}from 'react'
import Router from 'next/router'
import pulseira from '../img/pulseira.png'
import aneis from '../img/anéis.png'
import colares from '../img/colares.png'
import brinco from '../img/brinco.png'
import Image from 'next/image'

const Produtos = () => {

const [produtos,setProdutos] = useState()
const [produtosF,setProdutosF] = useState()

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




  return (
    <div className = 'produtos'>
        <div className = 'position'>
          <div className = 'filterProductTittle'>Navegue por Categoria</div>
          <div className = 'subProductTittle'>Toda Joia conta uma Historia, escolha a sua</div>
          <div className = 'styleProductTittle'></div>
        <div className = 'filterBox'>
              <div className = 'filterItem' onClick = {() =>{filtro('A')}}><Image className ='filterText' src={pulseira} alt="" /></div>
              <div className = 'filterItem' onClick = {() =>{filtro('C')}}><Image className ='filterText' src={aneis} alt="" /></div>
              <div className = 'filterItem' onClick = {() =>{filtro('P')}}><Image className ='filterText' src={brinco} alt="" /></div>
              <div className = 'filterItem' onClick = {() =>{filtro('B')}}><Image className ='filterText' id ='colares' src={colares} alt="" /></div>
            </div>
            <div className = 'itemNameBox'>
              <div className = 'itemName' onClick = {() =>{filtro('A')}}><p className ='filterText'  alt="" />Pulseiras</div>
              <div className = 'itemName' onClick = {() =>{filtro('C')}}><p className ='filterText'  alt="" />Anéis</div>
              <div className = 'itemName' onClick = {() =>{filtro('P')}}><p className ='filterText'  alt="" />Brincos</div>
              <div className = 'itemName' onClick = {() =>{filtro('B')}}><p className ='filterText'  alt="" />Colares</div>
            </div>

        {(() => {
           if (typeof produtosF !== 'undefined') {
                return ( 
                  <div>
                  <div className = 'tittleHandler'><h3>{produtosF.length + '\t Produtos'}</h3></div>
                  {produtosF.map(({name,imageurl,price}) => (
                   <div className = 'produtosBox' onClick={() => sendProdutos(name,imageurl,price)}>
                     
                     <img className ='produtoImg' src={imageurl} width={500} height={500} />
                     <div className ='infoHolder'>
                       <p className = 'text'> {name} </p>
                       <p className = 'text'>R$ {price} </p>
                     </div>
                     <div className ='comprarProduto'><p className = 'text1'>Comprar</p></div>
                     </div>

                     
                             
                  ))} 
                  

                  </div>
           )}})()} 

        </div>
        
    </div>
  )
}

export default Produtos