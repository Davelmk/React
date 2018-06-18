import React from 'react';

function Login(){
    return(
        <h1>Please sign up.</h1>
    );
}
function Logout(){
    return(
        <h1>Welcome back!</h1>
    );
}
function ReturnLoginState(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <Logout/>;
    }else{
        return <Login/>;
    }
}
function LoginButton(props){
    return(
        <button onClick={props.onClick}>Login</button>
    );
}
function LogoutButton(props){
    return(
        <button onClick={props.onClick}>Logout</button>  
    );
}

class LoginControl extends React.Component{
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn:true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn:false});
    }
    render(){
        const isLoggedIn=this.state.isLoggedIn;
        let button=null;
        if(isLoggedIn){
            button=<LogoutButton onClick={this.handleLogoutClick}/>
        }else{
            button=<LoginButton onClick={this.handleLoginClick}/>
        }
        return(
            <div>
                <ReturnLoginState isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}
export default LoginControl;