import React from 'react'
import {useRouter} from 'next/router'
import Header from '../../components/Header'

const produtosSlug = () => {
  

  const router =  useRouter()
  const {query:{dataSlug}} = router


  return (
    
    <div>
       <Header/>
       {console.log(dataSlug)}
    </div>
  )
}

export default produtosSlug