const User = require('./models/User');
const bcrypt= require('bcrypt');
async function makeAdmin(){
    try{    
        let user= await User.findOne( {email: 'anupam@123'} );
        if(user){
            console.log("user updated..");
        }else{
        let user = new User();
        user.firstName= 'Anupam';
        user.lastName= 'vats';
        user.email= "anupam@123";
         let encryptredPassword = bcrypt.hashSync('12345', 10);
        user.password= encryptredPassword;
        user.userType= 'Admin'
        await user.save();
        console.log('user saved successfully..');
        }
    }catch(err){
        console.log(err);
    }
}
module.exports= makeAdmin;