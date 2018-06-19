import React,{Component} from 'react';
import './style.css'

function SplitePanel(props){
    return(
        <div className="SplitPanel">
            <div className="SplitPanel-left">
                {props.left}
            </div>
            <div className="SplitPanel-right">
                {props.right}
            </div>
        </div>
    );
}
function LeftPanel(){
    return(
        <div className="Contacts"/>
    );
}
function RightPanel(){
    return(
        <div className="Chat"/>
    );
}
class Panel extends Component{
    render(){
        return(
            <SplitePanel 
                left={<LeftPanel/>}
                right={<RightPanel/>}>
            </SplitePanel>
        );
    }
}
export default Panel;