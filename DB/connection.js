const mysql2=require('mysql2')


const mySql=mysql2.createConnection({
    host:'localhost',
    user:'root',
    database:'users',
    password:''
})

module.exports = mySql