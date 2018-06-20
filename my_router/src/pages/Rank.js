import React,{Component} from 'react';
import {view as TopMenu} from '../menu/TopBar'; 

class Rank extends Component{
    render(){
        return(
            <div>
                <TopMenu/>
                <h1>Rank</h1>
            </div>
        );
    }

}
export default Rank;