
const MySql=require('../../../DB/connection')

const deleteblog=(req,res)=>{
    let{id}=req.params;
    MySql.execute(`DELETE FROM blog WHERE id=${id}`,(err,result)=>{
        if(err){
            res.json({massage:'query err',err})
        }
        if(result.affectedRows==1){
            res.json({massage:'deleted'})

        }else{
            res.json({massage:'please check your id'})
        }
       
    })
   
}


module.exports=deleteblog