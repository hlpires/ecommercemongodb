import connect from '../../lib/mongodb'
import produtoSchema from '../../model/jobSchema'

connect()

export default async function handler(req,res) {    
const productobj = (req.body)

try {  

    const produto = new produtoSchema (productobj)
    produto.save().then(() =>{console.log('produto criado')})


}   catch (error) {
        console.log('erro')
    }
}


