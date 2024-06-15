const {setuser,getUser} = require('../service/auth');
const User = require('../models/user');
const checkTokenMiddleware = async(req, res, next) => {
    const token = req.cookies?.token;
    const tokenUser= getUser(token);
    if(tokenUser){
      try{
          var user = await User.findOne({_id:tokenUser.userId})
          if(!user){
              return res.redirect("/login")
          }
          else if(user.username === 'Admin'){
              return res.status(300).json({valid:true});
          }
          else{
            return res.status(200).send();
          }
      } catch(e){
          console.log(e);
    }}
    return res.status(300).send();
};

module.exports = checkTokenMiddleware;