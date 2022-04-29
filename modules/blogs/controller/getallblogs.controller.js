
const MySql=require('../../../DB/connection')

const allblogs=(req,res)=>{

    MySql.execute(`SELECT * FROM blog`,(err,results)=>{
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


module.exports=allblogs