
const MySql=require('../../../DB/connection')

const addblog=(req,res)=>{
    let {title,description,userid}=req.body
    MySql.execute(`INSERT INTO blog( title, description,  userid) VALUES ('${title}','${description}',${userid})`,(err,result)=>{
       
      if(err){
        res.json({massage:'Query err',err})
      }
      
      else{
            res.json({massage:'done'})
        }
    })
}



module.exports =addblog