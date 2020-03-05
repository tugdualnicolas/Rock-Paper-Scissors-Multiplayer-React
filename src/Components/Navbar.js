import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { userContext } from "../Contexts/UserContext";
class Navbar extends Component {
  static contextType = userContext;

  state = {
    logginstate:'fdf'
  };
  // componentDidMount(){
  //   const { logstate } = this.context;
  //   this.setState({
  //     logginstate:logstate
  //   })
  // }
  render() {
    const {logstate}=this.context
    console.log(logstate)

    // if(user){
    //   this.setState({
    //     logginstate:"logout"
    //   })

    // }
    // else{
    //   this.setState({
    //     logginstate:'login'
    //   })
    // }
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a className="nav-link" href="/singleplayer">Singleplayer</a> */}
              {/* <NavLink to="/singleplayer">Singleplayer</NavLink> */}
              <div className="nav-link">
                <NavLink to="/singleplayer">Singleplayer</NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <NavLink to="/Multiplayer">Multiplayer</NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <NavLink to="/Friends">Friends</NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div className="mx-auto order-0">
          <div className="nav-link-center">
            <NavLink to="/singleplayer">ROCK,PAPER,SCISSORS</NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="nav-link">
                {/* <Link to="/login">{this.state.loginState}</Link> */}
                <Link to={logstate === "login" ? "/login" : "/logout"}>
                  {logstate === "login" ? "login" : "logout"}
                </Link>
              </div>
            </li>
            <li>
              <div className="nav-link">
                <NavLink to="/signup">Signup</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
