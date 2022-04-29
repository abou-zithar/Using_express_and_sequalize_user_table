
const MySql=require('../../../DB/connection')
const updatauser=(req,res)=>{
const {id}=req.params;
const {name,email,age}=req.body;
MySql.execute(`UPDATE users SET name ='${name}',email='${email}',age=${age} WHERE id=${id}`,(err,result)=>{
    if(err){
        res.json({massage:'query err',err})
    }
    console.log(result);
    if(result.affectedRows>0){
        res.json({massage:'updated'})
    }else{
        res.json({massage:'plase check your id '})
    }
    
})

}

module.exports=updatauser