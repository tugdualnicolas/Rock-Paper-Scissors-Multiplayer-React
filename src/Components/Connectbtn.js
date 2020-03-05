import React,{Component} from 'react';
//import ioconnect from "socket.io-client"


class Connectbtn extends Component {

    render() { 

        return ( 
            <div className="connectbtn">
                <button onClick={this.props.btnmsg==='CONNECT'?this.props.sendConnectreq:this.props.sendDisConnectreq} >{this.props.btnmsg}</button>
            </div>
         );
    }
}
 
export default Connectbtn;