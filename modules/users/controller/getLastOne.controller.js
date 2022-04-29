const MySql=require('../../../DB/connection')



const getLastOne=(req,res)=>{
    let {letter,age}=req.body
    MySql.execute(`SELECT * FROM users WHERE name CONTAINS "${letter}" AND age>20 AND age<${age}`,(err,results)=>{
        if(err){
            res.json({massage:'query err',err})

        }
        if(results.length){
            res.json({massage:'done',data:results})
        }else{
            res.json({massage:'no results to display'})
        }
    })
}
module.exports=getLastOne