import mongoose from 'mongoose'

const connection= {};


const options = {
    dbName:'safire',
}

async function connect(){
    if(connection.isConnected){
        return;
        
    }
    const db = await mongoose.connect(process.env.MONGODB_URI,options)
    connection.isConnected = db.connections[0].readyState
}

export default connect;