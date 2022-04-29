const MySql=require('../../../DB/connection')



const getcondiation=(req,res)=>{
    let {age1,age2}=req.body
    MySql.execute(`SELECT * FROM users WHERE age>${age1} AND age<${age2} `,(err,results)=>{
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
module.exports=getcondiation