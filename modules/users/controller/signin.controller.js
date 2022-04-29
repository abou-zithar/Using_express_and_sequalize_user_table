const MySql=require('../../../DB/connection')
const signin =(req,res)=>{
    let {email,password}=req.body
    MySql.execute(`select * from users where email = '${email}'`,(err,result)=>{
       
        if (result.length) {
          if(result[0].password ==password){
            res.json({massage:'welcome'})
          }else{
            res.json({massage:'incorrect password'})
          }
        }else{
            res.json({massage:'you have to register frist'})
        }
    })
    
}


module.exports=signin