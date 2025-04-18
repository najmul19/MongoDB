const express = require('express')
const cors = require('cors') //important for data show
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors())// call the cors its also important for data show

const users = [
    {id: 1,name:'atamiah',email:'atamiah@gmail.com' },
    {id: 1,name:'mainer',email:'mainer@gmail.com' },
    {id: 1,name:'akbor',email:'akbor@gmail.com' },
]

app.get('/',(req,res)=>{
    res.send('Users management server is running')
})

app.get('/users',(req,res)=>{
    res.send(users)
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})