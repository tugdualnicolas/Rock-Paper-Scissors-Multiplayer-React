const express=require('express')
const app=express();
const cors=require('cors')
const mongoose=require('mongoose')
const passport=require('passport')
const session=require('express-session')
const socket=require('socket.io')
const path=require('path')
require('./Config/passport')(passport)


app.disable('x-powered-by')
// app.use(cors({
//     origin: function(origin, callback){
//       return callback(null, true);
//     },
//     optionsSuccessStatus: 200,
//     credentials: true
//   }));
app.use(express.json())   //eslint-disable-next-line
require('dotenv').config()    
const PORT=process.env.PORT||3000
const db1=process.env.MONGO_URL

app.use(session({
    secret:'secret',
    saveUninitialized:true,
    resave:true,
    cookie:{
    maxAge:86400000
    }
}))
app.use(passport.initialize())
app.use(passport.session())






mongoose.set('useCreateIndex',true)
mongoose.connect(db1,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('mongodb connected.'))
.catch((err)=>console.log(err))
app.use(express.static(path.join(__dirname, '../build')));
console.log(path.join(__dirname, '../build'))
app.use('/users',require('./Routes/user'))
const server=app.listen(PORT,()=>console.log('listening at ',PORT))
const io=socket(server)
require('./Socket')(io)