import React, {useState,useEffect}from 'react'

const Produtos = () => {

const [produtos,setProdutos] = useState()



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

console.log(produtos)


  return (
    <div className = 'produtos'>
        <div className = 'position'>
        {(() => {
           if (typeof produtos !== 'undefined') {
                return ( 
                  <div>
                  
                  {produtos.map(({name,imageurl,preco}) => (
                   <div className = 'produtosBox'>
                     <img className ='produtoImg' src={imageurl} width={500} height={500} />
                     <p className = 'text'> {name} </p>
                     <p className = 'text'>R$ {preco} </p>
                     </div>          
                  ))} 
                  
                  {/*//live.staticflickr.com/65535/52290445401_a0d03184e9_w.jpg */}
                  {/*//live.staticflickr.com/65535/52289475477_083f1c7c94_w.jpg */}
                  </div>
           )}})()} 

        </div>
    </div>
  )
}

export default Produtos