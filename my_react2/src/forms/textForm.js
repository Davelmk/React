import React,{Component} from 'react';

class TextForm extends Component{
    constructor(props){
        super(props);
        this.state={
            value: 'Please write an essay about your favorite DOM element.'
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
                <textarea value={this.state.value} onChange={this.onChange} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
export default TextForm;