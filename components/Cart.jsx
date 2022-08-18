import React from 'react'

const cart = ({open,onClose,cartitens}) => {
    
    

  return (
    <div className ='modalCart'>
        <div className= 'cart'>
            {cartitens}
        </div>
       
    </div>
  )
}

export default cart