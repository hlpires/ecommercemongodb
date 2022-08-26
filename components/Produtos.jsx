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
        {(() => {
           if (typeof produtos !== 'undefined') {
                return ( 
                  <div >
                  <div className = 'tittleHandler'><h3>Produtos</h3></div>
                  {produtos.map(({name,imageurl,price}) => (
                   <div className = 'produtosBox' onClick={() => sendProdutos(name,imageurl,price)}>
                     
                     <img className ='produtoImg' src={imageurl} width={500} height={500} />
                     <p className = 'text'> {name} </p>
                     <p className = 'text'>R$ {price} </p>
                     </div>

                     
                             
                  ))} 
                  

                  </div>
           )}})()} 

        </div>
        
    </div>
  )
}

export default Produtos