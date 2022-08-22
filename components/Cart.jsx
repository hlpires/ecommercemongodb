import React, {useState,useEffect} from 'react'

const cart = ({open,onClose,cartProps}) => {

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
        <div className= 'cart'>
            <div>

            {(() => {
               if (typeof cartItens !== 'undefined' && cartItens !== null) {
                  return ( 
                    <div>
                    {cartItens.map(({name,preco,imageurl}) => (
                    <div>
                       <p className = 'text'> {name} </p>   
                       <p className = 'text'>R$ {preco} </p>                  
                    </div> 
                   ))} 
                    </div>  
             )}
             })()}     
                 
            </div>      
        </div>     
    </div>
  )
}

export default cart


