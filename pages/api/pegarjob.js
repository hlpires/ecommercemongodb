
import { Db } from 'mongodb' 
import connect from '../../lib/mongodb1'





export default async function handler(req,res){

    const {db} = await connect();
    const data = db.collection("Safire").find({})

    try{
       console.log(req.body)
    
    } catch(error){
        res.status(400).json({status:'nao conseguimos atualizar o DB'})

    }
}