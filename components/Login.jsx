import React, {useState,useEffect}from 'react'
import { useSession, signIn, signOut} from "next-auth/react"
import Image from 'next/image'

const Login = () => {
  const { data: session } = useSession()
  const [produtos,setProdutos] = useState()
  const [jobs,setJobs ] = useState({})



  function useInput(opts) {
    const [value, setValue] = useState('');
    const input = <input
      value={value}
      className ='inputRegister'
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
if(session){
  console.log(session)
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


  const [username, usernameInput] = useInput({ placeholder: 'nome' });
  const [preco, setPreco] = useInput({ placeholder: 'preco' });
  const [imageurl, setImageurl] = useInput({ placeholder: 'imageurl' });
  const [quantidadeDisp, setQuantidadeDisp] = useInput({ placeholder: 'quantidadeDisp' });
  const [ descritivo, setDescritivo] = useInput({ placeholder: 'descritivo'});


  if (session) {
    return (
      <div className = 'login'>
        <div className = 'position'>
          <div className = 'loginBox'>
           <div className = 'buttonUser'>Usuario: {session.user.name}
           <button  onClick={() => signOut()}>Sair</button></div>
          </div>

          <div className = 'insertProduct'>
          <div className = 'registerTittleHandler'><p className ='registerTittle'>Registro de Produtos</p></div>
          <div className = 'inputRegisterBox'>
           {usernameInput}
           {setPreco}
           {setImageurl}
           {setQuantidadeDisp}
           {setDescritivo}
           </div>       
           <button onClick = {pegarJob}></button>
           <button onClick = {() =>{setJobs({
                     name:username,
                     price:preco,
                     imageurl:imageurl,
                     quantidadeDisp:quantidadeDisp,
                     descritivo:descritivo})}}>
                       
          </button>
          </div>
          {(() => {
           if (typeof produtos !== 'undefined') {
                return ( 
                  <div className = 'productList'>
                  
                  {produtos.map(({name,imageurl,price}) => (
                   <div className = 'produtosBoxRegister'>
                     <img className ='produtoImg' src={imageurl} width={500} height={500} />
                     <p className = 'text'> {name} </p>
                     <p className = 'text'> {price} </p>
                     </div>
                     
                             
                  ))} 
                  
                  
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