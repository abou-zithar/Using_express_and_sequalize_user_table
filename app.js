const express=require('express');
const routeuser = require('./modules/users/usre.routes');
const blogrouter = require('./modules/blogs/blogs.routes');

const app= express()
app.use(express.json())
const port=3000
app.use(routeuser)
app.use(blogrouter)


app.get('/',(req,res)=>{
    res.send('hi')
})

app.listen(port,()=>{
    console.log('running...');
})


