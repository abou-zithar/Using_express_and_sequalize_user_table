const MySql=require('../../../DB/connection')

const allblogsByUser=(req,res)=>{

    MySql.execute(`SELECT blog.id as B_I,blog.title ,users.name as username FROM users inner join blog  on users.id=blog.userid`,(err,results)=>{

        if(err){
            res.json({massage:'Query err',err})
          }
          
          else{
                res.json({massage:'done',results})
            }

    })



}




module.exports =allblogsByUser