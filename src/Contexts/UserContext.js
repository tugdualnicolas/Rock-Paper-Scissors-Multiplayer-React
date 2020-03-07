import React,{createContext} from 'react';

export const userContext=createContext()

class UserContextProvider extends React.Component {
    state = { 
        user:null,
        logstate:'login'
     }
     updateuser=(user)=>{
         if(user){
            this.setState({
                user:user,
                logstate:'logout'
             },()=>{
                 console.log("updated user")
             })
         }
         else if(!user){
            this.setState({
                user:user,
                logstate:'login'
             })
         }
      
     }
    render() { 
        return ( 
            <userContext.Provider value={{userdata:this.state,updateuser:this.updateuser}}>
                {this.props.children}
            </userContext.Provider>
         );
    }
}
 
export default UserContextProvider;

