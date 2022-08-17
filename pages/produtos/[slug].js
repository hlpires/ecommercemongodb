import React from 'react'
import {useRouter} from 'next/router'
import Header from '../../components/Header'

const produtosSlug = () => {
  

  const router =  useRouter()
  const {query:{name,imageurl,preco}} = router


  return (
    
    <div>
    <Header/>
      
      <div className =' slug'>
       <div className = 'position'>
         <div className = 'slugBox'>
           <div className ='imageBox'>
             <p className ='tittleSlug'>{name}</p>
             <img className ='image' src ={imageurl}></img>
             </div>
           <div className ='details'></div>

         </div>
       </div>
      </div> 
    </div>
  )
}

export default produtosSlug