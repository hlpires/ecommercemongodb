import connect from '../../lib/mongodb'
import userJobSchema from '../../model/jobSchema'

connect()


export default async function handler(req,res) {    

try {
    const produto = await userJobSchema.find();
    
    res.send(produto)
}   catch (error) {
        console.log('erro')
    }



}
