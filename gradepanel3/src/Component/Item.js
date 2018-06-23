import React,{Component} from 'react';
import '../Style/index.css';

class Item extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    render(){
        return(
            <div>
                <input id={this.props.items[this.props.index][5]} 
                    type="checkbox" 
                    checked={this.props.items[this.props.index][4]} 
                    onChange={this.handleChange} />
                <span>{this.props.caption}</span>&emsp;
                <input className="inputStyle" type="number" 
                    value={this.props.items[this.props.index][0]} readOnly={true}/>
                &emsp;&emsp;
                <input className="inputStyle" type="number" 
                    value={this.props.items[this.props.index][1]} readOnly={true}/>
                &emsp;&emsp;
                <input className="inputStyle" type="number"
                    value={this.props.items[this.props.index][2]} readOnly={true}/>
                &emsp;&emsp;
                <input className="inputStyle" type="number" 
                    value={this.props.items[this.props.index][3]} readOnly={true}/>
            </div> 
        );
    }
    handleChange(){
        this.props.check(this.props.index);
    }
}
export default Item;