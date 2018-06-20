import React from 'react';
import {Link} from 'react-router-dom';

const view=()=>{
    return(
        <header>
            {/* <nav>
                <ul> */}
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/rank'>Rank</Link></li>
                {/* </ul>
            </nav> */}
         </header>
    );
}
            
export {view};