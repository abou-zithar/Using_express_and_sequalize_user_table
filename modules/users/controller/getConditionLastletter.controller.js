const MySql=require('../../../DB/connection')



const getConditionLastletter=(req,res)=>{
    let {letter,age}=req.body
    MySql.execute(`SELECT * FROM users WHERE name LIKE "%${letter}" AND age>${age} `,(err,results)=>{
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
module.exports=getConditionLastletter