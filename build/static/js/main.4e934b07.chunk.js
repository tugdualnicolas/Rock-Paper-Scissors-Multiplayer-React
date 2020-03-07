(this["webpackJsonprock-paper-scissor-multi"]=this["webpackJsonprock-paper-scissor-multi"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/rock.a94e17c0.png"},14:function(e,t,a){e.exports=a.p+"static/media/paper.b7445e2a.png"},17:function(e,t,a){e.exports=a.p+"static/media/scissors.0af33929.png"},52:function(e,t,a){e.exports=a(92)},57:function(e,t,a){},89:function(e,t){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(47),o=a.n(r),c=(a(57),a(31)),i=a(1),l=a(2),m=a(4),u=a(3),p=a(5),g=a(9),d=Object(n.createContext)(),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={user:null,logstate:"login"},a.updateuser=function(e){e?a.setState({user:e,logstate:"logout"},(function(){console.log("updated user")})):e||a.setState({user:e,logstate:"login"})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(d.Provider,{value:{userdata:this.state,updateuser:this.updateuser}},this.props.children)}}]),t}(s.a.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={logginstate:"fdf"},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},s.a.createElement("div",{className:"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement("div",{className:"nav-link"},s.a.createElement(g.c,{to:"/singleplayer"},"Singleplayer"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("div",{className:"nav-link"},s.a.createElement(g.c,{to:"/Multiplayer"},"Multiplayer"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("div",{className:"nav-link"},s.a.createElement(g.c,{to:"/Friends"},"Friends"))))),s.a.createElement("div",{className:"mx-auto order-0"},s.a.createElement("div",{className:"nav-link-center"},s.a.createElement(g.c,{to:"/singleplayer"},"ROCK,PAPER,SCISSORS")),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":".dual-collapse2"},s.a.createElement("span",{className:"navbar-toggler-icon"}))),s.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"},s.a.createElement("ul",{className:"navbar-nav ml-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("div",{className:"nav-link"},s.a.createElement(g.b,{to:"login"===this.props.logstate?"/login":"/logout"},"login"===this.props.logstate?"login":"logout"))),s.a.createElement("li",null,s.a.createElement("div",{className:"nav-link"},s.a.createElement(g.c,{to:"/signup"},"Signup"))))))}}]),t}(n.Component);f.contextType=d;var b=f,v=a(12),E=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.scores;return s.a.createElement("div",{className:"scoreboard"},s.a.createElement("div",{id:"user-label",className:"badge"},this.props.username),s.a.createElement("div",{id:"comp-label",className:"badge"},this.props.opponentname),s.a.createElement("span",{id:"user-score"},e[0].userscore),":",s.a.createElement("span",{id:"comp-score"},e[1].compscore))}}]),t}(s.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resultmsg,t=this.props.resultimages;return s.a.createElement("div",{className:"result"},s.a.createElement("div",{className:"elem1",id:"user"},s.a.createElement("p",null,"User"),s.a.createElement("img",{src:t[0].image,alt:"resultimage",id:"user-img"})),s.a.createElement("div",{className:"elem1",id:"welcome"},s.a.createElement("p",{id:"result-message"},e)),s.a.createElement("div",{className:"elem1",id:"computer"},s.a.createElement("p",null,"Computer"),s.a.createElement("img",{src:t[1].image,alt:"compimage",id:"comp-img"})))}}]),t}(s.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.choices.map((function(t){var a=t.clicked,n=a||"choice";return s.a.createElement("div",{className:n,id:t.id,role:"button",tabIndex:"0",key:t.id,onClick:function(){return e.props.game(t.id)},onKeyDown:function(){return e.props.game(t.id)}},s.a.createElement("img",{src:t.image,alt:t.id,height:"100"}))}));return s.a.createElement("div",{className:"choices"},t)}}]),t}(s.a.Component),O=a(13),j=a.n(O),S=a(17),w=a.n(S),N=a(14),C=a.n(N),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={images:[{id:"rock",image:j.a,clicked:!1},{id:"paper",image:C.a,clicked:!1},{id:"scissor",image:w.a,clicked:!1}],scores:[{userscore:0},{compscore:0}],resultimages:[{id:"rock",image:j.a},{id:"paper",image:C.a}],resultmsg:"welcome",username:"alvin",opponentname:"computer"},a.getcomputerchoice=function(){return["rock","paper","scissor"][Math.floor(3*Math.random())]},a.getimage=function(e){return"rock"===e?j.a:"paper"===e?C.a:"scissor"===e?w.a:void 0},a.win=function(e,t){var n=a.state.images.map((function(t){return t.id===e?{id:t.id,image:t.image,clicked:"choice-green"}:t})),s=[{userscore:a.state.scores[0].userscore+1},{compscore:a.state.scores[1].compscore}],r=[{id:e,image:a.getimage(e)},{id:t,image:a.getimage(t)}];a.setState({images:n,resultimages:r,scores:s,resultmsg:"YOU WIN"}),setTimeout((function(){var e=a.state.images.map((function(e){return e.clicked?{id:e.id,image:e.image,clicked:!1}:e}));a.setState({images:e})}),400),console.log("you win")},a.lose=function(e,t){var n=a.state.images.map((function(t){return t.id===e?{id:t.id,image:t.image,clicked:"choice-red"}:t})),s=[{userscore:a.state.scores[0].userscore},{compscore:a.state.scores[1].compscore+1}],r=[{id:e,image:a.getimage(e)},{id:t,image:a.getimage(t)}];a.setState({images:n,resultimages:r,scores:s,resultmsg:"YOU LOSE"}),setTimeout((function(){var e=a.state.images.map((function(e){return e.clicked?{id:e.id,image:e.image,clicked:!1}:e}));a.setState({images:e})}),400),console.log("you lose")},a.draw=function(e,t){var n=a.state.images.map((function(t){return t.id===e?{id:t.id,image:t.image,clicked:"choice-grey"}:t})),s=[{id:e,image:a.getimage(e)},{id:t,image:a.getimage(t)}];a.setState({images:n,resultimages:s,resultmsg:"ITS A DRAW"}),setTimeout((function(){var e=a.state.images.map((function(e){return e.clicked?{id:e.id,image:e.image,clicked:!1}:e}));a.setState({images:e})}),400),console.log("draw")},a.game=function(e){var t=a.getcomputerchoice();switch(e+t){case"rockscissor":case"scissorpaper":case"paperrock":a.win(e,t);break;case"scissorrock":case"paperscissor":case"rockpaper":a.lose(e,t);break;default:a.draw(e,t)}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Singleplayer"},s.a.createElement(E,{scores:this.state.scores,username:this.state.username,opponentname:this.state.opponentname}),s.a.createElement(y,{resultimages:this.state.resultimages,resultmsg:this.state.resultmsg}),s.a.createElement(k,{choices:this.state.images,game:this.game}))}}]),t}(n.Component),T=a(50),A=a.n(T),q=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"connectbtn"},s.a.createElement("button",{onClick:"CONNECT"===this.props.btnmsg?this.props.sendConnectreq:this.props.sendDisConnectreq},this.props.btnmsg))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={socket:A()("/"),images:[{id:"rock",image:j.a,clicked:!1},{id:"paper",image:C.a,clicked:!1},{id:"scissor",image:w.a,clicked:!1}],scores:[{userscore:0},{compscore:0}],resultimages:[{id:"rock",image:j.a},{id:"paper",image:C.a}],btnmsg:"CONNECT",resultmsg:"please connect to player to start playing",playcounter:0,username:a.props.loggedinUser,opponentname:"",opponentmove:"",usermove:"",noofplays:0,playswon:0},a.setupBeforeUnloadListener=function(){window.addEventListener("beforeunload",(function(e){e.preventDefault(),a.state.socket.emit("disconnectUserFromPlay",{username:a.state.username,connectedplayername:a.state.opponentname})}))},a.setusername=function(){},a.sendConnectreq=function(){a.state.socket.emit("CheckAndConnectUserToPlayer",{username:a.state.username}),a.setState({resultmsg:"waiting for players to connect.."})},a.sendDisConnectreq=function(){a.state.socket.emit("disconnectUserFromPlay",{username:a.state.username,connectedplayername:a.state.opponentname}),a.setState({btnmsg:"CONNECT"})},a.getcomputerchoice=function(){return["rock","paper","scissor"][Math.floor(3*Math.random())]},a.getimage=function(e){return"rock"===e?j.a:"paper"===e?C.a:"scissor"===e?w.a:void 0},a.win=function(e,t){var n=a.state.images.map((function(t){return t.id===e?{id:t.id,image:t.image,clicked:"choice-green"}:t})),s=[{userscore:a.state.scores[0].userscore+1},{compscore:a.state.scores[1].compscore}],r=[{id:e,image:a.getimage(e)},{id:t,image:a.getimage(t)}];a.setState({images:n,resultimages:r,scores:s},(function(){if(a.state.scores[0].userscore>=2){a.setState({playswon:a.state.playswon+1,scores:[{userscore:0},{compscore:0}],resultmsg:"YOU WIN THE SERIES",noofplays:a.state.noofplays+1})}else{a.setState({resultmsg:"YOU WIN"})}})),setTimeout((function(){var e=a.state.images.map((function(e){return e.clicked?{id:e.id,image:e.image,clicked:!1}:e}));a.setState({images:e})}),400)},a.lose=function(e,t){var n=a.state.images.map((function(t){return t.id===e?{id:t.id,image:t.image,clicked:"choice-red"}:t})),s=[{userscore:a.state.scores[0].userscore},{compscore:a.state.scores[1].compscore+1}],r=[{id:e,image:a.getimage(e)},{id:t,image:a.getimage(t)}];a.setState({scores:s,images:n,resultimages:r},(function(){if(a.state.scores[1].compscore>=2){a.setState({noofplays:a.state.noofplays+1,scores:[{userscore:0},{compscore:0}],resultmsg:"YOU LOSE THE SERIES"})}else{a.setState({resultmsg:"YOU LOSE"})}})),setTimeout((function(){var e=a.state.images.map((function(e){return e.clicked?{id:e.id,image:e.image,clicked:!1}:e}));a.setState({images:e})}),400)},a.draw=function(e,t){var n=a.state.images.map((function(t){return t.id===e?{id:t.id,image:t.image,clicked:"choice-grey"}:t})),s=[{id:e,image:a.getimage(e)},{id:t,image:a.getimage(t)}];a.setState({images:n,resultimages:s,resultmsg:"ITS A DRAW"}),setTimeout((function(){var e=a.state.images.map((function(e){return e.clicked?{id:e.id,image:e.image,clicked:!1}:e}));a.setState({images:e})}),400)},a.sendMoveAndGame=function(e){a.state.socket.emit("playermove",{from:a.state.username,to:a.state.opponentname,move:e}),a.setState({usermove:e}),a.state.opponentmove?(a.game(e),a.setState({usermove:"",opponentmove:""})):a.setState({resultmsg:"waiting for opponentmove"})},a.game=function(e){var t=a.state.opponentmove;switch(e+t){case"rockscissor":case"scissorpaper":case"paperrock":a.win(e,t);break;case"scissorrock":case"paperscissor":case"rockpaper":a.lose(e,t);break;default:a.draw(e,t)}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("multiplayer mounted"),this.setupBeforeUnloadListener(),this.state.username&&this.state.socket.emit("addUserToSocketObject",{username:this.state.username}),this.state.socket.on("runerror",(function(t){t.message&&e.setState({resultmsg:t.message})})),this.state.socket.on("incomingplayer",(function(t){e.setState({opponentname:t.opponentname,resultmsg:"Connected to ".concat(t.opponentname,",make your move"),btnmsg:"DISCONNECT"})})),this.state.socket.on("playerdisconnected",(function(t){e.setState({resultmsg:"".concat(t.message,",you won ").concat(e.state.playswon," out of ").concat(e.state.noofplays," series"),btnmsg:"CONNECT",opponentname:"",playswon:0,noofplays:0})})),this.state.socket.on("opponentmove",(function(t){e.setState({opponentmove:t.move}),e.state.usermove?(e.game(e.state.usermove),e.setState({usermove:"",opponentmove:""})):e.setState({resultmsg:"opponent have made the move,waiting for your move."})}))}},{key:"componentWillUnmount",value:function(){this.state.socket.emit("disconnectUserFromPlay",{username:this.state.username,connectedplayername:this.state.opponentname})}},{key:"render",value:function(){return this.setusername(),this.state.username?s.a.createElement("div",{className:"Multiplayer"},this.state.opponentname?s.a.createElement("div",null,s.a.createElement(E,{scores:this.state.scores,opponentname:this.state.opponentname,username:this.state.username}),s.a.createElement(y,{resultimages:this.state.resultimages,resultmsg:this.state.resultmsg}),s.a.createElement(k,{choices:this.state.images,connectionstatus:this.state.connectionstatus,game:this.sendMoveAndGame}),s.a.createElement(q,{sendConnectreq:this.sendConnectreq,socket:this.state.socket,sendDisConnectreq:this.sendDisConnectreq,btnmsg:this.state.btnmsg})):s.a.createElement("div",{className:"connectmsg"},s.a.createElement("p",null,this.state.resultmsg),s.a.createElement(q,{sendConnectreq:this.sendConnectreq,sendDisConnectreq:this.sendDisConnectreq,btnmsg:this.state.btnmsg}))):(alert("please login to play multiplayer"),s.a.createElement(v.a,{to:"/login"}))}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"errormsg"},s.a.createElement("p",null,this.props.errormsg))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:"",errormsg:""},a.login=function(e){e.preventDefault(),fetch("/users/login",{method:"POST",credentials:"include",headers:{Access:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:a.state.username,password:a.state.password})}).then((function(e){e.json().then((function(e){e&&(console.log(e),e.info?a.setState({errormsg:e.info.message}):e.user&&(a.props.setloggedinUser(e.user),a.props.setlogstate("logout"),a.props.history.push("/multiplayer")))}))}))},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("mounted login")}},{key:"render",value:function(){var e=this;return this.context.user?s.a.createElement(D,null):s.a.createElement("div",{className:"login"},s.a.createElement("form",{onSubmit:this.login},s.a.createElement("div",{className:"container"},s.a.createElement("label",{htmlFor:"uname"},s.a.createElement("b",null,"Username")),s.a.createElement("input",{type:"text",value:this.state.username,placeholder:"Enter Username",name:"uname",required:!0,onChange:function(t){e.setState({username:t.target.value})}}),s.a.createElement("label",{htmlFor:"psw"},s.a.createElement("b",null,"Password")),s.a.createElement("input",{type:"password",value:this.state.password,placeholder:"Enter Password",name:"psw",required:!0,onChange:function(t){e.setState({password:t.target.value})}}),s.a.createElement("button",{type:"submit"},"Login"),this.state.errormsg?s.a.createElement(x,{errormsg:this.state.errormsg}):"",s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",name:"remember"})," Remember me")),s.a.createElement("div",{className:"container"},s.a.createElement("button",{type:"button",className:"cancelbtn",onClick:function(){e.props.history.push("/singleplayer")}},"Cancel"),s.a.createElement("span",{className:"psw"},s.a.createElement("a",{href:"gttg"},"Forgot password?")))))}}]),t}(n.Component),F=a(51),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",name:"",password:"",email:"",errors:{name:"",username:"",email:"",password:""}},a.handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,s=t.value,r=a.state.errors;switch(n){case"name":r.name=s.length<5?"name must be atleast 5 characters long":"";break;case"username":r.username=s.includes(" ")?"username must not contain white spaces":"";break;case"email":r.email=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(s)?"":"Enter a valid email address";break;case"password":r.password=s.length<8?"password must be 8 characters long":""}a.setState(Object(F.a)({errors:r},n,s))},a.validateForm=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},a.handleSubmit=function(e){var t=a.state,n=t.username,s=t.name,r=t.password,o=t.email;if(e.preventDefault(),console.log(a.state),!a.validateForm(a.state.errors))return!1;fetch("/users/signup",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:s,password:r,username:n,email:o})}).then((function(e){e.json().then((function(e){if("success"===e.msg)return console.log("sdss"),a.props.history.push("/singleplayer"),!1;if(e.errors.email){var t=a.state.errors;t.email=e.errors.email,a.setState({errors:t})}if(e.errors.username){var n=a.state.errors;n.username=e.errors.username,a.setState({errors:n})}}))})).catch((function(e){return console.log(e)}))},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.errors;return s.a.createElement("div",{className:"signup"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"SIGNUP"),s.a.createElement("label",{htmlFor:"uname"},s.a.createElement("b",null,"Username"),s.a.createElement("br",null)),s.a.createElement("input",{type:"text",placeholder:"Enter Username",name:"username",required:!0,onChange:function(t){e.handleChange(t)}}),t.username.length>0&&s.a.createElement("span",{className:"error"},t.username),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"name"},s.a.createElement("b",null,"Name")),s.a.createElement("input",{type:"text",placeholder:"Enter Name",name:"name",required:!0,onChange:function(t){e.handleChange(t)}}),t.name.length>0&&s.a.createElement("span",{className:"error"},t.name),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"email"},s.a.createElement("b",null,"Email")),s.a.createElement("input",{type:"text",placeholder:"Enter Email",name:"email",required:!0,onChange:function(t){e.handleChange(t)}}),t.email.length>0&&s.a.createElement("span",{className:"error"},t.email),s.a.createElement("br",null),s.a.createElement("label",{htmlFor:"psw"},s.a.createElement("b",null,"Password")),s.a.createElement("input",{type:"password",placeholder:"Enter Password",name:"password",required:!0,onChange:function(t){e.handleChange(t)}}),t.password.length>0&&s.a.createElement("span",{className:"error"},t.password),s.a.createElement("button",{type:"submit"},"Signup")),this.state.errormsg?this.state.errormsg.map((function(e){return s.a.createElement(x,{errormsg:e,key:10*Math.random()})})):"",s.a.createElement("div",{className:"container"},s.a.createElement("button",{type:"button",className:"cancelbtn",onClick:function(){e.props.history.push("/singleplayer")}},"Cancel"),s.a.createElement("span",{className:"psw"},s.a.createElement("a",{href:"sdfsd"},"Already have an account?,login")))))}}]),t}(n.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/users/logout",{credentials:"include",headers:{Access:"application/json","Content-Type":"application/json"}}).then((function(t){t.json().then((function(t){t&&"loggedout"===t.info&&(console.log("logedout"),e.props.setloggedinUser(null),e.props.setlogstate("login"),e.props.history.push("./singleplayer"))}))}))}},{key:"render",value:function(){return s.a.createElement("p",null,"logging out")}}]),t}(s.a.Component);var R=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("login"),i=Object(c.a)(o,2),l=i[0],m=i[1];return Object(n.useEffect)((function(){console.log("app mounted"),fetch("/users/login",{method:"POST",credentials:"include",headers:{Access:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e&&200===e.status&&(console.log(e),r(e.user),console.log("set already logged in"),m("logout"))}))}),[]),s.a.createElement("div",{className:"App"},s.a.createElement(g.a,null,s.a.createElement(h,null,s.a.createElement(b,{logstate:l}),s.a.createElement(v.d,null,s.a.createElement(v.b,{path:"/singleplayer",component:U}),s.a.createElement(v.b,{path:"/login",render:function(e){return s.a.createElement(P,Object.assign({},e,{loggedinUser:a,setloggedinUser:r,logstate:l,setlogstate:m}))}}),s.a.createElement(v.b,{path:"/signup",component:M}),s.a.createElement(v.b,{path:"/logout",render:function(e){return s.a.createElement(I,Object.assign({},e,{setlogstate:m,setloggedinUser:r}))}}),s.a.createElement(v.b,{path:"/multiplayer",render:function(e){return s.a.createElement(D,Object.assign({},e,{loggedinUser:a?a.username:null}))}})))))};o.a.render(s.a.createElement(R,null),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.4e934b07.chunk.js.map