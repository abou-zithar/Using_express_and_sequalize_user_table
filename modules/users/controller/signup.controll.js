const MySql=require('../../../DB/connection')

//  add user to sql database
let adduser=(req,res)=>{
    let {name ,email,age,password,cpassword}=req.body;
   if(password === cpassword){
    MySql.execute(`select * from users where email = '${email}'`,(err,result)=>{
        console.log(result);
        if(result.length){
            res.json({massage:'user already exist'})
        }
        else{
            MySql.execute(`INSERT INTO users( name, email, age,password) VALUES ('${name}','${email}',${age},'${password}')`,(err,data)=>{
                console.log(data);
            })
            res.send('user added')
        }
    })
   }else{
       res.json({massage:'please check your password '})
   }

}


module.exports=adduser