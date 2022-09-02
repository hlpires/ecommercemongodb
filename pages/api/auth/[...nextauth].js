import NextAuth,{NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import connect from '../../../lib/mongodb'
import userSchema from '../../../model/userSchema'
import {useEffect} from 'react'



require('dotenv').config({path: '../../../.env'});
connect()



export default NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      
      type: "credentials",
      credentials:{
        username: { label: "Nome", type: "text" },
        password: {  label: "Senha", type: "password" }
      },      
      
      async authorize(credentials,req) {
        
        console.log(req)
        const user = await userSchema.findOne({name:{$eq:credentials.username}})
        if(user){      
            if(credentials.username === user.name){
               console.log(user)
               return user
             }
            }else{
              return null
            }
      },
    })
  ],
  session: {
    jwt: true, 
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  pages: {
    signIn: "/signin",
    },
 
})