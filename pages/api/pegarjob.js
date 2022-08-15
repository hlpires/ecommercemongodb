import connect from '../../lib/mongodb'
import userJobSchema from '../../model/jobSchema'

connect()

export default async function handler(req,res) {    
const productobj = (req.body)

try {  

    const produto = new userJobSchema (productobj)
    produto.save().then(() =>{console.log('produto criado')})


}   catch (error) {
        console.log('erro')
    }
}


