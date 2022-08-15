import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import clientPromise from '../../../lib/mongoClient'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

require('dotenv').config({path: '../../../.env'});


export default NextAuth({
 
  providers: [
    GithubProvider({
      clientId:process.env.GITHUB_ID,
      clientSecret:process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })  
  ],
  adapter:MongoDBAdapter(clientPromise),
  session:{strategy:'jwt'},
  
})