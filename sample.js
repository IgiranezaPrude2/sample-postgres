const {Pool,Client} = require('pg')
const connectionString = 'postgressql://postgres:P@$$W0rd@localhost:5432/testbb'

const client = new Client({
    connectionString:connectionString
})

client.connect()

client.query('SELECT * from campany',(err,res)=>{
    console.log(err,res)
    client.end()
})