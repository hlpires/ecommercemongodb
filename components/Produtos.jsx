import React, {useState,useEffect}from 'react'

const Produtos = () => {

const [produtos,setProdutos] = useState()

const handleClick = event => {
    console.log(event.currentTarget);
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
                   <div className = 'produtosBox'onClick={handleClick} >
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