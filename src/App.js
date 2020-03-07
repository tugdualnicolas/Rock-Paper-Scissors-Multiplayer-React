import React, { useState,useEffect } from 'react';
//import Home from './Components/Home';
import Navbar from "./Components/Navbar"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import SApp from './Components/SinglePlayer';
import MApp from './Components/Multiplayer'
import Login from "./Components/Login"
import Signup from './Components/Signup';
import UserContextProvider from './Contexts/UserContext';
import Logout from './Components/Logout';
function App() {
  const [loggedinUser,setloggedinUser]=useState(null)
  const [logstate,setlogstate]=useState('login')
   useEffect(()=>{
     console.log("app mounted");
     fetch("http://localhost:3000/users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        Access: "application/json",
        "Content-Type": "application/json"
      },
      // body: JSON.stringify({
      //   username: "",
      //   password: ""
      // })
    }).then(res=>{
      return res.json()
    }).then(json=>{
       if(json){
         if(json.status===200){
           console.log(json)
           setloggedinUser(json.user)
           console.log("set already logged in")
         
           setlogstate('logout')
         }
       }
    })
   },[])
  return (

    <div className="App">
           
          <BrowserRouter>
          <UserContextProvider>
          <Navbar logstate={logstate} />
          <Switch>
          <Route path="/singleplayer" component={SApp}/>
          <Route path="/login" render={(props)=>(<Login {...props} loggedinUser={loggedinUser} setloggedinUser={setloggedinUser} logstate={logstate} setlogstate={setlogstate}/>)}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/logout" render={(props)=>(<Logout {...props} setlogstate={setlogstate} setloggedinUser={setloggedinUser} />)}/>
          <Route path="/multiplayer" render={(props)=>(<MApp {...props} loggedinUser={loggedinUser?loggedinUser.username:null}/>)} />
          </Switch>
          </UserContextProvider>
          </BrowserRouter>
    </div>
  );
}

export default App;
