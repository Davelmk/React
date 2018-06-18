import React,{Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    onChange(event){
        this.setState({value: event.target.value.toUpperCase()});
    }
    onSubmit(event){
        alert('Submit:'+this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.onChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
export default Form;