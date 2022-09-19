import React, {useState,useEffect} from 'react'
import getStripe from '../lib/stripe'

const Cart = ({open,onClose,cartProps,onClear,removeItem}) => {


const [apear,setApear] = useState()
const [total,setTotal] = useState()
const [qtotal,setQtotal] = useState()
const [result,setResult] = useState(0);
const [qresult,setQresult] = useState(0);

const mystyle = {
  transform: apear
}
const [cartItens,setCartItens] = useState()

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
  setQtotal(cartItens.map(cart => cart.numero))
  }, [cartItens]);
  
  
  
  useEffect(() => {
    if(typeof total !== 'undefined')
        setResult(total.reduce((totalp, currentvalue) => totalp = totalp + currentvalue,0))
  }, [total]);

  useEffect(() => {
    if(typeof qtotal !== 'undefined' )
        setQresult(qtotal.reduce((previousValue, currentValue) => previousValue + currentValue,0))
  }, [qtotal]);
  
  if(open !== true){
    return null
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
          <div className = 'fechar' onClick = {onClose}></div>
          </div>
         
            <div>

            {(() => {
               if (typeof cartItens !== 'undefined' && cartItens !== null && cartItens.length > 0) {
                  return ( 
                    <div>
                    {cartItens.slice(0, 4).map(({name,price,imageurl,numero,id}) => (
                    <div key = {'1'} className ='cartItemBox'>
                       <div className = 'imgCartBox'><img className = 'cartImage' src ={imageurl}></img></div>
                       <div className = 'itemCartBox'>
                         <p className = 'nameCartBox'> {name} </p>
                         <p className = 'quantidadeCartBox'> {'Quantidade ' + numero} </p>
                         <div className = 'priceCartBox'><p className ='priceCartText'> {'R$ ' + price * numero}</p> </div>
                        </div>
                        <div className = 'removeItemCart' onClick = {()=>removeItem(id)}></div>                                
                    </div> 
                   ))}
                   <div className ='cartItemBox'>
                   <div className = 'imgCartBox'></div>
                       <div className = 'itemCartBox'>
                         <p className = 'nameCartBox'> {'Carrinho com total de: ' + qresult + ' itens'} </p>
                        </div>             
                   </div>
                    </div>  
             )}else{
              return ( 
                <div>
                {cartItens.map(({name,price,imageurl,numero}) => (
                <div key = {'1'} className ='cartItemBox'>
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

export default Cart


