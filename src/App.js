import React from 'react';
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
  // const [loggedinUser,setloggedinUser]=useState(null)
  return (
    <div className="App">
           
          <BrowserRouter>
          <UserContextProvider>
          <Navbar />
          <Switch>
          <Route path="/singleplayer" component={SApp}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/multiplayer" component={MApp} />
          </Switch>
          </UserContextProvider>
          </BrowserRouter>
    </div>
  );
}

export default App;
