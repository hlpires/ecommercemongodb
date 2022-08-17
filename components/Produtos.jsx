import React, {useState,useEffect}from 'react'

const Produtos = () => {

const [produtos,setProdutos] = useState()
const [dataSlug,setDataSlug] = useState()

const sendProdutos = (name,imageurl,preco) =>{
  setDataSlug({name,imageurl,preco})
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
                  
                  {produtos.map(({name,imageurl,preco}) => (
                   <div className = 'produtosBox' onClick={() => sendProdutos(name,imageurl,preco)}>
                     {console.log(dataSlug)}
                     <img className ='produtoImg' src={imageurl} width={500} height={500} />
                     <p className = 'text'> {name} </p>
                     <p className = 'text'>R$ {preco} </p>
                     </div>          
                  ))} 
                  

                  </div>
           )}})()} 

        </div>
    </div>
  )
}

export default Produtos