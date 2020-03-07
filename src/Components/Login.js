import React, { Component} from "react";
import Errormsg from "./Errormsg";
import Multiplayer from "./Multiplayer";
//import { userContext } from "../Contexts/UserContext";
//import { Redirect } from 'react-router-dom'
class Login extends Component {
  state = {
    username: "",
    password: "",
    errormsg: ""
  };

  componentDidMount() {
    // fetch("http://localhost:3000/users/login", {
    //   method: "POST",
    //   credentials: 'include',
    //   headers: {
    //     Access: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.password
    //   })
    // }).then(res=>{
    //   res.json()
    //   .then(json=>{
    //     // if(json){
    //     //   if(json.status===200){
    //     //     this.props.history.push('/multiplayerplayer')
    //     //   }
    //     // }
    //     console.log(json)
    //   })
    // })
    console.log("mounted login");
  }
  login = e => {
    e.preventDefault();
   // const { updateuser } = this.context;

    fetch("http://localhost:3000/users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        Access: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(res => {
      res.json().then(json => {
        if (json) {
          console.log(json);
          if (json.info) {
            this.setState({
              errormsg: json.info.message
            });
          } else if (json.user) {
           this.props.setloggedinUser(json.user)
           this.props.setlogstate('logout')
           // return <Redirect to='/multiplayer' /> 
           this.props.history.push('/multiplayer')
          }
        }
      });
    });
  };

  render() {
    const { user } = this.context;
    if (!user) {
      return (
        <div className="login">
          <form onSubmit={this.login}>
            <div className="container">
              <label htmlFor="uname">
                <b>Username</b>
              </label>
              <input
                type="text"
                value={this.state.username}
                placeholder="Enter Username"
                name="uname"
                required
                onChange={e => {
                  this.setState({ username: e.target.value });
                }}
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                value={this.state.password}
                placeholder="Enter Password"
                name="psw"
                required
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
              />

              <button type="submit">Login</button>
              {this.state.errormsg ? (
                <Errormsg errormsg={this.state.errormsg} />
              ) : (
                ""
              )}
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
            </div>

            <div className="container">
              <button
                type="button"
                className="cancelbtn"
                onClick={() => {
                  this.props.history.push("/singleplayer");
                }}
              >
                Cancel
              </button>
              <span className="psw">
                <a href="gttg">Forgot password?</a>
              </span>
            </div>
          </form>
        </div>
      );
    } else {
      return <Multiplayer />;
    }
  }
}

export default Login;
