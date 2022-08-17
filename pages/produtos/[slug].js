import React from 'react'
import {useRouter} from 'next/router'
import Header from '../../components/Header'

const produtosSlug = () => {
  

  const router =  useRouter()
  const {query:{name,imageurl,preco}} = router


  return (
    
    <div>
       <Header/>
       {console.log(name,imageurl,preco)}
    </div>
  )
}

export default produtosSlug