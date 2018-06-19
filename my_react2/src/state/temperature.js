import React,{Component} from 'react';

function BoilingVerdict(props){
    if(props.temperature>=100){
        return(<p>The water would boil.</p>);
    }
    return(<p>The water would not boil.</p>);
}

class Temperature  extends Component{
    constructor(props){
        super(props);
        this.state={
            temperature:''
        }
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        this.setState({temperature:event.target.value});
    }
    render(){
        const temperature=this.state.temperature;
        return(
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input 
                value={this.state.temperature}
                onChange={this.handleInputChange}/>
                <BoilingVerdict temperature={parseFloat(temperature)}/>
            </fieldset>
        );
    }
}
export default Temperature ;