import React,{Component} from 'react';

class Select extends Component{
    constructor(props){
        super(props);
        this.state={
            value: 'coconut'
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    onChange(event){
        this.setState({value: event.target.value});
    }
    onSubmit(event){
        alert('Submit:'+this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
               <label>
                    Pick your favorite La Croix flavor:<br/>
                    <select value={this.state.value} onChange={this.onChange}>
                    {/* <select multiple={true} value={[this.state.value,'mango']} onChange={this.onChange}> */}
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
export default Select;