import React from 'react';
import { userContext } from "../Contexts/UserContext";

class Logout extends React.Component {
    static contextType=userContext
    componentDidMount(){
        const {updateuser}=this.context
        fetch("http://localhost:3000/users/logout", {
            
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
                       updateuser(null)
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