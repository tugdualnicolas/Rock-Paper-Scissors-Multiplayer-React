module.exports={
    ensureauth:function(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        else{
            console.log("hacked")
        }
    },
    ensurelog:function(req,res,next){
        //console.log("reached ensurelog")
       // console.log(req)
      // console.log(req.user)
       console.log(req.isAuthenticated())
       if(req.isAuthenticated()){
         console.log("already logged in")
          res.json({
              user:req.user,
              status:200
          }).end();
       }
        else {
            next()
        };
       
    }
}