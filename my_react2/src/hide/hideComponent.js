import React,{Component} from 'react'

function WarningBanner(props){
    if(props.warning){
        return null;
    }
    return(
        <div>
           Warning 
        </div>
    );
}

class Page extends Component{
    constructor(props){
        super(props);
        this.state={
            warningState:true
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(
            prevState=>({warningState:!prevState.warningState})
        );
    }
    render(){
        return(
            <div>
                <WarningBanner warning={this.state.warningState}/>
                <button onClick={this.handleClick}>
                    {this.state.warningState?'show':'hide'}
                </button>
            </div>
        );
    }
}
export default Page;