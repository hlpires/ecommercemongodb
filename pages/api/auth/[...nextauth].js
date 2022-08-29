import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import clientPromise from '../../../lib/mongoClient'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
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
        
        const user = await userSchema.findOne({name:{$gte:credentials.username}})
             if(credentials.username === user.name){
              console.log(credentials)
               return user
             }
             console.log('erro')
               return null
        
      },
    })
  ],
 
  pages: {
    signIn: "/signin",
    },

  callbackUrl: '/areausuario'

 
})