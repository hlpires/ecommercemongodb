import React, {useState,useEffect} from 'react'
import getStripe from '../lib/stripe'

const cart = ({open,onClose,cartProps,onClear}) => {

if(open !== true){
  return null
}

const [apear,setApear] = useState()
const [total,setTotal] = useState()
const [result,setResult] = useState(0);
const mystyle = {
  transform: apear
}

const [cartItens,setCartItens] = useState()


if(typeof cartProps !== 'undefined'){

}

useEffect(() => {
  if(cartProps){
    setCartItens(cartProps) 
  }
  setApear('translate(-70%, 0)')
}, [cartProps])


const clear = () =>{
  window.localStorage.removeItem('cartitens')
  setCartItens([]);
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
useEffect(() => {
  if(typeof cartItens !== 'undefined')
  setTotal(cartItens.map(cart => Number(cart.price)*cart.numero))
  }, [cartItens]);
  
  
  
  useEffect(() => {
    if(typeof total !== 'undefined')
        setResult(total.reduce((totalp, currentvalue) => totalp = totalp + currentvalue,0))
  }, [total]);

  console.log(result)

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
          <div className = 'fechar' onClick = {onClose}></div>
          </div>
         
            <div>

            {(() => {
               if (typeof cartItens !== 'undefined' && cartItens !== null && cartItens.length >= 4) {
                  return ( 
                    <div>
                    {cartItens.slice(0, 4).map(({name,price,imageurl,numero}) => (
                    <div className ='cartItemBox'>
                       <div className = 'imgCartBox'><img className = 'cartImage' src ={imageurl}></img></div>
                       <div className = 'itemCartBox'>
                         <p className = 'nameCartBox'> {name} </p>
                         <p className = 'quantidadeCartBox'> {'Quantidade ' + numero} </p>
                         <div className = 'priceCartBox'><p className ='priceCartText'> {'R$ ' + price * numero}</p> </div>
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
                {cartItens.map(({name,price,imageurl,numero}) => (
                <div className ='cartItemBox'>
                   <div className = 'imgCartBox'><img className = 'cartImage' src ={imageurl}></img></div>
                   <div className = 'itemCartBox'>
                     <p className = 'nameCartBox'> {name} </p>
                     <p className = 'quantidadeCartBox'> {'Quantidade ' + numero} </p>
                         <div className = 'priceCartBox'><p className ='priceCartText'> {'R$ ' + price * numero}</p> </div>
                    </div>
                              
                </div> 
               ))} 
                </div>  
         )}
             })()}     
                 
            </div>
            <div className= 'paymentBox'>
              <p className = 'paymentText'>{'Total: R$ '+ result }</p>
             
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


