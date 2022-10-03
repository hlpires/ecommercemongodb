import React,{useState,useEffect} from 'react'



const Paralax = () => {

const [valor,setvalor] = useState()
const [scroll,setScroll] = useState()

 const myStyle = {
    backgroundPositionY: valor
}

useEffect(() => {
    const interval = setInterval(() => {
      setScroll(window.scrollY);
      console.log(document.getElementsByClassName('button')?.[0].offsetTop)
    }, 500);
    return () => clearInterval(interval);
  }, []);


 useEffect(() => {
if(typeof document.getElementsByClassName('button')?.[0] !== 'undefined')

    if(scroll >= document.getElementsByClassName('button')?.[0].offsetTop - 400){
        setvalor('30px')   
    }else{
        setvalor('0px')  
    }
  
}, [scroll]);

    return (
        <div className='paralax'>
           <div className = 'position'>
                <div style= {myStyle} className='paralaxBox'>
                    <div className = 'hiden' ></div>

                    <div className = 'hidenBot'></div>       
                </div>
            </div>
        </div>
    )
}

export default Paralax