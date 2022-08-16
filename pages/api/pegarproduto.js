import connect from '../../lib/mongodb'
import produtoSchema from '../../model/jobSchema'

connect()


export default async function handler(req,res) {    

try {
    const produto = await produtoSchema.find();
    
    res.send(produto)
}   catch (error) {
        console.log('erro')
    }



}
