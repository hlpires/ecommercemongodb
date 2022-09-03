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
            <div className = 'cartPageTittle' style = {{borderBottomColor:'transparent'}}>Carrinho</div>
            <div className = 'cartPageAllBox'>
            <div className = 'cartPageItemBox'>
            <div className = 'cartPageTittle'>
            <p className = 'textPageCartTittle' id = 'textPageCartTittleProduto'> Produto </p>
            <p className = 'textPageCartTittle'> Quantidade </p>
            <p className = 'textPageCartTittle'> Preço </p>
            </div>
            {cartItens.map(({name,imageurl,price}) => (
             <div className = 'cartPageBox'>  
             <img className ='produtoImgCartPage' src={imageurl} width={500} height={500} />
             <div className ='pageCartTextBox'>
             <p className = 'textPageCart' id = 'textPageCartName'> {name} </p>
             <p className = 'textPageCart'>R$ {price} </p>
             <p className = 'textPageCart'>Até 10 vezes sem juros </p>
             </div>
        </div>      
     ))}
       </div>  
        <div className = 'cartPageCheckoutBox'>
          <div className ='cartPageCheckoutTittle'>Pagamento</div>
          <div className ='cartPageCheckoutText'>Quantidade de itens:</div>
          <div className ='cartPageCheckoutText'>Total:</div>
          <div className ='cartPageCheckoutButton'>Checkout</div>
        </div>
        </div>

            </div>
        </div>
    </div>
  )
}

export default cart