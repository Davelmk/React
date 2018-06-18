import React,{Component} from 'react'

function MailBox(props){
	const message=props.message;
    return(
        <div>
            <h1>Hello</h1>
            {
                message.length>0
                &&
                <h2>
                    You have {message.length} messages.
                </h2>
            }
        </div>
    );
}
function Login(props){
    const login=props.login;
    return(
        <div>
            The user is <b>{login?'currently':'not'}</b> logged
        </div>
    );
}
const messages = ['React', 'Re: React', 'Re:Re: React'];
class Expression extends Component{
    render(){
        return(
            <div>
                <MailBox message={messages}/>
                <Login login={true}/>
            </div>
        );
    }
}
export default Expression;
