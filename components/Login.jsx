import React, {useState,useEffect}from 'react'
import { useSession, signIn, signOut} from "next-auth/react"


const Login = () => {
  const { data: session } = useSession()

  const [jobs,setJobs ] = useState({})

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

  const response = fetch('/api/pegarproduto',{
    
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })

  .then(res =>{
    return res.json();
  })
  .then(data =>{
   console.log(data)
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
  
          <div className = 'productList'>

          </div>
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