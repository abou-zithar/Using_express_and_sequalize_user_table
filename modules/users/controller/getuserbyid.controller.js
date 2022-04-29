const MySql=require('../../../DB/connection')



const getuserbyid=(req,res)=>{
    let{id}=req.params;
    MySql.execute(`SELECT * FROM users WHERE id=${id}`,(err,results)=>{
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
module.exports=getuserbyid