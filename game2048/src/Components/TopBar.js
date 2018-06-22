import React from 'react';
import {Link} from 'react-router-dom';
import './Game.css';

const view=()=>{
    return(
        <header className="TopBar">
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/rank'>Rank</Link></li>
        </header>
    );
}
            
export {view};