import React, {useState,useEffect} from 'react'
import getStripe from '../lib/stripe'


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
const data = JSON.parse(window.localStorage.getItem('cartitens'));
if (data !== null){
  setDataJson(data)
  
  
}
}, []);

useEffect(() => {
  if(dataJson !== null && typeof dataJson !== 'undefined'){
    setCartItens([...cartProps])
    
    
  }else{
    setCartItens([...cartProps])
    
  }
  setApear('translate(-70%, 0)')
}, [cartProps,dataJson])

useEffect(() => {
  if(cartItens !== null && cartItens !== undefined && Object.keys(cartItens).length !== 0){
    window.localStorage.setItem('cartitens',JSON.stringify(cartItens))

  }
  
}, [cartItens])

const clear = () =>{
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
               if (typeof cartItens !== 'undefined' && cartItens !== null && cartItens.length >= 5) {
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
                   <div className ='cartItemBox'> {'e Outros:'+ cartItens.length + 'itens' }</div>
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


