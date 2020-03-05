import React,{Component} from 'react';

class Errormsg extends Component {
  
    render() { 
        return ( 
            <div className="errormsg" >
            <p>{this.props.errormsg}</p>
            </div>
         );
    }
}
 
export default Errormsg;
