import React, {useState,useEffect}from 'react'
import Router from 'next/router'


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
        <div className = 'filterBox'>
              <div className = 'filterItem' onClick = {() =>{filtro('A')}} ><p className = 'filterText'>Anéis</p></div>
              <div className = 'filterItem' onClick = {() =>{filtro('C')}}><p className = 'filterText'>Colares</p></div>
              <div className = 'filterItem' onClick = {() =>{filtro('P')}}><p className = 'filterText'>Pulseiras</p></div>
              <div className = 'filterItem' onClick = {() =>{filtro('B')}}><p className = 'filterText'>Brincos</p></div>
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