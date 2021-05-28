import React,{useState,useEffect} from 'react';
import ErrorBoundary from './ErrorBoundary';

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.tryingRef=React.createRef();
      this.state = {
        isLoggedIn: true,
        login:"please Login",
        loginbtn:"Login"
      };
    }
  //define in this.state, and then useeffect() mai dalo--only for functions--{counRef.current}--> const countRef=useRef(0);
    handleClick=()=> {
        
        const bool=this.state.isLoggedIn;
        let templogin='please Login';
        let tempLoginBtn='Login';
        if(bool)
        {
            templogin='please Logout';
            tempLoginBtn='Logout';
        }
        this.setState({
            isLoggedIn: !this.state.isLoggedIn,
            login: templogin,
            loginbtn: tempLoginBtn
      });
    }
    handlechange=(event)=>
    {
        this.setState({
            login: event.target.value,
        })
    }

    componentDidUpdate(){

        this.tryingRef.current.focus();
    }
    
  
    render() {
        if(this.state.login==='aishu'){
            throw new Error('crashed');
        }
        return (
            <div style={{
                textAlign:'center',
            }}>
            <p>{this.state.login} {this.props.msg}</p>
            
            <p><input type="text" value={this.state.login} ref={this.tryingRef} onChange={(e)=>{this.setState({login: e.target.value});}} /></p>
            <p>
                <label>button: </label>
                <button onClick={this.handleClick}>{this.state.loginbtn}</button></p>
            </div>
        );
    }
}
export default LoginControl;
  
