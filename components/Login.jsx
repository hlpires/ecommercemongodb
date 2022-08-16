import React, {useState,useEffect}from 'react'
import { useSession, signIn, signOut} from "next-auth/react"
import Image from 'next/image'

const Login = () => {
  const { data: session } = useSession()
  const [produtos,setProdutos] = useState()
  const [jobs,setJobs ] = useState({})


const monark = [
  {
   name:'jaozin'
  },
  {
    name:'jaozin1'
  }
]

  function useInput(opts) {
    const [value, setValue] = useState('');
    const input = <input
      value={value}
      onChange={e => setValue(e.target.value)}
      {...opts} />
  
    return [value, input];
  }


const pegarJob = async () => {

 fetch('/api/pegarjob',{
    
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(jobs),
      
    });
   
    
  }



  useEffect(() => {

   fetch('/api/pegarproduto',{
    
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })

  .then(res =>{
    return res.json();
  })
  .then(data =>{
   
   setProdutos(data)
  })


}, []); 


  const [username, usernameInput] = useInput({ placeholder: 'jdoe123' });
  const [preco, setPreco] = useInput({ placeholder: 'Password' });
  const [imageurl, setImageurl] = useInput({ placeholder: 'Password' });
  const [quantidadeDisp, setQuantidadeDisp] = useInput({ placeholder: 'Password' });
  const [ descritivo, setDescritivo] = useInput({ placeholder: 'Password' });


  if (session) {
    return (
      <div className = 'login'>
        <div className = 'position'>
          <div className = 'loginBox'>
           Signed in as {session.user.name} 
           <button onClick={() => signOut()}>Sign out</button>
          </div>

          <div className = 'insertProduct'>
           {usernameInput}
           {setPreco}
           {setImageurl}
           {setQuantidadeDisp}
           {setDescritivo}         
           <button onClick = {pegarJob}></button>
           <button onClick = {() =>{setJobs({
                     name:username,
                     preco:preco,
                     imageurl:imageurl,
                     quantidadeDisp:quantidadeDisp,
                     descritivo:descritivo})}}>
                       
          </button>
          </div>
          {(() => {
           if (typeof produtos !== 'undefined') {
                return ( 
                  <div className = 'productList'>
                  
                  {produtos.map(({name}) => (
                   <div className = 'produtosBox'>
                     <img className ='produtoImg' src="//live.staticflickr.com/65535/52290937050_33ecb279ee_w.jpg" width={500} height={500} />
                     <p className = 'text'> {name} </p></div>          
                  ))} 
                  
                  {/*//live.staticflickr.com/65535/52290445401_a0d03184e9_w.jpg */}
                  {/*//live.staticflickr.com/65535/52289475477_083f1c7c94_w.jpg */}
                  </div>
           )}})()}  
        </div>

        
      </div>
           
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )

 
}

export default Login