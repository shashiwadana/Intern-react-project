var sql=require('./db');

var User=function (user){
    this.name=user.Name;
    this.age=user.Age;
    this.address=user.Address;
} 

User.getAllUsers=function(result){
    sql.query("SELECT * FROM user",function(err,res){
        if(err){
            console.log("error: ",err);
            result(null,err);
        }
        else{
            console.log('users ',res);
            result(null,res);
        }
    });
}
module.exports=User;