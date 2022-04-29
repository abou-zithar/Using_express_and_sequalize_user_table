const MySql=require('../../../DB/connection')

const updatablog=(req,res)=>{
    const {id}=req.params
    let {title,description,userid}=req.body
    MySql.execute(`UPDATE blog SET title='${title}',description='${description}',userid='${userid}' WHERE id=${id}`,(err,result)=>{
       
      if(err){
        res.json({massage:'Query err',err})
      }
      
      else{
            res.json({massage:'done',result})
        }
    })
}



module.exports =updatablog