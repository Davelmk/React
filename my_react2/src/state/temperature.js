import React,{Component} from 'react';

function BoilingVerdict(props){
    if(props.temperature>=100&&props.scale==='c'){
        return(<p>The water would boil.</p>);
    }else if(props.scale==='f'&&toCelsius(props.temperature)>=100){
        return(<p>The water would boil.</p>);
    }else{
        return(<p>The water would not boil.</p>);
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}; 

function toCelsius(f){
    return(f-32)*5/9;
}
function toFahrenheit(c){
    return (c * 9 / 5) + 32
}
function tryConvert(temperature, convert){
    const input=parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output=convert(input);
    const rounded=Math.round(output*1000)/1000;
    return rounded.toString();

}
class TemperatureInput extends Component{
    constructor(props){
        super(props);
        this.state={
            temperature:''
        }
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        this.props.onTemperatureChange(event.target.value);
    }
    render(){
        const temperature=this.props.temperature;
        const scale=this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input 
                value={temperature}
                onChange={this.handleInputChange}/>
            </fieldset>
        );
    }
}

class Temperature  extends Component{
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'c'
        };
    }
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }
    
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return(
            <div>
                <TemperatureInput 
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput 
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict 
                    scale={scale}
                    temperature={parseFloat(temperature)}
                />
            </div>
        );
    }
}
export default Temperature ;