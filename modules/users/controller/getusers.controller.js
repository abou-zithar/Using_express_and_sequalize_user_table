const MySql=require('../../../DB/connection')



const getallusers=(req,res)=>{
    MySql.execute(`SELECT * FROM users`,(err,results)=>{
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
module.exports=getallusers