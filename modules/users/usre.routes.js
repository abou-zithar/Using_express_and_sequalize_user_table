// requires of the API
const router=require('express').Router();
const deleteuser = require('./controller/delete.contol');
const getcondiation = require('./controller/getcondition.controller');
const getConditionfirstletter = require('./controller/getConditionfirstletter.controller');
const getConditionLastletter = require('./controller/getConditionLastletter.controller');
const getLastOne = require('./controller/getLastOne.controller');
const getreversed = require('./controller/getreversed.controller');
const getuserbyid = require('./controller/getuserbyid.controller');
const getallusers = require('./controller/getusers.controller');
const searchByName = require('./controller/searchByName.controller');
const signin = require('./controller/signin.controller');
const adduser = require('./controller/signup.controll');
const updatauser = require('./controller/updatauser.contol');

// all the objectives of the API
router.get('/getallusers',getallusers)
router.get('/getuserbyid/:id',getuserbyid)
router.get('/searchByName',searchByName)
router.get('/getreversed',getreversed)
router.get('/getConditionAge',getcondiation)
router.get('/getConditionfirstletter',getConditionfirstletter)
router.get('/getConditionLastletter',getConditionLastletter)
router.get('/getLastOne',getLastOne)
router.post('/adduser',adduser)
router.post('/signin',signin)
router.delete('/delete/:id',deleteuser)
router.put('/updata/:id',updatauser)



module.exports=router