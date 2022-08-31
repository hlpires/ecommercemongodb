import React, {useState,useEffect}from 'react'
import { useSession, signIn, signOut} from "next-auth/react"
import Image from 'next/image'
import { useRouter } from 'next/router'


const Login = () => {
  const { data: session } = useSession()
  const [produtos,setProdutos] = useState()
  const [jobs,setJobs ] = useState({})
  const router = useRouter()



  function useInput(opts) {
    const [value, setValue] = useState('');
    const input = <input
      value={value}
      className ='inputRegister'
      onChange={e => setValue(e.target.value)}
      {...opts} />
  
    return [value, input];
  }


  useEffect(() => {

    if(typeof jobs.name !== 'undefined'){
    fetch('/api/pegarjob',{
    
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(jobs),
      
    });}
  }, [jobs]);

  useEffect(() => {
    if(!session){
      router.push('/')
    }
  }, [session]);



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
          {(() => {
            if(session.user.name === 'funcionario'){
            return(<div>
                     <div className = 'buttonUserBox'>
                   Usuario: {session.user.name } <span className = 'OBS'>{'OBS: a conta Demo não tem permissão de registro para evitar depravação do APP'}</span>

                     </div>
                     <button className ='buttonUser' onClick={() => signOut()}>Sair</button>
                   </div>
                   )
            }
           else{
             return(
             <div>
              <div className = 'buttonUserBox'>
               <div className ='usuarioShow'> {'Usuario: ' + session.user.name}</div> 
              </div>
              <button className ='buttonUser' onClick={() => signOut()}>Sair</button>
            </div> 
             )
           }
             })()}

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
           
           <button  className = 'buttonUser' onClick = {() =>{
             if(username.length !== 0 && session.user.name !== 'funcionario'){
             console.log(username.length)
             setJobs({
                     name:username,
                     price:preco,
                     imageurl:imageurl,
                     quantidadeDisp:quantidadeDisp,
                     descritivo:descritivo})}}}>Registrar
                       
          </button>
          </div>
          {(() => {
           if (typeof produtos !== 'undefined') {
                return ( 
                  <div className = 'productList'>
                  
                  {produtos.map(({name,imageurl,price}) => (
                   <div className = 'produtosBoxRegister'>
                     <img className ='produtoImgRegister' src={imageurl} width={500} height={500} />
                     <div className = 'contentRegister'>
                     <p className = 'textRegister'> {'Produto:\t'+name} </p>
                     <p className = 'textRegister'> {price} </p>
                     </div>
                     <div className = 'contentRegister'>
                     <p className = 'textRegister'> {'Adicionado por:\t funcionario 1'} </p>
                     <p className = 'textRegister'> {'Quantidade disponivel: 100'} </p>
                     </div>
                     </div>
                     
                             
                  ))} 
                  
                  
                  </div>
           )}})()}  
        </div>

        
      </div>
           
    )
  }


 
}

export default Login