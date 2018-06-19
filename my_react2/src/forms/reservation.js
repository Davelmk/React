import React,{Component} from 'react';

class Reservation extends Component{
    constructor(props){
        super(props);
        this.state={
            isGoing:false,
            numberOfGuests:2
        }
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target=event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name=target.name;
        this.setState({[name]:value});
    }
    render(){
        return(
            <form>
                <label>
                    isGoing:
                    <input 
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Number Of Guests:
                    <input
                    name="nameOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange}/>
                </label>           
            </form>
        );
    }
}
export default Reservation;