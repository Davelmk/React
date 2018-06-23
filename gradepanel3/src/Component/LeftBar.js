import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Style/left.css'

class LeftBar extends Component{
    render(){
        return(
            <header className="LeftBar">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/checked'>Checked</Link></li>
                <li><Link to='/unchecked'>UnChecked</Link></li>
            </header>
        );
    }
}
            
export default LeftBar;