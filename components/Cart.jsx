import React, {useState} from 'react'

const cart = ({open,onClose,cartitens}) => {


    

  return (
    <div className ='modalCart'>
        <div className= 'cart'>
            <div>
                {console.log(cartitens)}
                {cartitens.map(({name,preco,imageurl}) => (
                    <div>
                       <p className = 'text'> {name} </p>
                       <p className = 'text'>R$ {preco} </p>
                    </div>
                ))} 
            </div>      
        </div>     
    </div>
  )
}

export default cart