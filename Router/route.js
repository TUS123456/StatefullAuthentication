const express=require('express');
const {handlerequest,savedatamongodb}=require('../controller/control.js');
const { v4: uuidv4 } = require('uuid');
const {storeKey,getKey}=require('../Authentication/Auth.js');

const router=express.Router();

router.get("/",handlerequest);

router.post("/signup", (req, resp) => {
    console.log(req.body);
    const sessionId = uuidv4();

    const result = savedatamongodb(req, resp);
    if(result){
        storeKey(sessionId,req.body)
        resp.cookie('UserID',sessionId);
    }
});


/*router.post("/login", (req, resp) => {
    const sessID=req.cookies;
    const data = getKey(sessID);
    console.log(data);
    if(data){
        resp.render('welcome');
    }
});*/
router.post("/login", (req, resp) => {
    const sessID = req.cookies && req.cookies.UserID;
    const data = getKey(sessID);
    if (data) {
        resp.render('welcome');
    }
});

module.exports=router;