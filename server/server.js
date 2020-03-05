const express=require('express')
const app=express();
const cors=require('cors')
const mongoose=require('mongoose')
const passport=require('passport')
const session=require('express-session')
const socket=require('socket.io')
require('./Config/passport')(passport)


app.disable('x-powered-by')
app.use(cors({
    origin: function(origin, callback){
      return callback(null, true);
    },
    optionsSuccessStatus: 200,
    credentials: true
  }));
app.use(express.json())   //eslint-disable-next-line
require('dotenv').config()    


app.use(session({
    secret:'secret',
    saveUninitialized:true,
    resave:true
}))
app.use(passport.initialize())
app.use(passport.session())



const port=process.env.PORT 
const db1=process.env.MONGO_URL

mongoose.set('useCreateIndex',true)
mongoose.connect(db1,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('mongodb connected.'))
.catch((err)=>console.log(err))

app.use('/users',require('./Routes/user'))
const server=app.listen(port,()=>console.log('listening at ',port))
const io=socket(server)
require('./Socket')(io)