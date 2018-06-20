import React,{Component} from 'react';
import {view as TopMenu} from '../menu/TopBar'; 

class Home extends Component{
    render(){
        return(
            <div>
                <TopMenu/>
                <h1>Home</h1>
            </div>
        );
    }

}
export default Home;