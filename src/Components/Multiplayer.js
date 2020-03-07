
import React, { Component } from "react";
//import {BrowserRouter} from "react-router-dom"
//import userContext from "../Contexts/UserContext"
import ioconnect from "socket.io-client"
import Scoreboard from "./ScoreBoard";
import Result from "./Result";
import Choices from "./Choices";
import rock from "../images/rock.png";
import scissor from "../images/scissors.png";
import paper from "../images/paper.png";
import Connectbtn from "../Components/Connectbtn"
import {Redirect} from "react-router-dom"

class MApp extends Component {
  
 
  state = {
    
    socket:ioconnect("http://localhost:3000"),
    images: [
      { id: "rock", image: rock, clicked: false },
      { id: "paper", image: paper, clicked: false },
      { id: "scissor", image: scissor, clicked: false }
    ],
    scores: [{ userscore: 0 }, { compscore: 0 }],
    resultimages: [
      { id: "rock", image: rock },
      { id: "paper", image: paper }
    ],
    btnmsg:"CONNECT",
 
    resultmsg: "please connect to player to start playing",
    playcounter:0,
    username:this.props.loggedinUser,
    opponentname:"",
    opponentmove:"",
    usermove:"",
    noofplays:0,
    playswon:0
  };
  setupBeforeUnloadListener = () => {
    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        this.state.socket.emit("disconnectUserFromPlay",{
          username:this.state.username,
          connectedplayername:this.state.opponentname
        })
    });
};
   setusername=()=>{
  //console.log(this.state.username)
   }
  
  componentDidMount(){
    
    console.log("multiplayer mounted")
    this.setupBeforeUnloadListener();
     
   if(this.state.username){
    //console.log("mount username state:",this.state.username)
      this.state.socket.emit("addUserToSocketObject",{
        username:this.state.username
      })
   }
   this.state.socket.on("runerror",(data)=>{
    
      if(data.message){
        this.setState({
          resultmsg:data.message,
         
        })
      }
   })
   this.state.socket.on("incomingplayer",(data)=>{
    // console.log(data.opponentname)
     this.setState({
       opponentname:data.opponentname,
       resultmsg:`Connected to ${data.opponentname},make your move`,
       btnmsg:'DISCONNECT'
     })
   })
   this.state.socket.on("playerdisconnected",(data)=>{
   //  console.log(data.message)
     this.setState({
       resultmsg:`${data.message},you won ${this.state.playswon} out of ${this.state.noofplays} series`,
       btnmsg:'CONNECT',
       opponentname:"",
       playswon:0,
       noofplays:0
     })
   })
   this.state.socket.on("opponentmove",(data)=>{
   // console.log(data)
    // this.setState({
    //   resultmsg:'opponent have made the move,waiting'
    // })
    this.setState({
      opponentmove:data.move

    })
    if(this.state.usermove){
    //  console.log("called by opponenttrigger,this.statee.usermove is:",this.state.usermove)
      this.game(this.state.usermove)


      this.setState({
        usermove:"",
        opponentmove:"",
        
      })
      // if(this.state.playcounter===3){
      //   if(this.state.scores[0].userscore>=2){
      //     this.setState(
      //       {
      //         resultmsg:'YOU WON THE SERIES',
      //         scores: [{ userscore: 0 }, { compscore: 0 }],
      //         playcounter:0
      //       }
      //     )
      //   }
      //   else if(this.state.scores[1].compscore>=2){
      //     this.setState({
      //       resultmsg:'YOU LOST THE SERIES',
      //       scores: [{ userscore: 0 }, { compscore: 0 }],
      //       playcounter:0
      //     })
      //   }
      //   else{
      //     this.setState({
      //       resultmsg:'The series is a draw'
      //     })
      //   }
      //  }
    }
    else{
      this.setState({
        resultmsg:`opponent have made the move,waiting for your move.`
      })
    }
  })
  }
  componentWillUnmount(){
    this.state.socket.emit("disconnectUserFromPlay",{
      username:this.state.username,
      connectedplayername:this.state.opponentname
    })
  }
  sendConnectreq=()=>{
  //  console.log("connect request send")
    this.state.socket.emit("CheckAndConnectUserToPlayer",{
    
      username:this.state.username
    })
    this.setState({
      resultmsg:'waiting for players to connect..',
     
    })
   
  } 
  sendDisConnectreq=()=>{
   // console.log("disconnect request send")
    this.state.socket.emit("disconnectUserFromPlay",{
      username:this.state.username,
      connectedplayername:this.state.opponentname
    })
    this.setState({
      btnmsg:'CONNECT'
    })
  }
  getcomputerchoice = () => {
    const choicearray = ["rock", "paper", "scissor"];
    const choice = Math.floor(Math.random() * 3);
    return choicearray[choice];
  };
  getimage = choice => {
    if (choice === "rock") return rock;
    else if (choice === "paper") return paper;
    else if (choice === "scissor") return scissor;
  };
  win = (userchoice, computerchoice) => {
    const images = this.state.images.map(image => {
      if (image.id === userchoice) {
        return { id: image.id, image: image.image, clicked: "choice-green" };
      } else return image;
    });

    const currentuserscore = this.state.scores[0].userscore;
    const currentcompscore = this.state.scores[1].compscore;
    const scores = [
      { userscore: currentuserscore + 1 },
      { compscore: currentcompscore }
    ];

    const resultimages = [
      { id: userchoice, image: this.getimage(userchoice) },
      { id: computerchoice, image: this.getimage(computerchoice) }
    ];
    this.setState({
      images,
      resultimages,
      scores
    },()=>{
      if(this.state.scores[0].userscore>=2){
        const resultmsg = "YOU WIN THE SERIES";
      this.setState({
        playswon:this.state.playswon+1,
        scores: [{ userscore: 0 }, { compscore: 0 }],
        resultmsg,
        noofplays:this.state.noofplays+1
      });
      }
      else{
        const resultmsg = "YOU WIN";
      this.setState({
        resultmsg
        
      });
      }
    })

    
    setTimeout(() => {
      const images = this.state.images.map(image => {
        if (image.clicked) {
          return { id: image.id, image: image.image, clicked: false };
        } else return image;
      });
      this.setState({
        images
      });
      //console.log(images)
    }, 400);
   // console.log("you win");
  };
  lose = (userchoice, computerchoice) => {
    const images = this.state.images.map(image => {
      if (image.id === userchoice) {
        return { id: image.id, image: image.image, clicked: "choice-red" };
      } else return image;
    });

    const currentuserscore = this.state.scores[0].userscore;
    const currentcompscore = this.state.scores[1].compscore;
    const scores = [
      { userscore: currentuserscore },
      { compscore: currentcompscore + 1 }
    ];

    const resultimages = [
      { id: userchoice, image: this.getimage(userchoice) },
      { id: computerchoice, image: this.getimage(computerchoice) }
    ];
    this.setState({
      scores,
      images,
      resultimages,
    },()=>{
      if(this.state.scores[1].compscore>=2){
        const resultmsg = "YOU LOSE THE SERIES";
      this.setState({
        noofplays:this.state.noofplays+1,
        scores: [{ userscore: 0 }, { compscore: 0 }],
        resultmsg
      });
      }
      else{
        //console.log(this.state.scores[1].compscore)
        const resultmsg = "YOU LOSE";
      this.setState({
        resultmsg
      });
      }
    })
  


    setTimeout(() => {
      const images = this.state.images.map(image => {
        if (image.clicked) {
          return { id: image.id, image: image.image, clicked: false };
        } else return image;
      });
      this.setState({
        images
      });
    }, 400);
   // console.log("you lose");
  };
  draw = (userchoice, computerchoice) => {
    //console.log(e.classList)
    const images = this.state.images.map(image => {
      if (image.id === userchoice) {
        return { id: image.id, image: image.image, clicked: "choice-grey" };
      } else return image;
    });

    const resultimages = [
      { id: userchoice, image: this.getimage(userchoice) },
      { id: computerchoice, image: this.getimage(computerchoice) }
    ];
    const resultmsg = "ITS A DRAW";
    this.setState({
      images,
      resultimages,
      resultmsg
    });
    setTimeout(() => {
      const images = this.state.images.map(image => {
        if (image.clicked) {
          return { id: image.id, image: image.image, clicked: false };
        } else return image;
      });
      this.setState({
        images
      });
    }, 400);
  //  console.log("draw");
  };
  sendMoveAndGame = userchoice => {
    
    this.state.socket.emit("playermove",{
      from:this.state.username,
      to:this.state.opponentname,
      move:userchoice
    })
   //console.log("userchoice:",userchoice)

    this.setState({
      usermove:userchoice,
    })
  //console.log("usermove after setstae",this.state.usermove)
    if(this.state.opponentmove){
      this.game(userchoice)
     // console.log("called by usertrigger,usermove:",this.state.usermove)
   

      this.setState({
        usermove:"",
        opponentmove:"",
  

      })
    //  if(this.state.playcounter===3){
    //   if(this.state.scores[0].userscore>=2){
    //     this.setState(
    //       {
    //         resultmsg:'YOU WON THE SERIES',
    //         scores: [{ userscore: 0 }, { compscore: 0 }],
    //         playcounter:0
    //       }
    //     )
    //   }
    //   else if(this.state.scores[1].compscore>=2){
    //     this.setState({
    //       resultmsg:'YOU LOST THE SERIES',
    //       scores: [{ userscore: 0 }, { compscore: 0 }],
    //       playcounter:0
    //     })
    //   }
    //   else{
    //     this.setState({
    //       resultmsg:'The series is a draw'
    //     })
    //   }
    //  }
    // }
  }
    else{
      this.setState({
        resultmsg:`waiting for opponentmove`
      })
    }
  }
  game=(userchoice)=>{
    var computerchoice = this.state.opponentmove
   // console.log("usermove:",this.state.usermove,userchoice,"opponentmove:",this.state.opponentmove,computerchoice)

    switch (userchoice + computerchoice) {
      case "rockscissor":
      case "scissorpaper":
      case "paperrock":
        this.win(userchoice, computerchoice);
        break;
      case "scissorrock":
      case "paperscissor":
      case "rockpaper":
        this.lose(userchoice, computerchoice);
        break;
      default:
        this.draw(userchoice, computerchoice);
    }
  }
  render(){
    this.setusername()
    if(!this.state.username){
     // console.log("mount username state:",this.state.username)
  
      alert("please login to play multiplayer");
        return <Redirect to='/login' /> 
     }
     else{
    return (
      
      <div className="Multiplayer">
       
       {this.state.opponentname?(<div>   
         <Scoreboard scores={this.state.scores} opponentname={this.state.opponentname} username={this.state.username}/>
        <Result
          resultimages={this.state.resultimages}
          resultmsg={this.state.resultmsg}
        />
        <Choices choices={this.state.images} connectionstatus={this.state.connectionstatus} game={this.sendMoveAndGame}  />
        <Connectbtn sendConnectreq={this.sendConnectreq} socket={this.state.socket} sendDisConnectreq={this.sendDisConnectreq} btnmsg={this.state.btnmsg} />
        </div>):(<div className="connectmsg"><p>{this.state.resultmsg}</p><Connectbtn sendConnectreq={this.sendConnectreq} sendDisConnectreq={this.sendDisConnectreq} btnmsg={this.state.btnmsg} /></div>)}
      </div>
    );
       }
  }
}


export default MApp;
