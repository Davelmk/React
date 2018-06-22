import React,{Component} from 'react';
import {view as TopBar} from './TopBar'; 

class Rank extends Component{
    render(){
        return(
            <div>
                <TopBar/>
                <h1>Rank</h1>
            </div>
        );
    }

}
export default Rank;