const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {setUser,getUser} = require('../service/auth');
// const setUser = require('../service/auth'); 
async function handleUserSignUp(req, res) {
    try {
      const { username, email, password,grade, schoolName } = req.body;
      const newUser = new User({ username, email, password,grade, schoolName});
      await newUser.save();
      res.status(201).send({ message: 'User created successfully' });
      console.log("hello")
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
}

async function handleUserSignIn(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).send({ error: 'Invalid email or password' });
        }
    
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          return res.status(400).send({ error: 'Invalid email or password' });
        }
    
        const token = setUser(user);
        res.cookie('token', token);
        return res.json({ token });
      } catch (error) {
        res.status(400).send({ error: error.message });
      }
}
async function handleAuthentication(req,res){
  const tokenUser= getUser(req.body.userToken);
  if(tokenUser){
      const username = tokenUser.email
      try{
          var user = await User.findOne({email:username})
          if(!user){
          return res.redirect("/login")
          }
          else if(user.username === 'Admin'){
              return res.status(300).json({valid:true});
          }
          else if(tokenUser.username === 'Admin'){
              return res.status(300).send();
          } 
          else{
            return res.status(200).send();
          }
      } catch(e){
          console.log(e);
      }}
  return res.status(300).send();
}

async function handleUpdate(req, res) {
  // const { userId } = req;
  const { newLevel, newScore } = req.body;  // Expecting arrays for new levels and scores
  try {
    const user = await User.findById("666df56271c27a37294ac34e");
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.level.push(newLevel);
    user.score.push(newScore);

    await user.save();
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
}


module.exports = { handleUserSignUp, handleUserSignIn,handleAuthentication,handleUpdate };