import React,{useState} from 'react'
import {useRouter} from 'next/router'
import Header from '../../components/Header'
import Produtos from '../../components/Produtos'
import Cart from '../../components/Cart'

const produtosSlug = () => {
  

  const router =  useRouter()
  const {query:{name,imageurl,preco}} = router
  const [numero,setNumero] = useState(1)
  const [cart,setCart] = useState(false)
  const [cartData,setCartData] = useState([])


  const incNum = () => {
    setNumero((prevQty) => prevQty + 1);
  }

  const decNum = () => { 
    setNumero((prevQty) => prevQty - 1);
  }
  
  const adicionar = () =>{
    setCartData((prevState) => ([
      {name,imageurl,preco,numero},
      ...prevState
      
      ]));

      setCart(true)
      


    
    
  }


  return (
    
    <div>
    <Header/>
      
      <div className =' slug'>
       <div className = 'position'>
         <div className = 'slugBox'>
           <div className ='imageBox'>
             
             <img className ='image' src ={imageurl}></img>
             </div>
           <div className ='details'>
           <div className ='detailsBox'>
           <p className ='tittleSlug'>{name}</p>
           <p className ='priceSlug'><span className = 'real'>R$</span>{preco+',00'}</p>
           <div className ='quantidadeBox'>
             <div className ='counter' id ='counter1' onClick = {decNum}></div>
             <div className = 'numero'>{numero}</div>
             <div className ='counter'  id ='counter2' onClick = {incNum}></div>
           </div>
           <div className = 'comprarButton' onClick = {adicionar}><h4>Adicionar a Sacola</h4></div>
           </div>
           </div>

         </div>
       </div>
      </div>
      <Cart open={cart} cartProps={cartData} onClear = {() => {setCartData([])}} onClose={() => setCart(false)}/>
      <Produtos/>
    </div>
  )
}

export default produtosSlug