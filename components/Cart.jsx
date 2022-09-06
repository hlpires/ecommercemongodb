import React, {useState,useEffect} from 'react'
import getStripe from '../lib/stripe'
import imagem from '../img/carrinhoside.png'

const cart = ({open,onClose,cartProps,onClear}) => {

if(open !== true){
  return null
}

const [apear,setApear] = useState()

const mystyle = {
  transform: apear
}

const [cartItens,setCartItens] = useState()
const [dataJson,setDataJson] = useState()



useEffect(() => {

if (cartProps){
  setDataJson(cartProps) 
}
}, []);


useEffect(() => {
  if(dataJson){
    setCartItens([...dataJson]) 
  }
  setApear('translate(-70%, 0)')
}, [dataJson])

useEffect(() => {
  if(cartItens !== undefined){
    window.localStorage.setItem('cartitens',JSON.stringify(cartItens))
  }
  
}, [cartItens])

const clear = () =>{
  window.localStorage.removeItem('cartitens')
  setCartItens([]);
  setDataJson([]);
}

const handleCheckout = async () => {
  
  const stripe = await getStripe();
  

  const response = await fetch('/api/checkout',{
    
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(cartItens),
    
  });

  const data = await response.json();

  stripe.redirectToCheckout({sessionId:data.id});
  
}



  return (
   
   
   <div className ='modalCart'>
     <div className = 'maaa' onClick = {onClose}></div>
        <div className= 'cart' style= {mystyle}>
          <div className= 'cartTittleBox'>
            <div className = 'art'></div>
            <h2>Carrinho</h2>
            {(() => {
               if (typeof cartItens !== 'undefined' && cartItens !== null) {
                 return(
            <h6>{cartItens.length}</h6>
                 )}
          })()} 
          </div>
         
            <div>

            {(() => {
               if (typeof cartItens !== 'undefined' && cartItens !== null && cartItens.length >= 4) {
                  return ( 
                    <div>
                    {cartItens.slice(0, 4).map(({name,preco,imageurl,numero}) => (
                    <div className ='cartItemBox'>
                       <div className = 'imgCartBox'><img className = 'cartImage' src ={imageurl}></img></div>
                       <div className = 'itemCartBox'>
                         <p className = 'nameCartBox'> {name} </p>
                         <p className = 'priceCartBox'> {numero} </p>
                         <p className = 'priceCartBox'>R$ {preco} </p>
                        </div>                                  
                    </div> 
                   ))}
                   <div className ='cartItemBox'>
                   <div className = 'imgCartBox'></div>
                       <div className = 'itemCartBox'>
                         <p className = 'nameCartBox'> {'Carrinho com total de: ' + cartItens.length+ ' itens'} </p>
                        </div>             
                   </div>
                    </div>  
             )}else if (typeof cartItens !== 'undefined' && cartItens !== null) {
              return ( 
                <div>
                {cartItens.map(({name,preco,imageurl,numero}) => (
                <div className ='cartItemBox'>
                   <div className = 'imgCartBox'><img className = 'cartImage' src ={imageurl}></img></div>
                   <div className = 'itemCartBox'>
                     <p className = 'nameCartBox'> {name} </p>
                     <p className = 'priceCartBox'> {numero} </p>
                     <p className = 'priceCartBox'>R$ {preco} </p>
                    </div>
                              
                </div> 
               ))} 
                </div>  
         )}
             })()}     
                 
            </div>
            <div className= 'paymentBox'>
              <p className = 'paymentText'>Total</p>
              <p className = 'paymentTotal'>{'R$'}</p>
            </div>
            <div className= 'cartTittleBox'>
            <div className = 'paymentButton' onClick = {clear} ><p onClick ={onClear} className = 'comprarText'>Remover Itens</p></div> 
          </div> 
          <div className= 'cartTittleBox'>
            <div className = 'paymentButton' onClick = {handleCheckout}><p className = 'comprarText'>Comprar</p></div>
          </div>

        </div>     
    </div>
  )
}

export default cart


