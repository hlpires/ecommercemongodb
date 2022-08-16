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




  return (
    <div className = 'produtos'>
        <div className = 'position'>
        {(() => {
           if (typeof produtos !== 'undefined') {
                return ( 
                  <div className = 'productList'>
                  
                  {produtos.map(({name}) => (
                   <div className = 'produtosBox'>
                     <img className ='produtoImg' src="//live.staticflickr.com/65535/52290937050_33ecb279ee_w.jpg" width={500} height={500} />
                     <p className = 'text'> {name} </p></div>          
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