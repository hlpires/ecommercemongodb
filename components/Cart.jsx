import React, {useState,useEffect} from 'react'

const cart = ({open,onClose,cartProps}) => {

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
  setApear('translate(-95%, 0)')
  console.log(apear + 'apear')
}
}, []);

useEffect(() => {
  if(dataJson !== null && typeof dataJson !== 'undefined'){
    setCartItens([...dataJson, ...cartProps])
    console.log('cartData')
    
  }else{
    setCartItens(cartProps)
    console.log('cartprops')
  }

}, [cartProps,dataJson])

useEffect(() => {
  if(cartItens !== null && cartItens !== undefined && Object.keys(cartItens).length !== 0){
    window.localStorage.setItem('cartitens',JSON.stringify(cartItens))
    console.log(cartItens)
  }
  
}, [cartItens])


//const data = JSON.parse(window.localStorage.getItem('cartitens'));
//window.localStorage.setItem('cartitens',JSON.stringify(cartItens));}
//setCartItens(JSON.parse(data))
//const children = cartProps.concat(data);
  return (
   
   
   <div className ='modalCart'>
        <div className= 'cart' style= {mystyle}>
          <div className= 'cartTittleBox'>
            <div className = 'art'></div>
            <h2>Carrinho</h2>
            <h6>{'3 Items'}</h6>
          </div>
         
            <div>

            {(() => {
               if (typeof cartItens !== 'undefined' && cartItens !== null) {
                  return ( 
                    <div>
                    {cartItens.map(({name,preco,imageurl}) => (
                    <div className ='cartItemBox'>
                       <div className = 'imgCartBox'><img className = 'cartImage' src ={imageurl}></img></div>
                       <div className = 'itemCartBox'>
                         <p className = 'nameCartBox'> {name} </p>
                         <p className = 'priceCartBox'>R$ {preco} </p>
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
            <div className = 'paymentButton'><p className = 'comprarText'>Comprar</p></div>
            
          </div>  
        </div>     
    </div>
  )
}

export default cart


