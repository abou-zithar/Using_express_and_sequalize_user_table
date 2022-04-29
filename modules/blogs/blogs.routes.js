const router=require('express').Router()



const allblogs=require('./controller/getallblogs.controller')
const addblog=require('./controller/addBlog.control')
const allblogsByUser = require('./controller/getBlog_byUser.controller')
const updatablog = require('./controller/updatablog.contorller')
const deleteblog = require('./controller/deleteblog.contoller')




router.get('/allBlog',allblogs)
router.post('/blog',addblog)
router.get('/get_post_by_id',allblogsByUser)
router.put('/updatablog/:id',updatablog)
router.delete('/delete/:id',deleteblog)








module.exports=router