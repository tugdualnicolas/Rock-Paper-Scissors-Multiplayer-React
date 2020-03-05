const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const Router = express.Router();
const users = require("../Models/users.model");
const passport = require("passport");
const { ensurelog, ensureauth } = require("../Config/Auth");

Router.post("/signup", async (req, res) => {
  const { name, username, password, email } = req.body;
  const newuser = new users({ name, username, password, email });
  console.log("body", req.body);
  await users.findOne({ email: email }, async (err, doc) => {
    if (err) {
      console.log(err);
    } else if (doc) {
      res
        .json({
          errors: {
            email: "Email already exists,please login"
          }
        })
        .end();
    } else {
      await users.findOne({ username: username }, (err, doc) => {
        if (err) {
          console.log(err);
        } else if (doc) {
          res
            .json({
              errors: {
                username: `username already taken,try ${username}_${Math.floor(
                  Math.random() * 100
                )}`
              }
            })
            .end();
        } else if (!doc) {
          console.log("new user created", newuser);
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newuser.password, salt, (err, hash) => {
              if (err) throw new Error(err);
              console.log("inside bcrypt", newuser);
              newuser.password = hash;
              newuser
                .save()
                .then(user => {
                  console.log(user);
                  res
                    .json({
                      msg: "success"
                    })
                    .end();
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
    }
  });
});
// Router.get("/sucess",(req,res,next)=>{
//   console.log("reached sucess",req.session.passport)
//    res.json({message:'sucess'})
//   if(req.user){
//     console.log("logged in")
//   }
// })

Router.post("/login",ensurelog,async (req, res, next) => {
  // if(req.user){
  //   console.log("redirecting")
  // }
  await passport.authenticate("local", { failWithError: true }, function(err,user,info
  ) {
    if (err) {
      console.log("1", err);
    } 
    else if (info)
     {
      res.json({info}).end();
    } 
    else if (user) {
      req.logIn(user,function (err){
       if(err) console.log(err)
      })
     res.json({
       user
     }).end()
    }
  })(req, res, next);
});

Router.get('/logout',(req,res)=>{
  req.logOut()
  console.log("logged out")
  res.json({
    info:'loggedout'
  }).end()
})
// Router.post("/login",ensurelog,async (req, res, next) => {
//   passport.authenticate('local',{
//     successRedirect:'/users/sucess',
//     failureRedirect:'/users/failed'
//   })(req,res,next)
// });


module.exports = Router;
