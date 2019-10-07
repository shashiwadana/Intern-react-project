var User=require('./model');

exports.user =function(req,res){
    User.getAllUsers(function(err,user){
        console.log('user controller');
        if(err){
            res.send(err);
            console.log('res',err);
        }
        else{
            res.send(user);
            console.log('res',user);
        }
    })
}