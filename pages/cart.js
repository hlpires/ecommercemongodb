import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bannerp from '../components/Bannerp'
import getStripe from '../lib/stripe'

const Cart = () => {

const [cartItens,setCartItens] = useState([])
const [total,setTotal] = useState()
const [result,setResult] = useState(0);

useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('cartitens'));
    if (data !== null){
      setCartItens(data)
     
      
    }
}, []);


useEffect(() => {
  if(typeof cartItens !== 'undefined')
  setTotal(cartItens.map(cart => Number(cart.price)*cart.numero))
  }, [cartItens]);
  
  
  
  useEffect(() => {
    if(typeof total !== 'undefined')
        setResult(total.reduce((totalp, currentvalue) => totalp = totalp + currentvalue,0))
  }, [total]);

  console.log(result)

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

    
  return (
    <div>
        <Header/>
        <Bannerp/>
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
          <div className ='cartPageCheckoutText'>{'Quantidade de itens:'+'\t'+ cartItens.length}</div>
          <div className ='cartPageCheckoutText'>{'Total:'+'\t'+ result}</div>
          <div className ='cartPageCheckoutButton' onClick ={handleCheckout}>Comprar</div>
        </div>
        </div>
        

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart