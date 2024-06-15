require('dotenv').config();

const express = require('express');
const app = express();
const cors= require("cors");
const port = process.env.PORT || 3000;
const mongoose= require('mongoose')
const userRouter = require('./routes/user');
const userUpdateRouter = require('./routes/update');
const cookieParser = require('cookie-parser');
const checkTokenMiddleware = require('./middleware/auth');
const validateToken = require('./middleware/token');

mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser:true})
    .then(()=>{console.log("Db connected")})
    .catch((err)=>{console.log(err)});
  app.use(cors({
      origin: "http://localhost:3000",
      optionsSuccessStatus: 200,
      credentials:true
  }));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/api/user",userRouter);
app.use("/api/update",validateToken,userUpdateRouter);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});