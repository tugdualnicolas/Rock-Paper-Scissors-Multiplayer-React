import React from 'react';
//import { userContext } from "../Contexts/UserContext";

class Logout extends React.Component {

    componentDidMount(){
       
        fetch("/users/logout", {
            
            credentials: 'include',
            headers: {
              Access: "application/json",
              "Content-Type": "application/json"
            },
            // body: JSON.stringify({
            //   username: this.state.username,
            //   password: this.state.password
            // })
          }).then(res=>{
              res.json()
              .then(json=>{
                  if(json){
                      if(json.info==="loggedout"){
                          console.log("logedout")
                          this.props.setloggedinUser(null)
                       this.props.setlogstate('login')
                       this.props.history.push('./singleplayer')
                      }
                  }
              })
          })
    }
    render() { 
       
        return ( 
            <p>logging out</p>
         );
    }
}
 
export default Logout;