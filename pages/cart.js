import React,{useState,useEffect} from 'react'
import Header from '../components/Header'


const cart = () => {

const [cartItens,setCartItens] = useState([])

useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('cartitens'));
    if (data !== null){
      setCartItens(data)
      
      
    }
}, []);


useEffect(() => {
console.log(cartItens)
}, [cartItens]);
    
  return (
    <div>
        <Header/>
        <div className = 'cartPage'>
            <div className ='position'>
              cart


            </div>
        </div>
    </div>
  )
}

export default cart