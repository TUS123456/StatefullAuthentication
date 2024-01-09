const URL=require('../model/db.js');

function handlerequest(req,resp){
    resp.json({'msg':"working"});
}

async function savedatamongodb(req,resp){
    const { name,Email,password }=req.body;
    const result=await URL.create({
        name:name,
        Email:Email,
        password:password,
    });

    resp.json({"msg":"Data save Successfully","id":result._id});
}

module.exports={
    handlerequest,
    savedatamongodb,
}