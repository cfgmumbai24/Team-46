const {setuser,getUser} = require('../service/auth');
const validateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }
  
    const userId = getUser(token);
    if (!userId) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    console.log(userId);    
    console.log("hi");
    req.userId = userId;
    next();
};

module.exports = validateToken;