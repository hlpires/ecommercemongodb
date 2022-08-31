import React, {useState,useEffect}from 'react'
import Router from 'next/router'


const Produtos = () => {

const [produtos,setProdutos] = useState()


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




  return (
    <div className = 'produtos'>
        <div className = 'position'>
        <div className = 'filterBox'>
              <div className = 'filterItem' onClick = {() =>{setProdutos(produtos.filter(({price}) => price > 10000))}}><p className = 'filterText'>Anéis</p></div>
              <div className = 'filterItem'><p className = 'filterText'>Colares</p></div>
              <div className = 'filterItem'><p className = 'filterText'>Pulseiras</p></div>
              <div className = 'filterItem'><p className = 'filterText'>Brincos</p></div>
            </div>

        {(() => {
           if (typeof produtos !== 'undefined') {
                return ( 
                  <div>
                  <div className = 'tittleHandler'><h3>{produtos.length + '\t Produtos'}</h3></div>
                  {produtos.map(({name,imageurl,price}) => (
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