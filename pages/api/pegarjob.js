import connect from '../../lib/mongodb'
import userJobSchema  from '../../model/jobSchema'

 connect()

const job = new userJobSchema ({
name:'inefas',
email:'Bolsonaro',
job:{
    elo:'prata',
    duo:false,
    discord:false,
    elofinal:'bronze'
}
 })
 job.save().then(() =>{console.log('job criado')})



