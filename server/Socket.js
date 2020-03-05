module.exports = io => {
  var Sockets = {};
  function Check(username){
    console.log("CheckAndmakeUserAvailableForPlay initiated for",username)
    var playertoreturn=null;
    var playeravailablityflag=0
    var keysarray
  //  Object.keys(Sockets).forEach(key=>{
  //    console.log("username:",Sockets[key].username)
  //    console.log("lookinForPlayers:",Sockets[key].lookingforPlayers)
  //    console.log("playingstatus:",Sockets[key].playingStatus)


  //  })
  Sockets[username].lookingforPlayers=true
  Sockets[username].playingStatus=false
  console.log(`set lookingforplayer to ${ Sockets[username].lookingforPlayers} for ${username}`)
   console.log("no of players available in Socket object",Object.keys(Sockets).length)
   keysarray=Object.keys(Sockets);
   for(let key in keysarray){
     if(keysarray[key]!==username){
     if(Sockets[keysarray[key]].lookingforPlayers===true && Sockets[keysarray[key]].playingStatus===false){
      Sockets[keysarray[key]].lookingforPlayers=false;
      Sockets[keysarray[key]].playingStatus=true;
      Sockets[username].playingStatus=true;
       playertoreturn=keysarray[key]
       playeravailablityflag=1
       break;
     }
    }     
   }
   if(playeravailablityflag===0){
  Sockets[username].lookingforPlayers=true;
  Sockets[username].playingStatus=false;


     return ["noplayersavailable",playertoreturn]
   }
   else if(playeravailablityflag===1){
    Sockets[username].lookingforPlayers=false
    Sockets[username].playingStatus=true
     return ["playersavailable",playertoreturn]
   }
  }


  io.on("connection", socket => {
    console.log("new socket connected");
    socket.on("addUserToSocketObject", data => {
      Sockets[data.username] = socket;
      Sockets[data.username]["username"]=data.username
      Sockets[data.username]["lookingforPlayers"]=false
      Sockets[data.username]["playingStatus"]=false
      console.log(`added  user ${data.username} to Socket object`);

      //console.log("new socket object",Sockets)
    });
    socket.on("removeUserFromSocketObject", data => {
      delete Sockets[data.username];
      console.log(`removed user ${data.username} from Socket object`);
      //console.log(Sockets);
    });
    socket.on("CheckAndConnectUserToPlayer",data=>{
      var check=Check(data.username)
      console.log(check)
      if(check[0]==='playersavailable'){
         console.log("sending player",check[1])
         if(Sockets[check[1]]){
         Sockets[check[1]].emit("incomingplayer",{
           opponentname:data.username
         })
         console.log(`sended ${data.username} to ${check[1]}`)
        }
        else{
          socket.emit("playerdisconnected",{
            message:'player disconnected,you win'
          })
         
        }
        if(socket){
          socket.emit("incomingplayer",{
            opponentname:check[1]
          })
         console.log(`sended ${check[1]} to ${data.username}`)
      //   console.log(Sockets)
        }
        else{
          Sockets[check[1]].emit("playerdisconnected",{
            message:'playerdisconnected,you win'
          })
        }
      }
      else if(check[0]==='noplayersavailable'){
        console.log("no player available emited to socket",data.username)
        socket.emit("runerror",{
          message:'no players available,please try again later or wait for players to join..'
        })
      }
    })
    socket.on("playermove",(data)=>{
     Sockets[data.to].emit("opponentmove",{
       from:data.from,
       move:data.move
     })
    })
    socket.on("disconnectUserFromPlay",(data)=>{
      if(Sockets[data.username]){
        Sockets[data.username]["lookingforPlayers"]=false
        Sockets[data.username]["playingStatus"]=false
        Sockets[data.username].emit("playerdisconnected",{
          message:'YOU LOSE THE SERIES'
        })
      }
      else{
        console.log("socket not found")
      }
      if(Sockets[data.connectedplayername]){
        Sockets[data.connectedplayername]["lookingforPlayers"]=false
        Sockets[data.connectedplayername]["playingStatus"]=false
        Sockets[data.connectedplayername].emit("playerdisconnected",{
          message:'OPPONENT DISCONNECTED,YOU WIN THE SERIES'
        })
      }
      else{
        console.log("socket not found")
      }
    })
  });
};
