import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import connect from '../../../lib/mongodb'
import userSchema from '../../../model/userSchema'


require('dotenv').config({path: '../../../.env'});
connect()

export default NextAuth({
 
  providers: [
  
    CredentialsProvider({
      name: "credentials",
      credentials:{
        username: { label: "Nome", type: "text" },
        password: {  label: "Senha", type: "password" }
      },
      
      async authorize(credentials) {
        
        const user = await userSchema.findOne({name:{$eq:credentials.username}})
        if(user){
             if(credentials.username === user.name){
              console.log(user)
               return user
             }else{
              throw new Error( JSON.stringify({ errors: user.errors, status: false }))
             }
            }
      },
    })
  ],
 
  pages: {
    signIn: "/signin",
    },

  callbackUrl: '/areausuario'

 
})